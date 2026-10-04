---
version: alpha
name: Allbirds
description: Calm, natural-materials footwear retail with soft off-white and warm grey neutrals, a geometric sans, and gentle rounded UI.
source: https://www.allbirds.com
colors:
  primary: "#212121"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F4F0"
  surface-warm: "#E0E2DC"
  text: "#212121"
  text-muted: "#6B6B6B"
  border: "#E3E3E3"
  border-strong: "#1A1A1A"
  accent: "#8B9B7E"
  sale: "#B33A2A"
  success: "#3C6E47"
typography:
  display:
    fontFamily: "Geograph, GT Walsheim, Outfit, Helvetica, sans-serif"
    fontSize: 3.5rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: "Geograph, Outfit", fontSize: 2.5rem, fontWeight: 500, lineHeight: 1.1 }
  h2: { fontFamily: "Geograph, Outfit", fontSize: 1.75rem, fontWeight: 500, lineHeight: 1.2 }
  body: { fontFamily: "Geograph, Outfit, Helvetica", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  label: { fontFamily: "Geograph, Outfit", fontSize: 0.75rem, fontWeight: 600, letterSpacing: 0.1em, textTransform: uppercase }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 16px 32px
  size-chip:
    backgroundColor: "#FFFFFF"
    border: 1px solid {colors.border}
    rounded: "{rounded.sm}"
    size: 48px
---

# Allbirds — DESIGN.md

> Inspired by the public website of Allbirds. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Allbirds presents comfort and sustainability with a quiet, natural palette. The chrome is near-black charcoal (#212121) on white and soft warm greys, letting wool-grey, sage and earthy shoe colorways do the talking. Photography is bright and outdoorsy — feet on grass, trails, city sidewalks — and product shots are clean side profiles on light grey. The UI is uncluttered: small uppercase tracked labels, medium-weight geometric headlines, square-ish buttons and simple carbon-footprint badges.

Adjectives: **natural, calm, honest, comfortable, understated.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #212121 | Buttons, headlines |
| background | #FFFFFF | Page |
| surface | #F5F4F0 | Product image backgrounds, info bands |
| surface-warm | #E0E2DC | Sustainability modules, footer band |
| text | #212121 | Body and headings |
| text-muted | #6B6B6B | Colorway names, captions |
| border | #E3E3E3 | Hairlines, size chips, inputs |
| border-strong | #1A1A1A | Selected chips, focus outlines |
| accent | #8B9B7E | Sage — sustainability callouts, icons |
| sale | #B33A2A | Sale prices |
| success | #3C6E47 | Stock / confirmation |

Neutrals dominate heavily; sage appears only in eco messaging.

## Typography
- **Family:** Geograph-style geometric sans (Allbirds uses a custom/licensed geometric). Free fallback: **Outfit** or **DM Sans**.
- **Scale:** 56px hero / 40px page / 28px section / 20px product name / 16px body / 12px uppercase labels.
- **Weights:** 500 for headlines and product names, 400 body, 600 for tracked labels and buttons.
- Labels/eyebrows: 12px uppercase, +0.1em tracking ("MEN'S TREE RUNNER").
- Buttons: 13–14px uppercase, 600, +0.08em tracking.

## Layout
- Max width 1440px, 40px gutters desktop, 16px mobile.
- PLP: left filter rail (gender, size, color dots, materials) ~240px + 3-column grid; 2 columns mobile.
- PDP: gallery grid left (2-up images), sticky info right with color dots, size grid, CTA, then accordions.
- Sections separated by 64px; hero is a full-bleed photograph with copy bottom-left.

## Elevation & Depth
- Flat. Borders and warm-grey panels provide structure.
- Quick-add overlays on product hover: white panel at card bottom with size chips, no shadow, 1px border.
- Cart drawer slides in from right with rgba(0,0,0,0.4) scrim.

## Shapes
- Buttons and size chips: 4px radius (slightly softened squares).
- Color swatches: 24–28px circles, selected gets 2px #212121 ring.
- Product images: 0–8px radius on #F5F4F0.
- Icons: 1.5px line icons, rounded joins; leaf/footprint glyphs for sustainability.

## Components
- **Primary button:** #212121 fill, white 14px/600 uppercase tracked, 16px 32px padding, 4px radius; hover #000. Full-width on PDP ("ADD TO CART — $110").
- **Secondary button:** white, 1px #212121 border, #212121 text; hover fills #212121 with white text.
- **Size chip:** 48x48, 1px #E3E3E3, 4px radius, 14px text; selected #212121 fill with white text; unavailable shows diagonal strike and #6B6B6B text.
- **Product card:** side-profile shoe on #F5F4F0, name 16px/500, colorway muted, price 16px, row of 6 swatch dots with "+4".
- **Carbon footprint badge:** #E0E2DC pill with leaf icon and "5.8 kg CO₂e" 12px/600.
- **Nav:** 64px white; left category links (Men, Women, Socks, Sale) 13px uppercase tracked; centered wordmark; icons right. Promo bar in #212121 with white 12px text.

## Do's and Don'ts
**Do**
- Keep palette natural: charcoal, white, warm greys, sage hints.
- Use uppercase tracked micro-labels and buttons.
- Show product in clean side profile and lifestyle outdoor shots.
- Surface sustainability data as calm, factual badges.

**Don't**
- Don't use bright neon accents or gradients.
- Don't use heavy shadows or big rounded pills.
- Don't overload with promo banners or urgency messaging.
- Don't set headlines in bold 700+.

## Agent Prompt Guide
**Base prompt:**
"Design an Allbirds-inspired footwear store: white and #F5F4F0 warm-grey surfaces, #212121 text and buttons, Outfit font (500 headings, 400 body), 12px uppercase tracked labels, 4px-radius buttons with uppercase 14px/600 text, sage #8B9B7E only for sustainability callouts, flat design with #E3E3E3 hairlines, bright natural photography."

**Example component prompts:**
1. "PDP buy module: 'Men's Tree Runner' 28px/500, '$98', color dots with selected ring, 6-column size chip grid (48px, 4px radius), full-width charcoal 'ADD TO CART' button, carbon badge."
2. "Product card: shoe side profile on #F5F4F0, name, colorway muted, price, swatch dot row."
3. "Sustainability band: #E0E2DC background, three columns each with sage line icon, 20px/500 title and short body."
