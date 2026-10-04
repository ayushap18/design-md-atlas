---
version: alpha
name: Glassmorphism
description: Frosted translucent panels floating over vivid blurred color fields, with hairline light borders, soft depth, and airy sans-serif type.
source: https://www.nngroup.com/articles/glassmorphism/
colors:
  primary: "#FFFFFF"
  on-primary: "#1B1640"
  background: "#0F0C29"
  surface: "rgba(255,255,255,0.12)"
  surface-strong: "rgba(255,255,255,0.22)"
  text: "#FFFFFF"
  text-muted: "rgba(255,255,255,0.72)"
  border: "rgba(255,255,255,0.28)"
  accent: "#7F5AF0"
  blob-pink: "#FF6AD5"
  blob-cyan: "#2CB6FF"
  blob-violet: "#8A2BE2"
  blob-peach: "#FFB86C"
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: Plus Jakarta Sans, fontSize: 2.75rem, fontWeight: 700, lineHeight: 1.1 }
  h2: { fontFamily: Plus Jakarta Sans, fontSize: 1.875rem, fontWeight: 600, lineHeight: 1.2 }
  h3: { fontFamily: Plus Jakarta Sans, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Inter, fontSize: 0.8125rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 10px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 112px
components:
  glass-panel:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    backdropFilter: "blur(24px) saturate(160%)"
    rounded: "{rounded.lg}"
    padding: 28px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-glass:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.text}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.full}"
    padding: 12px 24px
---

# Glassmorphism — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
Glassmorphism stacks semi-transparent, background-blurred panels over a colorful, blurry backdrop so the interface feels like frosted acrylic sheets in front of light. It is atmospheric and modern, best for dashboards, music/wallet apps, landing heroes, and OS-like shells. The style only works when there is something vivid behind the glass, and it only stays usable when contrast is managed carefully.

Hold onto: **luminous, layered, airy, soft, frosted**.

## Colors
| Token | Value | Role |
|---|---|---|
| background | `#0F0C29` | Deep indigo base beneath the blobs |
| blob-pink / cyan / violet / peach | `#FF6AD5` / `#2CB6FF` / `#8A2BE2` / `#FFB86C` | Large blurred orbs that give the glass something to refract |
| surface | `rgba(255,255,255,0.12)` | Default glass fill |
| surface-strong | `rgba(255,255,255,0.22)` | Hovered/raised glass, glass buttons |
| border | `rgba(255,255,255,0.28)` | 1px "light edge" |
| text | `#FFFFFF` | Primary text |
| text-muted | `rgba(255,255,255,0.72)` | Secondary text (never lower than 0.65) |
| primary | `#FFFFFF` | Solid primary button |
| on-primary | `#1B1640` | Text on solid white button |
| accent | `#7F5AF0` | Toggles, progress, focus rings |

Backdrop recipe: `background: #0F0C29` + 3–4 absolutely positioned circles (400–700px) in blob colors with `filter: blur(120px)` at 60–80% opacity.

Light variant: base `#EEF1FF`, glass `rgba(255,255,255,0.55)`, border `rgba(255,255,255,0.8)`, text `#1B1640`.

## Typography
- **Headings:** Plus Jakarta Sans 600–700 (free). Alternative: *Manrope*, *Outfit*.
- **Body:** Inter 400/500.
- Avoid weights under 400 — they shimmer and vanish on blur.
- Add `text-shadow: 0 1px 2px rgba(0,0,0,0.15)` on white text over light blobs for safety.

## Layout
- Centered compositions, max width 1120px.
- Panels float with 24–32px gaps so the backdrop peeks through.
- Hero: one big glass card (max 640px) centered over blobs, or a floating dashboard of overlapping glass widgets.
- Use 2–3 layers max: backdrop, panel, raised element (menu/modal).

## Elevation & Depth
- Glass recipe: `background: rgba(255,255,255,0.12); backdrop-filter: blur(24px) saturate(160%); border: 1px solid rgba(255,255,255,0.28); box-shadow: 0 8px 32px rgba(15,12,41,0.35);`
- Top-edge highlight: `inset 0 1px 0 rgba(255,255,255,0.35)`.
- Higher layers get more blur (32px) and stronger fill (0.2).
- Optional sheen: `linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0) 60%)` overlay.

## Shapes
- Generous radii: panels 24px, widgets 16px, buttons and chips pill.
- Icons: 1.75px stroke, white, rounded joins.
- Imagery: abstract gradients, 3D glossy objects, album art; avoid busy photos behind text.

## Components
- **Glass panel:** recipe above, 24px radius, 28px padding.
- **Primary button:** solid white, `#1B1640` text 15px/600, pill. Hover: `rgba(255,255,255,0.9)` + glow `0 0 24px rgba(255,255,255,0.35)`.
- **Glass button:** `rgba(255,255,255,0.22)` fill, 1px border, white text, blur 16px. Hover fill 0.3.
- **Input:** 48px, `rgba(255,255,255,0.10)` fill, 1px border, 14px radius, white text, placeholder at 0.55; focus border `rgba(255,255,255,0.6)` + ring `0 0 0 4px rgba(127,90,240,0.35)`.
- **Nav:** floating glass pill bar, 56px tall, 16px from top, centered, max 880px.
- **Stat widget:** 16px radius glass, 13px muted label, 32px/700 value, mini sparkline in white.
- **Modal:** glass at 0.18 fill, blur 40px, over a `rgba(15,12,41,0.4)` scrim.
- **Toggle:** track glass, thumb white, on-state track `#7F5AF0`.

## Do's and Don'ts
**Do**
- Always put vivid, blurred color behind glass.
- Keep 1px light borders — they define edges once blur flattens contrast.
- Verify text contrast ≥ 4.5:1 against the brightest point behind each panel.
- Provide a solid fallback for no `backdrop-filter` support (`rgba(30,26,70,0.85)`).

**Don't**
- Don't put glass over flat solid backgrounds — it reads as gray.
- Don't stack more than three translucent layers.
- Don't place long body copy on glass; keep it to labels, stats, short copy.
- Don't use thin weights or low-opacity text below 0.65.

## Agent Prompt Guide
**Base prompt:**
"Use a glassmorphism style: deep indigo #0F0C29 background with large blurred blobs in #FF6AD5, #2CB6FF, #8A2BE2, #FFB86C. Panels are rgba(255,255,255,0.12) with backdrop-filter blur(24px) saturate(160%), 1px rgba(255,255,255,0.28) borders, 24px radius, soft shadow. White text, Plus Jakarta Sans headings, Inter body, pill buttons (solid white primary, glass secondary)."

**Examples:**
- "Crypto wallet dashboard: floating glass nav pill, balance card with 40px number, three stat widgets, a transactions list panel."
- "Login: centered 420px glass card, two glass inputs, white pill sign-in button, social buttons as glass circles."
- "Music player: album-art blurred as backdrop, glass control bar with white icons and progress track in #7F5AF0."
