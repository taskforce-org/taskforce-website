## 1. Chrome

- [x] 1.1 Rebuild `SiteNav` as a slim liquid-glass oval: Logo | Services · Work · Process · Studio | Careers · FAQ | Contact. Logo → `/`. No Home label. No Technology item. No header “Start a Project”
- [x] 1.2 Point Services / Work / Process / Studio at `/#services` `/#work` `/#process` `/#studio` (never path-relative `#work`). Careers → `/careers`. FAQ → `/faq`. Contact → `/contact`
- [x] 1.3 Selected state: pathname for `/careers` `/faq` `/contact`; Intersection Observer on home sections when path is `/`; animate the change; lock selection briefly after a nav click
- [x] 1.4 Mobile equivalent so every oval destination is reachable below the desktop breakpoint (no `hidden lg:flex` without a replacement)

## 2. Homepage sections and cards

- [x] 2.1 Fold Process and Studio onto `src/app/page.tsx` as `#process` and `#studio`, reading `processContent` and `studioContent`. Keep Technology & capabilities in the Studio section → `/technology`
- [x] 2.2 Service cards: drop “Service” eyebrow, equal size, glass language, “Learn more” quiet until hover motion. Do not link to `/services` or `/services/[slug]`
- [x] 2.3 Work section `#work`: same card language, larger/wider than service cards. Static teasers only
- [x] 2.4 One filled Button size for repeating “Start a Project” pills. Keep in-page hero CTA → `/contact`. Keep ghost for secondary actions. At most one peach surface on `/`

## 3. Redirects and careers stub

- [x] 3.1 Replace `/services` and `/services/[slug]` pages with `redirect("/#services")` (known and unknown slugs)
- [x] 3.2 Replace `/process` with `redirect("/#process")` and `/studio` with `redirect("/#studio")`
- [x] 3.3 Add `src/lib/careers.ts` and `/careers` stub (document title includes Task Force and Careers, no jobs, no apply, Steep)

## 4. Verify

- [x] 4.1 Locally on port 3000: `/` shows the four sections; `/faq` `/contact` `/technology` still 200; `/careers` 200 with no jobs; `/services` `/services/websites-ecommerce` `/process` `/studio` land on the matching home hash; Work from `/faq` goes to `/#work` not `/faq#work`; no header CTA; no language switcher, CMS admin, blog strip, team profiles, or inquiry form
- [x] 4.2 Confirm FEAT-30 (`869f1rz6g`) and change `homepage-ia` are cited; FEAT-1…8 remain Released
