---
version: alpha
name: Sketch
description: Calm, crafted Mac-native aesthetic — warm off-whites, refined ABC Marfa type and a sunset gradient echoing the diamond logo.
source: https://www.sketch.com
colors:
  primary: "#1A1A1A"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F5F4"
  surface-alt: "#EBEBEB"
  text: "#1A1A1A"
  text-muted: "#858585"
  border: "#E3E3E3"
  accent: "#F48C2B"
  accent-yellow: "#FDB300"
  accent-coral: "#E97F42"
  accent-pink: "#DC5F9B"
  accent-violet: "#744BD0"
  accent-blue: "#32ADF7"
  gradient: "linear-gradient(90deg, #F48C2B, #DC5F9B, #744BD0, #32ADF7)"
typography:
  display:
    fontFamily: ABC Marfa, Inter
    fontSize: 4.5rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: "ABC Marfa, Inter", fontSize: 3rem, fontWeight: 500, lineHeight: 1.1, letterSpacing: -0.025em }
  h2: { fontFamily: "ABC Marfa, Inter", fontSize: 2rem, fontWeight: 500, lineHeight: 1.2 }
  body: { fontFamily: "ABC Marfa, Inter", fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.6 }
  hand: { fontFamily: Caveat, fontSize: 1.25rem, fontWeight: 400 }
  mono: { fontFamily: "ABC Marfa Mono, IBM Plex Mono", fontSize: 0.8125rem, letterSpacing: 0.02em }
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
  section: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 22px
  button-secondary:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 12px 22px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: 40px
---

# Sketch — DESIGN.md

> Inspired by the public website of Sketch. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Sketch positions itself as the thoughtful, Mac-native design tool, and its website mirrors that: quiet neutrals, generous whitespace, refined grotesk typography and carefully composed product shots. Color arrives through the gem-like warm-to-cool gradient (orange → pink → violet → blue) and the occasional handwritten annotation that gives a human, crafted touch.

Hold onto: **crafted, calm, native, considered, warm**. Low density; editorial pacing.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #1A1A1A | Primary buttons, headlines |
| on-primary | #FFFFFF | Text on dark |
| background | #FFFFFF | Page |
| surface | #F5F5F4 | Feature cards, alternating sections |
| surface-alt | #EBEBEB | Secondary buttons, dividers on gray |
| text | #1A1A1A | Body |
| text-muted | #858585 | Subheads, captions |
| border | #E3E3E3 | Hairlines |
| accent | #F48C2B | Orange (logo family), highlights |
| accent-yellow | #FDB300 | Logo diamond top |
| accent-coral / pink / violet / blue | #E97F42 / #DC5F9B / #744BD0 / #32ADF7 | Gradient stops, feature icons |

Neutrals carry ~90% of the page. The gradient is used on hero artwork, feature icons, and as a thin highlight — not on buttons.

## Typography
- **Primary:** ABC Marfa (Dinamo). Free fallback: **Inter** or **Geist**.
- **Mono:** ABC Marfa Mono for eyebrows and specs. Fallback: **IBM Plex Mono**.
- **Handwritten:** Caveat for small annotations/scribbles beside product shots.
- Headlines medium 500, tracked -0.025 to -0.03em. Body 17px/1.6.
- Sentence case; mono eyebrows uppercase with +0.04em tracking.

## Layout
- 12-col grid, max width ~1200px, 24/40px gutters.
- Hero centered with large Mac app window screenshot below.
- Feature rows alternate text-left/image-right; bento grids of 24px-radius cards.
- Section spacing ~120–128px.

## Elevation & Depth
- Product windows use macOS-style shadow: `0 0 0 0.5px rgba(0,0,0,0.12), 0 20px 60px rgba(0,0,0,0.18)`.
- Cards flat on #F5F5F4; no borders on gray surfaces.
- Subtle frosted nav: `rgba(255,255,255,0.8)` + `backdrop-filter: blur(16px)`.

## Shapes
- Buttons: pill. Cards: 24px. App windows: 10–12px (macOS window radius).
- Icons: 24px, 1.5px stroke, rounded, often filled with the gradient in feature tiles.
- Imagery: Mac app windows, canvases with artboards, hand-drawn arrows and notes.

## Components
- **Primary button:** #1A1A1A, white 15px/500, pill, 44px tall. Hover #333333.
- **Secondary button:** #EBEBEB fill, #1A1A1A text, pill. Hover #E0E0E0.
- **Download link:** text + small Apple glyph, "Download for Mac", underlined on hover.
- **Nav:** 64px frosted white, diamond logo left, links (Features, Pricing, Learn, Support) 15px/500, "Sign in" text + black "Get started" pill right.
- **Feature card:** #F5F5F4, 24px radius, 40px padding, gradient-filled 40px icon, 24px/500 title, 17px #858585 body.
- **Eyebrow:** ABC Marfa Mono 12px uppercase, #858585.
- **Annotation:** Caveat 20px in #F48C2B with a hand-drawn arrow pointing to UI.
- **Pricing card:** white, 1px #E3E3E3, 24px radius, plan name mono, 48px/500 price.

## Do's and Don'ts
**Do**
- Keep the canvas neutral and calm; let product windows be the hero.
- Use medium (500) weights, never heavy bold.
- Use the orange→pink→violet→blue gradient only for artwork and icons.
- Add small handwritten touches for warmth.

**Don't**
- Don't make CTAs gradient-filled.
- Don't use saturated full-bleed color sections.
- Don't crowd layouts; leave breathing room around screenshots.
- Don't use sharp-cornered windows.

## Agent Prompt Guide
**Base prompt:**
"Design in Sketch's style: white and warm-gray #F5F5F4 sections, #1A1A1A text, Inter/Geist (for ABC Marfa) medium 500 headlines with -0.03em tracking, IBM Plex Mono uppercase eyebrows. Black pill primary buttons, gray #EBEBEB secondary pills. macOS app window screenshots with soft deep shadows. A warm-to-cool gradient (#F48C2B→#DC5F9B→#744BD0→#32ADF7) only on icons and artwork; small Caveat handwritten annotations."

**Examples:**
- "Hero: centered 72px headline, gray subhead, black 'Get started' pill and 'Download for Mac' link, large Mac window below."
- "Bento: four #F5F5F4 cards, 24px radius, each with a gradient icon, title and short description."
- "Product shot with orange Caveat note 'Real-time collaboration!' and a hand-drawn arrow."
