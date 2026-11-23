# medicallatin.com

Website of **LinguaLatina**: medical Latin lessons with Halyna Shpynta, in Ukrainian
(`/`) and English (`/en/`). Live at <https://medicallatin.com>.

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
| `site/assets/css/site.css` | All styles; colour tokens for the light theme, the dark theme and each course's shade are at the top. |
| `site/assets/js/term.js` | The hero's «Розібрати інший термін» switcher. |
| `site/assets/js/theme.js` | The light/dark switch in the header. The site opens light for everyone; dark only when chosen. Loaded in `<head>` without `defer`, so a saved choice applies before the page paints. |
| `site/assets/img/deco/` | The faint Rome skyline and library silhouettes, drawn into the page with CSS masks. |
| `site/_headers` | Cloudflare Pages headers: a self-only Content-Security-Policy, and a long cache for fonts only. |
| `site/404.html` | Bilingual "page not found". |
| `site/sitemap.xml`, `robots.txt` | For search engines. |
| [`docs/`](docs/) | Plan, credits and form draft; not published. |

## Editing content

Each page is a complete HTML file, so the header, footer and booking bar are repeated
in all six pages. When you change one, change it everywhere.

- **Prices** appear only in the Ukrainian `index.html` (overview) and
  `courses/index.html` (details). Keep the two consistent. Don't add prices to `/en/`.
- **Dates** (the main course's 11.01.2027 start, the express groups on 8.02, 22.02 and
  9.03.2027, and the 30.01 booking deadline) appear in `index.html`,
  `courses/index.html`, `en/index.html` and `en/courses/index.html`.
- **Course colours:** each course block carries `data-course="main"`, `express`,
  `pronunciation`, `trial` or `individual`, which picks its shade. Use the same value
  in the home offers list, the courses page index and the course section.
- **Latin** is always wrapped in `<span lang="la">…</span>`; that sets it in EB Garamond
  and tells screen readers to switch language.
- **Hero terms** live in `<template>` elements inside `.term` on both home pages.
- **Contacts** (Instagram, Telegram, WhatsApp, `info@medicallatin.com`) are in the
  "Як записатися" / "How to sign up" section of both home pages. The Direct link
  also appears in every page's header and booking bar.

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
| `GOOGLE_SCHOLAR_URL` | Her Google Scholar profile. |

## Publishing (Cloudflare Pages)

The site is published by **Cloudflare Pages**, from the Cloudflare account that holds
`medicallatin.com`. Every push to `main` publishes it within a minute or two, and
other branches get preview links. The complete step-by-step guide, with the current
settings and every DNS record, is in [docs/deployment.md](docs/deployment.md).
Pages settings: framework preset **None**, build command **empty**, build output
directory **`site`**.

Email for `info@medicallatin.com` is forwarded to Halyna's mailbox by Cloudflare
Email Routing; setup and the mail DNS records (MX, SPF, DKIM, DMARC) are in
[step 9 of the guide](docs/deployment.md#9-set-up-infomedicallatincom).

Still to do on the live site:
- fill in or remove every placeholder;
- have Halyna confirm the stress marks and part meanings of the three hero terms
  (*endocarditis*, *tachycardia*, *chlorodontia*).
