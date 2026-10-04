---
version: alpha
name: Nothing
description: Transparent-tech monochrome with dot-matrix type, a single signal red, and an industrial-meets-retro sensibility.
source: https://nothing.tech
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F2F2F2"
  surface-dark: "#1B1B1D"
  text: "#000000"
  text-muted: "#8A8A8A"
  border: "#E0E0E0"
  accent: "#D71921"
  dark-background: "#000000"
  dark-text: "#FFFFFF"
typography:
  display:
    fontFamily: NDot 57
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.02em
  h1: { fontFamily: NDot 57, fontSize: 3rem, fontWeight: 400, lineHeight: 1.05, letterSpacing: 0.02em }
  h2: { fontFamily: NType 82, fontSize: 2rem, fontWeight: 400, lineHeight: 1.15 }
  h3: { fontFamily: NType 82, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: NType 82, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  label: { fontFamily: NType 82 Mono, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0.08em }
  mono: { fontFamily: NType 82 Mono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 16px
  lg: 24px
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
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Nothing — DESIGN.md

> Inspired by the public website of Nothing. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Nothing builds consumer electronics that show their insides. The web presence mirrors that: strict black-and-white, exposed "technical" details, LED-style dot-matrix headlines, and one warning-light red. It feels like a lab notebook designed by a fashion label — raw, playful, and very controlled.

Adjectives: **monochrome, transparent, industrial, playful, retro-futurist**.

Density is medium: big type moments interleaved with compact, monospaced spec labels.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#000000` | Text, primary buttons, dark mode canvas |
| on-primary | `#FFFFFF` | Text on black |
| background | `#FFFFFF` | Light canvas |
| surface | `#F2F2F2` | Cards, product tiles |
| surface-dark | `#1B1B1D` | Cards on black backgrounds |
| text-muted | `#8A8A8A` | Captions, spec labels, secondary nav |
| border | `#E0E0E0` | Dividers |
| accent | `#D71921` | Signal red — a single dot, a recording indicator, a "Buy" button, a sale tag |

Pure black and pure white dominate, and full-black dark sections are common. Red is used like an LED: tiny, punctual, never as a background area larger than a button.

## Typography
- **NDot 57** (dot-matrix, proprietary) for display and hero headings. Free fallback: **Doto** (Google Fonts) or **DotGothic16**; otherwise fall back to **Space Mono**.
- **NType 82** (proprietary grotesk) for body and UI. Free fallback: **Space Grotesk** or **Inter**.
- **NType 82 Mono** for labels, specs, prices and metadata. Free fallback: **Space Mono** or **JetBrains Mono**.
- Dot-matrix type is always large (≥32px); never use it for paragraphs.
- Small labels are UPPERCASE mono with +0.08em tracking, e.g. `PHONE (3)`, `[ 01 ]`.
- Product names use parentheses: "Phone (3a)", "Ear (open)". Keep this convention.

## Layout
- 12-column grid, ~1440px max width, 24–40px outer margins.
- Heroes: centered product shot on pure white or pure black, dot-matrix headline above, small mono caption beneath.
- Section spacing 80–120px; tighter 32–48px between related blocks.
- Bento-like grids of rounded tiles for feature overviews (mix of 1x1 and 2x1 tiles).
- Mono labels often pinned to corners of a tile (top-left index, top-right category) for a "technical drawing" feel.

## Elevation & Depth
- Flat. No drop shadows on UI.
- Depth comes from photography of translucent hardware and from black/white inversion between sections.
- Thin 1px rules and dotted lines (`border-style: dotted`) separate data rows.
- Header is translucent with `backdrop-filter: blur(20px)` and a white/black 80% fill.

## Shapes
- Buttons are full pills.
- Cards and tiles use generous 16–24px radii.
- Dot motif: circles in a grid (the Glyph light language) — use as a subtle pattern or loader, in black/grey with one red dot.
- Icons: simple monoline, 1.5px stroke, sometimes rendered as dot grids.
- Imagery: product on seamless backgrounds, harsh studio light, exposed components; lifestyle shots grainy and monochrome-leaning.

## Components
- **Primary button**: black pill, white 14–16px label, ~44px tall; hover inverts to white with a 1px black border.
- **Accent button**: red `#D71921` pill for the single purchase action on a product page.
- **Secondary button**: 1px black outline pill, transparent.
- **Product tile**: `#F2F2F2` (light) or `#1B1B1D` (dark) rounded 24px, product image centered, name in 20px grotesk, price in mono below, mono index label top-left.
- **Spec table**: two columns, mono uppercase labels left in muted grey, values right in black, dotted row separators.
- **Nav**: wordmark (dot-matrix "NOTHING") left, sparse links in 14px, cart icon right; mobile menu full-screen black with large dot-matrix links.
- **Tag / badge**: small pill, 1px border, mono 11px uppercase; "NEW" or "SALE" uses a red dot prefix.
- **Loader**: 3x3 dot grid animating dot-by-dot.

## Do's and Don'ts
**Do**
- Keep the palette black, white, grey + one red.
- Use dot-matrix only for big headlines and numbers.
- Label things with uppercase mono metadata and bracketed indices.
- Use pills for buttons and large radii for tiles.
- Flip between full-white and full-black sections.

**Don't**
- Don't introduce gradients or extra brand hues.
- Don't use red for large fills or body text.
- Don't set body copy in dot-matrix type.
- Don't add shadows or skeuomorphic effects.
- Don't crowd the hero; one product, one headline.

## Agent Prompt Guide
Paste-ready prompt:
> Design like Nothing (nothing.tech): pure black `#000000` and white `#FFFFFF` with grey `#F2F2F2` tiles and muted `#8A8A8A` labels, one signal red `#D71921` used like an LED. Headlines in a dot-matrix font (Doto as fallback), body in Space Grotesk, labels in uppercase Space Mono with wide tracking. Pill buttons, 24px-radius tiles, no shadows. Transparent-tech, industrial, playful.

Example component prompts:
1. "A product tile on `#1B1B1D` with 24px radius, mono label '[ 02 ] AUDIO' top-left, centered earbud image, 'Ear (3)' in white grotesk, price in mono grey."
2. "A spec list with uppercase mono grey labels (DISPLAY, BATTERY, CHIPSET) and black values, separated by dotted 1px lines."
3. "A hero on white: dot-matrix headline 'Come to the bright side', small mono caption, black pill 'Learn more' and red pill 'Buy now'."
