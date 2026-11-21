┌──────────────────┬───────────────────────────────────────────────────────────────────┐
│ On this page     │ Річний курс «Медична латина» 2026–2027                            │
│ (sticky, cols    │ Старт групи: 11.01.2027                                           │
│  1–3)            │                                                                   │
│ Річний курс      │  Lesson                                         Basis Medium Maxi │
│ Експрес-курс     │  1  Вимова літер і буквосполучень. Наголос        ┃     ┃     ┃   │
│ Впевнена вимова  │  2  Nomen substantivum. Неузгоджене озн.          ┃     ┃     ┃   │
│ Пробне заняття   │  …                                                ┃     ┃     ┃   │
│ Діагностика      │  8  Ступені порівняння прикметників               ┃     ┃     ┃   │
│ Індивідуально    │  9  Рецептура. Хімічна номенклатура                     ┃     ┃   │
│                  │  …                                                      ┃     ┃   │
│                  │  12 Рецепти на м’які та рідкі форми                     ┃     ┃   │
│                  │  13 Клінічна термінологія. Словотвір                          ┃   │
│                  │  …                                                            ┃   │
│                  │  16 50 найчастотніших діагнозів. Репетиція ПК                 ┃   │
│                  │                                                                   │
│                  │  Prices          Basis      Medium     Maxi                       │
│                  │                  8 занять   12 занять  16 занять                  │
│                  │  У записі        899 грн    —          —                          │
│                  │  Міні-група 3–5  4400 грн   6600 грн   9000 грн                   │
│                  │  Індивідуально   8000 грн   11000 грн  16000 грн                  │
│                  │  Telegram 24/6   1 міс.     1,5 міс.   2 міс.                     │
│                  │                                                                   │
│                  │ Експрес-курс: 6 днів перед ПК                                     │
│                  │  Дні 1–2 / 3–4 / 5–6, format, prices, FAQ (<details>)             │
│                  │ Інтенсив «Впевнена вимова»: 3 дні                                 │
│                  │  День 1 / 2 / 3, for whom, mini-groups 5–10, prices               │
│                  │ Пробне заняття, Діагностика рівня знань, Індивідуально            │
└──────────────────┴───────────────────────────────────────────────────────────────────┘
```

On the mobile bar the second button is shortened to «Анкета». The full label
«Заповнити анкету» is its accessible name.

\* In the desktop wireframe below, «Анкета*» stands for the full label «Заповнити
анкету», which fits at 1440px.

### Home: desktop (1440px)

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ LinguaLatina  Курси і ціни  Про мене  Відгуки  EN   [Написати в Direct] [Анкета*]    │ sticky
├──────────────────────────────────────────────────────────────────────────────────────┤
│  cols 1–5                              cols 6–12                                     │
│  Медична латина —                                                                    │
│  просто і зрозуміло                     endo    card    ítis                         │ 128px
│                                         └─┬─┘   └─┬─┘   └─┬─┘                        │
│  Пояснюю логіку термінів, щоб             │       │       │                          │
│  ви розуміли, а не зубрили.           всередині  серце  запалення                    │
│                                                                                      │
│  Галина Шпинта — кандидат філоло-     = запалення внутрішніх шарів серця             │
│  гічних наук, доцент, 17 років у      Розібрати інший термін                         │
│  НМУ імені О. О. Богомольця.                                                         │
├──────────────────────────────────────────────────────────────────────────────────────┤
│  Хто я        ┌ photo ──────┐   bio, 2–3 paragraphs (cols 6–11)                      │
│  (cols 1–2)   │ cols 3–5    │   Моя історія                                          │
│               └─────────────┘                                                        │
├──────────────────────────────────────────────────────────────────────────────────────┤
│  Як проходять заняття   two columns of plain items, hairline between rows            │
├──────────────────────────────────────────────────────────────────────────────────────┤
│  Курси і ціни   table: Курс | Для кого / для чого | Тривалість | Ціна від            │
├──────────────────────────────────────────────────────────────────────────────────────┤
│  Результати студентів   4 cases in 2 columns; quotes in a 3-column text grid         │
├──────────────────────────────────────────────────────────────────────────────────────┤
│  Навчаю й англійською (UA)   │   Як записатися 1–2–3 + contacts                      │
├──────────────────────────────────────────────────────────────────────────────────────┤
│  Repetitio est mater studiorum.                          © LinguaLatina   УКР / EN   │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### Courses and prices (`/courses/`)

The year course has nested levels (Basis ⊂ Medium ⊂ Maxi), and its 16 lessons are a
real sequence. The page shows both at once: a numbered lesson list with a coverage
bar for each level beside it. Structure is used here because the content *is*
nested.

```
Desktop
┌──────────────────────────────────────────────────────────────────────────────┐
│ On this page     │ Річний курс «Медична латина» 2026–2027                    │
│ (sticky, cols    │ Старт групи: 11.01.2027                                   │
│  1–3)            │                                                           │
│ Річний курс      │  Lesson                                   Basis Medium Maxi│
│ Експрес-курс     │  1  Вимова літер і буквосполучень. Наголос  ┃     ┃     ┃ │
│ Впевнена вимова  │  2  Nomen substantivum. Неузгоджене озн.    ┃     ┃     ┃ │
│ Пробне заняття   │  …                                          ┃     ┃     ┃ │
│ Діагностика      │  8  Ступені порівняння прикметників         ┃     ┃     ┃ │
│ Індивідуально    │  9  Рецептура. Хімічна номенклатура               ┃     ┃ │
│                  │  …                                                ┃     ┃ │
│                  │  12 Рецепти на м’які та рідкі форми               ┃     ┃ │
│                  │  13 Клінічна термінологія. Словотвір                    ┃ │
│                  │  …                                                      ┃ │
│                  │  16 50 найчастотніших діагнозів. Репетиція ПК           ┃ │
│                  │                                                           │
│                  │  Prices          Basis      Medium     Maxi               │
│                  │                  8 занять   12 занять  16 занять          │
│                  │  У записі        899 грн    —          —                  │
│                  │  Міні-група 3–5  4400 грн   6600 грн   9000 грн           │
│                  │  Індивідуально   8000 грн   11000 грн  16000 грн          │
│                  │  Telegram 24/6   1 міс.     1,5 міс.   2 міс.             │
│                  │                                                           │
│                  │ Експрес-курс: 6 днів перед ПК                             │
│                  │  Дні 1–2 / 3–4 / 5–6, format, prices, FAQ (<details>)     │
│                  │ Інтенсив «Впевнена вимова»: 3 дні                         │
│                  │  День 1 / 2 / 3, for whom, mini-groups 5–10, prices       │
│                  │ Пробне заняття, Діагностика рівня знань, Індивідуально    │
└──────────────────────────────────────────────────────────────────────────────┘

Mobile: the page index becomes a short link list at the top. The lesson list is
grouped into three blocks with a maroon left rule: "Basis: заняття 1–8",
"+ Medium: 9–12", "+ Maxi: 13–16". The price table turns into one block per level.
```

### About (`/about/`)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ Моя історія                                                                  │
│ cols 1–7: her story in her voice, condensed from the slides; dated where     │
│ dates exist:                                                                 │
│   2003–2008  класична філологія, КНУ імені Тараса Шевченка                   │
│   2007       перші заняття зі студентами НМУ                                 │
│   2011       екзаменатор                                                     │
│   2012–2013  дисертація, монографія, диплом кандидата наук                   │
│   …          декрет, блог, онлайн-навчання; 2024 переїзд до Чехії            │
│ cols 8–12: her photo                                                         │
├──────────────────────────────────────────────────────────────────────────────┤
│ Дипломи: candidate-of-sciences diploma, associate-professor certificate      │
│ Праці: 6 covers (Medical Latin Terminology Workbook, workbooks, monograph),  │
│ each with title and co-authors as on the cover; Google Scholar profile link  │
└──────────────────────────────────────────────────────────────────────────────┘
```

The timeline is a real sequence, so it uses dates as markers. Nowhere else does.

### English pages

- Same layout and components as the Ukrainian pages.
- Wherever a price appears, it is replaced by «Price on request: write in Direct or
  fill in the form».
- No "teaching in English" block, since the whole site is the English offer.
- *ПК* is translated as "final module test (ПК)".
- Review quotes are translated and marked "Translated from Ukrainian".
- The About page also stresses what matters most to international students: her
  work in the НМУ dean's office for foreign students, and the English-language
  *Medical Latin Terminology Workbook*.

## 7. Motion

- **One orchestrated moment.** On load, the hero term's parts move slightly apart and
  the red leader lines draw down to their meanings (about 600ms). The same motion runs
  when the visitor taps «Розібрати інший термін».
- **Nothing else moves on its own:** no scroll reveals, no hover lifts on cards. Hover
  and focus change colour only.
- **`prefers-reduced-motion: reduce`:** the term appears already split and switches
  instantly.
- **Without JavaScript:** the first term shows, fully annotated, and the switch button
  is hidden.

## 8. Principles

1. **Show the method, don't claim it.** The first screen teaches one term.
2. **Typography teaches.** Serif means Latin; sans is everything else.
3. **Her words, her numbers.** Every claim comes from her materials. No invented stats,
   no stock photos, no anonymous praise.
4. **One bold thing.** The dissected term is the memorable element. Everything around
   it stays quiet: no shadows, gradients, rounded card grids or decorative icons.
5. **Structure only when content has structure.** Brackets and bars appear where
   levels nest or lessons follow in order; numbers appear only for real sequences.
6. **Booking is never more than one tap away, and never interrupts.**

## 9. Review against the brief: what I changed and why

I wrote a first pass, then checked it against the five traits that generated designs
cluster around, and against what I'd produce for any "tutor landing page" prompt.

| Axis | First pass | Why it read as a default | Revision |
|---|---|---|---|
| Palette | Warm cream paper `#F6F1E7`, maroon, gold foil | Cream with a serif display and a warm accent is the most common generated look. Gold foil reads as "premium" and fails contrast as text. | Cool *ward white* and *atlas grey*. Gold removed. The red is now a correction-pen colour with one job: annotation. |
| Type | EB Garamond for every heading, Fixel for body | A high-contrast serif display on a light page is the same default. Garamond on Ukrainian headings would also blur the Latin/Ukrainian rule. | Serif is reserved for Latin; headings use Fixel Display. |
| Hero | Her portrait on the right, headline on the left, three stat tiles (17 років / з 2011 / 172 бали) | "Big number, small label" is the default hero. | The dissected term. Credentials become one plain sentence; the portrait moves to «Хто я». |
| Offers | Five equal rounded cards with shadows and «Детальніше →» | The SaaS card kit, plus the trailing-arrow tell | A plain list and table, and a lesson list with level bars that shows Basis ⊂ Medium ⊂ Maxi. |
| Headings | A small all-caps eyebrow over every H2 (e.g. «КУРСИ») | Template chrome | Removed. Headings stand alone. |
| Motion | Fade-and-slide-up on every section | Generic, and it slows reading | One moment, tied to the core idea, which respects reduced motion. |
| Reviews | A carousel of chat screenshots | Hides content, needs JS, unreadable to screen readers | Transcribed quotes as real text, with the screenshot beside each as evidence. |
| Hero CTA | Two buttons under the headline | They duplicate the always-visible bar and header buttons. | Removed from the hero. The bar and header carry booking everywhere. |

**Similar-prompt check:** for "a website for a Latin tutor" I would have reached for
parchment, Roman columns and Trajan capitals. None of that is used. The plan is built
from *this* tutor's world: medical-term morphology, anatomy-atlas labels, a
correction pen, her maroon workbooks and her exam-prep vocabulary (ПК, 164 бали).

## 10. Content sources

| Site section | Source in the materials |
|---|---|
| Bio, credentials | «Медична латина 2026–2027» slides (p. 2, «Хто я»), story slides, diploma screenshots |
| Story (About) | «Як я взагалі опинилася в медичній латині» slides |
| Year course, programme, formats, prices | «Медична латина 2026–2027» slides (p. 4–7) and the course carousel |
| Express course, FAQ, prices | «Експрес курс» slides |
| Pronunciation intensive | «Впевнена латинська вимова» slides |
| Trial lesson | «Кейси», last slide; your answer: half price, same length |
| Level test (blocks 1–5) | «Діагностика рівня знань з латини» slides |
| Cases | «Сторітейл КЕЙСИ» slides (Валерія, Настя, Настя, Юля) |
| Reviews | Review slides in the course, story and express decks (transcribed) |
| Publications | Screenshot of the six book covers |
| Hero terms | Level test, block 5 |

Stock photos inside the Canva slides (libraries, statues, doctors) are **not** used:
their licence covers use inside Canva designs, not on their own. Only photos of
Halyna, her students, her documents and her books are used.

## 11. Placeholders waiting for your content

Each appears on the site as a visibly marked `[…]` and is listed here.

| # | Placeholder | Where |
|---|---|---|
| 1 | `[EMAIL]`: her email address | Contacts, footer (both languages) |
| 2 | `[GOOGLE_SCHOLAR_URL]` | About (both languages) |
| 3 | `[GOOGLE_FORM_UA_URL]`, `[GOOGLE_FORM_EN_URL]` | Booking bar, header, sign-up section |
| 4 | `[LEVEL_TEST_PRICE]`, plus its length and format | Courses (UA); format also in EN |
| 5 | `[EXPRESS_NEXT_DATES]`: next express-course dates | Courses (UA and EN) |
| 6 | Stress marks and part glosses for the three hero terms: Halyna to confirm | Hero (both languages) |

## 12. Open questions for you

1. **Prices consistency.** The 1:1 packages work out to about 1000 грн per lesson
   (8000 ÷ 8, 16000 ÷ 16). Please check that this matches the "$18–22 per lesson" line
   shown next to it.
2. **Trial lesson on the English site.** Is "half the regular rate" acceptable there,
   or should that page carry no price wording at all?
3. **Google Form.** One form per language (recommended: each site links to its own,
   with simpler questions), or one bilingual form?
4. **Titles.** «кандидат філологічних наук, доцент» (as on the diplomas) or the
   feminine forms «кандидатка …, доцентка»? Her slides mix both.
5. **English proofreading.** I will write all the English text. Will Halyna (or
   someone) check it for her voice and terminology before launch?
6. **Levels and lessons.** I read the year course as Basis = lessons 1–8,
   Medium = 1–12, Maxi = 1–16 (from the lesson counts). Is that right?

## 13. Build notes (after approval)

- Layout:
  ```
  site/        published folder (Cloudflare Pages output directory)
    index.html, courses/, about/, en/…, 404.html
    assets/css/site.css, assets/js/term.js
    assets/fonts/*.woff2 + OFL.txt
    assets/img/…
    _headers   security and cache headers (strict CSP: self only)
    robots.txt, sitemap.xml, favicon.svg, og images
  docs/        design-plan.md, credits.md, google-form.md (not published)
  ```
- Cloudflare Pages settings: framework preset *None*, no build command, output
  directory `site`.
- Local preview, one command: `npx serve site`.
- Images are extracted once from the PDFs and screenshots and converted to WebP at 1x
  and 2x, with width and height set. Images below the fold are lazy-loaded.
- Each page has a canonical URL on `https://medicallatin.com`, `hreflang` links
  (uk, en, x-default) and Open Graph tags. The preview image is set in the site's own
  type.
- Quality floor:
  - Works down to 360px.
  - Visible focus: a 3px correction-red outline with a 2px offset.
  - Reduced motion respected.
  - WCAG AA contrast (§4).
  - Semantic landmarks and real alt text: reviews are transcribed, not only shown as images.
  - Checked with screenshots at 390px and 1440px, in light and dark mode.
