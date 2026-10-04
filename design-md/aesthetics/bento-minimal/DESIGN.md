---
version: alpha
name: Bento Minimal
description: Modular tile grids of varied spans, soft neutral surfaces, generous rounded corners, and one idea per tile — calm, scannable, and product-forward.
source: https://bentogrids.com
colors:
  primary: "#111113"
  on-primary: "#FFFFFF"
  background: "#F5F5F4"
  surface: "#FFFFFF"
  surface-alt: "#EDEDEB"
  text: "#111113"
  text-muted: "#6B6B70"
  border: "#E4E4E2"
  accent: "#2F6BFF"
  tile-sand: "#F1E9DD"
  tile-sage: "#E3EBDF"
  tile-sky: "#E2ECF8"
  tile-dark: "#18181B"
typography:
  display:
    fontFamily: Geist
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -0.04em
  h1: { fontFamily: Geist, fontSize: 2.75rem, fontWeight: 600, lineHeight: 1.08, letterSpacing: -0.035em }
  h2: { fontFamily: Geist, fontSize: 1.75rem, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.02em }
  tile-title: { fontFamily: Geist, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.25, letterSpacing: -0.01em }
  body: { fontFamily: Geist, fontSize: 0.9375rem, fontWeight: 400, lineHeight: 1.55 }
  stat: { fontFamily: Geist, fontSize: 3rem, fontWeight: 600, lineHeight: 1.0, letterSpacing: -0.04em }
  mono: { fontFamily: Geist Mono, fontSize: 0.75rem, letterSpacing: 0.02em }
rounded:
  sm: 10px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  gap: 12px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 28px
  xl: 56px
  section: 112px
components:
  tile:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    padding: 28px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 10px 18px
  chip:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 4px 10px
---

# Bento Minimal — DESIGN.md

> A style archetype, not tied to any brand.

## Overview
Named after the compartmentalized Japanese lunchbox, the bento layout packs content into a grid of rounded tiles of different sizes. Each tile carries exactly one message — a stat, a feature, a screenshot crop, a quote — so the whole page can be scanned in seconds. The minimal flavor keeps colors near-neutral, type crisp and tight, and lets a few tinted or dark tiles create rhythm. Ideal for feature overviews, portfolios, link-in-bio pages, and personal dashboards.

Hold onto: **modular, calm, scannable, rounded, product-forward**.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#F5F5F4` | Warm-gray canvas between tiles |
| surface | `#FFFFFF` | Default tile |
| surface-alt | `#EDEDEB` | Chips, inner wells |
| text / primary | `#111113` | Ink, primary button |
| text-muted | `#6B6B70` | Tile descriptions |
| border | `#E4E4E2` | Tile hairlines |
| accent | `#2F6BFF` | Links, toggles, highlights inside tiles |
| tile-sand / sage / sky | `#F1E9DD` / `#E3EBDF` / `#E2ECF8` | Tinted tiles for rhythm |
| tile-dark | `#18181B` | One or two inverted tiles per grid |

Rule of thumb per grid: ~70% white tiles, 1–2 tinted, 1 dark. Accent blue only inside tiles, never as a tile fill.

## Typography
- **Family:** Geist (free) with Geist Mono for labels. Alternatives: *Inter* / *Inter Tight*, *Satoshi* (free for personal), *General Sans*.
- Tight negative tracking on all headings (-0.02 to -0.04em).
- Tile titles 20px/600; descriptions 15px muted, max 2–3 lines.
- Stats 48px/600 with tabular numerals.
- Mono labels 12px in muted, often at tile top-left ("ANALYTICS", "01").

## Layout
- 12-column grid (or 4-column at the tile level), 12px gaps (16px on wide screens), max width 1200px.
- Tile spans: mix 1×1, 2×1, 1×2, 2×2 using CSS grid `grid-auto-rows: 180px` and `grid-column: span N` / `grid-row: span N`.
- One hero tile (2×2) anchors each grid; place the dark tile diagonally from it for balance.
- Mobile: collapse to a single column, keep order meaningful; tall tiles become auto height.
- Section headline above each grid, left-aligned, max 640px.

## Elevation & Depth
- Mostly flat: 1px border tiles on a slightly darker canvas.
- Optional soft lift: `0 1px 2px rgba(17,17,19,0.04), 0 8px 24px rgba(17,17,19,0.04)`.
- Hover: `translateY(-2px)` + shadow `0 12px 32px rgba(17,17,19,0.08)`, 200ms ease-out.
- Inner screenshots sit in a well (`#EDEDEB`, 16px radius) bleeding off the tile's bottom/right edge.

## Shapes
- Tile radius 24px; inner elements 16px; chips/buttons pill. Nested radius = outer radius − padding gap.
- Icons: 1.5px stroke, 20px, ink; sometimes inside a 40px rounded-square chip.
- Imagery: cropped UI fragments, single objects, avatars, mini charts. Never full busy screenshots.

## Components
- **Tile:** white, 1px border, 24px radius, 28px padding; mono label top, title, description, visual anchored bottom.
- **Stat tile:** large number, small label, tiny sparkline or delta chip (`+12%` in green `#16A34A` on `#E7F6EC`).
- **Dark tile:** `#18181B` bg, white title, `#A1A1AA` body, accent glow or illustration.
- **Media tile:** image fills tile with `object-fit: cover`, caption chip overlaid bottom-left (white chip, blur).
- **Primary button:** ink pill, white 14px/500, 10px 18px. Hover `#2A2A2E`.
- **Chip:** `#EDEDEB` pill, 12px/500.
- **Nav:** simple 64px bar, logo left, 3–4 links, ink pill CTA right; no background until scroll.
- **Toggle/segmented control:** inside tiles to demo interactivity; track `#EDEDEB`, active segment white with shadow.

## Do's and Don'ts
**Do**
- Give each tile exactly one message.
- Keep gaps uniform (12–16px) across the whole grid.
- Vary tile sizes for rhythm; anchor with one large tile.
- Use concentric radii for nested elements.

**Don't**
- Don't let tiles contain paragraphs longer than three lines.
- Don't use more than two tinted colors per grid.
- Don't mix gap sizes or radii between grids.
- Don't fill every tile with a screenshot; alternate type-only tiles.

## Agent Prompt Guide
**Base prompt:**
"Use a minimal bento-grid style: warm-gray #F5F5F4 canvas, white tiles with 1px #E4E4E2 borders and 24px radius, 12px gaps, varied spans (2×2 hero, 1×1, 2×1). Geist 600 headings with tight tracking, 15px muted descriptions, Geist Mono uppercase labels. One message per tile; mostly white tiles plus one sand #F1E9DD and one dark #18181B. Ink pill buttons, accent #2F6BFF only inside tiles."

**Examples:**
- "Feature overview: 2×2 hero tile with product crop bleeding off the edge, a stat tile '99.99% uptime', a dark tile with security shield, a sage tile with integrations icons, a 2×1 tile with a testimonial."
- "Personal link-in-bio: avatar tile, map tile, Spotify now-playing tile, GitHub contributions tile, newsletter tile with input."
- "Dashboard home: KPI stat tiles across the top, a 2×2 chart tile, an activity list tile."
