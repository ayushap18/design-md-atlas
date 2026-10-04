---
version: alpha
name: Obsidian
description: Dark, private, craftsman knowledge-base aesthetic — charcoal surfaces, violet crystal accent and quiet, readable type.
source: https://obsidian.md
colors:
  primary: "#A88BFA"
  on-primary: "#1E1E1E"
  accent-deep: "#7C3AED"
  background: "#1E1E1E"
  surface: "#262626"
  surface-raised: "#363636"
  text: "#DADADA"
  text-strong: "#FAFAFA"
  text-muted: "#A3A3A3"
  text-subtle: "#525252"
  border: "#363636"
  border-light: "#E5E5E5"
  success: "#22C55E"
  light-background: "#FFFFFF"
typography:
  display:
    fontFamily: Inter
    fontSize: 3.75rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  h1: { fontFamily: Inter, fontSize: 2.75rem, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: Inter, fontSize: 2rem, fontWeight: 600, lineHeight: 1.2 }
  h3: { fontFamily: Inter, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.6 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.accent-deep}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 10px 20px
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text-strong}"
    rounded: "{rounded.md}"
    padding: 10px 20px
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Obsidian — DESIGN.md

> Inspired by the public website of Obsidian. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Obsidian looks like a tool made by craftspeople for thinkers: dark charcoal, a glowing violet crystal logo, and a product screenshot of a graph view or Markdown note as the centerpiece. The site is short, direct and almost austere — "Sharpen your thinking." It respects privacy and ownership, and the design signals that through restraint: no tracking-heavy gimmicks, few colors, plain lists and calm type.

Adjectives: **dark, focused, private, crafted, understated**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #A88BFA | Violet accent: links, graph highlights, active states |
| accent-deep | #7C3AED | Filled CTA buttons |
| background | #1E1E1E | Canvas (dark default) |
| surface / surface-raised | #262626 / #363636 | Panels, secondary buttons |
| text / text-strong | #DADADA / #FAFAFA | Body / headlines |
| text-muted / text-subtle | #A3A3A3 / #525252 | Secondary / disabled |
| border | #363636 | Dividers on dark |
| border-light / light-background | #E5E5E5 / #FFFFFF | Light theme |
| success | #22C55E | Sync "on" state, checkmarks |

Near-monochrome charcoal; violet is the only hue and used sparingly.

## Typography
- **Sans:** Inter (free); fallback `ui-sans-serif, system-ui`.
- **Mono:** `ui-monospace, SFMono-Regular, Menlo` for Markdown syntax and code.
- **Serif (optional, notes):** `ui-serif, Georgia` for reading mode samples.
- Headlines bold with tight tracking; body 17px/1.6 for long reading.

## Layout
- 1100–1200px container; centered hero with crystal logo, headline, subline, "Get Obsidian for macOS" button + "More platforms" link, then a large app screenshot.
- Features in simple 2–3 column grids with short paragraphs and small screenshots.
- Pricing/add-ons (Sync, Publish) as side-by-side cards.
- 96px section spacing; minimal decorations.

## Elevation & Depth
- App screenshots: `0 30px 80px rgba(0,0,0,.6)` and a 1px #363636 border, 12px radius.
- Soft violet radial glow behind the logo/hero (`rgba(124,58,237,.25)`).
- Cards: flat #262626 with 1px border.

## Shapes
- 8px buttons, 12px cards, full pills for platform tags.
- Icons: Lucide-style 1.75px line icons (Obsidian's app uses Lucide).
- Imagery: graph-view node clouds (white/gray dots, violet active node), Markdown editor screenshots, the faceted crystal logo.

## Components
- **Primary button:** #7C3AED fill, white 16px/600, 8px radius, 44px; hover #8B5CF6.
- **Secondary:** #363636 fill, #FAFAFA text; hover #404040.
- **Nav:** 60px, crystal logo + "Obsidian" wordmark left, links (Sync, Publish, Community, Download, Pricing, Account) right in 15px #A3A3A3, hover white.
- **App pane mock:** left file tree (#262626, 13px items, folder chevrons), center editor (#1E1E1E, headings in #FAFAFA, links `[[wikilink]]` in #A88BFA), right graph pane.
- **Plan card:** #262626, 12px radius, 24px padding, price 32px/700, checklist with #22C55E checks, violet CTA.
- **Callout (Markdown):** left 3px border in violet, #A88BFA icon, #2A2633 fill.
- **Input:** 40px, #262626, 1px #363636, 8px radius, focus ring violet.

## Do's and Don'ts
**Do**
- Default to the charcoal dark theme.
- Use violet only for links, active graph nodes and the main CTA.
- Feature the graph view and Markdown editor as hero art.
- Write short, direct copy with plenty of space.

**Don't**
- Don't introduce additional brand hues.
- Don't use glassy, flashy gradients across the page.
- Don't use heavy marketing illustrations or stock photos.
- Don't use pure black #000000 backgrounds.

## Agent Prompt Guide
**Base prompt:**
"Design like Obsidian: #1E1E1E charcoal canvas, #262626 panels with 1px #363636 borders and 12px radius, Inter headlines in #FAFAFA, #DADADA body, violet #A88BFA for links and graph nodes with #7C3AED filled CTAs, Lucide line icons, soft violet glow behind the hero, large app screenshots with deep shadows."

**Examples:**
- "Hero with crystal logo glow, 'Sharpen your thinking.', 'Get Obsidian for macOS' button and an app screenshot."
- "Knowledge graph panel: scattered gray nodes and lines, one highlighted violet node with label."
- "Pricing cards for Sync and Publish with green checklists."
