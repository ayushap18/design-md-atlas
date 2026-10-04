---
version: alpha
name: Dyson
description: Engineering-led premium retail — black, white and cool greys around hero product engineering shots, with Futura-style geometric type and crisp rectangular controls.
source: https://www.dyson.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F2F2F2"
  surface-dark: "#1A1A1A"
  text: "#333333"
  text-muted: "#757575"
  border: "#D6D6D6"
  accent: "#BF0A8F"
  nickel: "#C5C6C8"
  success: "#2E7D32"
  sale: "#C8102E"
typography:
  display:
    fontFamily: Futura
    fontSize: 3.5rem
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1: { fontFamily: Futura, fontSize: 2.5rem, fontWeight: 500, lineHeight: 1.15 }
  h2: { fontFamily: Futura, fontSize: 1.75rem, fontWeight: 500, lineHeight: 1.2 }
  h3: { fontFamily: Futura, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Futura, fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: Futura, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.875rem }
rounded:
  sm: 0px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 72px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 14px 32px
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 14px 32px
  product-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: 20px
---

# Dyson — DESIGN.md

> Inspired by the public website of Dyson. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Dyson sells engineering. The site frames each machine like a lab specimen: isolated product renders, cutaway diagrams, airflow visualizations and hard numbers ("60 AW suction", "99.97% of particles"). The interface itself is a clean, black-and-white retail system with geometric type and square-edged controls, letting the products' own nickel, fuchsia, copper and purple finishes provide color.

Adjectives: **engineered, premium, technical, clean, assertive**.

Density is moderate: big storytelling heroes up top, then fairly information-rich comparison tables and product grids.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#000000` | Primary buttons, nav, key headlines |
| on-primary | `#FFFFFF` | Text on black |
| background | `#FFFFFF` | Page canvas |
| surface | `#F2F2F2` | Product plates, comparison tables, promo strips |
| surface-dark | `#1A1A1A` | Technology storytelling sections |
| text | `#333333` | Body copy |
| text-muted | `#757575` | Captions, legal, secondary specs |
| border | `#D6D6D6` | Dividers, input borders |
| accent | `#BF0A8F` | Fuchsia from product finishes — small highlights, "New" flags |
| nickel | `#C5C6C8` | Metallic neutral for illustrations and placeholders |
| success / sale | `#2E7D32` / `#C8102E` | Stock status / price reductions |

Black, white and greys dominate. Product-finish colors (fuchsia, purple, copper, prussian blue) appear in photography and in tiny UI touches only.

## Typography
- Dyson's type is a geometric sans in the Futura lineage (custom "Dyson Futura"). Free fallbacks: **Jost** (closest free Futura-alike), **Outfit**, then Arial.
- Headings at medium weight (500); body at 400. Avoid heavy 700+ except for prices.
- Numbers are hero content: large stat figures (48–64px) with short muted descriptors.
- Sentence case for headlines; product names keep their model codes ("Dyson V15 Detect", "Supersonic Nural").
- Line length ~65–75 characters; body 16px with relaxed 1.55 leading.

## Layout
- 12-column grid, max content width ~1440px, 24px gutters, 16–48px outer margins.
- Hero: product render on dark or light seamless background, headline + subline left, CTA pair, often with a key stat row.
- Technology sections alternate image/text in 50/50 splits, frequently on near-black `#1A1A1A`.
- Product listing: 3–4 column grid with filter sidebar on desktop.
- Comparison tables: models in columns, features in rows, checkmarks and numeric specs.
- Section spacing 72–96px desktop, 48px mobile.

## Elevation & Depth
- Mostly flat; separation via `#F2F2F2` plates and hairline borders.
- Product renders carry their own soft studio shadows.
- Light card hover: `0 4px 16px rgba(0,0,0,0.08)` on product tiles.
- Technical illustrations use glowing airflow lines and particle visualizations on dark backgrounds — the main source of "depth".
- Sticky add-to-basket bar with a top hairline and subtle shadow.

## Shapes
- Square corners (0px) on buttons, inputs and product plates; 4px for small chips; circles for color-finish swatches.
- Icons: simple line icons 1.5px stroke, 24px; technical pictograms for features (filtration, suction, battery).
- Imagery: high-res product renders, macro shots of motors and filters, cutaways and exploded views.

## Components
- **Primary button**: black, white 16px medium label, 0 radius, 48–52px tall, full-width on mobile. Hover: `#333333`.
- **Secondary button**: white with 1px black border; on dark sections, white outline with white text.
- **Product card**: `#F2F2F2` plate with centered render, name 18px medium, short benefit line, price bold, finish swatches as 16px circles, "Add to basket" black button.
- **Stat block**: large number 56px medium, unit inline smaller, 14px muted label below.
- **Inputs**: 1px `#D6D6D6` border, 0 radius, 48px tall, label above; focus border black.
- **Tabs**: text tabs with 2px black underline on active.
- **Promo banner**: full-width black strip, white 14px text, small link.
- **Badge**: "New" in fuchsia text or small fuchsia fill with white label, 4px radius.

## Do's and Don'ts
**Do**
- Lead with engineering: numbers, diagrams, cutaways.
- Keep controls rectangular and black/white.
- Use a geometric sans (Jost fallback) at medium weight for headings.
- Show product finish colors via swatches and photography.
- Use dark sections for "how it works" storytelling.

**Don't**
- Don't round buttons into pills or use soft pastel UI fills.
- Don't use fuchsia for primary CTAs.
- Don't rely on lifestyle stock imagery over product engineering shots.
- Don't stack multiple competing CTAs in a hero.
- Don't use humanist or serif type.

## Agent Prompt Guide
Paste-ready prompt:
> Design in the spirit of Dyson: white `#FFFFFF` page, body text `#333333`, black `#000000` square-cornered primary buttons, grey `#F2F2F2` product plates, near-black `#1A1A1A` technology sections, hairlines `#D6D6D6`. Accent fuchsia `#BF0A8F` used only for small "New" flags. Font: Jost (Futura-style) medium headings, regular body. Big engineering stats, product renders, airflow diagrams. Premium, technical, clean.

Example component prompts:
1. "A stat row on `#1A1A1A`: three columns '240 AW / suction', '60 min / run time', '99.99% / particles captured', numbers 56px white, labels 14px grey."
2. "A product card: `#F2F2F2` plate, centered vacuum render, 'Dyson V15 Detect' 18px medium, price bold, three 16px finish swatches, full-width black 'Add to basket' button."
3. "A comparison table: three models as columns, features as rows with checkmarks, 1px `#D6D6D6` rules, sticky header row."
