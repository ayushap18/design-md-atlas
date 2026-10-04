---
version: alpha
name: Calendly
description: Clean, trustworthy scheduling brand — deep navy text, bright Calendly blue, and soft pastel gradients around booking-page mockups.
source: https://calendly.com
colors:
  primary: "#006BFF"
  on-primary: "#FFFFFF"
  primary-hover: "#0057D1"
  navy: "#0B3558"
  navy-deep: "#071A31"
  background: "#FFFFFF"
  surface: "#F8F9FB"
  text: "#0B3558"
  text-muted: "#476788"
  border: "#DFE3E7"
  sky: "#6BB1FF"
  sky-soft: "#C3DFFE"
  teal: "#5DDFD7"
  teal-soft: "#BAF0EC"
  lavender: "#B89FFA"
  lime: "#DBEE9F"
  orange: "#F8961F"
typography:
  display:
    fontFamily: Gilroy
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: Gilroy, fontSize: 3rem, fontWeight: 700, lineHeight: 1.12 }
  h2: { fontFamily: Gilroy, fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.18 }
  h3: { fontFamily: Gilroy, fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: Gilroy, fontSize: 1.125rem, fontWeight: 500, lineHeight: 1.55 }
  ui: { fontFamily: Proxima Nova, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 14px 24px
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.navy}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: 14px 24px
  card:
    backgroundColor: "#FFFFFF"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Calendly — DESIGN.md

> Inspired by the public website of Calendly. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Calendly feels dependable and easygoing at once. Text is set in a deep navy rather than black, a crisp bright blue drives every action, and booking-page mockups float on soft pastel gradient fields (sky, teal, lavender, lime). The site is light, uncluttered and outcome-focused — "Easy scheduling ahead." Product shots of month calendars, time slots and integrations do most of the explaining.

Adjectives: **dependable, friendly, clean, airy, efficient**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #006BFF | Calendly blue: CTAs, selected dates, links |
| primary-hover | #0057D1 | Hover |
| navy / navy-deep | #0B3558 / #071A31 | Headlines and text / dark footer bands |
| background | #FFFFFF | Canvas |
| surface | #F8F9FB | Panels |
| text-muted | #476788 | Secondary copy (blue-gray) |
| border | #DFE3E7 | Cards, inputs |
| sky / sky-soft | #6BB1FF / #C3DFFE | Gradient fields |
| teal / teal-soft | #5DDFD7 / #BAF0EC | Gradient fields |
| lavender / lime / orange | #B89FFA / #DBEE9F / #F8961F | Event-type colors, illustration |

White + navy dominate; blue is the action; pastels only inside media backdrops.

## Typography
- **Marketing:** Gilroy (geometric); free fallback *Outfit* or *Plus Jakarta Sans*.
- **Product UI:** Proxima Nova-like; free fallback *Figtree* / *Inter*.
- Headlines 700 navy; body 18px/500 in blue-gray #476788.
- Sentence case; no uppercase except tiny labels.

## Layout
- 1200px container; hero split with headline + email signup / Google & Microsoft sign-up buttons left, booking UI on a pastel gradient right.
- Feature rows alternate; integrations shown as a logo grid.
- Dark navy band near the bottom for final CTA.
- 96–120px section spacing.

## Elevation & Depth
- Booking mockups: `0 30px 60px rgba(11,53,88,.15)`, 16px radius.
- Cards: 1px #DFE3E7 border, hover `0 8px 24px rgba(11,53,88,.08)`.
- Pastel gradient fields as soft blurred blobs behind product shots.

## Shapes
- 8px buttons/inputs, 16px cards, 24px gradient panels, round date cells in calendars.
- Icons: simple 2px line icons in navy/blue.
- Imagery: product UI, avatars in circles; minimal illustration.

## Components
- **Primary button:** #006BFF, white 16px/700, 8px radius, 48px; hover #0057D1.
- **SSO buttons:** white, 1px #DFE3E7, Google/Microsoft logos left, navy 16px text.
- **Nav:** white 72px, Calendly logo left, Product/Solutions/Resources/Pricing, right "Log in", "Contact sales", blue "Get started".
- **Calendar picker:** month grid; available dates bold blue on #E6F0FF circles (40px); selected date solid #006BFF with white text.
- **Time slot button:** full-width, 52px, 1px #006BFF border, blue 16px/700 text, 4px radius; selected splits into gray time + blue "Next".
- **Event type card:** white, 16px radius, colored top border (6px) per event, title, duration, "Copy link".
- **Input:** 48px, 1px #B2BCC6, 8px radius, focus border #006BFF.

## Do's and Don'ts
**Do**
- Use navy for text instead of black.
- Keep blue as the single action color.
- Float booking UI on soft pastel gradients.
- Use round date cells and outlined time-slot buttons.

**Don't**
- Don't fill whole sections with saturated blue.
- Don't use pastels for text or buttons.
- Don't use dark mode on marketing.
- Don't clutter the hero with many choices.

## Agent Prompt Guide
**Base prompt:**
"Design like Calendly: white canvas, deep navy #0B3558 bold geometric headlines (Outfit fallback for Gilroy), #476788 body, bright blue #006BFF 8px-radius CTAs, booking UIs floating on soft sky/teal/lavender gradient fields with navy-tinted shadows, round date cells and outlined time-slot buttons."

**Examples:**
- "Booking page: host avatar + '30 Minute Meeting', month calendar with available dates in blue circles, time-slot column."
- "Hero: 'Easy scheduling ahead', 'Sign up with Google' and 'Sign up with Microsoft' buttons, booking mockup on a teal-lavender gradient."
- "Event types list with colored top borders and 'Copy link' actions."
