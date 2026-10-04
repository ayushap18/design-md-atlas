---
version: alpha
name: Zed
description: Engineer's editorial — paper-white and slate surfaces, a crisp cobalt blue accent, a serif-meets-sans type pairing, and editor screenshots with tight, fine detail.
source: https://zed.dev
colors:
  primary: "#084CCF"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F6F8"
  surface-alt: "#DAE4F8"
  text: "#1B1E23"
  text-secondary: "#4E5A5F"
  text-muted: "#61616B"
  border: "#D0D4DA"
  border-strong: "#C6CAD0"
  accent: "#4482F8"
  dark-background: "#1B1E23"
  dark-surface: "#24272E"
  dark-text: "#DCE0E5"
  dark-border: "#3A3F47"
typography:
  display:
    fontFamily: Lora, Source Serif 4, Georgia, serif
    fontSize: 3.75rem
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.02em
  h1: { fontFamily: Lora, Source Serif 4, Georgia, serif, fontSize: 2.75rem, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.015em }
  h2: { fontFamily: IBM Plex Sans, Inter, sans-serif, fontSize: 1.75rem, fontWeight: 600, lineHeight: 1.2 }
  h3: { fontFamily: IBM Plex Sans, Inter, sans-serif, fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.35 }
  body: { fontFamily: IBM Plex Sans, Inter, sans-serif, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: IBM Plex Sans, Inter, sans-serif, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  label: { fontFamily: IBM Plex Mono, Zed Mono, ui-monospace, monospace, fontSize: 0.75rem, fontWeight: 500, letterSpacing: 0.04em, textTransform: uppercase }
  mono: { fontFamily: Zed Mono, Zed Plex Mono, IBM Plex Mono, ui-monospace, monospace, fontSize: 0.875rem }
rounded:
  sm: 2px
  md: 4px
  lg: 8px
  xl: 12px
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
    padding: 8px 16px
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.surface}"
    border: 1px solid {colors.border}
    rounded: "{rounded.lg}"
    padding: 24px
  editor-frame:
    backgroundColor: "{colors.dark-background}"
    border: 1px solid {colors.dark-border}
    rounded: "{rounded.lg}"
---

# Zed — DESIGN.md

> Inspired by the public website of Zed (zed.dev). Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Zed's site feels like a well-typeset engineering journal for a very fast editor. White and cool-gray surfaces, fine 1px borders, small radii and a vivid cobalt blue give it precision; a serif headline face adds a thoughtful, crafted voice that distinguishes it from other dark dev-tool sites. Editor screenshots (One Dark/One Light themes) appear in neat frames. Dense technical writing on the blog is treated with care.

Adjectives: **precise, crafted, fast, thoughtful, technical.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFFFFF` | Canvas |
| surface | `#F5F6F8` | Cards, sidebars |
| surface-alt | `#DAE4F8` | Blue-tinted highlights, selected states |
| text | `#1B1E23` | Primary text |
| text-secondary | `#4E5A5F` | Body secondary |
| text-muted | `#61616B` | Captions, meta |
| border | `#D0D4DA` | Hairlines |
| border-strong | `#C6CAD0` | Hover borders |
| primary | `#084CCF` | Cobalt — primary buttons, links |
| accent | `#4482F8` | Lighter blue — focus rings, icons, dark-mode links |
| dark-background | `#1B1E23` | Dark sections, editor frames |
| dark-surface | `#24272E` | Dark panels |
| dark-text | `#DCE0E5` | Dark text |
| dark-border | `#3A3F47` | Dark hairlines |

Cool neutrals with a single blue family. No warm accents in chrome.

## Typography
- **Serif** for display and H1 — fallback: Lora or Source Serif 4, weight 500.
- **Sans** for UI/body — fallback: IBM Plex Sans or Inter.
- **Mono** (Zed Mono / Zed Plex Mono, derived from IBM Plex Mono / Iosevka) — fallback IBM Plex Mono.

Scale: 60 / 44 / 28 / 18 / 16 / 14 / 12px. Serif headlines at 500 with slight negative tracking; sans subheads at 600. Mono uppercase 12px labels for eyebrows ("RELEASE NOTES", "v0.170"). Sentence case.

## Layout
- 1100–1200px max width; blog/doc content 720px.
- Hero: left-aligned serif headline, short paragraph, download button + "Read the docs" secondary, editor screenshot below or right.
- Features: compact grid of bordered cells (like a spec sheet), 1px borders shared between cells.
- Docs: left nav 260px, content 720px, right TOC 200px.
- 112px section spacing; tight 16–24px inner padding.

## Elevation & Depth
Borders, not shadows. Cards: 1px `#D0D4DA`. Editor screenshot frames: 1px dark border plus a modest `0 12px 32px rgba(27,30,35,0.12)`. Popovers in docs: small `0 4px 12px rgba(0,0,0,0.08)`.

## Shapes
- Small radii: buttons/inputs 4px, cards 8px, frames 8–12px, tags 2px.
- Icons: 16px line icons, 1.5px stroke, cool gray.
- Logo: a geometric "Z" mark in a square — monochrome.
- Imagery: editor screenshots, technical diagrams, occasional pixel-grid or dot-matrix decorations.

## Components
- **Primary button**: `#084CCF`, white 14px/500, 4px radius, 36px tall; hover `#0A3FA8`. "Download now" with OS icon.
- **Secondary button**: white, 1px `#D0D4DA`, text `#1B1E23`; hover `#F5F6F8`.
- **Nav**: 56px, white, 1px bottom border, Z logo left, 14px links (Download, Docs, Blog, Releases, Extensions, Pricing), "Sign in" + blue button right.
- **Feature cell**: `#F5F6F8` or white, 1px border, 24px padding, mono uppercase label, 18px/600 title, 15px body.
- **Release note row**: mono version label `v0.172.0` in a 2px-radius `#DAE4F8` tag, date muted, bullet list beneath.
- **Code block**: `#F5F6F8` (light) / `#24272E` (dark), 1px border, 8px radius, mono 14px, line numbers in `#61616B`.
- **Inputs**: 36px, 1px border, 4px radius; focus 2px `#4482F8` ring.
- **Tag**: 2px radius, mono 12px, `#DAE4F8` fill, `#084CCF` text.

## Do's and Don'ts
**Do**
- Pair a serif display face with a technical sans and mono.
- Keep radii small (2–8px) and borders 1px.
- Use cobalt blue as the only accent.
- Present features like a spec sheet grid.

**Don't**
- Don't use glow effects or purple gradients.
- Don't use pill buttons.
- Don't use warm off-white or beige backgrounds.
- Don't bury technical detail — show version numbers and benchmarks.

## Agent Prompt Guide
**Base prompt:**
"Design like Zed: white `#FFFFFF` and `#F5F6F8` surfaces, `#1B1E23` text, 1px `#D0D4DA` borders, cobalt `#084CCF` primary. Lora (serif, 500) for display, IBM Plex Sans for UI, IBM Plex Mono uppercase labels. Small 4px button radius, 8px cards, spec-sheet grid layouts, framed dark editor screenshots."

**Examples:**
- "Hero: left serif headline 'Code at the speed of thought', blue 'Download now' button, framed One Dark editor screenshot."
- "Feature grid: 3×2 bordered cells sharing 1px borders, each with a mono uppercase label and short description."
- "Releases page: list of version entries with blue mono tags and bullet notes."
