---
version: alpha
name: Lyft
description: Friendly hot-pink brand energy on a deep purple-black base, with pill-shaped buttons, rounded cards and warm, human photography.
source: https://www.lyft.com
colors:
  primary: "#FF00BF"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F5F4F7"
  text: "#0C0B31"
  text-muted: "#5C5A75"
  border: "#E3E2E8"
  accent: "#7A2BFF"
  ink: "#0C0B31"
  pink-dark: "#D400A0"
  success: "#00A86B"
  error: "#E5254B"
typography:
  display:
    fontFamily: Lyft Pro
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: Lyft Pro, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1 }
  h2: { fontFamily: Lyft Pro, fontSize: 2rem, fontWeight: 700, lineHeight: 1.2 }
  h3: { fontFamily: Lyft Pro, fontSize: 1.375rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Lyft Pro, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.55 }
  label: { fontFamily: Lyft Pro, fontSize: 1rem, fontWeight: 600, lineHeight: 1.25 }
  caption: { fontFamily: Lyft Pro, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
    height: 52px
  button-secondary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 14px 28px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 32px
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    height: 52px
---

# Lyft — DESIGN.md

> Inspired by the public website of Lyft. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Lyft positions itself as the warmer ride-share, and the visual system says so plainly: a saturated magenta-pink that no one else in mobility owns, a deep indigo-black for contrast, round friendly shapes, and photography of smiling riders and drivers in sunlit cities. Copy is conversational and first-person-plural. The page feels generous and upbeat rather than austere.

Adjectives: **friendly, vivid, rounded, optimistic, human**.

Density is low on marketing pages (big type, big imagery, wide gaps) and medium in the app, where pink is pulled back to a single action.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#FF00BF` | Lyft Pink — primary CTA, logo, highlight shapes |
| pink-dark | `#D400A0` | Hover/pressed pink |
| on-primary | `#FFFFFF` | Text on pink or ink |
| ink | `#0C0B31` | Deep indigo-black for text, dark sections, secondary buttons |
| background | `#FFFFFF` | Default canvas |
| surface | `#F5F4F7` | Soft lavender-gray cards and bands |
| text | `#0C0B31` | Body and headings |
| text-muted | `#5C5A75` | Supporting copy |
| border | `#E3E2E8` | Input borders, dividers |
| accent | `#7A2BFF` | Purple secondary highlight, illustrations, links on dark |
| success | `#00A86B` | Confirmations |
| error | `#E5254B` | Errors |

Pink is loud, so it is rationed: one pink element per viewport plus the logo. Ink carries most headings and dark hero bands.

## Typography
- **Family:** Lyft Pro (proprietary, rounded geometric grotesk). Free fallbacks: "Plus Jakarta Sans", "DM Sans", Arial.
- **Weights:** 700 for display and H1/H2, 600 for H3 and labels, 400 body.
- **Scale:** 64px display, 48px H1, 32px H2, 22px H3, 17px body, 14px caption.
- **Tracking:** −0.02em on display; default elsewhere.
- **Casing:** Sentence case. Buttons are short verbs ("Get the app", "Apply to drive").
- Headlines often break onto two or three lines and can carry a word highlighted in pink.

## Layout
- 12-column grid, 1200px max width, 24px gutters, 80px desktop side padding.
- Hero: split layout — ink or white background, headline + CTA left, large rounded photo or phone mockup right.
- Section spacing 80–120px; card grids of 3 with 24px gaps.
- Rider/driver split: prominent two-tab or two-card switch near the top to route audiences.
- Mobile: single column, 24px side padding, full-width pill buttons.

## Elevation & Depth
- Soft and minimal. Cards rely on `#F5F4F7` fill instead of shadows.
- Floating elements (app sheets, sticky CTAs, dropdowns): `0 8px 24px rgba(12,11,49,0.12)`.
- Hover lift on interactive cards: translateY(-2px) plus the shadow above.
- Layered decorative blobs or rounded pink/purple shapes sit behind phone mockups for depth.

## Shapes
- Buttons: full pill.
- Cards and images: 24px radius; small tiles 16px.
- Inputs: 8px radius.
- Icons: rounded-stroke 2px line icons, ink color; spot illustrations use pink and purple flat fills.
- Photography: bright daylight, people-first, cropped into 24px-rounded rectangles or circles.

## Components
- **Primary button:** pink `#FF00BF`, white 16px/600 label, 52px tall, pill, 14px 28px padding. Hover `#D400A0`. Focus: 3px ring `rgba(255,0,191,0.35)` offset 2px.
- **Secondary button:** ink `#0C0B31` fill, white label, pill. On dark sections, inverts to white fill with ink text.
- **Ghost button:** transparent, 2px ink border, pill.
- **Text link:** ink, 600 weight, underline offset 3px; on dark backgrounds `#FFFFFF` with pink hover.
- **Card:** `#F5F4F7`, 24px radius, 32px padding, 22px/600 title, 17px body, optional arrow link.
- **Input:** white, 1px `#E3E2E8` border, 8px radius, 52px tall; focus border 2px ink.
- **Nav:** white, 72px tall, pink wordmark left, 16px/600 links centered, "Log in" text link and pink "Sign up" pill right.
- **App download block:** ink band with two black store badges and a QR code in a white 16px-rounded tile.
- **Badge:** pill, 12px/600, pink 10% tint background `#FFE5F7` with `#D400A0` text.

## Do's and Don'ts
**Do**
- Use pink for the single most important action and the logo.
- Pair pink with ink `#0C0B31`, not pure black.
- Round everything: pill buttons, 24px cards, circular avatars.
- Feature real, warm photography of people.
- Keep copy friendly and second-person.

**Don't**
- Don't fill large backgrounds with pink; use it on shapes and buttons.
- Don't use sharp corners or 4px-radius buttons.
- Don't use pure `#000000` for text.
- Don't stack multiple pink buttons side by side.
- Don't use cold, empty-street car photography.

## Agent Prompt Guide
**Base prompt:**
"Design in a Lyft-inspired style: Lyft Pink `#FF00BF` for the primary pill button, deep ink `#0C0B31` for text and dark sections, soft `#F5F4F7` cards with 24px radius. Font: Plus Jakarta Sans (stand-in for Lyft Pro), 700 headlines, 17px body. Friendly, rounded, warm photography, minimal shadows."

**Example component prompts:**
1. "Hero: ink background, white 64px/700 headline 'Rides for a wide range of needs', 17px white body, pink pill 'Get a ride' + white-outlined pill 'Drive with Lyft', photo of smiling rider on right in 24px-rounded frame."
2. "Three feature cards on white: `#F5F4F7`, 24px radius, 32px padding, line icon, 22px/600 title, body text, ink arrow link."
3. "Signup form: white inputs with 1px `#E3E2E8` border, 8px radius, 52px tall, full-width pink pill submit, legal text 14px `#5C5A75`."
