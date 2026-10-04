---
version: alpha
name: Warp
description: Modern terminal brand — inky black canvas, soft lavender accent, the Matter grotesk, and terminal "blocks" rendered as clean rounded panels.
source: https://www.warp.dev
colors:
  primary: "#FFFFFF"
  on-primary: "#0B0B0B"
  background: "#0B0B0B"
  surface: "#141414"
  surface-alt: "#1F1F1F"
  elevated: "#262626"
  text: "#FFFFFF"
  text-secondary: "#C7C7C7"
  text-muted: "#8A8A8A"
  border: "#2A2A2A"
  accent: "#C7AEFF"
  accent-deep: "#7B5CFF"
  violet-surface: "#1C1A26"
  violet-border: "#373245"
  terminal-green: "#5AF78E"
  terminal-red: "#FF6B6B"
  terminal-yellow: "#F4F99D"
  terminal-cyan: "#9AEDFE"
typography:
  display:
    fontFamily: Matter, Inter, -apple-system, sans-serif
    fontSize: 4.5rem
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.035em
  h1: { fontFamily: Matter, Inter, sans-serif, fontSize: 3.25rem, fontWeight: 500, lineHeight: 1.05, letterSpacing: -0.03em }
  h2: { fontFamily: Matter, Inter, sans-serif, fontSize: 2.25rem, fontWeight: 500, lineHeight: 1.15, letterSpacing: -0.02em }
  h3: { fontFamily: Matter, Inter, sans-serif, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Matter, Inter, sans-serif, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Matter, Inter, sans-serif, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  mono: { fontFamily: Hack, JetBrains Mono, Roboto Mono, ui-monospace, monospace, fontSize: 0.875rem, lineHeight: 1.55 }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    padding: 10px 18px
  terminal-block:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    padding: 12px 16px
  agent-card:
    backgroundColor: "{colors.violet-surface}"
    border: 1px solid {colors.violet-border}
    rounded: "{rounded.lg}"
    padding: 20px
---

# Warp — DESIGN.md

> Inspired by the public website of Warp. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Warp reimagines the terminal as a modern app, and its brand follows: a deep black canvas, product windows with rounded corners and crisp separators, input/output grouped into "blocks," and a soft lavender accent for AI/agent moments. Headlines are set in Matter, a friendly geometric grotesk, giving it more warmth than typical dev-tool sites. The overall tone is focused and futuristic but approachable.

Adjectives: **modern, focused, futuristic, approachable, keyboard-native.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#0B0B0B` | Canvas |
| surface | `#141414` | Terminal blocks, cards |
| surface-alt | `#1F1F1F` | Secondary buttons, inputs |
| elevated | `#262626` | Popovers, command palette |
| text | `#FFFFFF` | Headlines |
| text-secondary | `#C7C7C7` | Body |
| text-muted | `#8A8A8A` | Meta, prompt path |
| border | `#2A2A2A` | Hairlines |
| accent | `#C7AEFF` | Lavender — AI/agent highlights, links |
| accent-deep | `#7B5CFF` | Pressed / gradients |
| violet-surface / violet-border | `#1C1A26` / `#373245` | Agent panels |
| terminal colors | `#5AF78E`, `#FF6B6B`, `#F4F99D`, `#9AEDFE` | ANSI output in screenshots |

Black and gray dominate; lavender is the single brand accent; ANSI colors appear only inside terminal content.

## Typography
- **Matter** (Displaay) for UI and headings. Free fallback: Inter or Manrope.
- **Mono**: Warp's terminal uses Hack/Roboto Mono; fallback JetBrains Mono.

Scale: 72 / 52 / 36 / 20 / 16 / 14px. Headlines weight 500 with tight tracking. Command text and paths in mono 14px. Sentence case; short, punchy headlines ("The agentic development environment").

## Layout
- 1200px max width; hero centered with a large app window screenshot below.
- Sections 128px apart; features as 2-column (copy + terminal visual) or 3-column card grids.
- App window: tab bar 36px, blocks stacked with 8px gaps, input editor pinned at bottom.

## Elevation & Depth
Dark tonal layering plus 1px borders. App window mock: `#141414`, 12px radius, 1px `#2A2A2A`, `0 40px 100px rgba(0,0,0,0.6)`, plus a faint lavender radial glow behind (`rgba(199,174,255,0.12)`). Popovers: `#262626` with border.

## Shapes
- Buttons 8px, blocks 8px, windows 12px, feature cards 16px.
- Icons: 16px line icons; the Warp logo is a slanted "W"-like double chevron, white.
- Imagery: terminal/app screenshots, abstract lavender gradients, no stock photos.

## Components
- **Primary button**: white fill, `#0B0B0B` 15px/500 text, 8px radius, 40px tall; often "Download Warp" with OS icon. Hover `#E5E5E5`.
- **Secondary button**: `#1F1F1F`, 1px border, white text.
- **Nav**: 64px, black, logo left, 15px links (Product, Agents, Pricing, Docs, Blog), "Log in" + white "Download" right.
- **Terminal block**: `#141414`, 1px border, 8px radius; header line shows mono path in muted + command in white; output below with ANSI colors; selected block has a 1px lavender left border.
- **Agent card**: `#1C1A26`, 1px `#373245`, 12px radius, lavender sparkle icon, 15px text; status line ("drafting the spec…") in muted mono with an animated dot.
- **Command palette**: 600px, `#262626`, 12px radius, 44px search field, rows 36px with shortcut chips.
- **Input editor**: bottom-pinned, `#141414`, 1px top border, mono 14px, cursor in lavender.
- **Badge**: `#1C1A26` pill, lavender 12px text.

## Do's and Don'ts
**Do**
- Use deep black with 1px gray borders.
- Show input/output as distinct rounded blocks.
- Use lavender `#C7AEFF` for AI and focus moments only.
- Use mono for commands, paths, outputs.

**Don't**
- Don't use the classic green-on-black terminal cliché as the brand.
- Don't use multiple accent colors in UI chrome.
- Don't use sharp 0px corners on windows.
- Don't overuse glow; one behind the hero window is enough.

## Agent Prompt Guide
**Base prompt:**
"Design like Warp: black `#0B0B0B` canvas, `#141414` surfaces, 1px `#2A2A2A` borders, white headlines in Manrope/Inter weight 500 with -0.03em tracking, lavender `#C7AEFF` accent. Terminal output as 8px-radius blocks with mono text, white 8px-radius primary button, agent panels on `#1C1A26`."

**Examples:**
- "Hero: centered headline, white 'Download Warp' button, large terminal window with stacked command blocks and a lavender glow."
- "Feature row: copy on left; right shows an agent panel with status lines and a diff block."
- "Command palette overlay with search field and rows with shortcut chips."
