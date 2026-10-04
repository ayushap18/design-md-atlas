---
version: alpha
name: Intercom
description: Warm off-white editorial canvas, near-black ink, and a single hot "Fin" orange — an AI-customer-service brand that reads like a confident magazine.
source: https://www.intercom.com
colors:
  primary: "#020917"
  on-primary: "#FFFFFF"
  background: "#FAF9F6"
  surface: "#F1EEE9"
  surface-alt: "#F4F3EC"
  text: "#020917"
  text-muted: "#5E5E5E"
  border: "#E3DFD8"
  accent: "#FF5600"
  accent-blue: "#0007CB"
  danger: "#C41C1C"
typography:
  display:
    fontFamily: Saans
    fontSize: 4.5rem
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.035em
  h1: { fontFamily: Saans, fontSize: 3rem, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.025em }
  h2: { fontFamily: Saans, fontSize: 2rem, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.015em }
  serif-accent: { fontFamily: Serrif, fontSize: 3rem, fontWeight: 400, lineHeight: 1.05 }
  body: { fontFamily: Saans, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.5 }
  label: { fontFamily: SaansMono, fontSize: 0.75rem, fontWeight: 500, letterSpacing: 0.06em }
  mono: { fontFamily: SaansMono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
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
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Intercom — DESIGN.md

> Inspired by the public website of Intercom. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Intercom's current site sells an AI agent ("Fin") but looks nothing like a typical robot-blue SaaS page. It leans on paper-warm neutrals, almost-black type, and one aggressive orange used like a highlighter. Headlines are big, tight, and sans-serif, occasionally broken up by a serif word for emphasis. Product screenshots float on calm beige panels.

Hold onto: **editorial, warm, assured, high-contrast, restrained**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#020917` | Ink: headlines, primary buttons, dark sections |
| background | `#FAF9F6` | Default page canvas (warm off-white) |
| surface | `#F1EEE9` | Cards, product-shot backplates |
| surface-alt | `#F4F3EC` | Alternating bands |
| text | `#020917` | Body copy |
| text-muted | `#5E5E5E` | Secondary copy, captions |
| border | `#E3DFD8` | Hairlines, card outlines |
| accent | `#FF5600` | Fin orange: CTAs, key highlights, illustrations |
| accent-blue | `#0007CB` | Links in product UI, chart lines, occasional secondary accent |
| danger | `#C41C1C` | Errors |

Neutrals dominate (roughly 90% of pixels). Orange is reserved for one or two moments per viewport. Blue appears mostly inside product UI and is never paired with orange as equals.

## Typography
- **Sans:** Saans (proprietary). Free fallbacks: *Inter Tight* or *Inter* at weight 500 for headings.
- **Serif accent:** a sharp high-contrast serif used for one or two emphasized words. Fallback: *Instrument Serif* or *Fraunces* (opsz high).
- **Mono:** Saans Mono for eyebrow labels and stats. Fallback: *DM Mono* or *JetBrains Mono*.
- Headings are medium weight (500), never bold. Track display sizes tightly (-0.03 to -0.035em).
- Eyebrows: mono, uppercase, 12px, +0.06em tracking, muted color.
- Body stays at 17px with 1.5 line height; paragraphs max ~60ch.

## Layout
- 12-column grid, max content width 1280px, 24px gutters, 32px side padding on desktop, 20px on mobile.
- Sections separated by 96–128px vertical space; hero gets 160px top padding.
- Hero is left-aligned text with a large product visual to the right or below.
- Logo bars and feature grids use 3- or 4-up layouts with generous internal padding.
- Dark ink sections (`#020917`) interrupt long pages once or twice to reset rhythm.

## Elevation & Depth
- Mostly flat. Depth comes from color steps (canvas to surface), not shadows.
- Product screenshots: `box-shadow: 0 24px 48px -12px rgba(2,9,23,0.18)` with 12px radius.
- Popovers/menus: `0 8px 24px rgba(2,9,23,0.12)` plus 1px `#E3DFD8` border.
- No glassmorphism, no glow.

## Shapes
- Buttons are nearly square (4px radius). Cards and media use 12px; large showcase panels 20px.
- Icons: 1.5px stroke line icons, 20–24px, ink colored.
- Imagery: crisp UI screenshots, occasional warm photography of support teams, orange abstract shapes for Fin.

## Components
- **Primary button:** ink bg, white text, 4px radius, 12px 20px padding, 15px/500. Hover: bg `#1F2633`. Focus: 2px orange outline offset 2px.
- **Accent button:** `#FF5600` bg, white text; use for the single main conversion action (e.g. "Start free trial"). Hover: `#E64D00`.
- **Secondary button:** transparent, 1px ink border, ink text. Hover: surface bg.
- **Nav:** 64px tall, canvas bg, ink logo left, links 15px/500 center, "Contact sales" ghost + "Start free trial" primary right. Becomes sticky with a 1px bottom border on scroll.
- **Feature card:** surface bg, 12px radius, 32px padding, mono eyebrow, 24px/500 title, 16px muted body, screenshot inset at bottom.
- **Stat block:** 64px/500 number in ink, mono label beneath; orange only on the single headline stat.
- **Input:** white bg, 1px border `#D6D1C8`, 4px radius, 44px height. Focus border ink, 3px ring `rgba(255,86,0,0.25)`.
- **Badge:** mono 11px uppercase, 2px 8px padding, full radius, surface bg.

## Do's and Don'ts
**Do**
- Keep backgrounds warm (`#FAF9F6`), never pure `#FFFFFF` for full sections.
- Use orange for at most two elements per screen.
- Set headlines in weight 500 with negative tracking.
- Mix one serif word into a sans headline for emphasis sparingly.

**Don't**
- Don't use gradients on buttons or backgrounds.
- Don't round buttons into pills; keep them squared.
- Don't introduce a second saturated color alongside orange.
- Don't use heavy drop shadows on cards.

## Agent Prompt Guide
**Base prompt:**
"Design in an Intercom-inspired style: warm off-white canvas #FAF9F6, near-black ink #020917, one hot orange accent #FF5600 used sparingly. Headlines in Inter Tight 500 with -0.03em tracking, mono uppercase eyebrows in DM Mono. Squared 4px buttons, 12px card radius, flat surfaces in #F1EEE9, generous 120px section spacing."

**Examples:**
- "Hero: left-aligned 72px headline 'The only helpdesk built for AI', 18px muted subcopy, ink primary button + outlined secondary, big product screenshot on a #F1EEE9 panel with a soft shadow."
- "Three-up feature row: surface cards, mono eyebrow, 24px title, short body, small UI crop at the bottom of each card."
- "Dark stats band: #020917 background, three 64px white numbers, one in #FF5600, mono labels in #9A9A9A."
