---
version: alpha
name: Brex
description: Ambitious corporate-finance platform — deep charcoal and crisp white, a fiery Brex orange, editorial serif accents and premium product UI.
source: https://www.brex.com
colors:
  primary: "#FF5900"
  on-primary: "#FFFFFF"
  primary-hover: "#FF3D00"
  background: "#FFFFFF"
  surface: "#FCFCFD"
  surface-alt: "#F4F4F6"
  surface-dark: "#15191E"
  text: "#15191E"
  text-muted: "#60646C"
  border: "#E4E4E9"
  accent: "#FF6B18"
  accent-soft: "#FF8B66"
typography:
  display:
    fontFamily: Flecha, Instrument Serif
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: Inter, fontSize: 3.25rem, fontWeight: 600, lineHeight: 1.08, letterSpacing: -0.03em }
  h2: { fontFamily: Inter, fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.02em }
  body: { fontFamily: Inter, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.55 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 500, lineHeight: 1.45 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.8125rem }
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
  section: 128px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  button-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface-alt}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Brex — DESIGN.md

> Inspired by the public website of Brex. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Brex targets ambitious companies and enterprises, and its site balances technical precision with editorial flair: Inter for the workhorse text, an elegant serif (Flecha) for emphasis words and display moments, charcoal #15191E for gravitas, and a hot orange that signals energy and action. Product UI is shown large and polished, often over dark backgrounds.

Hold onto: **ambitious, premium, sharp, editorial, energetic**. Medium density.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #FF5900 | Brex orange — CTAs, highlights |
| primary-hover | #FF3D00 | Hover/pressed, deeper red-orange |
| accent | #FF6B18 | Gradients, icons |
| accent-soft | #FF8B66 | Soft glows, tinted states |
| on-primary | #FFFFFF | Text on orange |
| background | #FFFFFF | Page |
| surface | #FCFCFD | Subtle panels |
| surface-alt | #F4F4F6 | Cards |
| surface-dark | #15191E | Dark hero/sections, dark buttons |
| text | #15191E | Headlines, body |
| text-muted | #60646C | Supporting copy |
| border | #E4E4E9 | Hairlines |

White and charcoal dominate; orange is concentrated in CTAs, highlights and occasional orange-to-red glows behind product UI.

## Typography
- **Sans:** Inter 400–600 (Brex uses Inter directly).
- **Serif accent:** Flecha (Displaay). Free fallback: **Instrument Serif** or **Newsreader** italic.
- Pattern: Inter 600 headline with one or two words swapped to the serif, e.g. "The *intelligent* finance platform."
- Headlines tight (-0.03em), body 17px/1.55.
- Sentence case.

## Layout
- Container max ~1240px, 24/40px gutters.
- Hero: centered headline over dark #15191E with a large product dashboard and warm orange glow beneath.
- Feature sections: tabbed product areas (Corporate cards, Expense management, Travel, Bill pay) with UI crops.
- Enterprise logo walls and testimonial blocks.
- Section spacing 112–128px.

## Elevation & Depth
- Product UI over dark: `0 40px 80px rgba(0,0,0,0.45)` plus orange radial glow `radial-gradient(ellipse at bottom, rgba(255,89,0,0.35), transparent 60%)`.
- Light sections: cards on #F4F4F6 flat, or white with 1px #E4E4E9.
- Nav on dark uses `rgba(21,25,30,0.7)` + blur.

## Shapes
- Buttons: 8px radius. Cards: 16px. Large media frames: 24px.
- Icons: 20px, 1.5px stroke line icons, charcoal or orange.
- Imagery: crisp product dashboards, card renders (black metal card), customer portraits.

## Components
- **Primary button:** #FF5900, white 15px/600, 8px radius, 44px tall, 12px 20px. Hover #FF3D00.
- **Dark button:** #15191E, white text, 8px radius. On dark backgrounds: white fill, charcoal text.
- **Nav:** 68px, Brex wordmark left, links (Product, Solutions, Customers, Resources, Pricing) 15px/500, "Sign in" text, "Get started" orange button.
- **Feature card:** #F4F4F6, 16px radius, 32px padding, 20px orange line icon, 22px/600 title, body #60646C.
- **Tabbed product switcher:** pill tab group on #F4F4F6, active tab white with soft shadow.
- **Testimonial:** large serif quote 32px, author name 15px/600, role muted, company logo.
- **Input:** 44px, white, 1px #E4E4E9, 8px radius; focus 2px #FF5900 at 40% opacity ring.
- **Stat:** 48px Inter 600 number, serif italic qualifier word, muted caption.

## Do's and Don'ts
**Do**
- Mix Inter with a single serif accent word per headline.
- Use orange only for primary actions and glow moments.
- Present product UI large on charcoal with warm glow.
- Keep layouts crisp and enterprise-credible.

**Don't**
- Don't set full paragraphs in the serif.
- Don't use multiple accent hues alongside orange.
- Don't use pill-shaped CTAs; 8px radius.
- Don't use pure #000 for dark sections; use #15191E.

## Agent Prompt Guide
**Base prompt:**
"Design like Brex: white and charcoal #15191E sections, Inter 600 headlines (-0.03em) with one word in Instrument Serif italic, Inter body in #60646C. Orange #FF5900 primary buttons with 8px radius, charcoal secondary buttons. #F4F4F6 cards with 16px radius. Product dashboards over dark backgrounds with an orange radial glow."

**Examples:**
- "Hero on #15191E: 64px white headline 'The *intelligent* finance platform', orange 'Get started' and white 'Book a demo' buttons, dashboard with orange glow."
- "Product tabs: pill switcher (Cards, Expenses, Travel, Bill pay) over a UI crop."
- "Testimonial: 32px serif quote, author line, enterprise logo, on white."
