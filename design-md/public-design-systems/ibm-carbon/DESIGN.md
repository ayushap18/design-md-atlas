---
version: alpha
name: IBM Carbon
description: "IBM's open-source enterprise design system: square corners, IBM Plex type, a strict 2x grid, and a single Blue 60 interactive color."
source: https://carbondesignsystem.com
colors:
  primary: "#0F62FE"
  primary-hover: "#0050E6"
  primary-active: "#002D9C"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F4F4F4"
  layer-02: "#FFFFFF"
  layer-accent: "#E0E0E0"
  text: "#161616"
  text-muted: "#525252"
  text-placeholder: "#A8A8A8"
  border: "#E0E0E0"
  border-strong: "#8D8D8D"
  accent: "#0F62FE"
  link: "#0F62FE"
  focus: "#0F62FE"
  button-secondary: "#393939"
  button-tertiary: "#0F62FE"
  danger: "#DA1E28"
  success: "#24A148"
  warning: "#F1C21B"
  info: "#0043CE"
  inverse: "#393939"
typography:
  display:
    fontFamily: IBM Plex Sans
    fontSize: 3.375rem
    fontWeight: 300
    lineHeight: 1.19
    letterSpacing: 0
  h1: { fontFamily: IBM Plex Sans, fontSize: 2rem, fontWeight: 400, lineHeight: 1.25 }
  h2: { fontFamily: IBM Plex Sans, fontSize: 1.75rem, fontWeight: 400, lineHeight: 1.29 }
  h3: { fontFamily: IBM Plex Sans, fontSize: 1.25rem, fontWeight: 400, lineHeight: 1.4 }
  heading-01: { fontFamily: IBM Plex Sans, fontSize: 0.875rem, fontWeight: 600, lineHeight: 1.43, letterSpacing: 0.16px }
  body: { fontFamily: IBM Plex Sans, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43, letterSpacing: 0.16px }
  body-long: { fontFamily: IBM Plex Sans, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  label: { fontFamily: IBM Plex Sans, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.33, letterSpacing: 0.32px }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.875rem, lineHeight: 1.43, letterSpacing: 0.32px }
rounded:
  none: 0px
  sm: 2px
  md: 4px
  full: 9999px
spacing:
  "01": 2px
  "02": 4px
  "03": 8px
  "04": 12px
  "05": 16px
  "06": 24px
  "07": 32px
  "08": 40px
  "09": 48px
  "10": 64px
  "11": 80px
  "12": 96px
  "13": 160px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: 48px
    padding: 14px 63px 14px 15px
  button-secondary:
    backgroundColor: "{colors.button-secondary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    height: 48px
  text-input:
    backgroundColor: "{colors.surface}"
    borderBottom: 1px solid {colors.border-strong}
    rounded: "{rounded.none}"
    height: 40px
    padding: 0 16px
  tile:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: 16px
  tag:
    rounded: "{rounded.full}"
    height: 24px
    padding: 0 8px
---

# IBM Carbon — DESIGN.md

> Inspired by the public website of IBM Carbon Design System. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Carbon is engineered rather than decorated. Everything sits on a visible 2x grid, corners are square, and color is reserved almost entirely for interaction: if something is Blue 60, you can click it. Interfaces feel like well-labeled instrument panels — dense, calm, gray-on-white, with type doing the hierarchy work.

Adjectives to hold: **rational, rectilinear, dense, neutral, precise.**

Carbon ships four themes: White (default here), Gray 10, Gray 90 and Gray 100. Tokens are role-based (`$background`, `$layer-01`, `$text-primary`) so the same component recolors across themes.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary / interactive | `#0F62FE` | Blue 60 — primary buttons, links, focus, selected states |
| primary-hover | `#0050E6` | Primary button hover |
| primary-active | `#002D9C` | Blue 80 — pressed |
| background | `#FFFFFF` | Page background (White theme) |
| surface / layer-01 | `#F4F4F4` | Gray 10 — tiles, fields, side panels |
| layer-02 | `#FFFFFF` | Containers nested on layer-01 |
| layer-accent | `#E0E0E0` | Gray 20 — dividers on layers, skeletons |
| text / text-primary | `#161616` | Gray 100 — body and headings |
| text-muted / text-secondary | `#525252` | Gray 70 — labels, helper text |
| text-placeholder | `#A8A8A8` | Gray 40 |
| border / border-subtle | `#E0E0E0` | Hairlines between rows |
| border-strong | `#8D8D8D` | Gray 50 — field bottom borders |
| button-secondary | `#393939` | Gray 80 secondary button |
| danger / support-error | `#DA1E28` | Red 60 |
| success | `#24A148` | Green 50 |
| warning | `#F1C21B` | Yellow 30 (always with dark text) |
| info | `#0043CE` | Blue 70 |

Dominant: white, Gray 10 and Gray 100. Blue 60 is a functional accent — never decorative fills, never gradients. Data visualization uses a separate categorical palette (Purple 70 `#6929C4`, Cyan 50 `#1192E8`, Teal 70 `#005D5D`, Magenta 70 `#9F1853`…).

## Typography
- **IBM Plex Sans** for UI, **IBM Plex Mono** for code, **IBM Plex Serif** for editorial. All are free (OFL). Fallback: `'Helvetica Neue', Arial, sans-serif`.
- Productive scale (product UI): body-01 14/20, body-02 16/24, heading-01 14/20 semibold, heading-02 16/24 semibold, heading-03 20/28, heading-04 28/36, heading-05 32/40, heading-06 42/50 light, heading-07 54/64 light.
- Weights: 300 Light for large display, 400 Regular for almost everything, 600 SemiBold for small headings and emphasis. Never bold (700).
- Small sizes carry positive tracking: 0.16px at 14px, 0.32px at 12px.
- Sentence case everywhere — buttons, titles, menu items.
- Large headlines are light, not heavy; contrast comes from size.

## Layout
- 16-column 2x Grid. Breakpoints: sm 320 (4 col), md 672 (8 col), lg 1056 (16 col), xlg 1312, max 1584.
- Gutter 32px (16px each side of a column); margins 0 at sm, 16px from md upward.
- Spacing scale is `$spacing-01`…`$spacing-13`: 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 160px.
- Text and components hang on the column's left edge — flush-left alignment, never centered body copy.
- UI shell header is 48px tall, Gray 100 background; side nav 256px wide.
- Data tables are the workhorse: row heights 24/32/40/48/64px (compact to tall), default 48px.

## Elevation & Depth
- Carbon is flat. Depth comes from **layering tones** (white → Gray 10 → white), not shadows.
- Shadows only on floating elements: menus, tooltips, popovers, modals — `0 2px 6px rgba(0,0,0,0.3)`.
- Modal overlay: `rgba(22,22,22,0.5)`.
- Focus: 2px inset `#0F62FE` border plus 1px inset white on filled buttons.

## Shapes
- Square corners by default (0px) on buttons, inputs, tiles, modals, notifications.
- Exceptions: tags and toggles are pill-shaped; checkboxes 2px; some newer AI-labeled components use 4–8px.
- Icons: Carbon icon set, 16px and 20px, 1px-ish strokes on a 32px artboard, square line caps.
- Pictograms for marketing (larger, line-based). Imagery is restrained, often duotone or abstract.

## Components
- **Primary button**: `#0F62FE` bg, white 14px text, 48px tall (lg), 40px (md), 32px (sm). Padding `14px 63px 14px 15px` — text left-aligned, icon right-aligned at 16px. Hover `#0050E6`, active `#002D9C`.
- **Secondary** `#393939`, **tertiary** transparent with 1px Blue 60 border, **ghost** transparent with Blue 60 text, **danger** `#DA1E28`.
- Paired buttons in a modal footer fill the full width, 50/50, with no gap.
- **Text input**: Gray 10 fill, no side borders, 1px `#8D8D8D` bottom border, 40px tall. Label 12px Gray 70 above, helper text 12px below. Focus: 2px Blue 60 outline. Error: 2px `#DA1E28` outline plus warning icon inside the field.
- **Tile**: Gray 10, 16px padding, no border, no radius. Clickable tiles show hover `#E8E8E8`.
- **Notification**: inline, 3px left border in status color, tinted background (error `#FFF1F1`), 14px text.
- **Tag**: pill, 24px tall, 12px text; colors pull from the 20-grade palette (e.g. Blue 20 `#D0E2FF` bg, Blue 70 text).
- **Tabs**: 2px bottom indicator in Blue 60 on the selected tab; contained variant uses Gray 20 tabs.
- **Header**: Gray 100 bar, 48px, white product name with "IBM" in regular and product in semibold.

## Do's and Don'ts
**Do**
- Keep every corner square unless the component is a tag or toggle.
- Snap all spacing to the 2/4/8/12/16/24/32 scale.
- Use Blue 60 only for things that are interactive or selected.
- Use tone shifts (white/Gray 10) to separate regions.
- Write sentence-case labels.

**Don't**
- Don't add drop shadows to cards or tiles.
- Don't center-align button text; it sits left with a trailing icon.
- Don't use 700 weight or all caps.
- Don't put white text on Yellow 30.
- Don't invent extra brand colors; pull from the IBM palette grades (10–100).

## Agent Prompt Guide
Paste-ready:
> Build in the style of IBM Carbon (White theme). Font IBM Plex Sans, 14px/20px body with 0.16px tracking. Background `#FFFFFF`, layers `#F4F4F4`, text `#161616`/`#525252`, borders `#E0E0E0`, interactive `#0F62FE`. All corners 0px. Flat — no shadows except floating menus (`0 2px 6px rgba(0,0,0,.3)`). 16-column grid, 32px gutters, spacing 4/8/16/24/32/48px. Sentence case.

Example component prompts:
1. "A Carbon data table: 48px rows, `#E0E0E0` row dividers, header row `#E0E0E0` bg with 14px semibold text, zebra off, a toolbar above with a search field and a 48px Blue 60 primary button 'Add item' with a + icon on the right."
2. "A Carbon modal: white, 0 radius, 16px padding header with 20px title, body 14px text, full-width footer split into a `#393939` 'Cancel' and `#0F62FE` 'Save' button, each 64px tall."
3. "A login form: Gray 10 inputs with `#8D8D8D` bottom border, 12px labels, a full-width 48px primary button with an arrow icon right-aligned."
