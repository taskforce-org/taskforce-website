## Why

`/services` lists five lines but each card goes nowhere. FEAT-3 (`869f13ay5`, Project Website) is the approved next Feature: one detail page per line so visitors can read scope, process, and examples before they start a project.

## What Changes

- Add five static detail routes under `/services/[slug]`, one per existing service line.
- Each page: Task Force identity in the title, serif H1 with the line name, short scope, how we work, at least one example/outcome, “Start a Project” CTA to `/contact`.
- Point overview cards at the matching detail route. Homepage teasers stay on `/services`.
- Stay on Steep. No CMS, forms, i18n, or 3D/WebGL scenes.

## Capabilities

### New Capabilities

- `service-detail-pages`: Public per-line service pages at `/services/[slug]` covering scope, process, and examples at detail depth.

### Modified Capabilities

- `services-overview`: Overview cards MUST link to the matching detail route instead of remaining non-navigating. The overview MAY exist alongside `/services/[slug]` routes.

## Impact

- New App Router page `src/app/services/[slug]/page.tsx` (plus `not-found` for unknown slugs).
- Extend `src/lib/services.ts` with slug + detail copy; overview cards become links.
- Stacked on `feat/FEAT-3-service-detail-pages` (unmerged FEAT-2). PR later `feat/…` → `develop`, citing FEAT-3 / `869f13ay5` and change `service-detail-pages`.
