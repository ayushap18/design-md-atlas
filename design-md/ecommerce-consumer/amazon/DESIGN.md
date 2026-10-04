---
version: alpha
name: Amazon
description: Dense, utilitarian shopping UI with a navy header, yellow-orange buy buttons and information-packed product listings.
source: https://www.amazon.com
colors:
  primary: "#FFD814"
  primary-border: "#FCD200"
  on-primary: "#0F1111"
  buy-now: "#FFA41C"
  background: "#FFFFFF"
  surface: "#EAEDED"
  header: "#131921"
  subheader: "#232F3E"
  text: "#0F1111"
  text-muted: "#565959"
  border: "#D5D9D9"
  link: "#007185"
  link-hover: "#C7511F"
  accent: "#FF9900"
  deal: "#CC0C39"
  success: "#067D62"
typography:
  display:
    fontFamily: Amazon Ember, Arial, sans-serif
    fontSize: 1.75rem
    fontWeight: 400
    lineHeight: 1.3
  h1: { fontFamily: "Amazon Ember, Arial", fontSize: 1.5rem, fontWeight: 400, lineHeight: 1.3 }
  h2: { fontFamily: "Amazon Ember, Arial", fontSize: 1.3125rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: "Amazon Ember, Arial, sans-serif", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  price: { fontFamily: "Amazon Ember, Arial", fontSize: 1.75rem, fontWeight: 400 }
  mono: { fontFamily: ui-monospace, fontSize: 0.8125rem }
rounded:
  sm: 4px
  md: 8px
  lg: 20px
  full: 100px
spacing:
  xs: 4px
  sm: 8px
  md: 14px
  lg: 20px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    border: 1px solid {colors.primary-border}
    rounded: "{rounded.lg}"
    padding: 0 16px
    height: 32px
  button-buy-now:
    backgroundColor: "{colors.buy-now}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.lg}"
---

# Amazon — DESIGN.md

> Inspired by the public website of Amazon. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Amazon optimizes for scanning and buying, not for atmosphere. The page is a dense lattice of white cards on light grey, under a dark navy header with a giant search bar. Hierarchy is carried by price formatting, star ratings, teal links and the unmistakable yellow "Add to Cart" and orange "Buy Now" pills. Typography is small (13–14px body) and functional.

Adjectives: **dense, practical, scannable, familiar, conversion-driven.**

## Colors
| Token | Hex | Role |
|---|---|---|
| header | #131921 | Top nav bar |
| subheader | #232F3E | Secondary nav strip ("All", Today's Deals...) |
| primary | #FFD814 | Add to Cart / main yellow buttons |
| primary-border | #FCD200 | Yellow button border |
| buy-now | #FFA41C | Buy Now button |
| accent | #FF9900 | Logo smile, search button (#FEBD69), focus |
| background | #FFFFFF | Product pages, cards |
| surface | #EAEDED | Home page background behind cards |
| text | #0F1111 | Primary text |
| text-muted | #565959 | Secondary text, "List price" |
| border | #D5D9D9 | Card outlines, secondary buttons |
| link | #007185 | Teal links (product titles in some contexts, "See more") |
| link-hover | #C7511F | Orange-red link hover |
| deal | #CC0C39 | Deal badges, discount percentages |
| success | #067D62 | "In Stock" |

## Typography
- **Family:** Amazon Ember (proprietary). Free fallback: **Arial** or **Inter**; the site's own fallback is Arial.
- **Scale:** 28px product title (detail page, 400 weight), 21px section titles 700, 16px card titles, 14px body, 12px fine print.
- **Price:** split format — superscript "$" 13px, whole number 28px, superscript cents 13px.
- Star ratings: 5-star icons in #FFA41C with count link in #007185.
- Bold used sparingly for section heads; product titles are regular weight.

## Layout
- Fluid width up to ~1500px; header full width.
- Home: hero carousel fading into #EAEDED, overlaid with a 4-column grid of white "category cards" (each 2x2 image tiles), followed by horizontal product carousels.
- Product detail: 3 columns — image gallery (~40%), info column (~40%), buy box (~20%, bordered).
- Search results: left filter rail ~240px, results in 4–5 column grid or list rows.
- Spacing is tight: 8–20px between elements.

## Elevation & Depth
- Mostly flat. Buy box and secondary buttons use 1px #D5D9D9 borders.
- Buttons have a subtle `0 2px 5px 0 rgba(213,217,217,0.5)` shadow.
- Hover flyouts (account menu): white panel with `0 4px 14px rgba(0,0,0,0.25)` and a small caret.
- Focus: 3px #007185 outline-offset glow (`0 0 0 3px #C8F3FA`).

## Shapes
- Buttons: 20px radius pills (modern), 8px for some.
- Cards: 0 radius on home cards; 8px on buy box and modals.
- Search bar: 4px radius with orange #FEBD69 search button attached right.
- Icons: simple, filled, small; product images on white, contained (not cropped).

## Components
- **Add to Cart:** #FFD814 fill, 1px #FCD200 border, #0F1111 13px text, 32px tall (full-width in buy box), 20px radius. Hover #F7CA00.
- **Buy Now:** #FFA41C fill, 1px #FF8F00 border; hover #FA8900.
- **Secondary button:** white, 1px #D5D9D9, 8px radius, hover #F7FAFA.
- **Header:** 60px #131921, logo left, location "Deliver to", search bar (40px, flexible width, category dropdown in #F3F3F3 left, input, orange button right), account/orders/cart in white 12–14px with bold second line.
- **Product card:** contained image on white, title 14–16px (3-line clamp), stars, price split-format, "Prime" badge, delivery line muted.
- **Deal badge:** #CC0C39 rectangle, 12px white 700 text "Limited time deal", 2px radius.
- **Buy box:** 1px #D5D9D9 border, 8px radius, 18px padding, price, delivery in #007185, stock in #067D62 18px, quantity select, two stacked buttons.

## Do's and Don'ts
**Do**
- Pack information densely and front-load price, rating and delivery date.
- Keep the yellow/orange reserved for buy actions.
- Use teal links and orange-red hover.
- Contain product images on white with no cropping.

**Don't**
- Don't use large hero typography or generous marketing whitespace on commerce pages.
- Don't use yellow for anything other than purchase actions.
- Don't use dark mode or colored card backgrounds.
- Don't hide prices behind interactions.

## Agent Prompt Guide
**Base prompt:**
"Build an Amazon-inspired shopping UI: #131921 header with a 40px search bar and #FEBD69 search button, #EAEDED page with white cards, Arial/Inter at 14px, #0F1111 text, #007185 teal links, prices in split superscript format, star ratings in #FFA41C, and 20px-radius #FFD814 'Add to Cart' and #FFA41C 'Buy Now' buttons. Dense spacing, minimal decoration."

**Example component prompts:**
1. "Buy box: bordered white panel, 8px radius, '$24.99' split price, 'FREE delivery Tuesday' link, 'In Stock' green, quantity dropdown, stacked yellow and orange full-width pills."
2. "Search result card: contained product image, 3-line clamped title, 4.5 stars with '(12,431)' teal link, price, Prime badge, delivery line."
3. "Home category card: white, title 21px/700, 2x2 image grid with 12px captions, 'See more' teal link."
