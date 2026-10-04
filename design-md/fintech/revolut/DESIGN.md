---
version: alpha
name: Revolut
description: Sleek super-app marketing — monochrome black/white, bold Aeonik headlines, glossy card renders and a crisp interface blue.
source: https://www.revolut.com
colors:
  primary: "#191C1F"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F7F7F7"
  surface-alt: "#F4F4F4"
  text: "#191C1F"
  text-muted: "#717173"
  border: "#EBEBF0"
  accent: "#0666EB"
  accent-soft: "#EDEEFD"
  positive: "#13D1A3"
  negative: "#E23B4A"
typography:
  display:
    fontFamily: Aeonik Pro, Manrope
    fontSize: 5rem
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.02em
  h1: { fontFamily: "Aeonik Pro, Manrope", fontSize: 3.5rem, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.015em }
  h2: { fontFamily: "Aeonik Pro, Manrope", fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.15 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 12px
  lg: 20px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 120px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  button-secondary:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: 40px
---

# Revolut — DESIGN.md

> Inspired by the public website of Revolut. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Revolut sells a global financial super-app with lifestyle confidence. The site is high-contrast black/white with huge, heavy Aeonik headlines, full-bleed lifestyle photography and glossy renders of metal cards and phone screens. Product UI inside phones uses a clean interface blue and green/red for money movement.

Hold onto: **bold, sleek, global, aspirational, efficient**. Low text density, big visuals, short copy.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #191C1F | Primary CTAs, headlines |
| on-primary | #FFFFFF | Text on dark |
| background | #FFFFFF | Page |
| surface | #F7F7F7 | Large rounded feature panels |
| surface-alt | #F4F4F4 | Secondary buttons, chips |
| text | #191C1F | Body |
| text-muted | #717173 | Supporting copy |
| border | #EBEBF0 | Dividers |
| accent | #0666EB | Links, in-app actions, selected states |
| accent-soft | #EDEEFD | Tinted tags |
| positive | #13D1A3 | Gains, incoming money |
| negative | #E23B4A | Losses, outgoing alerts |

Black/white with light grays makes up the canvas; blue and green/red live inside product UI. Full-bleed dark sections (#191C1F or photography) alternate with white.

## Typography
- **Display:** Aeonik Pro bold 700. Free fallback: **Manrope** 800 or **Plus Jakarta Sans** 700.
- **Body:** Inter 400/500.
- Display is huge (64–96px) with -0.02em tracking and line-height ~1.0. Some heroes use all-caps short words.
- Body 16px/1.5; small labels 14px/500.
- Short, imperative copy ("Change the way you money").

## Layout
- Container max ~1200px; heroes are full-bleed photography or video with text overlaid.
- Feature panels: 32px-radius gray cards in 2-col or bento grids, each with phone render.
- Horizontal carousels of plan cards (Standard, Plus, Premium, Metal, Ultra).
- Section spacing ~96–120px.

## Elevation & Depth
- Mostly flat surfaces; depth from photoreal renders (cards, phones) with natural shadows.
- Phone mockups: `0 30px 60px rgba(0,0,0,0.2)`.
- Nav becomes white with `0 1px 0 #EBEBF0` after scroll; transparent over hero.

## Shapes
- Buttons/chips: full pill. Panels: 32px. Inner UI cards: 20px. Avatars/icons in circles.
- Icons: 24px rounded line icons; app-style round icon badges with tinted backgrounds.
- Imagery: lifestyle photography (travel, cities), premium card renders with metallic sheen, phone UI.

## Components
- **Primary button:** #191C1F, white 16px/600, pill, 52px tall, 14px 28px. Hover #33373B. On dark: white fill, black text.
- **Secondary button:** #F4F4F4, #191C1F text, pill.
- **Nav:** 72px, logo "Revolut" wordmark left, links (Personal, Business, Kids & Teens, Company) 16px/500, "Log in" text + black "Sign up" pill right.
- **Feature panel:** #F7F7F7, 32px radius, 40px padding, 32px/700 title, 16px muted body, phone render anchored bottom.
- **Plan card:** 20px radius, card render on top, plan name 24px/700, monthly price, bullet perks, pill CTA.
- **Transaction row (in UI):** 40px circle merchant icon, name 16px/500, time 13px muted, amount right — green #13D1A3 for incoming, #191C1F for outgoing.
- **Chip:** pill #F4F4F4, 14px/500; selected #191C1F with white text.
- **Input:** 56px, #F4F4F4 fill, 12px radius, no border; focus 2px #0666EB.

## Do's and Don'ts
**Do**
- Make headlines enormous and heavy.
- Use black pills for CTAs and keep chrome monochrome.
- Show premium card renders and phone UI generously.
- Use big 32px-radius gray panels for features.

**Don't**
- Don't introduce brand-colored backgrounds (no blue heroes).
- Don't use thin or light headline weights.
- Don't write long paragraphs; keep to one or two lines.
- Don't use square corners on any control.

## Agent Prompt Guide
**Base prompt:**
"Design like Revolut: white page, #191C1F text, massive Manrope/Aeonik-style bold headlines (80px+, -0.02em), Inter body. Black pill CTAs, #F4F4F4 secondary pills. Feature cards are #F7F7F7 with 32px radius and photoreal phone renders. Blue #0666EB for in-app actions; green #13D1A3 for incoming money. Full-bleed lifestyle photography heroes."

**Examples:**
- "Hero: full-bleed travel photo, white 96px headline 'Change the way you money', white 'Download the app' pill."
- "Bento: four #F7F7F7 panels (Savings, Stocks, Crypto, Travel) each with a phone screen crop."
- "Plan carousel: 5 cards with metal/colored card renders, price, perks and black pill CTA."
