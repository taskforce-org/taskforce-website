## Why

`/contact` is still a hardcoded stub. FEAT-8 (`869f13ayd`, Project Website) is the approved next Feature: a real Contact / Start a Project page so visitors can see availability and how estimates work before the inquiry form exists. Copy must be dummy but Task Force–related, and every field on the page must live in one content module so FEAT-20 CMS can replace the source later. The form itself is FEAT-9. This change stacks on FEAT-7 (`faq-page`): FAQ nav already goes to `/faq`.

## What Changes

- Replace the `/contact` stub with a presentational Contact / Start a Project page: availability, how estimates work, what happens next. No inquiry form.
- Keep all page copy in a typed static module (dummy related data now). Page reads that module; it does not hardcode strings.
- Contact nav stays `/contact`. Keep FAQ on `/faq`, Process on `/process`, Studio on `/studio`, footer Technology on `/technology`.
- Stay on Steep. No CMS admin, forms, i18n, jobs, invented phone numbers, or street addresses.

## Capabilities

### New Capabilities

- `contact-page`: Public `/contact` page that presents how to start a project from a single content module, with no inquiry form.

### Modified Capabilities

- `homepage-shell`: `/contact` MUST be the Contact page (not a leftover stub) and MUST still have no inquiry form. Start a Project CTA MUST go to `/contact`. FAQ MUST stay `/faq`. Services, Studio, Process, and footer Technology targets MUST stay as they are.

## Impact

- Replace `src/app/contact/page.tsx` to read a content module.
- New content module (e.g. `src/lib/contact.ts`) holding every string the page renders.
- No nav href change. Branch `feat/FEAT-8-contact` stacked on `feat/FEAT-7-faq`. PR later `feat/…` → `develop`, citing FEAT-8 / `869f13ayd` and change `contact-page`.
