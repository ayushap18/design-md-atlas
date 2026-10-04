---
version: alpha
name: Pinterest
description: Visual-discovery masonry grid with Pinterest red, heavily rounded pins and pills, and a friendly bold sans.
source: https://www.pinterest.com
colors:
  primary: "#E60023"
  primary-hover: "#AD081B"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#EFEFEF"
  surface-hover: "#E1E1E1"
  text: "#111111"
  text-muted: "#767676"
  border: "#CDCDCD"
  accent: "#E60023"
  link: "#0074E8"
  dark: "#111111"
  success: "#008753"
  marketing-yellow: "#FFFD92"
  marketing-mint: "#DAFFF6"
  marketing-pink: "#FFE2EB"
typography:
  display:
    fontFamily: "Pin Sans, -apple-system, system-ui, Segoe UI, Roboto, Helvetica Neue, Helvetica, sans-serif"
    fontSize: 4.375rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1: { fontFamily: "Pin Sans, system-ui, Inter", fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.2 }
  h2: { fontFamily: "Pin Sans, system-ui, Inter", fontSize: 1.75rem, fontWeight: 600, lineHeight: 1.25 }
  body: { fontFamily: "Pin Sans, system-ui, Inter", fontSize: 1rem, fontWeight: 400, lineHeight: 1.4 }
  small: { fontFamily: "Pin Sans, system-ui, Inter", fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.33 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 16px
    height: 48px
  pin:
    rounded: "{rounded.md}"
    width: 236px
---

# Pinterest — DESIGN.md

> Inspired by the public website of Pinterest. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Pinterest is a wall of inspiration: a masonry grid of variable-height images with soft 16px corners and almost no surrounding text. The UI is white and grey, with fat rounded pills, circular icon buttons and a bold friendly sans. Pinterest red (#E60023) is used for Save and the logo — the only saturated chrome. Logged-out marketing pages add playful pastel blocks (yellow, mint, pink) and big centered headlines.

Adjectives: **visual, inspiring, soft, playful, effortless.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #E60023 | Save button, logo, primary sign-up |
| primary-hover | #AD081B | Hover/pressed |
| background | #FFFFFF | Page |
| surface | #EFEFEF | Secondary buttons, search field, chips |
| surface-hover | #E1E1E1 | Hover for grey controls |
| text | #111111 | Primary text, active nav pill fill |
| text-muted | #767676 | Secondary text, placeholders |
| border | #CDCDCD | Input borders |
| link | #0074E8 | Inline links, focus ring |
| success | #008753 | Confirmations |
| marketing-yellow/mint/pink | #FFFD92 / #DAFFF6 / #FFE2EB | Logged-out hero and feature blocks |

## Typography
- **Family:** Pin Sans (proprietary; formerly system stack). Free fallback: system-ui → **Inter** or **Figtree**.
- **Scale:** 70px marketing hero / 36px board title / 28px section / 20px pin closeup title / 16px body / 14px buttons / 12px meta.
- **Weights:** 600 for headings and buttons, 400 body.
- Pin titles in the grid (when shown) 14px/600, 2-line clamp; creator line 12px.

## Layout
- Masonry grid: fixed column width ~236px with 16px gutter; number of columns fills viewport (2 on mobile with 8px gutter).
- Header 80px: logo, Home/Explore/Create pill tabs, full-width rounded search (48px), notifications, messages, avatar.
- Pin closeup: 1016px max card with 32px radius, image left half, details right; related pins masonry below.
- Generous whitespace above grid; content centered.

## Elevation & Depth
- Pin cards are flat; on hover a rgba(0,0,0,0.4) overlay appears with Save button top-right and icon buttons bottom.
- Closeup card: `0 1px 20px rgba(0,0,0,0.1)`, 32px radius.
- Flyouts: white, 16px radius, `0 0 8px rgba(0,0,0,0.1)`.

## Shapes
- Pins: 16px radius images. Closeup and modals: 32px radius.
- Buttons: full pills (48px default, 40px small). Icon buttons: 48px circles.
- Search: full pill on #EFEFEF.
- Icons: solid, rounded glyphs, 20–24px.

## Components
- **Save button (primary):** #E60023, white 16px/600, 48px tall, 12px 16px, pill; hover #AD081B.
- **Secondary button:** #EFEFEF fill, #111 text, pill; hover #E1E1E1.
- **Selected nav pill:** #111 fill with white text ("Home").
- **Pin:** variable-height image, 16px radius; hover overlay with board dropdown "Profile ▾" + red Save top, share/more 32px white circles bottom-right; optional title & creator avatar below.
- **Search:** 48px, #EFEFEF, pill, search icon left, 16px placeholder #767676; focus 4px rgba(0,132,255,0.5) ring.
- **Input:** 48px, 2px #CDCDCD border, 16px radius; focus 4px blue ring.
- **Board cover:** collage of 3 images (one large, two small) with 16px radius outer corners, title 20px/600, pin count 12px.
- **Chips/topics:** #EFEFEF pills 40px, 16px/600.

## Do's and Don'ts
**Do**
- Let the masonry grid of images dominate; minimal text.
- Round generously: 16px pins, 32px modals, pills everywhere.
- Use red only for Save and the brand.
- Use soft grey fills for secondary controls instead of borders.

**Don't**
- Don't crop pins to uniform heights.
- Don't use square corners or thin outlined buttons.
- Don't fill backgrounds with red.
- Don't add borders or shadows to grid pins.

## Agent Prompt Guide
**Base prompt:**
"Design a Pinterest-inspired discovery UI: white page, masonry grid of 236px columns with 16px gutters, images with 16px radius and varied heights, Inter/Figtree 600 headings and 400 body, #111111 text and #767676 muted, #EFEFEF grey pill controls, a #E60023 red 'Save' pill (48px tall), 48px pill search, hover overlays on pins."

**Example component prompts:**
1. "Pin hover state: darkened image overlay, top bar with 'Profile ▾' pill and red 'Save' pill, bottom-right white circular share and '...' buttons."
2. "Pin closeup: 32px-radius white card with soft shadow, image left, right side with action icons, 28px/600 title, description, creator row with Follow grey pill, comments."
3. "Logged-out hero: centered 70px headline 'Get your next', animated colored word, red pill 'Explore', pastel #FFFD92 section below."
