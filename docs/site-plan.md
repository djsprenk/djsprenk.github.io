# djsprenk.com — Site Rebuild Plan

## Context

djsprenk.com is currently a WordPress.com hosted DJ portfolio site. The goal is to migrate it into this git repo and host it on GitHub Pages, using the migration as an opportunity for a full design overhaul. The repo starts empty.

---

## Recommended Tech Stack

| Decision | Choice | Reason |
|---|---|---|
| Framework | **Eleventy (11ty)** | Simplest JS SSG, zero client JS, clean HTML output |
| Templates | **Nunjucks** | Readable syntax, clean layout inheritance for shared nav/footer |
| Styling | **CSS custom properties** | Change `tokens.css` → entire site retheming, no preprocessor needed |
| Forms | **Formspree** (free tier) | Handles both forms (50 submissions/month), zero code, spam filtering |
| Deployment | **GitHub Actions** | Required for non-Jekyll SSGs on GitHub Pages |
| Content data | **JSON in `_data/`** | Events and services editable without touching templates |

### GitHub Pages Configuration
- GitHub Actions workflow builds Eleventy (`npm run build`) and pushes `_site/` to a `gh-pages` branch
- GitHub Pages configured to serve from `gh-pages` branch
- Custom domain `djsprenk.com` set via `CNAME` file in `_site/`

---

## Site Inventory

### Pages (11 total)

1. **Homepage** — hero (tagline + bg image), 3 featured event cards
2. **About** — profile photo, bio sections (background, DJ journey, teaching focus)
3. **Services** — 6 services: Live DJ, Custom Sets, J&J DJing, Remote DJ, Set Downloads, DJ Classes
4. **Music Policies** — text-heavy policy doc with 6 sections
5. **Courses** — gateway listing page
6. **DJ Cheat Codes** — course detail: curriculum (5 modules), format (2 Zoom sessions), "course ended" status
7. **Upcoming Events** — 9+ events for 2025 with date range + location
8. **Previous Events** — historical archive 2020-2024, milestone callouts
9. **Contact** — form: name, email, message (all required)
10. **Feedback** — form: name (opt), role dropdown (opt), email (opt), testimonial, consent checkbox
11. **Media Kit** (`/media-kit`) — short bio, 6 downloadable headshots (image grid with download links), 4 action/performance photos, usage policy note, contact/payment links (Venmo, PayPal in addition to social platforms)

### Nav Structure

```
About ▾ (About, Services, Music Policies)
Music → (Mixcloud, SoundCloud external links)
Courses
Events ▾ (Upcoming, Previous)
Contact ▾ (Contact, Feedback)
```

### Key Components to Build

- Responsive nav with dropdown submenus + mobile hamburger
- Hero section (background image + branding)
- Event cards (image, name, date range, location)
- Contact form + Feedback form (via Formspree)
- Footer with 5 social links (Mixcloud, SoundCloud, Instagram, Facebook, Patreon)
- Audio embeds (Mixcloud/SoundCloud iframes)
- Media kit image grid with downloadable headshots and action photos (6 headshots + 4 gallery photos)

---

## Project Structure

```
djsprenk.com/
├── .github/workflows/deploy.yml       # Actions: build + push to gh-pages
├── docs/
│   └── site-plan.md                   # This file
├── src/
│   ├── _includes/layouts/
│   │   └── base.njk                   # Shared shell: <head>, nav, footer, CSS imports
│   ├── _data/
│   │   ├── events.json                # All events (upcoming + previous, with a status flag)
│   │   ├── services.json              # 6 service items
│   │   └── site.json                  # Global metadata: title, tagline, social links
│   ├── assets/
│   │   ├── css/
│   │   │   ├── tokens.css             # ALL design decisions live here (colors, fonts, spacing)
│   │   │   ├── reset.css
│   │   │   ├── base.css
│   │   │   └── components/           # nav.css, hero.css, cards.css, forms.css, footer.css
│   │   ├── images/
│   │   └── js/nav.js                  # Hamburger menu toggle only
│   ├── index.njk                      # Homepage
│   ├── about.njk
│   ├── services.njk
│   ├── music-policies.md              # Markdown — rendered via layout
│   ├── courses.njk
│   ├── dj-cheat-codes.njk
│   ├── events/
│   │   ├── upcoming.njk              # Filters events.json for upcoming
│   │   └── previous.njk              # Filters events.json for previous
│   ├── contact.njk
│   ├── feedback.njk
│   └── media-kit.njk                 # Image grid with download links
├── .eleventy.js                       # Input: src/, Output: _site/, passthrough assets/
├── package.json
└── package-lock.json
```

### CSS Architecture

`tokens.css` is the single source of truth for visual identity. A full redesign means editing this one file:

```css
:root {
  --color-primary: ...;
  --color-bg: ...;
  --color-surface: ...;
  --color-text: ...;
  --font-display: ...;
  --font-body: ...;
  --space-4: 1rem;
  --space-8: 2rem;
  --max-width: 1100px;
}
```

---

## Implementation Phases

### Phase 1 — Scaffolding
1. `npm init` + install `@11ty/eleventy`
2. `.eleventy.js` config (input/output dirs, passthrough copy for `assets/`)
3. `base.njk` with nav skeleton and empty footer
4. `index.njk` stub — verify `npm start` hot-reloads locally
5. `.github/workflows/deploy.yml` — confirm GitHub Pages serves the stub
6. Add GitHub remote and push

### Phase 2 — All 11 Pages (HTML structure, no styling)

Priority order:
1. Homepage (hero stub + event card grid)
2. About
3. Services (loop over `services.json`)
4. Upcoming Events (loop over `events.json`)
5. Contact + Feedback (Formspree forms wired up and tested)
6. Courses + DJ Cheat Codes
7. Music Policies (Markdown)
8. Previous Events
9. Media Kit (image grid, download links, bio, usage policy)

### Phase 3 — CSS Token Layer

Write `tokens.css` with color palette, type scale, and spacing. Add `reset.css` and `base.css`. Goal: clean, readable unstyled document.

### Phase 4 — Component Styling (priority order by visual impact)

1. `nav.css` + `nav.js` (hamburger, dropdowns)
2. `hero.css`
3. `cards.css` (event cards, service cards, media kit photo grid)
4. `forms.css`
5. `footer.css`

### Phase 5 — Polish

- Real images: hero background, profile photo, event images, media kit photos
- Audio embeds (Mixcloud/SoundCloud iframes)
- Responsive breakpoints review
- Accessibility pass (focus states, aria labels, form labels)
- Meta tags, Open Graph, favicon
- `CNAME` file for custom domain

---

## Verification Checklist

- [ ] Local: `npm start` → `http://localhost:8080`, navigate all 11 pages
- [ ] Forms: submit Contact and Feedback forms, confirm email delivery via Formspree
- [ ] Deploy: push to `main`, GitHub Actions run green, site live on GitHub Pages URL
- [ ] Custom domain: CNAME + DNS configured, `djsprenk.com` resolves correctly
