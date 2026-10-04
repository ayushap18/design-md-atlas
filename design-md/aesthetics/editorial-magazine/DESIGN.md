---
version: alpha
name: Editorial Magazine
description: Print-magazine sensibility on screen — high-contrast serif headlines, column-based reading layouts, drop caps, pull quotes, and restrained ink-on-paper color.
source: https://en.wikipedia.org/wiki/Editorial_design
colors:
  primary: "#111111"
  on-primary: "#FAF7F2"
  background: "#FAF7F2"
  surface: "#F0EBE3"
  text: "#111111"
  text-muted: "#5C5650"
  border: "#D8D1C7"
  rule: "#111111"
  accent: "#B3261E"
  accent-ink: "#1F3A5F"
typography:
  display:
    fontFamily: Playfair Display
    fontSize: 5.5rem
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -0.02em
  h1: { fontFamily: Playfair Display, fontSize: 3.5rem, fontWeight: 700, lineHeight: 1.05 }
  h2: { fontFamily: Playfair Display, fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.15 }
  h3: { fontFamily: Source Serif 4, fontSize: 1.375rem, fontWeight: 600, lineHeight: 1.3 }
  dek: { fontFamily: Source Serif 4, fontSize: 1.375rem, fontWeight: 400, lineHeight: 1.45, fontStyle: italic }
  body: { fontFamily: Source Serif 4, fontSize: 1.1875rem, fontWeight: 400, lineHeight: 1.65 }
  kicker: { fontFamily: Inter, fontSize: 0.75rem, fontWeight: 700, letterSpacing: 0.12em, textTransform: uppercase }
  caption: { fontFamily: Inter, fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.4 }
rounded:
  sm: 0px
  md: 2px
  lg: 4px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 112px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 12px 22px
  article-body:
    maxWidth: 680px
    typography: "{typography.body}"
  pull-quote:
    borderTop: "3px solid {colors.rule}"
    borderBottom: "1px solid {colors.rule}"
    padding: 24px 0
---

# Editorial Magazine — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
This archetype borrows the grammar of a well-art-directed print magazine: dramatic serif headlines, italic deks, small uppercase kickers, columns of comfortable body text, hairline and heavy rules, big photography with captions, and pull quotes that break the column. It suits publications, long-form blogs, portfolios, and brands that want to feel literate and considered. Reading comfort is the top priority.

Hold onto: **literate, dramatic, paper-warm, ruled, unhurried**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FAF7F2` | Newsprint/uncoated paper |
| surface | `#F0EBE3` | Sidebars, boxed features |
| text / primary | `#111111` | Ink, buttons, heavy rules |
| text-muted | `#5C5650` | Bylines, captions, dates |
| border | `#D8D1C7` | Hairline dividers |
| rule | `#111111` | Heavy section rules |
| accent | `#B3261E` | Editorial red: kickers, drop caps, live/breaking tags |
| accent-ink | `#1F3A5F` | Link color in body copy |

Ink and paper dominate completely. Red appears in kickers and small marks only; blue for in-text links.

## Typography
- **Display:** Playfair Display 700 (free). Alternatives: *DM Serif Display*, *Fraunces* 700 high opsz.
- **Body/deks:** Source Serif 4 (free), 19px/1.65 for articles. Alternative: *Newsreader*, *Literata*.
- **Kickers/captions/UI:** Inter (or *Libre Franklin*), small, uppercase kickers tracked +0.12em.
- Deks (standfirsts) in italic 22px under headlines.
- Drop cap on the first paragraph: 4 lines tall, Playfair 700, accent red.
- Use real typographic niceties: curly quotes, en/em dashes, old-style figures in body (`font-variant-numeric: oldstyle-nums`), small caps for acronyms.

## Layout
- Homepage: 12-column grid, max 1280px. Lead story spans 8 columns with large image; secondary stories in a 4-column rail; below, 3- or 4-up story rows divided by vertical hairlines.
- Article: single 680px measure centered, with images breaking out to 960px or full-bleed; pull quotes offset into the margin on wide screens.
- Rules organize everything: 3px ink rule above section titles, 1px hairlines between stories.
- Masthead: centered wordmark, date line and sections nav beneath in small caps.

## Elevation & Depth
- Flat. No shadows. Depth comes from image scale and rule weight.
- Optional paper texture: very subtle noise overlay at 3% opacity.

## Shapes
- Square corners (0–2px). Images are rectangular, cropped intentionally (3:2, 4:5, 16:9).
- Icons minimal; prefer words ("Share", "Save") over icons.
- Imagery: photojournalism and commissioned illustration; every image gets a caption and credit in 13px muted.

## Components
- **Story card (lead):** image 16:9, red kicker, 48px Playfair headline, italic dek, byline "By Name · 8 min read" in muted Inter 13px.
- **Story card (rail):** no image or small thumbnail, kicker, 22px serif headline, 1px hairline below.
- **Pull quote:** 32px Playfair italic, 3px top rule, 1px bottom rule, 24px vertical padding, attribution in kicker style.
- **Drop cap:** `::first-letter` float left, 4.2em, line-height 0.85, accent red, 8px right margin.
- **Primary button:** ink fill, paper text, 0 radius, Inter 14px/700 uppercase tracked. Hover: red fill.
- **Newsletter box:** `#F0EBE3` panel, 3px top ink rule, serif heading, email input with 1px ink border and square ink button.
- **Nav:** masthead + section links row in Inter 13px uppercase, 1px rules above and below.
- **Caption:** Inter 13px muted, credit in uppercase 11px.

## Do's and Don'ts
**Do**
- Keep article measure between 60 and 75 characters.
- Pair a dramatic display serif with a readable text serif.
- Use rules (heavy and hairline) to structure the page.
- Caption and credit every image.

**Don't**
- Don't use rounded cards or drop shadows.
- Don't put body copy in sans-serif.
- Don't use bright brand colors; ink and paper lead.
- Don't center long text; only mastheads and pull quotes may center.

## Agent Prompt Guide
**Base prompt:**
"Use an editorial magazine style: paper #FAF7F2 background, ink #111111, editorial red #B3261E for kickers and drop caps only. Playfair Display 700 headlines, Source Serif 4 body at 19px/1.65 in a 680px measure, italic deks, Inter uppercase tracked kickers and captions. Structure with 3px ink rules and 1px hairlines, square corners, no shadows, large captioned photography."

**Examples:**
- "Homepage front: centered masthead with date line, lead story spanning 8 columns with image, kicker, 56px headline and italic dek; 4-column rail of text-only headlines separated by hairlines."
- "Article page: red kicker, huge headline, dek, byline, full-bleed hero image with caption, body with drop cap and a pull quote breaking into the margin."
- "Newsletter signup box with 3px top rule, serif heading 'The Weekend Read', square ink button."
