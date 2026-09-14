## Why

FEAT-1…8 shipped as one URL per topic. Review of those Features (REV-EPC-1-2, `869f1qq2m`) showed that shape is wrong: Services / Work / Process / Studio duplicate the home story, Work `#work` breaks off `/`, nav has no selected state and no mobile twin, and the header “Start a Project” pill fights the in-page CTA. FEAT-30 (`869f1rz6g`, Project Website) rebuilds public chrome and home information architecture so `/` is the marketing story and only Careers, FAQ, and Contact stay separate pages.

## What Changes

- **BREAKING:** `/services`, `/services/[slug]`, `/process`, and `/studio` stop being standalone marketing pages. They MUST redirect to the matching home section (`/#services`, `/#work` is not used for those three; process → `/#process`, studio → `/#studio`, services → `/#services`).
- Fold Services, Work, Process, and Studio content onto `/` as `#services` `#work` `#process` `#studio`.
- Replace flat header links with a slim liquid-glass oval: `Logo | Services · Work · Process · Studio | Careers · FAQ | Contact`. No Home label. No Technology in the oval. No header “Start a Project”.
- On `/`, the oval selected item follows scroll. From other pages, Services / Work / Process / Studio go to `/#…`, never `currentPath#hash`.
- Mobile: every oval destination is reachable below the desktop breakpoint.
- One filled Button size for repeating “Start a Project” pills. Hero CTA on `/` stays and goes to `/contact`.
- Service cards: drop the “Service” eyebrow, equal size, glass language, “Learn more” with hover motion. Work cards use the same language at a larger width.
- Add a thin `/careers` stub (no job listings). Keep `/faq`, `/contact`, `/technology` as pages. Footer Technology stays.

## Capabilities

### New Capabilities

- `careers-stub`: Public `/careers` stub so Careers is a real page (200, no job listings). FEAT-16 replaces the stub later.

### Modified Capabilities

- `homepage-shell`: Chrome (oval, groups, selected state, scroll-spy, no header CTA, Work `/#work`, Careers `/careers`), home sections, card language, one filled CTA size.
- `services-overview`: Overview is a home section, not `/services`. Old URL redirects to `/#services`.
- `service-detail-pages`: Known slugs no longer serve detail pages; they redirect to `/#services`.
- `process-page`: Process content renders at `/#process`. `/process` redirects there.
- `studio-about`: Studio content renders at `/#studio`. `/studio` redirects there. Technology link still present in that section.

## Impact

- `src/components/site-nav.tsx`, `src/app/page.tsx`, `src/components/ui/button.tsx`.
- Redirect or retire `src/app/services/**`, `src/app/process/page.tsx`, `src/app/studio/page.tsx`.
- New `src/app/careers/page.tsx`.
- Existing `src/lib/*.ts` modules stay the copy source; no CMS, form, i18n, or job board.
- Branch `feat/FEAT-30-homepage-ia`. PR later `feat/…` → `develop`, citing FEAT-30 / `869f1rz6g` and change `homepage-ia`.
