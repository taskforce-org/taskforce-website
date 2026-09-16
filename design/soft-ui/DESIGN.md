# Soft UI — Style Reference

> extruded controls on a cool gray canvas

**Theme:** light  
**Source kit:** attached Soft UI / neumorph sheet  
**Palette:** [Coolors 9da2aa-6b6f78-1d79d6-dae2ea-aeb2ba](https://coolors.co/palette/9da2aa-6b6f78-1d79d6-dae2ea-aeb2ba)

Steep is archived at `design/archive/steep/`. Do not import it. Do not use Paper White, Ink Black, Blush Peach, or Sienna Brown on live pages.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Canvas | `#DAE2EA` | `--color-canvas` | Page background and default extruded fill. Foreground surfaces match this so they read as pushed out of the fabric |
| Inset | `#AEB2BA` | `--color-inset` | Pressed trough, disabled wash, nested wells |
| Edge | `#9DA2AA` | `--color-edge` | Borders at 1 / 1.5 / 2.5px, muted icons |
| Copy | `#6B6F78` | `--color-copy` | Body, labels, unselected nav |
| Accent | `#1D79D6` | `--color-accent` | Selected, filled primary, focus ring, kit “Default/Hover” |

No sixth color this pass. Contrast of Copy on Canvas may miss WCAG AA; FEAT-28 owns that pass.

## Tokens — Typography

Keep the current site stack this pass (display serif fallbacks: Source Serif 4 / Georgia; UI sans: Inter / system-ui). Soft UI kit does not define type. Scale stays 15 / 17 / 20 / 22 / 26 / 44 / 64 / 90.

## Tokens — Shape and elevation

**Base unit:** 4px

| Element | Radius |
|---------|--------|
| cards / Surface | 24px |
| oval / filled pills | 9999px |
| inputs | 16px |
| icons | 16 / 20 / 24 |

**Borders:** 1px default, 1.5px controls, 2.5px emphasis.

**Shadows (intensities 1–3 now; 4–6 reserved):**

| Name | Token | Use |
|------|-------|-----|
| out | `--shadow-soft-out` | Default extruded card, oval, soft button |
| hover | `--shadow-soft-hover` | Hover lift |
| in | `--shadow-soft-in` | Pressed / selected inset |

Light highlight sits top-left. Dark shadow sits bottom-right. Fill equals Canvas (or Inset when pressed).

## Interaction states (from the kit)

- **Focus:** accent ring stays visible while focused
- **Hover:** subtle extra elevation
- **Pressed:** deeper / inset shadow
- **Disabled:** lower contrast, no dual shadow
- **Loading:** indicator on the control (only if a control already has a loading state; no new loaders this pass)
- **Selected:** accent fill or inset Surface, not a glass pill

## Components

### Surface

Single card primitive for every public content card. Canvas fill, 24px radius, `--shadow-soft-out`, padding 32px. Same language on home, FAQ, Contact, Careers, Technology. Size via layout, not a second card component.

### Oval

Centered, content-hug, fully rounded Surface. Not full-bleed glass. Home children: Logo, section links, chevron. Satellite children: Logo, Careers, FAQ, Contact.

### Button — Filled

Primary CTA. Background Accent, text Canvas (or white if Canvas-on-Accent fails), radius 9999px, height 44px, one size site-wide for “Start a Project”.

### Button — Soft

Secondary. Canvas fill, dual shadow, radius 9999px. Used for oval-adjacent and in-page section shortcuts.

## Layout

Page max-width for **content** remains 1200px. Home **bands** are full-bleed, `min-height` near the viewport, with a dotted-cloud decoration behind the content. Section ids: `hero`, `services`, `work`, `process`, `studio`.

## Do

- Match fill to canvas so cards extrude, not float
- Use Accent only for selection, focus, and filled primary
- Reuse Surface; do not invent per-page card CSS

## Don't

- Don't ship Steep peach, ink fills, or backdrop-blur glass
- Don't add the kit sidebar, sliders, toasts, or table chrome this pass
- Don't put home-section links into the satellite oval
- Don't implement production WebGL / GSAP in the dotted-cloud slots
