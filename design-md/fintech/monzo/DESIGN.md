---
version: alpha
name: Monzo
description: Warm, cheeky British neobank — Hot Coral energy on cream and deep navy, chunky rounded type and playful illustration.
source: https://monzo.com
colors:
  primary: "#FF4F40"
  on-primary: "#FFFFFF"
  background: "#FFF6F2"
  surface: "#FFFFFF"
  surface-dark: "#14233C"
  text: "#14233C"
  text-muted: "#5A6577"
  border: "#E8DFDA"
  accent: "#FF4F40"
  accent-teal: "#38B2AC"
  accent-yellow: "#F59E00"
  accent-sand: "#C2B8B2"
typography:
  display:
    fontFamily: Monzo Sans Display, Plus Jakarta Sans
    fontSize: 4.5rem
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -0.025em
  h1: { fontFamily: "Monzo Sans Display, Plus Jakarta Sans", fontSize: 3rem, fontWeight: 800, lineHeight: 1.05, letterSpacing: -0.02em }
  h2: { fontFamily: "Monzo Sans Display, Plus Jakarta Sans", fontSize: 2rem, fontWeight: 700, lineHeight: 1.15 }
  body: { fontFamily: "Monzo Sans Text, Inter", fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: "Monzo Sans Text, Inter", fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.45 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 12px
  lg: 24px
  xl: 40px
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
    rounded: "{rounded.md}"
    padding: 14px 24px
  button-secondary:
    backgroundColor: "{colors.surface-dark}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 14px 24px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Monzo — DESIGN.md

> Inspired by the public website of Monzo. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Monzo is the neobank with the hot coral card, and its site carries that warmth: cream backgrounds, deep navy type, punchy coral CTAs and characterful illustration. The tone is cheeky, human and very British — banking that talks like a friend. Layouts are simple and confident with chunky headlines.

Hold onto: **warm, friendly, cheeky, bold, human**. Medium density; short, conversational copy.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary / accent | #FF4F40 | Hot Coral — CTAs, card renders, highlights |
| on-primary | #FFFFFF | Text on coral |
| background | #FFF6F2 | Warm cream page |
| surface | #FFFFFF | Cards on cream |
| surface-dark | #14233C | Navy sections, secondary buttons |
| text | #14233C | Headlines and body |
| text-muted | #5A6577 | Supporting copy |
| border | #E8DFDA | Dividers |
| accent-teal | #38B2AC | Savings/pots illustrations |
| accent-yellow | #F59E00 | Illustration, badges |
| accent-sand | #C2B8B2 | Neutral illustration tone |

Cream and navy carry the page; coral provides the energy. Teal and yellow appear in illustration only.

## Typography
- **Primary:** Monzo's custom sans (display + text). Free fallback: **Plus Jakarta Sans** 800 for display, **Inter** for body.
- Display is extra-bold (800), tight (-0.02 to -0.025em) and compact (line-height 1.0).
- Body 17px/1.55, regular. Sentence case always, conversational ("Banking made easy").
- Numbers in product UI use tabular figures.

## Layout
- Container max 1200px, 24/40px gutters.
- Hero: big headline + app-store buttons left, coral card / phone render right.
- Feature sections: white cards on cream in 2–3 column grids; occasional full-bleed navy or coral band.
- Section spacing ~96–112px.

## Elevation & Depth
- Mostly flat; white cards on cream with no border.
- Phone/card renders: soft shadow `0 24px 48px rgba(20,35,60,0.18)`.
- Hover on cards: translateY(-2px) with `0 8px 24px rgba(20,35,60,0.08)`.

## Shapes
- Buttons: 12px radius (rounded rectangle, not pill). Cards: 24px. Large hero panels: 40px.
- Icons: 24px rounded line, 2px stroke, navy.
- Illustration: hand-drawn, characterful scenes with flat color fills in coral, teal, yellow, navy.
- The coral bank card is a recurring hero object.

## Components
- **Primary button:** #FF4F40, white 16px/700, 12px radius, 48px tall, 14px 24px. Hover #E8453A.
- **Secondary button:** #14233C, white text, 12px radius. On navy: white fill, navy text.
- **Nav:** 72px cream/white, Monzo logo left, links (Personal, Business, Under 16s, Help) 16px/600 navy, "Sign up" coral button right.
- **Feature card:** white, 24px radius, 32px padding, illustration on top, 24px/700 title, body 16px #5A6577, coral "Find out more →" link.
- **Pot (savings) chip:** rounded 16px tile with emoji/illustration, name 15px/600, balance tabular 20px/700.
- **App store badges:** black badges side by side, 44px tall.
- **Input:** 52px, white, 1px #E8DFDA border, 12px radius; focus 2px #FF4F40.
- **Badge:** pill, coral tint #FFE3DF with #C7362A text, 12px/700.

## Do's and Don'ts
**Do**
- Use cream #FFF6F2 as the default background, not stark white.
- Make coral the single action color.
- Write short, friendly, human copy.
- Use characterful illustration with flat fills.

**Don't**
- Don't use coral for long text.
- Don't make it corporate: no stock handshake photos or navy-only pages.
- Don't use pill buttons; Monzo-style buttons are rounded rectangles.
- Don't use thin headline weights.

## Agent Prompt Guide
**Base prompt:**
"Design like Monzo: warm cream #FFF6F2 background, navy #14233C text, Plus Jakarta Sans 800 tight headlines and Inter body. Hot Coral #FF4F40 primary buttons with 12px radius, navy secondary buttons. White 24px-radius cards on cream, playful flat illustrations in coral/teal/yellow, a coral bank card render in the hero. Friendly, cheeky copy."

**Examples:**
- "Hero: 72px navy headline 'Banking made easy', subcopy, coral 'Sign up' button and app badges; right a tilted coral card over a phone."
- "Feature grid: three white cards (Pots, Bills, Spending insights) with illustrations and coral links."
- "Full-bleed navy band: white headline, coral CTA, stat numbers in white."
