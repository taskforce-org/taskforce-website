## Why

No public Technology page exists, and chrome has no path to one. FEAT-6 (`869f13ayc`, Project Website) is the approved next Feature: a real Technology & capabilities page so visitors can see technical depth per service line before they start a project. Copy must be dummy but Task Force–related, and every field on the page must live in one content module so FEAT-20 CMS can replace the source later. This change stacks on archived FEAT-5 (`process-page`): Process nav already goes to `/process`.

## What Changes

- Add a public `/technology` page: five capability groups matching the five service lines (not a service-line index, not Process steps, not Studio identity), one “Start a Project” CTA to `/contact`.
- Do not add a Technology item to top nav. Point visitors via a Studio page link and a footer link.
- Keep all Technology page copy in a typed static module (dummy related data now). Page reads that module; it does not hardcode strings.
- Stay on Steep. No CMS admin, forms, i18n, jobs, or logo wall.

## Capabilities

### New Capabilities

- `technology-capabilities`: Public `/technology` page that presents per-service-line capability groups from a single content module.

### Modified Capabilities

- `homepage-shell`: Footer MUST include a Technology link to `/technology`. Top nav MUST stay Home, Services, Work, Process, Studio, Careers, FAQ, Contact (no Technology item). Services / Studio / Process targets MUST stay as they are.
- `studio-about`: Studio page MUST include a link to `/technology` whose label and href come from the Studio content document. Primary CTA stays “Start a Project” → `/contact`.

## Impact

- New App Router page `src/app/technology/page.tsx`.
- New content module (e.g. `src/lib/technology.ts`) holding every string the Technology page renders.
- Update `src/lib/studio.ts` and `src/app/studio/page.tsx` with a Technology link field.
- Update `src/components/site-footer.tsx` with a Technology link. Leave `site-nav.tsx` labels unchanged.
- Branch `feat/FEAT-6-technology-capabilities` stacked on `feat/FEAT-5-process-page`. PR later `feat/…` → `develop`, citing FEAT-6 / `869f13ayc` and change `technology-capabilities`.
