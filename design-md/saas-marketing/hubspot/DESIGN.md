---
version: alpha
name: HubSpot
description: Friendly CRM marketing with a bright coral-orange signature, warm cream bands, deep navy-black text, and a soft serif display face for headlines.
source: https://www.hubspot.com
colors:
  primary: "#FF4800"
  on-primary: "#FFFFFF"
  primary-hover: "#C93700"
  background: "#FFFFFF"
  surface: "#F8F5EE"
  surface-peach: "#FCC6B1"
  text: "#1F1F1F"
  text-muted: "#5C6670"
  border: "#DFE3EB"
  accent: "#180BB1"
  accent-sky: "#CAEBFF"
  legacy-coral: "#FF7A59"
typography:
  display:
    fontFamily: HubSpot Serif
    fontSize: 4rem
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: -0.02em
  h1: { fontFamily: HubSpot Serif, fontSize: 2.75rem, fontWeight: 500, lineHeight: 1.12 }
  h2: { fontFamily: HubSpot Sans, fontSize: 2rem, fontWeight: 600, lineHeight: 1.2 }
  h3: { fontFamily: HubSpot Sans, fontSize: 1.375rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: HubSpot Sans, fontSize: 1.125rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: HubSpot Sans, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
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
    rounded: "{rounded.md}"
    padding: 14px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    border: "2px solid {colors.text}"
    rounded: "{rounded.md}"
    padding: 12px 22px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# HubSpot — DESIGN.md

> Inspired by the public website of HubSpot. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
HubSpot speaks to small and mid-sized businesses, so the site trades sleekness for approachability. A saturated orange carries every call to action; cream panels and peach tints keep it warm; a gentle serif display face adds a human, almost publishing-house tone to otherwise practical product marketing. Pages are long, well-labeled, and full of product UI and customer faces.

Hold onto: **approachable, warm, helpful, energetic, clear**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#FF4800` | CTA orange, logo sprocket, active states |
| primary-hover | `#C93700` | Button hover/pressed |
| background | `#FFFFFF` | Default page |
| surface | `#F8F5EE` | Cream bands, card fills |
| surface-peach | `#FCC6B1` | Illustration fills, highlight panels |
| text | `#1F1F1F` | Headlines and body |
| text-muted | `#5C6670` | Secondary copy |
| border | `#DFE3EB` | Dividers, input borders |
| accent | `#180BB1` | Deep indigo for links in content, chart series |
| accent-sky | `#CAEBFF` | Light blue panels, tags |
| legacy-coral | `#FF7A59` | Older brand coral, use only for illustrations |

White and cream dominate. Orange is the only CTA color. Indigo and sky blue are supporting, not competing.

## Typography
- **Display/H1:** HubSpot Serif (proprietary), a soft contemporary serif. Free fallback: *Fraunces* (SOFT 50, opsz 72) or *Newsreader*.
- **UI/body:** HubSpot Sans (proprietary). Free fallback: *Lexend Deca* (HubSpot's former web font) or *Inter*.
- Serif only for H1/display; H2 and below switch to sans semibold.
- Body runs large (18px) with 1.6 line height for readability.
- Sentence case everywhere; no all-caps headlines. Eyebrows can be 14px semibold uppercase in orange.

## Layout
- Max content width 1240px, 12 columns, 24px gutters.
- Section padding 96–120px; alternating white and cream (`#F8F5EE`) bands.
- Hero: split layout, copy left (max 560px), product UI or customer photo collage right.
- Feature rows alternate image-left / image-right.
- Pricing: 4-column card grid with the recommended plan outlined in orange.

## Elevation & Depth
- Cards are mostly flat on cream; on white they get `0 2px 8px rgba(31,31,31,0.08)`.
- Floating UI fragments in heroes: `0 16px 40px rgba(31,31,31,0.14)`, 12px radius.
- Mega-menu dropdown: white, `0 12px 32px rgba(31,31,31,0.12)`, 16px radius.

## Shapes
- Buttons 8px radius; cards 16px; hero media panels 24px.
- Pills (full radius) for tags and filter chips.
- Icons: rounded, two-tone (ink + orange or peach), 24px.
- Illustration: chunky geometric shapes, sprocket motifs, peach/orange/sky palette.
- Photography: real customers, natural light, slightly warm grade.

## Components
- **Primary button:** `#FF4800` bg, white 16px/600 text, 8px radius, 14px 24px padding. Hover `#C93700`. Focus ring 3px `#CAEBFF`.
- **Secondary button:** transparent, 2px `#1F1F1F` border, ink text. Hover fills ink with white text.
- **Text link:** indigo `#180BB1`, underline on hover, trailing arrow for CTAs.
- **Nav:** white, 72px, logo left, product mega-menu triggers center, "Log in" text + "Get a demo" secondary + "Get started free" primary right. Utility bar above (32px, small text).
- **Product card:** cream bg, 16px radius, 32px padding, 48px icon tile in peach, H3 title, body, "Learn more" link.
- **Pricing card:** white, 1px border, 16px radius; recommended plan has 2px orange border and orange "Most popular" pill on top.
- **Input:** 48px height, 1px `#CBD6E2` border, 8px radius. Focus border `#FF4800`.
- **Testimonial:** large serif quote 28px, round avatar 56px, name semibold, company muted.

## Do's and Don'ts
**Do**
- Use the serif only at display sizes; keep everything else in sans.
- Alternate white and cream sections to pace long pages.
- Keep one orange CTA per block; pair it with an outlined secondary.
- Show real product UI frequently.

**Don't**
- Don't use orange for body text or large background fields.
- Don't use dark mode sections more than once per page.
- Don't use thin hairline type; minimum weight 400.
- Don't introduce purple gradients or neon tones.

## Agent Prompt Guide
**Base prompt:**
"Build in a HubSpot-inspired style: white and cream (#F8F5EE) bands, ink #1F1F1F text, orange #FF4800 CTAs with 8px radius. Headlines in Fraunces 500 (serif) at 56–64px, everything else in Lexend Deca or Inter, 18px body at 1.6 line height. Friendly, approachable, product screenshots with soft shadows, peach and sky-blue supporting tints."

**Examples:**
- "Hero: serif headline 'Grow better with a connected CRM', sans subcopy, orange 'Get started free' + outlined 'Get a demo', floating dashboard cards on the right."
- "Four pricing cards on cream; middle plan outlined 2px orange with 'Most popular' pill."
- "Feature grid: six cream cards with peach icon tiles, H3 titles, 'Learn more →' indigo links."
