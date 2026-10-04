---
version: alpha
name: Polestar
description: Scandinavian electric-performance minimalism — stark white and graphite, square edges, airy Unica-style type and a single flash of Swedish gold.
source: https://www.polestar.com
colors:
  primary: "#101114"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F2F2F2"
  surface-dark: "#101114"
  text: "#101114"
  text-muted: "#6B6E73"
  border: "#D9D9D9"
  accent: "#D96C00"
  link: "#101114"
  error: "#C8102E"
typography:
  display:
    fontFamily: Polestar Unica
    fontSize: 4rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: Polestar Unica, fontSize: 2.75rem, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.015em }
  h2: { fontFamily: Polestar Unica, fontSize: 2rem, fontWeight: 400, lineHeight: 1.15 }
  h3: { fontFamily: Polestar Unica, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Polestar Unica, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  label: { fontFamily: Polestar Unica, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.875rem }
rounded:
  sm: 0px
  md: 0px
  lg: 4px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 40px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 14px 28px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 14px 28px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: 24px
---

# Polestar — DESIGN.md

> Inspired by the public website of Polestar. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Polestar presents electric performance cars like objects in a gallery. The interface is reduced to white space, a graphite near-black, crisp square edges and calm type. Everything feels considered and cool in temperature, with a single warm "Swedish gold" note borrowed from the cars' signature seatbelts and brake calipers.

Adjectives: **minimal, architectural, cool, confident, Scandinavian**.

Density is very low. One idea per screen, oversized imagery, long scroll rhythm with big vertical gaps.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#101114` | Text, primary buttons, dark sections (graphite, not pure black) |
| on-primary | `#FFFFFF` | Text on graphite |
| background | `#FFFFFF` | Default canvas |
| surface | `#F2F2F2` | Spec tiles, cards, input fills |
| surface-dark | `#101114` | Inverted feature bands |
| text-muted | `#6B6E73` | Captions, footnotes, spec labels |
| border | `#D9D9D9` | Hairline dividers |
| accent | `#D96C00` | Swedish gold — tiny highlights, active indicators, Performance-pack callouts |
| error | `#C8102E` | Form validation |

Dominant: white and graphite in near-equal measure across a page (light sections alternate with dark full-bleed bands). Gold is accent-only; if you can see it from across the room, there's too much.

## Typography
- Proprietary **Polestar Unica** (derived from Unica77). Free fallbacks: **Inter**, **Helvetica Neue**, Arial. For a closer match, Inter with `font-feature-settings: "ss01"` off and slightly tighter tracking.
- Headings are regular weight (400) and large; medium (500) only for small headings, labels, and buttons.
- Tight negative tracking on display sizes (-0.02em), neutral tracking at body sizes.
- Sentence case. Model names written as "Polestar 4", numerals set plainly.
- Spec numbers (range, kW, 0–100) get display treatment: large number, small muted unit and label beneath.

## Layout
- 12-column grid, 1440px max content width with 24px (mobile) to 64px (desktop) gutters on the outer edge.
- Section spacing 96–160px on desktop; 56–72px on mobile.
- Heroes are full-bleed (100vw, 80–100vh) with a short headline bottom-left and a pair of buttons.
- Spec rows: 3–4 columns of big numbers separated by thin vertical rules.
- Strong left alignment; text blocks rarely exceed 6 columns.

## Elevation & Depth
- No shadows in standard UI. Depth comes from alternating white and graphite bands and from photography.
- Dividers are 1px `#D9D9D9` hairlines; on dark bands, `rgba(255,255,255,0.16)`.
- Sticky header becomes solid white with a bottom hairline on scroll; over imagery it is transparent with white logotype.
- Modals and drawers: full-height side sheets on graphite or white, with a 40% black overlay.

## Shapes
- Square corners: 0px radius on buttons, inputs, cards and images. This is the single most identifying shape rule.
- 4px only on very small chips; full pills only for toggles or carousel dots.
- Icons: 1.5px stroke line icons, geometric, 24px, monochrome.
- The Polestar star mark (two chevrons forming a four-point star) should appear only as a logo, never as decoration.
- Imagery: cool-toned, desaturated environments (concrete, snow, overcast roads), cars often shot head-on or in strict profile.

## Components
- **Primary button**: graphite `#101114` fill, white 14–16px medium label, 0 radius, 48–52px tall. Hover shifts to `#2B2D31`. On dark bands it inverts to white fill and graphite text.
- **Secondary button**: 1px graphite border, transparent fill; hover fills graphite.
- **Text link**: underlined 1px, offset 4px; underline disappears on hover.
- **Inputs**: `#F2F2F2` fill, no border, 0 radius, 52px tall, 1px bottom border `#101114` on focus; label sits above in 14px medium.
- **Spec tile**: number 48px regular, unit 16px muted, label 14px muted underneath; tiles separated by 1px rules.
- **Configurator swatch**: 40px square color chip, 2px graphite outline when selected.
- **Nav**: logotype left, 4–5 text links center, "Test drive" button right; mobile collapses to a full-screen graphite menu.
- **Badge**: 12px uppercase-free label on `#F2F2F2`, 0 radius, 4px 8px padding; gold text for "New".

## Do's and Don'ts
**Do**
- Keep every rectangle square-cornered.
- Alternate white and graphite full-width bands for rhythm.
- Present key specs as oversized numerals with small muted labels.
- Use generous negative space; let one image fill the viewport.
- Use gold for at most one detail per screen.

**Don't**
- Don't use rounded buttons or card radii.
- Don't add drop shadows or gradients to components.
- Don't bold headings or use more than two weights on a screen.
- Don't use pure `#000000`; graphite `#101114` is the dark.
- Don't introduce bright brand colors (blue, green) into UI chrome.

## Agent Prompt Guide
Paste-ready prompt:
> Design in the spirit of Polestar: white `#FFFFFF` and graphite `#101114` alternating full-width sections, muted text `#6B6E73`, light surface `#F2F2F2`, and a single Swedish-gold `#D96C00` accent used sparingly. Font: Inter (as a Polestar Unica stand-in), regular weight headings with tight tracking. Zero border radius on everything. No shadows. Huge whitespace, full-bleed cool-toned car photography, Scandinavian minimal.

Example component prompts:
1. "A spec strip: four columns separated by 1px `#D9D9D9` rules, each with a 48px number ('614'), small unit ('km'), and muted label ('Range WLTP')."
2. "A graphite hero band with a white headline 'Polestar 4' bottom-left and two square buttons: white-filled 'Order' and white-outlined 'Book a test drive'."
3. "A color picker: row of 40px square swatches, selected swatch gets a 2px graphite outline, selected color name shown in 14px muted text."
