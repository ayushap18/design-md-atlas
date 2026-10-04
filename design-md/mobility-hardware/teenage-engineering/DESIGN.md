---
version: alpha
name: Teenage Engineering
description: Catalogue-like industrial minimalism — near-white pages, tiny grotesk type, product photos as objects, and toy-bright signal colors lifted from the hardware.
source: https://teenage.engineering
colors:
  primary: "#000000"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F0F0F0"
  text: "#000000"
  text-muted: "#8C8C8C"
  border: "#DADADA"
  accent: "#FF5A00"
  signal-blue: "#1E5AE6"
  signal-yellow: "#FFD200"
  signal-green: "#2DB84B"
  metal: "#B4B4B4"
typography:
  display:
    fontFamily: Helvetica Neue
    fontSize: 2.5rem
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1: { fontFamily: Helvetica Neue, fontSize: 1.75rem, fontWeight: 400, lineHeight: 1.2 }
  h2: { fontFamily: Helvetica Neue, fontSize: 1.25rem, fontWeight: 400, lineHeight: 1.3 }
  body: { fontFamily: Helvetica Neue, fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.45 }
  small: { fontFamily: Helvetica Neue, fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.4 }
  mono: { fontFamily: IBM Plex Mono, fontSize: 0.75rem }
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
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.text}"
    borderColor: "{colors.text}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  product-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: 16px
---

# Teenage Engineering — DESIGN.md

> Inspired by the public website of Teenage Engineering. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Teenage Engineering's site reads like a product catalogue printed by an engineering lab. Pages are almost blank: small, quiet type, generous white space, and crisp product photography that treats synths and speakers as sculptural objects. Color arrives only through the products themselves — the orange, blue, yellow and green knobs of an OP-1 or a pocket operator.

Adjectives: **playful, precise, sparse, technical, toy-like**.

Density is paradoxical: lots of empty space at page level, but small text and tightly packed spec tables when you get close.

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | `#000000` | Text, primary buttons, icons |
| on-primary | `#FFFFFF` | Text on black |
| background | `#FFFFFF` | Page |
| surface | `#F0F0F0` | Product image plates, cards |
| text-muted | `#8C8C8C` | Captions, prices, metadata |
| border | `#DADADA` | Hairlines, table rules |
| accent | `#FF5A00` | TE orange — sale/new markers, active states |
| signal-blue / yellow / green | `#1E5AE6` / `#FFD200` / `#2DB84B` | Color-coding (like hardware encoders), tiny dots, diagrams |
| metal | `#B4B4B4` | Anodized aluminum tone for illustrations and placeholders |

White and black dominate. Signal colors appear in dots, small badges, diagrams and in the product photos — never as large page backgrounds.

## Typography
- A neutral grotesk set small. Use **Helvetica Neue** / Arial; free alternative **Inter** or **Roboto Flex** at regular weight.
- Weight stays at 400 almost everywhere. Hierarchy comes from size and spacing, not bold.
- Body copy is small (13–14px) — a deliberate catalogue feel.
- Mono (**IBM Plex Mono** or **JetBrains Mono**) for model numbers, part codes, specs: `OP-1 field`, `TX-6`, `K.O. II`, `EP–133`.
- Lowercase is common for product names and nav ("store", "products", "now"). Keep product names exactly as written, including hyphens and lowercase.

## Layout
- Wide, loose grid: product grids of 3–5 columns with equal square image plates.
- Max width ~1600px; outer margin 16–32px; gaps 16–24px.
- Headers are tiny: logo top-left, a few lowercase links, cart count top-right.
- Product pages: large hero image(s), then short text column (max ~480px) and a dense spec table.
- Lots of empty vertical space between sections (64–120px); left-aligned text, centered objects.

## Elevation & Depth
- Completely flat. No shadows, no gradients.
- Products photographed on white or light grey with soft natural shadows baked into the image — the page itself adds none.
- 1px hairlines in `#DADADA` divide spec rows.
- Overlays (cart drawer, menus) are plain white panels with a hairline edge.

## Shapes
- Mostly sharp: 0–2px radius on image plates and cards.
- Buttons and tags are small pills.
- Circles as a motif — knobs, dots, status LEDs; use 8–12px solid colored dots as indicators.
- Icons: thin geometric line icons or simple technical pictograms, sometimes pixel-style.
- Illustrations: exploded-view line drawings and isometric diagrams in black on white.

## Components
- **Primary button**: small black pill, white 13px lowercase label ("add to cart"), ~32px tall. Hover: `#333333`.
- **Secondary button**: 1px black outline pill.
- **Product card**: `#F0F0F0` square image plate (1:1), product name below in 14px, price in muted grey, availability as a colored dot (green in stock, orange low, grey sold out).
- **Spec table**: two columns, mono 12px labels left, values right, 1px hairlines; no zebra striping.
- **Nav**: lowercase text links 14px, active link underlined or prefixed with a dot.
- **Badge**: tiny pill, 11px, orange fill with white text for "new", outline for others.
- **Quantity stepper**: minimal `–  1  +` in mono with 1px outline pill.

## Do's and Don'ts
**Do**
- Keep type small and regular weight; let whitespace do the work.
- Photograph or present products as isolated objects on light plates.
- Use mono for model numbers and specs.
- Use colored dots as the main way to introduce signal color.
- Respect product-name casing exactly.

**Don't**
- Don't use bold display headlines or marketing slogans in huge type.
- Don't fill large areas with orange or blue.
- Don't add shadows, gradients or rounded cards.
- Don't crowd products; one object per plate.
- Don't use stock lifestyle photography.

## Agent Prompt Guide
Paste-ready prompt:
> Build a page inspired by Teenage Engineering: white `#FFFFFF` page, black `#000000` small regular-weight Helvetica/Inter type (14px body), muted `#8C8C8C` metadata, light grey `#F0F0F0` square product plates, hairlines `#DADADA`. Signal colors (orange `#FF5A00`, blue `#1E5AE6`, yellow `#FFD200`, green `#2DB84B`) only as small dots and badges. Small black pill buttons with lowercase labels. Flat, sparse, catalogue-like, technical and playful.

Example component prompts:
1. "A 4-column product grid: square `#F0F0F0` plates, product name 'OP–1 field' in 14px, price in grey, green 8px availability dot."
2. "A spec table in mono 12px: rows like 'sample rate / 48 kHz', 1px hairlines, no background."
3. "A tiny header: logo left, lowercase links 'products store now', cart '(0)' right, all 14px regular."
