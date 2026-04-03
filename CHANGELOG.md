# Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

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
