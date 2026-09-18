## 1. Routing

- [x] 1.1 Add `fa` | `en` helpers, middleware default `/fa`, unprefixed public paths to `/fa/…`
- [x] 1.2 Move public pages under `src/app/[locale]/` and locale-prefix in-site links
- [x] 1.3 Point retired URLs (`/contact`, `/faq`, `/technology`, `/careers`, `/process`, `/studio`) at Farsi home or `/fa/about`

## 2. Copy and chrome

- [x] 2.1 Split seed into complete FA and EN; `getCms(locale)` seed only (no Strapi)
- [x] 2.2 Oval language switch, locale page names, Contact overlay + action messages
- [x] 2.3 Set `lang`/`dir`, Vazirmatn on Farsi, logical CSS for RTL oval/about timeline

## 3. Verify

- [x] 3.1 Build; `/` → `/fa`; Farsi RTL home; switch to `/en` same page; overlay Farsi
