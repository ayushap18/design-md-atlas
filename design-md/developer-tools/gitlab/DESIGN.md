---
version: alpha
name: GitLab
description: Confident DevSecOps brand — deep charcoal-purple, the orange-to-red tanuki gradient, a purple secondary, and GitLab Sans across dense Pajamas-system UI.
source: https://about.gitlab.com
colors:
  primary: "#FC6D26"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F2F1F5"
  surface-alt: "#E8E7EB"
  text: "#171321"
  text-secondary: "#312E3F"
  text-muted: "#74717A"
  border: "#D1D0D3"
  orange-light: "#FCA326"
  red: "#E24329"
  purple: "#7759C2"
  purple-light: "#F6F3FE"
  pink-light: "#FFCBD7"
  product-blue: "#1F75CB"
  product-green: "#108548"
  dark-background: "#171321"
  dark-surface: "#28272D"
typography:
  display:
    fontFamily: GitLab Sans, Inter, -apple-system, sans-serif
    fontSize: 4rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: "GitLab Sans, Inter, sans-serif", fontSize: 3rem, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.02em }
  h2: { fontFamily: "GitLab Sans, Inter, sans-serif", fontSize: 2rem, fontWeight: 600, lineHeight: 1.2 }
  h3: { fontFamily: "GitLab Sans, Inter, sans-serif", fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: "GitLab Sans, Inter, sans-serif", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  ui: { fontFamily: "GitLab Sans, Inter, sans-serif", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  mono: { fontFamily: "GitLab Mono, JetBrains Mono, Menlo, monospace", fontSize: 0.8125rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
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
    backgroundColor: "{colors.text}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-accent:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 12px 20px
  button-product:
    backgroundColor: "{colors.product-blue}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: 8px 12px
  card:
    backgroundColor: "#FFFFFF"
    border: 1px solid {colors.border}
    rounded: "{rounded.md}"
    padding: 32px
---

# GitLab — DESIGN.md

> Inspired by the public website of GitLab and its Pajamas design system. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
GitLab's marketing identity pairs an almost-black charcoal with a purple undertone against white, with the tanuki logo's warm orange/red gradient as the brand's heat. A violet purple serves as a strong secondary for highlights and illustrations. The product (Pajamas design system) is calmer: gray, blue-action, dense. GitLab Sans — a customized Inter — ties both together.

Adjectives: **bold, warm, comprehensive, enterprise, open.**

## Colors
| Token | Hex | Role |
|---|---|---|
| background | `#FFFFFF` | Canvas |
| surface | `#F2F1F5` | Panels, alternating sections |
| surface-alt | `#E8E7EB` | Hover, dividers |
| text | `#171321` | Charcoal — headlines, body, dark buttons |
| text-secondary | `#312E3F` | Secondary text |
| text-muted | `#74717A` | Meta |
| border | `#D1D0D3` | Borders |
| primary | `#FC6D26` | Tanuki orange — accent CTAs, highlights |
| orange-light | `#FCA326` | Gradient top |
| red | `#E24329` | Gradient bottom |
| purple | `#7759C2` | Secondary brand — illustrations, eyebrows, links on marketing |
| purple-light | `#F6F3FE` | Purple-tinted sections |
| pink-light | `#FFCBD7` | Illustration accent |
| product-blue | `#1F75CB` | Pajamas confirm buttons, links |
| product-green | `#108548` | Success, pipeline passed |
| dark-background | `#171321` | Dark sections |

Charcoal and white dominate; orange is the hero accent; purple supports.

## Typography
- **GitLab Sans** (open-source, based on Inter). Fallback: Inter.
- **GitLab Mono** (based on JetBrains Mono). Fallback: JetBrains Mono.

Scale: 64 / 48 / 32 / 20 / 16 / 14px. Headlines 600 with -0.02em tracking. Product UI at 14px. Eyebrows can be 12px uppercase purple. Sentence case.

## Layout
- Marketing: 1200px max, 12-col grid, 24px gutters, 96px section spacing, alternating white / `#F2F1F5` / charcoal sections.
- Hero: left-aligned headline, CTA pair, product illustration or video right.
- Product: 256px left sidebar (collapsible), breadcrumbs, content with 16px padding; dense tables and MR lists.

## Elevation & Depth
Marketing: flat with occasional `0 8px 24px rgba(23,19,33,0.08)` on feature cards. Product (Pajamas): `0 4px 12px rgba(0,0,0,0.1)` for dropdowns, 1px borders elsewhere. Gradients appear in the tanuki and illustrative backgrounds (orange → purple swirls).

## Shapes
- Marketing buttons: 4px radius (squarish). Cards 8–12px. Product buttons 4px.
- Tanuki logo: geometric polygons in orange `#FC6D26`, `#FCA326`, `#E24329`.
- Icons: GitLab SVG icons, 16px, 1.5px-ish stroke.
- Illustrations: flat, geometric, purple/orange/pink palette.

## Components
- **Primary button (marketing)**: `#171321` fill, white 16px/600, 4px radius, 12px × 20px; hover `#312E3F`.
- **Accent button**: `#FC6D26` fill, white text; hover `#E24329`. Use for "Get free trial."
- **Secondary**: 1px `#171321` outline, 4px radius.
- **Product confirm button**: `#1F75CB`, 32px tall, 14px text, 4px radius.
- **Nav**: 72px, white, tanuki + wordmark left, 16px links with dropdown mega-menus, "Sign in" link, "Get free trial" orange button right.
- **Feature card**: white, 1px `#D1D0D3`, 8px radius, 32px padding, purple icon, 20px/600 title.
- **Stat band**: charcoal `#171321` section, white 48px numbers, orange accent underline.
- **Pipeline badge**: pill, green `#108548` "passed" with check icon, red "failed", blue "running".
- **Inputs**: 40px, 1px `#89888D` border, 4px radius; focus `0 0 0 2px #FFFFFF, 0 0 0 4px #428FDC`.

## Do's and Don'ts
**Do**
- Use charcoal `#171321` (not pure black) for dark elements.
- Reserve orange for the main conversion CTA and brand moments.
- Use purple as the secondary accent.
- Keep product UI 14px, dense and blue-actioned.

**Don't**
- Don't use pill-shaped marketing buttons.
- Don't mix orange and blue CTAs in the same block.
- Don't use the tanuki gradient as large background fills.
- Don't use thin/light headline weights.

## Agent Prompt Guide
**Base prompt:**
"Design in a GitLab spirit: white and `#F2F1F5` surfaces, charcoal `#171321` text and primary buttons, tanuki orange `#FC6D26` accent CTA, purple `#7759C2` secondary. Inter (as GitLab Sans) weight 600 headlines, 4px-radius buttons, 8px cards with 1px `#D1D0D3` borders, flat geometric illustrations."

**Examples:**
- "Hero: left headline 'The most comprehensive AI-powered DevSecOps platform', orange 'Get free trial' + charcoal outline 'Talk to sales', illustration right."
- "Charcoal stat band with three white 48px stats and orange underlines."
- "Merge request list in product style: 14px rows, pipeline status pills, blue action button."
