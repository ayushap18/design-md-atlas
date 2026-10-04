---
version: alpha
name: Loom
description: Bright, approachable async-video brand with a signature blurple, rounded geometric type and camera-bubble product visuals.
source: https://www.loom.com
colors:
  primary: "#625DF5"
  on-primary: "#FFFFFF"
  primary-hover: "#4F4AE0"
  primary-soft: "#EFEEFE"
  atlassian-blue: "#1868DB"
  background: "#FFFFFF"
  surface: "#F7F7FA"
  dark-background: "#101214"
  dark-surface: "#1D1F22"
  ink-violet: "#3B394E"
  text: "#101214"
  text-muted: "#5E5C75"
  border: "#E2E1EA"
  record-red: "#FF4D4F"
  pink: "#FF9EE6"
typography:
  display:
    fontFamily: Circular
    fontSize: 4.25rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.025em
  h1: { fontFamily: Circular, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: Circular, fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.15 }
  h3: { fontFamily: Circular, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Circular, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.55 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 6px
  md: 10px
  lg: 20px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 88px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Loom — DESIGN.md

> Inspired by the public website of Loom. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Loom makes recording a quick video feel as casual as sending a message, and the brand is correspondingly friendly. A saturated blue-violet ("blurple") marks actions, headlines are rounded and bold, and the hero art is always a screen recording with a circular camera bubble of a smiling person in the corner. Pages are light, roomy and human, with occasional dark sections for enterprise/AI. Since joining Atlassian, Atlassian blue shows up in co-branded spots.

Adjectives: **friendly, human, bright, rounded, effortless**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #625DF5 | Loom blurple: CTAs, links, logo |
| primary-hover | #4F4AE0 | Hover |
| primary-soft | #EFEEFE | Secondary buttons, chips, tinted bands |
| atlassian-blue | #1868DB | Co-branded Atlassian moments |
| background | #FFFFFF | Canvas |
| surface | #F7F7FA | Cards, alternating bands |
| dark-background / dark-surface | #101214 / #1D1F22 | Dark sections and video player chrome |
| ink-violet | #3B394E | Dark violet-gray for captions |
| text / text-muted | #101214 / #5E5C75 | Copy |
| border | #E2E1EA | Inputs, dividers |
| record-red | #FF4D4F | Recording dot, "Rec" state |
| pink | #FF9EE6 | Illustration accent |

White and soft violet tints dominate; blurple is the action color.

## Typography
- **Sans:** Circular (Lineto); free fallback *Figtree* or *Plus Jakarta Sans*; `system-ui`.
- Bold (700) headlines with slight negative tracking; body 17px.
- Mono only in developer SDK pages.

## Layout
- 1200px container; hero split: headline + subline + "Get Loom for free" left, product video right; centered on mobile.
- Use-case rows (Engineering, Sales, Design, Support) with recording mockups.
- Social proof: logo strip and big testimonial cards.
- 88–120px section spacing.

## Elevation & Depth
- Video frames: `0 24px 64px rgba(16,18,20,.18)`, 20px radius.
- Camera bubble: circular with 4px white ring and `0 8px 20px rgba(0,0,0,.25)`.
- Cards flat on #F7F7FA; hover subtle shadow.

## Shapes
- 10px buttons, 20px cards/media, 32px large panels, circles for camera bubbles and avatars.
- Icons: rounded 2px stroke, blurple accents.
- Imagery: screen recordings with face bubbles, emoji reactions, comment timestamps.

## Components
- **Primary button:** #625DF5, white 16px/500, 10px radius, 48px; hover #4F4AE0.
- **Secondary:** #EFEEFE fill, blurple text.
- **Nav:** white 72px, Loom logo left, Product/Solutions/Resources/Pricing, right "Sign in", "Contact sales", blurple "Get Loom for free".
- **Video card:** 16:9 thumbnail, 12px radius, duration badge (rgba(0,0,0,.7), white 12px) bottom-right, title 15px/500, creator avatar + views below.
- **Camera bubble:** 120–160px circle, white ring, bottom-left of recording.
- **Recorder control bar:** dark #1D1F22 pill, red record dot, timer, pause/restart/trash icons.
- **Reaction chip:** pill with emoji + count on #F7F7FA.
- **Input:** 48px, 1px #E2E1EA, 10px radius, blurple focus ring.

## Do's and Don'ts
**Do**
- Show screen + face bubble as the hero visual.
- Use blurple for action and soft violet tints for secondary.
- Keep type rounded, bold and warm.
- Use generous radii and whitespace.

**Don't**
- Don't use corporate stock photos — use real recordings.
- Don't use sharp corners.
- Don't overuse dark sections; light-first.
- Don't use red except for recording state.

## Agent Prompt Guide
**Base prompt:**
"Design like Loom: white canvas with #F7F7FA and #EFEEFE tinted bands, bold rounded sans (Figtree fallback for Circular) in #101214, #5E5C75 body, blurple #625DF5 10px-radius CTAs, 20px-radius video frames with soft deep shadows, circular camera bubbles with white rings, red #FF4D4F only for recording dots."

**Examples:**
- "Hero: 'Record your screen and camera in one click', blurple CTA, video mockup with face bubble bottom-left."
- "Video library grid: 3-up thumbnails with duration badges, titles, avatars and view counts."
- "Floating recorder control bar with record dot and timer."
