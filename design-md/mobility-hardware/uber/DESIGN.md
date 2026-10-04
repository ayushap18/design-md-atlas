---
version: alpha
name: Uber
description: Monochrome black-and-white utility with heavy Uber Move headlines, rounded 8px controls and color reserved for status and maps.
source: https://www.uber.com
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F3F3F3"
  surface-alt: "#EEEEEE"
  text: "#000000"
  text-muted: "#5E5E5E"
  text-tertiary: "#757575"
  border: "#E2E2E2"
  accent: "#276EF1"
  positive: "#05944F"
  warning: "#FFC043"
  negative: "#E11900"
typography:
  display:
    fontFamily: Uber Move
    fontSize: 3.25rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1: { fontFamily: Uber Move, fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.22 }
  h2: { fontFamily: Uber Move, fontSize: 1.75rem, fontWeight: 700, lineHeight: 1.29 }
  h3: { fontFamily: Uber Move, fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.4 }
  body: { fontFamily: Uber Move Text, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  label: { fontFamily: Uber Move Text, fontSize: 1rem, fontWeight: 500, lineHeight: 1.25 }
  caption: { fontFamily: Uber Move Text, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  mono: { fontFamily: Uber Move Mono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 14px 20px
    height: 48px
  button-secondary:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: 14px 20px
  chip:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 8px 12px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    height: 48px
---

# Uber — DESIGN.md

> Inspired by the public website of Uber. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Uber looks like a well-made transit sign: black type on white, set big and bold, with nothing that does not help someone get somewhere. The marketing site leads with a ride-request form and photography of real people in real cities; the product UI is a map plus a sheet of black-and-white controls. Color is a signal, not a decoration — blue for links and selections, green for success, red for errors.

Adjectives: **utilitarian, bold, monochrome, direct, global**.

Density is medium. Headlines are large, but forms and lists are compact and scannable.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#000000` | Primary buttons, headlines, logo, dark hero bands |
| on-primary | `#FFFFFF` | Text on black |
| background | `#FFFFFF` | Default canvas |
| surface | `#F3F3F3` | Input fills, inset panels |
| surface-alt | `#EEEEEE` | Secondary buttons, chips |
| text | `#000000` | Primary content |
| text-muted | `#5E5E5E` | Secondary content |
| text-tertiary | `#757575` | Placeholders, timestamps |
| border | `#E2E2E2` | Dividers, list separators |
| accent | `#276EF1` | Links, selected route, focus |
| positive | `#05944F` | Success, earnings up, confirmations |
| warning | `#FFC043` | Surge, caution banners |
| negative | `#E11900` | Errors, cancellation |

Black and white dominate (>90% of pixels outside photography). Full-width black sections alternate with white ones to pace a long page.

## Typography
- **Families:** Uber Move (display/headings) and Uber Move Text (body/UI), both proprietary. Free fallbacks: "Inter" or "Helvetica Neue", Arial, sans-serif. For mono numerals, "IBM Plex Mono".
- **Weights:** 700 for every heading; 500 for button labels and list titles; 400 for body.
- **Scale:** 52px hero, 36px H1, 28px H2, 20px H3, 16px body, 14px caption, 12px fine print.
- **Tracking:** Slight negative (−0.01em) on display sizes only.
- **Casing:** Sentence case everywhere, including buttons ("Request now", "See prices").
- Headlines are short imperatives or statements: "Go anywhere with Uber".

## Layout
- 12-column grid, max content width 1136–1280px, 24px gutters, 64px side margins on desktop, 16–24px on mobile.
- Hero: two columns — left half is a headline above a pickup/destination form; right half is an illustration or photo with 12px rounded corners.
- Section rhythm: 64–96px vertical padding; alternating white and black bands.
- Product surfaces: full-bleed map with a bottom sheet (mobile) or left panel (desktop, ~400px) holding the controls.
- Lists use 16px vertical padding with 1px `#E2E2E2` separators that inset to align with text.

## Elevation & Depth
- Mostly flat. Hierarchy is built with color blocks (black vs. white vs. `#F3F3F3`), not shadows.
- Floating elements on maps (sheets, location pins, buttons) use `0 4px 16px rgba(0,0,0,0.16)`.
- Menus and popovers: `0 2px 8px rgba(0,0,0,0.16)`, white, 8px radius.
- Modals sit over a `rgba(0,0,0,0.5)` scrim.

## Shapes
- Controls (buttons, inputs, dropdowns): 8px radius.
- Cards and imagery: 12px radius.
- Chips, avatars, and floating map buttons: fully round.
- Iconography: solid-filled, geometric, 24px grid, black. Vehicle icons are flat side/three-quarter renderings.
- Photography: warm, documentary, real riders and drivers; often cropped into 12px-rounded rectangles.
- The pickup/drop-off form uses a signature connector: a small circle and square joined by a vertical line.

## Components
- **Primary button:** black fill, white 16px/500 label, 48px tall (36px compact), 8px radius, padding 14px 20px. Hover `#333333`; pressed `#545454`; disabled `#F3F3F3` with `#A6A6A6` text.
- **Secondary button:** `#EEEEEE` fill, black label; hover `#E2E2E2`.
- **Tertiary button:** transparent, black label with underline on hover.
- **Input:** `#F3F3F3` fill, no border at rest, 8px radius, 48px tall; focus adds 2px black border and white fill. Leading icon 24px.
- **Chip:** pill, `#EEEEEE` fill, 14px/500 text, 8px 12px padding; selected chip inverts to black/white.
- **Card:** white, 12px radius, 1px `#E2E2E2` border or no border on gray sections; 16–24px padding.
- **Nav bar:** black header, 64px tall, white wordmark left, 16px/500 links, right-aligned "Log in" text and "Sign up" white pill-shaped button.
- **Banner:** full-width colored strip (blue/green/yellow/red at 10% tint for light, solid for urgent), 16px padding, leading icon.
- **List row:** 64–72px tall, icon left, title 16px/500 + subtitle 14px muted, chevron or price right.

## Do's and Don'ts
**Do**
- Default every primary action to black on white.
- Set headings in heavy 700 weight and keep them short.
- Use alternating black and white bands to structure long pages.
- Reserve color strictly for state: blue = selected/link, green = success, red = error, yellow = caution.
- Use solid filled icons in a single color.

**Don't**
- Don't introduce brand gradients or multicolor palettes.
- Don't use pill shapes for primary rectangular buttons in forms; keep 8px.
- Don't use light font weights for headings.
- Don't put more than one primary black button in a group.
- Don't add heavy shadows to cards on white pages.

## Agent Prompt Guide
**Base prompt:**
"Design in an Uber-inspired style: black `#000000` and white UI, Inter 700 headlines (stand-in for Uber Move), 16px body, sentence case. Buttons 48px tall, 8px radius, black fill. Inputs `#F3F3F3` fill, no border, 8px radius. Color only for state: blue `#276EF1`, green `#05944F`, red `#E11900`. Flat sections, shadows only on floating map elements."

**Example component prompts:**
1. "Ride request card: headline 'Go anywhere with Uber' 52px/700, two stacked `#F3F3F3` inputs 'Pickup location' and 'Dropoff location' joined by a circle-line-square connector, then a black 'See prices' button, 8px radius."
2. "Vehicle option list: rows 72px tall with vehicle illustration left, 'UberX' 16px/500 and '4 min away · 3:42 PM' 14px `#5E5E5E`, price right-aligned 16px/500; selected row has 2px black border, 8px radius."
3. "Black footer band: white wordmark, four columns of 16px white links, 'Download the app' row with two white-outlined store buttons."
