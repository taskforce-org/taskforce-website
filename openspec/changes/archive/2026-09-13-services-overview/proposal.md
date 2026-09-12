## Why

Homepage service teasers and the Services nav item currently go nowhere useful (`#services`). FEAT-2 (`869f13ay3`, Project Website) is the approved next Feature: a real Services overview so visitors can see the five lines before FEAT-3 detail pages exist.

## What Changes

- Add a `/services` overview page: intro, five service cards (same labels as the homepage), one “Start a Project” CTA to `/contact`.
- Point nav “Services” and homepage “Learn more” links at `/services`.
- Stay on Steep. No service detail routes, CMS, forms, or i18n.

## Capabilities

### New Capabilities

- `services-overview`: Public `/services` index that explains the five service lines at overview depth (not full detail pages).

### Modified Capabilities

- `homepage-shell`: Services nav and homepage service-card links MUST go to `/services` instead of `#` / `#services`.

## Impact

- New App Router page `src/app/services/page.tsx`.
- Updates to `src/components/site-nav.tsx` and homepage service card `href`s.
- Stacked on `feat/FEAT-2-services-overview` (unmerged FEAT-1). PR later `feat/…` → `develop`, citing FEAT-2 / `869f13ay3` and change `services-overview`.
