---
version: alpha
name: Mistral AI
description: Retro-pixel warmth — a sunset gradient of red, orange and yellow blocks on cream or black, with chunky pixel motifs and square-cornered UI.
source: https://mistral.ai
colors:
  primary: "#FA500F"
  on-primary: "#FFFFFF"
  background: "#FFFAEB"
  surface: "#F5F4EF"
  text: "#1E1E1E"
  text-muted: "#6B6B6B"
  border: "#E6E1D3"
  red: "#E10500"
  orange-dark: "#FA500F"
  orange: "#FF8205"
  orange-light: "#FFAF00"
  yellow: "#FFD800"
  beige: "#FFF0C3"
  brown: "#933800"
  dark-background: "#000000"
  dark-surface: "#1A1A1A"
typography:
  display:
    fontFamily: Arial, Helvetica Neue, Helvetica, sans-serif
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.03em
  h1: { fontFamily: "Arial, Helvetica Neue, sans-serif", fontSize: 3rem, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: "Arial, Helvetica Neue, sans-serif", fontSize: 2rem, fontWeight: 400, lineHeight: 1.15 }
  h3: { fontFamily: "Arial, Helvetica Neue, sans-serif", fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: "Arial, Helvetica Neue, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  label: { fontFamily: "Arial, Helvetica Neue, sans-serif", fontSize: 0.75rem, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0.06em, textTransform: uppercase }
  pixel: { fontFamily: "Press Start 2P, VT323, monospace", fontSize: 0.75rem }
  mono: { fontFamily: "JetBrains Mono, ui-monospace, monospace", fontSize: 0.875rem }
rounded:
  none: 0px
  sm: 2px
  md: 4px
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
    backgroundColor: "{colors.dark-background}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    padding: 12px 20px
  button-accent:
    backgroundColor: "{colors.orange-dark}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: 32px
---

# Mistral AI — DESIGN.md

> Inspired by the public website of Mistral AI. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Mistral's identity is a pixelated sunset. The "M" logo is built from stacked blocks that step from yellow through orange to red, and the site repeats that ladder as horizontal stripes, gradient bars and pixel-art illustrations (a cat, mountains, the French countryside rendered in 8-bit). Around that warm burst, the UI is plain: cream or black backgrounds, a neutral grotesk, and square corners. It feels European, engineered and slightly nostalgic.

Adjectives: **warm, retro, engineered, bold, unpretentious.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFFAEB` | Cream page canvas |
| surface | `#F5F4EF` | Cards, panels |
| beige | `#FFF0C3` | Highlight panels, banners |
| text | `#1E1E1E` | Body and headings |
| text-muted | `#6B6B6B` | Secondary copy |
| border | `#E6E1D3` | Dividers |
| red | `#E10500` | Bottom step of the gradient |
| orange-dark / primary | `#FA500F` | Brand orange, accent CTA |
| orange | `#FF8205` | Gradient mid-step |
| orange-light | `#FFAF00` | Gradient upper-mid step |
| yellow | `#FFD800` | Gradient top step |
| brown | `#933800` | Text on yellow/beige, deep accents |
| dark-background | `#000000` | Hero and footer sections, primary buttons |

The five-step ramp (`#FFD800` → `#FFAF00` → `#FF8205` → `#FA500F` → `#E10500`) is the brand's signature; always show it as hard-edged bands, not a smooth blend. Neutrals cover most of the page.

## Typography
- Mistral's site uses a plain neo-grotesk (Arial/Helvetica-family in practice). Free fallback: Inter or Arimo.
- A pixel face appears only in illustrations and decorative labels: fallback Press Start 2P or VT323.
- Mono: JetBrains Mono for code samples and API snippets.

Scale: 72 / 48 / 32 / 20 / 16 / 12px. Large display text is regular weight (400) with tight tracking — the size carries it. Small labels and eyebrows are uppercase bold 12px with 0.06em tracking. Headline case is sentence case; product names (Le Chat, La Plateforme) keep their French article.

## Layout
- 1280px max width, 12-column grid, 24px gutters.
- Heroes are big and left-aligned, often over a black or pixel-illustration background.
- Section rhythm ~120px. Content grids of 2–4 cards.
- Stripe dividers: a full-width bar made of the 5 ramp colors, each ~8px tall, used between sections or under the nav.

## Elevation & Depth
Totally flat. No shadows, no blur. Hierarchy comes from color blocks (cream vs. black vs. orange) and the stepped stripes. Hover states change fill color, not elevation.

## Shapes
- Square corners (0px) on buttons, cards and inputs; at most 2–4px on small chips.
- Pixel grid motif: decorative elements snap to 8px squares.
- Icons: simple, geometric, 2px stroke or pixelated.
- Imagery: 8-bit landscapes and mascots in the sunset palette; product screenshots in plain frames.

## Components
- **Primary button**: black fill, white 15px text, 0 radius, 12px × 20px; hover switches to `#FA500F`.
- **Accent button**: `#FA500F` fill, white text, 0 radius; hover `#E10500`.
- **Secondary button**: 1px black border, transparent, 0 radius; hover cream-to-beige fill.
- **Nav**: 64px, cream or transparent over black hero, logo left, 15px links, "Try Le Chat" black button right.
- **Card**: `#F5F4EF`, square, 32px padding, title 20px bold, body 16px; optional 4px top bar in a ramp color.
- **Model card**: name in 24px, small uppercase label "OPEN WEIGHTS" or "PREMIER" in a beige tag with brown text, specs list with 1px dividers.
- **Tags**: `#FFF0C3` fill, `#933800` text, uppercase 12px bold, 2px radius.
- **Inputs**: 44px, 1px `#1E1E1E` border, 0 radius, focus border `#FA500F`.
- **Le Chat composer**: white field, 1px border, 8–12px radius (product UI softens corners slightly), orange send.

## Do's and Don'ts
**Do**
- Use the stepped yellow→red ramp as hard bands.
- Keep corners square on marketing UI.
- Use black for primary buttons and big hero sections.
- Add pixel-art illustration for personality.

**Don't**
- Don't smooth the ramp into a soft gradient.
- Don't introduce blues or purples.
- Don't use drop shadows or rounded pill buttons.
- Don't bold large display headlines.

## Agent Prompt Guide
**Base prompt:**
"Design in a Mistral AI spirit: cream `#FFFAEB` and black backgrounds, text `#1E1E1E`, a hard-edged five-step sunset ramp `#FFD800 #FFAF00 #FF8205 #FA500F #E10500`. Neutral grotesk (Inter/Arial) at weight 400 for big headlines, uppercase bold micro-labels. Square corners, no shadows, pixel-art accents."

**Examples:**
- "Hero on black: 72px white headline, black-to-orange CTA buttons with 0 radius, a pixel mountain illustration in the sunset ramp."
- "Model comparison grid: 3 square `#F5F4EF` cards each with a 4px top bar in a different ramp color and a beige uppercase tag."
- "Section divider: full-width stack of five 8px bands from yellow to red."
