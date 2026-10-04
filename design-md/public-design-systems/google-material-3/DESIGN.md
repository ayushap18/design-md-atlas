---
version: alpha
name: Google Material 3
description: "Google's Material Design 3 (Material You): tonal color roles generated from a seed, Roboto type scale, pill buttons and generous rounded shapes."
source: https://m3.material.io
colors:
  primary: "#6750A4"
  on-primary: "#FFFFFF"
  primary-container: "#EADDFF"
  on-primary-container: "#21005D"
  secondary: "#625B71"
  secondary-container: "#E8DEF8"
  on-secondary-container: "#1D192B"
  tertiary: "#7D5260"
  tertiary-container: "#FFD8E4"
  background: "#FEF7FF"
  surface: "#FEF7FF"
  surface-container-lowest: "#FFFFFF"
  surface-container-low: "#F7F2FA"
  surface-container: "#F3EDF7"
  surface-container-high: "#ECE6F0"
  surface-container-highest: "#E6E0E9"
  text: "#1D1B20"
  text-muted: "#49454F"
  border: "#79747E"
  outline-variant: "#CAC4D0"
  accent: "#7D5260"
  error: "#B3261E"
  error-container: "#F9DEDC"
  inverse-surface: "#322F35"
  inverse-primary: "#D0BCFF"
typography:
  display:
    fontFamily: Roboto
    fontSize: 3.5625rem
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.25px
  h1: { fontFamily: Roboto, fontSize: 2rem, fontWeight: 400, lineHeight: 1.25 }
  h2: { fontFamily: Roboto, fontSize: 1.75rem, fontWeight: 400, lineHeight: 1.29 }
  h3: { fontFamily: Roboto, fontSize: 1.5rem, fontWeight: 400, lineHeight: 1.33 }
  title: { fontFamily: Roboto, fontSize: 1.375rem, fontWeight: 400, lineHeight: 1.27 }
  body: { fontFamily: Roboto, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5, letterSpacing: 0.5px }
  body-medium: { fontFamily: Roboto, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43, letterSpacing: 0.25px }
  label: { fontFamily: Roboto, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.43, letterSpacing: 0.1px }
  mono: { fontFamily: Roboto Mono, fontSize: 0.875rem }
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 28px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-filled:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    height: 40px
    padding: 0 24px
  button-tonal:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    rounded: "{rounded.full}"
    height: 40px
  fab:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    rounded: "{rounded.lg}"
    size: 56px
  card-filled:
    backgroundColor: "{colors.surface-container-highest}"
    rounded: "{rounded.md}"
    padding: 16px
  text-field-filled:
    backgroundColor: "{colors.surface-container-highest}"
    rounded: 4px 4px 0 0
    height: 56px
    padding: 0 16px
---

# Google Material 3 — DESIGN.md

> Inspired by the public website of Google Material Design 3. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Material 3 (Material You) is expressive, personal and tonal. Instead of a fixed palette, a single seed color generates tonal palettes that map to **color roles** (primary, secondary, tertiary, surface containers). Surfaces are tinted rather than pure white, elevation is shown as tone more than shadow, buttons are full pills and containers have generous rounding. The baseline scheme is built from seed `#6750A4`.

Adjectives to hold: **tonal, rounded, friendly, adaptive, systematic.**

Every color is used in a pair: `primary` with `on-primary`, `primary-container` with `on-primary-container`. Never place text on a role without its matching `on-` role.

## Colors
| Role | Hex | Use |
|---|---|---|
| primary | `#6750A4` | Filled buttons, active indicators, key actions |
| on-primary | `#FFFFFF` | Text/icons on primary |
| primary-container | `#EADDFF` | FAB, selected chips, emphasis containers |
| on-primary-container | `#21005D` | Content on primary-container |
| secondary | `#625B71` | Less prominent accents |
| secondary-container | `#E8DEF8` | Tonal buttons, nav active indicator |
| on-secondary-container | `#1D192B` | Content on secondary-container |
| tertiary | `#7D5260` | Contrasting accent (accent token) |
| tertiary-container | `#FFD8E4` | Complementary highlights |
| surface / background | `#FEF7FF` | App background |
| surface-container-lowest | `#FFFFFF` | Lowest containers |
| surface-container-low | `#F7F2FA` | Elevated cards, nav drawer modal |
| surface-container | `#F3EDF7` | Navigation bar, menus |
| surface-container-high | `#ECE6F0` | Dialogs, search bar |
| surface-container-highest | `#E6E0E9` | Filled cards, filled text fields |
| on-surface (text) | `#1D1B20` | Primary text |
| on-surface-variant (text-muted) | `#49454F` | Secondary text, icons |
| outline (border) | `#79747E` | Outlined buttons, text field outlines |
| outline-variant | `#CAC4D0` | Dividers, card outlines |
| error / error-container | `#B3261E` / `#F9DEDC` | Errors |
| inverse-surface / inverse-primary | `#322F35` / `#D0BCFF` | Snackbars |

Dark scheme baseline: primary `#D0BCFF`, on-primary `#381E72`, surface `#141218`, on-surface `#E6E0E9`.

State layers: overlay `on-*` color at 8% (hover), 10% (focus/pressed), 16% (dragged). Disabled content = on-surface at 38%; disabled containers at 12%.

## Typography
- **Roboto** (brand: Google Sans for Google products); **Roboto Flex** for variable use. Free.
- Scale (size/line-height/tracking):
  - Display L 57/64/-0.25, M 45/52/0, S 36/44/0
  - Headline L 32/40, M 28/36, S 24/32
  - Title L 22/28 400, M 16/24 500 +0.15, S 14/20 500 +0.1
  - Body L 16/24 +0.5, M 14/20 +0.25, S 12/16 +0.4
  - Label L 14/20 500 +0.1, M 12/16 500 +0.5, S 11/16 500 +0.5
- Only two weights: 400 regular and 500 medium.
- Sentence case for buttons (M3 dropped the M2 all-caps button).

## Layout
- 4dp grid; most spacing in 8dp steps (8, 16, 24, 32).
- Window size classes: compact < 600, medium 600–839, expanded 840–1199, large 1200–1599, extra-large ≥ 1600.
- Margins: 16dp compact, 24dp medium and up. Pane spacer 24dp.
- Navigation adapts: bottom navigation bar (80dp tall) on compact, navigation rail (80dp wide) on medium/expanded, drawer (360dp) on large.
- Top app bar: small 64dp, medium 112dp, large 152dp.
- Touch targets ≥ 48×48dp.

## Elevation & Depth
- Six levels: 0 (0dp), 1 (1dp), 2 (3dp), 3 (6dp), 4 (8dp), 5 (12dp).
- Elevation is expressed mainly by **surface container tone**, not shadow. Shadows appear only when needed for separation (FAB, menus, elevated cards).
- Level 1 shadow approximation: `0 1px 2px rgba(0,0,0,.3), 0 1px 3px 1px rgba(0,0,0,.15)`.
- Level 3: `0 1px 3px rgba(0,0,0,.3), 0 4px 8px 3px rgba(0,0,0,.15)`.
- Scrim for modals: `#000000` at 32%.

## Shapes
- Shape scale: none 0, extra-small 4dp, small 8dp, medium 12dp, large 16dp, extra-large 28dp, full.
- Mapping: buttons & chips full/8dp; cards 12dp; FAB 16dp (large FAB 28dp); dialogs 28dp; bottom sheets 28dp top corners; menus 4dp; text fields 4dp top corners (filled) or all (outlined); snackbars 4dp.
- Icons: **Material Symbols** (variable: fill 0/1, weight 400, grade 0, optical size 24), Outlined style default; filled for selected.

## Components
- **Filled button**: `#6750A4`, white Label Large 14/20 500, 40dp tall, 24dp horizontal padding (16dp leading with icon), full radius. Hover adds 8% white state layer + level 1 shadow.
- **Tonal button**: `#E8DEF8` with `#1D192B` text. **Outlined**: 1dp `#79747E` border, `#6750A4` text. **Text button**: 12dp padding, `#6750A4` text. **Elevated**: `#F7F2FA` + level 1 shadow.
- **FAB**: 56dp square, 16dp radius, `#EADDFF` with `#21005D` 24dp icon, level 3 shadow. Extended FAB 56dp tall with label.
- **Cards**: elevated (`#F7F2FA`, level 1), filled (`#E6E0E9`), outlined (white/surface with 1dp `#CAC4D0`) — all 12dp radius, 16dp padding.
- **Filled text field**: `#E6E0E9`, 56dp tall, 4dp top radius, 1dp `#49454F` bottom indicator becoming 2dp `#6750A4` on focus; floating label animates to 12sp.
- **Outlined text field**: 1dp `#79747E` border, 4dp radius, 2dp primary on focus, label notches into border.
- **Navigation bar**: `#F3EDF7`, 80dp, active indicator a 64×32dp pill in `#E8DEF8` behind the icon, labels Label Medium.
- **Chips**: 32dp tall, 8dp radius, 1dp `#79747E` outline; selected filter chip `#E8DEF8` with check icon.
- **Dialog**: `#ECE6F0`, 28dp radius, 24dp padding, headline small title, text buttons right-aligned.
- **Switch**: 52×32 track, full radius; on = primary track with white handle 24dp.

## Do's and Don'ts
**Do**
- Always pair a color role with its `on-` role.
- Express elevation through surface container tones first.
- Use full-pill buttons and 12dp cards consistently.
- Use state layers (8/10/16% overlays) for interaction feedback.
- Generate the scheme from one seed color when re-theming.

**Don't**
- Don't use pure `#FFFFFF` as the app background in the baseline scheme — use `#FEF7FF`.
- Don't use all-caps button labels (that's Material 2).
- Don't use weights other than 400/500.
- Don't hard-code shadows on every card.
- Don't put primary-colored text on primary-container without checking contrast.

## Agent Prompt Guide
Paste-ready:
> Build in the style of Google Material 3 (baseline light). Roboto, body 16/24 with 0.5px tracking, labels 14/20 500. Background `#FEF7FF`, text `#1D1B20`, muted `#49454F`, outline `#79747E`, dividers `#CAC4D0`. Primary `#6750A4` (on-primary white), secondary container `#E8DEF8`, primary container `#EADDFF`. Buttons 40px full-pill; cards 12px radius; dialogs 28px; FAB 56px with 16px radius. Elevation via surface tones (`#F7F2FA` → `#E6E0E9`). Material Symbols Outlined icons.

Example component prompts:
1. "An M3 mobile home screen: medium top app bar, a list of outlined cards (12dp radius), a 56dp `#EADDFF` FAB bottom-right, and an 80dp navigation bar with a `#E8DEF8` pill indicator on the active tab."
2. "An M3 sign-up form: outlined text fields (56dp, 4dp radius) with floating labels, a filled pill 'Create account' button and a text button 'Sign in instead'."
3. "A filter row of M3 chips: 32dp, 8dp radius, outlined; selected ones `#E8DEF8` with a leading check icon."
