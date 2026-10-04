---
version: alpha
name: Mailchimp
description: Cavendish-yellow and peppercorn-brown brand with an expressive serif, quirky illustration, and a confident, slightly offbeat marketing voice.
source: https://mailchimp.com
colors:
  primary: "#FFE01B"
  on-primary: "#231E15"
  background: "#FFFFFF"
  surface: "#F6F6F4"
  surface-warm: "#FBEECA"
  text: "#231E15"
  text-muted: "#575757"
  border: "#DBD9D2"
  accent: "#007C89"
  accent-dark: "#004E56"
  accent-mint: "#4BC4C2"
  accent-plum: "#692340"
typography:
  display:
    fontFamily: Means Web
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.02em
  h1: { fontFamily: Means Web, fontSize: 3rem, fontWeight: 400, lineHeight: 1.08 }
  h2: { fontFamily: Means Web, fontSize: 2.25rem, fontWeight: 400, lineHeight: 1.15 }
  h3: { fontFamily: Graphik Web, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Graphik Web, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  label: { fontFamily: Graphik Web, fontSize: 0.8125rem, fontWeight: 500, letterSpacing: 0.02em }
  mono: { fontFamily: Source Code Pro, fontSize: 0.875rem }
rounded:
  sm: 0px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 40px
  xl: 80px
  section: 120px
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 14px 24px
  button-yellow:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 14px 24px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: 40px
---

# Mailchimp — DESIGN.md

> Inspired by the public website of Mailchimp. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Mailchimp is the rare B2B brand that feels like an indie magazine. Big fields of Cavendish Yellow, a dark peppercorn-brown ink instead of black, a characterful serif (Means) for headlines, and hand-made, slightly absurd illustrations. Corners are sharp; layouts are bold blocks of color. The tone is witty but the information architecture is plainly practical.

Hold onto: **bold, quirky, editorial, warm, squared-off**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#FFE01B` | Cavendish Yellow: hero fields, highlight blocks, yellow buttons |
| on-primary | `#231E15` | Text on yellow |
| background | `#FFFFFF` | Default |
| surface | `#F6F6F4` | Neutral bands, cards |
| surface-warm | `#FBEECA` | Soft yellow panels |
| text | `#231E15` | Peppercorn ink, also dark buttons and footers |
| text-muted | `#575757` | Secondary copy |
| border | `#DBD9D2` | Dividers |
| accent | `#007C89` | Teal links and interactive text |
| accent-dark | `#004E56` | Deep teal sections |
| accent-mint | `#4BC4C2` | Illustration, charts |
| accent-plum | `#692340` | Illustration, occasional dark panel |

Yellow, white, and peppercorn dominate. Teal handles links. Mint and plum appear mainly in illustration and data viz.

## Typography
- **Display/headings:** Means (proprietary serif). Free fallback: *Cooper*-adjacent options are paid, so use *Fraunces* (weight 400, SOFT 0) or *Recoleta*-style *Young Serif*.
- **Body/UI:** Graphik (proprietary). Free fallback: *Inter* or *Figtree*.
- **Mono:** Source Code Pro.
- Headings are regular weight (400) serif; the face carries the personality, not boldness.
- Sentence case. Eyebrows in 13px Graphik 500, not uppercase.
- Body 16px/1.6; long-form content up to 18px.

## Layout
- Max width 1200px; 12 columns; 24px gutters.
- Section padding 96–120px; full-bleed yellow hero, then alternating white, `#F6F6F4`, and the occasional peppercorn or teal band.
- Asymmetric splits (7/5) with illustrations overlapping the column edge.
- Content-heavy pages (resources, guides) use a 3-column card grid.

## Elevation & Depth
- Almost entirely flat. Depth through color blocking, not shadow.
- Dropdown menus: `0 4px 16px rgba(35,30,21,0.12)`, 1px border `#DBD9D2`.
- Product screenshots get a 1px border, no shadow.

## Shapes
- Square corners (0px) on buttons, cards, and color blocks. Inputs 4px max.
- Pills only for tags.
- Illustrations: flat, hand-drawn, surreal objects (the Freddie winking chimp, odd hands, fruit), limited palette with yellow, plum, mint.
- Photography: candid small-business owners, color-graded warm.

## Components
- **Primary button:** peppercorn bg `#231E15`, white 16px/500 text, 0 radius, 14px 24px padding. Hover: `#403B3B`. On yellow sections this is the default CTA.
- **Yellow button:** yellow bg, peppercorn text; used on dark/teal bands. Hover: `#F5D300`.
- **Ghost button:** 1px peppercorn border, transparent bg; hover fills peppercorn.
- **Link:** teal `#007C89`, underlined, 500 weight.
- **Nav:** white, 72px, Freddie logo left, menu items 15px/500, "Log In" text + "Sign Up" peppercorn button right.
- **Feature card:** `#F6F6F4` bg, square, 40px padding, spot illustration top, serif H3 at 24px, body, teal link.
- **Input:** 48px, 1px `#BCBAB8` border, 4px radius; focus border teal with 2px teal ring.
- **Callout banner:** full-width `#FBEECA` strip with serif line and arrow link.

## Do's and Don'ts
**Do**
- Use big flat yellow fields with peppercorn text.
- Keep corners square on buttons and cards.
- Pair a serif headline with a sans body every time.
- Add one illustrative oddity per section.

**Don't**
- Don't use pure black; use `#231E15`.
- Don't add gradients or glossy effects.
- Don't bold the serif headlines.
- Don't put white text on yellow.

## Agent Prompt Guide
**Base prompt:**
"Design in a Mailchimp-inspired style: full-bleed Cavendish yellow #FFE01B hero, peppercorn #231E15 ink, white and #F6F6F4 sections, teal #007C89 links. Headlines in Fraunces 400 serif, body in Inter 16px/1.6. Square 0px corners on buttons and cards, flat color blocking, no shadows, quirky flat illustrations."

**Examples:**
- "Yellow hero with 72px serif headline 'Turn emails into revenue', sans subcopy, square peppercorn 'Start free trial' button, surreal illustration on the right."
- "Three-up resource cards on #F6F6F4 with spot illustrations, serif titles, teal 'Read more' links."
- "Dark peppercorn CTA band with serif white headline and a square yellow button."
