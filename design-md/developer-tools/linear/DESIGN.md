---
version: alpha
name: Linear
description: Dark, quiet, and exacting — a near-black canvas, Inter Display headlines in soft gradients of white, a desaturated indigo accent and fine 1px borders on everything.
source: https://linear.app
colors:
  primary: "#5E6AD2"
  on-primary: "#FFFFFF"
  background: "#08090A"
  surface: "#0F1011"
  surface-alt: "#161719"
  elevated: "#1C1D1F"
  text: "#F7F8F8"
  text-secondary: "#D0D6E0"
  text-muted: "#8A8F98"
  text-faint: "#62666D"
  border: "#23252A"
  border-subtle: "#1A1B1E"
  accent-light: "#8FA4FF"
  green: "#4CB782"
  yellow: "#F2C94C"
  orange: "#FC7840"
  red: "#EB5757"
  light-background: "#FFFFFF"
  light-surface: "#F4F5F8"
  light-text: "#08090A"
typography:
  display:
    fontFamily: Inter Display, Inter, -apple-system, sans-serif
    fontSize: 4rem
    fontWeight: 510
    lineHeight: 1.0
    letterSpacing: -0.022em
  h1: { fontFamily: "Inter Display, Inter, sans-serif", fontSize: 3rem, fontWeight: 510, lineHeight: 1.05, letterSpacing: -0.022em }
  h2: { fontFamily: "Inter Display, Inter, sans-serif", fontSize: 2rem, fontWeight: 510, lineHeight: 1.15, letterSpacing: -0.015em }
  h3: { fontFamily: "Inter, sans-serif", fontSize: 1.25rem, fontWeight: 510, lineHeight: 1.3, letterSpacing: -0.01em }
  body: { fontFamily: "Inter, sans-serif", fontSize: 0.9375rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: "Inter, sans-serif", fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.45 }
  mono: { fontFamily: "Berkeley Mono, JetBrains Mono, ui-monospace, monospace", fontSize: 0.8125rem }
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  xxl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 0 12px
    height: 32px
  button-secondary:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    padding: 0 12px
    height: 32px
  card:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.border}
    rounded: "{rounded.xl}"
    padding: 24px
  issue-row:
    height: 36px
    padding: 0 16px
---

# Linear — DESIGN.md

> Inspired by the public website and app of Linear. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Linear set the template for the modern dark SaaS site: a nearly black canvas, headlines that fade from white to gray, thin borders, and product screenshots that glow faintly against the dark. The app mirrors it with dense keyboard-first lists, tiny status icons and an indigo accent kept deliberately muted. Nothing is loud; everything is fast and exact.

Adjectives: **focused, exact, dark, calm, crafted.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#08090A` | Canvas |
| surface | `#0F1011` | Cards, sidebar |
| surface-alt | `#161719` | Inputs, secondary buttons |
| elevated | `#1C1D1F` | Menus, command palette |
| text | `#F7F8F8` | Headlines, primary |
| text-secondary | `#D0D6E0` | Body |
| text-muted | `#8A8F98` | Descriptions, meta |
| text-faint | `#62666D` | Placeholder, disabled |
| border | `#23252A` | 1px borders |
| border-subtle | `#1A1B1E` | Row dividers |
| primary | `#5E6AD2` | Brand indigo — primary buttons, selection |
| accent-light | `#8FA4FF` | Links, highlights on dark |
| green / yellow / orange / red | `#4CB782` / `#F2C94C` / `#FC7840` / `#EB5757` | Issue status & priority |
| light-background | `#FFFFFF` | Light theme |

Near-black and gray text dominate. Indigo is restrained; status colors appear only as 14px icons.

## Typography
- **Inter Display** for headlines, **Inter** (variable) for UI — both free. Linear uses non-standard weights like 510 and 590; with static fonts use 500/600.
- Mono (Berkeley Mono feel) for issue IDs and code: fallback JetBrains Mono.

Scale: 64 / 48 / 32 / 20 / 15 / 13px. Headlines weight 510 with -0.022em tracking, often a vertical gradient from `#F7F8F8` to `#8A8F98` via `background-clip: text`. App text is 13px. Issue IDs like `ENG-142` in muted mono.

## Layout
- Marketing max width ~1200px; hero headline centered or left with a large product screenshot below that bleeds off the bottom.
- 128px section spacing; feature grids of 2–3 columns separated by 1px borders.
- App: 220–240px sidebar (`#0F1011`), main list, optional right detail panel (~360px). Rows 36px.

## Elevation & Depth
Layering via surface tones and borders. Cards: `#0F1011` + 1px `#23252A`. Floating menus: `#1C1D1F`, 1px border, `0 8px 30px rgba(0,0,0,0.5)`. Hero screenshots carry a subtle top-edge highlight (`inset 0 1px 0 rgba(255,255,255,0.06)`) and a faint radial glow beneath. Occasional backdrop blur on sticky nav.

## Shapes
- Buttons 6px, inputs 6px, cards 12px, large screenshots 16px.
- Icons: custom 16px glyphs — status circles (dashed, half-filled, check), priority bars; 1.5px strokes.
- Imagery: product UI screenshots, abstract 3D/line renders in grayscale with faint indigo light.

## Components
- **Primary button**: `#5E6AD2`, white 13–14px/510 text, 32px (app) / 40px (marketing) tall, 6px radius; hover lighten ~8%. Marketing CTA sometimes white-on-black: `#F7F8F8` fill, `#08090A` text, pill.
- **Secondary button**: `#161719`, 1px `#23252A`, `#F7F8F8` text; hover `#1C1D1F`.
- **Nav**: 64px, transparent with blur, logo left, 13px links in `#8A8F98` → white on hover, "Log in" ghost + "Sign up" button right.
- **Issue row**: 36px tall, priority icon, mono ID muted, status icon, title 13px `#F7F8F8`, labels as small pills, assignee avatar 20px, date right; hover `#161719`.
- **Label pill**: 20px tall, 1px `#23252A`, 6px colored dot + 12px text, full radius.
- **Command palette (⌘K)**: 640px wide, `#1C1D1F`, 12px radius, 48px search input, 36px result rows with icons and shortcut hints in `kbd` chips.
- **kbd chip**: `#23252A` fill, 4px radius, 11px text, 18px tall.
- **Card**: `#0F1011`, 1px border, 12px radius, 24px padding.

## Do's and Don'ts
**Do**
- Default to dark `#08090A` with 1px `#23252A` borders.
- Use gradient-filled headline text (white to gray).
- Keep indigo for primary actions and selection only.
- Show keyboard shortcuts in UI.

**Don't**
- Don't use pure `#000000` or saturated neon accents.
- Don't make rows taller than ~40px in app lists.
- Don't use heavy weights (700+).
- Don't add colorful illustrations.

## Agent Prompt Guide
**Base prompt:**
"Design like Linear: near-black `#08090A` canvas, surfaces `#0F1011`/`#161719`, 1px borders `#23252A`, text `#F7F8F8` / `#8A8F98`. Inter Display weight 500 with -0.022em tracking and white-to-gray gradient headlines. Muted indigo `#5E6AD2` primary, 6px-radius buttons, 12px cards, dense 36px list rows, keyboard shortcut chips."

**Examples:**
- "Hero: centered gradient headline, 18px muted subhead, white pill CTA, large app screenshot with 16px radius glowing faintly."
- "Issue list with priority/status icons, mono IDs, label pills and avatars in 36px rows."
- "Command palette modal with search input, grouped results and kbd shortcut hints."
