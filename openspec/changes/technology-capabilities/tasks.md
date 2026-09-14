## 1. Content document and discovery

- [x] 1.1 Add `src/lib/technology.ts` with typed `technologyContent`: documentTitle, description, heading, intro, exactly five dummy groups labeled Websites & E-commerce; Custom Systems & Dashboards; Desktop Software & Automation; Integrations, Redesign & Support; 3D & Interactive Experiences, each with ≥1 capability (title + body), callout, cta label “Start a Project” and href `/contact`. Dummy copy in the homepage studio voice; no lorem, SLAs, prices, version pins, named people, or logo wall
- [x] 1.2 Add `technologyLink` to `studioContent` with label “Technology & capabilities” and href `/technology`. Render it as a ghost button next to Start a Project on `/studio`. Do not retarget the primary CTA
- [x] 1.3 Point footer “Technology” at `/technology`. Leave top nav unchanged (no Technology item). Leave Process on `/process` and Studio on `/studio`

## 2. Technology page

- [x] 2.1 Add `/technology` that reads only `technologyContent` for metadata and body copy (no extra Technology strings in the page file)
- [x] 2.2 Render heading, intro, five group cards (mist 24px) with capability titles and bodies, peach callout, “Start a Project” pill from the document. Stay on Steep; at most one peach card

## 3. Verify

- [x] 3.1 Confirm `/technology` loads locally on port 3000, document title includes Task Force and Technology, footer Technology link lands on it, Studio “Technology & capabilities” lands on it, Studio “Start a Project” still goes to `/contact`, Technology CTA goes to `/contact`, top nav has no Technology item
