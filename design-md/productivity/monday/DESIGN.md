---
version: alpha
name: monday.com
description: Upbeat, colorful work-OS brand with a bright indigo primary, multicolor status pills and rounded Poppins/Figtree type.
source: https://monday.com
colors:
  primary: "#6161FF"
  on-primary: "#FFFFFF"
  primary-hover: "#5151D3"
  background: "#FFFFFF"
  surface: "#F6F7FB"
  text: "#323338"
  text-muted: "#676879"
  text-subtle: "#535768"
  border: "#D0D4E4"
  done: "#00C875"
  working: "#FDAB3D"
  stuck: "#DF2F4A"
  pink: "#FF00D9"
  pink-soft: "#FE81E4"
  purple: "#9B59FF"
  cyan: "#00D0FF"
  amber: "#FFA600"
typography:
  display:
    fontFamily: Poppins
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: Poppins, fontSize: 3rem, fontWeight: 600, lineHeight: 1.15 }
  h2: { fontFamily: Poppins, fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.2 }
  h3: { fontFamily: Poppins, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Figtree, fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  mono: { fontFamily: Roboto Mono, fontSize: 0.875rem }
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
  xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    borderColor: "{colors.border}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  card:
    backgroundColor: "#FFFFFF"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# monday.com — DESIGN.md

> Inspired by the public website of monday.com. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
monday.com is optimistic and colorful by design — its product literally runs on colored status cells. The marketing site is white and airy with an energetic indigo CTA, rounded Poppins headlines, and floating product boards showing green "Done", orange "Working on it" and red "Stuck" pills. Gradients of pink, purple and cyan add a modern, slightly playful glow. Everything is approachable for non-technical teams.

Adjectives: **upbeat, colorful, approachable, rounded, energetic**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #6161FF | Indigo CTA, links, selected states |
| primary-hover | #5151D3 | Hover |
| background | #FFFFFF | Canvas |
| surface | #F6F7FB | Cool panels, board backgrounds |
| text | #323338 | Headlines, body |
| text-muted / text-subtle | #676879 / #535768 | Secondary text |
| border | #D0D4E4 | Inputs, cells |
| done / working / stuck | #00C875 / #FDAB3D / #DF2F4A | Status pills (product signature) |
| pink / pink-soft / purple / cyan / amber | #FF00D9 / #FE81E4 / #9B59FF / #00D0FF / #FFA600 | Product-line gradients and illustrations |

White dominates; indigo for action; status colors and gradients appear inside product art.

## Typography
- **Display:** Poppins 600 (free) — rounded geometric.
- **Body:** Figtree (free); fallback `system-ui`.
- **App UI:** Figtree/Roboto 14px.
- Headlines sentence case, sometimes with a single gradient-highlighted word.

## Layout
- 1200px container; centered hero with headline, subline, product-picker chips (Work management, CRM, Dev, Service) and a pill CTA.
- Large floating board screenshots overlapping section edges.
- Template galleries and integrations in rounded card grids.
- 80–120px section spacing.

## Elevation & Depth
- Floating product cards: `0 8px 32px rgba(50,51,56,.12)`.
- Buttons flat; hover darkens.
- Soft blurred gradient blobs (pink/purple/cyan at 30% opacity) behind hero.

## Shapes
- Pill CTAs, 8px inputs, 16px cards, 24px hero media.
- Status cells are rectangular color blocks in the app; pills on marketing.
- Icons: rounded, colorful filled icons; product-line logos as colored rounded squares.

## Components
- **Primary button:** #6161FF pill, white 16px/500, 48px; arrow icon "→" after label; hover #5151D3.
- **Secondary:** outline pill 1px #D0D4E4, #323338 text.
- **Nav:** white 72px, logo left, Products/Solutions/Resources/Enterprise/Pricing, right "Log in", "Contact sales", indigo "Get started →".
- **Board row:** 36px, colored group bar on left edge, item name, person avatar circle, status cell filled #00C875/#FDAB3D/#DF2F4A with white 13px text, date.
- **Product chip selector:** pill checkboxes with colored icons; selected = indigo border + #F0F0FF fill.
- **Card:** white, 1px #D0D4E4, 16px radius, 24px padding.
- **Input:** 40px, 1px #C3C6D4, 8px radius, focus border #6161FF.

## Do's and Don'ts
**Do**
- Use indigo pill CTAs with a trailing arrow.
- Show colorful status pills as signature visuals.
- Use Poppins for headlines, Figtree for body.
- Keep backgrounds white with soft gradient blobs.

**Don't**
- Don't use status colors as decoration outside product context.
- Don't use dark-mode marketing pages.
- Don't use sharp corners.
- Don't crowd hero with multiple CTAs of different colors.

## Agent Prompt Guide
**Base prompt:**
"Design like monday.com: white canvas with soft pink/purple/cyan blurred gradient blobs, Poppins 600 headlines in #323338, Figtree body, indigo #6161FF pill CTAs with arrows, 16px-radius cards, floating board screenshots with green #00C875, orange #FDAB3D and red #DF2F4A status pills."

**Examples:**
- "Hero with headline 'Made for work, designed to love', 4 product-selection chips and indigo 'Get started →' pill."
- "Project board component: group header, 5 rows with avatars, status cells and timeline bars."
- "Template gallery grid of 6 rounded cards with colorful thumbnails."
