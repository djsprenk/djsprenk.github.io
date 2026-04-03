module.exports = function (eleventyConfig) {
  // Pass assets through to _site unchanged
  eleventyConfig.addPassthroughCopy('src/assets');

  // Filters
  eleventyConfig.addFilter('previousEventsByYear', (events) => {
    const groups = {};
    for (const event of events.filter((e) => e.status === 'previous')) {
      const year = event.startDate.slice(0, 4);
      if (!groups[year]) groups[year] = [];
      groups[year].push(event);
    }
    return Object.entries(groups)
      .sort(([a], [b]) => b - a)
      .map(([year, items]) => ({
        year,
        events: items.slice().sort((a, b) => b.startDate.localeCompare(a.startDate)),
      }));
  });

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
