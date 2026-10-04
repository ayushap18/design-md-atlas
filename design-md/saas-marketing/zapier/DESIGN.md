---
version: alpha
name: Zapier
description: Cream-paper automation brand with a deep brown-black ink, a punchy orange spark, and a condensed display face that feels industrial yet friendly.
source: https://zapier.com
colors:
  primary: "#FF4F00"
  on-primary: "#FFFEFB"
  background: "#FFFEFB"
  surface: "#F8F4F0"
  surface-strong: "#ECEAE3"
  text: "#201515"
  text-muted: "#605D52"
  text-subtle: "#939084"
  border: "#C5C0B1"
  border-light: "#DFDCD2"
  ink-soft: "#36342E"
  accent: "#695BE8"
  danger: "#D12D37"
typography:
  display:
    fontFamily: Degular Display
    fontSize: 5rem
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.01em
  h1: { fontFamily: Degular Display, fontSize: 3.5rem, fontWeight: 600, lineHeight: 1.0 }
  h2: { fontFamily: Degular Display, fontSize: 2.5rem, fontWeight: 600, lineHeight: 1.05 }
  h3: { fontFamily: Inter, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.8125rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 112px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-dark:
    backgroundColor: "{colors.text}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.background}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    padding: 24px
---

# Zapier — DESIGN.md

> Inspired by the public website of Zapier. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Zapier's marketing site sits on cream paper instead of white, uses a warm brown-black for ink, and punctuates with the orange of its spark logo. Headlines are set in a compact, slightly condensed grotesque (Degular) that gives the brand a workshop/poster feel, while body copy is plain Inter. Lots of app-logo grids, workflow diagrams, and outlined cards with visible borders.

Hold onto: **warm, practical, outlined, crisp, orange-sparked**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#FF4F00` | Zapier orange: primary CTA, logo, highlights |
| background | `#FFFEFB` | Cream page canvas |
| surface | `#F8F4F0` | Alternate bands |
| surface-strong | `#ECEAE3` | Tag fills, hover rows |
| text | `#201515` | Brown-black ink |
| ink-soft | `#36342E` | Secondary headings, dark buttons hover |
| text-muted | `#605D52` | Body secondary |
| text-subtle | `#939084` | Captions, placeholders |
| border | `#C5C0B1` | Card and input borders (visible, warm) |
| border-light | `#DFDCD2` | Dividers |
| accent | `#695BE8` | AI/agents features, sparing |
| danger | `#D12D37` | Errors |

Cream and ink carry the page. Orange marks the single most important action. Purple appears only around AI features.

## Typography
- **Display:** Degular Display (OH no Type, commercial). Free fallback: *Bricolage Grotesque* (wdth 75–85, weight 600) or *Archivo* condensed widths.
- **Body/UI:** Inter.
- **Mono:** JetBrains Mono for code steps and API bits.
- Display sizes are tight (line height 0.95–1.0) and semibold.
- Body 16px/1.55, muted color for long paragraphs.
- Sentence case; eyebrow labels 13px Inter 600 uppercase with +0.04em tracking.

## Layout
- Max width 1280px, 12 columns, 24px gutters, 32px outer padding.
- Sections 96–120px apart, separated by thin `#DFDCD2` rules or tone shifts.
- Hero: centered or left headline with a workflow diagram (trigger → action nodes) or app-logo cloud.
- Template and integration grids are dense: 4-up cards at 24px gap.

## Elevation & Depth
- Borders over shadows. Cards default to 1px `#C5C0B1` borders on cream.
- Hover lifts: `0 4px 12px rgba(32,21,21,0.08)` plus border darkening to `#939084`.
- Modals: `0 24px 48px rgba(32,21,21,0.18)`.

## Shapes
- Buttons 4px radius (squared). Cards 8px. Large showcase panels 20px.
- App icons sit in 40px rounded squares (8px) with 1px border.
- Icons: 1.5px stroke, rounded caps.
- Diagrams: rounded rectangle nodes connected by 1px dashed lines with small orange dots.

## Components
- **Primary button:** `#FF4F00` bg, cream text 15px/600, 4px radius, 12px 20px. Hover `#E64600`. Focus 2px ink outline offset 2px.
- **Dark button:** ink `#201515` bg, cream text. Hover `#36342E`.
- **Outline button:** 1px `#201515` border, transparent bg.
- **Nav:** cream bg, 64px, spark logo left, menu center, "Log in" link + "Sign up" orange button. 1px bottom border.
- **Integration card:** cream bg, 1px border, 8px radius, 24px padding, two app icons with a "+" between, title 16px/600, description muted.
- **Workflow step node:** white bg, 1px border, 12px radius, 16px padding, app icon + "1. Trigger" mono label + step title.
- **Input:** 44px, 1px `#C5C0B1` border, 4px radius, cream bg; focus border `#FF4F00`.
- **Tag:** `#ECEAE3` bg, 12px/500 ink text, full radius, 4px 10px.

## Do's and Don'ts
**Do**
- Use cream `#FFFEFB`, not white, for the page.
- Prefer visible warm borders over shadows.
- Set headlines in a condensed semibold grotesque with tight leading.
- Show apps connected by simple node diagrams.

**Don't**
- Don't use cool grays; every neutral should be warm.
- Don't round buttons into pills.
- Don't use orange for large backgrounds.
- Don't mix more than one accent hue per section.

## Agent Prompt Guide
**Base prompt:**
"Design in a Zapier-inspired style: cream #FFFEFB canvas, brown-black ink #201515, orange #FF4F00 primary CTA. Headlines in Bricolage Grotesque condensed 600 with 0.95 line height, body in Inter. Cards with 1px warm borders #C5C0B1 and 8px radius, 4px squared buttons, warm neutrals only."

**Examples:**
- "Hero with 80px condensed headline 'Automate without limits', subcopy, orange 'Start free with email' + outlined Google button, and a 3-node workflow diagram."
- "Integration grid: 4-up bordered cards, each with two app icons joined by '+', title and muted description."
- "Template card list with tags in #ECEAE3 pills and a 'Try it' outline button."
