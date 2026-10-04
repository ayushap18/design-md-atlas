---
version: alpha
name: SpaceX
description: Pitch-black mission-control aesthetic with full-bleed launch imagery, wide-tracked uppercase D-DIN type and square outlined buttons.
source: https://www.spacex.com
colors:
  primary: "#FFFFFF"
  on-primary: "#000000"
  background: "#000000"
  surface: "#0B0B0B"
  text: "#FFFFFF"
  text-muted: "#A7A9AC"
  border: "#FFFFFF"
  border-subtle: "#333333"
  accent: "#005288"
  overlay: "rgba(0,0,0,0.5)"
typography:
  display:
    fontFamily: D-DIN
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0.02em
    textTransform: uppercase
  h1: { fontFamily: D-DIN, fontSize: 2.5rem, fontWeight: 700, lineHeight: 1.1, textTransform: uppercase }
  h2: { fontFamily: D-DIN, fontSize: 1.75rem, fontWeight: 700, lineHeight: 1.2, textTransform: uppercase }
  eyebrow: { fontFamily: D-DIN, fontSize: 0.875rem, fontWeight: 400, letterSpacing: 0.12em, textTransform: uppercase }
  body: { fontFamily: D-DIN, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  label: { fontFamily: D-DIN, fontSize: 0.875rem, fontWeight: 700, letterSpacing: 0.1em, textTransform: uppercase }
  mono: { fontFamily: D-DIN, fontSize: 0.875rem, fontWeight: 400, letterSpacing: 0.05em }
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 40px
  xl: 96px
components:
  button-primary:
    backgroundColor: transparent
    textColor: "{colors.text}"
    borderColor: "{colors.border}"
    borderWidth: 2px
    rounded: "{rounded.sm}"
    padding: 18px 36px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  nav-link:
    textColor: "{colors.text}"
    padding: 8px 12px
  stat:
    textColor: "{colors.text}"
---

# SpaceX — DESIGN.md

> Inspired by the public website of SpaceX. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
SpaceX's site is a dark room with a window onto a launch pad. Every section is a full-screen photograph or video of hardware — boosters, capsules, plumes, Earth from orbit — overlaid with uppercase condensed type and a single hollow button. There is no color palette to speak of; black, white, and the imagery do all the work. It reads like a mission-control console crossed with a museum placard.

Adjectives: **austere, technical, cinematic, uppercase, monumental**.

Density: very low. One idea per screen, often under 25 words.

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#000000` | Every page and section base |
| surface | `#0B0B0B` | Rare panels, dropdown menus |
| text / primary | `#FFFFFF` | All type, button outlines, hover fills |
| on-primary | `#000000` | Text on hovered (white-filled) button |
| text-muted | `#A7A9AC` | Dates, captions, secondary specs |
| border | `#FFFFFF` | 2px button outlines |
| border-subtle | `#333333` | Table rules, dividers in spec lists |
| accent | `#005288` | Heritage SpaceX blue; use only in data viz or tiny indicators |
| overlay | `rgba(0,0,0,0.5)` | Gradient/scrim behind text on bright imagery |

The UI layer is pure monochrome. Any color on screen should come from photography (orange engine glow, blue Earth limb).

## Typography
- **Family:** D-DIN (a free DIN-1451 derivative from Datto) in regular and bold. Fallbacks: "Barlow", "Arial Narrow", Arial.
- **Weights:** 700 for headlines and labels; 400 for body and eyebrows.
- **Casing:** Uppercase for headlines, buttons, nav, eyebrows. Body copy is sentence case.
- **Tracking:** Wide on small uppercase (0.1–0.12em); slight (0.02em) on display.
- **Scale:** 48px display, 40px H1, 28px H2, 16px body, 14px labels/eyebrows.
- Mission names and numbers are central: "STARSHIP'S FIFTH FLIGHT TEST", "FALCON 9 / 400+ LAUNCHES".

## Layout
- Each section is 100vh with media covering the viewport (`object-fit: cover`).
- Text block anchored bottom-left (desktop) roughly 10vw from left and 15vh from bottom, max width ~520px.
- Order: eyebrow (date or "UPCOMING LAUNCH") → headline → button.
- Header: 100px tall, transparent, wordmark left, uppercase nav links left-of-center, hamburger right.
- Vehicle pages add spec tables: two columns of label/value rows separated by `#333333` 1px rules, with a metric/US unit toggle.
- Section spacing on non-media pages: 96px vertical.

## Elevation & Depth
- No shadows anywhere.
- Depth is photographic: the hardware recedes into black.
- Bottom-up gradient scrims `linear-gradient(0deg, rgba(0,0,0,0.6), transparent 50%)` keep text legible.
- Slide-in side menu: solid black panel from the right with a `rgba(0,0,0,0.6)` backdrop.

## Shapes
- Square corners everywhere: buttons, images, panels — 0px radius.
- Only circles: toggle knobs and video play indicators.
- Icons: minimal 1.5px white outline (play, arrow, close); used sparingly.
- Imagery: full-bleed, never framed or rounded; high-contrast, dramatic lighting, often shot from below.
- Thin 1px horizontal rules for spec tables; no boxes.

## Components
- **Outline button:** transparent, 2px solid white border, white uppercase 14px/700 label, letter-spacing 0.1em, padding 18px 36px, 0 radius. Hover: white fill slides in from bottom (0.3s), label turns black.
- **Nav link:** 14px/700 uppercase, letter-spacing 0.1em, white; hover reduces opacity to 0.7.
- **Eyebrow:** 14px/400 uppercase, wide tracking, `#A7A9AC` or white, sits 8px above headline.
- **Spec table:** label left in uppercase 14px muted, value right in 16px white with unit; rows 48px tall with 1px `#333333` bottom border.
- **Unit toggle:** "METRIC | US" text pair; active item white, inactive muted.
- **Stat block:** huge number 48–64px/700, small uppercase label underneath ("TOTAL LAUNCHES"), arranged in a row of three.
- **Launch list item:** date eyebrow, mission name headline, "WATCH" outline button.
- **Footer:** black, centered row of 12px uppercase muted links and "SPACEX © 2026".

## Do's and Don'ts
**Do**
- Use full-viewport, high-drama hardware imagery for every major section.
- Set headlines, buttons and nav in uppercase D-DIN (or Barlow) with wide tracking.
- Keep everything square — zero border radius.
- Use hollow 2px white-outlined buttons that fill on hover.
- Present technical data as label/value rows with thin rules.

**Don't**
- Don't introduce brand colors into the UI; let imagery supply color.
- Don't round corners or use pill buttons.
- Don't add shadows, cards, or gradients other than legibility scrims.
- Don't use more than one button per section.
- Don't write long paragraphs on media sections.

## Agent Prompt Guide
**Base prompt:**
"Design in a SpaceX-inspired style: pure black `#000000` background, white text, full-bleed rocket/space photography each 100vh. Font: Barlow (stand-in for D-DIN), uppercase 700 headlines with 0.02em tracking, 14px uppercase labels with 0.1em tracking. Buttons transparent with 2px white border, 0 radius, fill white with black text on hover. No shadows, no rounded corners, no accent colors."

**Example component prompts:**
1. "Launch hero: 100vh video background, bottom-left text block — eyebrow 'UPCOMING LAUNCH' 14px muted, headline 'STARLINK MISSION' 48px/700 uppercase, outline button 'WATCH'."
2. "Vehicle spec table: header with 'OVERVIEW' title and METRIC | US toggle, rows of uppercase muted labels ('HEIGHT', 'DIAMETER', 'MASS') with right-aligned white values, 1px `#333333` row dividers."
3. "Stats strip: three columns on black, numbers 64px/700 white ('400+', '350+', '300+'), labels 14px uppercase 'TOTAL LAUNCHES', 'TOTAL LANDINGS', 'TOTAL REFLIGHTS'."
