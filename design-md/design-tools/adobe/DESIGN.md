---
version: alpha
name: Adobe
description: Corporate-creative polish built on the Spectrum system — clean white layouts, Adobe red brand mark and blue interactive accents.
source: https://www.adobe.com
colors:
  primary: "#3B63FB"
  on-primary: "#FFFFFF"
  primary-hover: "#274DEA"
  background: "#FFFFFF"
  surface: "#F8F8F8"
  surface-dark: "#000000"
  text: "#222222"
  text-muted: "#505050"
  border: "#DADADA"
  accent: "#EB1000"
  cta-black: "#000000"
typography:
  display:
    fontFamily: Adobe Clean Display, Source Sans 3
    fontSize: 4rem
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1: { fontFamily: "Adobe Clean Display, Source Sans 3", fontSize: 2.75rem, fontWeight: 800, lineHeight: 1.15 }
  h2: { fontFamily: "Adobe Clean, Source Sans 3", fontSize: 2rem, fontWeight: 800, lineHeight: 1.25 }
  body: { fontFamily: "Adobe Clean, Source Sans 3", fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Adobe Clean, Source Sans 3", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: Source Code Pro, fontSize: 0.875rem }
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
  section: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 7px 18px
  button-cta-black:
    backgroundColor: "{colors.cta-black}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: 7px 18px
  card:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Adobe — DESIGN.md

> Inspired by the public website of Adobe. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Adobe's web presence is large-scale, product-catalog marketing: white pages, heavy-weight headlines, rich hero imagery made with Adobe's own tools, and controls drawn from the Spectrum design system. The iconic Adobe red appears in the logo and brand moments; interactions use blue or black pill buttons.

Hold onto: **authoritative, polished, creative, systematic, accessible**. Medium density with many cards, tabs and merch blocks.

## Colors
| Token | Hex | Role |
|---|---|---|
| accent | #EB1000 | Adobe red — logo, brand ribbons, sale flags |
| primary | #3B63FB | Spectrum accent blue: "Buy now", links, focus |
| primary-hover | #274DEA | Hover |
| cta-black | #000000 | Secondary emphasis CTA ("Free trial") |
| background | #FFFFFF | Page |
| surface | #F8F8F8 | Section backgrounds, card trays |
| surface-dark | #000000 | Dark heroes, footer-adjacent bands |
| text | #222222 | Headlines and body |
| text-muted | #505050 | Supporting copy |
| border | #DADADA | Card outlines, dividers |

White + near-black text dominate. Red is brand only (never an interactive fill). Product app icons supply additional color (Photoshop blue, Illustrator orange, Premiere purple).

## Typography
- **Primary:** Adobe Clean / Adobe Clean Display (proprietary). Free fallback: **Source Sans 3** (Adobe open source).
- Display weights are very heavy (800–900) for hero headlines; body is regular 18px/1.5.
- Light negative tracking on display only.
- Sentence case; product names capitalized (Adobe Photoshop, Acrobat).

## Layout
- Max width ~1200px (1440px for wide heroes); 32px gutters desktop, 16px mobile.
- Hero: split text-left / image-right, or full-bleed imagery with overlaid text.
- Merch cards in 3–4 column rows with consistent heights.
- Tabbed product switchers and accordion FAQs are common.
- Section spacing ~64–80px.

## Elevation & Depth
- Cards: 1px #DADADA border or soft shadow `0 3px 6px rgba(0,0,0,0.16)` on hover.
- Popovers (Spectrum): `0 1px 4px rgba(0,0,0,0.15)`, 8px radius.
- Imagery carries depth; UI stays mostly flat.

## Shapes
- Buttons: full pill (Spectrum 2 style), 32–40px tall.
- Cards: 8–16px radius. Inputs: 8px radius.
- Icons: Spectrum workflow icons — 18–20px, 2px stroke, simple geometry. Product logos are rounded-square app tiles.
- Imagery: high-production creative imagery (composites, illustration, 3D) showing what the tools can make.

## Components
- **Primary button:** #3B63FB, white 15px/700, pill, 32–40px tall, 7px 18px. Hover #274DEA. Focus: 2px blue ring with 2px gap.
- **Black CTA:** #000 fill, white text, pill. Hover #222.
- **Outline button:** 2px #222 border, #222 text, pill; hover fills #222 with white text.
- **Global nav:** 64px white, red Adobe logo left, menus (Creativity & Design, PDF & E-signatures, Marketing & Commerce, Help & Support) 14px/700, search icon, app switcher grid, "Sign in" blue-outlined pill.
- **Merch card:** white, 1px #DADADA, 16px radius, 24px padding, app icon 40px top-left, product name 20px/800, price "US$22.99/mo" bold, body 14px, blue "Buy now" + text "Free trial" link.
- **Tabs:** 16px/700 labels with 2px #222 underline on active.
- **Promo ribbon:** #EB1000 or black bar, white 14px text, top of page.
- **Input:** 40px, 1px #8E8E8E border, 8px radius; focus border #3B63FB.

## Do's and Don'ts
**Do**
- Use extra-heavy weights for hero headlines and lighter body for contrast.
- Keep Adobe red for the logo and brand flags only.
- Make actions blue or black pills.
- Use bold, high-craft imagery that demonstrates creative output.

**Don't**
- Don't use red as a button or link color.
- Don't use square-cornered primary buttons.
- Don't use thin fonts for headlines.
- Don't mix more than two CTA styles in one card.

## Agent Prompt Guide
**Base prompt:**
"Design in Adobe's style: white page, #222 text, Source Sans 3 with 900-weight hero headlines and 18px regular body. Blue #3B63FB pill primary buttons, black pill secondary CTAs, Adobe red #EB1000 only for logo and promo ribbons. Merch cards with 16px radius, 1px #DADADA border, app icon, price and 'Buy now'. Rich creative imagery in split heroes."

**Examples:**
- "Hero: left 64px black headline, 18px body, blue 'Buy now' and black 'Free trial' pills; right a vivid composite image."
- "Plan comparison: four merch cards with app icon, price, bullet list and pill CTAs."
- "Promo ribbon: full-width black bar with white text and a blue text link."
