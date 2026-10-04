---
version: alpha
name: Salesforce Lightning Design System
description: Enterprise CRM interface built from compact cards on a cool grey canvas, with a confident Salesforce blue for actions and strict, utility-driven spacing.
source: https://www.lightningdesignsystem.com
colors:
  primary: "#0176D3"
  primary-hover: "#014486"
  on-primary: "#FFFFFF"
  background: "#F3F3F3"
  surface: "#FFFFFF"
  surface-alt: "#F3F3F3"
  text: "#181818"
  text-muted: "#444444"
  text-weak: "#747474"
  border: "#C9C9C9"
  border-strong: "#747474"
  link: "#0B5CAB"
  success: "#2E844A"
  warning: "#FE9339"
  error: "#EA001E"
  info: "#706E6B"
  accent: "#032D60"
typography:
  display:
    fontFamily: Salesforce Sans
    fontSize: 2rem
    fontWeight: 300
    lineHeight: 1.25
    letterSpacing: 0
  h1: { fontFamily: Salesforce Sans, fontSize: 1.25rem, fontWeight: 700, lineHeight: 1.25 }
  h2: { fontFamily: Salesforce Sans, fontSize: 1rem, fontWeight: 700, lineHeight: 1.25 }
  h3: { fontFamily: Salesforce Sans, fontSize: 0.875rem, fontWeight: 700, lineHeight: 1.25 }
  body: { fontFamily: Salesforce Sans, fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.5 }
  caption: { fontFamily: Salesforce Sans, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: Consolas, fontSize: 0.75rem }
rounded:
  sm: 0.125rem
  md: 0.25rem
  lg: 0.5rem
  full: 15rem
spacing:
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 3rem
components:
  button-brand:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 0 1rem
    lineHeight: 1.875rem
  button-neutral:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
    padding: 0 1rem
  card:
    backgroundColor: "{colors.surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.md}"
---

# Salesforce Lightning Design System — DESIGN.md

> Inspired by the public website of Salesforce Lightning Design System. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Lightning (SLDS) is the visual language of the Salesforce platform: record pages, list views, dashboards and setup screens crammed with data. It solves density with structure — everything lives in white cards with 1px grey borders on a light grey page, headers carry an icon tile and a bold title, and a single blue (`#0176D3`) marks actionable things.

Adjectives: **structured, enterprise, compact, legible, systematic**.

Body text is famously small (13px), and the layout assumes a desktop with lots of fields. Color is functional: blue for action, red/green/orange for status, and a large family of saturated "standard object" colors (Account indigo, Opportunity orange, Contact purple) used only inside icon tiles.

## Colors
| Token | Hex | Role |
|---|---|---|
| `brand-base` / `color-background-button-brand` | `#0176D3` | Brand buttons, selected states, active tab bar |
| `brand-dark` (hover) | `#014486` | Brand button hover / active |
| `brand-darker` | `#032D60` | Global header accents, emphasis |
| `color-text-link` | `#0B5CAB` | Inline links |
| `color-text-default` | `#181818` | Body text |
| `color-text-weak` | `#444444` | Labels, secondary text |
| `color-text-placeholder` | `#747474` | Placeholders, meta |
| `color-background` | `#F3F3F3` | Page canvas, card footers, table headers |
| `color-background-alt` | `#FFFFFF` | Cards, modals, inputs |
| `color-border` | `#C9C9C9` | Card and input borders, dividers |
| `color-border-input` | `#747474`→`#C9C9C9` | Input outline (darker on focus-adjacent states) |
| `color-text-error` / error | `#EA001E` | Errors, destructive buttons, required asterisk |
| `color-text-success` | `#2E844A` | Success toasts, positive values |
| `color-background-warning` | `#FE9339` | Warning toasts / alerts (dark text on top) |
| `color-border-focus` | `#0176D3` | Focus border, paired with `0 0 3px #0176D3` glow |

The canvas is grey-white; blue covers maybe 5% of a screen. Status colors appear in toasts, badges and field-level errors.

## Typography
- **Family:** Salesforce Sans, falling back to `-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Monospace: `Consolas, Menlo, Monaco, Courier, monospace`.
- **Font-size tokens:** 1=0.625rem (10px), 2=0.75rem (12px), 3=0.8125rem (13px, default body), 4=0.875rem (14px), 5=1rem, 6=1.125rem, 7=1.25rem, 8=1.5rem, 9=1.75rem, 10=2rem, 11=2.625rem.
- **Weights:** 300 light (large display numbers in dashboards), 400 regular, 700 bold. No medium/semibold in classic SLDS.
- **Line-height:** 1.5 for text, 1.25 for headings.
- **Headings:** page header title is 18–20px bold; card titles are 14px bold; "title caps" labels (`slds-text-title_caps`) are 12px uppercase with 0.0625rem tracking in `#444444`.

## Layout
- Spacing tokens: xxx-small 0.125rem, xx-small 0.25rem, x-small 0.5rem, small 0.75rem, medium 1rem, large 1.5rem, x-large 2rem, xx-large 3rem.
- Utility-first grid (`slds-grid`, `slds-col`, `slds-size_1-of-2`) with 12-column fractional sizes; gutters 0.75rem.
- Record pages: page header full-width, then a 2/3 + 1/3 column split; cards stack with 0.75rem gaps.
- Forms: horizontal or stacked; stacked labels sit 0.125rem above inputs with 0.5rem between rows.
- Global header 50px, app navigation bar 40px with a 3px blue underline on the active item.

## Elevation & Depth
- Most surfaces are flat: 1px `#C9C9C9` border, no shadow.
- Cards: `0 2px 2px 0 rgba(0,0,0,0.1)` (`shadow-drop-down` lightweight).
- Dropdowns / popovers: `0 2px 3px 0 rgba(0,0,0,0.16)`.
- Modals: centered, 4px radius, backdrop `rgba(8,7,7,0.6)`.
- Focus: border goes `#0176D3` with `box-shadow: 0 0 3px #0176D3`.

## Shapes
- Radius: 0.25rem (4px) on buttons, inputs, cards, modals; 0.125rem on small badges; 15rem pills for badges and pill containers; circles for avatars.
- Icons: utility icons are 1rem single-color glyphs; standard object icons sit in 2rem rounded-square tiles (0.25rem radius) with saturated backgrounds — e.g. Account `#5867E8`, Opportunity `#FF5D2D`, Contact `#A094ED`, Case `#F2CF5B`.
- Illustrations: soft blue landscapes with Astro and friends — only in empty states.

## Components
- **Brand button:** `#0176D3` bg and border, white 13px text, line-height 1.875rem (32px total), 0 1rem padding, 0.25rem radius. Hover/active `#014486`.
- **Neutral button:** white bg, 1px `#C9C9C9` border, `#0176D3` text. Hover bg `#F3F3F3`.
- **Destructive button:** `#BA0517` bg, white text.
- **Button group:** neutral buttons joined, internal radius 0, outer corners 0.25rem.
- **Input:** white, 1px `#C9C9C9` border, 0.25rem radius, 2rem tall, 0 0.75rem padding. Error: 2px `#EA001E` border + red help text.
- **Card:** white, 1px border, 0.25rem radius; header with icon tile + bold 14px title + right-aligned actions; footer centered "View All" link on `#F3F3F3`.
- **Data table:** header row `#F3F3F3`, 12px uppercase-ish labels, 2rem row height, 1px row dividers; hovered row `#F3F3F3`.
- **Badge:** `#E5E5E5` (lightest) bg, pill radius, 0.75rem text, 0.125rem 0.5rem padding.
- **Toast:** full-width top, 0.25rem radius, success `#2E844A` / error `#EA001E` / warning `#FE9339` (dark text) / info `#706E6B`, white icon on left.
- **Path:** chevron stage tracker; completed stages `#2E844A`, current `#014486`, upcoming `#F3F3F3`.

## Do's and Don'ts
**Do**
- Wrap related content in bordered white cards on the `#F3F3F3` canvas.
- Use one brand button per region; secondary actions are neutral buttons.
- Keep body text at 13px and labels in `#444444`.
- Use standard-object icon tiles to identify record types.
- Use 0.25rem radius consistently.

**Don't**
- Don't use object-tile colors for buttons or text.
- Don't introduce semibold weights or new fonts.
- Don't add heavy drop shadows; borders do the separating.
- Don't put white text on the warning orange.
- Don't exceed one level of card nesting.

## Agent Prompt Guide
**Base prompt:**
"Build in the style of Salesforce Lightning Design System. Page canvas `#F3F3F3`, content in white cards with 1px `#C9C9C9` borders and 4px radius. Text `#181818` at 13px Salesforce Sans (fallback system-ui), labels `#444444`. Brand buttons `#0176D3` (hover `#014486`), neutral buttons white with blue text. Spacing in 0.25/0.5/0.75/1/1.5rem steps. Dense, structured enterprise UI."

**Example components:**
1. "A record page header: white, 1px bottom border, 1rem padding. 2rem indigo `#5867E8` icon tile, 12px 'Account' label above an 18px bold record name. Right side: button group 'Follow / Edit / Delete / ▾'. Below, a row of 4 highlight fields with 12px grey labels."
2. "A related-list card: bold 14px title 'Contacts (3)' with icon, 'New' neutral button at right, compact table with 2rem rows, 'View All' footer link on `#F3F3F3`."
3. "A success toast: `#2E844A`, white 14px text 'Opportunity \"Acme Q3\" was saved.', check icon left, close X right, 4px radius."
