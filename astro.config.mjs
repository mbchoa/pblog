import { writeFile } from 'node:fs/promises';
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import matter from 'gray-matter';
import { heicToJpeg } from './src/plugins/heic.mjs';

const postsDir = new URL('./src/content/posts/', import.meta.url);

const legacyRedirects = {
  name: 'legacy-redirects',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const lines = readdirSync(postsDir)
        .filter((f) => f.endsWith('.md'))
        .map((f) => {
          const { data } = matter(readFileSync(new URL(f, postsDir), 'utf8'));
          const slug = f.replace(/\.md$/, '');
          return `/${new Date(data.date).getTime()} /posts/${slug}/ 301`;
        });
      await writeFile(new URL('_redirects', dir), `${lines.join('\n')}\n`);
    },
  },
};

export default defineConfig({
  site: 'https://michaelchoa.com',
  trailingSlash: 'ignore',
  markdown: {
    processor: satteri({ mdastPlugins: [heicToJpeg] }),
  },
  integrations: [legacyRedirects],
});
