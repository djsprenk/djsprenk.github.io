const fs = require('fs');
const path = require('path');

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

  eleventyConfig.addFilter('formatDateRangeShort', (startDate, endDate) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const parse = (str) => new Date(str + 'T00:00:00Z');
    const s = parse(startDate);
    const e = endDate ? parse(endDate) : s;
    const sMonth = months[s.getUTCMonth()],
      eMonth = months[e.getUTCMonth()];
    const sDay = s.getUTCDate(),
      eDay = e.getUTCDate();
    if (!endDate || startDate === endDate) return `${sMonth} ${sDay}`;
    if (s.getUTCMonth() === e.getUTCMonth()) return `${sMonth} ${sDay}–${eDay}`;
    return `${sMonth} ${sDay} – ${eMonth} ${eDay}`;
  });

  eleventyConfig.addFilter('formatDateRange', (startDate, endDate) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const parse = (str) => new Date(str + 'T00:00:00Z');
    const s = parse(startDate);
    const e = endDate ? parse(endDate) : s;
    const sMonth = months[s.getUTCMonth()],
      eMonth = months[e.getUTCMonth()];
    const sDay = s.getUTCDate(),
      eDay = e.getUTCDate();
    const sYear = s.getUTCFullYear(),
      eYear = e.getUTCFullYear();
    if (!endDate || startDate === endDate) return `${sMonth} ${sDay}, ${sYear}`;
    if (sYear === eYear && s.getUTCMonth() === e.getUTCMonth())
      return `${sMonth} ${sDay}–${eDay}, ${sYear}`;
    if (sYear === eYear)
      return `${sMonth} ${sDay} – ${eMonth} ${eDay}, ${sYear}`;
    return `${sMonth} ${sDay}, ${sYear} – ${eMonth} ${eDay}, ${eYear}`;
  });

  eleventyConfig.addFilter('indexByYear', (arr) => {
    return arr.reduce((acc, item) => {
      acc[String(item.year)] = item;
      return acc;
    }, {});
  });

  // Shortcodes
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode('icon', (name) => {
    const filePath = path.join(__dirname, 'src/_includes/icons', `${name}.svg`);
    return fs.readFileSync(filePath, 'utf8');
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
  };
};
