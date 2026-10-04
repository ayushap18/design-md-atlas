---
version: alpha
name: Microsoft Fluent 2
description: "Microsoft's cross-platform design system: Segoe UI type, soft neutral surfaces, communication-blue brand color, gentle 4px corners and layered shadows."
source: https://fluent2.microsoft.design
colors:
  primary: "#0F6CBD"
  primary-hover: "#115EA3"
  primary-pressed: "#0C3B5E"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#FAFAFA"
  surface-3: "#F5F5F5"
  surface-hover: "#F5F5F5"
  text: "#242424"
  text-2: "#424242"
  text-muted: "#616161"
  text-disabled: "#BDBDBD"
  border: "#D1D1D1"
  border-subtle: "#E0E0E0"
  border-accessible: "#616161"
  accent: "#0F6CBD"
  link: "#115EA3"
  brand-subtle: "#EBF3FC"
  danger: "#D13438"
  danger-bg: "#FDF3F4"
  success: "#107C10"
  success-bg: "#F1FAF1"
  warning: "#F7630C"
  warning-bg: "#FFF9F5"
typography:
  display:
    fontFamily: Segoe UI Variable
    fontSize: 4.25rem
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  h1: { fontFamily: Segoe UI Variable, fontSize: 2rem, fontWeight: 600, lineHeight: 1.25 }
  h2: { fontFamily: Segoe UI Variable, fontSize: 1.75rem, fontWeight: 600, lineHeight: 1.29 }
  h3: { fontFamily: Segoe UI Variable, fontSize: 1.5rem, fontWeight: 600, lineHeight: 1.33 }
  subtitle: { fontFamily: Segoe UI Variable, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.4 }
  body: { fontFamily: Segoe UI Variable, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  caption: { fontFamily: Segoe UI Variable, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.33 }
  mono: { fontFamily: Consolas, fontSize: 0.875rem }
rounded:
  sm: 2px
  md: 4px
  lg: 6px
  xl: 8px
  full: 10000px
spacing:
  xxs: 2px
  xs: 4px
  s: 8px
  m: 12px
  l: 16px
  xl: 20px
  xxl: 24px
  xxxl: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    height: 32px
    padding: 5px 12px
    minWidth: 96px
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    height: 32px
  input:
    backgroundColor: "{colors.background}"
    border: 1px solid {colors.border}
    borderBottom: 1px solid {colors.border-accessible}
    rounded: "{rounded.md}"
    height: 32px
    padding: 0 10px
  card:
    backgroundColor: "{colors.background}"
    rounded: "{rounded.xl}"
    padding: 12px
---

# Microsoft Fluent 2 — DESIGN.md

> Inspired by the public website of Microsoft Fluent 2 Design System. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Fluent 2 is the shared language of Microsoft 365, Teams and Windows. It is calm and productive: white and very light gray surfaces, Segoe UI at comfortable 14px, a single communication blue for brand and action, and soft depth built from paired shadows. Components are compact (32px controls) so dense productivity apps still breathe.

Adjectives to hold: **calm, productive, soft, coherent, accessible.**

Tokens are alias-based (`colorNeutralForeground1`, `colorBrandBackground`, `borderRadiusMedium`, `shadow4`) on top of a 16-step brand ramp and neutral grey ramp.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary (colorBrandBackground) | `#0F6CBD` | Primary buttons, selected states, toggles on |
| primary-hover | `#115EA3` | Hover |
| primary-pressed | `#0C3B5E` | Pressed |
| background (NeutralBackground1) | `#FFFFFF` | Cards, inputs, app surface |
| surface (NeutralBackground2) | `#FAFAFA` | Canvas behind cards |
| surface-3 (NeutralBackground3) | `#F5F5F5` | Rails, hover rows |
| text (NeutralForeground1) | `#242424` | Primary text |
| text-2 (NeutralForeground2) | `#424242` | Icons, secondary text |
| text-muted (NeutralForeground3) | `#616161` | Captions, placeholders |
| text-disabled | `#BDBDBD` | Disabled |
| border (NeutralStroke1) | `#D1D1D1` | Control borders |
| border-subtle (NeutralStroke2) | `#E0E0E0` | Dividers, card outlines |
| border-accessible | `#616161` | Input bottom stroke (3:1 contrast) |
| link (BrandForeground1/Link) | `#115EA3` / `#0F6CBD` | Links |
| brand-subtle (BrandBackground2) | `#EBF3FC` | Selected list item bg |
| danger | `#D13438` | Errors (bg `#FDF3F4`) |
| success | `#107C10` | Success (bg `#F1FAF1`) |
| warning | `#F7630C` | Warning (bg `#FFF9F5`) |

Dominant: whites and the `#FAFAFA`/`#F5F5F5` grays. Brand blue sits on primary buttons, selection and focus-adjacent accents only. Product apps re-skin the brand ramp (Teams `#5B5FC7`, Word `#185ABD`, Excel `#107C41`).

## Typography
- **Segoe UI Variable** on Windows; web stack `"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif`. Free fallback: Selawik or Inter.
- Type ramp: caption2 10/14, caption1 12/16, body1 14/20, body2 16/22, subtitle2 16/22 600, subtitle1 20/28 600, title3 24/32 600, title2 28/36 600, title1 32/40 600, largeTitle 40/52 600, display 68/92 600.
- Weights: 400 regular, 600 semibold. Bold 700 is rare (fontWeightBold exists but is avoided).
- "Strong" variants (body1Strong) are just 600 at the same size.
- Sentence case; no all-caps labels.

## Layout
- 4px base grid; spacing tokens XXS 2, XS 4, SNudge 6, S 8, MNudge 10, M 12, L 16, XL 20, XXL 24, XXXL 32.
- Breakpoints: small 320–479, medium 480–639, large 640–1023, x-large 1024–1365, xx-large 1366–1919, xxx-large 1920+.
- App shells: 48px top bar, 48–68px left app rail, 280–320px nav pane, flexible content.
- Controls are 32px (medium); small 24px; large 40px.
- Generous internal padding on cards (12px) and dialogs (24px).

## Elevation & Depth
Fluent shadows always pair an ambient and a key shadow:
- shadow2: `0 0 2px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.14)` — cards at rest
- shadow4: `0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.14)` — cards, buttons hover
- shadow8: `0 0 2px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.14)` — raised cards
- shadow16: `0 0 2px rgba(0,0,0,.12), 0 8px 16px rgba(0,0,0,.14)` — menus, popovers, tooltips
- shadow28: `0 0 8px rgba(0,0,0,.12), 0 14px 28px rgba(0,0,0,.14)` — panels, flyouts
- shadow64: `0 0 8px rgba(0,0,0,.12), 0 32px 64px rgba(0,0,0,.14)` — dialogs

Windows surfaces add Mica and Acrylic (blurred translucent) materials. Focus indicator: 2px `#000000` inner stroke plus 1px white outer (high-visibility double ring).

## Shapes
- Radius tokens: None 0, Small 2px, Medium 4px, Large 6px, XLarge 8px, Circular.
- Buttons and inputs 4px; cards 8px; dialogs 8px; tooltips 4px; avatars and pills circular.
- Icons: **Fluent System Icons**, 20px (regular and filled pairs), rounded line ends, ~1.5px strokes. Filled variant indicates selected state.
- Illustrations are soft 3D (Fluent emoji, rounded clay-like renders).

## Components
- **Primary button**: `#0F6CBD`, white 14px/600, 32px tall, 5px 12px padding, min width 96px, 4px radius, no border. Hover `#115EA3`, pressed `#0C3B5E`.
- **Secondary (default) button**: white, 1px `#D1D1D1` border, `#242424` text; hover `#F5F5F5` bg with `#C7C7C7` border.
- **Subtle button**: transparent; hover `#F5F5F5`. **Transparent**: no bg on hover, text color shifts to brand.
- **Input**: white, 1px `#D1D1D1` border with bottom `#616161`, 4px radius, 32px tall, 14px text. Focus animates a 2px `#0F6CBD` underline across the bottom edge.
- **Card**: white, 8px radius, 12px padding, shadow4; hover shadow8 for interactive cards.
- **Tabs**: text tabs with a 3px rounded `#0F6CBD` indicator under the selected tab; selected label 600.
- **Switch**: 40×20 pill; on = `#0F6CBD` with white thumb.
- **Badge**: circular or rounded 4px, 20px, brand fill with white 12px/600 text; counter badges are circular.
- **Message bar**: 4px radius, tinted status bg, 1px status-tint border, 12px padding, icon left.
- **Dialog**: white, 8px radius, 24px padding, shadow64, title 20/28 600, actions right-aligned.

## Do's and Don'ts
**Do**
- Use 32px controls and 14px text as the default density.
- Pair shadows (ambient + key) exactly as specified.
- Keep corners at 4px for controls and 8px for containers.
- Use filled icons only for selected/active states.
- Keep brand blue for primary action and selection.

**Don't**
- Don't use heavy single-layer drop shadows.
- Don't make buttons pill-shaped.
- Don't use 700 weight or all caps.
- Don't mix multiple brand ramps in one product surface.
- Don't remove the high-contrast double focus ring.

## Agent Prompt Guide
Paste-ready:
> Build in the style of Microsoft Fluent 2 (web light). Segoe UI (fallback Inter) 14px/20px, text `#242424`, secondary `#616161`. Canvas `#FAFAFA`, cards white with 8px radius and shadow `0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.14)`. Controls 32px with 4px radius; primary `#0F6CBD` (hover `#115EA3`), secondary white with `#D1D1D1` border. 4px spacing grid. Fluent System Icons, 20px.

Example component prompts:
1. "A Teams-like left rail and list: 68px rail with 20px icons (filled when selected), 320px list pane with 56px rows, selected row `#EBF3FC`."
2. "A Fluent dialog: 8px radius, shadow64, title 'Share file' 20px/600, a 32px input, and right-aligned Cancel (secondary) + Send (primary) buttons."
3. "A settings card group: white cards with 8px radius, each with a 20px icon, 14px/600 title, 12px `#616161` description and a brand-blue switch on the right."
