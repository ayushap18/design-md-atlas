---
version: alpha
name: Figma
description: Monochrome black-and-white canvas punctuated by saturated, toy-like blocks of color pulled from the five-dot logo.
source: https://www.figma.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F5F5"
  text: "#000000"
  text-muted: "#6E6E6E"
  border: "#E6E6E6"
  accent: "#0D99FF"
  accent-purple: "#874FFF"
  accent-orange: "#FF7237"
  accent-pink: "#FF24BD"
  accent-green: "#14AE5C"
  accent-red: "#F24822"
  accent-sky: "#E5F4FF"
typography:
  display:
    fontFamily: figmaSans, Inter
    fontSize: 5.5rem
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.04em
  h1: { fontFamily: "figmaSans, Inter", fontSize: 3.5rem, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.03em }
  h2: { fontFamily: "figmaSans, Inter", fontSize: 2.25rem, fontWeight: 500, lineHeight: 1.1, letterSpacing: -0.02em }
  body: { fontFamily: "figmaSans, Inter", fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.45 }
  small: { fontFamily: "figmaSans, Inter", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: "figmaMono, JetBrains Mono", fontSize: 0.875rem, letterSpacing: 0.02em }
rounded:
  sm: 6px
  md: 12px
  lg: 24px
  xl: 40px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 160px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    border: 1px solid {colors.primary}
    rounded: "{rounded.md}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Figma — DESIGN.md

> Inspired by the public website of Figma. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Figma's marketing presence is a confident black-on-white editorial layout that suddenly bursts into blocks of flat, candy-bright color. The structure is restrained; the color is playful. It reads like a design tool showing off that it can be both precise and fun.

Hold onto: **bold, playful, flat, editorial, collaborative**. Density is low on marketing pages (huge headlines, oversized whitespace) and high inside product screenshots, which are always shown as real UI.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #000000 | Buttons, headlines, nav text, footer background |
| on-primary | #FFFFFF | Text on black |
| background | #FFFFFF | Default page |
| surface | #F5F5F5 | Quiet cards, input fills |
| text | #000000 | All body copy; Figma rarely uses grey body text |
| text-muted | #6E6E6E | Captions, metadata |
| border | #E6E6E6 | Hairlines and dividers |
| accent | #0D99FF | Links, selection blue (the in-app selection color) |
| accent-purple | #874FFF | Feature blocks, FigJam/Dev Mode moments |
| accent-orange | #FF7237 | Feature blocks |
| accent-pink | #FF24BD | Feature blocks |
| accent-green | #14AE5C | Success, Slides/Sites blocks |
| accent-red | #F24822 | Logo red, errors |
| accent-sky | #E5F4FF | Tinted section backgrounds |

Black and white dominate (~85%). Accents appear as full-bleed section fills or large rounded tiles, never as thin decorative strokes. One accent per section; adjacent sections may rotate through the palette.

## Typography
- **Primary:** figmaSans (proprietary grotesk). Free fallback: **Inter** or **Inter Tight** at weight 500.
- **Mono:** figmaMono for labels and tiny eyebrow text. Fallback: **JetBrains Mono** or **IBM Plex Mono**.
- Display headlines are medium weight (500), never bold, with tight negative tracking (-0.03 to -0.04em) and line-height near 1.0.
- Body is generous at 18px with 1.45 line-height.
- Sentence case everywhere. Mono eyebrows may be uppercase with +0.04em tracking.

## Layout
- 12-column grid, max content width ~1440px with 40px outer gutters (20px on mobile).
- Hero headlines often span 8–10 columns, left-aligned or centered.
- Sections separated by 120–160px vertical rhythm.
- Bento-style grids of colored tiles (2–3 across) showcase products.
- Product screenshots are large, edge-to-edge within the container, with real UI chrome.

## Elevation & Depth
- Mostly flat. Depth comes from color blocking rather than shadow.
- When needed (floating UI, dropdowns): `0 2px 4px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12)`.
- Hairline borders #E6E6E6 for cards on white.
- No glassmorphism or blur on marketing surfaces.

## Shapes
- Buttons: 12px radius (not pills) on marketing; product UI uses 5–6px.
- Tiles and color blocks: 24–40px radius.
- Icons: 24px, 1.5px stroke line icons, rounded caps; or filled geometric glyphs echoing the logo circles and rounded squares.
- Illustration: flat geometric shapes (circles, half-circles, rounded squares) in the accent palette; cursors with name tags as a recurring motif.

## Components
- **Primary button:** black #000 fill, white text, 16px/500, 12px 20px padding, 12px radius. Hover: #2C2C2C. Focus: 2px #0D99FF ring with 2px offset.
- **Secondary button:** white fill, 1px black border, black text. Hover: #F5F5F5 fill.
- **Nav:** white, 64px tall, logo left, text links center (16px, 500), "Log in" text link + black "Get started for free" button right. Sticky with a 1px #E6E6E6 bottom border after scroll.
- **Color tile card:** accent fill, 32px padding, 32px radius, black headline 28px/500, product image bleeding off the bottom edge.
- **Input:** 44px tall, #F5F5F5 fill, 8px radius, no border; focus adds 1px #0D99FF border.
- **Multiplayer cursor tag:** small pill (full radius) in an accent color, white 12px/500 label, attached to an arrow cursor.
- **Badge/eyebrow:** figmaMono 12px uppercase, black text, or a pill with #E5F4FF fill and #0D99FF text.
- **Footer:** black background, white links in 5–6 columns, 14px.

## Do's and Don'ts
**Do**
- Keep the base strictly black and white; let accents arrive in large flat fields.
- Use medium (500) weight for headlines with tight tracking.
- Show real product UI with selection boxes and cursors.
- Rotate accent colors section to section.

**Don't**
- Don't use gradients, glows, or drop shadows on marketing tiles.
- Don't set headlines in bold 700+.
- Don't mix more than one accent inside a single tile.
- Don't use grey (#666) for primary body copy.

## Agent Prompt Guide
**Base prompt:**
"Design in the spirit of Figma's website: white background, pure black text and buttons, Inter (medium 500) headlines with -0.03em tracking, 18px body. Buttons are black with 12px radius. Feature sections are large flat color tiles (#874FFF, #FF7237, #FF24BD, #14AE5C, #0D99FF) with 32px radius and product screenshots. Flat, no shadows, playful geometric shapes and multiplayer cursor tags."

**Examples:**
- "Hero: 88px Inter 500 centered headline, 18px subhead, black 'Get started' button plus outlined secondary, below it a full-width product screenshot with two colored cursor tags."
- "Three-column bento: purple, orange and green tiles at 32px radius, each with a 28px black title and a UI crop bleeding off the bottom."
- "Pricing card: white, 1px #E6E6E6 border, 24px radius, mono uppercase plan label, 48px price, black full-width button."
