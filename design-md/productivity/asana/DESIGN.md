---
version: alpha
name: Asana
description: Warm, editorial work-management brand — near-black and bone-white canvases, coral accents, a sharp sans paired with an elegant serif.
source: https://asana.com
colors:
  primary: "#0D0E10"
  on-primary: "#FFFFFF"
  coral: "#F06A6A"
  coral-bright: "#FF584A"
  background: "#FFFFFF"
  surface: "#F5F4F3"
  surface-dark: "#1E1F21"
  text: "#0D0E10"
  text-muted: "#6D6E6F"
  text-subtle: "#A2A0A2"
  border: "#DBDBDB"
  navy: "#2E3C54"
  purple: "#9672F5"
  yellow: "#F8DF72"
  green: "#5DA283"
typography:
  display:
    fontFamily: PP Editorial New
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: Proxima Nova, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1, letterSpacing: -0.01em }
  h2: { fontFamily: Proxima Nova, fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.15 }
  h3: { fontFamily: Proxima Nova, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Proxima Nova, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.55 }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 6px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    borderColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Asana — DESIGN.md

> Inspired by the public website of Asana. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Asana's current look is editorial and grown-up: lots of white and bone (#F5F4F3), confident near-black type, and the coral of its three-dot logo as the warm spark. Big serif headlines (Editorial New) occasionally replace the sans for a magazine feel. Product screenshots are clean and colorful (project boards, timelines, goals) and sit inside soft gradient or tinted frames.

Adjectives: **editorial, warm, assured, organized, human**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #0D0E10 | Primary pill buttons, headlines |
| coral / coral-bright | #F06A6A / #FF584A | Logo, highlights, accent underline, illustrated moments |
| background | #FFFFFF | Canvas |
| surface | #F5F4F3 | Bone panels and alternating bands |
| surface-dark | #1E1F21 | Dark bands, product dark mode |
| text-muted / text-subtle | #6D6E6F / #A2A0A2 | Secondary copy |
| border | #DBDBDB | Dividers, inputs |
| navy | #2E3C54 | Deep accent band |
| purple / yellow / green | #9672F5 / #F8DF72 / #5DA283 | Project color chips, illustration |

Black/white/bone dominate; coral is the identifying accent (~5%).

## Typography
- **Sans:** Proxima Nova (Asana's long-time UI/marketing face); free fallback *Figtree* or *Montserrat* (tighter: Figtree).
- **Serif:** PP Editorial New for display headlines; free fallback *Instrument Serif* or *Newsreader*.
- **Mono:** IBM Plex Mono for rare technical labels.
- Serif display at 400 weight, tight tracking; sans headings 600–700.
- Body 17px/1.55. Sentence case.

## Layout
- 1280px container; hero with large centered serif headline, pill CTAs, and a wide product screenshot below.
- Content bands alternate white and bone; one dark #1E1F21 band for enterprise/AI.
- Feature grids 3-up; customer logos in grayscale row.
- 96–128px vertical rhythm.

## Elevation & Depth
- Soft: screenshot frames `0 12px 40px rgba(13,14,16,.12)`, 12–20px radius.
- Cards on bone are flat; white cards on bone get `0 1px 3px rgba(0,0,0,.06)`.

## Shapes
- Pill buttons, 12px cards, 20px media frames.
- Icons: simple 1.5px line icons, black.
- Imagery: product UI in pastel project colors; occasional photography of people at work; coral three-dot motif.

## Components
- **Primary button:** #0D0E10 pill, white 16px/600, 48px tall; hover #2A2B2D.
- **Secondary:** transparent pill, 1px black border.
- **Coral accent button (sparingly):** #F06A6A pill with #0D0E10 or white text.
- **Nav:** white 72px, three-dot logo + wordmark, Product/Solutions/Resources/Enterprise/Pricing, right "Contact sales", "Log in", black "Get started" pill.
- **Task row (app):** 36px row, round check circle (1.5px border, green #5DA283 when done), task name 14px, assignee avatar circle, due date chip.
- **Board card:** white, 1px #E8E8E8, 8px radius, colored project tag pill.
- **Feature card:** #F5F4F3, 12px radius, 32px padding, 22px/600 title.
- **Input:** 48px, 1px #DBDBDB, 6px radius, focus border black.

## Do's and Don'ts
**Do**
- Combine an elegant serif display with a clean sans.
- Use black pill CTAs and coral only as accent.
- Alternate white and bone backgrounds.
- Show colorful product UI inside soft frames.

**Don't**
- Don't use coral for large backgrounds.
- Don't use square-cornered buttons.
- Don't mix many saturated colors outside product shots.
- Don't set body text in the serif.

## Agent Prompt Guide
**Base prompt:**
"Design like Asana: white and bone #F5F4F3 bands, near-black #0D0E10 text and pill CTAs, coral #F06A6A as the only accent, editorial serif display headlines (Instrument Serif fallback for Editorial New) paired with Figtree/Proxima body, 12px-radius flat cards, product screenshots in 20px-radius frames with soft shadows."

**Examples:**
- "Hero: centered serif headline 'Work management for teams that move fast', black pill 'Get started' + outline pill 'See how it works'."
- "Task list component: check circles, names, avatars, due-date chips, project color tags."
- "Customer story band on #1E1F21 with white serif quote and coral attribution line."
