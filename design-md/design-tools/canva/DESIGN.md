---
version: alpha
name: Canva
description: Friendly, optimistic purple-to-teal gradients on white with rounded, approachable UI that makes design feel effortless.
source: https://www.canva.com
colors:
  primary: "#8B3DFF"
  on-primary: "#FFFFFF"
  primary-hover: "#7A35E0"
  background: "#FFFFFF"
  surface: "#F2F3F5"
  text: "#0E1318"
  text-muted: "#6B6B6B"
  border: "#E0E0E0"
  accent: "#00C4CC"
  accent-deep: "#6420FF"
  gradient: "linear-gradient(135deg, #00C4CC 0%, #6420FF 100%)"
typography:
  display:
    fontFamily: Canva Sans, Open Sans
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: "Canva Sans, Open Sans", fontSize: 2.75rem, fontWeight: 700, lineHeight: 1.15 }
  h2: { fontFamily: "Canva Sans, Open Sans", fontSize: 2rem, fontWeight: 700, lineHeight: 1.2 }
  body: { fontFamily: "Canva Sans, Open Sans", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Canva Sans, Open Sans", fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: "ui-monospace, SF Mono", fontSize: 0.875rem }
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
  lg: 24px
  xl: 48px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  card:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.lg}"
    padding: 0
---

# Canva — DESIGN.md

> Inspired by the public website of Canva. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Canva is built to make non-designers feel capable. The interface is bright, white and uncluttered, anchored by a vivid purple and its signature teal-to-violet gradient. Templates and user-made designs supply most of the color, so the chrome stays calm, rounded and friendly.

Hold onto: **friendly, optimistic, accessible, colorful, approachable**. Medium-high density in app-like areas (template grids), airy on landing pages.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #8B3DFF | Main buttons, active states, links |
| primary-hover | #7A35E0 | Hover/pressed purple |
| accent-deep | #6420FF | Gradient end, emphasis |
| accent | #00C4CC | Gradient start, teal highlights |
| gradient | #00C4CC → #6420FF (135°) | Hero bands, Pro badges, logo-like moments |
| background | #FFFFFF | Page |
| surface | #F2F3F5 | Secondary buttons, search field, chips |
| text | #0E1318 | Headlines and body |
| text-muted | #6B6B6B | Captions, helper text |
| border | #E0E0E0 | Dividers, card outlines |
| pro-gold | #FFC107 | Crown icon for Pro features |

White dominates; purple marks actions; the gradient is used sparingly for hero banners and premium moments.

## Typography
- **Primary:** Canva Sans (custom, geometric-humanist). Free fallback: **Open Sans** or **Plus Jakarta Sans** for a closer geometric feel.
- Headlines bold 700, gentle -0.02em tracking, line-height 1.1–1.2.
- Body 16px/1.5, regular. UI labels 14px/500.
- Sentence case, warm conversational tone ("What will you design today?").

## Layout
- Wide container up to 1400px; app layouts use a left sidebar (~72px icon rail + expandable panel).
- Template grids: masonry or fixed-ratio cards with 16px gaps, 4–6 columns on desktop.
- Hero: centered headline over gradient band with a large rounded search bar.
- Section spacing 80–96px.

## Elevation & Depth
- Cards rest flat; on hover they lift with `0 4px 16px rgba(14,19,24,0.12)`.
- Menus/popovers: `0 2px 8px rgba(0,0,0,0.12), 0 12px 32px rgba(0,0,0,0.16)`, 8px radius.
- No heavy borders; separation comes from whitespace and soft shadows.

## Shapes
- Buttons 8px radius; search bar full pill; template thumbnails 8–16px; hero bands 24px.
- Icons: 24px, rounded filled/duotone style, friendly and chunky.
- Imagery: colorful template thumbnails, real photos, playful 3D-ish stickers.

## Components
- **Primary button:** #8B3DFF fill, white 14px/600 text, 8px radius, 40px tall, 10px 16px padding. Hover #7A35E0. Focus: 2px #8B3DFF ring offset 2px.
- **Secondary button:** #F2F3F5 fill, #0E1318 text. Hover #E4E6EA.
- **Gradient CTA (marketing):** gradient fill, white text, 8px radius, 48px tall.
- **Search bar:** pill, 56px tall, white with soft shadow, magnifier left, placeholder #6B6B6B "Search designs, folders and uploads".
- **Template card:** image only with 8px radius; title below 14px/500; hover shows a three-dot menu and shadow lift.
- **Pro badge:** small crown icon in #FFC107 at the corner of premium templates.
- **Nav:** 64px white top bar, logo left, menu items (Design spotlight, Business, Education, Plans) 15px/500, purple "Sign up" button and text "Log in" right.
- **Chip/filter:** pill, #F2F3F5 fill, 14px; selected = #8B3DFF fill white text.

## Do's and Don'ts
**Do**
- Use #8B3DFF for every primary action.
- Reserve the teal→violet gradient for heroes and premium highlights.
- Keep corners soft (8px+) and copy encouraging.
- Let template/user content provide the color.

**Don't**
- Don't use dark-mode-first or black hero backgrounds on marketing pages.
- Don't use sharp 0–2px corners.
- Don't put gradients on small UI elements like chips or inputs.
- Don't write jargon-heavy, technical copy.

## Agent Prompt Guide
**Base prompt:**
"Design like Canva: white background, Open Sans/Plus Jakarta Sans bold headlines, purple #8B3DFF primary buttons with 8px radius, light gray #F2F3F5 secondary buttons, a teal-to-violet (#00C4CC→#6420FF) gradient hero band with a large pill search bar. Template cards are image-led with 8px corners and lift on hover. Friendly, encouraging copy."

**Examples:**
- "Hero: gradient band with 24px radius, centered white 56px headline 'What will you design today?', pill search below, row of round category icons."
- "Template grid: 5 columns, 16px gap, rounded thumbnails, gold crown badge on premium ones."
- "Pricing: three white cards, middle one outlined in #8B3DFF with a 'Most popular' purple pill."
