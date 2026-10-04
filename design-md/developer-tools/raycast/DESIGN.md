---
version: alpha
name: Raycast
description: Glossy macOS-native darkness — deep black canvas, glassy command-bar windows, a coral-red brand mark, and vivid diagonal light streaks in red, blue and purple.
source: https://www.raycast.com
colors:
  primary: "#FF6363"
  on-primary: "#FFFFFF"
  background: "#070708"
  surface: "#111214"
  surface-alt: "#1B1C1E"
  elevated: "#232427"
  text: "#FFFFFF"
  text-secondary: "#D8D8D8"
  text-muted: "#9C9C9D"
  text-faint: "#6A6B6C"
  border: "rgba(255,255,255,0.08)"
  border-strong: "rgba(255,255,255,0.16)"
  blue: "#56C2FF"
  purple: "#9D6BFF"
  deep-blue: "#043F96"
  deep-purple: "#330381"
  green: "#59D499"
  yellow: "#FFC531"
typography:
  display:
    fontFamily: Inter, SF Pro Display, -apple-system, sans-serif
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: Inter, SF Pro Display, sans-serif, fontSize: 3rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.025em }
  h2: { fontFamily: Inter, SF Pro Display, sans-serif, fontSize: 2rem, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.02em }
  h3: { fontFamily: Inter, SF Pro Text, sans-serif, fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.35 }
  body: { fontFamily: Inter, SF Pro Text, sans-serif, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  ui: { fontFamily: Inter, SF Pro Text, sans-serif, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: JetBrains Mono, SF Mono, ui-monospace, monospace, fontSize: 0.8125rem }
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  window: 20px
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
    backgroundColor: "#FFFFFF"
    textColor: "#070708"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-secondary:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    padding: 10px 16px
  command-window:
    backgroundColor: "rgba(28,28,30,0.85)"
    border: 1px solid {colors.border-strong}
    rounded: "{rounded.window}"
    backdropBlur: 40px
  card:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.border}
    rounded: "{rounded.xl}"
    padding: 24px
---

# Raycast — DESIGN.md

> Inspired by the public website of Raycast. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Raycast's site is a polished, Mac-native night scene. A near-black canvas hosts glassy command windows, glossy 3D icons and dramatic diagonal light beams in red, blue and violet. The red-coral brand mark punctuates the darkness. Typography is clean SF/Inter-style sans; controls feel like macOS — rounded, translucent, keyboard-shortcut-labeled. It is premium, fast and delightful.

Adjectives: **sleek, native, fast, glossy, playful-premium.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#070708` | Canvas |
| surface | `#111214` | Cards, sections |
| surface-alt | `#1B1C1E` | Secondary buttons, list hover |
| elevated | `#232427` | Popovers, selected list row |
| text | `#FFFFFF` | Headlines |
| text-secondary | `#D8D8D8` | Body |
| text-muted | `#9C9C9D` | Descriptions |
| text-faint | `#6A6B6C` | Placeholders, shortcut hints |
| border | `rgba(255,255,255,0.08)` | Hairlines |
| border-strong | `rgba(255,255,255,0.16)` | Window edges |
| primary | `#FF6363` | Brand coral-red: logo, highlights, Pro badges |
| blue / purple | `#56C2FF` / `#9D6BFF` | Light-beam and gradient accents |
| deep-blue / deep-purple | `#043F96` / `#330381` | Background glows |
| green / yellow | `#59D499` / `#FFC531` | Status, icons |

Dark neutrals dominate; color appears as glows and icon artwork. The brand red is used in small, sharp doses.

## Typography
- Inter (or SF Pro on Apple) for all text. Free fallback: Inter.
- JetBrains Mono for code/extension snippets.

Scale: 64 / 48 / 32 / 18 / 16 / 14px. Headlines 600 with -0.025em tracking; some headlines use a white-to-gray vertical gradient. UI text 14px/500 like macOS. Shortcut keys rendered as small caps chips (⌘ ⌥ ⇧ ↵).

## Layout
- Max width ~1200px, centered.
- Hero: centered headline over a diagonal red/blue light streak, CTA "Download for Mac" with shortcut hint, and a large command window mock below.
- Feature sections: bento grids of rounded cards (2–3 columns, 16px gaps), each with a visual mini-UI.
- Extension store: grid of 3D glossy icons in cards with author avatars.

## Elevation & Depth
Glass and glow. Windows: `rgba(28,28,30,0.85)` fill, `backdrop-filter: blur(40px) saturate(180%)`, 1px `rgba(255,255,255,0.16)` border, `0 30px 80px rgba(0,0,0,0.6)` shadow, inner top highlight `inset 0 1px 0 rgba(255,255,255,0.08)`. Background radial glows in deep blue/purple at 20–40% opacity. Cards have a subtle top-to-bottom gradient `#141517 → #0E0F10`.

## Shapes
- Command windows 20px radius (like macOS Sonoma). Cards 16px. Buttons 8px. Shortcut chips 6px.
- Icons: glossy 3D app-style squircles for extensions; 16px line icons in UI.
- Imagery: light-beam streaks, chrome/glass 3D objects, macOS desktop screenshots.

## Components
- **Primary button**: white fill, `#070708` 14px/600 text, 8px radius, 40px tall; may include an Apple glyph. Hover `#E5E5E5`.
- **Secondary button**: `#1B1C1E`, 1px border, white text; hover `#232427`.
- **Nav**: 64px, transparent → blurred `rgba(7,7,8,0.7)` on scroll, logo left, 14px links (Store, Pro, Teams, AI, Developers, Blog, Pricing), "Log in" + white "Download" button right.
- **Command window**: 750px wide, search input row 56px with 18px placeholder "Search for apps and commands…", list rows 40px (24px icon, 14px title, muted subtitle, right-aligned type label), selected row `rgba(255,255,255,0.08)` 8px radius, footer action bar 40px with "Open Command ↵" and "Actions ⌘K".
- **Shortcut chip**: `#232427`, 1px border, 6px radius, 20px tall, 12px text.
- **Bento card**: `#111214`, 1px border, 16px radius, 24px padding, title 18px/600, muted 14px body, visual at top.
- **Pro badge**: `#FF6363` → `#FF8A8A` gradient text or a coral pill with white "PRO" 11px.

## Do's and Don'ts
**Do**
- Use a near-black canvas with glassy, blurred windows.
- Add dramatic diagonal light streaks/glows behind heroes.
- Show keyboard shortcuts everywhere.
- Use the coral red sparingly as the brand flash.

**Don't**
- Don't build a light-mode marketing page.
- Don't use flat, borderless windows — always add the hairline edge and highlight.
- Don't use the red for large fills or every button.
- Don't use sharp-cornered containers.

## Agent Prompt Guide
**Base prompt:**
"Design like Raycast: near-black `#070708` canvas, `#111214` cards, hairline `rgba(255,255,255,0.08)` borders, white text, Inter 600 headlines. Glassy command windows (20px radius, 40px blur, deep shadow), diagonal red/blue light beams, coral `#FF6363` brand accents, white 8px-radius primary button, kbd shortcut chips."

**Examples:**
- "Hero: centered 64px headline over a red-to-blue light streak, white 'Download for Mac' button, and a command palette window mock below."
- "Bento grid of six dark cards with mini UI visuals, 16px radius, 16px gaps."
- "Extension store grid: glossy squircle icons, title, author avatar and install count."
