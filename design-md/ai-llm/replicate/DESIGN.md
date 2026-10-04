---
version: alpha
name: Replicate
description: Hacker-friendly ML platform — stark black-and-white with a hot red-orange accent, a geometric grotesk, and code blocks as hero elements.
source: https://replicate.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F7F7F7"
  surface-alt: "#EDEDED"
  text: "#000000"
  text-secondary: "#4A4A4A"
  text-muted: "#8A8A8A"
  border: "#E0E0E0"
  accent: "#EA2805"
  accent-hover: "#C21F00"
  accent-soft: "#FDE8E4"
  code-background: "#111111"
  code-text: "#F5F5F5"
  success: "#16A34A"
typography:
  display:
    fontFamily: Basier Square, Space Grotesk, Inter, sans-serif
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.035em
  h1: { fontFamily: "Basier Square, Space Grotesk, Inter, sans-serif", fontSize: 3rem, fontWeight: 700, lineHeight: 1.05, letterSpacing: -0.03em }
  h2: { fontFamily: "Basier Square, Space Grotesk, Inter, sans-serif", fontSize: 2rem, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.02em }
  h3: { fontFamily: "Basier Square, Space Grotesk, Inter, sans-serif", fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: "Basier Square, Inter, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: "Basier Square, Inter, sans-serif", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  mono: { fontFamily: "JetBrains Mono, Berkeley Mono, ui-monospace, monospace", fontSize: 0.875rem, lineHeight: 1.6 }
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 112px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 10px 18px
  model-card:
    backgroundColor: "{colors.background}"
    border: 1px solid {colors.border}
    rounded: "{rounded.lg}"
    padding: 0
  code-block:
    backgroundColor: "{colors.code-background}"
    textColor: "{colors.code-text}"
    rounded: "{rounded.lg}"
    padding: 20px 24px
---

# Replicate — DESIGN.md

> Inspired by the public website of Replicate. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Replicate speaks directly to developers: "Run AI with an API." Its pages are high-contrast black-on-white with heavy, tightly tracked geometric headlines, a single fiery red-orange accent, and code snippets displayed as prominently as images. Model listings are a grid of thumbnails with owner/name and run counts. The vibe is a confident indie tool — functional, slightly brutalist, not corporate.

Adjectives: **direct, developer-first, punchy, functional, high-contrast.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFFFFF` | Canvas |
| surface | `#F7F7F7` | Panels, input backgrounds, table stripes |
| surface-alt | `#EDEDED` | Hover |
| text / primary | `#000000` | Headlines, body, buttons |
| text-secondary | `#4A4A4A` | Descriptions |
| text-muted | `#8A8A8A` | Run counts, timestamps |
| border | `#E0E0E0` | Card and table borders |
| accent | `#EA2805` | Brand red-orange: logo, highlights, key CTA |
| accent-hover | `#C21F00` | Accent hover/pressed |
| accent-soft | `#FDE8E4` | "Official" / "New" tags |
| code-background | `#111111` | Code blocks |
| code-text | `#F5F5F5` | Code text |
| success | `#16A34A` | "Succeeded" prediction status |

Black and white dominate. Accent appears in the logo, one CTA per page, and small highlights.

## Typography
- **Basier Square** (geometric grotesk) for all text. Free fallback: Space Grotesk or Inter.
- **Mono** (JetBrains Mono) for code, model versions, API outputs, cURL examples.

Scale: 72 / 48 / 32 / 20 / 16 / 14px. Headlines are bold (700) with tight tracking — punchy and compact. Body 16px. Model identifiers formatted `owner/model` in mono or medium weight. Sentence case.

## Layout
- 1280px max width, 24–32px gutters.
- Hero: big left-aligned headline, subhead, CTA pair, and a dark code block (Python/JS/cURL tabs) on the right or below.
- Model explore: 3–4 column card grid, 16px gaps, category tabs above.
- Model page: header (owner/name, run count, tags), tabs (Playground, API, Examples, README, Versions), two-column playground (inputs left, output right).

## Elevation & Depth
Flat. 1px `#E0E0E0` borders separate everything. Hover on cards: border darkens to `#000000`. No shadows except on dropdowns (`0 4px 16px rgba(0,0,0,0.08)`).

## Shapes
- Tight radii: buttons/inputs 4px, cards and code blocks 8px, tags 2–4px.
- Icons: simple line, 16–20px.
- Model thumbnails: square or 4:3, cover-fit, 8px top corners in cards.
- Logo: a stacked-bars glyph — echo with blocky shapes, not curves.

## Components
- **Primary button**: black fill, white 15px/500 text, 4px radius, 10px × 18px. Hover `#333333`.
- **Accent button**: `#EA2805` fill, white text, 4px radius; hover `#C21F00`.
- **Secondary button**: white, 1px `#000000` border, black text, 4px radius.
- **Nav**: 60px, white, logo left, links (Explore, Pricing, Docs, Blog) 15px, "Sign in" text + black button right; 1px bottom border.
- **Model card**: 1px border, 8px radius, thumbnail top, then 16px padding: `owner/name` 15px/600, one-line description 14px secondary, "▶ 1.2M runs" in 13px muted.
- **Code block**: `#111111`, 8px radius, 20×24px padding, mono 14px, tab bar (Python · Node · HTTP) in 13px with white underline on active, copy button top-right.
- **Playground form**: label 14px/600 + type hint in mono muted, inputs 40px `#F7F7F7` fill with 1px border, 4px radius; "Run" black button.
- **Status badge**: "succeeded" green text on `#DCFCE7`, "failed" red on `#FDE8E4`, 4px radius, mono 12px.
- **Tags**: `#F7F7F7` fill, 2px radius, 12px text.

## Do's and Don'ts
**Do**
- Make code blocks a hero element.
- Keep palette black/white with one red-orange accent.
- Use bold, tightly tracked headlines.
- Use 4–8px radii and 1px borders.

**Don't**
- Don't use pill buttons or large radii.
- Don't add gradients or glassy effects.
- Don't hide the API — show cURL/Python snippets early.
- Don't use more than one accent CTA per screen.

## Agent Prompt Guide
**Base prompt:**
"Design like Replicate: white canvas, pure black text and buttons, single red-orange accent `#EA2805`. Space Grotesk bold headlines with -0.035em tracking, Inter body, JetBrains Mono code. 1px `#E0E0E0` borders, 4px button radius, 8px cards, dark `#111111` code blocks. Developer-first and punchy."

**Examples:**
- "Hero: 72px bold headline 'Run AI with an API', subhead, black + outline buttons, and a tabbed Python/Node/HTTP code block on the right."
- "Explore grid: 4 columns of model cards with thumbnail, `owner/name`, description and run count."
- "Model playground: inputs column with mono type hints, output column with image result and a green 'succeeded' badge."
