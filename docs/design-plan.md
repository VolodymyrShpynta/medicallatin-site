# Design plan: medicallatin.com

Status: **approved** (21 Nov 2026). The answers to the open questions are in §12.
**Revised** on 23 Nov 2026 after Halyna's feedback: a warm palette, light by default,
faint Rome and library silhouettes, a shade per course, and new offers and prices.
What changed and why is in §14.

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
     English, priced in US dollars (since 27 Nov 2026; see §15).
- **Main job.** Turn a worried student into a booking request: a message in
  Instagram Direct or the Google Form. The page earns that by showing her method,
  her credentials, the offers and real student results.

## 2. Decisions already made

| Topic | Decision |
|---|---|
| Hosting | Cloudflare Pages, connected to this GitHub repo; domain `medicallatin.com` is in Cloudflare (the Pages project must live in the same Cloudflare account). |
| Stack | Plain HTML + CSS, three small JS files: the hero term switcher, the light/dark switch, and the express course's quiz and Direct-message helper. No build step, no framework. |
| Languages | Ukrainian at `/`, English at `/en/`. Every text is translated. |
| Prices | Ukrainian site in UAH: course prices, the trial lesson (600 грн), one-to-one lessons (schoolchildren 700 грн, students from 1000 грн) and packages (students' packages cost less from June to November). English site in US dollars, derived from the UAH prices (§15). |
| Dates | Show the next group start (11.01.2027) and the express-course groups (8.02, 22.02 and 9.03.2027); updated by hand via Git. |
| Offers | Main course «Медична латина» in 2 months (Basis / Medium / Maxi), Express course (6 days), Pronunciation intensive (3 days), Trial lesson with a level test (50–55 min), one-to-one lessons. |
| Contacts | Instagram Direct, Telegram, WhatsApp / phone, email (`info@medicallatin.com`, forwarded to Halyna's mailbox by Cloudflare Email Routing). |
| Booking form | Google Form, one per language, created by Halyna in her Google account; questions drafted in [google-form.md](google-form.md). |
| Students | Consent given: names, photos and review screenshots may be used. |
| Images | Her own photos and screenshots from the supplied materials, used as they are (cropped only to remove phone UI). |
| Editing | Volodymyr edits via Git. |
| Privacy | No analytics, trackers, cookies or third-party scripts. Contacts and the form are plain links. The theme choice stays in local storage on the visitor's device. |

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

A button, «Розібрати інший термін», swaps in the next term. The same part,
*card-*, reappears in the second one, which shows the logic without saying it.
It started as a plain text link, which proved easy to miss, so since 23 Nov 2026 it
is a pill in the annotation colour (rust outline, faint rust fill, a turn icon), with
three small dots beside it showing which term is on screen. It stays in the
correction-pen colour, not maroon, so it reads as part of the dissected term and
never competes with the booking buttons:

1. **endocarditis**: endo- (всередині) + card- (серце) + -itis (запалення):
   «запалення внутрішніх шарів серця».
2. **tachycardia**: tachy- (швидкий) + card- (серце) + -ia (стан):
   «пришвидшене серцебиття».
3. **chlorodontia**: chlor- (зелений) + odont- (зуб) + -ia (стан):
   «поява зеленого відтінку у кольорі молочних зубів».

The whole-term meanings are her own wording from the level test. The part glosses
and stress marks are for Halyna to confirm before launch (see §11).

## 4. Colour

Warm autumn pastels, chosen by Halyna in her feedback (23 Nov 2026). They replace the
first, cool palette (ward white, atlas grey, blue-black ink); see §14.

| Name | Hex | Role |
|---|---|---|
| Linen | `#F7F0E6` | Page background: a warm, light paper. |
| Sand | `#EFE2D1` | Secondary surfaces: price table, case blocks, review quotes. |
| Espresso | `#2E221C` | Text and headings: a warm brown-black. |
| Warm taupe | `#65544A` | Secondary text: captions, glosses, meta lines. |
| Praktikum maroon | `#7A2432` | The brand colour, taken from her workbook covers and diplomas. Buttons, links, the booking bar. |
| Rust | `#A13F1F` | The teacher's red pen. Only for annotations: leader lines, stress marks, the focus ring. |
| Silhouette | `#E7D6C2` | Only for the faint Rome and library silhouettes (see "Decoration" below). Never for text. |

Contrast (WCAG 2.x, measured):

| Pair | Ratio |
|---|---|
| Espresso on linen / on sand / on the palest course shade | 13.6 / 12.1 / 11.6 |
| Warm taupe on linen / on sand / on the course shades | 6.4 / 5.6 / 5.4 or more |
| Maroon on linen (links) / on the course shades | 8.7 / 7.4 or more |
| Text on maroon buttons (`#FFF8F0`) | 9.4 |
| Rust on linen / on sand / on the course shades | 5.7 / 5.1 / 4.9 or more |

**Light for everyone, dark on request.** Every visitor first sees the warm light theme,
whatever their device setting. A moon/sun switch in the header (added 22 Nov 2026)
turns on the dark theme. The choice is kept in the browser's local storage: not a
cookie, and never sent anywhere. Without JavaScript the switch is hidden and the site
stays light. (Until 23 Nov 2026 the first visit followed the device's dark setting;
Halyna asked for light by default.)

| Light token | Dark value | Check |
|---|---|---|
| Linen | `#1E1815` | |
| Sand | `#2B231F` | |
| Espresso | `#F2E8DD` | 14.5 on background |
| Warm taupe | `#C5B4A5` | 8.7 on background |
| Praktikum maroon | `#EAA99C` | Links and button fill. Button text uses the dark background colour (8.9). |
| Rust | `#F29A76` | 8.1 on background |
| Silhouette | `#2E2520` | Just above the background, so the silhouettes stay faint. |

**A shade per course.** Each offer has its own pastel shade (the panel behind it on
`/courses/`) and a stronger accent (the panel's top edge, the left edge in the home
offers list, the swatch in the page index). Text on the shades uses the same tokens
and passes AA, as measured above.

| Course | Shade | Accent | Dark shade | Dark accent |
|---|---|---|---|---|
| Main course | `#F5DFC9` apricot | `#D49E6A` | `#33271E` | `#9C7148` |
| Express course | `#F2DAD4` dusty rose | `#C98E82` | `#352527` | `#94635A` |
| Confident Pronunciation | `#E2E7D2` sage | `#9DAD7C` | `#282E22` | `#6F7D55` |
| Trial lesson | `#F4E6C4` wheat | `#CFAF57` | `#342D1C` | `#9A8240` |
| One-to-one lessons | `#EADDE4` heather | `#B08FA4` | `#2F2630` | `#7E6476` |

**Decoration.** Two silhouettes, drawn for this site as simple flat shapes, filled with
the silhouette colour through a CSS mask. They are CSS backgrounds, so screen readers
skip them.

- **Rome skyline** (`assets/img/deco/rome-skyline.svg`): temple columns, an arch,
  umbrella pines, the Colosseum and ruins. It runs along the bottom of the home hero,
  under the dissected term, and appears small above the footer motto.
- **Library bookcase** (`assets/img/deco/library.svg`): an arched bookcase beside the
  page title on `/courses/` and `/about/`.

```
Hero (home)                                     Page head (courses, about)
┌──────────────────────────────────────────┐    ┌────────────────────────────────┐
│ H1 …          endo  card  ítis           │    │ Курси і ціни          ╭────╮   │
│ lede …        └┬─┘  └┬─┘  └┬─┘           │    │ lede …                │▥▥▥▥│   │
│ credentials   glosses                    │    │                       │▥▥▥▥│   │
│                                          │    │                       └────┘   │
│ ░ columns ░ arch ░ Colosseum ░ pines ░   │    │                                │
└──────────────────────────────────────────┘    └────────────────────────────────┘
```

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
│ (↻ Розібрати інший термін) ━•• │ pill button + term dots
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
│ Основний курс      від 899 грн │
│ Експрес-курс       від 2222 грн│
│ Впевнена вимова    від 499 грн │
│ Пробне з діагностикою  600 грн │
│ Індивідуально      від 700 грн │
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
│ 2 Пробне заняття з діагностикою│
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

The main course has nested levels (Basis ⊂ Medium ⊂ Maxi), and its 16 lessons are a
real sequence. The page shows both at once: a numbered lesson list with a coverage
bar for each level beside it. Structure is used here because the content *is*
nested.

Each course sits on its own tinted panel in its course shade (§4), with the accent as
a top edge. The page index shows the same accent as a small swatch, so a course is
recognisable by its colour on the home page, in the index and on its panel.

```
Desktop
┌──────────────────┬───────────────────────────────────────────────────────────────────┐
│ On this page     │ Основний курс «Медична латина» за 2 місяці                        │
│ (sticky, cols    │ Старт групи: 11.01.2027                                           │
│  1–3)            │                                                                   │
│ Основний курс    │  Lesson                                         Basis Medium Maxi │
│ Експрес-курс     │  1  Вимова літер і буквосполучень. Наголос        ┃     ┃     ┃   │
│ Впевнена вимова  │  2  Nomen substantivum. Неузгоджене озн.          ┃     ┃     ┃   │
│ Пробне заняття   │  …                                                ┃     ┃     ┃   │
│ Індивідуально    │  8  Ступені порівняння прикметників               ┃     ┃     ┃   │
│                  │  9  Рецептура. Хімічна номенклатура                     ┃     ┃   │
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
│                  │ Пробне заняття з діагностикою; Індивідуально (школярі, студенти)  │
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
- Prices are in US dollars, derived from the UAH prices (§15). Until 27 Nov 2026 the
  English pages showed no prices.
- No "teaching in English" block, since the whole site is the English offer.
- *ПК* is translated as "final module test (ПК)".
- Review quotes are translated and marked "Translated from Ukrainian".
- The About page also stresses what matters most to international students: her
  work in the НМУ dean's office for foreign students, and the English-language
  *Medical Latin Terminology Workbook*.

## 7. Motion

- **One orchestrated moment.** On load, the hero term's parts move slightly apart and
  the red leader lines draw down to their meanings (about 600ms); as it ends, the
  switch button's turn icon spins once, to draw the eye to it. The same motion runs
  when the visitor taps «Розібрати інший термін».
- **Nothing else moves on its own:** no scroll reveals, no hover lifts on cards. Hover
  and focus change colour only.
- **`prefers-reduced-motion: reduce`:** the term appears already split and switches
  instantly; the icon doesn't turn.
- **Without JavaScript:** the first term shows, fully annotated, and the switch button
  and its dots are hidden.

## 8. Principles

1. **Show the method, don't claim it.** The first screen teaches one term.
2. **Typography teaches.** Serif means Latin; sans is everything else.
3. **Her words, her numbers.** Every claim comes from her materials. No invented stats,
   no stock photos, no anonymous praise.
4. **One bold thing.** The dissected term is the memorable element. Everything around
   it stays quiet: no shadows, gradients, card grids or decorative icons. The only
   ornaments are the faint Rome and library silhouettes, a tone away from the paper.
   The one icon, the turn arrow on the term switch, is there to say what it does.
5. **Structure only when content has structure.** Brackets and bars appear where
   levels nest or lessons follow in order; numbers appear only for real sequences.
6. **Booking is never more than one tap away, and never interrupts.**

## 9. Review against the brief: what I changed and why

I wrote a first pass, then checked it against the five traits that generated designs
cluster around, and against what I'd produce for any "tutor landing page" prompt.

| Axis | First pass | Why it read as a default | Revision |
|---|---|---|---|
| Palette | Warm cream paper `#F6F1E7`, maroon, gold foil | Cream with a serif display and a warm accent is the most common generated look. Gold foil reads as "premium" and fails contrast as text. | Cool *ward white* and *atlas grey*. Gold removed. The red is now a correction-pen colour with one job: annotation. **Reversed on 23 Nov 2026 at Halyna's request:** warm autumn pastels (§4, §14). Gold stays out, and the serif is still kept for Latin, so the warm paper doesn't pull the site back to the default look. |
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
*Update, 23 Nov 2026:* Halyna asked for Roman and library imagery. It is kept faint
and secondary: flat silhouettes a tone away from the paper, never behind text, with
no parchment textures and no Trajan capitals. The dissected term stays the one bold
element.

## 10. Content sources

| Site section | Source in the materials |
|---|---|
| Bio, credentials | «Медична латина 2026–2027» slides (p. 2, «Хто я»), story slides, diploma screenshots |
| Story (About) | «Як я взагалі опинилася в медичній латині» slides |
| Main course (formerly the year course), programme, formats, prices | «Медична латина 2026–2027» slides (p. 4–7) and the course carousel; name, length and the recorded format from Halyna's feedback (23 Nov 2026) |
| Express course, FAQ, prices | «Експрес курс» slides; format list, groups and prices from Halyna's feedback; the fuller programme, audience, format details, quiz and mock test from her express-course landing (27 Nov 2026, §15) |
| Pronunciation intensive | «Впевнена латинська вимова» slides |
| Trial lesson with a level test | «Кейси», last slide, and «Діагностика рівня знань з латини» slides (blocks 1–5); merged, 50–55 min and 600 грн per Halyna's feedback |
| One-to-one lessons | Halyna's feedback: prices for schoolchildren and students, packages, payment terms |
| Cases | «Сторітейл КЕЙСИ» slides (Валерія, Настя, Настя, Юля) |
| Reviews | Review slides in the course, story and express decks (transcribed); Aleksandra's from the same screenshot as Dasha's; Nora's from Halyna's express-course landing |
| Publications | Screenshot of the six book covers |
| Hero terms | Level test, block 5; *bradykinesia*, *xanthodermia* and *hysterectomia* from her express-course landing |

Stock photos inside the Canva slides (libraries, statues, doctors) are **not** used:
their licence covers use inside Canva designs, not on their own. Only photos of
Halyna, her students, her documents and her books are used.

## 11. Placeholders waiting for your content

Each appears on the site with a dashed red outline and a `data-placeholder="NAME"`
attribute; `grep -rn "data-placeholder" site` lists them all.

| # | Placeholder | Where |
|---|---|---|
| 1 | ~~`EMAIL`: her email address~~ Filled: `info@medicallatin.com`, forwarded by Cloudflare Email Routing ([deployment.md §9](deployment.md#9-set-up-infomedicallatincom)) | Sign-up section, home pages (both languages) |
| 2 | `GOOGLE_SCHOLAR_URL` | About (both languages) |
| 3 | `GOOGLE_FORM_UA_URL`, `GOOGLE_FORM_EN_URL` | Header, mobile booking bar, sign-up and course call-to-action buttons |
| 4 | ~~`LEVEL_TEST_PRICE`~~ Removed: the level test is now part of the trial lesson (600 грн) | |
| 5 | ~~`LEVEL_TEST_FORMAT`~~ Removed: the trial lesson with a level test is 50–55 min | |
| 6 | ~~`EXPRESS_NEXT_DATES`~~ Filled: 8.02, 22.02 and 9.03.2027 | |
| 7 | Stress marks and part glosses for the six hero terms: Halyna to confirm (not marked on the page) | Hero (both languages) |
| 8 | ~~`SCHOOL_PACKAGES`~~ Filled: 5 lessons 3400, 8 lessons 5300, 10 lessons 6700 грн (§14) | |

## 12. Open questions: answered

| Question | Answer |
|---|---|
| Do the 1:1 package prices (about 1000 грн per lesson) match "$18–22 per lesson"? | Yes. Show both. *Superseded on 23 Nov 2026: prices are now in UAH only (§14).* |
| "Half the regular rate" for the trial lesson on the English site? | Yes, acceptable. *Superseded on 23 Nov 2026: the English site said "On request"; since 27 Nov 2026 it shows $15 (§15).* |
| Google Forms | One form per language. |
| Titles in Ukrainian | «кандидат філологічних наук, доцент», as on the diplomas. |
| English proofreading | None planned; the English text ships as written. |
| Main-course levels | Basis = lessons 1–8, Medium = 1–12, Maxi = 1–16. |

## 13. Build notes (after approval)

- Layout:
  ```
  site/        published folder (Cloudflare Pages output directory)
    index.html, courses/, about/, en/…, 404.html
    assets/css/site.css, assets/js/term.js, assets/js/theme.js, assets/js/express.js
    assets/fonts/*.woff2 + OFL.txt
    assets/img/…   (deco/: the Rome skyline and library silhouettes)
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
  - Visible focus: a 3px rust (correction-pen) outline with a 2px offset.
  - Reduced motion respected.
  - WCAG AA contrast (§4).
  - Semantic landmarks and real alt text: reviews are transcribed, not only shown as images.
  - Checked with screenshots at 390px and 1440px, in light and dark mode.

## 14. Revision after Halyna's feedback (23 Nov 2026)

Halyna reviewed the live site and sent her comments in Telegram. Each one, and what
changed:

| Her comment | What changed |
|---|---|
| Warmer, pastel, autumn colours instead of the cool clinical look | New warm palette in both themes (§4). Favicon and link-preview images redrawn in it. |
| Open in the light theme | Light is now the default for everyone; dark only via the switch (§4). |
| Something of Rome and of libraries in the background | Faint, flat silhouettes: a Rome skyline under the hero and above the footer motto, and a bookcase beside the page titles on Courses and About (§4, "Decoration"). |
| Each course in its own shade | A pastel shade and an accent per course, used on the course panels, in the page index and in the home offers list (§4). |
| «Річний курс» is now «Основний курс «Медична латина» за 2 місяці» | Renamed on the Ukrainian and English pages. Levels, prices and the 11.01.2027 start are unchanged. |
| The 899 грн recorded format is only the «Іменник» module | The table and the recorded-format note say so: stem, general characteristics, declensions, non-agreed attributes; lessons recorded in Telegram, questions in the Telegram chat. |
| Express course: groups every week in February 2027, her own format list, new prices | Start line, the seven-point format list and booking terms replaced. Group: 2222 грн when booking by 30.01, then +300 грн each week. One-to-one: 6000 грн by 30.01, then 7000 грн. Booking in advance with prepayment. The English site gives no numbers. |
| Trial lesson and level test are one offer | Merged into «Пробне заняття з діагностикою рівня знань»: 50–55 min, 600 грн, with the five test blocks. The separate level test and its placeholders are gone. English: "Trial lesson with a level test", price on request. |
| One-to-one prices and terms | Prepayment for at least 3 lessons. Schoolchildren 700 грн per lesson; students 1000 грн per lesson, packages of 5 / 10 / 16 lessons for 4350 / 8500 / 13300 грн, shown without percentages. 10 % off when students come 5–6 months before the ПК (July to November). |

Still open (asked of Halyna; nothing invented in the meantime):

- **Recorded «Іменник» module extras.** The old text promised a pronunciation bonus,
  10 interactive exercises and 2 weeks of Telegram support. Her new description
  doesn't mention them, so they were removed. Put them back if they still apply.

### Her follow-up answers (24 Nov 2026)

| Her answer | What changed |
|---|---|
| Express groups start on 8.02.2027, 22.02.2027 and 9.03.2027 | Replaces "every week in February 2027" on both languages' home and courses pages. Booking prices unchanged. |
| Schoolchildren's packages: 5 lessons 5400, 8 lessons 5300, 10 lessons 6700 грн | The 5-lesson price was a slip: it cost more than the 8-lesson package. Volodymyr confirmed 3400 грн. Shown as 3400 / 5300 / 6700 грн; the `SCHOOL_PACKAGES` placeholder is gone. |
| Specialised preparation for university entrance is priced individually, by request and time | A line under the schoolchildren's prices. |
| Students: from 1000 грн per lesson | "від 1000 грн" on the home and courses pages. |
| Students' packages: 10 % off from July to November; June–November 4350 / 8500 / 13300 грн (2 / 5 / 8 % off), December–May 4650 / 9000 / 13770 грн, for 5 / 10 / 16 lessons | A small table with the two seasons, without percentages. The June–November prices already include the seasonal 10 % (1000 грн × lessons, less 10 %, less 2 / 5 / 8 % is about 4410 / 8550 / 13250 грн), so the separate «Вчасне звернення: знижка 10 %» line was removed: it suggested an extra discount on top. Decided by Volodymyr. |

## 15. Halyna's express-course landing (27 Nov 2026)

Halyna made a one-page landing for the express course in Gemini Canvas. Its content
was merged into this site rather than published separately, so prices and dates live
in one place. Volodymyr made the calls below.

| From the landing | On the site |
|---|---|
| Programme as three blocks of two lessons, with the topics of each | Express section, both languages: «Заняття 1–2 / 3–4 / 5–6», replacing the plain list of six lessons. |
| A mock ПК on day 6; for one-to-one, a personal simulation of the oral ПК | In the programme and the format details. Confirmed by Volodymyr. |
| "Знайома ситуація?" (three typical problems) and who the course is for | Two short lists before the programme. |
| What each format includes; one-to-one = 6 individual lessons | Two side-by-side format cards with prices and what's included. |
| A 3-question quiz (anatomy, prescription, clinic) | "Перевірте себе за 60 секунд" in the express section. The Latin was checked: all three answers are correct. Each question shows its answer in a `<details>` without JavaScript. |
| A booking form that composes a message for Direct | "Записатися на експрес-курс": the visitor picks a group and format, adds a name and handle, and copies a ready message. Instagram can't pre-fill a message, so nothing is sent anywhere; the composer is hidden without JavaScript. |
| "100 % of students in a poll recommended the course" | Under "Після курсу ви". No poll screenshot was supplied; used at Volodymyr's request. |
| Reviews by Aleksandra and Nora | Home page reviews. Aleksandra's is quoted exactly as in her Telegram screenshot (the landing added a sentence she didn't write). Nora's has no screenshot; used at Volodymyr's request. |
| "Погляд екзаменатора", "Концентрат без зайвого" and her quote «Моя мета — …» | Home page, "Хто я". The quote has no other source; used at Volodymyr's request. |
| Her maiden name, «Галина Шпинта (Воскобойник)» | Home page, "Хто я", so former НМУ students recognise her. |
| *bradykinesia*, *xanthodermia*, *hysterectomia* | Three more hero terms (six in all). The part glosses are standard; Halyna should still confirm them (§11, item 7). |

Left out:

- **Access for 1 academic year.** Her 23 Nov list says half a year, which stays.
- **"Slide examples"** such as *tuberositas palatina nasalis anterior*, *Rp.: Supp.
  pulv. fol. Digitalis*, or *depuratus* for oil components. They couldn't be checked
  against her materials, and some look wrong.
- **The landing's own design** (Cormorant Garamond and Inter from Google Fonts,
  Tailwind from a CDN): third-party resources the site doesn't load.

**English prices.** The English pages now show prices too, in US dollars. The rule is
Halyna's English rate for a student's one-to-one lesson ($25, from her brief: "25–30
$") against the Ukrainian one (1000 грн): **$25 per 1000 грн**, applied to every
UAH price and rounded to whole dollars (halves up). So 600 грн → $15, 2222 грн → $56,
4400 грн → $110, 13300 грн → $333. To change the English level, scale every
dollar price by the same factor. The express group's weekly rise is described in
words ("the price goes up each week, $63 from 31 January") because $7.50 steps
don't round cleanly.