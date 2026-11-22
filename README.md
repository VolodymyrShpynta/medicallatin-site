# medicallatin.com

Website of **LinguaLatina**: medical Latin lessons with Halyna Shpynta, in Ukrainian
(`/`) and English (`/en/`).

- Plain HTML and CSS with two small scripts; no build step and no dependencies.
- No analytics, trackers, cookies or third-party scripts. Fonts and images are
  self-hosted. The visitor's light/dark choice stays in their browser's local
  storage.
- Design decisions: [docs/design-plan.md](docs/design-plan.md). Font and image
  sources: [docs/credits.md](docs/credits.md). Booking-form questions:
  [docs/google-form.md](docs/google-form.md).

## Preview locally

```bash
npx serve site
```

Open the printed address (usually <http://localhost:3000>). Root-relative links
(`/courses/`, `/assets/...`) need a server; opening the HTML files directly won't work.

To check the site exactly as Cloudflare will serve it, with `site/_headers` and the
404 page applied, run `npx wrangler pages dev site` and open <http://127.0.0.1:8788>.

## Structure

| Path | What it is |
|---|---|
| [`site/`](site/) | Everything that is published. |
| `site/index.html`, `courses/`, `about/` | Ukrainian pages, with prices. |
| `site/en/…` | English pages, same structure, **no prices**. |
| `site/assets/css/site.css` | All styles; colour tokens for light and dark mode are at the top. The dark values appear twice (device setting and the visitor's choice): change both. |
| `site/assets/js/term.js` | The hero's «Розібрати інший термін» switcher. |
| `site/assets/js/theme.js` | The light/dark switch in the header. Loaded in `<head>` without `defer`, so a saved choice applies before the page paints. |
| `site/_headers` | Cloudflare Pages headers: a self-only Content-Security-Policy, and a long cache for fonts only. |
| `site/404.html` | Bilingual "page not found". |
| `site/sitemap.xml`, `robots.txt` | For search engines. |
| [`docs/`](docs/) | Plan, credits and form draft; not published. |

## Editing content

Each page is a complete HTML file, so the header, footer and booking bar are repeated
in all six pages. When you change one, change it everywhere.

- **Prices** appear only in the Ukrainian `index.html` (overview) and
  `courses/index.html` (details). Keep the two consistent. Don't add prices to `/en/`.
- **The next group start** (11.01.2027) appears in `index.html`, `courses/index.html`
  and `en/courses/index.html`.
- **Latin** is always wrapped in `<span lang="la">…</span>`; that sets it in EB Garamond
  and tells screen readers to switch language.
- **Hero terms** live in `<template>` elements inside `.term` on both home pages.

### Placeholders

Missing content is marked with `data-placeholder="NAME"` and drawn with a dashed red
outline so it can't ship unnoticed. List the remaining ones with:

```bash
grep -rn "data-placeholder" site
```

When you fill one in, remove the `data-placeholder` attribute. For links, replace the
`#todo-…` `href` as well.

| Name | What's needed |
|---|---|
| `GOOGLE_FORM_UA_URL`, `GOOGLE_FORM_EN_URL` | Share links of the two Google Forms ([docs/google-form.md](docs/google-form.md)). |
| `EMAIL` | Halyna's email address (`href="mailto:…"`). |
| `GOOGLE_SCHOLAR_URL` | Her Google Scholar profile. |
| `LEVEL_TEST_PRICE` | Level test price (Ukrainian pages only). |
| `LEVEL_TEST_FORMAT` | Level test length and format. |
| `EXPRESS_NEXT_DATES` | Dates of the next express course. |

## Publishing (Cloudflare Pages)

The complete step-by-step guide is in [docs/deployment.md](docs/deployment.md). In
short: the Pages project lives in **the Cloudflare account that holds
`medicallatin.com`**. Settings: framework preset **None**, build command **empty**,
build output directory **`site`**. Every push to `main` then publishes the site, and
other branches get preview links.

Before the first publish:
- fill in or remove every placeholder;
- have Halyna confirm the stress marks and part meanings of the three hero terms
  (*endocarditis*, *tachycardia*, *chlorodontia*).
