module.exports = function (eleventyConfig) {
  // Pass assets through to _site unchanged
  eleventyConfig.addPassthroughCopy('src/assets');

  // Shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
  };
};
