---
version: alpha
name: Shopify Polaris
description: "Shopify's admin design system: soft-gray canvas, white rounded cards, near-black beveled primary buttons and compact Inter type for merchant workflows."
source: https://polaris.shopify.com
colors:
  primary: "#303030"
  primary-hover: "#1A1A1A"
  on-primary: "#FFFFFF"
  background: "#F1F1F1"
  surface: "#FFFFFF"
  surface-secondary: "#F7F7F7"
  surface-hover: "#F7F7F7"
  text: "#303030"
  text-muted: "#616161"
  text-disabled: "#B5B5B5"
  border: "#E3E3E3"
  border-input: "#8A8A8A"
  accent: "#005BD3"
  focus: "#005BD3"
  success: "#29845A"
  success-subtle: "#CDFEE1"
  critical: "#E51C00"
  critical-text: "#8E0B21"
  critical-subtle: "#FEE9E8"
  caution: "#FFB800"
  caution-subtle: "#FFF1E3"
  info-subtle: "#EAF4FF"
  magic: "#8051FF"
  nav: "#EBEBEB"
typography:
  display:
    fontFamily: Inter
    fontSize: 1.875rem
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: -0.02em
  h1: { fontFamily: Inter, fontSize: 1.25rem, fontWeight: 650, lineHeight: 1.2, letterSpacing: -0.01em }
  h2: { fontFamily: Inter, fontSize: 0.875rem, fontWeight: 650, lineHeight: 1.43 }
  h3: { fontFamily: Inter, fontSize: 0.8125rem, fontWeight: 650, lineHeight: 1.54 }
  body: { fontFamily: Inter, fontSize: 0.8125rem, fontWeight: 450, lineHeight: 1.54 }
  body-small: { fontFamily: Inter, fontSize: 0.75rem, fontWeight: 450, lineHeight: 1.33 }
  mono: { fontFamily: ui-monospace, fontSize: 0.8125rem }
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 20px
  xxl: 32px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    minHeight: 28px
    padding: 6px 12px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    minHeight: 28px
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: 16px
  text-field:
    backgroundColor: "#FDFDFD"
    border: 1px solid {colors.border-input}
    rounded: "{rounded.md}"
    minHeight: 32px
  badge:
    backgroundColor: "#E3E3E3"
    rounded: "{rounded.md}"
    padding: 2px 8px
---

# Shopify Polaris — DESIGN.md

> Inspired by the public website of Shopify Polaris. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Polaris is the language of the Shopify admin: a light-gray canvas holding stacks of white, softly rounded cards, compact 13px Inter text and tactile, slightly beveled buttons. Since the 2023 refresh it leans neutral — the primary action is near-black, not green — and color is reserved for status (success green, critical red, caution yellow) and the purple "magic" of Shopify's AI features.

Adjectives to hold: **tactile, compact, neutral, friendly, organized.**

Tokens use a numeric scale (`--p-space-400`, `--p-border-radius-300`, `--p-color-bg-surface`), where 100 = 4px.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary (bg-fill-brand) | `#303030` | Primary buttons |
| primary-hover | `#1A1A1A` | Hover / pressed |
| background (bg) | `#F1F1F1` | App canvas behind cards |
| surface (bg-surface) | `#FFFFFF` | Cards, popovers, modals |
| surface-secondary | `#F7F7F7` | Nested sections, table headers, hover |
| nav | `#EBEBEB` | Side navigation background |
| text | `#303030` | Primary text |
| text-muted (text-secondary) | `#616161` | Help text, meta |
| text-disabled | `#B5B5B5` | Disabled |
| border | `#E3E3E3` | Dividers, card separators |
| border-input | `#8A8A8A` | Text field border |
| accent / link (text-link) | `#005BD3` | Links, focus ring, selected |
| success | `#29845A` | Success fill; subtle `#CDFEE1` |
| critical | `#E51C00` | Critical fill; text `#8E0B21`; subtle `#FEE9E8` |
| caution | `#FFB800` | Warning; subtle `#FFF1E3` |
| info-subtle | `#EAF4FF` | Info banners |
| magic | `#8051FF` | Sidekick / AI features only |

Dominant: `#F1F1F1` + white + `#303030`. Status colors appear inside badges and banners, never as large surfaces. Shopify brand green (`#008060` legacy / `#95BF47` logo) is not used for UI controls.

## Typography
- **Inter** (free), fallback `-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif`. Inter is used with variable weights 450 / 550 / 650 / 700.
- Base body is **13px / 20px at 450** (`bodyMd`). bodySm 12/16, bodyLg 14/20.
- Headings: headingSm 13/20 650, headingMd 14/20 650, headingLg 20/24 650, headingXl 24/32 700, heading2xl 30/40 750 (rare, onboarding only).
- Numbers in tables use tabular figures (`font-variant-numeric: tabular-nums`).
- Sentence case. Buttons are verb-first: "Save", "Add product", "Create order".

## Layout
- Admin frame: top bar 56px, left nav 240px, content max width ~998px (default page) or full for index tables.
- Page = title bar (title, back arrow, actions) then a stack of cards with 16px gaps (`--p-space-400`).
- Two-column `Layout`: primary 2/3 + secondary 1/3 annotated sections; collapses to one column under 768px.
- Spacing scale: 0, 1px, 2px, 4, 6, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64px.
- Card internal padding 16px (12px on small screens); `BlockStack` gap 8–16px inside.
- Breakpoints: xs 0, sm 490, md 768, lg 1040, xl 1440.

## Elevation & Depth
- Cards: `shadow-100` style — `0 1px 0 0 rgba(26,26,26,0.07)` plus an inset 1px top/side hairline to suggest a gentle edge.
- Popovers/menus: `0 4px 6px -2px rgba(26,26,26,0.2)` with a 1px border.
- Modals: `0 20px 20px -8px rgba(26,26,26,0.28)`; backdrop `rgba(0,0,0,0.71)` dimming.
- Buttons are **beveled**: primary uses inset highlights — `inset 0 -1px 0 1px rgba(0,0,0,0.8), inset 0 0 0 1px #303030, inset 0 0.5px 0 1.5px rgba(255,255,255,0.25)` — giving a pressable, physical feel. Pressed state removes the bottom highlight and shifts 1px.
- Focus: 2px `#005BD3` outline offset 1px.

## Shapes
- Radius scale: 4px (badges, checkboxes 6px), 8px (buttons, inputs), 12px (cards), 16px (modals on large screens), full (avatars, pills).
- Cards only round on small screens' edges when not full-bleed; on mobile cards go edge-to-edge with 0 radius.
- Icons: Polaris Icons, 20px viewbox, filled-and-outlined two-weight style, fill `#4A4A4A`.
- Product thumbnails sit in 8px rounded squares with a 1px border.

## Components
- **Primary button**: `#303030`, white 13px/550 text, 28px min height, 6px 12px padding, 8px radius, beveled inset shadow. Large: 32px. Hover `#1A1A1A`.
- **Secondary button**: white with a 1px-ish inset border shadow and bottom bevel; hover `#F7F7F7`; pressed `#F0F0F0`.
- **Tertiary / plain**: no bg, `#303030` text; plain links use `#005BD3`.
- **Critical button**: `#E51C00` fill with same bevel.
- **Text field**: `#FDFDFD` bg, 1px `#8A8A8A` border (top slightly darker), 8px radius, 32px tall, 13px text. Hover border `#616161`; focus 2px `#005BD3` ring. Label 13px above, help text 13px `#616161` below.
- **Card**: white, 12px radius, 16px padding, subtle shadow; section dividers 1px `#E3E3E3`.
- **Badge**: 20px tall, 8px radius, 12px/550 text. Default `#E3E3E3`; success `#CDFEE1`/`#0C5132`; attention `#FFEF9D`/`#4F4700`; critical `#FEDAD9`/`#8E0B21`; info `#E0F0FF`/`#00527C`.
- **Banner**: card with a colored 1px top band or tinted header row, icon left, 16px padding.
- **Index table**: header row `#F7F7F7`, 13px/550 muted headers, 1px row dividers, row hover `#F7F7F7`, checkboxes left.
- **Navigation**: `#EBEBEB` panel, 32px items, 8px radius, active item white bg with 650 text.

## Do's and Don'ts
**Do**
- Put everything inside white 12px-radius cards on the `#F1F1F1` canvas.
- Use 13px Inter at 450 as the default text.
- Keep one near-black primary button per page header or card footer.
- Use status colors only in badges, banners and icons.
- Keep button bevels subtle and consistent.

**Don't**
- Don't use Shopify logo green for buttons.
- Don't use pure black `#000` text — use `#303030`.
- Don't use font weight 400 or 700 for body; stay on 450/550/650.
- Don't use the purple magic color outside AI features.
- Don't stack heavy shadows; elevation stays soft.

## Agent Prompt Guide
Paste-ready:
> Build in the style of Shopify Polaris (admin). Inter 13px/20px at weight 450, text `#303030`, muted `#616161`. Canvas `#F1F1F1`, white cards with 12px radius and 16px padding, 16px gap between cards, borders `#E3E3E3`. Primary button `#303030` with white text, 8px radius, 28–32px tall, subtle inset bevel. Links/focus `#005BD3`. Status via soft-tinted badges.

Example component prompts:
1. "A Polaris order page: title bar 'Order #1042' with Fulfilled (green) and Paid badges, a 2/3 card for line items with thumbnails and tabular-number prices, a 1/3 sidebar card for customer info."
2. "A product form card: Title text field, Description rich-text area, Media drop zone with dashed `#8A8A8A` border and 8px radius, Save primary button in the page header."
3. "An index table of products: `#F7F7F7` header, checkboxes, status badges (Active green, Draft gray), 13px rows with hover `#F7F7F7`."
