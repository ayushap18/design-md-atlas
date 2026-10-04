---
version: alpha
name: Mintlify
description: Clean documentation-platform aesthetic with a fresh mint-green signature, near-black text, soft warm neutrals, and crisp Inter + Geist Mono typography.
source: https://mintlify.com
colors:
  primary: "#0C8C5E"
  on-primary: "#FFFFFF"
  primary-bright: "#18E299"
  background: "#FFFFFF"
  surface: "#F9F6F3"
  surface-alt: "#EBE9E6"
  text: "#121715"
  text-muted: "#485450"
  border: "#E7E5E2"
  dark-bg: "#0A0B0F"
  dark-surface: "#121715"
  accent: "#0052FF"
  accent-orange: "#FF5A00"
typography:
  display:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.035em
  h1: { fontFamily: Inter, fontSize: 2.75rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.03em }
  h2: { fontFamily: Inter, fontSize: 2rem, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.02em }
  h3: { fontFamily: Inter, fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.4 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: Geist Mono, fontSize: 0.8125rem, letterSpacing: 0.02em }
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
  section: 120px
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: 10px 18px
  button-brand:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 10px 18px
  card:
    backgroundColor: "{colors.background}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Mintlify — DESIGN.md

> Inspired by the public website of Mintlify. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Mintlify sells beautiful docs, so its marketing site doubles as a demonstration of restraint: white and warm-stone surfaces, tight Inter headlines, mono eyebrows, and a mint green that shows up in the logo, highlights, and the occasional glowing hero gradient. Documentation previews (sidebar + content + code) are the hero imagery. It feels calm, precise, and modern without being sterile.

Hold onto: **fresh, precise, calm, developer-polished, airy**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#0C8C5E` | Mint-green brand (text-safe), links, brand buttons |
| primary-bright | `#18E299` | Glows, highlights, active indicators on dark |
| background | `#FFFFFF` | Default canvas |
| surface | `#F9F6F3` | Warm stone sections, card wells |
| surface-alt | `#EBE9E6` | Chips, hover fills |
| text | `#121715` | Headings and dark buttons (green-tinted black) |
| text-muted | `#485450` | Body secondary |
| border | `#E7E5E2` | Hairlines |
| dark-bg | `#0A0B0F` | Dark sections / dark mode |
| dark-surface | `#121715` | Dark cards |
| accent | `#0052FF` | Diagram/illustration accent only |
| accent-orange | `#FF5A00` | Diagram/illustration accent only |

Neutrals dominate; green signals brand and success; blue/orange are illustration-only.

## Typography
- **Sans:** Inter for everything (free). Headlines weight 600 with -0.03em tracking.
- **Mono:** Geist Mono (free, OFL) for eyebrows, code, and nav metadata; uppercase with +0.02em tracking at 12–13px.
- Body 16px/1.6 in `#485450`.
- Sentence case. Eyebrow labels mono uppercase in green or muted.

## Layout
- Max width 1200px; hero text centered at max 760px.
- Section spacing 96–128px.
- Hero shows a framed docs preview (sidebar, article, code panel) beneath centered copy, often over a soft mint radial gradient.
- Feature grids: 3-up bento of bordered cards of mixed spans.
- Customer logos: grayscale row, 32px tall.

## Elevation & Depth
- Bordered cards with near-zero shadow: `0 1px 2px rgba(18,23,21,0.04)`.
- Product frames: `0 20px 60px -20px rgba(12,140,94,0.25)` for a faint green halo.
- Hero glow: `radial-gradient(60% 50% at 50% 0%, rgba(24,226,153,0.25), transparent)`.

## Shapes
- Pill buttons (full radius). Cards 16px, product frames 24px, inputs 10px.
- Icons: 1.5px stroke (Lucide-like), 16–20px.
- Imagery: crisp UI screenshots in browser frames; light abstract green blobs.

## Components
- **Primary button:** `#121715` bg, white 14px/500 text, pill, 10px 18px. Hover `#2A302D`.
- **Brand button:** `#0C8C5E` bg, white text, pill. Hover `#0A7550`.
- **Ghost button:** 1px `#E7E5E2` border, white bg, ink text; hover bg `#F9F6F3`.
- **Nav:** white with `backdrop-filter: blur(8px)` at 80% opacity, 64px, logo left, 14px links center, "Contact sales" ghost + "Get started" dark pill right.
- **Bento card:** white, 1px border, 16px radius, 24px padding, mono eyebrow, 18px/600 title, muted body, embedded UI crop.
- **Code block:** `#0A0B0F` bg, 12px radius, Geist Mono 13px, copy button top right, green string highlights.
- **Callout:** `rgba(24,226,153,0.08)` bg, 1px `rgba(12,140,94,0.25)` border, 10px radius, green info icon.
- **Input:** 40px, 1px border, 10px radius; focus border `#0C8C5E` and ring `rgba(24,226,153,0.2)`.

## Do's and Don'ts
**Do**
- Keep headlines tight and semibold, not bold.
- Use mono uppercase labels as section eyebrows.
- Use green as a signal (links, active, success), not as a background.
- Show docs UI as the hero visual.

**Don't**
- Don't use bright `#18E299` for text on white (contrast fails).
- Don't use heavy shadows or dark gradients on light sections.
- Don't use squared buttons; keep pills.
- Don't add more than one glow per page.

## Agent Prompt Guide
**Base prompt:**
"Design in a Mintlify-inspired style: white and warm-stone #F9F6F3 surfaces, green-black #121715 text, mint green #0C8C5E brand with #18E299 glows. Inter 600 headlines with -0.03em tracking, Geist Mono uppercase eyebrows. Pill buttons (dark primary), 16px bordered cards, soft green halo behind product frames."

**Examples:**
- "Centered hero 'The intelligent documentation platform', mono eyebrow, dark pill + ghost pill buttons, framed docs screenshot below with green radial glow."
- "Bento grid of five bordered cards: AI assistant, analytics, editor, API playground, versioning."
- "Docs page: 240px sidebar, article with green callout box, dark code block with copy button."
