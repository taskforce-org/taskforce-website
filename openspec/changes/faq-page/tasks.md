## 1. Content document and nav

- [ ] 1.1 Add `src/lib/faq.ts` with typed `faqContent`: documentTitle, description, heading, intro, ≥5 dummy Q&A items covering pricing, timing, ownership, revisions, support, and starting a project, callout, cta label “Start a Project” and href `/contact`. Dummy copy in the homepage studio voice; no lorem, numeric prices, SLAs, calendar guarantees, or named people
- [ ] 1.2 Point nav “FAQ” at `/faq`. Leave Process on `/process`, Studio on `/studio`, footer Technology on `/technology`

## 2. FAQ page

- [ ] 2.1 Add `/faq` that reads only `faqContent` for metadata and body copy (no extra FAQ strings in the page file)
- [ ] 2.2 Render heading, intro, Q&A cards (mist 24px), peach callout, “Start a Project” pill from the document. Stay on Steep; at most one peach card

## 3. Verify

- [ ] 3.1 Confirm `/faq` loads locally on port 3000, document title includes Task Force and FAQ, FAQ nav lands on it, Process/Studio/footer Technology still land on `/process` `/studio` `/technology`, CTA goes to `/contact`
