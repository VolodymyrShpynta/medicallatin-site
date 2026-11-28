# Credits

Every font and image on medicallatin.com, with its source and licence. The site loads
nothing from other servers.

## Fonts

All fonts are self-hosted in [`site/assets/fonts/`](../site/assets/fonts/), subset to
the characters the site uses and converted to WOFF2. The OFL allows this; neither font
declares a Reserved Font Name. They are the fonts of Halyna's express-course landing,
which loaded them from Google Fonts; here they are served from the site itself.

| Font | Files | Use | Source | Licence |
|---|---|---|---|---|
| **Cormorant Garamond** by Christian Thalmann (Catharsis Fonts) | `cormorant-garamond.woff2`, `cormorant-garamond-italic.woff2` (variable, weight 300–700; Latin, Latin Extended-A, Cyrillic, combining accents) | Headings, Latin text, the logo, prices and figures | [google/fonts: ofl/cormorantgaramond](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond), from [CatharsisFonts/Cormorant](https://github.com/CatharsisFonts/Cormorant) | SIL Open Font License 1.1, [`OFL-CormorantGaramond.txt`](../site/assets/fonts/OFL-CormorantGaramond.txt) |
| **Inter** by Rasmus Andersson | `inter-var.woff2` (variable, weight 400–700, optical size pinned to 14; Latin, Latin Extended-A, Cyrillic) | All other Ukrainian and English text | [google/fonts: ofl/inter](https://github.com/google/fonts/tree/main/ofl/inter), from [rsms/inter](https://github.com/rsms/inter) | SIL Open Font License 1.1, [`OFL-Inter.txt`](../site/assets/fonts/OFL-Inter.txt) |

Until 28 Nov 2026 the site used EB Garamond and Fixel (both OFL); they were removed in
the redesign.

## Images

All photos and screenshots come from the materials Halyna Shpynta supplied for this
site (her Canva presentations as PDF and three Instagram-story screenshots). They show
her, her documents, her books and her students. Volodymyr confirmed that the students
agreed to the use of their names, photos and messages (see
[design-plan.md](design-plan.md), §2).

The only edits were cropping (to remove phone and Instagram interface) and conversion
to WebP. Stock photos inside the Canva designs (libraries, statues, doctors) are **not**
used: Canva's licence covers them only inside Canva designs.

| File(s) in `site/assets/img/` | What it shows | Source in the materials |
|---|---|---|
| `halyna-portrait-400/800.webp` | Halyna on a rooftop terrace | «Медична латина» Instagram carousel (`Монохромна_Мотиваційна_Публікація…pdf`), slide 1 |
| `halyna-colonnade-420/840.webp` | Halyna in front of a colonnade | «Медична латина 2026–2027» presentation (`впевненість_на_заняттях…pdf`), slide 2 |
| `lesson-notes.webp` | Whiteboard from a Zoom lesson | «Експрес курс» presentation, slide 6 |
| `case-nastia-128/256.webp`, `proof-164.webp` | Nastia (story 2 in the deck) and her result message | «Сторітейл КЕЙСИ», slides 10–11 |
| `case-nastia-2-128/256.webp` | Nastia (story 3 in the deck) | «Сторітейл КЕЙСИ», slide 12 |
| `case-valeria-128/256.webp` | Valeria (story 1 in the deck) | «Сторітейл КЕЙСИ», slide 4 |
| `review-1.webp` … `review-7.webp` | Student review messages | «Медична латина 2026–2027», slide 8 |
| `review-8.webp` | Student review message | «Експрес курс», slide 4 |
| `diplomas-covers-360/720.webp` | Associate professor certificate and Candidate of Sciences diploma | `Screenshot_20261117-230156` |
| `diploma-candidate-360/720.webp` | Open Candidate of Sciences diploma | `Screenshot_20261117-230200` |
| `books-480/900.webp` | Covers of six publications | `Screenshot_20261117-230209` |

## Made for this site

| File | Notes |
|---|---|
| `site/favicon.svg` | The logo mark: the sprig from Halyna's express-course landing in an espresso circle (since 28 Nov 2026). |
| `site/assets/og/og-uk.png`, `og-en.png` | Link-preview cards rendered from the site's own CSS and fonts, in the landing's style. |
| `site/assets/img/deco/sprig.svg` and the sprig in the header logo | Line art from Halyna's express-course landing (a Gemini Canvas page she made and approved for this use): a sprig in a dashed circle. Redrawn as a self-contained SVG. |
| `site/assets/img/icons/*.svg` | Course icons (book, lightning, speech bubble, magnifier, person) and a calculator icon. Drawn for this site as simple line shapes in the landing's stroke style; not copied from an icon set. |
| `site/assets/img/deco/rome-skyline.svg`, `library.svg` | Flat silhouettes of Rome (temple columns, an arch, pines, the Colosseum, ruins) and of an arched bookcase. Drawn for this site from simple geometric shapes at Halyna's request; not traced from any photo or artwork, so no third-party licence applies. The Canva stock images of libraries and statues are still not used. |
