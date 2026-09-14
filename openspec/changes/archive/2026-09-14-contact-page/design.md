## Context

See `proposal.md` for why. `/contact` is a hardcoded stub (no content module, copy in `page.tsx`). Contact nav already goes to `/contact`. FEAT-7 is applied on this branch: `/faq` exists, FAQ nav is `/faq`. The inquiry form is FEAT-9. CMS (FEAT-20) is later. Behavior contract is `specs/contact-page/spec.md` plus the `homepage-shell` delta.

## Goals / Non-Goals

**Goals:**

- Replace the stub with one static App Router page at `/contact` that maps a typed content document to Steep sections.
- Dummy availability + estimates copy that matches Task Force studio positioning.
- Document fields are the CMS schema.
- Keep the no-form guarantee until FEAT-9.

**Non-Goals:**

- Inquiry form, mailto handler, or CRM (FEAT-9 / EPC-3).
- CMS admin, MDX, fetch, or preview (FEAT-20).
- Numeric prices, SLAs, calendar guarantees, phone numbers, street addresses, named people.
- Changing FAQ, Process, Studio, or footer Technology targets. Adding Technology to top nav.

## Decisions

### Stay on `/contact`

Nav label is already Contact. CTA already goes there. Alternative: `/start` plus a redirect. Rejected — extra alias waits for SEO (FEAT-25).

### Content document in `src/lib/contact.ts`

Same pattern as `faqContent`. Page imports `contactContent` and renders fields. Do not leave visitor-visible Contact copy in `page.tsx`.

Document shape:

- `documentTitle`, `description`
- `heading`, `intro`
- `availability: { heading, body }`
- `estimates: { heading, body }`
- `nextStep: { heading, body }`
- `callout: { heading, body }` (peach card; at most one)
- `cta: { label, href }` — `label` is “Start a Project”, `href` is `/contact` (same page; keeps the document shape aligned with other marketing pages)

Dummy copy stays in a marketing register. No invented phone, street, email domain, prices, or day counts.

### Page is presentational

`src/app/contact/page.tsx` MUST NOT introduce visitor-visible Contact copy outside the document.

### Steep composition

Serif H1 from `heading`, intro, mist 24px cards for availability / estimates / next step, filled pill CTA, optional one peach callout. No new palette.

### No form

Do not add `<form>`, inputs, or a submit control. FEAT-9 owns that.

### Stacked homepage-shell delta

This branch includes archived FEAT-4 through FEAT-6 and applied FEAT-7. The Site chrome delta copies FAQ `/faq` plus existing Services / Studio / Process / footer Technology rules, and states Contact `/contact`. The Start a Project CTA requirement drops “stub page” language and keeps no-form.

## Risks / Trade-offs

- **Looks unfinished without a form:** Visitors cannot submit. Mitigation: next-step copy says a form comes later; page still explains availability and estimates.
- **Stacked PR:** FEAT-4 through FEAT-7 are unmerged. Mitigation: this branch starts at `feat/FEAT-7-faq`; rebase onto `develop` after those merge.

## Migration Plan

None for data. After apply, `/contact` is a content page, still without a form. Rollback is revert the Feature branch.

## Open Questions

None that block specs or tasks. Exact dummy sentences are chosen at apply time.
