## 1. Shared data and overview links

- [x] 1.1 Extend `serviceLines` with `slug`, `scope`, `process`, and `example` for all five lines
- [x] 1.2 Point `/services` overview cards at `/services/{slug}`; leave homepage teasers on `/services`

## 2. Detail route

- [x] 2.1 Add `/services/[slug]` with `generateStaticParams`, document title (Task Force + line label), serif H1
- [x] 2.2 Render scope, process, and at least one example; Steep mist 24px cards; “Start a Project” pill to `/contact`
- [x] 2.3 Return not-found for unknown slugs

## 3. Verify

- [x] 3.1 Confirm a known slug loads locally; overview cards land on it; `/services/not-a-line` is 404
