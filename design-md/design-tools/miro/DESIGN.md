---
version: alpha
name: Miro
description: Sunny yellow brand energy over a calm white workspace, with a strong blue for actions and sticky-note colorful collaboration.
source: https://miro.com
colors:
  primary: "#4262FF"
  on-primary: "#FFFFFF"
  primary-hover: "#314CD9"
  background: "#FFFFFF"
  surface: "#F1F2F5"
  surface-soft: "#FAFAFC"
  text: "#1C1C1E"
  text-muted: "#555A6A"
  border: "#E9EAEF"
  accent: "#FFD02F"
  accent-soft: "#FDE050"
  sticky-pink: "#FF9BD2"
  sticky-green: "#C6F0A2"
  sticky-blue: "#A7D8FF"
typography:
  display:
    fontFamily: Roobert PRO, Noto Sans
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: "Roobert PRO, Noto Sans", fontSize: 3rem, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.015em }
  h2: { fontFamily: "Roobert PRO, Noto Sans", fontSize: 2rem, fontWeight: 600, lineHeight: 1.2 }
  body: { fontFamily: "Noto Sans, Open Sans", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Noto Sans, Open Sans", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
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
  xl: 64px
  section: 120px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    border: 1px solid {colors.text}
    rounded: "{rounded.md}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Miro — DESIGN.md

> Inspired by the public website of Miro. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Miro's identity is built around a cheerful yellow mark and the visual language of a whiteboard: sticky notes, connectors, cursors and frames. The website keeps the chrome neutral (white and cool grays with near-black text) and uses a confident blue for actions, letting yellow and sticky-note pastels bring warmth.

Hold onto: **collaborative, energetic, clear, approachable, structured**. Medium density; enterprise messaging with playful canvas visuals.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #4262FF | CTAs, links, active tabs |
| primary-hover | #314CD9 | Hover/pressed |
| accent | #FFD02F | Logo yellow, highlight bands, sticky notes |
| accent-soft | #FDE050 | Yellow section fills |
| background | #FFFFFF | Page |
| surface | #F1F2F5 | Cards, secondary panels |
| surface-soft | #FAFAFC | Alternating sections |
| text | #1C1C1E | Headlines and body |
| text-muted | #555A6A | Supporting copy |
| border | #E9EAEF | Dividers, inputs |
| sticky-pink / green / blue | #FF9BD2 / #C6F0A2 / #A7D8FF | Board illustrations only |

White and gray dominate. Blue is the only action color; yellow appears in the logo, highlight bands and stickies.

## Typography
- **Headlines:** Roobert PRO (Displaay), semi-bold 600. Free fallback: **Space Grotesk** 600 or **Noto Sans** 600.
- **Body:** Noto Sans / Open Sans 400, 16px/1.5.
- Headline tracking -0.015 to -0.02em; never all caps except tiny labels.
- Plain, direct sentence-case copy ("The innovation workspace").

## Layout
- Container max 1200–1280px, 24–32px gutters.
- Hero split: headline + email capture left, animated board visual right; or centered with board below.
- Feature sections with tabbed use-case switchers (Product, Engineering, Design...).
- Section spacing 96–120px; alternating #FFFFFF / #FAFAFC backgrounds.

## Elevation & Depth
- Board visuals use realistic sticky-note shadows: `0 1px 2px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.06)`.
- UI cards flat on #F1F2F5 or white with 1px #E9EAEF border.
- Dropdown/mega-menu: `0 8px 32px rgba(28,28,30,0.12)`, 8px radius.

## Shapes
- Buttons and inputs: 8px radius. Cards: 16px. Tags: pill.
- Sticky notes: square with 2px radius and slight rotation (-2° to 2°).
- Icons: 24px line icons, 1.5px stroke, rounded joins, #1C1C1E.
- Imagery: board screenshots with cursors, connectors, emoji reactions, avatar bubbles.

## Components
- **Primary button:** #4262FF, white 16px/600, 8px radius, 48px tall, 12px 24px padding. Hover #314CD9.
- **Secondary button:** white, 1px #1C1C1E border, black text. Hover: #F1F2F5 fill.
- **Email capture:** 48px input (1px #C7CAD5 border, 8px radius) fused with a blue "Sign up free" button.
- **Nav:** 72px white, yellow logo left, menu items (Product, Solutions, Resources, Pricing) 16px/500, "Contact sales", "Login", blue "Sign up free" right.
- **Use-case tabs:** pill tabs on #F1F2F5 track; active tab white with subtle shadow and #1C1C1E text.
- **Feature card:** #F1F2F5, 16px radius, 32px padding, 24px/600 title, 16px #555A6A body, board image.
- **Badge:** pill, #FFD02F fill, #1C1C1E 12px/600 text (e.g. "New").
- **Testimonial:** large quote 24px, customer logo, avatar in a 48px circle.

## Do's and Don'ts
**Do**
- Use blue #4262FF for every clickable primary action.
- Use yellow for brand moments and highlights, not buttons.
- Show collaborative board artifacts: stickies, cursors with names, connectors.
- Keep corners at 8px for controls, 16px for containers.

**Don't**
- Don't make yellow the CTA color (low contrast with white text).
- Don't use dark backgrounds for whole pages.
- Don't overuse sticky pastels outside board visuals.
- Don't use thin 300-weight headlines.

## Agent Prompt Guide
**Base prompt:**
"Design in Miro's style: white and #FAFAFC sections, near-black #1C1C1E text, Space Grotesk/Noto Sans 600 headlines, Noto Sans body. Primary buttons #4262FF with 8px radius; yellow #FFD02F for brand highlights and 'New' badges. Visuals are whiteboard canvases with colorful sticky notes, named cursors and connectors."

**Examples:**
- "Hero: left 56px headline + email input fused to blue 'Sign up free' button; right an animated board with stickies in yellow/pink/green."
- "Use-case section: pill tab switcher (Product, Engineering, Design) controlling a 16px-radius board screenshot."
- "Template card: #F1F2F5, board thumbnail, 18px title, 'Use template' blue link."
