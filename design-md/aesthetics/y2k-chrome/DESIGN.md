---
version: alpha
name: Y2K Chrome
description: Millennium-era futurism — liquid chrome, iridescent gradients, bubbly glossy buttons, translucent plastics, sparkles, and wide techno type on cyber-blue skies.
source: https://en.wikipedia.org/wiki/Y2K_aesthetic
colors:
  primary: "#3D7BFF"
  on-primary: "#FFFFFF"
  background: "#E9F1FF"
  surface: "#FFFFFF"
  text: "#0A0F2C"
  text-muted: "#4A5580"
  border: "#B9C7E8"
  accent: "#FF4FD8"
  accent-lime: "#C6FF3D"
  accent-cyan: "#5CF2FF"
  chrome-light: "#F4F6FA"
  chrome-mid: "#A9B2C3"
  chrome-dark: "#3A4255"
typography:
  display:
    fontFamily: Syncopate
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.02em
  h1: { fontFamily: Syncopate, fontSize: 2.75rem, fontWeight: 700, lineHeight: 1.05, letterSpacing: 0.02em }
  h2: { fontFamily: Michroma, fontSize: 1.75rem, fontWeight: 400, lineHeight: 1.2 }
  h3: { fontFamily: Michroma, fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.3 }
  body: { fontFamily: Manrope, fontSize: 1rem, fontWeight: 500, lineHeight: 1.55 }
  label: { fontFamily: Orbitron, fontSize: 0.75rem, fontWeight: 600, letterSpacing: 0.12em }
  mono: { fontFamily: Space Mono, fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 16px
  lg: 28px
  xl: 40px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 104px
components:
  button-primary:
    background: "linear-gradient(180deg, #8FB6FF 0%, #3D7BFF 50%, #1E4FD6 51%, #4F8BFF 100%)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 14px 30px
  button-chrome:
    background: "linear-gradient(180deg, #FFFFFF 0%, #D5DAE3 45%, #A9B2C3 50%, #E8ECF2 100%)"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 14px 30px
  card:
    backgroundColor: "rgba(255,255,255,0.7)"
    border: "1px solid rgba(255,255,255,0.9)"
    rounded: "{rounded.lg}"
    padding: 28px
---

# Y2K Chrome — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
Y2K Chrome channels 1998–2004 optimism: liquid-metal logos, glossy gel buttons, iridescent holographic gradients, translucent candy plastic (think iMac G3), sparkle stars, and wide, techno display type. Revived today in fashion, music, and Gen-Z product sites, it is maximal, shiny, and nostalgic — but a modern take keeps layouts clean so the shine has room.

Hold onto: **glossy, futuristic, iridescent, bubbly, maximal-but-clean**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#E9F1FF` | Pale cyber-sky canvas |
| surface | `#FFFFFF` | Translucent card base |
| text | `#0A0F2C` | Deep navy ink |
| text-muted | `#4A5580` | Secondary copy |
| border | `#B9C7E8` | Soft blue outlines |
| primary | `#3D7BFF` | Gel-button blue |
| accent | `#FF4FD8` | Hot magenta sparkle |
| accent-lime | `#C6FF3D` | Acid lime highlights |
| accent-cyan | `#5CF2FF` | Cyan glow |
| chrome-light / mid / dark | `#F4F6FA` / `#A9B2C3` / `#3A4255` | Chrome gradient stops |

Iridescent gradient: `linear-gradient(120deg, #5CF2FF, #B49CFF 35%, #FF4FD8 60%, #FFE6A7 85%)`.
Chrome text: `linear-gradient(180deg, #FFFFFF 0%, #A9B2C3 48%, #3A4255 50%, #E8ECF2 100%)` with `background-clip: text`.

## Typography
- **Display:** Syncopate 700 (free, wide techno). Alternatives: *Orbitron* 800, *Audiowide*, *Monoton* for one-off logos.
- **Subheads:** Michroma (free, extended).
- **Body:** Manrope 500 (keeps readability).
- **Labels:** Orbitron 600, uppercase, +0.12em tracking.
- Chrome or iridescent fills only on display text; body stays solid navy.

## Layout
- Max width 1200px; centered hero, then card grids of 3.
- Floating decorative elements: 4-point sparkle stars, chrome blobs, orbit rings, pixel cursors — positioned absolutely around edges.
- Sections can sit on alternating pale-sky and iridescent-gradient bands.
- Keep content columns tidy; chaos lives in decoration, not structure.

## Elevation & Depth
- Gel gloss: buttons have a hard horizontal highlight split at 50% plus `inset 0 1px 0 rgba(255,255,255,0.8)` and `0 6px 16px rgba(61,123,255,0.35)`.
- Translucent plastic cards: `rgba(255,255,255,0.7)` with `backdrop-filter: blur(12px)`, white 1px border, `0 10px 30px rgba(10,15,44,0.12)`.
- Glow halos: `0 0 24px rgba(92,242,255,0.6)` around interactive accents.

## Shapes
- Bubbly: pill buttons, 28–40px card radii, circles and blob shapes.
- Icons: glossy 3D or chunky outlined with gradient fills; sparkles ✦ everywhere.
- Imagery: chrome 3D renders, holographic foil textures, low-poly or early-3D objects, pixel art cursors.

## Components
- **Gel button (primary):** pill, split-gloss blue gradient (see tokens), white 15px/700 text with `text-shadow: 0 1px 0 rgba(0,0,0,0.25)`. Hover: brightness 1.08 + cyan glow. Active: invert gradient direction.
- **Chrome button:** metallic gradient, navy text, 1px `#A9B2C3` border.
- **Card:** translucent white plastic, 28px radius, 28px padding, iridescent 2px top border (`border-image` from the iridescent gradient).
- **Nav:** floating pill at top, translucent white, chrome wordmark, Orbitron 12px uppercase links, gel button right.
- **Badge:** pill with acid lime `#C6FF3D` fill and navy text, or iridescent fill.
- **Input:** 48px pill, white, 2px `#B9C7E8` border, inner shadow `inset 0 2px 4px rgba(10,15,44,0.08)`; focus border `#3D7BFF` + cyan glow.
- **Marquee/ticker:** iridescent band with scrolling Orbitron uppercase text and ✦ separators.
- **Window frame (retro OS):** title bar with gradient blue `#3D7BFF → #8FB6FF`, white bold title, three round glossy buttons.

## Do's and Don'ts
**Do**
- Use chrome/iridescent effects on display text and decoration.
- Make buttons look physically glossy with a split highlight.
- Sprinkle sparkles and orbit shapes around the edges.
- Keep body text solid, readable navy on light surfaces.

**Don't**
- Don't apply chrome gradients to body copy.
- Don't use flat, matte, squared-off components.
- Don't let decorations overlap interactive targets.
- Don't use dark, muted earth tones.

## Agent Prompt Guide
**Base prompt:**
"Use a Y2K chrome aesthetic: pale cyber-sky #E9F1FF background, navy #0A0F2C text, glossy gel pill buttons in blue #3D7BFF with a split highlight, chrome gradient display text in Syncopate, iridescent gradient (#5CF2FF → #B49CFF → #FF4FD8 → #FFE6A7) accents, magenta #FF4FD8 and acid lime #C6FF3D pops. Translucent white plastic cards with 28px radius, sparkles ✦ and orbit rings as decoration, Manrope body."

**Examples:**
- "Music release hero: chrome Syncopate title, 3D chrome blob render, gel 'Pre-save' button, sparkles floating around, iridescent ticker below."
- "Product grid: translucent plastic cards with iridescent top borders, lime 'NEW' badges, pill gel buttons."
- "Retro OS-style modal with gradient blue title bar and glossy round window controls."
