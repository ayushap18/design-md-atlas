---
version: alpha
name: Arc Browser
description: Joyful, hand-crafted browser brand on buttery cream, with an electric blue, candy reds and yellows, soft rounded type, and toy-like interactive details.
source: https://arc.net
colors:
  primary: "#3139FB"
  on-primary: "#FFFFFF"
  primary-deep: "#2702C2"
  background: "#FFFCEA"
  surface: "#FFFADD"
  surface-alt: "#FEF4D5"
  text: "#1A1A2E"
  text-muted: "#5A5A72"
  border: "#EFE6C4"
  accent: "#FB3A4D"
  accent-yellow: "#FFB223"
  accent-pink: "#F19E9C"
  accent-lavender: "#F0F1FF"
typography:
  display:
    fontFamily: Marlin Soft SQ
    fontSize: 5rem
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -0.02em
  h1: { fontFamily: Marlin Soft SQ, fontSize: 3.25rem, fontWeight: 700, lineHeight: 1.05 }
  h2: { fontFamily: Marlin Soft SQ, fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.1 }
  serif-accent: { fontFamily: Exposure, fontSize: 3.25rem, fontWeight: 400, lineHeight: 1.05, fontStyle: italic }
  body: { fontFamily: Inter, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.55 }
  label: { fontFamily: ABC Favorit Mono, fontSize: 0.75rem, letterSpacing: 0.04em }
  mono: { fontFamily: ABC Favorit Mono, fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 14px
  lg: 24px
  xl: 36px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 72px
  section: 140px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
    shadow: "0 6px 0 {colors.primary-deep}"
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  card:
    backgroundColor: "#FFFFFF"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Arc Browser — DESIGN.md

> Inspired by the public website of Arc (The Browser Company). Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Arc's site feels like a toy store window: warm cream backgrounds, an electric cobalt blue, candy red and marigold, chunky soft-cornered display type, and lots of little delights (bouncy buttons, stickers, hand-drawn squiggles, playful cursor effects). Under the whimsy there is real craft — careful spacing and confident type. It is the opposite of a corporate browser page.

Hold onto: **joyful, tactile, crafted, warm, surprising**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#3139FB` | Arc blue: CTAs, big headline words, links |
| primary-deep | `#2702C2` | Button "base" shadow, pressed state |
| background | `#FFFCEA` | Buttery cream canvas |
| surface | `#FFFADD` | Alternate warm band |
| surface-alt | `#FEF4D5` | Sticker backings, panels |
| text | `#1A1A2E` | Ink |
| text-muted | `#5A5A72` | Secondary copy |
| border | `#EFE6C4` | Soft warm dividers |
| accent | `#FB3A4D` | Candy red: stickers, highlights |
| accent-yellow | `#FFB223` | Marigold: stars, badges, doodles |
| accent-pink | `#F19E9C` | Soft blush for illustration |
| accent-lavender | `#F0F1FF` | Blue-tinted cards |

Cream dominates; blue is loud but purposeful; red/yellow show up as stickers and doodles.

## Typography
- **Display:** Marlin Soft SQ (commercial rounded grotesque). Free fallback: *Nunito* 800 or *Rubik* 700.
- **Serif accent:** Exposure italic (commercial). Free fallback: *Instrument Serif Italic*.
- **Body:** Inter 17px/1.55.
- **Mono labels:** ABC Favorit Mono. Fallback: *Space Mono* or *DM Mono*.
- Display is heavy, rounded, tight leading (~0.98). Mix in a serif italic word for flair ("a browser that *thinks* for you").
- Labels mono, uppercase, small, slightly tracked.

## Layout
- Max width 1180px; generous outer padding (40px desktop, 20px mobile).
- Section spacing 120–160px. Pages read as a story: big statement, product video, feature vignettes.
- Hero: centered giant headline, download button, an app window or video below.
- Feature vignettes alternate with off-grid stickers and rotated (±3–6°) cards.

## Elevation & Depth
- "Toy" depth: hard colored bottom shadows (`0 6px 0 #2702C2`) on primary buttons; press reduces to `0 2px 0` and translates 4px down.
- Cards: `0 10px 30px rgba(26,26,46,0.08)`, 24px radius.
- Stickers: white 3px outline + `0 4px 10px rgba(0,0,0,0.12)`.
- App window renders: large soft shadow `0 40px 80px -20px rgba(49,57,251,0.25)`.

## Shapes
- Everything rounded: buttons pill, cards 24px, big panels 36px.
- Icons: rounded, filled, 2px stroke, friendly.
- Doodles: hand-drawn arrows, squiggles, stars in red/yellow/blue.
- Imagery: screen recordings of the browser in colorful gradient "spaces".

## Components
- **Primary button (Download):** `#3139FB` bg, white 17px/700, pill, 14px 28px, `0 6px 0 #2702C2`. Hover: translateY(-2px), shadow 8px. Active: translateY(4px), shadow 2px. Include Apple/Windows glyph.
- **Secondary button:** white, ink text, pill, `0 4px 0 #EFE6C4`.
- **Nav:** transparent on cream, 72px, rainbow-ish logo left, 15px/600 links, blue pill "Download" right.
- **Feature card:** white, 24px radius, 32px padding, mono eyebrow, 28px rounded display title, body, looping video inset at 16px radius. Optional rotation 2°.
- **Sticker:** 64–96px circle or blob, solid accent fill, white 3px border, short label (e.g. "NEW!"), rotated −8°.
- **Testimonial tile:** `#F0F1FF` bg, 24px radius, quote in 20px, avatar 40px.
- **Input (newsletter):** 52px pill, white, 2px `#EFE6C4` border; focus border blue.

## Do's and Don'ts
**Do**
- Use cream `#FFFCEA`, never cold white, as the canvas.
- Give primary buttons a tactile pressed-key shadow.
- Add one hand-drawn or sticker element per section.
- Use rounded heavy display type with a serif italic accent word.

**Don't**
- Don't use sharp corners anywhere.
- Don't use gray-only palettes or dark mode marketing.
- Don't use flat, motionless buttons.
- Don't overcrowd — whimsy needs whitespace.

## Agent Prompt Guide
**Base prompt:**
"Design in an Arc-inspired style: buttery cream #FFFCEA canvas, ink #1A1A2E, electric blue #3139FB pill buttons with a hard 0 6px 0 #2702C2 base shadow and press animation, candy red #FB3A4D and marigold #FFB223 stickers and doodles. Headlines in Nunito 800 tight leading with an Instrument Serif italic accent word, Inter body, 24px rounded white cards, slight rotations, joyful."

**Examples:**
- "Hero: 80px rounded headline 'Meet the internet, again', one italic serif word, blue 'Download Arc' pill, app window video with soft blue shadow, red 'Free!' sticker rotated."
- "Feature row: three white 24px cards slightly rotated, each with mono eyebrow, looping video, short copy."
- "Newsletter block: cream band, hand-drawn arrow pointing to a pill email input and blue button."
