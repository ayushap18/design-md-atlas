---
version: alpha
name: Duolingo
description: Joyful, game-like learning UI with feather green, chunky 3D-press buttons, rounded bold type and expressive character illustrations.
source: https://www.duolingo.com
colors:
  primary: "#58CC02"
  primary-shadow: "#58A700"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#4B4B4B"
  text-strong: "#3C3C3C"
  text-muted: "#777777"
  border: "#E5E5E5"
  macaw: "#1CB0F6"
  macaw-shadow: "#1899D6"
  cardinal: "#FF4B4B"
  bee: "#FFC800"
  fox: "#FF9600"
  beetle: "#CE82FF"
  humpback: "#2B70C9"
  eel: "#4B4B4B"
  correct-bg: "#D7FFB8"
  wrong-bg: "#FFDFE0"
typography:
  display:
    fontFamily: "Feather Bold, Nunito, Varela Round, sans-serif"
    fontSize: 2.5rem
    fontWeight: 800
    lineHeight: 1.2
  h1: { fontFamily: "DIN Next Rounded, Nunito, sans-serif", fontSize: 2rem, fontWeight: 700, lineHeight: 1.25 }
  h2: { fontFamily: "DIN Next Rounded, Nunito", fontSize: 1.5rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: "DIN Next Rounded, Nunito", fontSize: 1.0625rem, fontWeight: 500, lineHeight: 1.5 }
  button: { fontFamily: "DIN Next Rounded, Nunito", fontSize: 0.9375rem, fontWeight: 700, letterSpacing: 0.05em, textTransform: uppercase }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
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
    rounded: "{rounded.lg}"
    padding: 0 16px
    height: 50px
    boxShadow: 0 4px 0 {colors.primary-shadow}
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.macaw}"
    border: 2px solid {colors.border}
    rounded: "{rounded.lg}"
    boxShadow: 0 4px 0 {colors.border}
---

# Duolingo — DESIGN.md

> Inspired by the public website and app of Duolingo. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Duolingo turns learning into a cartoon game. Everything is round, bold and tactile: chunky buttons with a solid colored "ledge" under them that compresses when pressed, thick 2px outlines, big rounded type and an always-present cast of flat-vector characters led by Duo the owl. Feather green (#58CC02) is the hero color, supported by a named palette (Macaw blue, Cardinal red, Bee yellow, Fox orange, Beetle purple) used for feedback, streaks, gems and leagues.

Adjectives: **playful, encouraging, tactile, bright, gamified.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #58CC02 | Feather green — primary CTA, correct answers, progress |
| primary-shadow | #58A700 | Button ledge under green |
| background | #FFFFFF | App and site |
| surface | #F7F7F7 | Panels, disabled fills |
| text | #4B4B4B | Body (Eel) |
| text-strong | #3C3C3C | Headings |
| text-muted | #777777 | Secondary (Wolf) |
| border | #E5E5E5 | Card and button outlines (Swan) |
| macaw | #1CB0F6 | Secondary buttons, links, selected options |
| cardinal | #FF4B4B | Wrong answers, hearts |
| bee | #FFC800 | XP, gold league, crowns |
| fox | #FF9600 | Streak flame |
| beetle | #CE82FF | Super/premium touches |
| humpback | #2B70C9 | Deep blue for Super/marketing |
| correct-bg / wrong-bg | #D7FFB8 / #FFDFE0 | Feedback footer panels |

White and green dominate; the other named colors are semantic, never decorative chrome.

## Typography
- **Families:** Feather Bold (logo and big display) and DIN Next Rounded (UI). Free fallbacks: **Nunito** (800 for display, 700 UI) or **Varela Round**.
- **Scale:** 40px marketing headline / 32px page / 24px lesson prompt ("Write this in English") / 19px option text / 17px body / 15px button uppercase.
- **Weights:** body 500, headings and buttons 700–800. Buttons uppercase with +0.05em tracking.
- Headline color #3C3C3C rather than black; marketing headlines often green.

## Layout
- Lesson screen: centered 600px column, top progress bar (16px tall, rounded, green fill with lighter highlight stripe), prompt, choices, and a fixed footer with Check button.
- Learn path: center column of circular lesson nodes snaking left/right, left nav 256px with large icon tabs, right column 368px with streak/gems/league cards.
- Marketing: centered hero with Duo illustration, 2 stacked CTAs; alternating illustration/text rows with 96px spacing.

## Elevation & Depth
- Depth is a solid bottom ledge, not blur: `box-shadow: 0 4px 0 <darker shade>` on buttons and option cards; on :active the element translates down 4px and the ledge disappears.
- Cards: 2px #E5E5E5 border + `0 2px 0 #E5E5E5` ledge, 16px radius.
- No soft drop shadows; tooltips use solid fills with 2px borders.

## Shapes
- Buttons and cards: 12–16px radius. Path nodes: 70px circles with 8px ledge. Progress bars: full pill.
- Icons: thick, filled, multi-tone flat icons (flame, gem, heart, crown).
- Illustrations: flat vector characters with simple geometric shapes, rounded limbs, expressive faces, no outlines.

## Components
- **Primary button:** #58CC02 fill, white 15px/700 uppercase, 50px tall, 16px radius, `0 4px 0 #58A700`; hover #61E002; active translateY(4px) with no shadow.
- **Secondary button:** white, 2px #E5E5E5 border, #1CB0F6 text, `0 4px 0 #E5E5E5` ledge.
- **Blue button:** #1CB0F6 with #1899D6 ledge (Continue in some flows, Super promos use #2B70C9).
- **Answer option card:** white, 2px #E5E5E5, 12px radius, ledge; selected: #DDF4FF fill, #84D8FF border and #1CB0F6 text; key hint chip on the left.
- **Feedback footer:** full-width panel #D7FFB8 with green "Nicely done!" 24px/800 and green Continue; wrong: #FFDFE0 with #FF4B4B text and red button (#FF4B4B / #EA2B2B ledge).
- **Progress bar:** 16px tall #E5E5E5 track, green fill with a 4px rgba(255,255,255,0.3) inner stripe, pill.
- **Stat chips (top bar):** flag, flame #FF9600 count, gem #1CB0F6 count, heart #FF4B4B count — 17px/700.
- **Word bank tile:** white, 2px #E5E5E5 border, 12px radius, ledge, 19px text.

## Do's and Don'ts
**Do**
- Give every button and card a solid bottom ledge that compresses on press.
- Use rounded bold type and uppercase button labels.
- Map colors semantically: green correct, red wrong, orange streak, yellow XP, blue info/selection.
- Celebrate progress with characters and big friendly feedback.

**Don't**
- Don't use blurry drop shadows or glassmorphism.
- Don't use thin, serif or condensed fonts.
- Don't use sharp corners.
- Don't use green for non-positive actions.

## Agent Prompt Guide
**Base prompt:**
"Design a Duolingo-inspired learning UI: white background, Nunito 700/800 rounded type, #4B4B4B body and #3C3C3C headings, feather green #58CC02 primary buttons (50px, 16px radius, uppercase 15px/700) with a solid `0 4px 0 #58A700` ledge that presses down on active, 2px #E5E5E5 bordered cards with ledges, semantic colors (#1CB0F6 blue, #FF4B4B red, #FF9600 streak, #FFC800 XP), flat cartoon illustrations."

**Example component prompts:**
1. "Lesson screen: top 16px pill progress bar with heart counter, 24px/700 prompt 'Select the correct meaning', three option cards with ledge, fixed footer with green 'CHECK' button."
2. "Correct-answer footer: #D7FFB8 panel, green check icon, 'Amazing!' 24px/800 #58A700, full-width green 'CONTINUE' with ledge."
3. "Streak card: 2px bordered 16px-radius card, orange flame icon, '128 day streak' 24px/800, row of week circles filled in #FF9600."
