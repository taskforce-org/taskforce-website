## 1. Content document and nav

- [ ] 1.1 Add `src/lib/process.ts` with typed `processContent`: documentTitle, description, heading, intro, ≥3 dummy ordered steps, callout, cta label “Start a Project” and href `/contact`. Dummy copy in the homepage studio voice; no lorem, SLAs, prices, or named people
- [ ] 1.2 Point nav “Process” at `/process`. Leave Studio on `/studio`

## 2. Process page

- [ ] 2.1 Add `/process` that reads only `processContent` for metadata and body copy (no extra Process strings in the page file)
- [ ] 2.2 Render heading, intro, ordered step cards (mist 24px), peach callout, “Start a Project” pill from the document. Stay on Steep; at most one peach card

## 3. Verify

- [ ] 3.1 Confirm `/process` loads locally on port 3000, document title includes Task Force and Process, Process nav lands on it, Studio nav still lands on `/studio`, CTA goes to `/contact`
