module.exports = function (eleventyConfig) {
  // Pass assets through to _site unchanged
  eleventyConfig.addPassthroughCopy('src/assets');

  // Filters
  const today = new Date().toISOString().slice(0, 10);
  const isPrevious = (e) =>
    e.status !== 'hidden' && (e.endDate ?? e.startDate) < today;
  const isUpcoming = (e) =>
    e.status !== 'hidden' && (e.endDate ?? e.startDate) >= today;

  eleventyConfig.addFilter('upcomingEvents', (events) =>
    events
      .filter(isUpcoming)
      .sort((a, b) => a.startDate.localeCompare(b.startDate))
  );

  eleventyConfig.addFilter('previousEventsByYear', (events) => {
    const groups = {};
    for (const event of events.filter(isPrevious)) {
      const year = event.startDate.slice(0, 4);
      if (!groups[year]) groups[year] = [];
      groups[year].push(event);
    }
    return Object.entries(groups)
      .sort(([a], [b]) => b - a)
      .map(([year, items]) => ({
        year,
        events: items
          .slice()
          .sort((a, b) => b.startDate.localeCompare(a.startDate)),
      }));
  });

  eleventyConfig.addFilter('indexByYear', (arr) => {
    return arr.reduce((acc, item) => {
      acc[String(item.year)] = item;
      return acc;
    }, {});
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
