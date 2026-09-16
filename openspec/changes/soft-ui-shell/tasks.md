## 1. Design system

- [x] 1.1 Add `design/soft-ui/DESIGN.md` and `design/soft-ui/tailwind-theme.css` with Coolors tokens and dual-shadow Surface rules
- [x] 1.2 `git mv design/steep design/archive/steep` so `design/steep/` is not the live path
- [x] 1.3 Replace `src/app/globals.css` `@theme` with Soft UI tokens (no ink/peach/mist aliases). Body canvas `#DAE2EA`, copy `#6B6F78`
- [x] 1.4 Point README at `design/soft-ui/`. Remove live Steep guidance

## 2. Shared Surface and buttons

- [x] 2.1 Replace `GlassCard` with `Surface` (24px radius, dual shadow, canvas fill). Use it for every public content card
- [x] 2.2 Restyle `Button`: `filled` = accent `#1D79D6`; `soft` = extruded canvas; hover lift; press inset; disabled flat; persistent accent focus ring. One size for repeating filled “Start a Project”
- [x] 2.3 Remove Blush Peach callout blocks on `/`, `/faq`, `/contact`, `/technology`

## 3. Oval chrome

- [x] 3.1 Rebuild `SiteNav` as a centered Soft UI oval. Home: Logo | Services Work Process Studio | chevron (Careers, FAQ, Contact). Satellite: Logo | Careers FAQ Contact with current selected
- [x] 3.2 Logo `href="/"`. Services/Work/Process/Studio `href="/#…"` only. No Home label, no Technology, no header CTA
- [x] 3.3 Keep scroll-spy on `/`. Animate selected. Mobile sheet still reaches every destination including dropdown pages

## 4. Home bands and satellite shortcuts

- [x] 4.1 Make hero (`id="hero"`) and `#services` `#work` `#process` `#studio` full-bleed, large min-height bands with inner max-width content
- [x] 4.2 Add `DottedCloud` placeholders (`aria-hidden`) in those hashed bands
- [x] 4.3 Add shared `HomeSectionLinks` on `/careers` `/faq` `/contact` `/technology` pointing at the four hashes. Not inside the oval

## 5. Verify

- [x] 5.1 Locally on port 3000: oval modes on `/` vs `/faq`; logo from `/faq` lands on `/` hero; in-page Services on `/faq` lands on `/#services`; dotted clouds visible; no peach; no `design/steep/` live path
- [x] 5.2 No CMS, forms, i18n, jobs, WebGL. Cite change `soft-ui-shell`. FEAT-1…8 stay Released
