---
version: alpha
name: Behance
description: Adobe's creative portfolio network — crisp white galleries, black type and an electric Behance blue for every action.
source: https://www.behance.net
colors:
  primary: "#0057FF"
  on-primary: "#FFFFFF"
  primary-hover: "#0046CC"
  background: "#FFFFFF"
  surface: "#F5F5F5"
  surface-dark: "#191919"
  text: "#191919"
  text-muted: "#696969"
  border: "#E8E8E8"
  accent: "#0057FF"
  appreciate: "#0057FF"
typography:
  display:
    fontFamily: Adobe Clean, Source Sans 3
    fontSize: 3.5rem
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: -0.02em
  h1: { fontFamily: "Adobe Clean, Source Sans 3", fontSize: 2.5rem, fontWeight: 800, lineHeight: 1.15 }
  h2: { fontFamily: "Adobe Clean, Source Sans 3", fontSize: 1.5rem, fontWeight: 700, lineHeight: 1.25 }
  body: { fontFamily: "Adobe Clean, Source Sans 3", fontSize: 1rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Adobe Clean, Source Sans 3", fontSize: 0.8125rem, fontWeight: 600, lineHeight: 1.4 }
  mono: { fontFamily: Source Code Pro, fontSize: 0.8125rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 8px 20px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 8px 20px
  project-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: 0
---

# Behance — DESIGN.md

> Inspired by the public website of Behance. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Behance is a dense, scroll-heavy discovery feed for creative work, owned by Adobe. Its UI is deliberately utilitarian — white, black and one saturated blue — so the projects (bold branding, illustration, 3D, photography) can be as loud as they like. Typography is heavy and tight, with an editorial poster quality in headlines.

Hold onto: **bold, utilitarian, creative, dense, high-contrast**. High density: many thumbnails per row, compact metadata.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary / accent | #0057FF | Primary CTAs, Appreciate button, links, logo |
| primary-hover | #0046CC | Hover |
| on-primary | #FFFFFF | Text on blue |
| background | #FFFFFF | Page |
| surface | #F5F5F5 | Secondary buttons, image placeholders, filter chips |
| surface-dark | #191919 | Footer, project viewer backdrop |
| text | #191919 | Headlines, body |
| text-muted | #696969 | Owner names, counts |
| border | #E8E8E8 | Dividers, inputs |

Blue is the only chromatic UI color. Everything else is neutral.

## Typography
- **Primary:** Adobe Clean (proprietary). Free fallback: **Source Sans 3** (Adobe's open-source sibling) or **Inter**.
- Headlines extra-bold 800 with -0.02em tracking for poster-like punch.
- Body 16px/1.5; metadata 13px/600.
- Sentence case for UI; headlines can be short and declarative ("Find top creative talent").

## Layout
- Fluid full-width feed with 24–32px side padding.
- Project grid: 5 columns on large screens, 4/3/2/1 down; 4:3 thumbnails (404×316 ratio); 24px gap.
- Sticky filter row under nav: search, category pills ("Graphic Design", "Illustration", "UI/UX"…), "Recommended" sort.
- Project viewer opens as an overlay on a dark #191919 backdrop with a centered max-1400px white column.

## Elevation & Depth
- Flat thumbnails, no shadow.
- Hover: bottom gradient scrim with title + appreciate/views counters.
- Overlays: full-screen modal over rgba(0,0,0,0.85).
- Menus: `0 4px 16px rgba(0,0,0,0.15)`, 8px radius.

## Shapes
- Buttons and chips: full pill. Thumbnails: 4px radius. Inputs: pill search, 4px for forms.
- Avatars: circles.
- Icons: 18–20px, solid/rounded glyphs (thumb-up "Appreciate", eye, bookmark).
- Imagery: full-bleed project covers; no decoration around them.

## Components
- **Primary button:** #0057FF, white 14px/700, pill, 36px tall, 8px 20px. Hover #0046CC.
- **Secondary button:** #F5F5F5 fill, #191919 text, pill. Hover #E8E8E8.
- **Appreciate button:** 56px circular blue button with white thumbs-up icon, floating beside the project viewer.
- **Nav:** 64px white, Behance wordmark left (black, bold), tabs (Explore, Assets, Jobs, Behance Pro) 15px/700, search pill center, "Log in" text + blue "Sign up" pill right.
- **Project card:** 4:3 cover, 4px radius; row beneath: 24px avatar + owner name 13px/600, right side thumb-up count and eye count in #696969 13px.
- **Category chip:** pill, 1px #E8E8E8 border, 14px/600; active = #191919 fill, white text.
- **Hire badge:** small pill "Available for hire" with blue dot.
- **Footer:** #191919 with white/gray link columns and Adobe attribution.

## Do's and Don'ts
**Do**
- Use extra-bold, tight headlines for an editorial poster feel.
- Keep blue #0057FF as the single action color.
- Maximize thumbnail density; minimal metadata.
- Present projects on dark backdrops when viewed in full.

**Don't**
- Don't introduce secondary brand colors in the UI chrome.
- Don't add borders or shadows around thumbnails.
- Don't use light 300 weights for headlines.
- Don't use square buttons; actions are pills.

## Agent Prompt Guide
**Base prompt:**
"Design like Behance: white page, #191919 text, Source Sans 3 (fallback for Adobe Clean) with 800-weight tight headlines. Blue #0057FF pill buttons, #F5F5F5 secondary pills. A dense 5-column grid of 4:3 project covers with 4px radius and 24px gaps, avatar + owner name + appreciation/view counts below each. Flat, no shadows."

**Examples:**
- "Hero: 56px extra-bold headline 'Find top creative talent', pill search with category dropdown, row of category chips."
- "Project viewer: dark #191919 overlay, centered white content column, 56px blue circular Appreciate button on the right rail."
- "Creative profile card: banner image, 80px avatar, name, location, blue 'Hire' pill and gray 'Follow' pill."
