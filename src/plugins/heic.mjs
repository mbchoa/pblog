import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import convert from 'heic-convert';
import sharp from 'sharp';

const MAX_SIZE = 1600;

const cacheDir = fileURLToPath(new URL('../../node_modules/.astro/heic/', import.meta.url));
const pending = new Map();

const isHeic = (url) => /\.hei[cf]$/i.test(url.split(/[?#]/)[0]);

async function load(url, baseDir) {
  if (URL.canParse(url)) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  }
  return readFile(path.resolve(baseDir, decodeURI(url)));
}

async function toJpeg(input) {
  const hash = createHash('sha256').update(`${MAX_SIZE}:`).update(input).digest('hex').slice(0, 16);
  const out = path.join(cacheDir, `${hash}.jpg`);
  if (existsSync(out)) return out;
  if (!pending.has(out)) {
    pending.set(out, (async () => {
      const jpeg = await convert({ buffer: input, format: 'JPEG', quality: 0.95 });
      const resized = await sharp(Buffer.from(jpeg))
        .rotate()
        .resize({ width: MAX_SIZE, height: MAX_SIZE, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85 })
        .toBuffer();
      await mkdir(cacheDir, { recursive: true });
      await writeFile(out, resized);
      return out;
    })());
  }
  return pending.get(out);
}

export const heicToJpeg = {
  name: 'heic-to-jpeg',
  async image(node, ctx) {
    if (!node.url || !isHeic(node.url) || !ctx.fileURL) return;
    const baseDir = path.dirname(fileURLToPath(ctx.fileURL));
    const jpeg = await toJpeg(await load(node.url, baseDir));
    const rel = path.relative(baseDir, jpeg).split(path.sep).join('/');
    ctx.setField(node, 'url', rel.startsWith('.') ? rel : `./${rel}`);
  },
};
