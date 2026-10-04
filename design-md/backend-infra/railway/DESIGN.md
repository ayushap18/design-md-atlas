---
version: alpha
name: Railway
description: Moody deep-violet night-sky aesthetic with soft pink and purple glows, glassy panels and a canvas-style infrastructure UI.
source: https://railway.com
colors:
  primary: "#853BCE"
  on-primary: "#FFFFFF"
  background: "#0B0812"
  surface: "#13111C"
  surface-raised: "#1C1828"
  deep-violet: "#13044C"
  text: "#F5F3FA"
  text-muted: "#A09CB0"
  text-subtle: "#6F6B80"
  border: "#262236"
  pink: "#F9A8D4"
  amber: "#C67839"
  success: "#22C55E"
typography:
  display:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.035em
  h1: { fontFamily: Inter, fontSize: 3rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.03em }
  h2: { fontFamily: Inter, fontSize: 2rem, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.02em }
  h3: { fontFamily: Inter, fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.8125rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: "rgba(255,255,255,0.06)"
    textColor: "{colors.text}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Railway — DESIGN.md

> Inspired by the public website of Railway. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Railway frames infrastructure as something you'd gaze at: deep violet-black skies, faint stars and dithered gradients, and a product canvas where services float as connected nodes. The mood is cinematic but quiet. Typography is clean Inter with tight tracking; color comes mostly from soft purple and pink glows rather than flat fills. It feels like a premium indie tool that also scales.

Adjectives: **nocturnal, dreamy, polished, spatial, developer-warm**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #853BCE | Railway purple: primary buttons, active states |
| background | #0B0812 | Night canvas |
| surface | #13111C | Panels, cards |
| surface-raised | #1C1828 | Hover, popovers |
| deep-violet | #13044C | Gradient stops in hero skies |
| text | #F5F3FA | Headlines |
| text-muted | #A09CB0 | Body copy |
| text-subtle | #6F6B80 | Labels, timestamps |
| border | #262236 | Hairlines |
| pink | #F9A8D4 | Glows, highlights, illustration |
| amber | #C67839 | Sunset accents in illustrations |
| success | #22C55E | Deploy "Active/Success" dots |

Violet-black dominates; purple/pink are glow colors at low opacity.

## Typography
- **Sans:** Inter (Google Fonts), fallback `system-ui`.
- **Mono:** JetBrains Mono for logs, env vars, CLI (`railway up`).
- Headlines 600 with -0.03em tracking; body 16px muted lavender-gray.
- Small labels 12–13px, sentence case; no heavy uppercase.

## Layout
- 1200px container, centered hero with headline, subline and two buttons; a large product canvas screenshot below, perspective-tilted or framed in a glowing panel.
- Feature sections in 2- and 3-column grids; templates gallery as a dense card grid.
- 80–120px section spacing; dark throughout.

## Elevation & Depth
- Layered glass: panels at `rgba(255,255,255,0.03)` with 1px #262236 borders and `backdrop-filter: blur(12px)`.
- Glows: `radial-gradient(ellipse at top, rgba(133,59,206,.35), transparent 70%)` behind heroes; pink bloom at edges.
- Shadow for floating nodes: `0 10px 30px rgba(0,0,0,.5)`.

## Shapes
- 8px buttons, 12px cards, 20px large media frames.
- Service nodes on the canvas are rounded rectangles with a status dot and service icon.
- Icons: simple 1.5px line icons; tech logos in color inside nodes.
- Illustrations: pixel/dithered skies, trains and stars — whimsical but subdued.

## Components
- **Primary button:** #853BCE fill, white 14px/500, 8px radius, 36–40px tall; hover #9551DB with soft purple glow.
- **Secondary button:** translucent white 6% fill, 1px border, white text.
- **Nav:** transparent 64px bar, logo left, links center (Product, Docs, Templates, Pricing), "Sign in" + purple "Get started" right.
- **Service node card:** #13111C, 1px #262236, 12px radius, 16px padding, icon + name + green dot "Online", small mono URL.
- **Log viewer:** #0B0812, JetBrains Mono 13px, timestamps in `text-subtle`, errors in #F87171.
- **Template card:** surface card with logo, title, short description, deploy count in mono.
- **Input:** 36px, #13111C, 1px #262236, 8px radius, focus border #853BCE.

## Do's and Don'ts
**Do**
- Keep everything dark violet, never neutral gray-black.
- Express color as glows and gradients, not flat blocks.
- Show the node-graph canvas as the hero artifact.
- Use tight-tracked Inter and mono for technical details.

**Don't**
- Don't use bright saturated flat fills behind content.
- Don't switch to a light theme for marketing.
- Don't use heavy borders; keep them 1px and dim.
- Don't overcrowd — glows need empty space.

## Agent Prompt Guide
**Base prompt:**
"Design like Railway: #0B0812 violet-black canvas with soft purple (#853BCE) and pink (#F9A8D4) radial glows, glassy #13111C panels with 1px #262236 borders and 12px radius, Inter 600 headlines with tight tracking, lavender-gray #A09CB0 body, purple 8px-radius CTAs, JetBrains Mono for logs."

**Examples:**
- "Project canvas: three service nodes (Postgres, API, Web) connected by dashed lines, each with status dot and mono URL."
- "Hero: 'Ship software peacefully', purple button 'Deploy a new project', ghost button 'Book a demo', glowing sky gradient behind."
- "Deploy log panel with timestamps, success lines in green and one error in red."
