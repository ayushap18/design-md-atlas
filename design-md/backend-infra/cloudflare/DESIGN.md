---
version: alpha
name: Cloudflare
description: Enterprise-scale network branding with clean white pages, deep navy text, and Cloudflare's signature orange used for calls to action and the cloud mark.
source: https://www.cloudflare.com
colors:
  primary: "#FF4801"
  on-primary: "#FFFFFF"
  primary-classic: "#F38020"
  secondary: "#FBAD41"
  background: "#FFFFFF"
  surface: "#F7F7F8"
  surface-warm: "#FFF6EE"
  text: "#222222"
  text-muted: "#595959"
  border: "#D9D9D9"
  navy: "#0A1D3A"
  link: "#0051C3"
typography:
  display:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: Inter, fontSize: 2.5rem, fontWeight: 600, lineHeight: 1.15 }
  h2: { fontFamily: Inter, fontSize: 2rem, fontWeight: 600, lineHeight: 1.2 }
  h3: { fontFamily: Inter, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: JetBrains Mono, fontSize: 0.875rem }
rounded:
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Cloudflare — DESIGN.md

> Inspired by the public website of Cloudflare. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Cloudflare speaks to CISOs and indie developers at once, so the site balances enterprise sobriety with an unmistakable orange. Pages are white and structured, with navy text, globe and network-map illustrations, and stat callouts ("~20% of websites"). Orange is reserved for action: buttons, the cloud logo, and short accent rules. Density is high — mega-menus and product grids carry dozens of products — but kept orderly by strict grids.

Adjectives: **trustworthy, global, orderly, energetic, enterprise**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #FF4801 | Current CTA orange |
| primary-classic | #F38020 | Logo cloud orange, illustrations |
| secondary | #FBAD41 | Logo's lighter cloud, warm gradients |
| background | #FFFFFF | Main canvas |
| surface | #F7F7F8 | Alternating section bands |
| surface-warm | #FFF6EE | Tinted promo bands |
| text | #222222 | Body and headings |
| text-muted | #595959 | Descriptions |
| border | #D9D9D9 | Cards, inputs |
| navy | #0A1D3A | Dark hero bands and footer |
| link | #0051C3 | Inline links in docs and long copy |

White + navy dominate; orange is ~5% and always means "do this."

## Typography
- Cloudflare uses a proprietary grotesk on marketing pages; use **Inter** as the free equivalent, `system-ui` fallback.
- Headings semibold (600), modest negative tracking, sentence case.
- Body 16px/1.6. Docs use 15–16px with blue links.
- Mono: JetBrains Mono or `ui-monospace` for Workers code samples.
- Stats set large (48–64px, 600) with a small caption.

## Layout
- 1200–1280px container, 12-column grid, 24px gutters.
- Hero: headline + subline left, two buttons, illustration (globe, network lines) right.
- Product grids: 3–4 columns of compact cards with icon, name, one line.
- Sections alternate white and #F7F7F8; one navy band per page for big statements.
- Footer: navy #0A1D3A, 5–6 columns of white/gray links.

## Elevation & Depth
- Restrained: cards are flat with 1px borders; hover adds `0 4px 16px rgba(0,0,0,.08)`.
- Mega-menu panels: white with `0 12px 32px rgba(10,29,58,.12)`.
- No glassmorphism.

## Shapes
- Small radii: 4px buttons and inputs, 8px cards.
- Icons: product icons in orange/navy duotone line style, 32–48px.
- Illustrations: flat vector globes, data-center dots and connection arcs in orange and navy.

## Components
- **Primary button:** #FF4801 fill, white 16px/600 text, 4px radius, 48px tall, hover #E03F00.
- **Secondary button:** transparent with 2px #FF4801 border and orange text; on navy, white outline.
- **Nav:** white 72px bar, logo left, mega-menu items (Products, Solutions, Developers, Partners, Resources), right side "Sign up" orange button, "Contact sales" outline, "Log in" text, plus an "Under attack?" link.
- **Product card:** white, 1px #D9D9D9, 8px radius, 24px padding, icon 40px, 18px/600 title, muted 14px text, orange "Learn more →" link.
- **Stat block:** 56px/600 navy number, 14px muted caption.
- **Input:** 44px, 1px #D9D9D9 border, 4px radius, focus border #0051C3.
- **Tag:** small 12px uppercase, orange text on #FFF6EE, 2px radius.

## Do's and Don'ts
**Do**
- Reserve orange for CTAs, the logo and key highlights.
- Use navy bands for big trust statements and footers.
- Organize dense product lists into tidy icon-card grids.
- Quote network scale with large stats.

**Don't**
- Don't fill large backgrounds with orange.
- Don't use pill-shaped buttons or large radii.
- Don't introduce purples/greens as brand colors.
- Don't use dark mode as the default marketing theme.

## Agent Prompt Guide
**Base prompt:**
"Design like Cloudflare: white canvas with #F7F7F8 alternating bands, navy #0A1D3A footer, Inter semibold headings in #222222, orange #FF4801 rectangular CTAs with 4px radius, flat 1px-bordered product cards with orange/navy line icons, big navy stat numbers, network-globe illustrations."

**Examples:**
- "Hero for Workers: headline 'Build serverless apps on the global network', two buttons (orange 'Start building', orange outline 'View docs'), dotted globe illustration on the right."
- "4-column product grid: WAF, CDN, Zero Trust, R2 — icon, title, line, 'Learn more →'."
- "Navy stats band with three numbers: 330+ cities, ~50ms from 95% of users, 200+ Tbps."
