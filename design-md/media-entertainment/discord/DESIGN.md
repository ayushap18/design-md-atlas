---
version: alpha
name: Discord
description: Playful, community-chat platform with Blurple, layered dark greys in-app, and a chunky rounded marketing style with illustrated characters.
source: https://discord.com
colors:
  primary: "#5865F2"
  primary-hover: "#4752C4"
  on-primary: "#FFFFFF"
  background: "#313338"
  background-secondary: "#2B2D31"
  background-tertiary: "#1E1F22"
  surface: "#383A40"
  text: "#F2F3F5"
  text-normal: "#DBDEE1"
  text-muted: "#949BA4"
  border: "#3F4147"
  accent: "#EB459E"
  green: "#23A55A"
  yellow: "#F0B232"
  red: "#F23F43"
  marketing-bg: "#404EED"
  marketing-dark: "#23272A"
typography:
  display:
    fontFamily: "ABC Ginto Nord, Ginto Nord, Archivo Black, Dela Gothic One, sans-serif"
    fontSize: 3.5rem
    fontWeight: 800
    lineHeight: 1.2
    textTransform: uppercase
  h1: { fontFamily: "ABC Ginto, gg sans, Noto Sans, sans-serif", fontSize: 2.5rem, fontWeight: 800, lineHeight: 1.2 }
  h2: { fontFamily: "gg sans, Noto Sans", fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: "gg sans, Noto Sans, Helvetica Neue, Arial", fontSize: 1rem, fontWeight: 400, lineHeight: 1.375 }
  small: { fontFamily: "gg sans, Noto Sans", fontSize: 0.75rem, fontWeight: 500, lineHeight: 1.33 }
  mono: { fontFamily: "gg mono, Consolas, Menlo, monospace", fontSize: 0.875rem }
rounded:
  sm: 3px
  md: 8px
  lg: 16px
  xl: 28px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 2px 16px
    height: 38px
  button-marketing:
    backgroundColor: "#FFFFFF"
    textColor: "#23272A"
    rounded: "{rounded.xl}"
    padding: 16px 32px
---

# Discord — DESIGN.md

> Inspired by the public website and app of Discord. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Discord has two faces. The marketing site is loud and playful: Blurple backgrounds, extra-wide uppercase display type, starfield and cartoon-character illustrations, and big rounded pill buttons. The app is a calm, layered dark interface built from four greys — server rail, channel sidebar, chat, member list — where Blurple marks the primary action and colored status dots bring life. Both share friendliness: rounded corners, squircle server icons, generous hit areas.

Adjectives: **playful, communal, cozy, layered, expressive.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #5865F2 | Blurple — primary buttons, mentions, links, focus |
| primary-hover | #4752C4 | Hover |
| background | #313338 | Chat area |
| background-secondary | #2B2D31 | Channel sidebar, member list |
| background-tertiary | #1E1F22 | Server rail, input wells |
| surface | #383A40 | Message input, hovered rows, cards |
| text | #F2F3F5 | Headings, usernames |
| text-normal | #DBDEE1 | Message text |
| text-muted | #949BA4 | Timestamps, channel names, placeholders |
| border | #3F4147 | Dividers |
| accent | #EB459E | Fuchsia — Nitro and playful highlights |
| green | #23A55A | Online status, success |
| yellow | #F0B232 | Idle status |
| red | #F23F43 | DND, danger buttons, unread badges |
| marketing-bg | #404EED | Marketing hero background |
| marketing-dark | #23272A | Marketing dark sections, footer |

## Typography
- **Families:** gg sans (app/UI) and ABC Ginto Nord (marketing display, extra-wide). Free fallbacks: **Noto Sans** or **Nunito** for gg sans; **Archivo Black** / **Dela Gothic One** (or Archivo Expanded 800) for Ginto Nord.
- **Marketing scale:** 56px uppercase display (800), 40px h1, 20px lead, 16px body.
- **App scale:** 16px message text (400, line-height 22px), 16px usernames (500), 12px timestamps, 12px uppercase category headers with +0.02em, 600.
- Mono: code blocks in gg mono / Consolas, 14px, on #2B2D31 with 4px radius.

## Layout
- App: server rail 72px (48px icons, 8px gap) → channel sidebar 240px → chat flex → member list 240px. Top bar 48px with channel name and tools.
- Messages: 72px left inset (40px avatar at 16px), grouped by author; hover row #2E3035.
- Marketing: max 1260px; hero full-width Blurple with illustration bottom and centered text; alternating feature rows on white / #F6F6F6 with 120px padding.

## Elevation & Depth
- App depth via tone, with `0 1px 0 rgba(4,4,5,0.2)` under header bars.
- Popouts (profiles, menus): #111214 background, 8px radius, `0 8px 16px rgba(0,0,0,0.24)`.
- Modals: 8–16px radius, scrim rgba(0,0,0,0.85).
- Marketing cards: `0 8px 15px rgba(0,0,0,0.2)` on hover.

## Shapes
- Server icons: 48px circles that morph to 16px-radius squircles on hover/selected, with a white pill indicator on the left edge.
- Buttons: 3–8px radius in app; 28px pills on marketing.
- Avatars: circles with a status dot cutout (10px) bottom-right.
- Icons: 24px, solid, rounded.
- Illustrations: chunky cartoon characters, Wumpus, stars and blobs in Blurple, fuchsia, green, yellow.

## Components
- **Primary button (app):** #5865F2, white 14px/500, 38px tall, 2px 16px padding, 3–8px radius; hover #4752C4.
- **Secondary button:** #4E5058 fill, white text; hover #6D6F78.
- **Danger button:** #DA373C fill.
- **Marketing CTA:** white pill (28px radius), #23272A 20px text with download icon, 16px 32px; hover shadow and text #5865F2. Dark variant #23272A fill with white text.
- **Message input:** #383A40, 8px radius, 44px min height, "+" upload button left, emoji/gift/GIF icons right.
- **Channel row:** 32px tall, # icon, 16px/500 #949BA4; hover #35373C bg and #DBDEE1 text; selected #404249 bg and white text; unread gets a white text and left pill.
- **Mention badge:** #F23F43 pill with white 12px/700 count, 16px tall.
- **Embed:** #2B2D31 card with 4px left border in the embed color, 4px radius.

## Do's and Don'ts
**Do**
- Use the four-grey layered dark system in app views.
- Use Blurple for primary actions and mentions only.
- Make marketing loud: Blurple fields, uppercase extra-wide display, cartoon illustrations.
- Use squircle server icons with hover morph.

**Don't**
- Don't use pure #000 or pure white backgrounds in the app.
- Don't use Blurple for long text runs.
- Don't use thin or condensed display fonts.
- Don't use sharp corners on avatars or cards.

## Agent Prompt Guide
**Base prompt:**
"Design a Discord-inspired chat app: server rail #1E1F22, channel sidebar #2B2D31, chat #313338, message input #383A40 (8px radius), Noto Sans 16px with #DBDEE1 text and #949BA4 muted, Blurple #5865F2 primary buttons (3–8px radius) and mentions, status dots green #23A55A/yellow #F0B232/red #F23F43, 40px round avatars, squircle server icons."

**Example component prompts:**
1. "Marketing hero: #404EED background, 56px uppercase Archivo Black headline 'IMAGINE A PLACE...', 20px white body, white pill 'Download for Mac' and dark pill 'Open Discord in your browser'."
2. "Message group: 40px avatar, username in #F2F3F5 16px/500, '#949BA4 Today at 4:20 PM', message lines, a link embed with 4px Blurple left border."
3. "Server rail: 72px wide, 48px circular icons morphing to 16px-radius on hover, white pill indicator left, green '+' add-server circle."
