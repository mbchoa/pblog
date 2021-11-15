const axios = require('axios');
const CleanCss = require('clean-css');
const heicConvert = require('heic-convert');
const format = require('date-fns/format');

module.exports = function (eleventyConfig) {
	// Minifies CSS
	eleventyConfig.addFilter('cssmin', function(code) {
    return new CleanCss({}).minify(code).styles;
  });

	// Date formatting (human readable)
	eleventyConfig.addFilter('postTitle', (dateISOString) => {
    return format(new Date(dateISOString), "MMMM do 'at' h:mmaa")
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter('postUrlSlug', (dateISOString) => {
		return new Date(dateISOString).getTime();
  });

  eleventyConfig.addShortcode('heicImage', async (url, ...imgAttr) => {
    const outputBuffer = await axios.get(url, { responseType: 'arraybuffer' })
      .then(async (response) => {
        return await heicConvert({
          buffer: response.data,
          format: 'JPEG',
          quality: 1
        });
      });
    
    const jpegBase64 = outputBuffer.toString('base64');
    const attributesString = imgAttr.reduce((output, attribute) => `${output} ${attribute}`, '');
    console.log(attributesString);
    return `<img src="data:image/jpeg;base64, ${jpegBase64}" ${attributesString}>`;
  });

  // Instructs Eleventy compilation to ignore processing the following
  // directories and only copy them as is
  eleventyConfig.addPassthroughCopy({'static/icons': '/'});
  eleventyConfig.addPassthroughCopy('admin');
};
