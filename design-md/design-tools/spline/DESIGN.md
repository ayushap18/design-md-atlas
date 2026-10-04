---
version: alpha
name: Spline
description: Dark, dimensional 3D-first showcase — soft periwinkle highlights, glossy rendered objects and friendly rounded UI.
source: https://spline.design
colors:
  primary: "#FFFFFF"
  on-primary: "#0E0E10"
  background: "#0E0E10"
  surface: "#1A1A1D"
  surface-raised: "#232326"
  text: "#FDFDFD"
  text-muted: "#898989"
  border: "#2C2C30"
  accent: "#5B6CFF"
  accent-soft: "#E3E8FF"
  accent-green: "#3DDC84"
typography:
  display:
    fontFamily: Brockmann, Space Grotesk
    fontSize: 4.5rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: "Brockmann, Space Grotesk", fontSize: 3rem, fontWeight: 500, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: "Brockmann, Space Grotesk", fontSize: 2rem, fontWeight: 500, lineHeight: 1.2 }
  body: { fontFamily: "Spline Sans, Inter", fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: "Spline Sans, Inter", fontSize: 0.8125rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: Spline Sans Mono, fontSize: 0.8125rem }
rounded:
  sm: 8px
  md: 12px
  lg: 20px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 140px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: 10px 20px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Spline — DESIGN.md

> Inspired by the public website of Spline. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Spline makes 3D on the web approachable, and its site is a dark stage for interactive, glossy 3D scenes — soft clay-like shapes, glass, and pastel lighting you can drag and rotate. The UI around them is minimal, rounded and soft, with a periwinkle tint that feels friendly rather than technical.

Hold onto: **dimensional, playful, soft, futuristic, interactive**. Low text density; visuals fill the viewport.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | #0E0E10 | Page base |
| surface | #1A1A1D | Cards, panels |
| surface-raised | #232326 | Inputs, hover |
| border | #2C2C30 | Card outlines |
| text | #FDFDFD | Headlines and body |
| text-muted | #898989 | Captions |
| primary | #FFFFFF | Main CTA fill |
| on-primary | #0E0E10 | Text on white |
| accent | #5B6CFF | Links, selection, accent CTA |
| accent-soft | #E3E8FF | Periwinkle highlights, light badges, 3D lighting tint |
| accent-green | #3DDC84 | Live/online status |

Dark neutrals dominate; color comes mainly from the rendered 3D scenes (pastel pinks, blues, purples) and periwinkle accents.

## Typography
- **Display:** Brockmann (medium 500) — a geometric grotesk. Free fallback: **Space Grotesk** or **Manrope**.
- **Body/UI:** Spline Sans — open-source on Google Fonts, use directly. Mono: **Spline Sans Mono**.
- Display tracking -0.03em; body 16px/1.55.
- Sentence case; concise headlines ("Design and collaborate in 3D").

## Layout
- Hero: full-viewport interactive 3D canvas with centered headline and CTAs overlaid.
- Container max ~1200px, 24/40px gutters.
- Feature sections: 3D scene or looping video in a 32px-radius frame with text alongside.
- Community gallery: 3–4 column grid of scene thumbnails, 16px gap.
- Section spacing 120–140px.

## Elevation & Depth
- Depth primarily from the 3D renders themselves (soft shadows, ambient occlusion, glass).
- UI cards: layered grays + 1px #2C2C30 border; no strong shadows.
- Soft glow behind hero objects: `radial-gradient(circle, rgba(91,108,255,0.25), transparent 65%)`.
- Nav: `rgba(14,14,16,0.7)` with `backdrop-filter: blur(20px)`.

## Shapes
- Buttons: pill. Cards: 20px. Media frames: 32px.
- 3D objects are rounded, inflated, soft-bodied — no hard edges.
- Icons: 20px rounded line icons, 1.5px stroke, white/#898989.
- Imagery: rendered 3D scenes with pastel gradients and matte/glass materials.

## Components
- **Primary button:** white, #0E0E10 14px/600, pill, 40px tall, 10px 20px. Hover #E3E8FF.
- **Accent button:** #5B6CFF, white text, pill. Hover #7180FF.
- **Ghost button:** rgba(255,255,255,0.08) fill, white text, pill.
- **Nav:** 60px translucent dark, logo left, links (Product, Community, Pricing, Learn) 14px/500 #898989 → white on hover, "Log in" ghost + white "Get started — it's free" pill right.
- **Scene card:** #1A1A1D, 20px radius, 16:10 thumbnail with 12px radius inset, title 15px/500, author avatar 20px + remix count.
- **Input:** #232326, 12px radius, 40px tall, no border; focus 1px #5B6CFF.
- **Badge:** pill, #E3E8FF fill, #0E0E10 12px/600 (e.g., "AI", "New").
- **Toolbar (product-style):** floating pill bar #1A1A1D with 32px icon buttons, active icon in #5B6CFF rounded square.

## Do's and Don'ts
**Do**
- Make a 3D or 3D-looking visual the hero of every key section.
- Keep chrome dark, soft and rounded so renders pop.
- Use periwinkle #E3E8FF / #5B6CFF for interaction and highlight.
- Favor pill and large-radius shapes throughout.

**Don't**
- Don't use flat 2D clip art or stock photos.
- Don't use sharp corners or heavy borders.
- Don't flood sections with saturated solid color.
- Don't use bold 700+ display weights; 500 keeps it friendly.

## Agent Prompt Guide
**Base prompt:**
"Design in the spirit of Spline: near-black #0E0E10 background, #1A1A1D cards with 1px #2C2C30 borders and 20px radius, Space Grotesk 500 headlines (for Brockmann) and Spline Sans body. White pill primary buttons, #5B6CFF accent pills, periwinkle #E3E8FF badges. Hero is a soft, glossy pastel 3D scene with a subtle blue glow; translucent blurred nav."

**Examples:**
- "Hero: full-screen 3D scene of inflated pastel shapes, centered 72px headline, white 'Get started' pill and ghost 'Watch video' pill."
- "Community grid: 4 columns of scene cards with thumbnail, author avatar and remix count."
- "Floating editor toolbar: dark pill with icon buttons, active tool highlighted in #5B6CFF."
