---
version: alpha
name: Lemon Squeezy
description: Juicy merchant-of-record brand with deep violet, lemon yellow, and hot pink over clean white, rounded friendly geometry, and Circular-style geometric sans.
source: https://www.lemonsqueezy.com
colors:
  primary: "#7047EB"
  on-primary: "#FFFFFF"
  primary-deep: "#5423E7"
  background: "#FFFFFF"
  surface: "#F7F7F8"
  surface-alt: "#F4F4F4"
  text: "#121217"
  text-muted: "#6C6C89"
  border: "#D1D1DB"
  border-light: "#E8E8ED"
  accent: "#FFC233"
  accent-pink: "#F42AD3"
  dark-bg: "#121217"
typography:
  display:
    fontFamily: Circular Pro
    fontSize: 4.25rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: Circular Pro, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: Circular Pro, fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.15 }
  h3: { fontFamily: Circular Pro, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
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
    rounded: "{rounded.md}"
    padding: 12px 22px
  button-yellow:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 12px 22px
  card:
    backgroundColor: "{colors.background}"
    border: "1px solid {colors.border-light}"
    rounded: "{rounded.lg}"
    padding: 28px
---

# Lemon Squeezy — DESIGN.md

> Inspired by the public website of Lemon Squeezy. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Lemon Squeezy (payments and merchant of record for digital products) feels like a fruit stand designed by a fintech team. Clean white pages and gray-violet neutrals are punctuated by a saturated violet, a lemon yellow, and flashes of hot pink in 3D-ish illustrations of lemons and coins. Geometry is soft, type is round and geometric, and the copy is cheerful.

Hold onto: **juicy, friendly, rounded, confident, creator-focused**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#7047EB` | Violet CTA, links, focus |
| primary-deep | `#5423E7` | Hover, dark violet sections |
| background | `#FFFFFF` | Canvas |
| surface | `#F7F7F8` | Bands, card wells |
| surface-alt | `#F4F4F4` | Input fills, tags |
| text | `#121217` | Ink |
| text-muted | `#6C6C89` | Violet-tinted gray body |
| border | `#D1D1DB` | Inputs |
| border-light | `#E8E8ED` | Card outlines, dividers |
| accent | `#FFC233` | Lemon yellow: highlights, badges, illustration |
| accent-pink | `#F42AD3` | Pink pops in illustration, gradients |
| dark-bg | `#121217` | Dark footer / CTA bands |

White/gray dominates; violet is the action color; yellow and pink are joyful accents in illustration and small highlights.

## Typography
- **Headings:** Circular Pro (Lineto, commercial). Free fallback: *Figtree* 700 or *Plus Jakarta Sans* 700.
- **Body:** Inter 17px/1.6.
- **Mono:** JetBrains Mono for API/webhook snippets.
- Headlines bold (700) with slight negative tracking; H3 medium.
- Highlight a key word in headlines with a yellow marker underline (`background: linear-gradient(transparent 60%, #FFC233 60%)`).

## Layout
- Max width 1200px; 12 columns.
- Sections 96–128px apart, alternating white and `#F7F7F8`.
- Hero: centered headline, subcopy, two buttons, then a dashboard screenshot flanked by floating lemon/coin illustrations.
- Feature grid 3-up; pricing a single prominent card ("5% + 50¢") rather than tiers.

## Elevation & Depth
- Cards: `0 1px 3px rgba(18,18,23,0.06)` with 1px `#E8E8ED` border.
- Dashboard screenshots: `0 30px 60px -20px rgba(84,35,231,0.25)` violet-tinted shadow.
- Hover: lift 2px, shadow to `0 8px 24px rgba(18,18,23,0.08)`.
- Background blobs: blurred violet/pink radial gradients at 20% opacity behind heroes.

## Shapes
- Buttons 10px radius; cards 16px; showcase panels 24px; badges pill.
- Icons: rounded duotone (violet + yellow), 24px.
- Illustration: glossy 3D lemons, coins, and shopping bags with soft lighting.

## Components
- **Primary button:** `#7047EB` bg, white 16px/500, 10px radius, 12px 22px. Hover `#5423E7`. Focus ring 3px `rgba(112,71,235,0.3)`.
- **Yellow button:** `#FFC233` bg, ink text; used on dark sections. Hover `#F5B000`.
- **Secondary:** white, 1px `#D1D1DB`, ink text; hover `#F7F7F8`.
- **Nav:** white, 72px, lemon logo left, 15px/500 links, "Sign in" + violet "Get started" right.
- **Feature card:** white, 16px radius, 28px padding, 48px icon in `rgba(112,71,235,0.1)` rounded square, 20px/500 title, muted body.
- **Checkout widget:** white card 24px radius, product image, price 32px/700, inputs 44px with 10px radius, full-width violet "Pay" button.
- **Badge:** yellow `#FFC233` bg, ink 12px/600, pill.
- **Input:** 44px, `#FFFFFF`, 1px `#D1D1DB`, 10px radius; focus violet.

## Do's and Don'ts
**Do**
- Use violet for actions, yellow for delight.
- Keep shapes soft (10–24px radii).
- Include playful fruit/coin illustration in heroes.
- Use violet-tinted shadows under product shots.

**Don't**
- Don't use yellow text on white (contrast fails).
- Don't use squared corners.
- Don't use pink for interactive elements.
- Don't overload pages with dark sections; keep it bright.

## Agent Prompt Guide
**Base prompt:**
"Design in a Lemon Squeezy-inspired style: white and #F7F7F8 surfaces, ink #121217, violet #7047EB primary buttons with 10px radius, lemon yellow #FFC233 highlights and badges, hot pink #F42AD3 only in illustration. Figtree 700 headlines, Inter body, 16px rounded cards with soft violet-tinted shadows, playful 3D lemon art."

**Examples:**
- "Hero: centered 'Payments, tax & subscriptions for software companies' with a yellow marker highlight on 'software', violet + outline buttons, dashboard screenshot with floating lemons."
- "Single pricing card: '5% + 50¢', checklist of included features with violet check icons, full-width violet CTA."
- "Dark CTA band #121217 with white headline and yellow button."
