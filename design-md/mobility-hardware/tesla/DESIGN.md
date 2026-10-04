---
version: alpha
name: Tesla
description: Full-bleed product photography with near-invisible chrome, one electric-blue call to action, and a strict charcoal-and-white palette.
source: https://www.tesla.com
colors:
  primary: "#3E6AE1"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F4F4F4"
  text: "#171A20"
  text-muted: "#5C5E62"
  border: "#D0D1D2"
  accent: "#3E6AE1"
  charcoal: "#393C41"
  frost: "rgba(244,244,244,0.65)"
  error: "#B74134"
typography:
  display:
    fontFamily: Universal Sans Display
    fontSize: 2.5rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  h1: { fontFamily: Universal Sans Display, fontSize: 2.5rem, fontWeight: 500, lineHeight: 1.2 }
  h2: { fontFamily: Universal Sans Display, fontSize: 1.75rem, fontWeight: 500, lineHeight: 1.25 }
  h3: { fontFamily: Universal Sans Text, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Universal Sans Text, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  label: { fontFamily: Universal Sans Text, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.2 }
  caption: { fontFamily: Universal Sans Text, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.33 }
rounded:
  sm: 4px
  md: 4px
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
    rounded: "{rounded.sm}"
    padding: 0 24px
    height: 40px
    minWidth: 264px
  button-secondary:
    backgroundColor: "{colors.frost}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 0 24px
    height: 40px
  nav-link:
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 4px 16px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    height: 40px
---

# Tesla — DESIGN.md

> Inspired by the public website of Tesla. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Tesla's web presence behaves like a showroom with the lights dimmed on everything except the car. Each section is a single viewport of photography or video, with a model name, a one-line hook and two buttons floating over it. The interface itself is quiet to the point of absence: thin type, no ornaments, no drop shadows, no illustrations.

Adjectives to hold onto: **cinematic, reductive, confident, engineered, calm**.

Density is extremely low on marketing pages and moderately high in the configurator and account areas, where the same restraint is applied to dense lists of options and prices.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#3E6AE1` | The single blue CTA ("Order Now", "Continue") |
| on-primary | `#FFFFFF` | Text on blue |
| background | `#FFFFFF` | Page and configurator canvas |
| surface | `#F4F4F4` | Input fills, option tiles, secondary areas |
| text | `#171A20` | Headlines, body, nav — a blue-tinted near black |
| charcoal | `#393C41` | Secondary body copy, dark secondary buttons |
| text-muted | `#5C5E62` | Captions, disclaimers, metadata |
| border | `#D0D1D2` | Dividers, outlined tiles |
| frost | `rgba(244,244,244,0.65)` | Translucent secondary button over imagery |
| error | `#B74134` | Validation messages |

Photography provides nearly all of the color. The UI layer is charcoal, white and gray; blue appears once per viewport at most.

## Typography
- **Family:** Universal Sans Display for headings, Universal Sans Text for everything else (Tesla's proprietary geometric grotesk; it replaced Gotham). Free fallbacks: Inter, then "Helvetica Neue", Arial.
- **Weights:** 400 for body, 500 for headings and buttons. Nothing bold, nothing light.
- **Scale:** 40px hero model name, 28px section titles, 20px sub-heads, 14px body and buttons, 12px legal text.
- **Casing:** Sentence case and Title Case. No all-caps headlines; model names are set as written ("Model Y", "Cybertruck").
- **Tracking:** Default. The type relies on generous whitespace, not letter-spacing, for its airy feel.
- Small body size (14px) is a signature: copy reads as captions to the imagery.

## Layout
- Marketing pages: stacked 100vh sections, each with headline anchored top-center (~15vh from top) and a button pair anchored bottom-center.
- Button pair sits side by side on desktop with 24px gap; stacks full width on mobile with 16px gap.
- Header: 56px tall, transparent over hero, logo left, centered link group, utility icons right.
- Configurator: two-pane — large sticky vehicle render (~70%) left, scrolling 360–420px options column right.
- Content max width ~1440px; text columns rarely exceed 600px.
- Generous spacing: 32–64px between blocks; inside forms, 16–24px.

## Elevation & Depth
- Essentially flat. No card shadows on marketing pages.
- Depth comes from the photography and from translucent, blurred surfaces: header menus and secondary buttons use `backdrop-filter: blur(8px)` over the image.
- Mega-menu and modal panels: solid white with a single soft shadow `0 8px 16px rgba(0,0,0,0.12)` and a dimmed backdrop `rgba(0,0,0,0.4)`.
- Hover state on nav links is a filled pill `rgba(0,0,0,0.05)` rather than an underline.

## Shapes
- Buttons and inputs: 4px radius — small, almost square.
- Option tiles and media cards: 12px radius on newer pages.
- Color and wheel swatches: perfect circles, 32–40px, with a 2px ring when selected.
- Icons: thin 1.5px outline, monochrome charcoal; no filled or multicolor icons.
- Imagery: edge-to-edge, never framed, never rounded on hero sections.

## Components
- **Primary button:** `#3E6AE1` fill, white 14px/500 label, 40px tall, 4px radius, min-width ~264px on desktop. Hover darkens to `#3457B1`. Transition 0.33s ease.
- **Secondary button:** frosted `rgba(244,244,244,0.65)` with blur over imagery, `#171A20` label. On white backgrounds it becomes `#F4F4F4` solid.
- **Tertiary / dark button:** `#393C41` fill, white label, used on light sections when blue would compete.
- **Nav link:** 14px/500, 4px 16px padding, hover fill `rgba(0,0,0,0.05)` with 4px radius.
- **Input:** `#F4F4F4` fill, no visible border at rest, 40px tall, 4px radius; focus adds a 1px `#171A20` inset ring. Labels sit above in 14px charcoal.
- **Option tile (configurator):** white with 1px `#D0D1D2` border; selected shows 3px `#3E6AE1` inset border. Price aligned right in muted text.
- **Stat block:** large number in 28px/500, unit and label beneath in 12–14px muted ("358 mi / Range (EPA est.)"), three or four across.
- **Footer:** single centered row of 12px muted links, no columns.

## Do's and Don'ts
**Do**
- Let one photograph or video fill each viewport; put minimal text over it.
- Use exactly one blue button per view; pair it with a frosted or gray secondary.
- Keep all UI type at 400/500 weight and 12–40px size.
- Use translucent blurred surfaces for anything sitting on imagery.
- Present specs as large numerals with tiny labels.

**Don't**
- Don't add gradients, illustrations, badges or decorative icons.
- Don't use bold (700) weights or all-caps headlines.
- Don't round buttons into pills or exceed 4px radius on controls.
- Don't introduce a second accent color; status colors only for errors.
- Don't add drop shadows to cards on marketing sections.

## Agent Prompt Guide
**Base prompt:**
"Design in a Tesla-inspired style: full-viewport product photography, white and `#171A20` charcoal UI, one `#3E6AE1` primary button per view. Font: Inter (stand-in for Universal Sans) at 400/500 only, 14px body, 40px headlines. Buttons 40px tall, 4px radius, min-width 264px. Flat surfaces, translucent blurred secondary buttons, no shadows, no gradients."

**Example component prompts:**
1. "Hero section: 100vh background image, title 'Model Y' 40px/500 centered 15vh from top, subtitle 14px underlined link, bottom-centered pair of buttons — blue 'Order Now' and frosted `rgba(244,244,244,0.65)` 'Demo Drive', 24px gap."
2. "Configurator sidebar: 400px column, trim options as white tiles with 1px `#D0D1D2` border, selected tile gets 3px `#3E6AE1` inset border, price right-aligned in `#5C5E62`, circular paint swatches 40px with 2px ring when active."
3. "Spec row: three columns, each a 28px/500 number with unit and a 12px muted label below, no dividers, centered over a dark image with white text."
