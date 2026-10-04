---
version: alpha
name: Medium
description: Reading-first publishing platform — white space, a classic serif for stories, a clean sans for UI, and black pill buttons with a hint of green.
source: https://medium.com
colors:
  primary: "#191919"
  on-primary: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#F9F9F9"
  surface-cream: "#F7F4ED"
  text: "#242424"
  text-muted: "#6B6B6B"
  border: "#F2F2F2"
  border-strong: "#E5E5E5"
  accent: "#1A8917"
  accent-hover: "#0F730C"
  member: "#FFC017"
  highlight: "#DBF0E2"
typography:
  display:
    fontFamily: "GT Super, Playfair Display, Georgia, serif"
    fontSize: 6.5rem
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: -0.05em
  h1: { fontFamily: "sohne, Inter, Helvetica Neue, Helvetica, Arial, sans-serif", fontSize: 2.625rem, fontWeight: 700, lineHeight: 1.25, letterSpacing: -0.016em }
  h2: { fontFamily: "sohne, Inter", fontSize: 1.5rem, fontWeight: 700, lineHeight: 1.2 }
  body: { fontFamily: "source-serif-pro, Source Serif 4, Georgia, Cambria, Times New Roman, serif", fontSize: 1.25rem, fontWeight: 400, lineHeight: 1.6, letterSpacing: -0.003em }
  ui: { fontFamily: "sohne, Inter", fontSize: 0.875rem, fontWeight: 400, lineHeight: 1.43 }
  mono: { fontFamily: "Source Code Pro, Menlo, Monaco, monospace", fontSize: 0.875rem }
rounded:
  sm: 4px
  md: 8px
  full: 99em
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 56px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: 8px 20px
  button-green:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: 8px 16px
---

# Medium — DESIGN.md

> Inspired by the public website of Medium. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Medium is designed around one act: reading. Story pages are a narrow column of large serif text on white with almost no chrome, while the UI around it — nav, feeds, buttons — uses a quiet neo-grotesk (Söhne). The logged-out homepage leans editorial with a cream background, huge serif headline ("Human stories & ideas") and black pills. Green appears for follow/sign-up actions and highlights; gold marks member-only stories.

Adjectives: **literary, calm, minimal, focused, timeless.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #191919 | Black pill buttons ("Get started", "Sign up") |
| background | #FFFFFF | Story and feed pages |
| surface | #F9F9F9 | Secondary panels, code block bg (#F2F2F2) |
| surface-cream | #F7F4ED | Logged-out homepage background |
| text | #242424 | Story and UI text |
| text-muted | #6B6B6B | Bylines, read time, dates |
| border | #F2F2F2 | Feed dividers |
| border-strong | #E5E5E5 | Input outlines |
| accent | #1A8917 | Follow / publish / subscribe green |
| member | #FFC017 | Member-only star |
| highlight | #DBF0E2 | Highlighted text in stories |

Near-monochrome; green is used for a few actions, gold for the member star.

## Typography
- **Families:** Söhne (UI and headings in stories), Source Serif Pro / Charter (story body), GT Super (homepage display). Free fallbacks: **Inter** for Söhne, **Source Serif 4** for body, **Playfair Display** for GT Super.
- **Story scale:** title 42px/700 sans, −0.016em; subtitle 22px muted; body 20px serif, line-height 32px; h2 in body 24px/700 sans; pull quotes 30px italic serif.
- **UI scale:** 16px feed titles 700 (20px on desktop), 14–16px excerpts, 13px metadata.
- Drop caps optional, 3 lines tall.
- Homepage display: 106px serif, line-height 0.95, tight tracking.

## Layout
- Story column max 680px centered; images can break to 1192px ("wide") or full-bleed.
- Feed: 728px main column with right sidebar 368px (staff picks, topics, who to follow) separated by a 1px #F2F2F2 vertical rule.
- Top nav 57px: logo, search pill, "Write" icon link, bell, avatar.
- Paragraph spacing ~29px; section spacing 56px.

## Elevation & Depth
- Essentially no shadows; 1px #F2F2F2 dividers.
- Popovers (highlight menu, user menu): white, 4px radius, `0 2px 10px rgba(0,0,0,0.15)`; selection toolbar is dark #191919 with white icons.
- Sticky bottom action bar on mobile with top hairline.

## Shapes
- Buttons: full pills. Avatars: circles (24–32px in feeds, 44px in story header).
- Feed thumbnails: 160x107 (desktop) with 0–4px radius.
- Icons: thin 1–1.5px line icons, 24px; clap icon is the signature glyph.

## Components
- **Primary button:** #191919 fill, white 14px/400, pill, 8px 20px; hover #000. Large homepage variant 20px text, 8px 32px.
- **Follow button:** #1A8917 fill, white 14px, pill; following state: outlined with 1px #242424.
- **Outline button:** 1px #242424 border, pill.
- **Feed item:** avatar 20px + author name 13px, title 20px/700 sans (2-line clamp), excerpt 16px muted serif-free sans, meta row (date · read time · member star) 13px muted, action icons (bookmark, more) right; thumbnail right.
- **Story header:** title, subtitle, author row (44px avatar, name, "Follow" green text link, read time · date), then a hairline-bordered action bar with clap count, comments, bookmark, share.
- **Topic chip:** #F2F2F2 fill, 14px #242424, pill, 8px 16px.
- **Search:** #F9F9F9 pill 40px with search icon.

## Do's and Don'ts
**Do**
- Prioritize readability: 680px column, 20px serif body, 1.6 line-height.
- Keep chrome minimal and recede during reading.
- Use black pills for primary actions and green for follow/subscribe.
- Use plenty of whitespace and thin dividers.

**Don't**
- Don't add colored backgrounds to story pages.
- Don't use heavy shadows or boxed cards in feeds.
- Don't set story body in sans or below 18px.
- Don't crowd the reading column with sidebars or ads.

## Agent Prompt Guide
**Base prompt:**
"Design a Medium-inspired reading experience: white page, 680px centered column, story body in Source Serif 4 20px/1.6 #242424, titles and UI in Inter 700, #6B6B6B metadata, black #191919 pill buttons and green #1A8917 'Follow' pills, 1px #F2F2F2 dividers, circular avatars, thin line icons, no shadows."

**Example component prompts:**
1. "Logged-out hero on #F7F4ED: 106px Playfair Display 'Human stories & ideas', 22px subline, black pill 'Start reading', black bottom border on the hero."
2. "Feed item: 20px avatar + author, 20px/700 title, one-line excerpt, 'Mar 3 · 7 min read · ★', bookmark icon, 160x107 thumbnail right."
3. "Story action bar: hairline top and bottom, clap icon with '1.2K', comment icon with count, bookmark and share icons right."
