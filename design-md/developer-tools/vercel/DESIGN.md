---
version: alpha
name: Vercel
description: Precision monochrome — pure black and white, Geist typography, hairline borders and grid lines, with the triangle mark and occasional prismatic gradients.
source: https://vercel.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#FAFAFA"
  surface-alt: "#F2F2F2"
  text: "#171717"
  text-secondary: "#4D4D4D"
  text-muted: "#8F8F8F"
  border: "#EBEBEB"
  border-strong: "#C9C9C9"
  blue: "#0070F3"
  success: "#0CCE6B"
  warning: "#F5A623"
  error: "#EE0000"
  dark-background: "#0A0A0A"
  dark-surface: "#111111"
  dark-border: "#2E2E2E"
typography:
  display:
    fontFamily: Geist, Inter, -apple-system, sans-serif
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.05em
  h1: { fontFamily: "Geist, Inter, sans-serif", fontSize: 3rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.04em }
  h2: { fontFamily: "Geist, Inter, sans-serif", fontSize: 2rem, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.03em }
  h3: { fontFamily: "Geist, Inter, sans-serif", fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.35, letterSpacing: -0.01em }
  body: { fontFamily: "Geist, Inter, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: "Geist, Inter, sans-serif", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  label: { fontFamily: "Geist Mono, ui-monospace, monospace", fontSize: 0.75rem, fontWeight: 500, letterSpacing: 0.02em, textTransform: uppercase }
  mono: { fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace", fontSize: 0.8125rem }
rounded:
  sm: 4px
  md: 6px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 0 14px
    height: 40px
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.full}"
    padding: 0 14px
    height: 40px
  card:
    backgroundColor: "#FFFFFF"
    border: 1px solid {colors.border}
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "#FFFFFF"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    height: 40px
---

# Vercel — DESIGN.md

> Inspired by the public website of Vercel and its Geist design system. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Vercel is the reference for "developer minimalism." It runs on pure black and white, the Geist typeface (designed in-house), and razor-thin borders. Marketing pages layer a faint dashed or solid grid behind content, with crosshair marks at intersections, and occasionally a prismatic rainbow gradient (the "Ship" palette) behind the triangle logo. Dashboards are dense tables with monospaced metadata. Every pixel feels aligned.

Adjectives: **precise, monochrome, engineered, fast, sharp.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFFFFF` | Canvas (light) |
| surface | `#FAFAFA` | Secondary backgrounds, table headers |
| surface-alt | `#F2F2F2` | Hover fills |
| text | `#171717` | Primary text |
| text-secondary | `#4D4D4D` | Secondary |
| text-muted | `#8F8F8F` | Tertiary, placeholders |
| border | `#EBEBEB` | Default hairlines |
| border-strong | `#C9C9C9` | Hover borders |
| primary | `#000000` | Primary buttons, logo |
| blue | `#0070F3` | Links, focus rings, info |
| success | `#0CCE6B` | "Ready" deployments |
| warning | `#F5A623` | Building / warnings |
| error | `#EE0000` | Errors |
| dark-background | `#0A0A0A` | Dark mode canvas |
| dark-surface | `#111111` | Dark cards |
| dark-border | `#2E2E2E` | Dark hairlines |

Gray scale covers ~97% of the UI. Status colors appear as small dots. Gradients (blue→pink→orange) are decorative, used behind hero art only.

## Typography
- **Geist** (free, SIL OFL) for all UI and headings.
- **Geist Mono** for code, deployment URLs, commit hashes, and uppercase micro-labels.

Scale: 72 / 48 / 32 / 20 / 16 / 14 / 12px. Headings weight 600 with heavy negative tracking (-0.05em at display, -0.03em at h2). Body 14–16px. Micro-labels in Geist Mono uppercase 12px. Sentence case for headings.

## Layout
- Max width 1200px (marketing) / 1400px (dashboard), 24px side padding.
- Visible grid: content sits inside bordered cells; lines `#EBEBEB`, sometimes dashed; small "+" markers at corners.
- Section spacing 96px; within cards, 24px padding.
- Dashboard: top nav with project switcher breadcrumbs (`team / project`), secondary tab bar, then content.

## Elevation & Depth
Borders over shadows. Cards: 1px `#EBEBEB`. Elevated menus/modals: `0 0 0 1px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04), 0 16px 24px rgba(0,0,0,0.06)`. Dark mode relies on borders only.

## Shapes
- Buttons: full pill on marketing; 6px on dashboard. Inputs: 6px. Cards: 12px.
- The triangle logo (▲) is the signature shape — solid black or white.
- Icons: Geist icons, 16px, 1.5px stroke.
- Imagery: product screenshots in bordered frames, globe/network visualizations, prismatic gradient glows.

## Components
- **Primary button**: black, white 14px/500 text, 40px tall, full pill (marketing) or 6px (app); hover `#383838`.
- **Secondary button**: white, 1px `#EBEBEB`, hover border `#C9C9C9` and fill `#FAFAFA`.
- **Nav**: 64px, white with 1px bottom border, ▲ logo left, 14px links with dropdowns, "Log In" ghost + "Sign Up" black pill right; dark variant on `#0A0A0A`.
- **Card**: white, 1px border, 12px radius, 24px padding; hover border `#C9C9C9`.
- **Deployment row**: status dot (8px green/amber/red) + mono URL + branch icon + commit message truncated + time ago right-aligned in muted; 56px rows separated by 1px borders.
- **Input**: 40px, 1px `#EBEBEB`, 6px radius; focus `0 0 0 2px #FFFFFF, 0 0 0 4px #0070F3` ring.
- **Badge**: 20px tall, 12px text, full pill, gray `#F2F2F2` or tinted status fills.
- **Code block / terminal**: `#0A0A0A` with 1px `#2E2E2E`, 12px radius, Geist Mono 13px, "$" prompt in muted.
- **Tabs**: 14px text, active black with 2px black underline, inactive `#8F8F8F`.

## Do's and Don'ts
**Do**
- Use only black, white and grays for UI chrome.
- Draw structure with 1px borders and visible grid lines.
- Use Geist with tight negative tracking on headings.
- Put identifiers (URLs, hashes) in Geist Mono.

**Don't**
- Don't introduce brand colors for buttons.
- Don't use soft, wide drop shadows on cards.
- Don't round corners beyond 12–16px on containers.
- Don't use playful illustration.

## Agent Prompt Guide
**Base prompt:**
"Design like Vercel: pure white `#FFFFFF` (or `#0A0A0A` dark), text `#171717`, borders `#EBEBEB`. Geist (or Inter) at weight 600 with -0.04em tracking, Geist Mono for labels. Black pill primary button, white bordered secondary. 1px-border cards with 12px radius, visible grid lines with + markers, no shadows, status dots in green/amber/red."

**Examples:**
- "Hero: centered 72px headline with -0.05em tracking, two pill buttons, faint grid background and a prismatic gradient glow behind a ▲ mark."
- "Deployments list: rows with status dot, mono URL, branch, commit message and relative time, 1px separators."
- "Pricing: three bordered columns inside a grid with + corner markers, black pill CTA on Pro."
