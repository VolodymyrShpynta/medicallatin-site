# Design plan: medicallatin.com

Status: **approved** (21 Nov 2026). The answers to the open questions are in §12.

## 1. The brief, restated

- **Subject.** Галина Шпинта (Halyna Shpynta), brand **LinguaLatina**. She is a
  кандидат філологічних наук (PhD equivalent; diploma from KNU) and
  доцент (associate professor). She taught Latin at Bogomolets National Medical
  University (НМУ) for 17 years (2007–2024) and has examined there since 2011. She is
  co-author of Latin workbooks and author of a monograph on Latin entomological
  nomenclature. She now teaches online (Zoom + Telegram) from Czechia.
- **Audience.**
  1. Ukrainian-speaking students of medical, dental and pharmacy faculties, plus
     medical-lyceum pupils, applicants and interns. Most arrive from Instagram on a
     phone, often anxious before the ПК (final module test).
  2. English-speaking students of any medical school. They get the same courses in
     English, with no prices.
- **Main job.** Turn a worried student into a booking request: a message in
  Instagram Direct or the Google Form. The page earns that by showing her method,
  her credentials, the offers and real student results.

## 2. Decisions already made

| Topic | Decision |
|---|---|
| Hosting | Cloudflare Pages, connected to this GitHub repo; domain `medicallatin.com` is in Cloudflare (the Pages project must live in the same Cloudflare account). |
| Stack | Plain HTML + CSS, one small JS file (the hero term switcher). No build step, no framework. |
| Languages | Ukrainian at `/`, English at `/en/`. Every text is translated. |
| Prices | Ukrainian site only: per-lesson range ($18–22) and the UAH packages. English site: no prices. |
| Dates | Show the next group start (11.01.2027); updated by hand via Git. |
| Offers | Year course (Basis / Medium / Maxi), Express course (6 days), Pronunciation intensive (3 days), Trial lesson (half price, same length as a regular lesson), Level test (separate service). |
| Contacts | Instagram Direct, Telegram, WhatsApp / phone, email. |
| Booking form | Google Form, one per language, created by Halyna in her Google account; questions drafted in [google-form.md](google-form.md). |
| Students | Consent given: names, photos and review screenshots may be used. |
| Images | Her own photos and screenshots from the supplied materials, used as they are (cropped only to remove phone UI). |
| Editing | Volodymyr edits via Git. |
| Privacy | No analytics, trackers, cookies or third-party scripts. Contacts and the form are plain links. |

## 3. Concept: «Розбір терміна» (a term, taken apart)

Her whole pitch is one moment: a frightening term turns out to be a few small parts
with plain meanings, and the student says «Аааа… тепер я зрозумів!». The site opens
with exactly that moment, so the first screen *demonstrates* the method instead of
claiming it.

The hero shows one real term from her level test, set large, split into its parts.
Thin red leader lines run from each part to its meaning, like labels in an anatomy
atlas, and the whole term's meaning sits below:

```
  endo   card   ítis
  └─┬┘   └─┬┘   └─┬┘
    │      │      │
всередині серце запалення

= запалення внутрішніх шарів серця
```

A small button, «Розібрати інший термін», swaps in the next term. The same part,
*card-*, reappears in the second one, which shows the logic without saying it:

1. **endocarditis**: endo- (всередині) + card- (серце) + -itis (запалення):
   «запалення внутрішніх шарів серця».
2. **tachycardia**: tachy- (швидкий) + card- (серце) + -ia (стан):
   «пришвидшене серцебиття».
3. **chlorodontia**: chlor- (зелений) + odont- (зуб) + -ia (стан):
   «поява зеленого відтінку у кольорі молочних зубів».

The whole-term meanings are her own wording from the level test. The part glosses
and stress marks are for Halyna to confirm before launch (see §11).

## 4. Colour

| Name | Hex | Role |
|---|---|---|
| Ward white | `#F5F7F7` | Page background. A cool, clinical white, not cream. |
| Atlas grey | `#E3E9EC` | Secondary surfaces: price table, case blocks, review quotes. |
| Iron-gall ink | `#1E2230` | Text and headings (blue-black, like fountain-pen ink). |
| Slate | `#4E5566` | Secondary text: captions, glosses, meta lines. |
| Praktikum maroon | `#6F1D2C` | The brand colour, taken from her workbook covers and diplomas. Buttons, links, the booking bar. |
| Correction red | `#B83226` | The teacher's red pen. Only for annotations: leader lines, stress marks, the focus ring. Never for decoration. |

Contrast (WCAG 2.x, measured):

| Pair | Ratio |
|---|---|
| Ink on ward white / on atlas grey | 14.7 / 12.9 |
| Slate on ward white / on atlas grey | 6.9 / 6.1 |
| Maroon on ward white (links) | 10.3 |
| White on maroon (buttons) | 11.1 |
| Correction red on ward white / on atlas grey | 5.5 / 4.9 |

**Dark mode** follows the system setting (`prefers-color-scheme`), with no toggle.
Many students read at night inside Instagram's dark in-app browser.

| Light token | Dark value | Check |
|---|---|---|
| Ward white | `#171B25` | |
| Atlas grey | `#232937` | |
| Iron-gall ink | `#E8EBEF` | 14.4 on background |
| Slate | `#AAB1BF` | 8.0 on background |
| Praktikum maroon | `#E6A1AC` | Links and button fill. Button text uses the dark background colour (8.3). |
| Correction red | `#FF8B7B` | 7.6 on background |

## 5. Type

Two families, with one rule that carries meaning: **Latin is set in the serif;
Ukrainian and English are set in the sans.** Throughout the site the reader can spot
the Latin at a glance, just as in her lessons. Every Latin span also gets `lang="la"`,
so screen readers switch pronunciation.

| Typeface | Licence | Role |
|---|---|---|
| **EB Garamond** (Georg Duffner, Octavio Pardo) | SIL OFL 1.1 | Latin only: the hero term, the wordmark *LinguaLatina*, course names (*Grammatica*, *Receptum*, *Clinica*), inline terms in lesson titles, the motto *Repetitio est mater studiorum*. Roman for the hero, italic inline. It descends from Garamond's 16th-century romans, the age when anatomical Latin was first printed. |
| **Fixel** (MacPaw, Kyiv) | SIL OFL 1.1 | Everything else. *Fixel Display* (width 87.5) at weight 600 for headings, *Fixel Text* (width 100) at weight 400 for body. It is a Ukrainian-made grotesque drawn for Ukrainian Cyrillic. |

Both are self-hosted and subset to Latin, Latin Extended-A and Cyrillic. Glyph
coverage was checked against her materials, including the stress marks and vowel
marks (*á é í ó ú ý*, *ä ë ö*, *ā ē ī ō ū*, *ĭ*) and Ukrainian *ґ є і ї*. EB Garamond
covers them all. Fixel lacks only *ȳ* and the modifier apostrophe *ʼ*: Latin never uses
Fixel, and Ukrainian copy uses the typographic apostrophe *’*.

Scale (following *The Elements of Typographic Style*; rem at a 16px root):

| Step | Mobile | Desktop | Use |
|---|---|---|---|
| Hero term | 3.75rem (60px) | 8rem (128px) | EB Garamond 400 |
| H1 | 2.25rem (36px) | 3rem (48px) | Fixel Display 600, line-height 1.1 |
| H2 | 1.75rem (28px) | 2.25rem (36px) | Fixel Display 600 |
| H3 | 1.3125rem (21px) | 1.5rem (24px) | Fixel Display 600 |
| Body | 1.0625rem (17px) | 1.125rem (18px) | Fixel Text 400, line-height 1.55, measure ≤ 68ch |
| Small | 0.875rem (14px) | 0.875rem (14px) | Glosses, captions |

Rules:
- Inline Latin in EB Garamond italic is set at 1.12em, so its smaller x-height matches Fixel's.
- Sentence case everywhere: no all-caps labels and no eyebrow labels above headings.
- Headings are a single colour, with no highlighted words.

## 6. Layout

**Alignment:** left-aligned, ragged right, never justified. Ukrainian words are long,
and justified text would open rivers.

**Grid:**
- **Mobile:** one column with 1.25rem side padding (320px of content at 360px).
- **Desktop:** a 12-column grid inside a 72rem container. Text blocks never exceed
  68ch.
- **Spacing:** only the layout wrappers carry vertical spacing between sections;
  components have no outer margins. This keeps CSS specificity from fighting over
  padding.

**Booking actions are always one tap away, never a popup.** On mobile, a fixed bottom
bar holds two buttons: «Написати в Direct» and «Заповнити анкету». On desktop the
same two sit in the sticky header. Their names never change across the site.

**Pages (same structure in both languages):**

| Ukrainian | English | Content |
|---|---|---|
| `/` | `/en/` | Home: term hero, who I am, how lessons work, offers overview, student results, teaching in English (UA only), how to sign up |
| `/courses/` | `/en/courses/` | Each offer in full: programme, format, prices (UA only), FAQ |
| `/about/` | `/en/about/` | Her story, diplomas, publications, Google Scholar |
| `/404.html` | | One bilingual "page not found" with links to both home pages |

### Home: mobile (390px)

```
┌────────────────────────────────┐
│ LinguaLatina               EN  │ header: wordmark in EB Garamond
│ Курси і ціни  Про мене  Відгуки│ nav row; no hamburger, no JS
├────────────────────────────────┤
│ Медична латина —               │ H1
│ просто і зрозуміло             │
│                                │
│ Пояснюю логіку термінів,       │ lede
│ щоб ви розуміли, а не зубрили. │
│                                │
│ endo  card  ítis               │ hero term, 60px
│ └┬─┘  └┬─┘  └┬─┘               │ red leader lines
│ все-  серце запа-              │ glosses, 14px
│ редині      лення              │
│ = запалення внутрішніх шарів   │
│   серця                        │
│ Розібрати інший термін         │ text button
│                                │
│ Галина Шпинта — кандидат       │ credentials in one sentence
│ філологічних наук, доцент,     │
│ 17 років у НМУ ім. Богомольця. │
├────────────────────────────────┤
│ Хто я                          │ H2
│ ┌────────────────────────────┐ │
│ │ her photo, 4:5             │ │
│ └────────────────────────────┘ │
│ 2–3 short paragraphs           │
│ Моя історія                    │ link to /about/
├────────────────────────────────┤
│ Як проходять заняття           │ plain list, no cards:
│ 80% практики …                 │ practice, exercises made for you,
│ Інтерактивні вправи …          │ Zoom recordings for the year,
│ Підтримка в Telegram 24/6 …    │ Telegram support, PDFs and screenshots
├────────────────────────────────┤
│ Курси і ціни                   │ list rows: name / what for / length / from
│ Річний курс        від 899 грн │
│ Експрес-курс       від 2222 грн│
│ Впевнена вимова    від 499 грн │
│ Пробне заняття  ½ ціни заняття │
│ Діагностика        [ціна]      │
│ Індивідуально     18–22 $/зан. │
│ Усі деталі курсів              │ link to /courses/
├────────────────────────────────┤
│ Результати студентів           │ id="vidhuky"
│ ┌ photo ┐ Настя, «Медицина»    │ case: request, then what we did,
│ └───────┘ 14 занять → 164 бали │ then result
│ … 2 more cases + the honest one│
│ “quote text” — Валерія         │ transcribed review quotes,
│ [screenshot]                   │ screenshot as evidence
├────────────────────────────────┤
│ Навчаю й англійською           │ UA only: one paragraph and a
│ English version of the site    │ link to /en/
├────────────────────────────────┤
│ Як записатися                  │ a real sequence, so numbered:
│ 1 Напишіть у Direct або        │
│   заповніть анкету             │
│ 2 Пробне заняття або діагност. │
│ 3 Обираємо формат і графік     │
│ Instagram                      │ contact links, one per line
│ Telegram                       │
│ WhatsApp                       │
│ Email                          │
├────────────────────────────────┤
│ Repetitio est mater studiorum. │ footer motto in EB Garamond italic
│ © LinguaLatina   УКР / EN      │
╞════════════════════════════════╡
│ [Написати в Direct][Анкета]    │ fixed bottom bar, maroon
└────────────────────────────────┘
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

Each appears on the site with a dashed red outline and a `data-placeholder="NAME"`
attribute; `grep -rn "data-placeholder" site` lists them all.

| # | Placeholder | Where |
|---|---|---|
| 1 | `EMAIL`: her email address | Sign-up section, home pages (both languages) |
| 2 | `GOOGLE_SCHOLAR_URL` | About (both languages) |
| 3 | `GOOGLE_FORM_UA_URL`, `GOOGLE_FORM_EN_URL` | Header, mobile booking bar, sign-up and course call-to-action buttons |
| 4 | `LEVEL_TEST_PRICE` | Home and Courses (UA only) |
| 5 | `LEVEL_TEST_FORMAT`: length and format | Courses (UA and EN), home offers list (EN) |
| 6 | `EXPRESS_NEXT_DATES`: next express-course dates | Courses (UA and EN) |
| 7 | Stress marks and part glosses for the three hero terms: Halyna to confirm (not marked on the page) | Hero (both languages) |

## 12. Open questions: answered

| Question | Answer |
|---|---|
| Do the 1:1 package prices (about 1000 грн per lesson) match "$18–22 per lesson"? | Yes. Show both. |
| "Half the regular rate" for the trial lesson on the English site? | Yes, acceptable. |
| Google Forms | One form per language. |
| Titles in Ukrainian | «кандидат філологічних наук, доцент», as on the diplomas. |
| English proofreading | None planned; the English text ships as written. |
| Year-course levels | Basis = lessons 1–8, Medium = 1–12, Maxi = 1–16. |

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
