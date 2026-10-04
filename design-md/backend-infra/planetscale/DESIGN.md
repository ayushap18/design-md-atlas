---
version: alpha
name: PlanetScale
description: Austere, text-first database branding — system fonts, black-on-white, dense copy and almost no decoration.
source: https://planetscale.com
colors:
  primary: "#111111"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#111111"
  text-muted: "#818181"
  text-subtle: "#A1A1A1"
  border: "#E5E5E5"
  link: "#0B6EC5"
  link-hover: "#1E9DE7"
  highlight: "#FFF1A8"
  dark-background: "#0A0A0A"
  dark-text: "#EDEDED"
typography:
  display:
    fontFamily: ui-sans-serif
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  h1: { fontFamily: ui-sans-serif, fontSize: 1.5rem, fontWeight: 600, lineHeight: 1.25 }
  h2: { fontFamily: ui-sans-serif, fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.35 }
  body: { fontFamily: ui-sans-serif, fontSize: 0.9375rem, fontWeight: 400, lineHeight: 1.65 }
  small: { fontFamily: ui-sans-serif, fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem, fontWeight: 400 }
rounded:
  sm: 2px
  md: 4px
  lg: 6px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 6px 12px
  link:
    textColor: "{colors.link}"
    textDecoration: underline
  card:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: 16px
---

# PlanetScale — DESIGN.md

> Inspired by the public website of PlanetScale. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
PlanetScale's site deliberately looks like a well-typeset engineering memo. There are no hero gradients or 3D renders — just a narrow column of system-font text, blue underlined links, small benchmark tables and the occasional terminal snippet. The confidence comes from restraint: "the fastest MySQL and Postgres" stated plainly, backed by numbers. It respects the reader's time and bandwidth.

Adjectives: **austere, factual, fast, typographic, unpretentious**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #111111 | Text, primary buttons, logo |
| background | #FFFFFF | Canvas |
| surface | #F7F7F7 | Code blocks, table headers |
| text-muted | #818181 | Metadata, dates, captions |
| text-subtle | #A1A1A1 | Disabled, footnotes |
| border | #E5E5E5 | Tables, dividers |
| link / link-hover | #0B6EC5 / #1E9DE7 | Inline links, always underlined |
| highlight | #FFF1A8 | Rare marker-style emphasis |
| dark-background / dark-text | #0A0A0A / #EDEDED | Dark-mode equivalents |

Effectively monochrome. Blue is the only chroma and it only means "this is a link."

## Typography
- **Sans:** the OS stack — `ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`. If a webfont is needed, *Inter* is acceptable.
- **Mono:** `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace` for code, CLI and benchmark numbers.
- Small scale: body 15px, headings rarely above 32px. Hierarchy via weight (600) and spacing, not size.
- Sentence case everywhere. No uppercase eyebrows.

## Layout
- Single reading column, max width ~680–760px, left-aligned, generous left margin on desktop.
- Top nav is a single line of text links.
- Sections separated by 48px and occasionally a 1px rule.
- Tables used for comparisons and pricing; lists for features.
- Mobile: same column, 16px gutters — the layout barely changes.

## Elevation & Depth
- None. No shadows, no blur, no layered cards.
- Separation is whitespace and 1px #E5E5E5 borders.

## Shapes
- 4px radius on buttons and code blocks, 0–2px on tables.
- No decorative icons; the logo is a small black mark.
- Imagery is limited to occasional charts (thin lines, monochrome with one blue series) and screenshots with a 1px border.

## Components
- **Primary button:** #111111 fill, white 14px/500 text, 4px radius, 32px tall, 6px 12px padding. Hover #333333.
- **Link:** #0B6EC5, underline with 2px offset; hover #1E9DE7.
- **Nav:** logo + 4–6 text links, 14px, #111111, current page bolded; "Sign in" and a small black button at right.
- **Code block:** #F7F7F7 fill, 1px #E5E5E5 border, 4px radius, 14px mono, 12px 16px padding.
- **Table:** full-width, 14px, header row #F7F7F7 with 600 weight, rows separated by 1px #E5E5E5, numbers in mono right-aligned.
- **Blog list item:** title as a link, date in `text-muted` mono beside it, no thumbnails.
- **Input:** 32px, 1px #E5E5E5 border, 4px radius, focus border #111111.

## Do's and Don'ts
**Do**
- Use the system font stack and keep body at 15px.
- Let one narrow column carry the page.
- Underline links in blue; that's the only color.
- Present claims as numbers, tables and benchmarks.

**Don't**
- Don't add gradients, glows, illustrations or hero images.
- Don't use more than two font sizes per section.
- Don't center-align body text.
- Don't use shadows or rounded 12px+ cards.

## Agent Prompt Guide
**Base prompt:**
"Design in the PlanetScale style: white page, single left-aligned 720px column, system-ui font at 15px/1.65, #111111 text, #818181 metadata, blue #0B6EC5 underlined links as the only color, 1px #E5E5E5 rules, monospace for code and numbers, 4px radii, zero shadows or illustrations."

**Examples:**
- "Pricing page as a plain table: plan name, price, storage, rows read; black 'Get started' button under the table."
- "Blog index: list of post titles as blue links with mono dates, no images."
- "Benchmark section: short paragraph, then a monochrome line chart with one blue series and a mono caption."
