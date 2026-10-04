---
version: alpha
name: Cal.com
description: Monochrome, open-source scheduling infrastructure brand — near-black on white, the custom Cal Sans display, and crisp bordered UI.
source: https://cal.com
colors:
  primary: "#242424"
  on-primary: "#FFFFFF"
  primary-hover: "#141414"
  background: "#FFFFFF"
  surface: "#F4F4F4"
  surface-subtle: "#F9F9F9"
  text: "#141414"
  text-muted: "#898989"
  text-secondary: "#6B7280"
  border: "#E1E2E3"
  border-strong: "#D1D1D1"
  dark-surface: "#343434"
  accent: "#6349EA"
  info-soft: "#EFF6FE"
  rating: "#FBBC04"
typography:
  display:
    fontFamily: Cal Sans
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: Cal Sans, fontSize: 3rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.01em }
  h2: { fontFamily: Cal Sans, fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.15 }
  h3: { fontFamily: Inter, fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.45 }
  mono: { fontFamily: Roboto Mono, fontSize: 0.8125rem }
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
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  button-secondary:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: 10px 18px
  card:
    backgroundColor: "#FFFFFF"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Cal.com — DESIGN.md

> Inspired by the public website of Cal.com. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Cal.com is "scheduling infrastructure for everyone," and the brand is engineered to look neutral enough to white-label. It is almost entirely black, white and gray, with a distinctive custom display face (Cal Sans) giving headlines personality. Booking widgets, availability grids and app-store integrations are shown in bordered white cards on a light gray canvas. The result is precise, open-source credible and quietly premium.

Adjectives: **monochrome, precise, neutral, open, premium**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #242424 | Primary buttons, selected dates |
| primary-hover | #141414 | Hover |
| background | #FFFFFF | Cards, canvas |
| surface / surface-subtle | #F4F4F4 / #F9F9F9 | Page bands, booker sidebars |
| text | #141414 | Headlines, body |
| text-muted / text-secondary | #898989 / #6B7280 | Secondary copy, metadata |
| border / border-strong | #E1E2E3 / #D1D1D1 | Card and input borders |
| dark-surface | #343434 | Dark tooltips, dark-mode panels |
| accent | #6349EA | Rare highlight (badges, integrations) |
| info-soft | #EFF6FE | Info banners |
| rating | #FBBC04 | Review stars |

~95% grayscale. Color appears only via third-party logos, stars and a rare purple badge.

## Typography
- **Display:** Cal Sans (open-source, free on GitHub/Google Fonts) — geometric, tight, semibold.
- **Body:** Inter (fallback `system-ui`); Manrope appears in some marketing sections.
- **Mono:** Roboto Mono for API/embed snippets.
- Display tightly tracked; body 16px; UI labels 14px/500.

## Layout
- 1200px container on a #F4F4F4 page with large white rounded "sheet" sections.
- Hero split: headline + subline + "Sign up with Google" (dark) and "Sign up with email" (outline) left, interactive booker widget right.
- Feature grids 3-up of bordered cards; app-store logo grid.
- 96px section spacing; frequent 1px dividers.

## Elevation & Depth
- Mostly borders: 1px #E1E2E3 on everything.
- Booker widget: `0 4px 24px rgba(20,20,20,.06)`, 16px radius.
- Hover on cards: border to #D1D1D1 + `0 2px 8px rgba(0,0,0,.04)`.

## Shapes
- 10px buttons, 16px cards, 24px large sheets, 8px date cells.
- Icons: Lucide-style 1.5px line icons in #141414.
- Imagery: product UI only, avatars as circles; integration logos in color inside gray tiles.

## Components
- **Primary button:** #242424 fill, white 14px/600, 10px radius, 40px; hover #141414. Google variant includes the G logo left.
- **Secondary:** white, 1px #E1E2E3, #141414 text.
- **Nav:** 64px white/blurred bar, logo left, Solutions/Enterprise/Developer/Resources/Pricing, right "Sign in" + dark "Get started".
- **Booker widget:** 3 columns — host info (avatar, event name, duration, location icons), month calendar (available dates on #F4F4F4 8px cells, selected #242424 white), time-slot list (outline 40px buttons).
- **Availability row:** day toggle switch (dark when on), time range inputs, "+" icon.
- **Badge:** 6px radius, #F4F4F4 fill, 12px/500 text.
- **Input:** 36–40px, 1px #D1D1D1, 10px radius, focus ring `0 0 0 2px #141414` offset 1px.

## Do's and Don'ts
**Do**
- Keep the palette black/white/gray.
- Use Cal Sans only for headlines; Inter for everything else.
- Use 1px borders as the main structural device.
- Show the booker widget and availability UI as hero art.

**Don't**
- Don't add a colored brand primary.
- Don't use heavy shadows or gradients.
- Don't set body copy in Cal Sans.
- Don't use pill-shaped primary buttons.

## Agent Prompt Guide
**Base prompt:**
"Design like Cal.com: monochrome UI on a #F4F4F4 page with white 16–24px-radius sheets, Cal Sans semibold headlines, Inter body in #141414 with #898989 muted text, #242424 10px-radius primary buttons, 1px #E1E2E3 borders everywhere, Lucide line icons, no brand color."

**Examples:**
- "Booker widget: host column, month calendar with 8px date cells (selected black), time-slot outline buttons."
- "Hero: 'The better way to schedule your meetings', dark 'Sign up with Google' + outline 'Sign up with email', G2 star rating row."
- "Availability settings: 7 rows with toggles, time inputs and add buttons in a bordered card."
