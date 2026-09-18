## Why

FEAT-8 shipped `/contact` as copy only. Visitors cannot send a project inquiry. FEAT-9 (`869f13ayr`, Project Website) is the first EPC-3 slice: a real form on `/contact` that writes a durable lead so later CRM Features do not replace the submit path. “Start a Project” is also the wrong site-wide ask; replace it with “Tell us the work”.

## What Changes

- Add a project-inquiry form on `/contact` (not a new route). Fields: company name; website plus up to three extra links (plus control); person full name and role; up to two phone numbers (plus control); short subject; need text (max 4000 characters); budget minimum typed by the visitor (USD on the English site); timeline from a fixed select.
- Persist every valid submit as a Lead in PostgreSQL via Prisma. Schema MUST already include columns and related tables later Features will use (staff users, `serviceSlug`, consultation tag + contact window, pipeline stage, notes, reminders, mailbox identities) so FEAT-10…15 do not rewrite the write path.
- After success: a thank-you popup, then return the visitor to `/contact`.
- Replace every public “Start a Project” label with “Tell us the work” (`/`, footer, FAQ, Process, Studio, Technology, Contact). Store the Farsi equivalent «کار را بگویید» on the same CTA fields for FEAT-24. Header oval still has no this CTA.
- Update Contact copy that says the form ships later.
- **BREAKING** (spec): Contact and homepage-shell no longer forbid an inquiry form.

Out of this change (same epic, later Features): service modal and `serviceSlug` prefill (FEAT-10); consultation checkbox, light tag, and weekday/weekend × morning/late-night window (FEAT-11); `/admin` login, list, edit, delete (FEAT-12); stage UI (FEAT-13); notes/reminders UI (FEAT-14); sending mail on the VPS, text templates, “new lead” and “unopened 1 day” notices with no assignee (FEAT-15); FA budget tiers in toman (FEAT-24); spam product (FEAT-27); CMS form builder; public visitor accounts; `/technology` information architecture (footer + Studio link stay as they are here).

## Capabilities

### New Capabilities

- `project-inquiry`: Public inquiry form on `/contact`, server-side validation, durable Lead write, thank-you popup, staff-only identity model in the schema (no public accounts, no admin UI yet).

### Modified Capabilities

- `contact-page`: Page MUST include the inquiry form. Copy MUST NOT claim the form is later. Primary CTA label MUST be “Tell us the work”.
- `homepage-shell`: In-page primary CTA label MUST be “Tell us the work” and MUST still go to `/contact`. `/contact` MUST accept a project inquiry. Filled pills that used “Start a Project” MUST use the new label and still share one size. Header still MUST NOT contain this CTA.
- `faq-page`: Page CTA label MUST be “Tell us the work” (href `/contact` unchanged).
- `process-page`: Same CTA label change.
- `studio-about`: Same CTA label change. Technology & capabilities link unchanged in this Feature.
- `technology-capabilities`: Same CTA label change.

## Impact

- `src/app/contact/page.tsx`, `src/lib/contact.ts`, content CTA modules (`home`/`faq`/`process`/`studio`/`technology`), `src/components/site-footer.tsx`.
- New form UI (Soft UI `Surface` / `Button`), server action or Route Handler, Prisma schema + PostgreSQL, env for database URL. Super-admin seed-from-env is schema-ready; login UI is FEAT-12.
- New npm deps: `prisma`, `@prisma/client`. No email SDK, no captcha vendor, no Calendly.
- Stacked on `feat/soft-ui-shell` / `feat/FEAT-9-project-inquiry-form`. Do not merge until the rest of EPC-3 lands.
