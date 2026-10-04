---
version: alpha
name: Etsy
description: Warm handmade marketplace with Etsy orange, a soft serif-plus-sans pairing, rounded pill controls and crafty, cozy product grids.
source: https://www.etsy.com
colors:
  primary: "#222222"
  on-primary: "#FFFFFF"
  brand-orange: "#F1641E"
  background: "#FFFFFF"
  surface: "#F5F5F1"
  surface-tint: "#FDEBD2"
  text: "#222222"
  text-muted: "#595959"
  border: "#D7D7D7"
  link: "#222222"
  accent: "#F1641E"
  sale: "#258635"
  star: "#222222"
  focus: "#3F7FDB"
typography:
  display:
    fontFamily: "Graphik Webfont, Inter, -apple-system, Helvetica Neue, Arial, sans-serif"
    fontSize: 2.5rem
    fontWeight: 400
    lineHeight: 1.2
  h1: { fontFamily: "Guardian EgypTT, Roboto Slab, Georgia, serif", fontSize: 2rem, fontWeight: 300, lineHeight: 1.25 }
  h2: { fontFamily: "Graphik Webfont, Inter", fontSize: 1.375rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: "Graphik Webfont, Inter", fontSize: 1rem, fontWeight: 400, lineHeight: 1.4 }
  small: { fontFamily: "Graphik Webfont, Inter", fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 6px
  md: 12px
  lg: 24px
  full: 9999px
spacing:
  xs: 6px
  sm: 12px
  md: 18px
  lg: 30px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
    padding: 12px 18px
  search-bar:
    border: 2px solid {colors.primary}
    rounded: "{rounded.lg}"
    height: 48px
---

# Etsy — DESIGN.md

> Inspired by the public website of Etsy. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Etsy feels like a curated craft fair: warm, human, and a little whimsical. The interface itself is clean white with charcoal text and pill-shaped controls, while the orange wordmark and occasional cream/peach bands add warmth. Headlines sometimes switch to a gentle slab serif for an editorial, handmade feel. Product grids are dense with square-ish thumbnails, star ratings, and "Bestseller" or "Free shipping" badges.

Adjectives: **warm, crafty, friendly, curated, approachable.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #222222 | Primary buttons ("Add to cart"), text, search border |
| brand-orange | #F1641E | Wordmark, small highlights, Etsy Ads label |
| background | #FFFFFF | Page |
| surface | #F5F5F1 | Footer area, secondary panels |
| surface-tint | #FDEBD2 | Warm cream/peach for hero and holiday bands |
| text | #222222 | Primary text |
| text-muted | #595959 | Shop names, meta |
| border | #D7D7D7 | Card and input borders |
| sale | #258635 | Discount price text ("$18.00 (25% off)") |
| focus | #3F7FDB | Focus ring |

White and charcoal dominate; orange is mostly the logo. Seasonal bands bring lavender (#D7E6F5), mint and peach tints.

## Typography
- **Families:** Graphik (sans, UI) and Guardian Egyptian (slab serif, select headlines). Free fallbacks: **Inter** for Graphik, **Roboto Slab** (300) for the serif.
- **Scale:** 40px hero / 32px serif headline (light 300) / 22px section / 16px body / 13px meta.
- Serif headlines are light weight with friendly sentence-case phrasing ("Find things you'll love. Support independent sellers.").
- Prices 16–18px/500, star ratings 12–14px with count in muted text.

## Layout
- Max width ~1400px with 24–48px gutters.
- Home: category circles row (round thumbnails 120px with labels), then editorial "picks" grids with mixed tile sizes.
- Search results: 4–5 columns desktop, 2 mobile, 12–18px gaps; filter button and pill chips above.
- Listing page: gallery left (~60%) with vertical thumbnail strip, sticky buy panel right.
- Section spacing 48px.

## Elevation & Depth
- Mostly flat. Cards have no border; images have rounded corners.
- Hover on listing cards: `0 4px 20px rgba(34,34,34,0.15)` lift and the heart button appears.
- Popovers: white, 12px radius, `0 2px 8px rgba(34,34,34,0.25)`.

## Shapes
- Buttons and search: 24px radius (pill). Chips: full pill.
- Listing thumbnails: 6–12px radius. Category circles: 50% radius.
- Heart (favorite) button: 32px white circle with shadow, top-right of image.
- Icons: 24px, solid/outline mix, rounded and friendly.

## Components
- **Primary button:** #222 fill, white 16px/500, pill, 12px 18px (48px tall on listing page full width). Hover: scale(1.02) and slight shadow.
- **Secondary button:** white, 2px #222 border, pill.
- **Search bar:** 48px, 2px #222 border, pill; orange-filled circular search button (#F1641E) inside right edge on some variants, or charcoal icon.
- **Listing card:** image (4:3 or square, 6px radius), title 13–14px single-line clamp, star rating + review count, price 16px/500, optional "Free shipping" green-tinted pill and "Ad by Etsy seller" muted label.
- **Badge:** "Bestseller" pill on #FDEBD2 with #222 12px text; "Star Seller" uses purple #7F187F star icon.
- **Category circle:** 120px round image, 14px/500 label below.
- **Nav:** 72px; orange "Etsy" serif wordmark left, "Categories" menu, wide pill search center, sign-in text, heart/gift/cart icons right; category text links row beneath.

## Do's and Don'ts
**Do**
- Keep UI chrome neutral and let handmade product photos dominate.
- Use pill buttons and pill search with a strong 2px charcoal border.
- Use a light slab serif for warm editorial headlines.
- Show ratings, shop names and shipping badges on every card.

**Don't**
- Don't fill buttons with orange — orange is the brand mark, charcoal is the action color.
- Don't use sharp rectangular buttons or heavy borders on cards.
- Don't make it feel corporate: avoid cold blues and dense tables.
- Don't use bold heavy serifs.

## Agent Prompt Guide
**Base prompt:**
"Design an Etsy-inspired marketplace: white page, #222222 text and pill buttons (24px radius), Inter for UI with Roboto Slab 300 for warm editorial headlines, #F1641E orange only in the logo/accents, cream #FDEBD2 bands, listing cards with 6px-radius images, star ratings, price 16px/500, and soft hover lift."

**Example component prompts:**
1. "Listing card: square image with 6px radius and white circular heart button, one-line title, '★★★★★ (2,184)', '$24.00' and a cream 'Bestseller' pill."
2. "Search header: orange wordmark, 48px pill search with 2px #222 border, icon buttons."
3. "Category row: six 120px circular images with centered 14px/500 labels on a #FDEBD2 band with a light serif heading."
