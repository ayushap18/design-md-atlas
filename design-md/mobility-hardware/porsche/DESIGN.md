---
version: alpha
name: Porsche
description: Precise, near-black-on-white automotive luxury built on the public Porsche Design System — restrained chrome, generous photography, Porsche Next type.
source: https://www.porsche.com
colors:
  primary: "#010205"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#EEEFF2"
  surface-shading: "#F6F6F7"
  text: "#010205"
  text-muted: "#6B6D70"
  contrast-high: "#535457"
  border: "#D8D8DB"
  accent: "#D5001C"
  success: "#197E10"
  warning: "#FF9B00"
  error: "#CC1922"
  info: "#2762EC"
  dark-background: "#0E0E12"
  dark-surface: "#212225"
  dark-text: "#FBFCFF"
typography:
  display:
    fontFamily: Porsche Next
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: 0
  h1: { fontFamily: Porsche Next, fontSize: 3rem, fontWeight: 400, lineHeight: 1.15 }
  h2: { fontFamily: Porsche Next, fontSize: 2.25rem, fontWeight: 400, lineHeight: 1.2 }
  h3: { fontFamily: Porsche Next, fontSize: 1.5rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Porsche Next, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: Porsche Next, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
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
    rounded: "{rounded.sm}"
    padding: 13px 26px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 13px 26px
  input:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.contrast-high}"
    rounded: "{rounded.sm}"
    padding: 13px 12px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Porsche — DESIGN.md

> Inspired by the public website of Porsche and the public Porsche Design System. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Porsche's digital surface is engineered rather than decorated. The car photography carries all the emotion; the interface around it is calm, exact and almost entirely monochrome. Think of a well-machined dashboard: every control is where you expect it, labelled plainly, with nothing ornamental.

Adjectives to hold onto: **precise, understated, premium, confident, quiet**.

Density is low on marketing pages (full-bleed hero imagery, one message per viewport) and moderate in configurators and account tools, where the system's form components take over.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#010205` | Text, primary buttons, icons — a blue-tinted near-black, never pure `#000` |
| on-primary | `#FFFFFF` | Text on primary fills |
| background | `#FFFFFF` | Base page canvas |
| surface | `#EEEFF2` | Cards, tiles, grouped form areas |
| surface-shading | `#F6F6F7` | Subtle section banding |
| text-muted | `#6B6D70` | Secondary copy, captions, helper text (contrast-medium) |
| contrast-high | `#535457` | Input borders, strong dividers |
| border | `#D8D8DB` | Hairline dividers (contrast-low) |
| accent | `#D5001C` | Porsche red — crest and rare brand moments only, not a UI color |
| success / warning / error / info | `#197E10` / `#FF9B00` / `#CC1922` / `#2762EC` | Notification states |
| dark-background / dark-surface / dark-text | `#0E0E12` / `#212225` / `#FBFCFF` | Dark theme equivalents |

Near-black and white do 95% of the work. Grey surfaces separate content without lines. State colors appear only in banners, inline notifications and field validation. Red is a brand signal, not a call to action.

## Typography
- **Porsche Next** is the proprietary family (Thin through Bold). Free fallbacks: `"Porsche Next", "Arial Narrow", Arial, "Helvetica Neue", sans-serif`; for a closer feel use **Inter** at regular weight with slightly tighter tracking.
- Headlines sit at **regular (400)** weight even at large sizes — the elegance comes from size, not boldness. Semibold (600) is reserved for small headings, labels and buttons.
- Scale is fluid: display ~72px desktop down to ~40px mobile, h1 48px, h2 36px, h3 24px, body 16px, small 14px, legal 12px.
- Sentence case everywhere. No all-caps headlines; uppercase only for tiny overline labels if at all.
- Line length capped near 70 characters for body copy.

## Layout
- 14-column-like fluid grid with wide outer safe zones; content max width roughly 1920px for imagery and ~1180px for text-heavy content.
- Section padding scales fluidly: 48px (mobile) to 96–128px (desktop) between major blocks.
- Hero: full-viewport photograph or video, headline bottom-left in white with a dark gradient scrim, one primary and one secondary button.
- Model tiles in a 2–4 column grid with consistent aspect-ratio images (often 4:3 or 16:9).
- Left alignment is the default; centering is rare and reserved for short single statements.

## Elevation & Depth
- Flat by default. Hierarchy is created with surface grey (`#EEEFF2`) against white, not shadows.
- Shadows appear only on floating layers: flyouts, modals, sticky configurator bars — a soft `0 8px 40px rgba(0,0,0,0.12)`.
- Glass/frosted overlays (`backdrop-filter: blur(32px)` with translucent white or black) are used on header bars over imagery.
- Image scrims: linear gradient from `rgba(1,2,5,0.6)` at the bottom to transparent.

## Shapes
- Radii are small and consistent: 4px for buttons and inputs, 8px for small tiles, 12px for cards and modals.
- Pills (`9999px`) for tags and some icon buttons only.
- Icons: thin, geometric, single-weight outline style at 24px, matching text color.
- Photography: studio and dynamic driving shots, rich contrast, large crops; never put the car inside a decorative frame.

## Components
- **Primary button**: `#010205` fill, white 16px label, 4px radius, ~54px tall. Hover lightens to `#212225`; focus shows a 2px `#1A44EA`-style outline offset 2px.
- **Secondary button**: transparent with 2px near-black border; on dark imagery inverts to white border and white text.
- **Ghost / link button**: text with a leading arrow icon (`→`), no underline until hover.
- **Inputs**: 2px `#535457` border, 4px radius, 54px height, label above in 16px, helper text 14px muted. Error state switches border and message to `#CC1922`.
- **Select / checkbox / radio**: same 2px border language; checked state fills near-black.
- **Cards**: `#EEEFF2` background, 12px radius, image top, title in 20–24px regular, specs as a small two-column list.
- **Navigation**: centered crest wordmark, transparent over hero then solid white on scroll; menu opens as a full-height drawer with large model names.
- **Tabs**: text tabs with a 2px underline indicator in near-black.
- **Inline notification**: tinted background of the state color at ~10%, left icon, 4px radius.

## Do's and Don'ts
**Do**
- Use `#010205` instead of pure black for text and fills.
- Keep headlines at weight 400; let size create hierarchy.
- Use grey surfaces, not borders or shadows, to group content.
- Give photography full width and plenty of breathing room.
- Keep buttons rectangular with a 4px radius.

**Don't**
- Don't use Porsche red for buttons, links or states.
- Don't add gradients, glows or colored backgrounds to UI chrome.
- Don't bold large headings or set them in all caps.
- Don't round buttons into pills.
- Don't place more than one primary button per view.

## Agent Prompt Guide
Paste-ready prompt:
> Build a page in the spirit of Porsche's website: white `#FFFFFF` canvas, near-black `#010205` text and primary buttons, grey `#EEEFF2` cards, muted text `#6B6D70`. Font: Porsche Next (fallback Inter/Arial) at regular weight for headings, sentence case. 4px radius on buttons and inputs, 12px on cards. Flat, no shadows except on modals. Full-bleed automotive photography with a dark bottom scrim and white headline. Very restrained, precise, premium.

Example component prompts:
1. "A model tile: `#EEEFF2` card, 12px radius, 16:9 car image, title '911 Carrera' 24px regular, a muted line 'From $X', and a text link 'Explore →'."
2. "A configurator footer bar: sticky, white, soft shadow, price on the left in 20px semibold, near-black primary button 'Continue' on the right with 4px radius."
3. "A contact form: labels above 2px `#535457`-bordered inputs at 54px height, error state in `#CC1922`, single primary submit button."
