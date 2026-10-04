---
version: alpha
name: Atlassian Design System
description: Calm, dense, blue-led product UI for collaboration tools like Jira and Confluence, built on semantic design tokens and an 8px grid.
source: https://atlassian.design
colors:
  primary: "#0C66E4"
  primary-hover: "#0055CC"
  primary-pressed: "#09326C"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#FFFFFF"
  surface-sunken: "#F7F8F9"
  surface-neutral: "#091E420F"
  text: "#172B4D"
  text-subtle: "#44546F"
  text-subtlest: "#626F86"
  text-disabled: "#091E424F"
  border: "#091E4224"
  border-input: "#8590A2"
  border-focused: "#388BFF"
  link: "#0C66E4"
  success: "#1F845A"
  warning: "#E2B203"
  danger: "#C9372C"
  discovery: "#6E5DC6"
  information: "#1D7AFC"
  accent: "#6E5DC6"
typography:
  display:
    fontFamily: Atlassian Sans
    fontSize: 2rem
    fontWeight: 653
    lineHeight: 1.125
    letterSpacing: 0
  h1: { fontFamily: Atlassian Sans, fontSize: 1.5rem, fontWeight: 653, lineHeight: 1.167 }
  h2: { fontFamily: Atlassian Sans, fontSize: 1.25rem, fontWeight: 653, lineHeight: 1.2 }
  h3: { fontFamily: Atlassian Sans, fontSize: 1rem, fontWeight: 653, lineHeight: 1.25 }
  body: { fontFamily: Atlassian Sans, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  body-small: { fontFamily: Atlassian Sans, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.33 }
  mono: { fontFamily: Atlassian Mono, fontSize: 0.875rem }
rounded:
  sm: 3px
  md: 4px
  lg: 8px
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
    rounded: "{rounded.sm}"
    padding: 0 12px
    height: 32px
  button-default:
    backgroundColor: "{colors.surface-neutral}"
    textColor: "{colors.text-subtle}"
    rounded: "{rounded.sm}"
    padding: 0 12px
    height: 32px
  text-field:
    backgroundColor: "#F7F8F9"
    borderColor: "{colors.border-input}"
    rounded: "{rounded.sm}"
    height: 40px
---

# Atlassian Design System — DESIGN.md

> Inspired by the public website of Atlassian Design System. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Atlassian's system powers tools people stare at for eight hours a day: issue trackers, wikis, boards. It is quiet on purpose. Navy text sits on white, a single saturated blue marks the next action, and everything else is a translucent neutral derived from the same dark navy (`#091E42` at varying alpha). Density is high — 14px body copy, 32px buttons — but generous line-height keeps it readable.

Adjectives: **dependable, compact, semantic, collaborative, unflashy**.

The whole system is token-first. Never think "light grey"; think `color.background.neutral` or `color.border`. Tokens resolve differently in light and dark themes, so components automatically flip.

## Colors
| Token | Hex | Role |
|---|---|---|
| `color.background.brand.bold` | `#0C66E4` | Primary buttons, selected nav, links |
| `…brand.bold.hovered` | `#0055CC` | Primary hover |
| `…brand.bold.pressed` | `#09326C` | Primary pressed |
| `color.text` | `#172B4D` | Default text (navy, not black) |
| `color.text.subtle` | `#44546F` | Secondary text, default button label |
| `color.text.subtlest` | `#626F86` | Metadata, placeholders, helper text |
| `color.text.disabled` | `#091E424F` | Disabled labels |
| `elevation.surface` | `#FFFFFF` | Page and card surface |
| `elevation.surface.sunken` | `#F7F8F9` | Board columns, wells, sidebars |
| `color.background.neutral` | `#091E420F` | Default buttons, chips, hover rows |
| `color.border` | `#091E4224` | Dividers, card outlines |
| `color.border.input` | `#8590A2` | Text field borders |
| `color.border.focused` | `#388BFF` | 2px focus ring |
| `color.background.success.bold` | `#1F845A` | Done lozenges, success |
| `color.background.warning.bold` | `#E2B203` | Warnings (pair with dark text) |
| `color.background.danger.bold` | `#C9372C` | Destructive actions, errors |
| `color.background.discovery.bold` | `#6E5DC6` | New features, "discovery" purple |
| `color.background.information.bold` | `#1D7AFC` | Informational banners |

Blue and navy dominate. Green, yellow, red and purple are status-only — they appear in lozenges, banners and icons, never as decorative fills.

## Typography
- **Family:** Atlassian Sans (Inter-derived), falling back to `ui-sans-serif, -apple-system, "Segoe UI", Roboto, Ubuntu, sans-serif`. Code uses Atlassian Mono, falling back to `ui-monospace, Menlo, monospace`.
- **Scale (heading tokens):** xxlarge 32/36, xlarge 28/32, large 24/28, medium 20/24, small 16/20, xsmall 14/20, xxsmall 12/16 — all weight 653 (semibold-plus) in the refreshed type.
- **Body:** `font.body` 14/20 regular; `font.body.large` 16/24 for reading-heavy pages like Confluence; `font.body.small` 12/16 for metadata.
- Sentence case for every heading, button and menu item. No all-caps except tiny section labels in navigation (12px, weight 653, subtlest color).
- No negative letter-spacing; the system relies on weight, not tracking.

## Layout
- 8px base unit with `space.050` (4px) for tight gaps. Tokens: 025=2, 050=4, 075=6, 100=8, 150=12, 200=16, 250=20, 300=24, 400=32, 500=40, 600=48, 800=64, 1000=80.
- App shell: top navigation 56px tall, collapsible left sidebar ~240–320px, main content fluid.
- Page content usually 12-column, with reading content capped near 760px (Confluence body) and wide layouts up to ~1440px.
- Forms stack vertically with 8px between label and field and 24px between field groups.
- Tables and lists are dense: 40px rows, 8px horizontal cell padding.

## Elevation & Depth
Four elevation surfaces, each with a paired shadow:
- `elevation.surface` — flat, no shadow.
- `elevation.surface.raised` — cards: `0 1px 1px #091E4240, 0 0 1px #091E424F`.
- `elevation.surface.overlay` — dropdowns, popups, modals: `0 8px 12px #091E4226, 0 0 1px #091E424F`.
- `elevation.surface.sunken` — `#F7F8F9`, used to recess regions rather than lift them.
Hover on raised cards uses `elevation.surface.raised.hovered` (`#F1F2F4`). Blanket behind modals is `#091E427D`.

## Shapes
- Radius is small: 3px on buttons, inputs and lozenges in the classic look; 4px–8px on cards and modals; 12px for large modals in the refreshed visual language. Avatars are circles; project avatars are rounded squares.
- Icons: 16px and 24px glyphs, 1.5px rounded strokes, colored with `color.icon` (`#44546F`) by default.
- Illustrations are flat, friendly, colorful spot art — used only in empty states and onboarding.

## Components
- **Primary button:** `#0C66E4` bg, white text, 32px tall, 0 12px padding, 3px radius, 14px weight 500. Hover `#0055CC`, pressed `#09326C`.
- **Default button:** `#091E420F` bg, `#44546F` text; hover `#091E4224`.
- **Subtle button:** transparent bg until hover, then `#091E420F`. Used in toolbars.
- **Danger button:** `#C9372C` bg, white text; hover `#AE2E24`.
- **Text field:** 40px tall (36px compact), `#F7F8F9` background, 2px `#8590A2` border (1px in refreshed style), 3px radius; focus turns border `#388BFF` and background white.
- **Lozenge:** uppercase 11px bold, 2px 4px padding, 3px radius. Subtle variants use tinted backgrounds (e.g. success `#DCFFF1` with `#216E4E` text).
- **Card / issue card:** white, raised shadow, 4px radius, 12px padding, 8px gap.
- **Flag (toast):** overlay elevation, 8px radius, 16px padding, icon on left in status color.
- **Avatar:** 24/32/40px circles with 2px white ring when stacked.
- **Tabs:** text-only, 2px `#0C66E4` underline on the active tab.
- **Focus:** 2px `#388BFF` outline with 2px offset on every interactive element.

## Do's and Don'ts
**Do**
- Reference semantic tokens (`color.text.subtle`) instead of raw hex so dark mode works.
- Use exactly one bold-brand button per view; pair it with default or subtle buttons.
- Use navy `#172B4D` for text, never pure black.
- Keep body text at 14px in app chrome, 16px in long-form content.
- Put status color in lozenges and icons, not large background fills.

**Don't**
- Don't round buttons beyond 4px or make them pill-shaped.
- Don't put white text on `#E2B203` warning yellow — use `#172B4D`.
- Don't stack heavy shadows; overlay elevation is the maximum.
- Don't use purple except for discovery / "new" moments.
- Don't title-case labels.

## Agent Prompt Guide
**Base prompt:**
"Design in the style of the Atlassian Design System. White surface, `#F7F8F9` sunken regions, navy text `#172B4D` with `#44546F` secondary. Primary actions in `#0C66E4` with 3px radius and 32px height. Use Atlassian Sans or Inter at 14px/20px for UI. 8px spacing grid. Subtle card shadow `0 1px 1px #091E4240, 0 0 1px #091E424F`. Status via small lozenges. Sentence case everywhere. Dense but calm."

**Example components:**
1. "An issue card: white, 4px radius, raised shadow, 12px padding. Top row: 16px type icon + issue key `PROJ-142` in 12px `#626F86`. Title 14px `#172B4D`. Bottom row: green subtle lozenge `DONE`, story-points chip, 24px avatar at right."
2. "A create-issue modal: 600px wide, 8px radius, overlay shadow, `#091E427D` blanket. Heading 20px semibold. Fields as 40px inputs with `#F7F8F9` fill. Footer right-aligned: subtle 'Cancel' + primary 'Create'."
3. "A section message banner: `#E9F2FF` background, 3px radius, 16px padding, info icon in `#1D7AFC`, 14px semibold title then body text, inline link in `#0C66E4`."
