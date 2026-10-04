---
version: alpha
name: Dribbble
description: A gallery-first showcase — clean white space, deep ink-navy type and a signature hot pink, with shots doing all the talking.
source: https://dribbble.com
colors:
  primary: "#0D0C22"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F3F3F4"
  text: "#0D0C22"
  text-muted: "#6E6D7A"
  border: "#E7E7E9"
  accent: "#EA4C89"
  accent-hover: "#F082AC"
  accent-soft: "#FDE9F1"
typography:
  display:
    fontFamily: Mona Sans, Inter
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: "Mona Sans, Inter", fontSize: 3rem, fontWeight: 700, lineHeight: 1.15 }
  h2: { fontFamily: "Mona Sans, Inter", fontSize: 1.75rem, fontWeight: 600, lineHeight: 1.25 }
  body: { fontFamily: "Mona Sans, Inter", fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: "Mona Sans, Inter", fontSize: 0.8125rem, fontWeight: 500, lineHeight: 1.4 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.8125rem }
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 72px
  section: 120px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 10px 20px
  button-secondary:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    border: 1px solid {colors.border}
    rounded: "{rounded.full}"
    padding: 10px 20px
  shot-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: 0
---

# Dribbble — DESIGN.md

> Inspired by the public website of Dribbble. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Dribbble is a portfolio and discovery network for designers, and its UI behaves like a gallery wall: white, quiet and evenly spaced so thousands of colorful "shots" can shine. The brand pink (#EA4C89) is iconic but used sparingly; most interactive chrome is ink-navy #0D0C22 in soft pill shapes.

Hold onto: **gallery, creative, clean, community, polished**. High image density in grids, low text density.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #0D0C22 | Primary buttons, headlines, nav text |
| on-primary | #FFFFFF | Text on ink |
| accent | #EA4C89 | Logo, likes, "Pro" marks, highlight links |
| accent-hover | #F082AC | Pink hover |
| accent-soft | #FDE9F1 | Pink tinted badges |
| background | #FFFFFF | Page |
| surface | #F3F3F4 | Shot placeholders, search field, chips |
| text | #0D0C22 | Body |
| text-muted | #6E6D7A | Meta (views, likes, designer names) |
| border | #E7E7E9 | Inputs, outlined buttons, dividers |

The page is ~95% white/ink. Pink appears in the logo, heart icons, and select highlights.

## Typography
- **Primary:** Mona Sans (open-source from GitHub) — free to use directly. Fallback: **Inter**.
- Headlines bold 700 with light negative tracking; hero headings can use a serif italic accent word for editorial flavor (fallback **Instrument Serif**).
- Body 16px/1.6; meta text 13–14px/500 in #6E6D7A.
- Sentence case. Short, inspirational headlines ("Discover the world's top designers").

## Layout
- Full-width shot grid with 32–40px side padding; 4 columns desktop, 3 tablet, 2/1 mobile; 32–36px gap.
- Shots use a 4:3 aspect ratio.
- Filter bar above grid: dropdown left ("Popular"), category pills center, "Filters" button right.
- Hero: centered headline, subhead, pill search bar with trending tags beneath.

## Elevation & Depth
- Flat. Shots have no shadow; hover reveals a bottom gradient overlay `linear-gradient(transparent, rgba(0,0,0,0.6))` with title and actions.
- Dropdowns/popovers: `0 10px 50px rgba(0,0,0,0.12)`, 12px radius.
- Hairline #E7E7E9 borders on inputs and outlined buttons.

## Shapes
- Buttons, chips, search: full pill.
- Shots: 8px radius; avatars: circles (24px in grid, 80px on profiles).
- Icons: 16–20px, rounded line icons (heart, eye, bookmark).
- Imagery: user shots (colorful UI, illustration, branding work). No stock photos.

## Components
- **Primary button:** #0D0C22 fill, white 14px/600, pill, 40px tall, 10px 20px. Hover: #3D3D4E.
- **Secondary button:** white, 1px #E7E7E9 border, ink text. Hover border #DBDBDE plus #F3F3F4 fill.
- **Nav:** 80px white, logo left (pink script), links (Explore, Hire a Designer, Get Hired, Community) 14px/600, search pill, "Log in" text, ink "Sign up" pill.
- **Shot card:** 4:3 image with 8px radius; below: 24px avatar + designer name 14px/600 + "PRO/TEAM" tiny badge, right side heart and eye counts in #6E6D7A 12px.
- **Hover overlay:** dark gradient at bottom with shot title (white 14px/600) and two 40px white circular icon buttons (bookmark, like).
- **Category pill:** text-only, 14px/600; active state #F3F3F4 fill pill.
- **Pro badge:** 10px uppercase white text on #C4C4C9 (or pink for Pro+) with 4px radius.
- **Search:** pill, #F3F3F4 fill, 48px tall, magnifier in pink circular button on the right.

## Do's and Don'ts
**Do**
- Let the shot grid dominate; keep chrome neutral.
- Use pills for every button and filter.
- Use pink only for brand marks, likes, and premium cues.
- Keep generous, even gutters (32px+) between shots.

**Don't**
- Don't add shadows or borders to shot cards.
- Don't use pink as the default CTA fill everywhere.
- Don't crowd grids with long text under each shot.
- Don't use square-cornered buttons.

## Agent Prompt Guide
**Base prompt:**
"Design in the spirit of Dribbble: white page, Mona Sans/Inter text in ink #0D0C22, muted meta #6E6D7A, pill buttons in ink with white text, outlined pills with #E7E7E9 borders. A 4-column grid of 4:3 image cards with 8px radius and 36px gaps, hover overlay with dark gradient. Hot pink #EA4C89 only for likes and brand accents."

**Examples:**
- "Hero: centered 56px bold headline with one serif italic word, subhead, 48px gray pill search with a pink round search button, trending tag pills below."
- "Shot grid card: image, avatar + name + PRO badge, heart and view counts aligned right."
- "Designer profile header: 80px avatar, name 32px bold, location muted, ink 'Get in touch' pill and outlined 'Follow' pill."
