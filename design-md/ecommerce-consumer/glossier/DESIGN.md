---
version: alpha
name: Glossier
description: Soft, skin-first beauty retail in millennial pink and clean white, with Apercu type, rounded pills and dewy close-up photography.
source: https://www.glossier.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F8DDE9"
  surface-soft: "#FBEEF3"
  text: "#000000"
  text-muted: "#6E6E6E"
  border: "#E6E6E6"
  accent: "#F57EB6"
  red: "#C8102E"
  cream: "#F1E4C5"
  sand: "#F4C67B"
typography:
  display:
    fontFamily: "Apercu, Gill Sans, Karla, sans-serif"
    fontSize: 3.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: "Apercu, Karla", fontSize: 2.25rem, fontWeight: 400, lineHeight: 1.15 }
  h2: { fontFamily: "Apercu, Karla", fontSize: 1.5rem, fontWeight: 500, lineHeight: 1.25 }
  body: { fontFamily: "Apercu, Karla", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Apercu, Karla", fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: "Apercu Mono, IBM Plex Mono, monospace", fontSize: 0.75rem }
rounded:
  sm: 4px
  md: 12px
  lg: 24px
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
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-pink:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
---

# Glossier — DESIGN.md

> Inspired by the public website of Glossier. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Glossier made pale pink a whole aesthetic. The site is airy and confident: white space, the signature pink (#F8DDE9-ish "Glossier pink") as a backdrop for products and promos, black type in Apercu, and macro photography of real skin with visible texture. Copy is conversational and lowercase-leaning. UI is minimal and soft — pill buttons, rounded product tiles — but never saccharine thanks to stark black text and buttons.

Adjectives: **dewy, playful, minimal, intimate, modern.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #000000 | Buttons, logo, text |
| background | #FFFFFF | Page |
| surface | #F8DDE9 | Glossier pink — promo bands, product tile backgrounds, pink pill button |
| surface-soft | #FBEEF3 | Lighter pink wash for large areas |
| text | #000000 | Headlines and body |
| text-muted | #6E6E6E | Shade names, review counts |
| border | #E6E6E6 | Inputs, dividers |
| accent | #F57EB6 | Hot pink for small highlights (badges, hearts) |
| red | #C8102E | Sale / "Glossier red" product moments |
| cream | #F1E4C5 | Warm neutral shade backgrounds |
| sand | #F4C67B | Balm/You fragrance warm tints |

Pink and white dominate; black is the hard edge; other tints follow product colorways.

## Typography
- **Family:** Apercu (Colophon). Free fallbacks: **Karla** or **DM Sans**. Apercu Mono for tiny labels (fallback **IBM Plex Mono**).
- **Scale:** 56px hero / 36px page / 24px section / 18px product name / 16px body / 13px meta.
- **Weights:** mostly 400 — headlines are big but regular weight; 500 for product names and buttons.
- Tight tracking (−0.02em) on large text. Sentence case; playful lowercase moments in campaigns.
- Mono labels uppercase 11–12px with +0.05em for tags like "BESTSELLER".

## Layout
- Max width ~1440px, 32px gutters (16px mobile).
- PLP: 4 columns desktop, 2 mobile; each tile is a pink or tinted square with centered product cutout.
- Heroes: split image/text or full-bleed macro skin shots with small left-aligned copy.
- Section spacing 72px; lots of breathing room around product imagery.

## Elevation & Depth
- Flat. No meaningful shadows.
- Hover on product tiles swaps to an alternate model shot.
- Cart drawer slides from right on white with a pink header band.

## Shapes
- Buttons: full pills. Product tiles: 12px radius or square depending on module. Inputs: pill or 4px.
- Icons: thin 1.5px line icons, minimal.
- Imagery: dewy macro skin, product cutouts on pink, flash-lit candid shots; real faces with freckles and texture.

## Components
- **Primary button:** #000 fill, white 15px/500 text, pill, 14px 28px; hover #333.
- **Pink button:** #F8DDE9 fill, black text, pill; hover #F3C9DC.
- **Add to bag (PDP):** full-width black pill showing price inline: "Add to bag — $22".
- **Product tile:** #F8DDE9 (or shade tint) square background with product centered, name 16px/500 below, short benefit line muted, price, rating stars in black.
- **Shade selector:** 32px circular swatches, 1px #E6E6E6 border, selected shows a 1px black ring offset 3px; shade name appears to the right.
- **Badge:** white pill with 11px uppercase mono text, placed top-left on tiles.
- **Nav:** 64px white, centered wordmark "Glossier." in black, category links left, search/account/bag right. Promo bar above in pink with 13px black text.

## Do's and Don'ts
**Do**
- Use pale pink as a backdrop and black for contrast.
- Keep headline weight regular; let size and space carry hierarchy.
- Show real skin texture and dewy finishes.
- Use pill shapes for all buttons and chips.

**Don't**
- Don't use bold 700 headlines or heavy shadows.
- Don't introduce saturated blues/greens in UI chrome.
- Don't over-retouch imagery.
- Don't fill pages with dense text; keep copy short and conversational.

## Agent Prompt Guide
**Base prompt:**
"Design a Glossier-inspired beauty store: white page with #F8DDE9 pink product tiles and promo bands, Karla (stand-in for Apercu) in regular weight, large tight-tracked headlines, black pill buttons, small uppercase mono badges, flat surfaces, macro dewy skin photography, short friendly copy."

**Example component prompts:**
1. "Product tile: square #F8DDE9 background with centered product cutout, 'BESTSELLER' mono pill top-left, 'Balm Dotcom' 16px/500, 'Universal skin salve' muted, '$16'."
2. "PDP buy area: shade swatches 32px circles with offset black ring on select, then full-width black pill 'Add to bag — $22'."
3. "Promo band: full-width #F8DDE9 with 48px regular-weight headline 'Skin first. Makeup second.' and a black pill."
