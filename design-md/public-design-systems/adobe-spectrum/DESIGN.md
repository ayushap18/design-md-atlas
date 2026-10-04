---
version: alpha
name: Adobe Spectrum
description: Adobe's cross-product system for creative tools — neutral gray canvases that let artwork lead, a crisp accent blue, pill-shaped buttons and precise, scale-aware sizing.
source: https://spectrum.adobe.com
colors:
  primary: "#1473E6"
  primary-hover: "#0D66D0"
  primary-down: "#095ABA"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F5F5"
  surface-alt: "#FAFAFA"
  text: "#2C2C2C"
  text-body: "#4B4B4B"
  text-muted: "#6E6E6E"
  border: "#E1E1E1"
  border-strong: "#B3B3B3"
  cta: "#1473E6"
  negative: "#D7373F"
  notice: "#E68619"
  positive: "#268E6C"
  informative: "#2680EB"
  focus: "#2680EB"
  accent: "#1473E6"
typography:
  display:
    fontFamily: Adobe Clean
    fontSize: 2.5rem
    fontWeight: 900
    lineHeight: 1.3
    letterSpacing: 0
  h1: { fontFamily: Adobe Clean, fontSize: 1.75rem, fontWeight: 700, lineHeight: 1.3 }
  h2: { fontFamily: Adobe Clean, fontSize: 1.375rem, fontWeight: 700, lineHeight: 1.3 }
  h3: { fontFamily: Adobe Clean, fontSize: 1.125rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: Adobe Clean, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  detail: { fontFamily: Adobe Clean, fontSize: 0.6875rem, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0.06em }
  mono: { fontFamily: Source Code Pro, fontSize: 0.875rem }
rounded:
  sm: 2px
  md: 4px
  lg: 8px
  full: 16px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  button-cta:
    backgroundColor: "{colors.cta}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 0 14px
    height: 32px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text-body}"
    borderColor: "{colors.text-body}"
    borderWidth: 2px
    rounded: "{rounded.full}"
    height: 32px
  textfield:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.border-strong}"
    rounded: "{rounded.md}"
    height: 32px
---

# Adobe Spectrum — DESIGN.md

> Inspired by the public website of Adobe Spectrum. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Spectrum unifies Photoshop, Illustrator, Acrobat, Express and Experience Cloud. The UI's job is to recede so the user's canvas can dominate, so the system is built around a long neutral gray ramp, one accent blue, and compact controls that scale between a **medium** (desktop) and **large** (touch) size. Themes come in light, dark and darkest; the same tokens resolve to different grays in each.

Adjectives: **neutral, precise, crafted, scalable, content-first**.

Hallmarks: pill-shaped buttons, 2px outlined secondary buttons, quiet field styles, bold "detail" labels in small caps-like uppercase, and a clear focus ring (keyboard-only).

Values below are Spectrum's classic (S1) light-theme global tokens; Spectrum 2 shifts toward rounder corners, a brighter accent blue and Adobe Clean Spectrum VF, but the structure is the same.

## Colors
**Gray ramp (light theme):** gray-50 `#FFFFFF`, gray-75 `#FAFAFA`, gray-100 `#F5F5F5`, gray-200 `#EAEAEA`, gray-300 `#E1E1E1`, gray-400 `#CACACA`, gray-500 `#B3B3B3`, gray-600 `#8E8E8E`, gray-700 `#6E6E6E`, gray-800 `#4B4B4B`, gray-900 `#2C2C2C`.

| Token | Hex | Role |
|---|---|---|
| `blue-400` | `#378EF0` | Accent on dark themes, highlight |
| `blue-500` | `#2680EB` | Informative, focus ring, links |
| `blue-600` / accent | `#1473E6` | CTA button, selected states |
| `blue-700` | `#0D66D0` | CTA hover |
| `blue-800` | `#095ABA` | CTA down/pressed |
| `gray-50` | `#FFFFFF` | Field and app background |
| `gray-100` | `#F5F5F5` | Panels, chrome |
| `gray-300` | `#E1E1E1` | Dividers, quiet borders |
| `gray-500` | `#B3B3B3` | Field borders |
| `gray-700` | `#6E6E6E` | Labels, secondary text |
| `gray-800` | `#4B4B4B` | Body text, secondary button outline |
| `gray-900` | `#2C2C2C` | Headings, primary text |
| `red-500` | `#E34850` | Negative icons and borders |
| `red-600` | `#D7373F` | Negative / destructive button |
| `orange-400` | `#E68619` | Notice |
| `green-500` | `#2D9D78` | Positive icons |
| `green-600` | `#268E6C` | Positive text/fills |

Grays fill 90%+ of the UI. Blue marks the single primary action and selection; semantic colors are status-only. Categorical colors (seafoam, indigo, purple, fuchsia, magenta, celery, chartreuse, yellow) are reserved for data visualization and labels.

## Typography
- **Family:** Adobe Clean (proprietary). Free fallback: Source Sans 3, then `-apple-system, "Segoe UI", Roboto, sans-serif`. Code: Source Code Pro. Serif variant: Adobe Clean Serif (fallback Source Serif 4).
- **Base:** 14px body at medium scale (17px at large/touch scale), line-height 1.5.
- **Scale tokens (medium):** 75=12px, 100=14px, 200=16px, 300=18px, 400=20px, 500=22px, 600=25px, 700=28px, 800=32px, 900=36px, 1000=40px, 1100=45px, 1200=50px, 1300=60px.
- **Styles:** Heading (bold 700, or 900 "heavy" for display), Body (400), Detail (11–12px, bold, uppercase, +0.06em tracking, used for section labels), Code.
- Headings use line-height 1.3; never use letter-spacing on body text.

## Layout
- Spacing tokens: 50=2px, 75=4px, 100=8px, 125=10px, 150=12px, 200=16px, 250=20px, 300=24px, 400=32px, 500=40px, 600=48px, 700=64px, 800=80px, 900=96px, 1000=128px.
- Controls are on a 32px component height at medium scale (24/32/40/48 for S/M/L/XL); large scale multiplies to ~40px.
- Responsive grid: 12 columns with 16px gutters on small, 24px on large; margins 16–32px.
- App layouts: dense toolbars (32px), side panels 240–320px wide on `#F5F5F5`, central canvas.
- Group related fields with 16px gaps; separate sections with 24–32px.

## Elevation & Depth
- Mostly flat. Panels separate by gray background steps (gray-50 vs gray-100 vs gray-200), not shadows.
- Popovers, menus and dialogs: `0 1px 4px rgba(0,0,0,0.15)` with a 1px gray-400 border.
- Dialog overlay: `rgba(0,0,0,0.4)` in light theme.
- Focus: keyboard-only 2px `#2680EB` ring, offset 2px (focus-indicator gap). Mouse clicks don't show it.

## Shapes
- Corner radius: 2px (small: checkboxes, tags), 4px (medium: fields, cards, popovers), 8px (large: dialogs in S1); buttons are fully rounded pills (half their height, 16px at 32px tall).
- Spectrum 2 increases radii: 8px fields, 16px cards/dialogs.
- Icons: Spectrum workflow icons, 18×18 at medium scale (22 at large), 1.5px-ish strokes and filled shapes, gray-700 by default.
- Imagery: vivid creative work; UI frames it with neutral gray, never competing color.

## Components
- **CTA (accent) button:** `#1473E6` fill, white bold 14px text, 32px tall, 14px horizontal padding, 16px radius. Hover `#0D66D0`, down `#095ABA`.
- **Primary button:** 2px `#4B4B4B` outline, transparent fill, gray-800 text; hover fills gray-800 with white text.
- **Secondary button:** 2px `#E1E1E1`-ish outline/fill variant in gray-700.
- **Negative button:** 2px `#D7373F` outline, red text; fills on hover.
- **Quiet button / action button:** transparent, 4px radius, gray-700 icon; hover gray-200 bg; selected gray-300 or blue tint.
- **Textfield:** 32px tall, 1px `#B3B3B3` border, 4px radius, white bg, 12px padding; hover border `#8E8E8E`; focus border `#2680EB`; invalid border `#E34850` with alert icon.
- **Quiet textfield:** bottom border only.
- **Checkbox:** 14px box, 2px gray-600 border, 2px radius; checked fills `#1473E6` (blue in emphasized variant, gray-800 otherwise).
- **Switch:** 26×14 track, gray-300 off, blue on.
- **Tabs:** 2px selection indicator under the active label, labels 14px gray-700, active gray-900.
- **Toast:** 4px radius, semantic fill (info `#2680EB`, negative `#D7373F`, positive `#268E6C`), white text, icon left.
- **Card:** white, 1px gray-300 border, 4px radius, preview area on top, 16px body padding, hover border gray-400.

## Do's and Don'ts
**Do**
- Let content carry color; keep chrome in the gray ramp.
- Use one CTA (accent) button per view; everything else outlined or quiet.
- Size controls consistently at the active scale (medium desktop, large touch).
- Use detail-style uppercase labels for panel sections.
- Show focus rings for keyboard users only.

**Don't**
- Don't square off buttons; buttons are pills.
- Don't use categorical colors for status or actions.
- Don't add heavy shadows; separate with gray steps.
- Don't mix medium and large scale components on one screen.
- Don't use pure black text; top out at gray-900.

## Agent Prompt Guide
**Base prompt:**
"Design in the style of Adobe Spectrum (light theme). White and `#F5F5F5` gray surfaces, text `#2C2C2C` / `#4B4B4B` / `#6E6E6E`. Font Adobe Clean or Source Sans 3 at 14px. One accent CTA pill button `#1473E6` (hover `#0D66D0`), 32px tall, 16px radius; other buttons are 2px outlined pills. Fields 32px tall, 1px `#B3B3B3` border, 4px radius, `#2680EB` focus. 8px spacing grid. Flat, neutral, canvas-first."

**Example components:**
1. "A properties panel: 280px wide, `#F5F5F5` background, uppercase bold 11px detail labels 'LAYER', 'APPEARANCE', 32px textfields and sliders in two-column rows with 16px gaps."
2. "An export dialog: white, 8px radius, subtle shadow, 28px bold title, divider, field rows, footer with outlined 'Cancel' pill and blue CTA pill 'Export'."
3. "An asset card grid: 4 columns, cards with 4px radius and `#E1E1E1` border, thumbnail on `#EAEAEA`, 14px bold title and 12px `#6E6E6E` meta, quiet more-actions button top-right."
