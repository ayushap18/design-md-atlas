---
version: alpha
name: Neo-Brutalism
description: Loud, flat, high-contrast UI with thick black outlines, hard offset shadows, saturated candy fills, and chunky grotesque type.
source: https://www.nngroup.com/articles/neobrutalism/
colors:
  primary: "#FF6B6B"
  on-primary: "#000000"
  background: "#FFF4E0"
  surface: "#FFFFFF"
  text: "#000000"
  text-muted: "#3A3A3A"
  border: "#000000"
  accent: "#FFD23F"
  accent-blue: "#3BCEAC"
  accent-violet: "#A388EE"
  accent-pink: "#FF9FF3"
  danger: "#FF3B30"
typography:
  display:
    fontFamily: Archivo Black
    fontSize: 5rem
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.02em
  h1: { fontFamily: Archivo Black, fontSize: 3.25rem, fontWeight: 400, lineHeight: 1.0 }
  h2: { fontFamily: Space Grotesk, fontSize: 2rem, fontWeight: 700, lineHeight: 1.1 }
  h3: { fontFamily: Space Grotesk, fontSize: 1.375rem, fontWeight: 700, lineHeight: 1.2 }
  body: { fontFamily: Space Grotesk, fontSize: 1.0625rem, fontWeight: 500, lineHeight: 1.5 }
  label: { fontFamily: Space Mono, fontSize: 0.8125rem, fontWeight: 700, letterSpacing: 0.04em }
  mono: { fontFamily: Space Mono, fontSize: 0.875rem }
rounded:
  sm: 0px
  md: 6px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    border: "3px solid {colors.border}"
    shadow: "4px 4px 0 {colors.border}"
    rounded: "{rounded.md}"
    padding: 12px 22px
  card:
    backgroundColor: "{colors.surface}"
    border: "3px solid {colors.border}"
    shadow: "6px 6px 0 {colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "{colors.surface}"
    border: "3px solid {colors.border}"
    rounded: "{rounded.md}"
    padding: 12px 14px
---

# Neo-Brutalism — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
Neo-brutalism takes the raw honesty of early web pages and turns the volume up. Every element announces its edges with a thick black outline and casts a hard, unblurred shadow as if cut from paper and stacked. Colors are flat and saturated; type is heavy; nothing is subtle. The result is playful, legible, and memorable — popular with indie products, creator tools, and portfolios that want to stand out from polished SaaS sameness.

Hold onto: **loud, flat, outlined, tactile, unapologetic**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFF4E0` | Warm cream canvas (pure white is allowed but cream softens) |
| surface | `#FFFFFF` | Cards, inputs |
| text / border | `#000000` | All ink, every outline, every shadow |
| text-muted | `#3A3A3A` | Secondary copy (still dark) |
| primary | `#FF6B6B` | Coral: main CTA |
| accent | `#FFD23F` | Yellow: highlights, badges, hover fills |
| accent-blue | `#3BCEAC` | Mint-teal: secondary blocks |
| accent-violet | `#A388EE` | Lavender: section fills |
| accent-pink | `#FF9FF3` | Pink: stickers, tags |
| danger | `#FF3B30` | Errors |

Black is structural (borders, shadows, text). Pick 3 accents per page max and use them as full flat fills on cards and sections. No tints, no gradients.

## Typography
- **Display:** Archivo Black (free). Alternatives: *Rubik Mono One*, *Lexend Mega* 800.
- **Body/UI:** Space Grotesk 500–700 (free).
- **Labels/code:** Space Mono 700, uppercase.
- Headlines enormous with tight leading (0.95). Allow highlighting a word with a colored box behind it (`background: #FFD23F; padding: 0 .15em; border: 3px solid #000`).
- Body never lighter than 500 — thin type disappears next to 3px lines.

## Layout
- Max width 1200px, 12 columns, 24px gutters.
- Sections can be full-bleed color blocks separated by 3px black rules.
- Grids of cards with 24–32px gaps (the gap must exceed the shadow offset so shadows don't collide).
- Asymmetric compositions welcome: a slightly rotated card (±2°), a sticker overlapping two blocks.
- Marquee strips of uppercase text between sections.

## Elevation & Depth
- One shadow recipe: hard offset, zero blur, solid black. `4px 4px 0 #000` for small, `6px 6px 0 #000` for cards, `10px 10px 0 #000` for hero panels.
- Interaction = moving along the shadow: hover `translate(-2px,-2px)` + shadow grows by 2px; active `translate(4px,4px)` + shadow 0.
- No blur, no opacity layering, no glass.

## Shapes
- Radii 0–12px; choose one (e.g. 6px buttons, 12px cards) and keep it. Pills only for tags.
- Borders always 3px (2px allowed at small sizes like chips).
- Icons: thick 2.5px stroke, black, or solid filled glyphs inside colored circles with outlines.
- Imagery: photos with 3px black border and hard shadow; flat stickers; emoji-like illustrations.

## Components
- **Primary button:** `#FF6B6B` fill, black 16px/700 text, 3px black border, 6px radius, `4px 4px 0 #000`. Hover: fill `#FFD23F`, lift. Active: press into shadow. Focus: 3px dashed black outline offset 4px.
- **Secondary button:** white fill, same border/shadow.
- **Card:** white or accent fill, 3px border, 12px radius, 24px padding, `6px 6px 0 #000`; title in Space Grotesk 700 22px.
- **Input:** white, 3px border, 6px radius, 48px tall, 16px/500; focus adds `4px 4px 0 #000` and yellow bg `#FFFBE6`.
- **Nav:** cream bar with 3px bottom border; logo in Archivo Black; links as bordered chips on hover.
- **Badge:** pill, 2px border, accent fill, Space Mono 12px uppercase.
- **Tabs:** row of bordered boxes; active tab yellow with shadow, inactive white without.
- **Modal:** white panel 3px border, `10px 10px 0 #000`, close button as square bordered "X".

## Do's and Don'ts
**Do**
- Outline every interactive element in black.
- Use hard offset shadows with zero blur only.
- Keep fills flat and saturated.
- Make press states physically move the element.

**Don't**
- Don't use soft shadows, gradients, or translucency.
- Don't mix border widths randomly; 3px is the system.
- Don't use more than three accent colors on one page.
- Don't use light-weight or thin fonts.

## Agent Prompt Guide
**Base prompt:**
"Use a neo-brutalist style: cream #FFF4E0 background, every element outlined in 3px solid black, hard offset shadows (4–6px, zero blur, black), flat saturated fills — coral #FF6B6B, yellow #FFD23F, teal #3BCEAC, lavender #A388EE. Archivo Black headlines with 0.95 leading, Space Grotesk 500 body, Space Mono uppercase labels. Buttons translate into their shadow on press. No gradients or blur."

**Examples:**
- "Hero: giant Archivo Black headline with one word on a yellow outlined box, coral button with 4px black shadow, a lavender card rotated 2° with a product screenshot."
- "Pricing: three bordered cards (white, yellow, teal), the middle one with a pink 'POPULAR' sticker overlapping its corner."
- "Signup form: bordered inputs that gain a hard shadow on focus, full-width coral submit."
