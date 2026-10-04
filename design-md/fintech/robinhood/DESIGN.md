---
version: alpha
name: Robinhood
description: Bold editorial finance — near-black canvases, electric "Robin Neon" lime, a refined display serif and chunky grotesk.
source: https://robinhood.com
colors:
  primary: "#CCFF00"
  on-primary: "#110E08"
  background: "#110E08"
  surface: "#1E1B15"
  surface-light: "#FFFFFF"
  text: "#FFFFFF"
  text-dark: "#110E08"
  text-muted: "#888784"
  border: "#35322D"
  accent: "#CCFF00"
  positive: "#00C805"
  negative: "#FF5000"
typography:
  display:
    fontFamily: Nib Pro Display, Fraunces
    fontSize: 5.5rem
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.02em
  h1: { fontFamily: "Nib Pro Display, Fraunces", fontSize: 3.5rem, fontWeight: 400, lineHeight: 1.05, letterSpacing: -0.015em }
  h2: { fontFamily: "Phonic, Inter", fontSize: 2rem, fontWeight: 500, lineHeight: 1.15 }
  body: { fontFamily: "Capsule Sans Text, Inter", fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Capsule Sans Text, Inter", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.4 }
  label: { fontFamily: "Phonic, Inter", fontSize: 0.8125rem, fontWeight: 500, letterSpacing: 0.04em, textTransform: uppercase }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.875rem }
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
  section: 144px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    border: 1px solid {colors.text}
    rounded: "{rounded.full}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: 32px
---

# Robinhood — DESIGN.md

> Inspired by the public website of Robinhood. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Robinhood's current brand pairs a warm near-black (#110E08) with a radioactive lime "Robin Neon" (#CCFF00), and contrasts an elegant high-contrast display serif with a utilitarian grotesk. The result feels like a fashion-meets-finance editorial: dramatic, moody product photography and 3D renders of gold and glass, with lime used like a highlighter.

Hold onto: **bold, editorial, premium, electric, modern**. Low density; big type, big imagery.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | #110E08 | Warm black page base |
| surface | #1E1B15 | Cards on dark |
| surface-light | #FFFFFF | Light sections |
| primary / accent | #CCFF00 | Robin Neon — CTAs, highlights, logo feather |
| on-primary / text-dark | #110E08 | Text on neon or white |
| text | #FFFFFF | Text on dark |
| text-muted | #888784 | Captions, disclosures |
| border | #35322D | Dividers on dark |
| positive | #00C805 | Gains (classic Robinhood green, in-app) |
| negative | #FF5000 | Losses (in-app) |

Dark warm black dominates marketing; neon is a sharp accent (CTAs, a highlighted word, logo). Light sections use white with #110E08 text.

## Typography
- **Display serif:** Nib Pro Display (regular 400). Free fallback: **Fraunces** (opsz high, weight 400) or **Instrument Serif**.
- **Grotesk:** Phonic for subheads/labels; Capsule Sans Text for body. Fallback: **Inter** (or **Space Grotesk** for Phonic's character).
- Serif headlines are large, regular weight, tight; occasional italic word for emphasis.
- Labels: uppercase 13px, +0.04em tracking.
- Legal disclosures in 12–13px muted — always present under financial claims.

## Layout
- Full-bleed sections; content max ~1200px with 24/48px gutters.
- Hero: centered serif headline over dark with a large product render (phone, gold card) below.
- Feature pages: alternating image/text splits; stats in big serif numerals.
- Section spacing generous: 120–144px.

## Elevation & Depth
- Depth from cinematic lighting in imagery and renders; UI flat.
- Cards on dark: #1E1B15 fill with 1px #35322D border, no shadow.
- Neon glow sparingly: `0 0 40px rgba(204,255,0,0.35)` behind hero highlights.

## Shapes
- Buttons: pill. Cards: 24px. Product screenshots: device frames.
- Icons: 24px, simple 1.5px line icons, white or neon.
- Logo feather mark in neon or black.
- Imagery: moody studio product shots, 3D gold/metal objects, phone UI with charts.

## Components
- **Primary button:** #CCFF00, #110E08 16px/600 text, pill, 48px tall, 12px 24px. Hover #B8E600.
- **Secondary button:** transparent, 1px white border, white text (on light: black border/text).
- **Nav:** 64px, transparent over dark, feather logo + "Robinhood" left, links (Invest, Crypto, Retirement, Gold, Learn) 15px/500 white, "Log in" outlined pill + neon "Sign up" pill.
- **Stat block:** serif 64px numeral (e.g., "3% match"), 14px muted caption, superscript footnote marker linking to disclosures.
- **Feature card:** #1E1B15, 24px radius, 32px padding, uppercase label, 28px serif title, body in #888784.
- **Chart (in UI):** single thin line in #00C805 (up) or #FF5000 (down) on black, no grid, timeframe text tabs below.
- **Disclosure footnote:** 12px #888784, max 72ch, below sections.

## Do's and Don'ts
**Do**
- Contrast an elegant serif display with a plain grotesk body.
- Use #CCFF00 neon as the single accent — CTAs and highlighted words.
- Keep backgrounds warm black (#110E08), not pure #000.
- Include legal disclosure text near financial claims.

**Don't**
- Don't use neon for large text blocks or body copy.
- Don't use bold serif weights; keep display at 400.
- Don't add multiple accent colors.
- Don't use cartoonish illustration.

## Agent Prompt Guide
**Base prompt:**
"Design like Robinhood's current site: warm black #110E08 background, Fraunces/Instrument Serif 400 display headlines (stand-in for Nib Pro), Inter body, uppercase 13px labels. Single neon accent #CCFF00 for pill CTAs and highlighted words, with #110E08 text on neon. Cards #1E1B15 with 1px #35322D borders, 24px radius. Cinematic product renders, muted #888784 disclosures."

**Examples:**
- "Hero: centered 88px serif 'Invest in what you believe', neon 'Get started' pill, phone render glowing faintly below."
- "Stat trio: big serif numerals with captions and footnote markers on dark."
- "Light section: white background, black serif headline, black outlined pill, gold card render."
