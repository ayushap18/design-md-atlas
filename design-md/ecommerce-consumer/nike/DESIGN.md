---
version: alpha
name: Nike
description: High-contrast athletic retail — black, white and grey chrome, massive condensed uppercase headlines and full-bleed sport photography.
source: https://www.nike.com
colors:
  primary: "#111111"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#111111"
  text-muted: "#707072"
  border: "#CACACB"
  border-subtle: "#E5E5E5"
  accent: "#FA5400"
  sale: "#D30005"
  success: "#007D48"
typography:
  display:
    fontFamily: Nike Futura ND, Futura Condensed Extra Bold, Anton, Bebas Neue, sans-serif
    fontSize: 6rem
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: 0
    textTransform: uppercase
  h1: { fontFamily: "Helvetica Now Display, Inter, Helvetica, Arial, sans-serif", fontSize: 2rem, fontWeight: 500, lineHeight: 1.2 }
  h2: { fontFamily: "Helvetica Now Display, Inter", fontSize: 1.5rem, fontWeight: 500, lineHeight: 1.2 }
  body: { fontFamily: "Helvetica Now Text, Inter, Helvetica, Arial, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Helvetica Now Text, Inter", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 24px
  full: 30px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 24px
  xl: 48px
  xxl: 84px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 18px 24px
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    border: 1.5px solid {colors.border}
    rounded: "{rounded.full}"
    padding: 18px 24px
---

# Nike — DESIGN.md

> Inspired by the public website of Nike. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Nike.com is a monochrome frame around explosive photography. The chrome is strictly black, white and cool greys; color comes from athletes, product colorways and the occasional volt or orange campaign. Hero moments use towering condensed uppercase headlines ("JUST DO IT" energy) while all functional UI — nav, product grids, filters — uses a clean neo-grotesk in sentence case. Product grids are dense and square, cards have no borders, and buttons are fat black pills.

Adjectives: **bold, kinetic, stark, confident, product-obsessed.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #111111 | Buttons, headlines, icons |
| background | #FFFFFF | Page |
| surface | #F5F5F5 | Product image backgrounds, search field, skeletons |
| text | #111111 | All primary text |
| text-muted | #707072 | Category labels, color counts, secondary info |
| border | #CACACB | Secondary button outlines, inputs |
| border-subtle | #E5E5E5 | Dividers in filters and footer |
| accent | #FA5400 | Nike orange — "Just In"/"Member Exclusive" labels |
| sale | #D30005 | Sale prices, error messages |
| success | #007D48 | Stock and confirmation states |

Black and white make up >95% of the UI. Accents are text-color only, never fills.

## Typography
- **Families:** Futura Condensed Extra Bold (Nike Futura ND) for campaign display; Helvetica Now Display/Text for UI. Free fallbacks: **Anton** or **Bebas Neue** for display, **Inter** for UI.
- **Display:** 64–120px, uppercase, line-height 0.85–0.9, tight word stacks, usually centered over or under imagery.
- **UI scale:** 28px page titles / 24px section / 16px body & product title / 14px meta / 12px legal.
- **Weights:** UI is 500 for titles and prices, 400 for body. No italics.
- Product title is 16px/500, category line 16px/400 #707072, price 16px/500.

## Layout
- Max width 1920px, side padding 48px desktop, 24px tablet, 20px mobile.
- Product grid (PLP): 3 columns desktop with 12px gap, 2 columns mobile with 8px gap; left filter sidebar 260px, collapsible.
- Hero: full-bleed image/video, then a centered stack — small 16px/500 eyebrow, giant display headline, 16px line, and two pill buttons.
- Carousels ("Shop by Sport", "Trending") scroll horizontally with arrow buttons top-right of the section.
- Section spacing 84px.

## Elevation & Depth
- Essentially no shadows. Flat surfaces, color contrast and whitespace provide hierarchy.
- Nav becomes sticky with no shadow; dropdown mega-menu slides down on white.
- Modals and the side cart: white panel, page dimmed with rgba(17,17,17,0.4).

## Shapes
- Buttons: 30px radius pills. Search field: full pill on #F5F5F5.
- Product imagery: square, 0 radius, on #F5F5F5 background.
- Icon buttons: 36–40px circles with #E5E5E5 hover fill.
- Icons: 24px, 1.5px stroke, minimal; swoosh logo always solid black or white.

## Components
- **Primary button:** #111 fill, white 16px/500, 18px 24px padding, 30px radius. Hover: #707072 fill.
- **Secondary button:** white, 1.5px #CACACB border, #111 text; hover border #111.
- **Add to Bag:** full-width primary 60px tall; "Favorite" beneath as full-width secondary with heart icon.
- **Size selector:** grid of 5 columns, each 48px tall, 4px radius, 1px #E5E5E5 border; selected 1px #111 border; disabled grey fill #F5F5F5 with muted text.
- **Product card:** square image, color swatches row on hover, "Just In" in #FA5400 14px/500, title, category (muted), price; sale price in #D30005 with struck-through original in muted.
- **Top nav:** 60px tall, swoosh left, centered category links 16px/500 with 2px underline on hover, pill search (#F5F5F5, 36px tall) and icon buttons right. A 36px #F5F5F5 utility strip above.
- **Filter chips:** pills, 1px #CACACB, 14px/500.

## Do's and Don'ts
**Do**
- Keep chrome black/white/grey; let photos provide color.
- Use condensed uppercase display only for campaign moments.
- Use pill buttons in solid black or outlined white.
- Use square product images on #F5F5F5.

**Don't**
- Don't round product images or add card borders/shadows.
- Don't use the display face for body or UI text.
- Don't introduce brand color fills for buttons.
- Don't center-align product info text.

## Agent Prompt Guide
**Base prompt:**
"Create a Nike-inspired retail UI: white background, #111111 text, #707072 secondary, #F5F5F5 image backgrounds. UI font Inter 500/400, sentence case. Campaign headlines in Anton, uppercase, 96px, line-height 0.9. Buttons are 30px-radius pills — solid #111 or white with #CACACB border. No shadows, square product photos, 12px grid gaps."

**Example component prompts:**
1. "Product card: square image on #F5F5F5, then '#FA5400 Just In' label, title 16px/500, 'Men's Shoes' muted, '$130' 16px/500."
2. "Campaign hero: full-bleed image, beneath it centered 'WIN ON AIR' in Anton 110px uppercase, 16px subline, and two black pills 'Shop' and 'Watch'."
3. "Size picker: 5-column grid of 48px boxes, 4px radius, selected state with #111 border, and a full-width 60px black 'Add to Bag' pill."
