---
version: alpha
name: Twitch
description: Electric-purple live-streaming platform with a dark, gamer-native interface, compact chat UI and bold rounded type.
source: https://www.twitch.tv
colors:
  primary: "#9147FF"
  primary-hover: "#772CE8"
  on-primary: "#FFFFFF"
  brand: "#9146FF"
  background: "#0E0E10"
  surface: "#18181B"
  surface-elevated: "#1F1F23"
  surface-input: "#2F2F35"
  text: "#EFEFF1"
  text-muted: "#ADADB8"
  border: "#2E2E35"
  accent: "#BF94FF"
  live: "#EB0400"
  success: "#00F593"
  warning: "#FFD37A"
typography:
  display:
    fontFamily: "Roobert, Inter, Helvetica Neue, Arial, sans-serif"
    fontSize: 3.375rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.01em
  h1: { fontFamily: "Roobert, Inter", fontSize: 1.875rem, fontWeight: 700, lineHeight: 1.2 }
  h2: { fontFamily: "Roobert, Inter", fontSize: 1.125rem, fontWeight: 600, lineHeight: 1.3 }
  body: { fontFamily: "Inter, Roobert, Helvetica, Arial", fontSize: 0.8125rem, fontWeight: 400, lineHeight: 1.5 }
  small: { fontFamily: "Inter, Roobert", fontSize: 0.75rem, fontWeight: 400, lineHeight: 1.5 }
  mono: { fontFamily: "JetBrains Mono, ui-monospace", fontSize: 0.75rem }
rounded:
  sm: 2px
  md: 4px
  lg: 6px
  full: 9000px
spacing:
  xs: 5px
  sm: 10px
  md: 15px
  lg: 20px
  xl: 30px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 0 10px
    height: 30px
  live-badge:
    backgroundColor: "{colors.live}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
---

# Twitch — DESIGN.md

> Inspired by the public website of Twitch. Not an official design document. Values are approximations for building UI in a similar spirit.

## Overview
Twitch is a dark, buzzing arena. The near-black chrome (#0E0E10) and charcoal panels keep focus on the live video and the waterfall of chat. Purple — the unmistakable Twitch #9147FF — marks every primary action, follow button and brand moment, while a red LIVE pill signals real-time. The UI is compact and information-dense, with small 13px text, tight 30px buttons and a three-column app layout. The brand side (Roobert typeface, glitch logo) brings bold, playful energy.

Adjectives: **live, energetic, community-driven, compact, playful.**

## Colors
| Token | Hex | Role |
|---|---|---|
| primary | #9147FF | Follow/Subscribe/primary buttons, links, active states |
| primary-hover | #772CE8 | Hover |
| brand | #9146FF | Logo and marketing purple |
| accent | #BF94FF | Lighter purple — links and highlights on dark |
| background | #0E0E10 | App background |
| surface | #18181B | Side nav, chat, cards |
| surface-elevated | #1F1F23 | Popovers, dropdowns |
| surface-input | #2F2F35 | Inputs, secondary button fill (rgba(83,83,95,0.38)) |
| text | #EFEFF1 | Primary text |
| text-muted | #ADADB8 | Categories, viewer counts, timestamps |
| border | #2E2E35 | Dividers |
| live | #EB0400 | LIVE badges, viewer dot |
| success | #00F593 | Online/success |
| warning | #FFD37A | Warnings |

Light mode exists (#F7F7F8 background, #0E0E10 text) but dark is the canonical look.

## Typography
- **Families:** Roobert (brand/headings) and Inter (UI). Free fallback: **Inter** for both, or **Manrope** for Roobert.
- **Scale:** 54px marketing / 30px page title / 18px section ("Live channels we think you'll like") 600 / 14px card title 600 / 13px body & chat / 12px meta.
- Chat: 13px, usernames 700 in user-chosen colors, message text #EFEFF1, line-height 20px.
- Section headers often mix colors: "Live channels **we think you'll like**" with the accented portion in #BF94FF.

## Layout
- Top nav 50px: logo, Following/Browse links, centered search (max 400px), icons + avatar + "Get Bits" right.
- Left side nav 240px (collapsible to 50px avatars) listing followed channels with live dots and viewer counts.
- Center content; right chat column 340px on channel pages.
- Browse grid: 16:9 thumbnails in 4–6 columns with 10px gaps; category grid uses 3:4 box art in 7–9 columns.
- Spacing based on a 5/10px rhythm.

## Elevation & Depth
- Tonal layering: #0E0E10 → #18181B → #1F1F23.
- Popovers: `0 4px 8px rgba(0,0,0,0.4), 0 0 4px rgba(0,0,0,0.4)`, 6px radius.
- Thumbnail hover: card shifts up/right by 6px with a purple offset block behind (#9147FF) — the signature "pop-out" effect.

## Shapes
- Buttons: 4px radius (pill variant for some marketing). Inputs: 6px radius.
- Thumbnails: 0–4px radius. Avatars: circles 30–50px; live channel avatars get a 2px red ring.
- Icons: 20px, 2px stroke, slightly rounded, geometric.

## Components
- **Primary button:** #9147FF fill, white 13px/600, 30px tall, 0 10px, 4px radius; hover #772CE8. Large variant 40px tall, 15px text.
- **Secondary button:** rgba(83,83,95,0.38) fill, #EFEFF1 text; hover rgba(83,83,95,0.48).
- **Follow button:** primary purple with heart icon; following state turns secondary with filled heart.
- **Stream card:** 16:9 thumbnail with LIVE badge top-left (#EB0400, white 13px/600 uppercase, 4px radius) and viewer count bottom-left (rgba(0,0,0,0.6)); below: 40px avatar, title 14px/600 truncated, channel name muted, category in #BF94FF, tag pills.
- **Tag pill:** rgba(83,83,95,0.38), #EFEFF1 12px/600, 9000px radius, 20px tall.
- **Search input:** 36px, #18181B fill with 2px rgba(83,83,95,0.48) border; focus 2px #9147FF border.
- **Chat input:** 40px, rounded 6px, emote and bits buttons inside; purple "Chat" button bottom-right.

## Do's and Don'ts
**Do**
- Keep backgrounds near-black and layered.
- Use purple for every primary action and active state.
- Keep UI compact: 13px text, 30px buttons.
- Use the purple offset-block hover on thumbnails.

**Don't**
- Don't use purple for large background fills in the app.
- Don't use big radii — keep it at 4–6px except tags.
- Don't use red for anything but LIVE.
- Don't use thin, delicate typography.

## Agent Prompt Guide
**Base prompt:**
"Design a Twitch-inspired streaming UI: #0E0E10 background, #18181B panels, #EFEFF1 text and #ADADB8 muted, Inter at 13px for UI with bold Roobert/Manrope headings, #9147FF purple for all primary buttons (30px tall, 4px radius), red #EB0400 LIVE badges, compact 10px spacing, 240px followed-channels sidebar and 340px chat column."

**Example component prompts:**
1. "Stream card: 16:9 thumbnail with red LIVE badge and '12.4K viewers' overlay, hover shifts card with purple offset block; avatar, bold title, channel name, purple category, tag pills."
2. "Chat panel: #18181B, header 'STREAM CHAT' 13px/600 uppercase, messages with colored bold usernames, 40px input and purple 'Chat' button."
3. "Channel header: 64px avatar with red live ring, streamer name 20px/700, title, category link, purple 'Follow' with heart and secondary 'Subscribe'."
