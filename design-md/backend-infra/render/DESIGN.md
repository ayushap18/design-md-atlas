---
version: alpha
name: Render
description: Clean, modern cloud-platform branding with a black-and-white base and a vivid electric violet accent.
source: https://render.com
colors:
  primary: "#8A05FF"
  on-primary: "#FFFFFF"
  primary-light: "#9D66FF"
  lavender: "#E6DAFF"
  pink-soft: "#FBCEFF"
  background: "#FFFFFF"
  surface: "#F7F7F8"
  dark-background: "#0A0A0A"
  dark-surface: "#151515"
  text: "#0A0A0A"
  text-muted: "#5C5C66"
  border: "#E4E4E7"
  ink-violet: "#373145"
  success: "#10B981"
typography:
  display:
    fontFamily: Inter Display
    fontSize: 4.25rem
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -0.04em
  h1: { fontFamily: Inter Display, fontSize: 3rem, fontWeight: 600, lineHeight: 1.08, letterSpacing: -0.03em }
  h2: { fontFamily: Inter Display, fontSize: 2.25rem, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.02em }
  h3: { fontFamily: Inter, fontSize: 1.25rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: Inter, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  mono: { fontFamily: Roboto Mono, fontSize: 0.875rem }
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
  xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: 10px 20px
  button-accent:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 10px 20px
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 28px
---

# Render — DESIGN.md

> Inspired by the public website of Render. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Render positions itself as "the cloud that just works," and the design mirrors that: crisp black type on white, generous space, and a single bold violet that signals the brand. Pages mix product screenshots of the dashboard, short code blocks (render.yaml, git push) and lavender-tinted panels. It feels modern-SaaS rather than hacker-terminal, with enough monospace to reassure developers.

Adjectives: **crisp, modern, confident, uncluttered, violet-charged**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #8A05FF | Electric violet: logo moments, accent CTAs, links, highlights |
| primary-light | #9D66FF | Hover, gradient stop |
| lavender | #E6DAFF | Tinted panels, chips, illustration fills |
| pink-soft | #FBCEFF | Gradient partner to lavender |
| background | #FFFFFF | Canvas |
| surface | #F7F7F8 | Cards and alternating bands |
| dark-background / dark-surface | #0A0A0A / #151515 | Dark sections and code |
| text | #0A0A0A | Headlines, primary buttons |
| text-muted | #5C5C66 | Body copy |
| border | #E4E4E7 | Hairlines |
| ink-violet | #373145 | Dark violet-gray for captions on lavender |
| success | #10B981 | "Live" deploy status |

Black/white carry 85%; lavender washes ~10%; vivid violet ~5%.

## Typography
- **Sans:** a tight grotesk; use **Inter Display** for headings and **Inter** for body (fallback `system-ui`).
- **Mono:** Roboto Mono or JetBrains Mono for YAML and CLI.
- Very tight tracking on display (-0.04em), semibold. Body 16px muted.
- Eyebrows in violet 14px/600 sentence case, not uppercase.

## Layout
- 1200px container; hero centered with headline, subline, black + outline buttons.
- Feature blocks: two-column with text left and dashboard screenshot right, framed on a lavender gradient (#E6DAFF → #FBCEFF).
- Logo strip of customers in gray.
- 96–128px section spacing; one dark band for "deploy from Git" code demo.

## Elevation & Depth
- Screenshots: `0 24px 48px -12px rgba(55,49,69,.25)` and 12px radius.
- Cards flat on #F7F7F8 with 1px border; hover adds `0 8px 24px rgba(0,0,0,.06)`.
- Gradient frames provide depth instead of heavy shadows.

## Shapes
- 8px buttons/inputs, 12px cards, 20px gradient media frames.
- Icons: 1.5px line icons in black, violet when active.
- Imagery: dashboard UI crops, abstract violet gradient blobs; no stock photos.

## Components
- **Primary button:** #0A0A0A fill, white 15px/500, 8px radius, 40px; hover #2A2A2A.
- **Accent button:** #8A05FF fill, white text; hover #9D66FF.
- **Secondary:** white, 1px #E4E4E7 border, black text.
- **Nav:** white 64px, logo left, Product/Pricing/Customers/Docs center, "Sign in" + black "Get started" right; sticky with bottom border on scroll.
- **Service card:** #F7F7F8, 12px radius, 28px padding, service-type icon (Web Service, Cron Job, Postgres, Key Value), title, one line.
- **Status pill:** pill, #10B981 dot + "Live" 12px/500 on #ECFDF5.
- **Code card:** #151515, Roboto Mono 14px, violet keys in YAML.
- **Input:** 40px, 1px #E4E4E7, 8px radius, focus ring `0 0 0 3px rgba(138,5,255,.2)`.

## Do's and Don'ts
**Do**
- Keep the base black-on-white and let violet punctuate.
- Frame screenshots on lavender-to-pink gradients.
- Use tight, semibold display type.
- Show real configs (render.yaml) and deploy status.

**Don't**
- Don't make full-violet backgrounds behind long copy.
- Don't mix in teal/green as brand colors (green is status only).
- Don't use rounded-full buttons; keep 8px.
- Don't use heavy dark mode across the whole site.

## Agent Prompt Guide
**Base prompt:**
"Design like Render: white canvas, #0A0A0A Inter Display semibold headlines with -0.04em tracking, #5C5C66 body, black 8px-radius primary buttons, electric violet #8A05FF for accent buttons and links, lavender #E6DAFF→#FBCEFF gradient frames around dashboard screenshots, 12px-radius #F7F7F8 cards."

**Examples:**
- "Service-type grid: Web Services, Static Sites, Background Workers, Cron Jobs, Postgres, Key Value — icon cards, 3-up."
- "Dark code band: 'Deploy with a git push' and a render.yaml snippet with violet keys."
- "Pricing tier card with violet 'Popular' chip and black CTA."
