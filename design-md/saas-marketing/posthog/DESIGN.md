---
version: alpha
name: PostHog
description: Beige, cluttered-on-purpose product analytics site with hedgehog cartoons, chunky bordered UI, red-orange and yellow accents, and an OS-desktop metaphor.
source: https://posthog.com
colors:
  primary: "#F54E00"
  on-primary: "#FFFFFF"
  background: "#EEEFE9"
  surface: "#FDFDF8"
  surface-alt: "#E5E7E0"
  text: "#151515"
  text-muted: "#4D4F46"
  border: "#BFC1B7"
  border-strong: "#151515"
  accent: "#F7A501"
  accent-blue: "#1D4AFF"
  accent-teal: "#49BAC5"
  accent-red: "#E92F2F"
  dark-bg: "#1E1F23"
typography:
  display:
    fontFamily: IBM Plex Sans
    fontSize: 3.5rem
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: IBM Plex Sans, fontSize: 2.5rem, fontWeight: 800, lineHeight: 1.1 }
  h2: { fontFamily: IBM Plex Sans, fontSize: 1.75rem, fontWeight: 700, lineHeight: 1.2 }
  h3: { fontFamily: IBM Plex Sans, fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: IBM Plex Sans, fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: IBM Plex Sans, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: Source Code Pro, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    border: "1.5px solid {colors.border-strong}"
    shadow: "0 3px 0 {colors.border-strong}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    border: "1.5px solid {colors.border-strong}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  window:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
---

# PostHog — DESIGN.md

> Inspired by the public website of PostHog. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
PostHog deliberately rejects the slick SaaS template. The site is a beige desktop with draggable "windows", taskbars, file icons, and hedgehog mascots doing silly things. Type is bold IBM Plex Sans, buttons look like physical keys with a hard bottom edge, and the copy is dense, jokey, and self-aware. It rewards exploration over scanning.

Hold onto: **playful, dense, retro-OS, opinionated, tactile**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#EEEFE9` | Beige desktop canvas |
| surface | `#FDFDF8` | Window bodies, cards |
| surface-alt | `#E5E7E0` | Title bars, table headers, sidebars |
| text | `#151515` | Ink |
| text-muted | `#4D4F46` | Secondary copy |
| border | `#BFC1B7` | Window and divider lines |
| border-strong | `#151515` | Button outlines and 3D bottom edge |
| primary | `#F54E00` | Red-orange CTA |
| accent | `#F7A501` | Yellow highlights, "new" tags, hover fill |
| accent-blue | `#1D4AFF` | Links, product-icon tint |
| accent-teal | `#49BAC5` | Product category tint |
| accent-red | `#E92F2F` | Product category tint, errors |
| dark-bg | `#1E1F23` | Dark mode canvas |

Beige and off-white carry the page. Each product (analytics, replay, flags...) owns a bright tint used on its icon. Orange is the only button fill.

## Typography
- **Everything:** IBM Plex Sans (free, Google Fonts), variable weight. Headlines 700–800.
- **Mono:** Source Code Pro for code and keyboard hints.
- **Cartoon/hand lettering:** a rounded display face appears inside illustrations only; do not use it for UI.
- Body 16px/1.55. Links are blue and underlined.
- Headings in sentence case, often with a joke or aside in a lighter weight on the same line.

## Layout
- Desktop metaphor: fixed top menu bar (36px) and an optional bottom taskbar; content lives inside window panels with title bars.
- Window content max width 960px; documentation pages use a 3-pane layout (nav 240px, content, TOC 220px).
- Dense: 16–24px gaps, 64–80px between big sections.
- Desktop icons in a left-aligned grid (80px tiles, label below).

## Elevation & Depth
- Windows: `0 8px 24px rgba(21,21,21,0.12)` + 1px `#BFC1B7` border.
- Buttons: hard offset `0 3px 0 #151515`; on press translate 2px down and shrink shadow to 1px.
- Active window gets a slightly stronger shadow; inactive windows dim title bar text.

## Shapes
- Small radii everywhere: 4–6px. Windows 6px. Avatars/tags full radius.
- Icons: filled, colorful, chunky 2px-outline product glyphs at 20–24px.
- Imagery: hedgehog cartoons (flat, thick outlines) in nearly every section.

## Components
- **Primary button:** `#F54E00` bg, white 14px/700 text, 1.5px ink border, 6px radius, `0 3px 0 #151515`. Hover: lift 1px (`translateY(-1px)`, shadow 4px). Active: `translateY(2px)`, shadow 1px.
- **Secondary button:** same shape, `#FDFDF8` bg, ink text. Hover bg `#F7A501`.
- **Window:** title bar 32px `#E5E7E0` with traffic-light-free controls (minimize/maximize/close glyphs) right, title 13px/600 center; body `#FDFDF8`, 16–24px padding.
- **Menu bar:** 36px, `#E5E7E0`, logo + dropdown menus (13px/600), right side search + "Get started – free" small orange button.
- **Pricing table:** dense rows, 1px `#BFC1B7` dividers, mono numbers right-aligned, "free tier" highlighted with yellow background `#F7A501` at 20% opacity.
- **Tag:** full radius, 11px/700 uppercase, yellow bg, ink text.
- **Input:** 36px, `#FDFDF8`, 1px `#BFC1B7` border, 4px radius; focus border `#1D4AFF`.

## Do's and Don'ts
**Do**
- Use beige `#EEEFE9`, never stark white, for the canvas.
- Give buttons a hard ink bottom shadow and press animation.
- Embrace density and humor; add a mascot to empty states.
- Frame content in window chrome.

**Don't**
- Don't use soft gradients or glass blur.
- Don't use thin, light-weight headlines.
- Don't center everything; left-align like a document.
- Don't hide pricing or detail behind "contact sales" minimalism.

## Agent Prompt Guide
**Base prompt:**
"Design in a PostHog-inspired style: beige desktop canvas #EEEFE9, off-white window panels #FDFDF8 with #E5E7E0 title bars and 1px #BFC1B7 borders, IBM Plex Sans bold headlines, orange #F54E00 buttons with 1.5px ink border and hard 0 3px 0 #151515 shadow. Dense, playful, hedgehog mascots, yellow #F7A501 highlights."

**Examples:**
- "Landing window titled 'home.mdx' with 48px 800-weight headline, short jokey copy, orange 'Get started – free' and cream 'Talk to a human' buttons."
- "Desktop icon grid on beige: product icons in tinted squares (orange, blue, teal, red) with 12px labels."
- "Pricing table with dense rows, mono prices, yellow-highlighted free tier row."
