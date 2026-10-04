---
version: alpha
name: Airbnb
description: Warm, photo-first travel marketplace with a single coral-pink accent, generous rounded cards and a friendly geometric sans.
source: https://www.airbnb.com
colors:
  primary: "#FF385C"
  primary-dark: "#E00B41"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F7F7F7"
  text: "#222222"
  text-muted: "#6A6A6A"
  border: "#DDDDDD"
  border-strong: "#B0B0B0"
  accent: "#BD1E59"
  success: "#008A05"
  error: "#C13515"
typography:
  display:
    fontFamily: Airbnb Cereal VF, Circular, Nunito Sans, -apple-system, sans-serif
    fontSize: 2.75rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: Airbnb Cereal VF, fontSize: 2rem, fontWeight: 600, lineHeight: 1.2 }
  h2: { fontFamily: Airbnb Cereal VF, fontSize: 1.375rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Airbnb Cereal VF, fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: Airbnb Cereal VF, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  mono: { fontFamily: ui-monospace, fontSize: 0.875rem }
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  xl: 32px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 14px 24px
  search-pill:
    backgroundColor: "{colors.background}"
    border: 1px solid {colors.border}
    rounded: "{rounded.full}"
    height: 66px
  listing-card:
    imageRounded: "{rounded.md}"
    imageAspect: 20/19
    gap: 12px
---

# Airbnb — DESIGN.md

> Inspired by the public website of Airbnb. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Airbnb's interface is a quiet white stage for host photography. Chrome is almost colorless — charcoal type, pale grey hairlines — so the one coral-pink "Rausch" accent (#FF385C) lands with real weight on the search button, the Reserve CTA and the logo. Everything is soft: big radii, pill-shaped search, circular avatars and icon buttons. Density is relaxed on marketing surfaces and tight-but-airy in listing grids.

Adjectives: **welcoming, photographic, soft, trustworthy, uncluttered.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #FF385C | Rausch coral: search button, Reserve CTA, logo, active category underline |
| primary-dark | #E00B41 | Gradient end / pressed state for primary |
| accent | #BD1E59 | Deep magenta end of the Reserve-button gradient |
| background | #FFFFFF | Page background — nearly everything sits on white |
| surface | #F7F7F7 | Footer, hover fills, secondary panels |
| text | #222222 | Headings and body copy (never pure black) |
| text-muted | #6A6A6A | Dates, distance, "per night" captions |
| border | #DDDDDD | Card dividers, input outlines, header bottom rule |
| border-strong | #B0B0B0 | Hovered input outlines |
| success | #008A05 | Confirmations |
| error | #C13515 | Validation errors |

Coral is used sparingly — ideally one coral element per viewport. The Reserve button often uses a left-to-right gradient `#E61E4D → #E31C5F → #D70466` with a mouse-tracking radial highlight.

## Typography
- **Family:** Airbnb Cereal (proprietary, rounded geometric sans). Free fallbacks: **Nunito Sans** or **Plus Jakarta Sans**; system stack as last resort.
- **Scale:** 44px hero / 32px page title / 26px section / 22px listing title / 16px body / 14px meta / 12px legal.
- **Weights:** 400 body, 500 for nav and pills, 600 for headings and prices, 700 hero only.
- Sentence case everywhere. No uppercase labels except tiny badges. Tracking slightly negative (−0.01 to −0.02em) above 24px.
- Prices are `600` weight with the "night" unit in `400` muted.

## Layout
- Max content width ~1760px on browse grids with 80px side gutters at desktop, 40px at tablet, 24px on mobile.
- Listing detail pages narrow to ~1120px with a two-column layout: content (58%) and a sticky booking card (~33%).
- Listing grid: 6 columns ≥1880px, 5 ≥1640, 4 ≥1128, 3 ≥950, 2 ≥550, 1 below; column gap 24px, row gap 40px.
- Sticky header 80px tall with a centered search pill; category icon bar sits below it, 78px tall.
- Section spacing 48px between blocks on detail pages, separated by 1px #DDDDDD rules.

## Elevation & Depth
- Mostly flat; separation via 1px borders.
- Search pill: `0 3px 12px 0 rgba(0,0,0,0.1)` (stronger `0 2px 4px rgba(0,0,0,0.18)` on hover).
- Booking card: 1px #DDDDDD border plus `0 6px 16px rgba(0,0,0,0.12)`.
- Dropdowns/menus: `0 2px 16px rgba(0,0,0,0.12)`, radius 12px.
- Modals: centered, radius 12px, page dimmed with rgba(0,0,0,0.5). Bottom sheets on mobile with 16px top radii.

## Shapes
- Photos: 12px radius on grid cards, 12–16px on detail galleries (outer corners only on the 5-image mosaic).
- Buttons: 8px radius. Search and filter chips: full pill. Icon buttons: perfect circles, 32–40px.
- Icons: thin 2px-stroke line icons, 16–24px, filled only for active state (e.g., wishlist heart turns #FF385C with white stroke).
- Imagery: bright, natural-light interiors and exteriors, never illustrations in the browse flow.

## Components
- **Primary button:** coral/gradient fill, white text 16px/600, 14px 24px padding, 8px radius, 48px min height. Pressed: scale(0.96).
- **Secondary button:** white fill, 1px #222222 border, #222222 text, 8px radius. Hover: #F7F7F7 fill.
- **Text link button:** #222222, underlined, 600 weight.
- **Search pill:** white, 1px #DDDDDD border, full radius, shadow as above; segments ("Where", "When", "Who") separated by 1px vertical dividers; coral circular search button 48px on the right.
- **Listing card:** image (radius 12px, aspect ~1:1, dot pager, heart top-right), then title 15px/600, meta lines 15px muted, price 15px/600. No card border or background.
- **Category bar:** 24px line icons above 12px/500 labels, muted at 0.64 opacity; active gets #222 text and a 2px underline.
- **Inputs:** 56px tall, 1px #B0B0B0 border, 8px radius, floating label 12px muted; focus 2px #222 border.
- **Badges:** "Guest favorite" white pill with 600 text and subtle shadow over photos.
- **Avatar:** circle, 40–56px, with "Superhost" small coral-shield badge.

## Do's and Don'ts
**Do**
- Keep the page white and let photographs carry color.
- Limit coral to the single most important action per screen.
- Use #222222 for text and #DDDDDD hairlines rather than pure black and grey boxes.
- Round everything: 8px controls, 12px media, pills for search and filters.
- Use 2px-stroke line icons with consistent 24px boxes.

**Don't**
- Don't add colored section backgrounds or saturated secondary hues.
- Don't use sharp-cornered images or heavy borders around listing cards.
- Don't uppercase headings or use letter-spaced labels.
- Don't stack multiple coral buttons side by side.
- Don't put text over photography except small white pills.

## Agent Prompt Guide
**Base prompt:**
"Design in an Airbnb-inspired style: white background, #222222 text, #DDDDDD 1px dividers, a single coral #FF385C accent for the main CTA. Font: Nunito Sans (as a stand-in for a rounded geometric sans), headings 600 weight, sentence case. Images have 12px radius; buttons 8px; search and chips are full pills with soft shadow `0 3px 12px rgba(0,0,0,0.1)`. Generous whitespace, flat surfaces, 2px-stroke line icons."

**Example component prompts:**
1. "Build a listing card: square photo with 12px radius, heart icon top-right, dot pager at bottom; below it title 15px/600 #222, two muted lines (#6A6A6A), and '$184 night' with price in 600."
2. "Build a sticky booking panel: white card, 12px radius, 1px #DDDDDD border, shadow `0 6px 16px rgba(0,0,0,0.12)`, date/guest inputs in a bordered 2x1 grid, and a full-width gradient #E61E4D→#D70466 'Reserve' button."
3. "Build a header search pill with three segments (Where / When / Who) and a 48px coral circular search button."
