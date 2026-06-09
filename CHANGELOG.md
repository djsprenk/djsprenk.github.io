# Changelog

All notable changes to this project will be documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Events page now shows _To be announced!_ placeholder when there are no
  upcoming events instead of an empty list

## [1.2.0] - 2026-06-07

### Added

- Three new gallery photos to the media kit (NYC 2025, Zouk Heat 2023, Toronto
  Zouk Lambada 2023)

## [1.1.0] - 2026-05-13

### Added

- Skip-to-main-content link for keyboard and screen-reader users
- Global `:focus-visible` ring using brand yellow for consistent keyboard focus
  indicator across all interactive elements
- `prefers-reduced-motion` support: all CSS transitions/animations suppressed
  and hero parallax disabled when user has reduced motion enabled
- `aria-label="Main"` on `<nav>` for landmark navigation
- Required-fields legend on contact form with visually-hidden `.sr-only` utility
  class
- Download overlay on media kit photo grid, visible on hover/focus with correct
  `download` attribute
- `Person` JSON-LD schema on About page with `sameAs` social links and
  `knowsAbout` fields for entity disambiguation
- `MusicEvent` JSON-LD schema on Events page, generated from existing
  `events.json` data, with `eventStatus` and `eventAttendanceMode` for Google
  Rich Results eligibility
- `Course` JSON-LD schema on DJ Cheat Codes page linked back to the Person
  entity via `provider`
- `<meta name="description">` on all pages with per-page frontmatter field and
  site tagline fallback
- Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`,
  `og:type`) and Twitter Card tags on all pages via `base.njk`
- `<link rel="canonical">` on all pages
- `site.url` and `site.ogImage` fields in `site.json` as single source of truth
  for absolute URLs and default share image
- `/robots.txt` allowing all crawlers with `Sitemap:` directive
- `/sitemap.xml` auto-generated from `collections.all`
- `formatDateRange` and `formatDateRangeShort` Eleventy filters for
  human-readable event date ranges
- "By the Numbers" stats section on About page surfacing Mixcloud streaming
  milestones as E-E-A-T signals
- Submenu keyboard navigation: ArrowDown opens submenu, ArrowUp/Down cycle
  items, Escape closes and returns focus
- `aria-haspopup` and `aria-expanded` on About nav trigger; `role="menu"` /
  `role="menuitem"` on submenu
- `title` attribute on Mixcloud iframe embeds
- Visually-hidden "opens in new tab" announcement on all `target="_blank"` links
  via CSS `::after`; footer icon `aria-label` values updated to include same
  text

### Changed

- Brand pink updated from `#c90d5c` to `#ff2d78` to meet AA contrast (4.5:1) for
  small text on dark backgrounds
- Focus outline on form inputs changed from `outline: none` to yellow `outline`
  using `:focus-visible`
- Mobile nav `openMenu()` now moves focus to first nav link; `closeMenu()`
  returns focus to toggle button
- Event dates on upcoming cards formatted as human-readable ranges (e.g. "June
  5–7, 2026")
- Timeline event meta now shows `📅 {date} 📍 {location}` with date formatted
  via `formatDateRangeShort`
- `<body class="...">` pattern replaces `<body{% if %}>` to fix Prettier HTML
  parse error
- Milestone achievements removed from events timeline rendered output (data
  retained in `milestones.json`)
- Per-page `description` frontmatter added to all pages

## [1.0.3] - 2026-05-09

### Fixed

- Renamed `.footer-social` CSS class to `.footer-links` to prevent ad blockers
  from hiding the footer based on the class name

## [1.0.2] - 2026-05-09

### Fixed

- `.gitignore` `Icon?` pattern narrowed to `Icon[\r]` so it no longer matches
  the `src/_includes/icons/` directory; SVG icon files are now committed and
  available at build time on GitHub Pages

## [1.0.1] - 2026-05-09

### Fixed

- Social icons now inline correctly at build time via an `{% icon "name" %}`
  Eleventy shortcode (reads SVG from disk) replacing
  `{% include "icons/name.svg" %}`, which Nunjucks could not resolve for
  non-template file extensions

## [1.0.0] - 2026-05-09

### Added

- Deployed using GitHub pages to djsprenk.com
- Always Smile font (`AlwaysSmile.woff2`) registered and applied as the nav logo
  display font via `--font-display`
- Media kit Socials section now shows bundled brand SVG icon beside each
  platform URL (e.g. Mixcloud logo + `mixcloud.com/djsprenk`); icons are
  brand-colored, text stays white
- Splash page: hero background image extends behind a transparent header and
  footer so the photo fills the full viewport; header/footer regain solid
  background when the mobile menu is open
- Splash page: text-shadow on nav links and footer copyright, drop-shadow on
  footer SVG icons for legibility over the background image; nav logo excluded
- Header `box-shadow` on all non-splash pages for subtle depth

### Changed

- Footer social icons switched from Font Awesome CDN to locally bundled Simple
  Icons SVGs (`{% include "icons/[name].svg" %}`), eliminating the CDN
  dependency that caused icons to not render on production
- Media kit Socials updated from `@djsprenk` handle text to full platform URL
  (e.g. `mixcloud.com/djsprenk`)
- Hero h1 changed from pink/yellow gradient to solid white for legibility over
  the background photo
- Footer copyright "DJ SPRENK" now uses the Always Smile display font in
  all-caps grey, matching the nav logo style without the gradient

### Removed

- Brick Riot font removed from `fonts.css`, `tokens.css`, and font files deleted

## [0.7.0] - 2026-05-08

### Added

- Footer social links replaced with Font Awesome brand icons (white by default,
  brand color on hover) for a cleaner, more compact footer
- Courses page image (DJ Cheat Codes square graphic from Cloudinary)
- DJ Cheat Codes Part 1 and Part 2 Patreon shop links on the courses page

### Changed

- Hero splash layout: footer is now in normal document flow sized to content;
  body uses flex column with `min-height: 100dvh` so the hero fills remaining
  viewport height via `flex: 1`; footer icons centered with copyright wrapping
  to its own line on mobile
- Hero h1 now uses the same pink-to-yellow gradient as the nav logo
  (`.brand-text`) instead of a solid yellow with drop shadow
- "Upcoming Events" hero button now includes an inline calendar SVG icon; `.btn`
  changed to `inline-flex` for icon/text alignment
- Music nav item simplified from a dropdown (Mixcloud/SoundCloud submenu) to a
  plain link to `/music`
- Contact nav item simplified from a dropdown to a plain link to `/contact`
- Courses page content changed from a bulleted list to flat headings and
  paragraphs

### Removed

- Feedback page (`/feedback`) and its nav entry removed
- "This course has concluded" copy on courses page replaced with direct Patreon
  session links

## [0.6.0] - 2026-05-08

### Added

- `README.md` with project overview, dev commands, stack summary, and directory
  structure
- `LICENSE` — MIT license

### Changed

- Staatliches font added for all headings (`h1`–`h4`), timeline year labels, and
  event card titles; nav logo retains the existing display font
- Timeline milestone achievements restyled as inline timeline entries with a
  hollow pink circle dot and pink text, matching the visual rhythm of event rows
- Upcoming events page removed; homepage "Upcoming Events" button and previous
  events page "View upcoming events" link both now point to `/events`
- Event cards on the homepage now use the same horizontal layout
  (`card--horizontal`, `card-body` wrapper, `card-stack`) as the events page for
  visual consistency
- Upcoming event card images now use `object-fit: cover` and bleed edge-to-edge
  (negative margins cancel card padding) instead of contained with a dark
  background
- Horizontal card image reset to `margin: 0` and explicit `width: 40%` /
  `bottom: 0` so it fills the full card height and doesn't inherit the top-card
  negative margins

## [0.5.0] - 2026-04-03

### Added

- `/music` landing page with intro copy and "Start Here" Mixcloud embed section;
  `src/_data/featured_sets.json` drives up to 10 curated sets with optional
  per-set notes
- Mobile nav overlay
  - full-viewport menu opens below the sticky header, with auto-expanded
    submenus, a close button (×) that swaps with the hamburger
  - `Escape` key support, and event-delegated link listeners
- Media kit images: white background fill for transparent PNGs, subtle border,
  zoom/lift/brighten hover effect, `fl_attachment` Cloudinary flag on download
  links
- Footer and nav Music submenu social links now use `site.social.*` from
  `site.json` as the single source of truth

### Changed

- Mobile nav breakpoint changed from 768px to 640px
- Media kit moved under the "About" submenu in nav; redundant "About" submenu
  item removed
- Timeline event notes are now italic and `white-space: nowrap` so they drop as
  a whole unit rather than breaking mid-text
- `[hidden]` enforcement added to reset.css so CSS display rules can't
  accidentally override the HTML attribute

## [0.4.0] - 2026-04-03

### Added

- 📅 and 📍 icons added before date and location on upcoming event cards; 📍
  added before location in timeline event meta
- `/events` combined page with upcoming event cards and previous events
  timeline; nav "Events" link updated to point here
- `upcomingEvents` Eleventy filter replacing manual `status: "upcoming"` checks
  — events automatically move to previous at build time based on date
- About page headshot with brand pink/yellow duotone SVG filter using CSS
  variable colors
- `main ol` and unclassed `main ul` now render with proper list styles (reset
  was stripping them)
- Policies page (`/policies`) replacing Music Policies, with "Music Usage
  Policies" as a subsection — ready for additional policy sections

### Changed

- Brand colors updated: pink `#ff008c`, yellow `#fffc39`; `--color-secondary`
  token added for brand yellow
- H1 set to `--color-text`, H2 to `--color-secondary`, H3 to `--color-primary`
  globally
- Service item headings use `--color-secondary`, body text uses `--color-text`
- Footer copyright moved inline with social links; footer and header borders
  removed; nav and footer constrained to prose width
- Homepage "Featured Events" replaced with all upcoming events, sorted
  chronologically
- `status: "upcoming"` and `status: "previous"` fields removed from
  `events.json` — only `status: "hidden"` remains as a manual override
- Brand platform colors scoped to `.footer-social` and `.social-list` only
  (previously global)
- BZDC Jack & Jill DJ service links to official BZDC registry; Set Downloads
  links to `/policies`

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
