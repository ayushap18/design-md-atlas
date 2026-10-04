---
version: alpha
name: GitHub
description: Utility-first Primer system — neutral grays, a functional blue for links and a green for primary actions, Mona Sans headlines, and dense bordered boxes; marketing pages go dark and cosmic.
source: https://github.com
colors:
  primary: "#1F883D"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F6F8FA"
  surface-alt: "#EFF2F5"
  text: "#1F2328"
  text-muted: "#59636E"
  border: "#D1D9E0"
  border-muted: "#D8DEE4"
  accent: "#0969DA"
  attention: "#9A6700"
  danger: "#D1242F"
  done: "#8250DF"
  sponsor: "#BF3989"
  dark-background: "#0D1117"
  dark-surface: "#151B23"
  dark-text: "#F0F6FC"
  dark-border: "#3D444D"
  dark-accent: "#4493F8"
  marketing-dark: "#0D1117"
typography:
  display:
    fontFamily: Mona Sans, Hubot Sans, -apple-system, Segoe UI, sans-serif
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.03em
  h1: { fontFamily: "Mona Sans, -apple-system, Segoe UI, sans-serif", fontSize: 2rem, fontWeight: 600, lineHeight: 1.25 }
  h2: { fontFamily: "-apple-system, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif", fontSize: 1.5rem, fontWeight: 600, lineHeight: 1.25 }
  h3: { fontFamily: "-apple-system, Segoe UI, Noto Sans, sans-serif", fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.25 }
  body: { fontFamily: "-apple-system, Segoe UI, Noto Sans, Helvetica, Arial, sans-serif", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  body-large: { fontFamily: "-apple-system, Segoe UI, Noto Sans, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "-apple-system, Segoe UI, Noto Sans, sans-serif", fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace", fontSize: 0.8125rem }
rounded:
  sm: 3px
  md: 6px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 5px 16px
    height: 32px
  button-default:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    padding: 5px 16px
    height: 32px
  box:
    backgroundColor: "{colors.background}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
  label:
    border: 1px solid {colors.border}
    rounded: "{rounded.full}"
    padding: 0 7px
---

# GitHub — DESIGN.md

> Inspired by the public website of GitHub and its Primer design system. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
GitHub has two faces. The product is Primer: a dense, neutral, highly functional interface built from bordered "Box" containers, 14px system type, a blue link color and green primary buttons. The marketing site is cinematic: deep navy-black backgrounds, glowing gradients, 3D Mona/Octocat renders, and big Mona Sans headlines. Both share clarity and a strong sense of being a workbench.

Adjectives: **functional, dense, trustworthy, neutral, community-scale.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFFFFF` | Canvas (light) |
| surface | `#F6F8FA` | Box headers, default buttons, code |
| surface-alt | `#EFF2F5` | Hover |
| text | `#1F2328` | Primary text |
| text-muted | `#59636E` | Secondary |
| border | `#D1D9E0` | Box and input borders |
| primary | `#1F883D` | Primary (green) buttons, "Open" state |
| accent | `#0969DA` | Links, focus, selected tabs |
| attention | `#9A6700` | Warnings |
| danger | `#D1242F` | Destructive, "Closed" issues |
| done | `#8250DF` | Merged PRs |
| sponsor | `#BF3989` | Sponsors heart |
| dark-background | `#0D1117` | Dark mode & marketing canvas |
| dark-surface | `#151B23` | Dark boxes |
| dark-text | `#F0F6FC` | Dark text |
| dark-border | `#3D444D` | Dark borders |
| dark-accent | `#4493F8` | Dark links |

Product UI is mostly gray; blue for links/focus, green for the main action, purple/red/green for state icons. Marketing adds purple/teal/green glows on `#0D1117`.

## Typography
- **Product**: system font stack (-apple-system, Segoe UI, Noto Sans) — 14px base.
- **Marketing**: **Mona Sans** (free, variable) for headlines; Hubot Sans as a wider companion.
- **Mono**: ui-monospace / SF Mono / Consolas — code, SHAs, branch names.

Scale (product): 32 / 24 / 20 / 16 / 14 / 12px, weight 600 for headings. Marketing display 56–80px Mona Sans 600–800 with tight tracking. Sentence case.

## Layout
- Product: 1280px max, repo pages with a 2-column layout (main ~75%, right sidebar "About" ~25%), 24px gutters.
- Header: global nav 64px; repo header with tabs (Code, Issues, Pull requests, Actions…) with counters.
- 8px spacing scale; lists are bordered Boxes with 1px row dividers.
- Marketing: full-bleed dark sections, centered hero, 1280px content, 120px+ spacing.

## Elevation & Depth
Product: borders first. Overlays use `0 1px 3px rgba(31,35,40,0.12), 0 8px 24px rgba(66,74,83,0.12)`. Small "shadow-resting": `0 1px 0 rgba(31,35,40,0.04)` on buttons. Marketing: glow gradients, 3D renders, and dark-glass cards with 1px `rgba(255,255,255,0.1)` borders.

## Shapes
- 6px radius for buttons, inputs, Boxes; 12px for marketing cards; full pill for labels and counters.
- Octicons: 16px/24px line icons with consistent stroke.
- Avatars: circles (users), 6px rounded squares (orgs).
- Imagery (marketing): 3D Octocat/Mona characters, glowing contribution graphs, code screenshots.

## Components
- **Primary button**: `#1F883D` fill, white 14px/500 text, 32px tall, 6px radius, `inset 0 1px 0 rgba(255,255,255,0.03)`; hover `#1C8139`.
- **Default button**: `#F6F8FA`, 1px `#D1D9E0`, `#1F2328` text; hover `#EFF2F5`. Danger variant: red text, red fill on hover.
- **Box**: white, 1px border, 6px radius; header `#F6F8FA` with 1px bottom border, rows 1px dividers.
- **Repo tabs (UnderlineNav)**: 14px with octicon, counter pill `#E1E4E8`/`rgba(129,139,152,0.12)`; active has 2px `#FD8C73` underline and 600 weight.
- **Label**: full pill, 12px/500, 1px border or colored fill with auto-contrasting text.
- **State badge**: pill 32px tall — "Open" green, "Closed" red, "Merged" purple — white text with octicon.
- **Input**: 32px, `#FFFFFF` (or `#F6F8FA`), 1px border, 6px radius; focus `outline: 2px solid #0969DA`.
- **Marketing CTA**: white pill/6px button on dark, plus "Sign up for GitHub" email field combo.

## Do's and Don'ts
**Do**
- Use bordered Boxes and 14px system type in product UI.
- Use green only for the primary action, blue for links.
- Use Octicons at 16px.
- Encode PR/issue state with green/purple/red.

**Don't**
- Don't use large radii in product UI.
- Don't use colored backgrounds for whole sections inside the app.
- Don't set app body text larger than 14–16px.
- Don't use Mona Sans display styles in dense tables.

## Agent Prompt Guide
**Base prompt:**
"Design in GitHub Primer style: white canvas, `#1F2328` text, `#59636E` muted, 1px `#D1D9E0` borders, `#F6F8FA` headers. System font 14px, mono for code. Green `#1F883D` primary buttons, gray default buttons, 6px radius, blue `#0969DA` links, pill labels and state badges."

**Examples:**
- "Repo page: header with owner/name, tabs with counters, file list Box, README Box, right 'About' sidebar."
- "Pull request list: Box with rows showing green/purple state octicon, title, labels, meta line and comment count."
- "Marketing hero on `#0D1117` with a Mona Sans 72px headline, purple-teal glow and a white CTA."
