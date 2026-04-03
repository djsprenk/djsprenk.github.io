# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # local dev server at http://localhost:8080 with hot reload
npm run build      # build to _site/
npm run format     # reformat all files with Prettier
npm run format:check  # check formatting without writing (used in CI)
```

## Architecture

This is an [Eleventy (11ty)](https://www.11ty.dev/) static site for djsprenk.com, a DJ portfolio. Source is in `src/`, output builds to `_site/` (gitignored). Deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

### Templating

All pages use `src/_includes/layouts/base.njk` as their layout, declared via frontmatter (`layout: layouts/base.njk`). Pages are `.njk` (Nunjucks) or `.md` (Markdown + Liquid). The base layout contains the full nav, footer, and all CSS/JS imports.

### Data

Global data files in `src/_data/` are automatically available in all templates:
- `events.json` — all events; each has a `status` field (`"upcoming"` or `"previous"`) and optional `featured: true` for homepage display
- `services.json` — the 6 service offerings looped on the services page
- `site.json` — global metadata and social media URLs (referenced as `site.social.*`)

### CSS

Loaded in order in `base.njk`: `tokens.css` → `reset.css` → `base.css` → component files.

**`tokens.css` is the single source of truth for all design decisions** — colors, fonts, spacing, and layout variables. Changing tokens reskins the entire site. Component CSS files live in `src/assets/css/components/`.

### Forms

Contact (`/contact`) and Feedback (`/feedback`) forms post to Formspree. The form `action` URLs contain `YOUR_FORM_ID` / `YOUR_FEEDBACK_FORM_ID` placeholders that must be replaced with real Formspree endpoint IDs before the forms will work.

### Eleventy config

`.eleventy.js` configures input/output directories, passes `src/assets/` through to `_site/` unchanged, and registers a `{% year %}` shortcode used in the footer copyright.