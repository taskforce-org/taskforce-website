## Why

The FEAT-30 glass oval and Steep/peach surfaces do not match the Soft UI (neumorph) language now chosen for the site. Home sections also need full-viewport room and visible placeholders for later background art and scroll motion. Satellite pages must reach those sections with in-page controls, not extra oval items.

This change is a follow-on to archived `homepage-ia` / FEAT-30. It does **not** reopen FEAT-1…8. ClickUp Feature id is TBD (not FEAT-1).

## What Changes

- **BREAKING (visual):** Retire Steep as the live design system. Archive `design/steep/` and replace it with `design/soft-ui/` (Coolors palette `#9DA2AA` `#6B6F78` `#1D79D6` `#DAE2EA` `#AEB2BA`, dual-shadow extruded surfaces). Peach/ink/glass tokens MUST NOT be used on public pages.
- Centered oval nav. Home: `TF logo | Services Work Process Studio | ▾`. Dropdown: Careers, FAQ, Contact (real pages). Satellite (`/careers`, `/faq`, `/contact`, `/technology`): `TF logo → / | Careers FAQ Contact` with the current page selected. Oval MUST NOT gain home-section items on satellite pages.
- TF logo always `href="/"`, which is the hero / page start. Services, Work, Process, Studio always `href="/#services"` `/#work` `/#process` `/#studio` (never a leftover path + hash).
- Home sections (hero + the four hashed blocks) MUST be large full-bleed bands with dotted-cloud placeholders for later backgrounds / scroll animation. No production 3D/GSAP this pass.
- Satellite pages MUST expose dedicated in-page buttons to those four hashes. Oval stays as above.
- One shared Surface component for cards, oval, and buttons. Repeating filled CTAs keep one size.

## Capabilities

### New Capabilities

- `soft-ui`: Public visual system — Coolors tokens, dual-shadow Soft UI, shared Surface, archived Steep. Behavior for every public page that currently requires Steep.

### Modified Capabilities

- `homepage-shell`: Oval groups, dropdown, route-mode chrome, logo `/`, hash links, large hashed sections with dotted-cloud placeholders, satellite in-page section buttons, drop glass/Steep/peach.
- `faq-page`: Drop Steep/peach. Keep FAQ copy and Start a Project. Section shortcuts come from site shell (`homepage-shell`).
- `contact-page`: Drop Steep/peach. Section shortcuts from shell.
- `careers-stub`: Drop Steep. Section shortcuts from shell.
- `technology-capabilities`: Drop Steep/peach. Section shortcuts from shell. `/technology` still not in the oval.
- `services-overview`: Drop Steep on the home Services section; Soft UI Surface cards.
- `process-page`: Drop Steep on the home Process section.
- `studio-about`: Drop Steep on the home Studio section.

## Impact

- `design/steep/` → `design/archive/steep/`. New `design/soft-ui/DESIGN.md` + `tailwind-theme.css`.
- `src/app/globals.css`, `SiteNav`, `GlassCard` (replace), `Button`, `src/app/page.tsx` sections, FAQ/Contact/Careers/Technology pages, README.
- Branch `feat/soft-ui-shell` stacked on `feat/FEAT-30-homepage-ia` until that PR merges. Rename branch when ClickUp Feature exists.
- No CMS, forms, i18n, job board, or production scroll WebGL this pass.
