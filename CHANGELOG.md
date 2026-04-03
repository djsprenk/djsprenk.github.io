# Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- `src/_data/milestones.json` — new data file for career milestones (2020–2024) separated from events, covering DJ debut, certifications, Mixcloud growth, and first regional/international performances
- Full past events list in `src/_data/events.json` scraped verbatim from djsprenk.com, covering 2021–2025 with ~58 entries across all years; all 2025 events moved from upcoming to previous since they have passed
- `previousEventsByYear` Eleventy filter in `.eleventy.js` to group and sort past events by year descending, with events within each year sorted most-recent-first
- URLs for known event organizers across multiple entries: Interfusion Festival, Zouk Heat, RVA Zouk Movement, BraZouky, Zouk Conexão, Zouk Pirates, Havana Club Social, Fuego y Candela
- Social and payment platform brand color tokens in `tokens.css` (`--color-mixcloud`, `--color-soundcloud`, `--color-instagram`, `--color-facebook`, `--color-patreon`, `--color-venmo`, `--color-paypal`) and global `a[href*="…"]` rules in `base.css` so any link to these platforms is automatically colored site-wide

### Changed

- `src/events/previous.njk` — past events now grouped under `<h2>` year headers (2025 → 2021) with events sorted most-recent-first within each year; milestones section now driven by `milestones.json` instead of hardcoded HTML
- `src/events/upcoming.njk` — event name rendered as a link when a `url` field is present, replacing the separate "Details" link
- `src/events/previous.njk` — event names rendered as links when a `url` field is present
- Content width capped at `--max-width-prose` (760px) on all pages for improved readability; homepage retains full `--max-width` (1100px) via a `wideLayout: true` frontmatter flag and `main.wide` CSS override

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
  `.css`, `.json`, `.md`, `.yml`) with `npm run format` and `npm run format:check`
- `.prettierrc` config (single quotes, 2-space indent, 80 char print width, HTML
  parser for `.njk`)
- `.prettierignore` excluding `_site/`, `node_modules/`, and `package-lock.json`
- `.editorconfig` for editor-level baseline (indent, line endings, final newline)
