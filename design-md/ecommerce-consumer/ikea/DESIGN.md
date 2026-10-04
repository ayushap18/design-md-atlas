---
version: alpha
name: IKEA
description: Friendly, democratic home-furnishing retail with Swedish blue and yellow, a rounded humanist sans and clear product-first grids.
source: https://www.ikea.com
colors:
  primary: "#0058A3"
  on-primary: "#FFFFFF"
  brand-yellow: "#FFDB00"
  on-yellow: "#111111"
  background: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#111111"
  text-muted: "#484848"
  border: "#DFDFDF"
  border-strong: "#929292"
  accent: "#FFDB00"
  price-family: "#0058A3"
  sale: "#CC0008"
  success: "#0A8A00"
typography:
  display:
    fontFamily: "Noto IKEA, Noto Sans, Verdana, sans-serif"
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.0125em
  h1: { fontFamily: "Noto IKEA, Noto Sans", fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.2 }
  h2: { fontFamily: "Noto IKEA, Noto Sans", fontSize: 1.5rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: "Noto IKEA, Noto Sans", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.57 }
  price: { fontFamily: "Noto IKEA, Noto Sans", fontSize: 1.5rem, fontWeight: 700, lineHeight: 1 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 64px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  button-primary:
    backgroundColor: "#111111"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: 0 24px
    height: 56px
  button-emphasised:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    height: 56px
---

# IKEA — DESIGN.md

> Inspired by the public website of IKEA. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
IKEA's site (built on its "Skapa" design system) feels like a well-organized showroom: lots of white, room-set photography, clear product cards and big bold prices. The famous blue (#0058A3) and yellow (#FFDB00) are deployed with discipline — blue for emphasized actions and links, yellow for the logo and price-highlight tags ("Lower price", "New"). Typography is Noto IKEA, a friendly humanist sans that supports every market's script. Buttons are fat, fully rounded and easy to tap.

Adjectives: **democratic, practical, cheerful, orderly, accessible.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #0058A3 | Emphasised buttons, links, focus, IKEA Family price |
| brand-yellow | #FFDB00 | Logo, price tags, promo banners |
| background | #FFFFFF | Page |
| surface | #F5F5F5 | Product image backgrounds, info panels |
| text | #111111 | Primary text and the default black pill button |
| text-muted | #484848 | Product descriptors ("Sofa, Kilanda light beige") |
| border | #DFDFDF | Dividers, card hairlines |
| border-strong | #929292 | Input and secondary button outlines |
| sale | #CC0008 | Lower-price / sale callouts |
| success | #0A8A00 | Stock availability dots |

White dominates; black is the default action color; blue and yellow are accents with specific jobs.

## Typography
- **Family:** Noto IKEA (custom cut of Noto Sans). Free fallback: **Noto Sans**, then Verdana.
- **Scale:** 48px hero / 36px page title / 24px section / 16px product name (bold, uppercase-free) / 14px body / 12px meta.
- **Product naming:** product name bold 14–16px ("KIVIK"), uppercase as written in Swedish names, followed by a regular-weight descriptor line.
- **Prices:** bold, with currency symbol and decimals as small superscripts: "$" 14px, "599" 24px, ".99" 14px.
- Headlines bold 700 with slight negative tracking; body 400.

## Layout
- Max width 1440px with 48px gutters desktop (24px tablet, 16px mobile).
- PLP: 4 columns desktop, 2 mobile, 16–24px gaps; filters as a row of pill chips above the grid.
- PIP (product page): large gallery left (~60%), sticky buy module right; accordions below for details.
- Inspirational room sets with clickable product "hotspot" dots overlaid.
- Section spacing ~64px.

## Elevation & Depth
- Flat. Separation by #DFDFDF hairlines and #F5F5F5 panels.
- Modal sheets slide in from the right on desktop (480px wide) and from bottom on mobile, with page scrim rgba(17,17,17,0.5).
- Hotspot dots: white circle with subtle `0 1px 4px rgba(0,0,0,0.25)`.

## Shapes
- Buttons: fully rounded pills (64px radius), 56px tall large / 40px small.
- Chips/pills: full round. Inputs: 4px radius.
- Product images: square, 0 radius, on #F5F5F5.
- Icons: 24px, 2px stroke, rounded caps, friendly geometry.

## Components
- **Primary button:** #111111 fill, white 14px/700 text, 56px tall, pill. Hover #333.
- **Emphasised button:** #0058A3 fill, white text ("Add to bag"), pill, 56px.
- **Secondary button:** white, 1px #929292 border, #111 text, pill; hover border #111.
- **Price tag (highlight):** #FFDB00 rectangle with slight left offset shadow-block in #CC0008 for "Lower price"; text black, bold.
- **Product card:** square image on #F5F5F5, optional "New" in #CC0008 12px/700, name 14px/700, descriptor 14px #484848, price block, star rating, circular add-to-bag icon button (40px, #0058A3) at bottom-right.
- **Header:** white, 80px; logo left, rounded search field (#F5F5F5, 48px, full pill) centered, icon buttons right. Hamburger "Products" mega-menu.
- **Stock indicator:** 8px colored dot + 14px text.

## Do's and Don'ts
**Do**
- Use bold, oversized prices with superscript cents.
- Keep pills chunky and tappable (≥40px).
- Use blue only for emphasised actions and links; yellow only for logo and price highlights.
- Show furniture in real room context photography.

**Don't**
- Don't build large blue or yellow page backgrounds (except promo banners).
- Don't use thin or condensed type.
- Don't round product images.
- Don't use more than one emphasised blue button per view.

## Agent Prompt Guide
**Base prompt:**
"Design an IKEA-inspired furniture store UI: white page, Noto Sans, #111111 text, #484848 descriptors, square product images on #F5F5F5, bold prices with superscript cents, 56px pill buttons (black default, #0058A3 for 'Add to bag'), #FFDB00 yellow price tags, 24px rounded line icons, flat surfaces with #DFDFDF hairlines."

**Example component prompts:**
1. "Product card: square image, 'KIVIK' 14px bold, 'Sofa, Tibbleby beige/grey' muted, '$899' bold 24px with superscript, stars, and a 40px blue circular bag icon button."
2. "Lower-price tag: #FFDB00 block with offset red #CC0008 corner, black bold price inside."
3. "Right-side drawer: 480px white panel with title 24px/700, list of options, sticky bottom with full-width black pill."
