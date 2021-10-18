const CleanCss = require('clean-css');
const format = require('date-fns/format');

module.exports = function (eleventyConfig) {
	// Minifies CSS
	eleventyConfig.addFilter('cssmin', function(code) {
    return new CleanCss({}).minify(code).styles;
  });

	// Date formatting (human readable)
	eleventyConfig.addFilter('postTitle', (dateISOString) => {
    return format(new Date(dateISOString), "MMMM do 'at' hh:mmaaa ");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter('postUrlSlug', (dateISOString) => {
		return new Date(dateISOString).getTime();
  });

  // Instructs Eleventy compilation to ignore processing the following
  // directories and only copy them as is
  eleventyConfig.addPassthroughCopy('images/uploads');
  eleventyConfig.addPassthroughCopy('admin');
};
