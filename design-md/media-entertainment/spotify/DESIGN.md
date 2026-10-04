---
version: alpha
name: Spotify
description: Dark, immersive music app with Spotify green as the single action color, circular play buttons and album art driving dynamic gradients.
source: https://open.spotify.com
colors:
  primary: "#1ED760"
  primary-brand: "#1DB954"
  on-primary: "#000000"
  background: "#121212"
  base: "#000000"
  surface: "#181818"
  surface-elevated: "#282828"
  surface-hover: "#1F1F1F"
  text: "#FFFFFF"
  text-muted: "#B3B3B3"
  border: "#2A2A2A"
  border-input: "#727272"
  accent: "#1ED760"
  error: "#E91429"
  info: "#0D72EA"
typography:
  display:
    fontFamily: "Spotify Mix, Circular Spotify Text, Figtree, Helvetica Neue, sans-serif"
    fontSize: 6rem
    fontWeight: 900
    lineHeight: 1
    letterSpacing: -0.04em
  h1: { fontFamily: "Spotify Mix, Figtree", fontSize: 2rem, fontWeight: 700, lineHeight: 1.2 }
  h2: { fontFamily: "Spotify Mix, Figtree", fontSize: 1.5rem, fontWeight: 700, lineHeight: 1.25 }
  body: { fontFamily: "Spotify Mix, Figtree", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Spotify Mix, Figtree", fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 32px
  play-fab:
    backgroundColor: "{colors.primary}"
    textColor: "#000000"
    rounded: "{rounded.full}"
    size: 56px
---

# Spotify — DESIGN.md

> Inspired by the public website and web player of Spotify. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Spotify is a near-black canvas where album art is the color. The interface recedes — layered charcoal panels with rounded corners, grey secondary text — so cover art, artist photos and the dynamic gradients extracted from them carry the emotion. One bright green is reserved for play and primary actions. Type is a heavy, friendly geometric grotesk used very large for playlist and artist headers and small and tight in lists.

Adjectives: **immersive, dark, rhythmic, bold, personal.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #1ED760 | Play buttons, primary CTA, active/playing track text |
| primary-brand | #1DB954 | Logo green (marketing) |
| base | #000000 | App frame behind panels |
| background | #121212 | Main panel background |
| surface | #181818 | Cards, sidebar library rows |
| surface-hover | #1F1F1F | Row hover |
| surface-elevated | #282828 | Context menus, hovered cards, inputs |
| text | #FFFFFF | Titles |
| text-muted | #B3B3B3 | Artist names, metadata, inactive nav |
| border | #2A2A2A | Subtle separators |
| border-input | #727272 | Input outlines, outline buttons |
| error | #E91429 | Errors |
| info | #0D72EA | Info toasts |

Dark greys cover ~90%; green appears only for play/active. Page headers use a gradient from the album's dominant color down to #121212.

## Typography
- **Family:** Spotify Mix (formerly Circular). Free fallback: **Figtree** or **Plus Jakarta Sans**.
- **Scale:** 96px playlist/artist title (900, −0.04em) / 32px page / 24px section ("Made For You") / 16px card title / 14px body & track rows / 12px meta.
- **Weights:** 900 for hero titles, 700 for section and card titles, 400 for metadata.
- Section headers are 24px/700 with a "Show all" 14px/700 muted link on the right that underlines on hover.

## Layout
- Three-pane app: left library sidebar (280–420px, resizable), main view, optional right "Now Playing" panel (~320px); 8px gaps between panels on black #000 base.
- Bottom player bar 72px fixed: track info left, controls center, volume/devices right.
- Card shelves: responsive grid of 180px-ish cards, 24px gap, single-row with "Show all".
- Panel padding 16–24px; track list rows 56px tall with 16px horizontal padding.

## Elevation & Depth
- Panels distinguished by tone (#000 base, #121212 panels, #181818/#282828 elevated).
- Context menus: #282828, 4px radius, `0 16px 24px rgba(0,0,0,0.3), 0 6px 8px rgba(0,0,0,0.2)`.
- Play FAB on card hover: `0 8px 8px rgba(0,0,0,0.3)`, slides up 8px.
- Header gradient: `linear-gradient(transparent 0, rgba(0,0,0,0.5) 100%)` over the art-derived color.

## Shapes
- Panels: 8px radius. Cards: 6–8px radius with 4–6px radius art.
- Artist images: perfect circles. Album/playlist art: 4px radius squares.
- Buttons: full pill; play button perfect circle (48–56px).
- Icons: 16–24px, filled glyphs, active state in green.

## Components
- **Primary button:** #1ED760, black 16px/700, pill, 12px 32px; hover scale(1.04) and #3BE477.
- **Outline button:** transparent, 1px #727272 border, white 14px/700, pill; hover border #FFF, scale(1.04).
- **Play FAB:** 56px green circle with black play triangle; on cards appears on hover bottom-right.
- **Card:** #181818 → #282828 on hover, 12px padding, 8px radius, square art, 16px/700 title (1 line), 14px muted subtitle (2 lines).
- **Track row:** number/equalizer icon, 40px art, title (white, green when playing) and artist (muted), album, date, duration; hover #FFFFFF1A.
- **Chips (filters):** #FFFFFF12 fill, white 14px, pill, 32px tall; selected #FFFFFF fill with black text.
- **Search input:** 48px, #1F1F1F fill, pill, search icon left; hover #2A2A2A, focus 2px white border.
- **Progress bar:** 4px track #4D4D4D, fill white (green on hover) with a 12px white thumb on hover.

## Do's and Don'ts
**Do**
- Keep the UI dark and let artwork supply color.
- Reserve green for play and the single primary action.
- Use huge, extra-bold titles in headers with art-derived gradients.
- Round everything: pills, circles, 8px panels.

**Don't**
- Don't use green for decorative text or backgrounds.
- Don't add borders around cards — use tonal shifts.
- Don't use pure white backgrounds in the app.
- Don't use thin font weights for titles.

## Agent Prompt Guide
**Base prompt:**
"Design a Spotify-inspired music UI: #000 app frame with #121212 panels (8px radius, 8px gaps), #181818 cards that lighten to #282828 on hover, white titles and #B3B3B3 metadata, Figtree font (900 for hero titles, 700 for sections), #1ED760 used only for play buttons and primary pills, circular artist images, square 4px-radius album art, header gradients derived from cover art."

**Example component prompts:**
1. "Playlist header: gradient from #5038A0 to #121212, 232px cover with shadow, 'PLAYLIST' 14px, title 96px/900, owner and track count muted; below a 56px green play FAB."
2. "Card shelf: 'Recently played' 24px/700 with 'Show all' muted link, row of cards with 6px-radius art and hover-revealed green play button."
3. "Bottom player bar: 72px, track art + title left, shuffle/prev/play(white circle)/next/repeat center with 4px progress bar, volume right."
