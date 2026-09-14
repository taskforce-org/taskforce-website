## Why

Process nav still goes to `#`. FEAT-5 (`869f13ay9`, Project Website) is the approved next Feature: a real Process page so visitors can see the engagement steps before they start a project. Copy must be dummy but Task Force–related, and every field on the page must live in one content module so FEAT-20 CMS can replace the source later. This change stacks on archived FEAT-4 (`studio-about`): Studio nav already goes to `/studio`.

## What Changes

- Add a public `/process` page: ordered engagement steps (not Studio how-we-work, not service-line process), one “Start a Project” CTA to `/contact`.
- Point nav “Process” at `/process`. Keep Studio on `/studio`.
- Keep all page copy in a typed static module (dummy related data now). Page reads that module; it does not hardcode strings.
- Stay on Steep. No CMS admin, forms, i18n, tech stack, jobs, or Studio identity dump.

## Capabilities

### New Capabilities

- `process-page`: Public `/process` page that presents ordered studio engagement steps from a single content module.

### Modified Capabilities

- `homepage-shell`: Process nav MUST go to `/process` instead of `#`. Studio MUST stay on `/studio`.

## Impact

- New App Router page `src/app/process/page.tsx`.
- New content module (e.g. `src/lib/process.ts`) holding every string the page renders.
- Update `src/components/site-nav.tsx` Process `href` only.
- Branch `feat/FEAT-5-process-page` stacked on `feat/FEAT-4-studio-about`. PR later `feat/…` → `develop`, citing FEAT-5 / `869f13ay9` and change `process-page`.
