---
version: alpha
name: Swiss International
description: Rigorous grid-based modernism with flush-left grotesque type, asymmetric layouts, black-white-red palette, and objective, information-first hierarchy.
source: https://en.wikipedia.org/wiki/International_Typographic_Style
colors:
  primary: "#E30613"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F2F2F2"
  text: "#000000"
  text-muted: "#555555"
  border: "#000000"
  border-light: "#D0D0D0"
  accent: "#E30613"
typography:
  display:
    fontFamily: Helvetica Neue
    fontSize: 7rem
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: -0.04em
  h1: { fontFamily: Helvetica Neue, fontSize: 3.5rem, fontWeight: 700, lineHeight: 1.0, letterSpacing: -0.03em }
  h2: { fontFamily: Helvetica Neue, fontSize: 2rem, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.02em }
  h3: { fontFamily: Helvetica Neue, fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.2 }
  body: { fontFamily: Helvetica Neue, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.45 }
  caption: { fontFamily: Helvetica Neue, fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.35 }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.8125rem }
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  full: 9999px
spacing:
  unit: 8px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 96px
  section: 144px
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.background}"
    rounded: "{rounded.sm}"
    padding: 14px 24px
  button-accent:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 14px 24px
  rule:
    borderTop: "2px solid {colors.border}"
---

# Swiss International — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
The International Typographic Style (1950s Switzerland: Müller-Brockmann, Hofmann, Ruder) treats design as the objective organization of information. A visible mathematical grid governs every placement; grotesque type is set flush-left, ragged-right; hierarchy comes from size, weight, and position rather than ornament. Color is minimal — black, white, and a single signal red. On screen this produces calm, authoritative layouts that age well.

Hold onto: **rational, gridded, asymmetric, objective, typographic**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFFFFF` | Paper |
| surface | `#F2F2F2` | Quiet panels, table stripes |
| text | `#000000` | All type, rules, primary buttons |
| text-muted | `#555555` | Captions, metadata |
| border | `#000000` | Structural rules (1–2px) |
| border-light | `#D0D0D0` | Table and list dividers |
| primary / accent | `#E30613` | Swiss red: one focal element per view |

Black and white carry ~95%. Red is a single focal mark: a block, a number, a key word, or the CTA. Inverted (black-background) sections are allowed.

## Typography
- **Family:** Helvetica Neue / Neue Haas Grotesk / Akzidenz-Grotesk. Free fallbacks: *Inter* (with `font-feature-settings: "ss01","cv11"` off), *Inter Tight*, *Archivo*, or *Hanken Grotesk*.
- One family only; build hierarchy with size and weight (400 and 700).
- Flush-left, ragged-right. Never justify, never center body text.
- Display set huge and tight (0.9 leading, -0.04em). Lowercase headlines are encouraged.
- Captions and metadata small (13px) and aligned to the same baseline grid.
- Numbers (section indices "01", "02") act as structural markers.

## Layout
- 12-column grid, 24px gutters, max width 1440px, 48px outer margins. Show the grid in mind: everything snaps to column edges.
- 8px baseline grid; all vertical spacing multiples of 8.
- Asymmetry: text block in columns 1–5, image in 7–12; or headline spanning 1–9 with metadata in 10–12.
- Lots of white space — empty columns are deliberate.
- Section headers: 2px black rule across full width, index number left, title in columns 3+.

## Elevation & Depth
- None. Completely flat. No shadows, no blur, no gradients.
- Separation via rules (1px or 2px black), white space, and solid color blocks.

## Shapes
- 0px radius everywhere. Circles allowed only as pure geometric graphic elements.
- Icons: minimal, geometric, 2px stroke, square caps; prefer arrows (→ ↗) set in type.
- Imagery: black-and-white photography, high contrast, cropped hard to grid edges; geometric compositions of circles, bars, and diagonals.

## Components
- **Primary button:** black fill, white 15px/700 text, 0 radius, 14px 24px, label + "→". Hover: red fill. Focus: 2px red outline offset 2px.
- **Text link:** black, 1px underline offset 3px; hover red.
- **Nav:** top bar with wordmark left in 700, links in 400 flush to grid columns, 1px black bottom rule; no backgrounds.
- **Section header:** 2px top rule, "01" index (13px), title 32px/700 lowercase.
- **Card / list item:** no box — a 1px top rule, title 20px/700, 2-line description, metadata row (date, category) in muted 13px.
- **Table:** full-width, 1px `#D0D0D0` row rules, header row 13px/700 uppercase, numbers tabular right-aligned.
- **Input:** 48px, no fill, 2px bottom border black; focus border red. Label 13px above.
- **Poster hero:** giant two-line headline spanning 9 columns, one red geometric block or red word.

## Do's and Don'ts
**Do**
- Snap every element to the 12-column grid and 8px baseline.
- Use a single grotesque family in two weights.
- Use red for exactly one focal element per screen.
- Prefer asymmetric layouts and generous empty columns.

**Don't**
- Don't round corners or add shadows.
- Don't center-align paragraphs or justify text.
- Don't use decorative or script fonts.
- Don't introduce extra colors beyond black, white, gray, red.

## Agent Prompt Guide
**Base prompt:**
"Use a Swiss International Typographic Style: white background, black type, one Swiss red #E30613 accent per view. Single grotesque (Inter Tight or Helvetica) in 400 and 700, flush-left ragged-right, huge tight display type (0.9 line height, -0.04em). Strict 12-column grid, 8px baseline, asymmetric layouts, 2px black rules, numbered sections, 0px radius, no shadows or gradients."

**Examples:**
- "Hero: lowercase 112px headline spanning 9 columns, metadata column at right, a red square block in column 12, black button 'view work →'."
- "Article index: numbered rows separated by 1px rules, title 20px bold, date and category muted in their own columns."
- "Event poster page: B/W photo cropped to columns 7–12, giant date in red, details set small flush-left."
