---
version: alpha
name: GOV.UK Design System
description: Plain, accessible, task-first government service design with near-black text, a single blue for links, chunky green start buttons and an unmistakable yellow focus state.
source: https://design-system.service.gov.uk
colors:
  primary: "#00703C"
  primary-hover: "#005A30"
  primary-shadow: "#002D18"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F3F2F1"
  text: "#0B0C0C"
  text-muted: "#505A5F"
  border: "#B1B4B6"
  input-border: "#0B0C0C"
  brand: "#1D70B8"
  link: "#1D70B8"
  link-hover: "#003078"
  link-visited: "#4C2C92"
  focus: "#FFDD00"
  focus-text: "#0B0C0C"
  error: "#D4351C"
  success: "#00703C"
  accent: "#1D70B8"
typography:
  display:
    fontFamily: GDS Transport
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.042
    letterSpacing: 0
  h1: { fontFamily: GDS Transport, fontSize: 3rem, fontWeight: 700, lineHeight: 1.042 }
  h2: { fontFamily: GDS Transport, fontSize: 2.25rem, fontWeight: 700, lineHeight: 1.111 }
  h3: { fontFamily: GDS Transport, fontSize: 1.5rem, fontWeight: 700, lineHeight: 1.25 }
  body: { fontFamily: GDS Transport, fontSize: 1.1875rem, fontWeight: 400, lineHeight: 1.316 }
  body-small: { fontFamily: GDS Transport, fontSize: 1rem, fontWeight: 400, lineHeight: 1.25 }
  mono: { fontFamily: monospace, fontSize: 1rem }
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  full: 50%
spacing:
  xs: 5px
  sm: 10px
  md: 20px
  lg: 30px
  xl: 60px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 8px 10px 7px
    boxShadow: 0 2px 0 #002D18
  text-input:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.input-border}"
    borderWidth: 2px
    rounded: "{rounded.sm}"
    height: 40px
---

# GOV.UK Design System — DESIGN.md

> Inspired by the public website of GOV.UK Design System. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
GOV.UK is designed for everyone in the country, including people who are stressed, on old phones, using screen readers or reading in a second language. The look is the consequence of that: big type, square edges, near-black on white, underlined blue links, one thing per page, and a thick yellow focus highlight you can see from across the room. Nothing is decorative.

Adjectives: **plain, accessible, trustworthy, utilitarian, direct**.

Services follow "one thing per page" — a question, its input, and a green "Continue" button. Content uses plain English in sentence case.

## Colors
| Token (`govuk-colour` / functional) | Hex | Role |
|---|---|---|
| `$govuk-text-colour` (black) | `#0B0C0C` | Body text, headings, header bar, input borders |
| `$govuk-secondary-text-colour` (dark-grey) | `#505A5F` | Hints, captions, metadata |
| `$govuk-link-colour` / brand blue | `#1D70B8` | Links, header blue stripe, notification banners |
| `$govuk-link-hover-colour` (dark-blue) | `#003078` | Link hover |
| `$govuk-link-visited-colour` (purple) | `#4C2C92` | Visited links |
| `$govuk-focus-colour` (yellow) | `#FFDD00` | Focus background / outline |
| `$govuk-focus-text-colour` | `#0B0C0C` | Text and underline on focus |
| `$govuk-error-colour` (red) | `#D4351C` | Error summary border, field error border/message |
| `$govuk-success-colour` / button green | `#00703C` | Primary buttons, success banners |
| button hover | `#005A30` | Primary button hover |
| button shadow | `#002D18` | 2px bottom "lip" under green buttons |
| `$govuk-border-colour` (mid-grey) | `#B1B4B6` | Dividers, summary list rules, table borders |
| light-grey | `#F3F2F1` | Secondary button bg, panels, footer |
| white | `#FFFFFF` | Page background |

Black and white dominate; blue is for links; green appears only on the main call to action.

## Typography
- **Family:** GDS Transport (restricted to `*.service.gov.uk`); everywhere else use `arial, sans-serif` — that is the official fallback. Weights: 400 regular, 700 bold only.
- **Responsive scale (desktop / mobile px):** 80 → 80/53, 48 (`govuk-heading-xl`) / 32, 36 (`-l`) / 27, 24 (`-m`) / 21, 19 (`-s` and `govuk-body`) / 19, 16 (`govuk-body-s`) / 16, 14 (`govuk-body-xs`) / 14.
- **Body is 19px** on desktop, line-height 25px. This is larger than most web defaults and intentional.
- Captions sit above headings in `#505A5F` (e.g. "Section 2 of 4").
- Sentence case everywhere; no all-caps, no italics for emphasis, no justified text.
- Links are always underlined (thickness ~1px, 0.1578em offset); hover thickens the underline.

## Layout
- Fixed page container: max-width 960px, 15px gutters on mobile, 30px on desktop.
- Grid: `govuk-grid-row` with `one-half`, `two-thirds`, `one-third`, `three-quarters`, `full`. Most transaction pages use **two-thirds** for the main column.
- Spacing scale (`govuk-spacing`, desktop): 0=0, 1=5px, 2=10px, 3=15px, 4=20px, 5=25px, 6=30px, 7=40px, 8=50px, 9=60px. Responsive variants shrink on mobile.
- Form groups have 30px bottom margin (20px mobile). Main content has 40px top padding.
- Header: black `#0B0C0C` bar with crown logo and a 10px blue `#1D70B8` bottom border; footer light-grey with a 1px `#B1B4B6` top border.

## Elevation & Depth
- None. No shadows, no blur, no layered cards.
- The only "depth" is the 2px `#002D18` bottom shadow on buttons, which disappears on active to simulate a press.
- Hierarchy comes from type size, borders (1px `#B1B4B6`, 5px left-borders for inset text, 5px red for error summaries) and white space.

## Shapes
- Square corners everywhere: buttons, inputs, panels, tags, cards. Radio buttons are circles; checkboxes are 40px squares.
- Icons are almost absent — a crown, a chevron, a warning "!" in a black circle. Never use decorative icon sets.
- Imagery is rare and functional; illustrations are avoided in transactions.

## Components
- **Button (primary):** `#00703C` bg, white 19px text, padding 8px 10px 7px, 2px border transparent, `box-shadow: 0 2px 0 #002D18`, square corners. Hover `#005A30`. Focus: `#FFDD00` bg, black text, `0 2px 0 #0B0C0C` shadow. Full width on mobile.
- **Start button:** primary button at 24px bold with a right-pointing arrow icon.
- **Secondary button:** `#F3F2F1` bg, black text, shadow `#929191`. **Warning button:** `#D4351C` bg.
- **Text input:** 40px tall, 2px solid `#0B0C0C` border, 5px padding, square. Focus: 3px `#FFDD00` outline plus inset `0 0 0 2px` black box-shadow (border looks 4px). Fixed widths: 2, 3, 4, 5, 10, 20 characters.
- **Radios / checkboxes:** 40×40 targets, 2px black border; labels 19px.
- **Error summary:** 5px `#D4351C` border, 20px padding, bold "There is a problem" heading, links to each field. Field errors get a 4px red left border on the form group and red bold message.
- **Notification banner:** 5px `#1D70B8` border with blue title bar; success variant `#00703C`.
- **Panel (confirmation):** `#00703C` bg, white centered text, 48px bold heading.
- **Tag:** uppercase-free in v5, 16px bold-ish label on tinted bg (e.g. blue tag `#BBD4EA` with `#0C2D4A` text), no radius.
- **Summary list:** key/value rows separated by 1px `#B1B4B6`, "Change" link at the right.
- **Focus (links):** `#FFDD00` background with a 4px black bottom box-shadow, no outline offset.

## Do's and Don'ts
**Do**
- Use 19px body text and the two-thirds column for forms.
- Ask one question per page with a clear `h1` that is also the label.
- Underline every link and use the yellow focus state exactly.
- Fall back to Arial when GDS Transport isn't licensed.
- Put an error summary at the top of the page when validation fails.

**Don't**
- Don't round corners or add shadows to cards.
- Don't use green for anything but the primary action and success.
- Don't use placeholder text as a label or hint.
- Don't use the crown, GOV.UK logotype or GDS Transport outside actual government services.
- Don't use more than two font weights.

## Agent Prompt Guide
**Base prompt:**
"Design in the style of the GOV.UK Design System. White page, max-width 960px, two-thirds content column. Text `#0B0C0C` in Arial (or GDS Transport) at 19px/25px, headings bold 48/36/24px. Links `#1D70B8`, always underlined. Primary button `#00703C` with a `0 2px 0 #002D18` bottom shadow, square corners. Inputs with 2px black borders. Focus state: `#FFDD00` yellow. No rounded corners, no shadows, no decoration. Plain English, sentence case."

**Example components:**
1. "A question page: grey caption 'Apply for a licence', `h1` 48px bold 'What is your date of birth?', grey hint 'For example, 27 3 2007', three inputs labelled Day (2ch), Month (2ch), Year (4ch), green 'Continue' button."
2. "An error state for that page: red-bordered error summary at top with 'There is a problem' and a linked message; the date group has a 4px red left border and bold red message."
3. "A confirmation panel: full-width `#00703C` block, white 48px bold 'Application complete', 36px 'Your reference number HDJ2123F' below."
