## Why

FAQ nav still goes to `#`. FEAT-7 (`869f13aye`, Project Website) is the approved next Feature: a real FAQ page so visitors can read common pre-sales answers before they start a project. Copy must be dummy but Task Force–related, and every field on the page must live in one content module so FEAT-20 CMS can replace the source later. This change stacks on archived FEAT-6 (`technology-capabilities`): footer Technology already goes to `/technology`.

## What Changes

- Add a public `/faq` page: a list of common pre-sales questions and short answers (not Studio identity, not Process steps, not a service-line index, not a tech stack), one “Start a Project” CTA to `/contact`.
- Point nav “FAQ” at `/faq`. Keep Process on `/process`, Studio on `/studio`, footer Technology on `/technology`.
- Keep all page copy in a typed static module (dummy related data now). Page reads that module; it does not hardcode strings.
- Stay on Steep. No CMS admin, forms, i18n, jobs, or real prices.

## Capabilities

### New Capabilities

- `faq-page`: Public `/faq` page that presents pre-sales questions and answers from a single content module.

### Modified Capabilities

- `homepage-shell`: FAQ nav MUST go to `/faq` instead of `#`. Services, Studio, Process, and footer Technology targets MUST stay as they are. Top nav MUST NOT gain a Technology item.

## Impact

- New App Router page `src/app/faq/page.tsx`.
- New content module (e.g. `src/lib/faq.ts`) holding every string the page renders.
- Update `src/components/site-nav.tsx` FAQ `href` only.
- Branch `feat/FEAT-7-faq` stacked on `feat/FEAT-6-technology-capabilities`. PR later `feat/…` → `develop`, citing FEAT-7 / `869f13aye` and change `faq-page`.
