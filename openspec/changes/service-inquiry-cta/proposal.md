## Why

Homepage service cards still dead-end on “Learn more”. FEAT-9 shipped the `/contact` form but never tags which line the visitor came from. FEAT-10 (`869f13ayt`, Project Website) is the next EPC-3 slice: one shared service modal (home and Contact) that shows that line’s job copy and portfolio, then sends the visitor into the inquiry form with `serviceSlug` set.

## What Changes

- Same service modal on the homepage `#services` cards and on `/contact` (service names). Desktop hover or click opens it; phone tap opens it. Modal stays until dismiss so the visitor can scroll.
- Modal body: that line’s job copy (scope, process) plus portfolio for the line (reuse existing selected-work / example copy this Feature; no new media CMS).
- Modal primary control uses the site-wide CTA “Tell us the work” (`labelFa` already stored). Home: go to `/contact?service=<slug>#inquire`. Already on `/contact`: close modal, set the form service, scroll to `#inquire`.
- Inquiry form accepts `?service=` (known slugs only). Valid submit writes `Lead.serviceSlug`. Unknown slug is ignored; slug stays optional.
- **BREAKING** (spec): Contact may show the five service names as modal triggers (not a second overview page). Homepage service cards open the modal; they still MUST NOT navigate to `/services/[slug]`.

Out of this change: consultation checkbox / contact window (FEAT-11); admin (FEAT-12); pipeline UI (FEAT-13); notes/reminders (FEAT-14); mail (FEAT-15); Farsi UI (FEAT-24); spam (FEAT-27); restoring standalone `/services/[slug]` pages; `/technology` IA; CMS portfolio uploads.

## Capabilities

### New Capabilities

- `service-inquiry-cta`: Shared service modal (home + Contact), hover/tap/click open, scrollable job + portfolio, CTA into the inquiry form with `serviceSlug` prefilled and persisted.

### Modified Capabilities

- `services-overview`: Cards MUST open the shared modal. “Learn more” remains a hint, not a route. Cards still MUST NOT go to `/services/[slug]`.
- `contact-page`: Page MUST present the five service names as the same modal triggers. Copy document MAY hold the Contact-side heading for that list. `/contact?service=<slug>` MUST prefill and scroll to the form.
- `project-inquiry`: When a known `serviceSlug` is present on submit, the Lead MUST store it. The form MUST NOT add a free-form service dropdown; the modal/query is the picker. Consultation still absent.

## Impact

- Shared modal component used from `src/app/page.tsx` `#services` and `src/app/contact/page.tsx`.
- `src/lib/services.ts` plus Contact copy; inquiry form + `submitInquiry` write `serviceSlug`.
- Soft UI `Surface` overlay / `<dialog>`. No new npm deps. `/services` and `/services/[slug]` stay redirects to `/#services`.
- Stacked on `feat/FEAT-9-project-inquiry-form`. Do not merge until the rest of EPC-3 lands.
