# Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.3.0] - 2026-04-03

### Added

- Previous events page redesigned as a vertical timeline with year markers (pink
  circle + label), per-event tick marks, and year-grouped achievements callout
  block inline between the year header and events
- `indexByYear` Eleventy filter to look up milestone data by year in templates
- 2025 milestone "First event in Europe" added to `milestones.json`

### Changed

- Milestone wording: "First international DJ performance" → "First outside-US
  performance" (2022); "First West Coast DJ performance" → "First event on the
  West Coast" (2023)
- Standalone Milestones section removed from previous events page — achievements
  now appear inline in the timeline
- `events.json` data quality pass: fixed 3 out-of-order entries (Boston
  International Zouk Festival, Zoukchata Social, Julie Rozen Weekender),
  standardized recurring event names (NY SBKZ Congress, Zouk Pirates Weekender
  series, YYC Zouk Marathon), and normalized inconsistent URLs (Zouk Pirates www
  prefix, trailing slashes, Zouk Heat path)
- Timeline event dots changed from grey horizontal ticks to white circles with a
  border, matching the year-label dot style
- Both event pages now stack to a single column on small screens, with location
  beneath the event title
- Timeline event notes styled in brand yellow with a `·` separator instead of an
  em dash

## [0.2.0] - 2026-04-03

### Added

- `docs/wishlist.md` — feature checklist for tracking planned site improvements
- `text-transform: uppercase` on headings and nav logo to avoid a broken
  lowercase `n` glyph in the Brick Riot font
- `/version` slash command at `.claude/commands/version.md` for bumping semver,
  updating `package.json`/`package-lock.json`, and promoting `[Unreleased]`
  changelog entries to a dated release block
- Hero background image (Atlanta 2022 action shot) with dark overlay for
  legibility; headshot 2023 added to media kit headshots grid and gallery
- Hero `h1` styled with solid brand yellow and hard brand-pink drop shadow (no
  blur)
- Calgary 2023 and Interfusion 2022 action shots added to media kit gallery
- Media kit overhauled: disclaimer paragraph, Bio section, Socials list (inline
  with pipe separators, platform-colored names), Media section with Headshots
  and Gallery subsections; Contact & Payment section removed

### Changed

- Hero is now full-bleed (spans full viewport width, flush with nav) with bottom
  margin separating it from Featured Events
- Hero `h1` uses solid brand yellow instead of the gradient applied to the nav
  logo
- Hero button hover lightens via `brightness` instead of fading opacity; outline
  button border set to white
- Tagline updated to "Delivering electric, genre-bending, Brazilian Zouk mixes
  since 2020."

## [0.1.0] - 2026-04-03

### Added

- `src/_data/milestones.json` — new data file for career milestones (2020–2024)
  separated from events, covering DJ debut, certifications, Mixcloud growth, and
  first regional/international performances
- Full past events list in `src/_data/events.json` scraped verbatim from
  djsprenk.com, covering 2021–2025 with ~58 entries across all years; all 2025
  events moved from upcoming to previous since they have passed
- `previousEventsByYear` Eleventy filter in `.eleventy.js` to group and sort
  past events by year descending, with events within each year sorted
  most-recent-first
- URLs for known event organizers across multiple entries: Interfusion Festival,
  Zouk Heat, RVA Zouk Movement, BraZouky, Zouk Conexão, Zouk Pirates, Havana
  Club Social, Fuego y Candela
- Social and payment platform brand color tokens in `tokens.css`
  (`--color-mixcloud`, `--color-soundcloud`, `--color-instagram`,
  `--color-facebook`, `--color-patreon`, `--color-venmo`, `--color-paypal`) and
  global `a[href*="…"]` rules in `base.css` so any link to these platforms is
  automatically colored site-wide
- Add version command

### Changed

- `src/events/previous.njk` — past events now grouped under `<h2>` year headers
  (2025 → 2021) with events sorted most-recent-first within each year;
  milestones section now driven by `milestones.json` instead of hardcoded HTML
- `src/events/upcoming.njk` — event name rendered as a link when a `url` field
  is present, replacing the separate "Details" link
- `src/events/previous.njk` — event names rendered as links when a `url` field
  is present
- Content width capped at `--max-width-prose` (760px) on all pages for improved
  readability; homepage retains full `--max-width` (1100px) via a
  `wideLayout: true` frontmatter flag and `main.wide` CSS override
- `--font-display` updated to `'Brick Riot', Georgia, serif` so all headings use
  the same font as the nav logo

- `CLAUDE.md` — guidance file for Claude Code covering commands, architecture,
  data files, CSS token system, Formspree placeholders, and SSH remote setup
- `/changelog` slash command at `.claude/commands/changelog.md` for adding
  changelog entries consistently
- Brick Riot custom font (`BrickRiotRegular.ttf`) applied to the nav logo only
  via `src/assets/css/fonts.css`

## [0.0.0] - 2026-04-02

### Added

- `docs/site-plan.md` — initial site rebuild plan covering tech stack, site
  inventory, project structure, and implementation phases
- `.gitignore` — ignores Eleventy output, node_modules, macOS system files, and
  .env
- Eleventy (11ty) scaffolding: `package.json`, `.eleventy.js`, GitHub Actions
  deploy workflow (`.github/workflows/deploy.yml`)
- Shared layout `src/_includes/layouts/base.njk` with responsive nav (dropdown
  submenus, mobile hamburger) and footer with social links
- Global data files: `src/_data/site.json`, `src/_data/events.json`,
  `src/_data/services.json`
- CSS foundation: `tokens.css` (design variables), `reset.css`, `base.css`
- All 11 pages: Homepage, About, Services, Music Policies, Courses, DJ Cheat
  Codes, Upcoming Events, Previous Events, Contact, Feedback, Media Kit
- Component styles: `hero.css` (hero section + button variants), `cards.css`
  (event cards, service list, event list, photo grid), `forms.css` (inputs,
  selects, checkbox, submit button)
- Prettier for consistent code formatting across all file types (`.js`, `.njk`,
  `.css`, `.json`, `.md`, `.yml`) with `npm run format` and
  `npm run format:check`
- `.prettierrc` config (single quotes, 2-space indent, 80 char print width, HTML
  parser for `.njk`)
- `.prettierignore` excluding `_site/`, `node_modules/`, and `package-lock.json`
- `.editorconfig` for editor-level baseline (indent, line endings, final
  newline)
