---
version: alpha
name: Netlify
description: Bright, friendly web-platform branding built on deep teal, aqua accents and a crisp blue for links and actions.
source: https://www.netlify.com
colors:
  primary: "#014847"
  on-primary: "#FFFFFF"
  teal: "#05BDBA"
  aqua: "#14D8D4"
  aqua-soft: "#DEFFFE"
  blue: "#2E51ED"
  background: "#FFFFFF"
  surface: "#F6F8FA"
  dark-background: "#0C2A2A"
  dark-surface: "#181A1C"
  text: "#181A1C"
  text-muted: "#545A61"
  border: "#D6DBE0"
  orange: "#F98E21"
  coral: "#FE4E5C"
typography:
  display:
    fontFamily: Pacaembu
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: Pacaembu, fontSize: 3rem, fontWeight: 700, lineHeight: 1.1 }
  h2: { fontFamily: Pacaembu, fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.15 }
  h3: { fontFamily: Mulish, fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.3 }
  body: { fontFamily: Mulish, fontSize: 1.0625rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Mulish, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: Roboto Mono, fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 72px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  button-accent:
    backgroundColor: "{colors.aqua}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 32px
---

# Netlify — DESIGN.md

> Inspired by the public website of Netlify. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Netlify is the friendly face of web deployment. Its identity pairs a deep pine-teal with sparkling aqua, giving pages a fresh, optimistic feel compared with the all-black dev-tool norm. Layouts are open and welcoming, with bold rounded display type, framework logos, deploy-log snippets and playful geometric "spark" illustrations. It addresses both developers and marketers, so copy and visuals are approachable rather than hardcore.

Adjectives: **fresh, approachable, bold, optimistic, web-native**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #014847 | Deep teal: primary buttons, headings on light, dark bands |
| teal | #05BDBA | Logo teal |
| aqua | #14D8D4 | Highlights, accent CTAs on dark, illustration |
| aqua-soft | #DEFFFE | Tinted section backgrounds, chips |
| blue | #2E51ED | Links and secondary action color |
| background | #FFFFFF | Canvas |
| surface | #F6F8FA | Alternating sections |
| dark-background | #0C2A2A | Dark hero/footer bands |
| text | #181A1C | Body text |
| text-muted | #545A61 | Secondary copy |
| border | #D6DBE0 | Cards, inputs |
| orange / coral | #F98E21 / #FE4E5C | Illustration and status accents only |

Teal family dominates the brand moments; neutral white carries most content.

## Typography
- **Display:** Pacaembu (Netlify's rounded geometric display). Free fallbacks: *Manrope* (800) or *Outfit*.
- **Body:** Mulish (free on Google Fonts); fallback `system-ui`.
- **Mono:** Roboto Mono for CLI and build logs.
- Display is bold (700), tight leading, sentence case. Body 17px for marketing copy.

## Layout
- Container 1200px, 12 columns, 24px gutters; 16px on mobile.
- Hero centered with big headline, subline, two buttons and a framework logo strip.
- Feature sections: split 50/50 with screenshot or code on one side.
- Dark #0C2A2A or #014847 bands punctuate the page for testimonials and stats.
- Section padding 72–112px.

## Elevation & Depth
- Cards: soft shadow `0 2px 4px rgba(24,26,28,.06), 0 8px 24px rgba(24,26,28,.06)`.
- Hover: translateY(-2px) with stronger shadow.
- Dark bands use aqua glows and gradient meshes (#014847 → #05BDBA) behind illustrations.

## Shapes
- 8px buttons/inputs, 16px cards and media, pills for tags.
- Icons: rounded 2px stroke, teal.
- Illustrations: sparkle/burst shapes, abstract geometric forms in aqua, teal and orange.

## Components
- **Primary button:** #014847 fill, white 16px/700, 8px radius, 48px tall. Hover #02605F.
- **Accent button (on dark):** #14D8D4 fill, #014847 text.
- **Secondary:** white with 1px #014847 border and teal text.
- **Nav:** white 72px, logo left, menu items with dropdown chevrons, "Log in" text + teal "Sign up" button right.
- **Deploy log card:** #181A1C fill, Roboto Mono 13px, green/aqua status lines, 16px radius.
- **Feature card:** white, 16px radius, 32px padding, aqua-soft icon tile (48px, 12px radius) above an 20px/700 title.
- **Chip:** pill, #DEFFFE fill, #014847 12px/700 text.
- **Input:** 48px, 1px #D6DBE0, 8px radius, focus ring `0 0 0 3px rgba(46,81,237,.25)`.

## Do's and Don'ts
**Do**
- Use deep teal for primary actions and aqua for sparkle.
- Mix approachable rounded display type with clean body text.
- Show framework logos and real deploy logs.
- Alternate white and deep teal bands for rhythm.

**Don't**
- Don't make the page all-black; Netlify is light-first.
- Don't use thin, light-weight display type.
- Don't overuse orange/coral — accents only.
- Don't use sharp 0px corners.

## Agent Prompt Guide
**Base prompt:**
"Design like Netlify: white canvas, deep teal #014847 primary buttons with 8px radius, aqua #14D8D4 highlights and #DEFFFE tinted chips, bold rounded display type (Manrope 800 as Pacaembu fallback) with Mulish body, blue #2E51ED links, 16px-radius cards with soft shadows, and a #0C2A2A dark band for testimonials."

**Examples:**
- "Hero: 'Build and ship the web, faster', teal button 'Get started', outline 'Contact sales', row of framework logos below."
- "Deploy-preview card showing a Roboto Mono build log with green 'Published' status."
- "Dark teal stats band with aqua numbers and white captions."
