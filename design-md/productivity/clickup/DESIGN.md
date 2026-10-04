---
version: alpha
name: ClickUp
description: High-energy all-in-one productivity brand with a purple-to-pink gradient identity, bold geometric type and dense product showcases.
source: https://clickup.com
colors:
  primary: "#7B68EE"
  on-primary: "#FFFFFF"
  pink: "#FA24CE"
  blue: "#0091FF"
  orange: "#FD9A46"
  coral: "#FC6D7B"
  yellow: "#FFC53D"
  green: "#1ED760"
  background: "#FFFFFF"
  surface: "#F7F8F9"
  text: "#202020"
  text-muted: "#646464"
  text-subtle: "#838383"
  border: "#D9D9D9"
  dark-background: "#121212"
  dark-surface: "#3D3D3E"
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 4.5rem
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -0.03em
  h1: { fontFamily: Plus Jakarta Sans, fontSize: 3rem, fontWeight: 800, lineHeight: 1.08, letterSpacing: -0.02em }
  h2: { fontFamily: Plus Jakarta Sans, fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.15 }
  h3: { fontFamily: Plus Jakarta Sans, fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: Plus Jakarta Sans, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 80px
components:
  button-primary:
    background: "linear-gradient(90deg, #7B68EE 0%, #FA24CE 100%)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 14px 28px
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: 14px 28px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 28px
---

# ClickUp — DESIGN.md

> Inspired by the public website of ClickUp. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
ClickUp promises "one app to replace them all," and its site has matching ambition: huge heavy headlines, a vivid violet-to-magenta gradient, and wall-to-wall product UI — docs, whiteboards, chat, dashboards, AI. Pages are dense and fast-paced, with many feature tabs and logo strips, but stay readable thanks to white space around big type. The tone is confident, slightly brash, and productivity-obsessed.

Adjectives: **energetic, bold, gradient-lit, dense, ambitious**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #7B68EE | Brand violet: buttons, links, selected tabs |
| pink | #FA24CE | Gradient partner, highlights |
| blue / orange / coral / yellow / green | #0091FF / #FD9A46 / #FC6D7B / #FFC53D / #1ED760 | Feature category colors, logo gradient stops, status |
| background | #FFFFFF | Canvas |
| surface | #F7F8F9 | Feature tiles |
| text | #202020 | Headlines |
| text-muted / text-subtle | #646464 / #838383 | Body, captions |
| border | #D9D9D9 | Dividers, outline buttons |
| dark-background / dark-surface | #121212 / #3D3D3E | Dark AI sections |

White base; the violet→pink gradient is the brand signature on CTAs and highlighted words.

## Typography
- **Sans:** Plus Jakarta Sans (free) — geometric, wide-ish, heavy weights available; fallback `system-ui`.
- Display 800 with tight tracking; gradient text on one key word (`background-clip: text`).
- Body 16px #646464. Eyebrow labels 14px/700 in feature color.

## Layout
- 1280px container; centered hero with giant headline, subline, gradient CTA, and full-width product screenshot.
- Feature tabs (Tasks, Docs, Chat, Whiteboards, Dashboards, AI) switching large UI previews.
- Dense bento grids of feature tiles, each color-coded.
- 80–112px spacing; logos and review badges (G2, Capterra) strip.

## Elevation & Depth
- Screenshots: `0 30px 60px -15px rgba(32,32,32,.25)`, 16px radius.
- Tiles flat on #F7F8F9; hover `0 8px 24px rgba(123,104,238,.15)`.
- Gradient glows behind AI sections on #121212.

## Shapes
- 10px buttons, 16px cards, 24px large frames, pill tags.
- Icons: filled rounded icons in category colors inside 40px rounded squares.
- Imagery: product UI collages, floating UI fragments, avatars.

## Components
- **Primary button:** violet→pink gradient (#7B68EE → #FA24CE), white 16px/700, 10px radius, 52px; hover adds glow `0 8px 24px rgba(250,36,206,.35)`.
- **Secondary:** white, 1px #D9D9D9, #202020 text.
- **Nav:** white 72px, gradient logo left, Product/Solutions/Learn/Pricing/Enterprise, right "Contact Sales", "Log in", gradient "Sign up".
- **Feature tab:** pill tabs with icon; active = violet text + #F0EEFF fill.
- **Task row (app):** status square in category color, task name 14px, assignee avatar, priority flag (red/yellow/blue/gray), due date.
- **Bento tile:** #F7F8F9, 16px radius, colored icon square, 20px/700 title, UI crop at bottom.
- **Input:** 48px, 1px #D9D9D9, 10px radius, focus ring violet 3px at 20%.

## Do's and Don'ts
**Do**
- Use the violet→pink gradient on primary CTAs and one headline word.
- Set headlines heavy (800) and large.
- Color-code features with the rainbow accents.
- Show lots of real product UI.

**Don't**
- Don't use the gradient on body text or large backgrounds.
- Don't use light 300 weights.
- Don't use more than one gradient CTA per viewport.
- Don't make tiles bordered and boxy — keep soft fills.

## Agent Prompt Guide
**Base prompt:**
"Design like ClickUp: white canvas, Plus Jakarta Sans 800 headlines in #202020 with one word in a #7B68EE→#FA24CE gradient, #646464 body, gradient 10px-radius CTA, #F7F8F9 16px-radius bento tiles color-coded with #0091FF, #FD9A46, #FFC53D, #1ED760, and large product screenshots with deep soft shadows."

**Examples:**
- "Hero: 'The everything app for work', gradient CTA 'Get started. It's FREE', G2 badges row, full-width app screenshot."
- "Feature tabs (Tasks, Docs, Chat, Whiteboards, AI) with violet active state and preview panel."
- "Task list with priority flags, status squares and avatars."
