---
version: alpha
name: Apple
description: Minimal, product-as-hero presentation with San Francisco type, vast whitespace, blue text links and pill buttons.
source: https://www.apple.com
colors:
  primary: "#0071E3"
  primary-hover: "#0077ED"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F5F7"
  surface-dark: "#000000"
  text: "#1D1D1F"
  text-muted: "#6E6E73"
  border: "#D2D2D7"
  link: "#0066CC"
  link-on-dark: "#2997FF"
  accent: "#BF4800"
typography:
  display:
    fontFamily: SF Pro Display, -apple-system, BlinkMacSystemFont, Inter, Helvetica Neue, sans-serif
    fontSize: 5rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.015em
  h1: { fontFamily: SF Pro Display, fontSize: 3.5rem, fontWeight: 600, lineHeight: 1.07, letterSpacing: -0.005em }
  h2: { fontFamily: SF Pro Display, fontSize: 2.5rem, fontWeight: 600, lineHeight: 1.1 }
  body: { fontFamily: "SF Pro Text, -apple-system, Inter", fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.47, letterSpacing: -0.022em }
  small: { fontFamily: SF Pro Text, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.33 }
  mono: { fontFamily: "SF Mono, ui-monospace", fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 12px
  lg: 18px
  xl: 28px
  full: 980px
spacing:
  xs: 4px
  sm: 8px
  md: 20px
  lg: 40px
  xl: 80px
  xxl: 120px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 11px 21px
  tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 48px
---

# Apple — DESIGN.md

> Inspired by the public website of Apple. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Apple.com treats every page like a gallery: one product, one idea per screen, enormous photography, and copy reduced to a headline, a single line and two links. The palette is near-white and near-black with a single interactive blue. Type is San Francisco, tightly tracked and confidently sized. Interactions are subtle — sticky local nav, scroll-driven reveals, video that plays in place.

Adjectives: **restrained, precise, premium, spacious, calm.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #0071E3 | Buy buttons, primary pills |
| primary-hover | #0077ED | Hover |
| background | #FFFFFF | Main page |
| surface | #F5F5F7 | Product tiles, footer, alternating sections |
| surface-dark | #000000 | Pro product heroes (white type) |
| text | #1D1D1F | All headings and body (not pure black) |
| text-muted | #6E6E73 | Captions, footnotes, secondary lines |
| border | #D2D2D7 | Hairlines, input borders, footer dividers |
| link | #0066CC | "Learn more >" links on light |
| link-on-dark | #2997FF | Links on black |
| accent | #BF4800 | "New" eyebrow labels (orange) |

Whites and greys dominate; blue is the only interactive color.

## Typography
- **Family:** SF Pro Display (≥20px) and SF Pro Text (<20px). Free fallbacks: system-ui on Apple devices, **Inter** elsewhere.
- **Scale:** 80px hero / 56px section / 40px tile headline / 28px sub / 21px lead / 17px body / 14px links in nav / 12px footnotes.
- **Weights:** 600 for headlines, 400 body, 500 for some tile subheads. Display rarely uses 700.
- Body 17px with −0.022em tracking, line-height 1.47. Headline tracking is slightly negative.
- Product names are set like words, not logos (e.g., "iPhone 17 Pro"). Sentence case; no all-caps except tiny eyebrows.

## Layout
- Global nav 44px tall, content max width 980px centered (wider 1440px for tiles).
- Home: stacked full-width hero tiles (~692px tall) then a 2-column grid of tiles with 12px gaps on #FFFFFF.
- Each tile: centered headline, one-line subhead, two CTAs (pill + "Learn more" link), product image below.
- Product pages: sticky 52px local nav with product name left and a small blue "Buy" pill right.
- Vertical section padding 80–120px. Text column max ~690px.

## Elevation & Depth
- Global nav: rgba(255,255,255,0.8) with `backdrop-filter: saturate(180%) blur(20px)`; dark variant rgba(22,22,23,0.8).
- Very few shadows; cards in the Store use `2px 4px 12px rgba(0,0,0,0.08)` and lift to `rgba(0,0,0,0.16)` on hover.
- Depth comes from photography and layered scroll animations.

## Shapes
- Pills: 980px radius on buttons.
- Tiles and Store cards: 18px radius; modals 28px; inputs 12px.
- Icons: SF Symbols-like, thin 1.5px strokes, 14–24px.
- Imagery: product renders on seamless white/black, perfectly lit, cropped dramatically.

## Components
- **Primary button:** #0071E3, white 17px/400, 11px 21px padding, pill. Hover #0077ED. Large variant 15px 28px, 18px text.
- **Secondary button:** transparent with 1px #0071E3 border and blue text, pill.
- **Text link:** #0066CC, 17px, followed by a " >" chevron, underline on hover.
- **Global nav:** 44px, 12px/400 links in #1D1D1F at 0.8 opacity, Apple logo left, search & bag icons right; dropdown panels expand full-width with large 24px/600 link lists.
- **Store card:** white, 18px radius, soft shadow, 30px padding, eyebrow in #BF4800 12px/600, title 28px/600, price line 17px.
- **Inputs:** 56px tall, 12px radius, 1px #D2D2D7, floating label; focus 4px rgba(0,125,250,0.6) ring.
- **Segmented picker (Store config):** large 18px-radius option cards with 1px #86868B border, selected 2px #0071E3.

## Do's and Don'ts
**Do**
- One message per section: headline, subline, two CTAs, image.
- Use #1D1D1F text on white or #F5F5F7, and white on black.
- Keep blue strictly for interaction.
- Use translucent blurred nav bars.

**Don't**
- Don't crowd tiles with bullets or multiple images.
- Don't use colored backgrounds outside product-color moments.
- Don't use square buttons or heavy borders.
- Don't use bold 800+ weights or loose letter-spacing.

## Agent Prompt Guide
**Base prompt:**
"Design in an Apple-inspired style: white and #F5F5F7 sections, #1D1D1F text, Inter (stand-in for SF Pro) headlines 600 weight with slightly negative tracking, 17px body at 1.47 line-height. Single interactive blue #0071E3 for pill buttons (980px radius), #0066CC 'Learn more >' links. Huge whitespace, centered copy, product imagery as the hero. Translucent blurred 44px nav."

**Example component prompts:**
1. "Home tile: #F5F5F7 background, 18px radius, centered 'MacBook Air' 48px/600, one-line 21px subhead, a blue 'Buy' pill and 'Learn more >' link, product image below."
2. "Sticky local nav: 52px, product name 21px/600 left, links 12px right, small blue 'Buy' pill, blurred white background."
3. "Store config card: options as 18px-radius cards with 1px #86868B border; selected gets 2px #0071E3 border; price 17px under each."
