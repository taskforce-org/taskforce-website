## Context

See `proposal.md` for why. `/contact` is presentational (`src/lib/contact.ts` + `src/app/contact/page.tsx`). CTA modules still say “Start a Project”. Stack: Next.js 16 App Router, Soft UI, no DB, no auth, no mail. This change is stacked on `feat/soft-ui-shell`. Behavior: `specs/project-inquiry/spec.md` plus the listed deltas.

EPC-3 later Features MUST reuse this write path. Schema is fat; this Feature’s UI is thin.

## Goals / Non-Goals

**Goals:**

- Prisma + PostgreSQL from the first submit.
- One Lead row per inquiry; related rows for links and phones.
- Soft UI form on `/contact` using `Surface` / `Button`.
- Site-wide CTA string swap, including unused `ctaFa` (or equivalent) for FEAT-24.

**Non-Goals:**

- `/admin`, sessions, password change (FEAT-12). Seed env vars may exist unused.
- Service modal / `serviceSlug` UI (FEAT-10). Column exists, form does not set it.
- Consultation checkbox and time-window chips (FEAT-11). Columns exist, form does not set them.
- Stage UI (FEAT-13), notes/reminders UI (FEAT-14), SMTP send (FEAT-15).
- Installing the VPS mail machine.
- Farsi UI or toman chips (FEAT-24).
- Captcha / honeypot product (FEAT-27).
- Changing `/technology` IA (footer + Studio link stay).

## Decisions

### PostgreSQL + Prisma, not SQLite and not JSON

CRM, staff users, and later mail identities need a real database. Prisma keeps a single schema file later Features only add to. SQLite would force a provider swap. JSON files would not survive FEAT-12.

Alternative considered: SQLite locally, Postgres in prod. Rejected: two engines, extra drift, user said they will not mid-test anyway.

### Fat schema, thin Feature

`Lead` includes nullable `serviceSlug`, `wantsConsultation`, `contactWeekPart`, `contactDayPart`, `stage` (default `new`), `openedAt` (null until a staff view in FEAT-12/15), `assignedUserId` (always null here). Child tables: `LeadLink`, `LeadPhone`, `LeadNote`, `LeadReminder`. `User` (`username`, `passwordHash`, `role`: `super_admin` | `crm` | `cms` | `both`). `Mailbox` (responsibility key + address) empty until FEAT-15.

FEAT-9 server action writes Lead + links + phones only. Other tables unused.

Alternative: migrate in each Feature. Rejected: user asked not to rebuild the FEAT-12 path.

### Server Action on `/contact`, not a public REST collection

Same-origin POST, Zod (or equivalent) validation, no CORS surface. Success returns enough for the popup then `router.refresh` / navigate to `/contact`.

### Budget as integer minor units + currency code

Store `budgetMinAmount` (integer, USD cents) and `budgetCurrency` (`usd`). FA tiers (100M / 200M / 500M toman) map onto the same columns later. Do not store a display string.

### Timeline enum in the database

`asap` | `one_to_three_months` | `three_to_six_months` | `six_plus_months` | `flexible`. Matches the select. Not free text.

### Links: one list, max 3

Company name is its own field. Website is the first link slot (optional URL). Plus adds slots 2 and 3. No fourth. Phones: plus, max 2, E.164-or-loose string (trim, min length 7). No library lock-in.

### Thank-you as in-page dialog

`<dialog>` or Soft UI `Surface` overlay. Confirm closes and leaves `/contact` with a cleared form. No `/thanks` route.

### CTA copy in content modules

English `label: "Tell us the work"`. Add `labelFa: "کار را بگویید"` beside it. Render English only. Footer today hardcodes the old string; move footer CTA through the same pattern or a tiny shared `cta` module so the label cannot drift.

### Super-admin seed is env-shaped, not a login

`ADMIN_BOOTSTRAP_USERNAME` / `ADMIN_BOOTSTRAP_PASSWORD` documented. FEAT-12 hashes and inserts. FEAT-9 does not create a session cookie.

### FEAT-27 seam

Validate known fields server-side. Do not add a vendor captcha or a honeypot field that FEAT-27 would have to delete. A later Feature may wrap the same action.

### FEAT-15 seam (do not send here)

`openedAt` null on insert. FEAT-15 simple text templates: notify on new lead; notify if still unopened after 1 day; no assignee. Outbound SMTP to the VPS mail machine. No workflow engine in this change.

## Risks / Trade-offs

- Fat schema before admin exists: unused tables in the first migration. Mitigation: no queries to them; later Features only add UI.
- Postgres required to run the form: local `.env` + Docker or hosted DB. Mitigation: document in README; site without DATABASE_URL can still render `/contact` but submit fails with a visible error.
- Unarchived `soft-ui-shell` also deltas `homepage-shell`. Mitigation: this change only touches CTA / out-of-scope requirements, not oval structure.
- `/technology` still a third stack page. Mitigation: out of scope; call out in the FEAT-9 summary for a later trim.

## Migration Plan

1. Add Prisma schema + first migration on this branch.
2. Ship form + CTA string swap.
3. No production deploy until EPC-3 stacked branches merge after Soft UI.

Rollback: drop the form UI and leave the migration; or revert the Feature branch.

## Open Questions

None that block this Feature. `/technology` keep-or-cut is a later change.
