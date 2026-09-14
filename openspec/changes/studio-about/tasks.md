## 1. Content document and nav

- [ ] 1.1 Add `src/lib/studio.ts` with typed `studioContent`: documentTitle, description, heading, intro, whoWeAre, howWeWork, ≥2 dummy principles, callout, cta label “Start a Project” and href `/contact`. Dummy copy in the homepage studio voice; no lorem, people names, addresses, or registration IDs
- [ ] 1.2 Point nav “Studio” at `/studio`

## 2. Studio page

- [ ] 2.1 Add `/studio` that reads only `studioContent` for metadata and body copy (no extra Studio strings in the page file)
- [ ] 2.2 Render heading, intro, who-we-are, how-we-work, principle cards (mist 24px), peach callout, “Start a Project” pill from the document. Stay on Steep; at most one peach card

## 3. Verify

- [ ] 3.1 Confirm `/studio` loads locally on port 3000, document title includes Task Force and Studio, Studio nav lands on it, CTA goes to `/contact`
