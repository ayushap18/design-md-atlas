---
version: alpha
name: Todoist
description: Warm, calm task-manager brand with cream backgrounds, tomato-red accents and a friendly slab-serif display.
source: https://www.todoist.com
colors:
  primary: "#DC4C3E"
  on-primary: "#FFFFFF"
  primary-bright: "#E44332"
  primary-soft: "#EE6449"
  background: "#FEFDFC"
  surface: "#FFF9EB"
  surface-green: "#F4FBF7"
  surface-lime: "#F6FAEB"
  surface-peach: "#FFF6F0"
  text: "#202020"
  text-muted: "#666666"
  text-subtle: "#999999"
  border: "#E6E6E6"
  p1: "#D1453B"
  p2: "#EB8909"
  p3: "#246FE0"
typography:
  display:
    fontFamily: Caecilia
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.02em
  h1: { fontFamily: Caecilia, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1 }
  h2: { fontFamily: Graphik, fontSize: 2rem, fontWeight: 600, lineHeight: 1.2 }
  h3: { fontFamily: Graphik, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Graphik, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.6 }
  app: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
rounded:
  sm: 5px
  md: 8px
  lg: 16px
  xl: 24px
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
    rounded: "{rounded.md}"
    padding: 12px 22px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: 12px 22px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: 32px
---

# Todoist — DESIGN.md

> Inspired by the public website of Todoist. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Todoist's site promises calm — "organize your work and life, finally." It achieves that with warm cream backgrounds, soft pastel bands (mint, lime, peach), a friendly slab-serif display and the brand's tomato red used precisely for actions and the checkmark logo. Product screenshots are tidy task lists with priority flags. Copy is short, reassuring and human; there's lots of breathing room.

Adjectives: **calm, warm, tidy, friendly, focused**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #DC4C3E | Tomato red: CTAs, logo, links |
| primary-bright / primary-soft | #E44332 / #EE6449 | Hover, illustration |
| background | #FEFDFC | Warm white canvas |
| surface | #FFF9EB | Cream bands |
| surface-green / surface-lime / surface-peach | #F4FBF7 / #F6FAEB / #FFF6F0 | Pastel section backgrounds |
| text | #202020 | Headlines, body |
| text-muted / text-subtle | #666666 / #999999 | Secondary, metadata |
| border | #E6E6E6 | Dividers |
| p1 / p2 / p3 | #D1453B / #EB8909 / #246FE0 | Task priority flags and check-circle borders |

Warm neutrals and pastels dominate; red is reserved for action.

## Typography
- **Display:** Caecilia (humanist slab serif); free fallback *Zilla Slab* or *Roboto Slab* (700).
- **Body/UI marketing:** Graphik; free fallback *Inter* or *Figtree*.
- **App:** system/Inter 14px.
- Display 700 tight; body 17px #666 on marketing. Sentence case.

## Layout
- 1200px container; hero left text + right product screenshot (or centered on mobile).
- Content in large rounded pastel panels (24px radius) inset from page edges.
- Testimonials and "trusted by 30M+" stats in simple rows.
- 96–128px spacing; text widths ≤ 560px.

## Elevation & Depth
- Product screenshots: `0 16px 40px rgba(32,32,32,.10)`, 12px radius.
- Popovers in app: `0 0 8px rgba(0,0,0,.1), 0 4px 16px rgba(0,0,0,.08)`.
- Pastel panels are flat — depth by color only.

## Shapes
- 8px buttons, 24px pastel panels, round check circles (18px, 1px border colored by priority).
- Icons: thin line icons (1.25px), gray, red when active.
- Illustrations: soft flat scenes with people, plants and calm objects in pastels.

## Components
- **Primary button:** #DC4C3E fill, white 16px/600, 8px radius, 44px; hover #C3392C.
- **Secondary:** transparent, 1px #E6E6E6, #202020 text.
- **Nav:** cream/white 64px, logo left, Features/For Teams/Resources/Pricing, right "Log in" + red "Start for free".
- **Task row:** 18px circle checkbox (priority-colored border), 14px task name, 12px gray description, date with small calendar icon in green/orange/red per urgency, project label right. Divider 1px #F0F0F0.
- **Quick-add:** white card, 10px radius, 1px #E6E6E6, inputs for task name/description, chips for Date/Priority/Reminders, red "Add task" button.
- **Pastel panel:** 24px radius, 48px padding, slab-serif heading.
- **Input:** 40px, 1px #E6E6E6, 8px radius, focus border #999.

## Do's and Don'ts
**Do**
- Use warm whites and pastel panels, never cold gray.
- Keep red for CTAs, logo and P1 priority only.
- Pair a friendly slab display with a neutral sans.
- Show clean task lists with priority circles.

**Don't**
- Don't use dark backgrounds for marketing.
- Don't use red for big fills or headings.
- Don't crowd panels — one idea per panel.
- Don't use sharp corners on panels.

## Agent Prompt Guide
**Base prompt:**
"Design like Todoist: warm #FEFDFC canvas with cream #FFF9EB and pastel mint/peach panels at 24px radius, slab-serif display headlines (Zilla Slab fallback for Caecilia) in #202020, Inter/Graphik body in #666666, tomato red #DC4C3E 8px-radius CTAs, tidy task lists with priority-colored round checkboxes."

**Examples:**
- "Hero: 'Clarity, finally.' slab headline, red 'Start for free' button, task-list screenshot on the right."
- "Today view: 5 tasks with P1/P2/P3 circles, due labels and project tags, quick-add at bottom."
- "Three pastel feature panels (mint, lime, peach) each with a heading, line and small illustration."
