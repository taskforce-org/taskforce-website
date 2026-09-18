## 1. Shared modal

- [x] 1.1 Add a Soft UI service modal (scrollable body, Escape/backdrop/close, no close on pointer leave) that shows one line’s label, scope, process, and example from `serviceLines`
- [x] 1.2 Modal primary control labeled “Tell us the work” from `siteCta`. Home: `/contact?service=<slug>#inquire`. Contact: close, tag form, scroll to `#inquire`, `replaceState` the query
- [x] 1.3 Fine-pointer hover, click, tap, and keyboard activation open the modal. Triggers never go to `/services/[slug]`

## 2. Surfaces

- [x] 2.1 Wire homepage `#services` cards to the shared modal
- [x] 2.2 Add the five service names on `/contact` as the same modal triggers. Contact heading for that list in `contact.ts`. Not a second equal-size overview grid
- [x] 2.3 Read `searchParams.service` on `/contact`; allowlist known slugs; pass initial slug into `InquiryForm`; unknown slug ignored

## 3. Persist slug

- [x] 3.1 Show a service tag + hidden `serviceSlug` on the form when a known slug is applied; no service dropdown; no consultation checkbox
- [x] 3.2 `submitInquiry` allowlists the five slugs and writes `Lead.serviceSlug`; missing or unknown slug stores null

## 4. Verify

- [x] 4.1 Confirm home hover/tap opens the same modal as Contact names, CTA from home lands on `/contact?service=` with form in view, Contact CTA tags in place, valid submit stores the slug, unknown query does not tag, `/services/[slug]` still redirects
