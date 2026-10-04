---
version: alpha
name: Shopify
description: Confident commerce-platform marketing with near-black canvases, a fresh lime-green brand accent and bold editorial sans headlines.
source: https://www.shopify.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F3F3F3"
  surface-dark: "#0B0B0B"
  text: "#000000"
  text-muted: "#616161"
  border: "#E3E3E3"
  accent: "#95BF47"
  accent-bright: "#D4F9B4"
  brand-green: "#008060"
  link: "#005BD3"
typography:
  display:
    fontFamily: Inter Display, Inter, -apple-system, sans-serif
    fontSize: 4.5rem
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.035em
  h1: { fontFamily: Inter Display, fontSize: 3rem, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.03em }
  h2: { fontFamily: Inter Display, fontSize: 2rem, fontWeight: 500, lineHeight: 1.15 }
  body: { fontFamily: Inter, fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 450, lineHeight: 1.4 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 12px
  lg: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 40px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-on-dark:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.full}"
    padding: 14px 28px
---

# Shopify — DESIGN.md

> Inspired by the public website of Shopify. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Shopify's marketing site reads like a premium tech launch: oversized tight-tracked headlines, full-bleed product imagery and video, and long stretches of black or near-black canvas punctuated by light sections. The signature Shopify green appears in the bag logo and in soft lime highlights, but the interface itself leans monochrome so merchant storefront screenshots provide color. The merchant admin (Polaris) is the opposite — dense, neutral, utilitarian — but this file follows the public site.

Adjectives: **ambitious, cinematic, crisp, merchant-first, monochrome-with-a-lime-spark.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #000000 | Primary buttons on light, headline text |
| on-primary | #FFFFFF | Text on black buttons |
| background | #FFFFFF | Light sections |
| surface | #F3F3F3 | Cards, pricing panels, alternating bands |
| surface-dark | #0B0B0B | Hero and feature bands (white text) |
| text | #000000 | Primary copy |
| text-muted | #616161 | Supporting copy, captions |
| border | #E3E3E3 | Dividers, card outlines |
| accent | #95BF47 | Classic Shopify bag green (logo, illustrations) |
| accent-bright | #D4F9B4 | Lime highlight chips, gradient glows on dark |
| brand-green | #008060 | Deep green (Polaris primary historically), success |
| link | #005BD3 | Inline links in docs/help |

Dark sections dominate the hero and feature storytelling; green is accent-only.

## Typography
- **Family:** Shopify uses a custom/Inter-based grotesk on marketing and **Inter** in Polaris. Free fallback: **Inter / Inter Display**.
- **Scale:** 72px hero / 48px section / 32px sub / 24px card title / 18px body lead / 16px body / 14px meta.
- **Weights:** 500 for display (not bold — size does the work), 400 body, 600 for buttons and eyebrow labels.
- Tight tracking on big type (−0.03 to −0.035em); normal on body.
- Eyebrow labels: 14px, 600, sentence case, sometimes in muted grey above headlines.

## Layout
- 12-column grid, max width 1440px, 40px gutters desktop, 20px mobile.
- Hero: full-viewport dark band, headline left-aligned or centered, two CTAs (filled + outline) below a 20px lead.
- Section padding 96–128px vertical on desktop, 64px on mobile.
- Feature rows alternate media-left / media-right with 64px gap.
- Logo walls and stat rows ("Millions of merchants") use 4-up grids.

## Elevation & Depth
- Flat by default; depth comes from imagery, device mockups and dark/light contrast.
- Cards: 1px #E3E3E3 border or #F3F3F3 fill, no shadow.
- Floating UI mocks: `0 24px 48px rgba(0,0,0,0.18)` to suggest product layers.
- Sticky nav gets a white background with a 1px bottom border after scroll; on dark heroes it is transparent with white text.

## Shapes
- Buttons: full pill. Cards and media: 12–24px radius. Inputs: 8–12px.
- Icons: simple 1.5–2px stroke line icons, 24px.
- Imagery: real merchant products, storefront screenshots in device frames, short looping videos.

## Components
- **Primary button (light):** #000 fill, white 16px/600 text, pill, 14px 28px padding, 48px height. Hover: #303030.
- **Primary button (dark):** white fill, black text; hover #E3E3E3.
- **Secondary button:** transparent with 1px current-color border, pill.
- **Email capture hero:** 56px pill input (white, 1px #E3E3E3) joined with a black "Start for free" pill button.
- **Nav:** 64–72px tall, logo left, menu items 16px/500 with chevron dropdowns, "Log in" text link and "Start for free" black pill right. Mega-menu panels white with 24px radius bottom corners.
- **Feature card:** #F3F3F3 fill, 24px radius, 32px padding, 24px title/500, muted body, optional image bleeding to edges.
- **Pricing card:** white, 1px border, 16px radius; plan name 20px/600, price 48px/500, list with check icons in brand-green.
- **Badge:** lime #D4F9B4 pill with black 12px/600 text ("New").

## Do's and Don'ts
**Do**
- Alternate dark and light full-width bands to pace long pages.
- Set headlines big, weight 500, tightly tracked.
- Keep buttons pill-shaped and black/white; let green be a highlight.
- Show real products and storefronts in device frames.

**Don't**
- Don't paint large areas in #95BF47 — it reads as dated.
- Don't use bold 800 weights or uppercase headlines.
- Don't use sharp-cornered buttons.
- Don't fill cards with heavy drop shadows.

## Agent Prompt Guide
**Base prompt:**
"Design a Shopify-inspired marketing page: alternating #0B0B0B and #FFFFFF full-width sections, Inter Display headlines at 500 weight with −0.03em tracking, 18px Inter body, black/white pill buttons (14px 28px), #F3F3F3 cards with 24px radius, and lime #D4F9B4 used only for small badges or glows. Generous 96px section padding."

**Example component prompts:**
1. "Hero on #0B0B0B: 72px white headline, 20px #BDBDBD lead, a white 'Start free trial' pill plus outline pill, and a floating storefront mockup with a large soft shadow."
2. "Pricing row: three white cards, 16px radius, 1px #E3E3E3 border, 48px price, feature list with #008060 check icons, black pill CTA."
3. "Email capture: 56px pill input joined to a black pill button labeled 'Start for free'."
