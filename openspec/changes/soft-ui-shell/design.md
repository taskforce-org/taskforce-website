## Context

See `proposal.md` for why. Current chrome is `src/components/site-nav.tsx` (full-width glass oval, Careers/FAQ/Contact always visible). Cards are `GlassCard` (mist + blur). Tokens live in `src/app/globals.css` mirrored from `design/steep/`. Home sections are `py-20` inside `max-w-[1200px]`. FEAT-1…8 stay Released. This change stacks on `feat/FEAT-30-homepage-ia`. Behavior contracts are the deltas under `specs/`. Live visual source becomes `design/soft-ui/`.

## Goals / Non-Goals

**Goals:**

- One Surface primitive (card / oval / button elevation).
- Route-aware oval + in-page satellite shortcuts to `/#…`.
- Large home bands with dotted-cloud slots for later motion.
- Archive Steep; stop importing it.

**Non-Goals:**

- Production scroll animation, GSAP, WebGL.
- Kit extras (icon rail, sliders, toasts, tables).
- New ClickUp Feature creation (id TBD).
- EN/FA, CMS, forms, jobs.

## Decisions

### Archive Steep by moving the folder

`git mv design/steep design/archive/steep`. New `design/soft-ui/DESIGN.md` + `tailwind-theme.css`. `globals.css` imports Soft UI tokens only. Alternative: keep Steep in place and add a parallel folder. Rejected: proposal says no live Steep path.

### Token names map Coolors without keeping Steep names

| Token | Hex | Role |
|-------|-----|------|
| `--color-canvas` | `#DAE2EA` | Page + extruded fill |
| `--color-inset` | `#AEB2BA` | Pressed / disabled / nested |
| `--color-edge` | `#9DA2AA` | Border 1 / 1.5 / 2.5px |
| `--color-copy` | `#6B6F78` | Text, unselected nav |
| `--color-accent` | `#1D79D6` | Selected, filled primary, focus |

Do not alias `--color-ink-black` / `--color-blush-peach`. Alternative: keep Steep names, swap hex. Rejected: leftover peach class names would keep shipping the old look.

Typography: keep current serif/sans fallbacks (Source Serif 4 / Inter) this pass. Soft UI kit did not specify type.

### Dual shadow as CSS variables, intensities 1–3 used now

`--shadow-soft-out` (default extruded), `--shadow-soft-hover` (lift), `--shadow-soft-in` (pressed/selected). Intensities 4–6 from the kit stay unused until a later polish Feature. Alternative: per-component magic numbers. Rejected: oval, card, and button must match.

Filled primary (Start a Project, kit Default/Hover) uses `--color-accent` on a pill, not canvas extrusion, so contrast holds. Oval items and default cards stay extruded canvas. Alternative: all controls canvas-colored. Rejected: `#6B6F78` on `#DAE2EA` is weak for primary CTA.

### Oval is one client component with two item sets

`pathname === "/"` → home items + chevron menu. Else → logo + Careers/FAQ/Contact. Hash links stay `/#id`. Logo `href="/"`. Chevron is `aria-expanded` disclosure, not a new route. Mobile: same destinations in a sheet. Alternative: one item list, hide with CSS. Rejected: satellite oval must not show home sections.

### Satellite shortcuts live in the shell, not each page template

A small `HomeSectionLinks` (or equivalent) rendered from the site layout or a shared block on Careers/FAQ/Contact/Technology. Four links, Soft UI buttons, targets `/#services` `/#work` `/#process` `/#studio`. Alternative: duplicate markup per page. Rejected: drift.

### Home bands are min-height viewport sections with a DottedCloud slot

Each of `hero`, `services`, `work`, `process`, `studio` is full-bleed (`min-height` ~100vh, `id` unchanged except hero `id="hero"` for later motion). Content stays max-width 1200 inside. `DottedCloud` is decorative CSS (dotted SVG or repeating radial), `aria-hidden`. Alternative: empty colored blocks. Rejected: spec wants clouds as the later-art marker.

### Replace GlassCard with Surface

`GlassCard` becomes `Surface` (same import sites). Button variants: `filled` (accent), `soft` (extruded), `ghost` optional. Drop peach callout blocks; use `Surface` or accent-filled CTA only.

## Risks / Trade-offs

- [`#6B6F78` on `#DAE2EA` may fail WCAG AA for long copy] Mitigation: FEAT-28 contrast pass. This Feature ships the five-color palette as specified.
- [Stacked branch on unmerged FEAT-30] Mitigation: rebase onto `develop` after homepage-ia merges; rename `feat/FEAT-<N>-soft-ui-shell` when ClickUp exists.
- [Hash from satellite + large sections] Mitigation: keep `scroll-mt` for sticky oval height.

## Migration Plan

Ship on `feat/soft-ui-shell`. After ClickUp Feature exists, retitle PR. Rollback: revert PR; Steep remains in `design/archive/steep/` for history. No data migration.

## Open Questions

None that block apply. ClickUp Feature id can land after artifacts exist.
