---
version: alpha
name: Claymorphism Pastel
description: Soft, puffy, toy-like 3D UI — pastel fills, double inner shadows that make elements look inflated, very round corners, and friendly rounded type.
source: https://hype4.academy/articles/design/claymorphism-in-user-interfaces
colors:
  primary: "#8B7CF6"
  on-primary: "#FFFFFF"
  background: "#F3EEFF"
  surface: "#FFFFFF"
  text: "#2D2A4A"
  text-muted: "#6F6A93"
  border: "#E4DCFA"
  accent: "#FF9EC7"
  clay-mint: "#A8E6CF"
  clay-peach: "#FFC9A8"
  clay-sky: "#A7D8FF"
  clay-lemon: "#FFE79A"
  clay-lilac: "#CDBBFF"
typography:
  display:
    fontFamily: Fredoka
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.01em
  h1: { fontFamily: Fredoka, fontSize: 2.75rem, fontWeight: 600, lineHeight: 1.1 }
  h2: { fontFamily: Fredoka, fontSize: 2rem, fontWeight: 600, lineHeight: 1.15 }
  h3: { fontFamily: Fredoka, fontSize: 1.375rem, fontWeight: 500, lineHeight: 1.25 }
  body: { fontFamily: Nunito, fontSize: 1.0625rem, fontWeight: 500, lineHeight: 1.6 }
  small: { fontFamily: Nunito, fontSize: 0.875rem, fontWeight: 600, lineHeight: 1.45 }
  mono: { fontFamily: DM Mono, fontSize: 0.875rem }
rounded:
  sm: 16px
  md: 24px
  lg: 36px
  xl: 48px
  full: 9999px
spacing:
  xs: 6px
  sm: 12px
  md: 20px
  lg: 36px
  xl: 64px
  section: 112px
components:
  clay-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    shadow: "16px 16px 32px rgba(139,124,246,0.18), inset -8px -8px 16px rgba(139,124,246,0.12), inset 8px 8px 16px rgba(255,255,255,0.9)"
    padding: 32px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    shadow: "8px 8px 18px rgba(139,124,246,0.35), inset -4px -4px 8px rgba(0,0,0,0.12), inset 4px 4px 8px rgba(255,255,255,0.45)"
    padding: 16px 32px
  input:
    backgroundColor: "#F8F5FF"
    rounded: "{rounded.md}"
    shadow: "inset 4px 4px 8px rgba(139,124,246,0.15), inset -4px -4px 8px rgba(255,255,255,0.9)"
    padding: 14px 20px
---

# Claymorphism Pastel — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
Claymorphism makes UI elements look like soft modeling clay or inflated plastic: thick, rounded, floating slightly off the page, lit from the top-left. The trick is combining an outer drop shadow with two inner shadows (a dark one bottom-right, a light one top-left) so surfaces appear puffy. Paired with pastel fills and bubbly rounded type, it feels like a toy, which suits kids' products, wellness apps, onboarding flows, games, and playful fintech.

Hold onto: **puffy, pastel, friendly, tactile, toy-like**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#F3EEFF` | Lilac-white canvas (never pure white) |
| surface | `#FFFFFF` | Default clay card |
| text | `#2D2A4A` | Deep plum ink (never black) |
| text-muted | `#6F6A93` | Secondary text |
| border | `#E4DCFA` | Rarely used; shadows define edges |
| primary | `#8B7CF6` | Periwinkle: primary buttons, active states |
| accent | `#FF9EC7` | Bubblegum: highlights, notifications |
| clay-mint / peach / sky / lemon / lilac | `#A8E6CF` / `#FFC9A8` / `#A7D8FF` / `#FFE79A` / `#CDBBFF` | Tile and icon fills |

Pastel fills for cards are encouraged: each feature card can own a clay color. Keep text plum on pastels for contrast (check ≥ 4.5:1; plum on all listed pastels passes).

## Typography
- **Display:** Fredoka 600 (free, rounded). Alternatives: *Baloo 2*, *Quicksand* 700, *Varela Round*.
- **Body:** Nunito 500–600 (free, rounded terminals).
- Weights stay medium-to-semibold — thin text looks wrong next to chunky shapes.
- Sentence case; emoji welcome in headings in moderation.

## Layout
- Max width 1120px, centered; generous padding (32px+ inside cards).
- Card grids of 2–3 with 32px gaps so shadows can breathe.
- Floating 3D clay illustrations (characters, coins, hearts) overlap card edges.
- Mobile-first comfortable tap targets (min 52px).

## Elevation & Depth
- **Clay recipe (cards):**
  `box-shadow: 16px 16px 32px rgba(139,124,246,0.18), inset -8px -8px 16px rgba(139,124,246,0.12), inset 8px 8px 16px rgba(255,255,255,0.9);`
- **Clay recipe (colored buttons):** outer shadow tinted with the fill color at 35%, inner dark `rgba(0,0,0,0.12)` bottom-right, inner light `rgba(255,255,255,0.45)` top-left.
- **Pressed / inset (inputs, active toggles):** only inner shadows, reversed.
- Light source is always top-left; keep it consistent across the page.

## Shapes
- Very round: cards 36px, buttons pill, inputs 24px, icon tiles 20px, avatars circles.
- No sharp corners, no hairline borders.
- Icons: filled, rounded, sitting in 56px clay tiles of a pastel color.
- Illustration: 3D clay renders (Blender-style), soft matte material, pastel palette.

## Components
- **Primary button:** periwinkle pill, white 16px/700 Nunito, 16px 32px, clay recipe. Hover: `translateY(-2px)` and outer shadow larger. Active: switch to inset-only shadow and `translateY(1px)`.
- **Secondary button:** white clay pill, plum text.
- **Clay card:** white or pastel, 36px radius, 32px padding, clay shadow; icon tile top, Fredoka 22px title, Nunito body.
- **Input:** `#F8F5FF`, inset shadow (pressed-in look), 24px radius, 52px height, no border; focus adds `0 0 0 4px rgba(139,124,246,0.3)`.
- **Toggle:** 64×36 inset track; thumb is a raised white clay circle; on-state track mint `#A8E6CF`.
- **Progress bar:** inset track, raised periwinkle fill with rounded ends.
- **Nav:** floating white clay pill bar with icon buttons; active item gets a pastel clay chip.
- **Badge:** pill, bubblegum `#FF9EC7`, plum 12px/700 text, small clay shadow.

## Do's and Don'ts
**Do**
- Combine one outer + two inner shadows for every raised element.
- Keep the light source top-left everywhere.
- Use pastel fills and plum ink.
- Make press states sink (inset shadows).

**Don't**
- Don't use pure black text or hard borders.
- Don't use small radii (< 16px).
- Don't stack clay elements without 24px+ breathing room.
- Don't use saturated neons; stay soft.

## Agent Prompt Guide
**Base prompt:**
"Use a pastel claymorphism style: lilac-white #F3EEFF background, white and pastel cards (mint #A8E6CF, peach #FFC9A8, sky #A7D8FF, lemon #FFE79A) with 36px radius and clay shadows — outer 16px 16px 32px tinted shadow plus inner dark bottom-right and inner white top-left. Periwinkle #8B7CF6 puffy pill buttons, plum #2D2A4A text, Fredoka 600 headings, Nunito 500 body, inset inputs, 3D clay illustrations."

**Examples:**
- "Habit tracker home: greeting header, three pastel clay cards with emoji icons and inset progress bars, floating clay tab bar."
- "Onboarding screen: big 3D clay character, Fredoka headline, periwinkle 'Get started' pill that sinks on press."
- "Settings list: white clay card with rows, each with a pastel icon tile and a clay toggle."
