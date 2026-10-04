---
version: alpha
name: Wise
description: Bright, honest money-moving brand — vivid lime green on deep forest green, chunky heavy headlines and friendly rounded UI.
source: https://wise.com
colors:
  primary: "#9FE870"
  on-primary: "#163300"
  background: "#FFFFFF"
  surface: "#F2F5F0"
  surface-dark: "#163300"
  text: "#0E0F0C"
  text-muted: "#454745"
  border: "#E2E6E0"
  accent: "#163300"
  accent-lime-light: "#E2F6D5"
  accent-orange: "#FFC091"
  accent-blue: "#A0E1E1"
  accent-pink: "#FFD7EF"
  negative: "#A8200D"
typography:
  display:
    fontFamily: Wise Sans, Archivo Black
    fontSize: 6rem
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: -0.01em
    textTransform: uppercase
  h1: { fontFamily: Inter, fontSize: 3rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: Inter, fontSize: 2rem, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.015em }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 10px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 112px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    border: 1px solid {colors.accent}
    rounded: "{rounded.full}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: 40px
---

# Wise — DESIGN.md

> Inspired by the public website of Wise. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Wise (formerly TransferWise) has one of fintech's most recognizable identities: a bright lime "Wise Green" paired with deep "Forest Green", heavy condensed uppercase display type, and flag-and-currency iconography. It feels honest, energetic and global — transparency over luxury. The fee calculator is the hero product moment.

Hold onto: **bright, honest, energetic, global, straightforward**. Medium density; clear, plain-English copy.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #9FE870 | Wise Green — CTAs, highlight sections |
| on-primary / accent | #163300 | Forest Green — text on lime, dark sections, outlines |
| background | #FFFFFF | Page |
| surface | #F2F5F0 | Calculator panel, feature cards |
| surface-dark | #163300 | Dark feature bands |
| text | #0E0F0C | Body and headlines |
| text-muted | #454745 | Supporting copy |
| border | #E2E6E0 | Inputs, dividers |
| accent-lime-light | #E2F6D5 | Tinted backgrounds, tags |
| accent-orange / blue / pink | #FFC091 / #A0E1E1 / #FFD7EF | Secondary illustration and card fills |
| negative | #A8200D | Errors |

Lime and forest green are the pair; never use lime text on white (fails contrast) — lime is a fill, forest is its ink.

## Typography
- **Display:** Wise Sans (heavy, condensed, uppercase). Free fallback: **Archivo Black** or **Anton** for a condensed feel.
- **UI/body:** Inter 400–600.
- Display headlines are ALL CAPS, 900 weight, line-height ~0.85, set huge (72–120px).
- H1/H2 in Inter 600, sentence case.
- Plain-spoken copy ("Send money abroad for less").

## Layout
- Container max 1200px, 24px gutters.
- Hero split: giant uppercase headline left, live currency calculator card right.
- Feature cards in 2–3 col grids with pastel fills; full-bleed lime or forest bands between.
- Section spacing ~96–112px.

## Elevation & Depth
- Flat. Separation via fills (white / #F2F5F0 / lime / forest).
- Calculator card may have `0 4px 24px rgba(22,51,0,0.08)`.
- No glossy effects; illustrations are flat 3D-ish objects (globe, plane, coins) with simple shading.

## Shapes
- Buttons: pill. Cards: 24–32px radius. Inputs: 10px.
- Currency flags in 24px circles.
- Icons: 24px, 2px stroke rounded line icons in forest green.
- Imagery: chunky friendly 3D-style objects, real customer photos.

## Components
- **Primary button:** #9FE870 fill, #163300 16px/600 text, pill, 48px tall, 12px 24px. Hover #80E142.
- **Secondary button:** transparent, 1px #163300 border, forest text, pill. Hover #E2F6D5 fill.
- **Nav:** 72px white, Wise logo (forest flag mark + wordmark) left, links (Personal, Business, Platform) 16px/600, "Log in" text + lime "Register" pill.
- **Currency calculator:** white card, 24px radius, two amount rows ("You send" / "Recipient gets") each 64px tall with 1px #E2E6E0 border, 10px radius, big 24px/600 amount, flag + currency code dropdown on right; fee breakdown list in small muted text; lime full-width "Get started" pill.
- **Feature card:** pastel fill (#E2F6D5, #FFC091, #A0E1E1), 32px radius, 40px padding, 28px/600 title, illustration.
- **Tag:** pill, #E2F6D5 fill, #163300 12px/600.
- **Rate badge:** "Should arrive in seconds" with green check, 14px/500.

## Do's and Don'ts
**Do**
- Pair lime #9FE870 fills with forest #163300 text.
- Use huge uppercase condensed display type for hero statements.
- Lead with transparent numbers (fees, rates) in the product UI.
- Keep corners round and friendly.

**Don't**
- Don't place lime text on white or white text on lime.
- Don't use corporate navy/blue palettes.
- Don't hide pricing in fine print.
- Don't use thin or italic display type.

## Agent Prompt Guide
**Base prompt:**
"Design like Wise: white page with #F2F5F0 cards, lime #9FE870 pill buttons with forest #163300 text, forest green dark bands. Hero headline in huge uppercase Archivo Black/Anton (stand-in for Wise Sans), line-height 0.85; everything else Inter. 24–32px radius cards, pastel feature fills (#E2F6D5, #FFC091, #A0E1E1). A currency calculator card with flag dropdowns is the hero element."

**Examples:**
- "Hero: left 'MONEY WITHOUT BORDERS' 112px uppercase; right white calculator card with send/receive rows and lime CTA."
- "Feature trio: pastel cards with chunky 3D illustrations and 28px Inter titles."
- "Forest-green band: lime uppercase headline, white body, lime pill CTA."
