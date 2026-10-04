---
version: alpha
name: Clerk
description: Polished auth-platform look with an electric violet primary, cool near-black and gray scales, cyan highlights, and floating sign-in components as hero art.
source: https://clerk.com
colors:
  primary: "#6C47FF"
  on-primary: "#FFFFFF"
  primary-hover: "#5639CC"
  background: "#FFFFFF"
  surface: "#F7F7F8"
  surface-alt: "#EEEEF0"
  text: "#131316"
  text-muted: "#5E5F6E"
  text-subtle: "#747686"
  border: "#D9D9DE"
  border-light: "#ECECEE"
  dark-bg: "#0A0A0B"
  dark-surface: "#212126"
  accent: "#5DE3FF"
typography:
  display:
    fontFamily: Suisse Intl
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: Suisse Intl, fontSize: 2.75rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.025em }
  h2: { fontFamily: Suisse Intl, fontSize: 2rem, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.02em }
  h3: { fontFamily: Suisse Intl, fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.4 }
  body: { fontFamily: Suisse Intl, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Suisse Intl, fontSize: 0.8125rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: Söhne Mono, fontSize: 0.8125rem }
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 8px 14px
    shadow: "0 1px 1px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.12)"
  button-dark:
    backgroundColor: "{colors.text}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 8px 14px
  card:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.xl}"
    shadow: "0 0 0 1px rgba(19,19,22,0.06), 0 4px 12px rgba(19,19,22,0.06)"
    padding: 24px
---

# Clerk — DESIGN.md

> Inspired by the public website of Clerk. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Clerk's site is meticulous in the way a component library should be. Cool grays, a vivid violet primary, and tiny details everywhere: hairline ring shadows, inner top highlights on buttons, mono labels, and cyan sparkles in dark sections. The hero art is the product itself — sign-in cards, user buttons, and org switchers floating in layered stacks.

Hold onto: **precise, polished, cool, component-first, crafted**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#6C47FF` | Violet brand, primary CTA, focus rings |
| primary-hover | `#5639CC` | Pressed/hover |
| background | `#FFFFFF` | Light canvas |
| surface | `#F7F7F8` | Section bands, card wells |
| surface-alt | `#EEEEF0` | Chips, table headers |
| text | `#131316` | Ink; also dark buttons |
| text-muted | `#5E5F6E` | Body secondary |
| text-subtle | `#747686` | Captions |
| border | `#D9D9DE` | Inputs, outlines |
| border-light | `#ECECEE` | Dividers |
| dark-bg | `#0A0A0B` | Dark showcase sections |
| dark-surface | `#212126` | Dark cards |
| accent | `#5DE3FF` | Cyan glow, sparkle highlights on dark |

Cool grays dominate; violet is the action color; cyan appears only on dark sections as light/glow.

## Typography
- **Sans:** Suisse Int'l (Swiss Typefaces, commercial). Free fallback: *Inter* or *Geist*.
- **Mono:** Söhne Mono (commercial). Free fallback: *Geist Mono* or *IBM Plex Mono*.
- Tabular numerals for stats (`font-variant-numeric: tabular-nums`).
- Headlines 600 with tight tracking; body 16px/1.6 muted.
- Small UI text 13px/500 — Clerk loves compact labels.

## Layout
- Max width 1200px, 12 columns, 24px gutters.
- 112–144px between sections; alternating white and `#F7F7F8`, with one or two `#0A0A0B` dark showcases.
- Hero: centered headline, two buttons, then a layered composition of component cards.
- Feature sections: left text column (4 cols), right live-component demo (8 cols).

## Elevation & Depth
- Ring + soft shadow combo: `0 0 0 1px rgba(19,19,22,0.06), 0 4px 12px rgba(19,19,22,0.06)`.
- Floating component cards: add `0 24px 48px -12px rgba(19,19,22,0.18)`.
- Buttons: inner top highlight `inset 0 1px 0 rgba(255,255,255,0.12)` plus `0 1px 1px rgba(0,0,0,0.12)`.
- Dark sections: cyan/violet radial glows at 15–25% opacity, subtle dot-grid patterns.

## Shapes
- Buttons and inputs 8px; cards 12–16px; avatars full.
- Icons: 16px, 1.5px stroke, gray `#747686`, violet when active.
- Social-provider logos in small 32px bordered squares.

## Components
- **Primary button:** violet `#6C47FF`, white 13–14px/500 text, 8px radius, 8px 14px, inner highlight. Hover `#5639CC`. Focus ring `0 0 0 3px rgba(108,71,255,0.25)`.
- **Dark button:** `#131316` bg, white text, same geometry.
- **Secondary button:** white bg, ring shadow `0 0 0 1px #D9D9DE`, ink text; hover bg `#F7F7F8`.
- **Sign-in card:** white, 16px radius, 32px padding, logo centered, 18px/600 title, social buttons row (bordered 8px squares), "or" divider, email input, violet "Continue" full-width, footer in `#F7F7F8` with "Secured by" text.
- **Input:** 36px, white, 1px `#D9D9DE`, 8px radius, 14px text; focus border violet + ring.
- **Badge:** 12px/500, 2px 8px, 6px radius, `#EEEEF0` bg; "New" badge violet tint `rgba(108,71,255,0.1)` with violet text.
- **Nav:** 64px, white/blur, logo left, 14px links, "Sign in" ghost + "Start building" violet.

## Do's and Don'ts
**Do**
- Use ring shadows (1px spread) instead of plain borders on cards.
- Show real auth components as illustrations.
- Keep UI text compact (13–14px) and crisp.
- Reserve cyan for dark sections only.

**Don't**
- Don't use warm grays; the palette is cool.
- Don't use large radii (>16px) or pills for primary buttons.
- Don't apply violet to large surfaces.
- Don't drop the inner highlight on buttons — it is part of the polish.

## Agent Prompt Guide
**Base prompt:**
"Design in a Clerk-inspired style: white and #F7F7F8 surfaces, ink #131316, cool grays, violet #6C47FF primary with inner top highlight and 8px radius. Inter or Geist 600 headlines with -0.03em tracking, 13–14px compact UI labels, Geist Mono for code. Cards use 1px ring shadows + soft drop shadow, 16px radius. Dark showcase sections #0A0A0B with cyan #5DE3FF glows."

**Examples:**
- "Hero: centered 'More than authentication', violet + white buttons, stacked sign-in card, user-profile popover, and org switcher floating with layered shadows."
- "Sign-in component: logo, title, Google/GitHub/Apple bordered buttons, divider, email input, full-width violet Continue."
- "Dark feature band with dot-grid background, cyan glow, and three dark cards #212126."
