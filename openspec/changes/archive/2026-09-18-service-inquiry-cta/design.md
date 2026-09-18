## Context

See `proposal.md` for why. Stack: Next.js 16 App Router, Soft UI, Prisma Lead already has nullable `serviceSlug`. Homepage `#services` cards show label + blurb + “Learn more” and do not navigate. `/contact` has `InquiryForm` + `submitInquiry`; that action does not read a service field. `/services` and `/services/[slug]` still redirect to `/#services`. Behavior: `specs/service-inquiry-cta/spec.md` plus listed deltas. Stacked on FEAT-9.

## Goals / Non-Goals

**Goals:**

- One modal component, two mounts (home cards, Contact names).
- Allowlisted slugs only; persist on the existing Lead column.
- Soft UI overlay consistent with the inquiry thank-you dialog.

**Non-Goals:**

- Prisma schema edits.
- Restoring `/services/[slug]` pages.
- Image/video portfolio CMS.
- Consultation tag (FEAT-11).
- Hover close-on-leave.

## Decisions

### Shared client modal, not restored detail routes

One client component owns open state, scroll lock, Escape, and backdrop. Home and Contact pass the same `serviceLines` record. Deep-link stays `/contact?service=<slug>#inquire`.

Alternative: bring back `/services/[slug]`. Rejected: FEAT-30 retired those pages; user asked same-page modal.

### Hover opens, dismiss closes

Fine pointer: `pointerenter` on the trigger opens. Coarse pointer: tap opens. Click and keyboard activation also open. Close: explicit control, backdrop click, Escape. Do not close on `pointerleave` — visitor must scroll and hit the CTA.

Alternative: CSS `:hover` popover that vanishes on leave. Rejected: cannot scroll or click CTA reliably.

### Query param is the cross-page contract

Home CTA is a `Link` to `/contact?service=<slug>#inquire`. Contact page reads `searchParams.service`, allowlists against `serviceLines`, passes initial slug into `InquiryForm`. Same-page modal CTA updates form state + `history.replaceState` so the URL matches, then `scrollIntoView` on `#inquire`.

Unknown slug: ignore. No flash error.

### Hidden input plus visible tag, not a select

`input type="hidden" name="serviceSlug"` plus a Soft UI tag of the label. `submitInquiry` allowlists the five slugs and sets `Lead.serviceSlug`. No dropdown, so FEAT-11 consultation tag can sit beside it later.

Alternative: subject prefilled with the line name. Rejected: user asked tag the record, not rewrite subject.

### Portfolio from existing copy

Modal sections: label, scope, process, example (`serviceLines`). Optional: homepage `selectedWork` items whose `kind` maps to the slug. No new assets.

### `/services/[slug]` stays a redirect

Do not auto-open the modal from the old URL in this Feature. Redirect to `/#services` is enough.

## Risks / Trade-offs

- Hover-open on dense grids: accidental opens. Mitigation: modal stays put; one click-away dismisses.
- `replaceState` on Contact CTA vs Next.js App Router cache. Mitigation: form state is client; query is only for share/reload.
- FEAT-9 thank-you then `window.location.assign("/contact")` drops `?service=`. Acceptable after persist.

## Migration Plan

1. Modal + home/Contact wiring on this branch.
2. Form hidden field + server allowlist write.
3. No production deploy until EPC-3 stacked branches merge.

Rollback: remove modal mounts; leave `serviceSlug` unused as in FEAT-9.

## Open Questions

None that block this Feature.
