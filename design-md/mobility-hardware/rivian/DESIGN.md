---
version: alpha
name: Rivian
description: Outdoorsy, earth-toned premium EV brand with warm off-white canvases, golden-yellow accents, pill buttons and expansive adventure photography.
source: https://rivian.com
colors:
  primary: "#151515"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F4F0"
  text: "#151515"
  text-muted: "#6B6A66"
  border: "#DAD8D2"
  accent: "#FFAF00"
  forest: "#2F3A2E"
  sand: "#E9E4DA"
  on-accent: "#151515"
typography:
  display:
    fontFamily: Rivian Sans
    fontSize: 4rem
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: Rivian Sans, fontSize: 3rem, fontWeight: 500, lineHeight: 1.1 }
  h2: { fontFamily: Rivian Sans, fontSize: 2rem, fontWeight: 500, lineHeight: 1.2 }
  h3: { fontFamily: Rivian Sans, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.35 }
  body: { fontFamily: Rivian Sans, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  label: { fontFamily: Rivian Sans, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.2 }
  eyebrow: { fontFamily: Rivian Sans, fontSize: 0.75rem, fontWeight: 500, letterSpacing: 0.08em, textTransform: uppercase }
rounded:
  sm: 4px
  md: 12px
  lg: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 40px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
    height: 48px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 32px
  badge:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
    padding: 4px 10px
---

# Rivian — DESIGN.md

> Inspired by the public website of Rivian. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Rivian sells electric trucks and SUVs as gear for getting outside, and the interface borrows from premium outdoor-equipment catalogs rather than car showrooms. Expect wide landscapes — forests, deserts, mountain passes — with the vehicle small in the frame, warm off-white backgrounds, soft rounded cards and a near-black/yellow pairing that echoes the brand's "compass" mark. The tone is calm and capable, never aggressive.

Adjectives: **adventurous, warm, premium, grounded, approachable**.

Density is low to medium: big imagery, short paragraphs, and comfortable spacing; configurator and spec areas are tidier and more compact.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#151515` | Near-black buttons, headings, dark sections |
| on-primary | `#FFFFFF` | Text on near-black |
| background | `#FFFFFF` | Default canvas |
| surface | `#F5F4F0` | Warm off-white cards and alternating bands |
| sand | `#E9E4DA` | Deeper neutral for tiles, image placeholders |
| forest | `#2F3A2E` | Dark green-gray accent band, outdoors sections |
| text | `#151515` | Body and headings |
| text-muted | `#6B6A66` | Warm gray secondary text |
| border | `#DAD8D2` | Hairlines, input borders |
| accent | `#FFAF00` | Rivian yellow — badges, highlights, focus, small icons |
| on-accent | `#151515` | Text on yellow |

Neutrals are warm (slightly yellow/brown), never cool blue-grays. Yellow is an accent used in small doses; near-black is the action color.

## Typography
- **Family:** Rivian's proprietary sans (here "Rivian Sans"), a clean humanist-geometric grotesk. Free fallbacks: "Inter", "Söhne"-like "Manrope", Arial.
- **Weights:** 500 for headlines and labels, 400 for body. Avoid 700+.
- **Scale:** 64px display, 48px H1, 32px H2, 20px H3, 16px body, 14px labels, 12px eyebrows.
- **Tracking:** −0.02em on display; +0.08em on uppercase eyebrows.
- **Casing:** Sentence case headlines ("Built for the road less traveled"); small uppercase eyebrows over sections ("R1S", "CHARGING").

## Layout
- 12-column grid, max width 1440px, 40px side margins desktop, 20px mobile.
- Hero: full-bleed landscape photo or video, headline bottom-left in white with two pill buttons.
- Content alternates full-bleed imagery with contained sections on `#F5F4F0`.
- Feature grids: 2-up or 3-up cards with 24px gaps; large media cards span 2 columns.
- Vertical rhythm: 96px between major sections, 40px between heading and content.
- Spec comparisons use a horizontal row of large stats with thin vertical dividers.

## Elevation & Depth
- Flat by default; cards distinguished by warm fill, not shadow.
- Sticky header gains white background and `0 1px 0 #DAD8D2` hairline on scroll.
- Modals and configurator drawers: `0 12px 32px rgba(21,21,21,0.16)` with `rgba(21,21,21,0.5)` scrim.
- Image cards zoom slightly (scale 1.03, 0.4s ease-out) on hover instead of lifting.

## Shapes
- Buttons: full pill.
- Cards and media: 20px radius; small tiles and inputs 12px.
- Paint and interior swatches: circles 36px with 2px offset ring when selected.
- Icons: 1.5px rounded-stroke outline in near-black, outdoorsy subjects (tent, mountain, bike, plug).
- Imagery: wide-angle landscapes, golden-hour light, people and gear (bikes, kayaks, dogs) alongside vehicles.

## Components
- **Primary button:** `#151515` fill, white 14px/500 label, 48px tall, pill, padding 14px 28px. Hover `#333333`. Focus ring 2px `#FFAF00` offset 2px.
- **Secondary button:** transparent with 1px near-black border, pill; on imagery becomes white border and white text.
- **Text link:** near-black 500 weight with arrow "→" that shifts 4px right on hover.
- **Card:** `#F5F4F0`, 20px radius, 32px padding, image top with 12px radius, H3 + body + link.
- **Input:** white, 1px `#DAD8D2` border, 12px radius, 48px tall; focus border `#151515`.
- **Badge:** yellow `#FFAF00` pill, 12px/500 near-black label ("New", "Available now").
- **Nav:** 72px, wordmark left, model links center ("R1T", "R1S", "R2"), "Demo drive" pill right; dropdown shows vehicle thumbnails on `#F5F4F0`.
- **Stat row:** 40px/500 numbers with 14px muted labels ("Up to 410 mi range", "0–60 in 2.5s").

## Do's and Don'ts
**Do**
- Show vehicles in nature with wide, warm landscapes.
- Use warm neutrals (`#F5F4F0`, `#E9E4DA`) for alternating sections.
- Keep buttons pill-shaped and near-black; use yellow only as a small highlight.
- Use medium (500) weight headlines in sentence case.
- Pair stats with outdoor-capability language.

**Don't**
- Don't use cool blue-gray neutrals or neon colors.
- Don't make large yellow backgrounds or yellow primary buttons.
- Don't use sharp-cornered cards or heavy shadows.
- Don't shoot vehicles in empty studios or urban night scenes as the default.
- Don't use bold 700+ headlines or all-caps titles.

## Agent Prompt Guide
**Base prompt:**
"Design in a Rivian-inspired style: warm white and `#F5F4F0` off-white surfaces, near-black `#151515` text and pill buttons, Rivian yellow `#FFAF00` only for small badges and focus rings. Font: Inter 500 headlines (stand-in for Rivian's sans), 16px body. Cards 20px radius, flat. Wide golden-hour landscape photography with vehicles and outdoor gear."

**Example component prompts:**
1. "Hero: full-bleed photo of an electric truck on a desert trail, bottom-left white headline 'Keep the world adventurous forever' 64px/500, two pills — white fill 'Shop R1T' and white-outline 'Demo drive'."
2. "Feature card grid on `#F5F4F0`: three cards with 12px-rounded photos, small uppercase eyebrow, 20px/500 title, body, and 'Learn more →' link."
3. "Configurator swatch row: circular 36px paint swatches with names below in 14px, selected swatch with 2px offset near-black ring, price delta in muted text, yellow 'New' badge on one option."
