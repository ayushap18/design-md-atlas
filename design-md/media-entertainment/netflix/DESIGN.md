---
version: alpha
name: Netflix
description: Cinematic black canvas with Netflix red, poster-driven horizontal rows, and bold condensed-feeling sans type.
source: https://www.netflix.com
colors:
  primary: "#E50914"
  primary-hover: "#C11119"
  on-primary: "#FFFFFF"
  background: "#141414"
  base: "#000000"
  surface: "#181818"
  surface-elevated: "#2F2F2F"
  text: "#FFFFFF"
  text-muted: "#B3B3B3"
  text-dim: "#808080"
  border: "#404040"
  accent: "#E50914"
  match: "#46D369"
  maturity-border: "#FFFFFF66"
typography:
  display:
    fontFamily: "Netflix Sans, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 3.5rem
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1: { fontFamily: "Netflix Sans, Inter", fontSize: 2rem, fontWeight: 700, lineHeight: 1.25 }
  h2: { fontFamily: "Netflix Sans, Inter", fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: "Netflix Sans, Inter", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Netflix Sans, Inter", fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 60px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-play:
    backgroundColor: "#FFFFFF"
    textColor: "#000000"
    rounded: "{rounded.md}"
    padding: 8px 24px
  button-more-info:
    backgroundColor: "rgba(109,109,110,0.7)"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
---

# Netflix — DESIGN.md

> Inspired by the public website and web app of Netflix. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Netflix is a darkened cinema. Everything sits on #141414 so that key art, trailers and posters glow. The interface is minimal: a transparent-to-black top nav, a full-bleed billboard with the title treatment and two buttons, then endless horizontal rows of 16:9 thumbnails. Red is the brand signal (logo, sign-up CTAs, "N" badge, Top 10 ribbons) while in-app playback actions are white.

Adjectives: **cinematic, dark, bold, binge-able, content-first.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #E50914 | Logo, sign-up/marketing CTAs, progress bars, "N" badge |
| primary-hover | #C11119 | Hover |
| base | #000000 | Marketing pages, footer |
| background | #141414 | App browse background |
| surface | #181818 | Expanded preview card, modal body |
| surface-elevated | #2F2F2F | Dropdowns, episode rows hover |
| text | #FFFFFF | Titles |
| text-muted | #B3B3B3 | Synopsis, row metadata |
| text-dim | #808080 | Footer links, disabled |
| border | #404040 | Dividers in modals |
| match | #46D369 | "98% Match" text |

Black/charcoal dominates. Red is a jolt, used sparingly.

## Typography
- **Family:** Netflix Sans (proprietary). Free fallback: **Inter** (or Helvetica Neue).
- **Scale:** 56px marketing hero (900) / 32px page title / 20px row title (500 in app, 700 on marketing) / 16px body / 13px metadata.
- Billboard titles are image logos (custom title treatments), not live text.
- Row titles ("Trending Now") 1.4vw, min 12px — scale with viewport.
- Metadata lines: "2024 · TV-MA · 3 Seasons" with maturity badge as 1px outlined box.

## Layout
- Side padding 4% of viewport (60px at 1500px), applied consistently to nav, billboard and rows.
- Billboard: ~56.25vw tall hero (16:9) with left-aligned title art, 1.2vw synopsis max ~36% width, two buttons; bottom vignette into #141414.
- Rows: horizontally scrolling sliders showing 6 items at ≥1400px, 5 at ≥1100, 4 at ≥800, 3 at ≥500, 2 below; 4px gap; 4% side gutters with chevron paging.
- Top 10 row: giant outlined numerals beside portrait posters.

## Elevation & Depth
- Nav: transparent with `linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)`; becomes solid #141414 on scroll.
- Hover preview card: scales thumbnail ~1.5x after 400ms delay, #181818 body, `0 3px 10px rgba(0,0,0,0.75)`.
- Title modal: max 850px, #181818, `0 3px 10px rgba(0,0,0,0.5)`, page scrim rgba(0,0,0,0.7).
- Billboard bottom fade: `linear-gradient(180deg, transparent, #141414)`.

## Shapes
- Thumbnails: 4px radius (16:9 boxart). Buttons: 4px radius.
- Circular icon buttons (add, like, more) 32–42px, 2px rgba(255,255,255,0.5) border.
- Icons: solid/filled, white, 24px.
- Imagery: key-art boxart with the title logo baked in; no white borders.

## Components
- **Play button:** white fill, black 16px/700 "Play" with solid triangle, 8px 24px, 4px radius; hover rgba(255,255,255,0.75).
- **More Info:** rgba(109,109,110,0.7) fill, white text, info icon; hover rgba(109,109,110,0.4).
- **Marketing CTA:** #E50914, white 24px/500 "Get Started >", 12px 24px, 4px radius; joined with a 56px email input (rgba(22,22,22,0.7), 1px rgba(128,128,128,0.7) border).
- **Row thumbnail:** 16:9 image 4px radius; "N" red badge top-left for originals; "TOP 10" red ribbon top-right; red progress bar at bottom for continue-watching.
- **Hover preview:** expanded card with video, circular buttons row (play white filled, +, thumbs, chevron), match % in green, maturity outlined badge, genre dots.
- **Nav:** 68px; red wordmark left; links 14px #E5E5E5 (current white bold); search, bell, profile avatar (4px radius square) right.
- **Profile picker:** 10vw square avatars with 4px radius, 2px white border on hover; names #808080 → white on hover.

## Do's and Don'ts
**Do**
- Keep everything on black/#141414 and let artwork glow.
- Use white for Play and in-app primary actions; red for brand and sign-up.
- Use horizontally scrolling rows with 4% gutters.
- Use vignettes and gradients to blend imagery into the background.

**Don't**
- Don't put red on large surfaces.
- Don't use light mode or white cards.
- Don't round thumbnails beyond 4px.
- Don't crowd thumbnails with text — title art lives in the image.

## Agent Prompt Guide
**Base prompt:**
"Design a Netflix-inspired streaming UI: #141414 background, white text and #B3B3B3 metadata, Inter (stand-in for Netflix Sans), full-bleed billboard with bottom fade to #141414, white 'Play' and translucent grey 'More Info' buttons (4px radius), horizontal rows of 16:9 thumbnails with 4px gaps and 4vw side padding, #E50914 red only for logo, badges and progress bars."

**Example component prompts:**
1. "Continue Watching row: 20px/500 title, slider of 16:9 thumbnails with red progress bar at the bottom of each, chevrons on edges."
2. "Hover preview card: video thumbnail on top, #181818 body, circular buttons (white play, +, thumbs up), '97% Match' in #46D369, outlined 'TV-14' badge, genre tags separated by dots."
3. "Sign-up hero on black with background collage under a dark gradient, 48px/900 headline, email input plus red 'Get Started >' button."
