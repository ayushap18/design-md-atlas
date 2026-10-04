---
version: alpha
name: Supabase
description: Dark-first developer marketing with near-black surfaces, a single emerald green accent, and code-forward product shots.
source: https://supabase.com
colors:
  primary: "#3ECF8E"
  on-primary: "#0E0E0E"
  primary-deep: "#15593B"
  background: "#121212"
  surface: "#1C1C1C"
  surface-raised: "#232323"
  text: "#EDEDED"
  text-muted: "#A0A0A0"
  text-subtle: "#707070"
  border: "#2E2E2E"
  border-strong: "#3E3E3E"
  accent: "#6B35DC"
  accent-soft: "#BDA4FF"
  warning: "#B45309"
typography:
  display:
    fontFamily: Circular
    fontSize: 4.5rem
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  h1: { fontFamily: Circular, fontSize: 3rem, fontWeight: 400, lineHeight: 1.1, letterSpacing: -0.015em }
  h2: { fontFamily: Circular, fontSize: 2.25rem, fontWeight: 400, lineHeight: 1.15 }
  h3: { fontFamily: Circular, fontSize: 1.25rem, fontWeight: 500, lineHeight: 1.3 }
  body: { fontFamily: Circular, fontSize: 1rem, fontWeight: 400, lineHeight: 1.6 }
  small: { fontFamily: Circular, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: Source Code Pro, fontSize: 0.8125rem, fontWeight: 400, letterSpacing: 0.02em }
rounded:
  sm: 4px
  md: 6px
  lg: 12px
  xl: 16px
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
    backgroundColor: "{colors.primary-deep}"
    textColor: "#FFFFFF"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  button-secondary:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    borderColor: "{colors.border-strong}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: 24px
---

# Supabase — DESIGN.md

> Inspired by the public website of Supabase. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Supabase looks like a well-lit terminal: charcoal everywhere, quiet gray type, and one confident green that marks "this is the Postgres platform you can trust." The page reads as a product catalog for builders — Database, Auth, Storage, Edge Functions, Realtime, Vector — each with a small icon, a one-line promise and a screenshot of the actual dashboard. Density is medium; sections breathe but cards are information-rich.

Adjectives to hold onto: **dark, technical, calm, open-source, green-lit**.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #3ECF8E | Brand green: logo, links-on-hover, highlighted words, focus rings |
| primary-deep | #15593B | Fill of the primary button (green border + deep fill) |
| background | #121212 | Page canvas |
| surface | #1C1C1C | Cards, nav dropdowns, code blocks |
| surface-raised | #232323 | Secondary buttons, hovered rows |
| text | #EDEDED | Headlines and body copy |
| text-muted | #A0A0A0 | Secondary copy, the gray half of two-tone headlines |
| text-subtle | #707070 | Captions, footer links |
| border | #2E2E2E | Hairlines on cards and dividers |
| border-strong | #3E3E3E | Button outlines, inputs |
| accent / accent-soft | #6B35DC / #BDA4FF | Purple used sparingly for AI / Vector illustrations |
| warning | #B45309 | Amber for "beta" / notice badges |

Green is under 5% of any screen. Everything else is grayscale. A light theme exists (white #FFFFFF canvas, #F8F9FA surface, #171717 text) but the dark theme is canonical.

## Typography
- **Family:** Circular (Supabase ships it as "Custom Font"). Free fallbacks: *Figtree*, *Inter*, then `system-ui`.
- **Mono:** Source Code Pro for code, CLI snippets and small uppercase eyebrows.
- **Headlines:** regular weight (400), not bold — size does the work. Two-tone headlines are a signature: first clause in `text`, second clause in `text-muted` or `primary`.
- **Eyebrows:** mono, 12px, uppercase, `letter-spacing: 0.1em`, `text-subtle`.
- Body is 16px/1.6; dashboard UI drops to 14px.

## Layout
- Container max width 1280px, 24px gutters on mobile, 32px on desktop.
- 12-column grid; product feature grids are 3-up on desktop, 1-up on mobile.
- Hero is centered, 2 buttons side by side, followed by a logo wall of customers in grayscale.
- Section spacing 96–128px. Inside cards, 24px padding and 16px internal gaps.
- Footer is a dense 6-column link grid on `background` with a top border.

## Elevation & Depth
- Almost no shadows. Depth comes from stepping surfaces (#121212 → #1C1C1C → #232323) and 1px borders.
- Hover on cards: border shifts from #2E2E2E to #3E3E3E and a faint green radial glow may bloom from a corner (`radial-gradient(circle at top, rgba(62,207,142,.08), transparent 60%)`).
- Dropdown menus use `box-shadow: 0 8px 24px rgba(0,0,0,.4)`.

## Shapes
- Radii are tight: 6px for buttons and inputs, 12px for cards, 16px for large media panels, full pills for tags.
- Icons: 1.5px stroke line icons, 20–24px, gray with green on hover.
- Imagery: real dashboard screenshots, SQL editor views and grid-line illustrations; no stock photography.

## Components
- **Primary button:** 32–38px tall, fill #15593B (or brand green at reduced opacity), 1px #3ECF8E border, white 14px text, 6px radius. Hover brightens fill toward #1A7149.
- **Secondary button:** #232323 fill, 1px #3E3E3E border, #EDEDED text. Hover fill #2A2A2A.
- **Nav:** 64px sticky bar, transparent until scroll then #121212 with bottom border. Logo left, mega-menu triggers center-left, "Sign in" ghost + "Start your project" green button right.
- **Feature card:** #1C1C1C, 1px border, 12px radius, 24px padding; icon + title (16px/500) + muted description, screenshot bleeding off the bottom edge.
- **Code block:** #1C1C1C, Source Code Pro 13px, tabs for languages on top with green underline on the active tab.
- **Input:** 36px tall, #1C1C1C fill, #3E3E3E border, 6px radius, green focus ring `0 0 0 2px rgba(62,207,142,.3)`.
- **Badge:** pill, 12px mono uppercase, #232323 fill with #3ECF8E text for "New" or amber for "Beta".

## Do's and Don'ts
**Do**
- Keep the canvas #121212 and step surfaces by ~8 lightness points.
- Use green only for the logo, primary CTA border, links and one highlighted phrase.
- Show real UI (tables, SQL, logs) as hero art.
- Use regular-weight headlines with two-tone color.

**Don't**
- Don't use bold 700 headlines or gradient text.
- Don't introduce a second saturated brand color beside green (purple is illustration-only).
- Don't round cards beyond 16px.
- Don't add heavy drop shadows on dark surfaces.

## Agent Prompt Guide
**Base prompt:**
"Design in the style of Supabase: dark #121212 canvas, #1C1C1C cards with 1px #2E2E2E borders and 12px radius, Circular/Figtree at regular weight, two-tone headlines (#EDEDED + #A0A0A0), Source Code Pro for code and uppercase eyebrows, and a single emerald accent #3ECF8E used for the primary button border, links and focus rings. No shadows, no gradients beyond faint green glows."

**Examples:**
- "Build a pricing card for a 'Pro' tier: #1C1C1C card, green 'Most popular' pill, $25/mo in 40px regular weight, checklist with green check icons, full-width primary button with #15593B fill and #3ECF8E border."
- "Create a product feature grid of 6 cards (Database, Auth, Storage, Realtime, Edge Functions, Vector), each with a 20px line icon, 16px title, muted one-liner, 3-up on desktop."
- "Make a code tab component showing JS/Python/Dart snippets with a green underline on the active tab."
