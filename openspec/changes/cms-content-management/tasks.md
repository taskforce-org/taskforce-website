## 1. Strapi

- [x] 1.1 Add self-hosted Strapi to local Docker Compose with its own database, env sample (`STRAPI_URL`, `STRAPI_TOKEN`), and README start commands
- [x] 1.2 Create content types: service, work, blog post, testimonial (with on/off), team member (name, speciality, link, story, timeline) with slugs where needed
- [x] 1.3 Seed published entries and generated software/startup images so home, service, work, blog, and about are not empty

## 2. Chrome and retired routes

- [x] 2.1 Copy `TF_base_logo.jpg` into `public/` and rebuild the oval: mark | page name | Contact us (pill kept)
- [x] 2.2 Footer: identity only (no Technology, no Tell us the work)
- [x] 2.3 Redirect `/contact`, `/faq`, `/technology`, `/careers`, `/process` to `/`; `/studio` to `/about`; `/services` to `/#services`
- [x] 2.4 Remove Careers, FAQ, Contact page, Technology page, long inquiry form, service modal/picker from the public site

## 3. Pages and home

- [x] 3.1 Home (white): hero without those CTAs; services unequal cards from Strapi linking to `/services/[slug]`; portfolio vertical scroll linking to `/work/[slug]`; blog strip; testimonials vertical scroll honoring on/off; team shorts
- [x] 3.2 `/services/[slug]` (black) and `/work/[slug]` (black) from Strapi slugs
- [x] 3.3 `/blog` and `/blog/[slug]` (white) from Strapi
- [x] 3.4 `/about` (white) member story + timeline from Strapi data on hand

## 4. Contact overlay

- [x] 4.1 Oval Contact us opens overlay: name, phone, reason; success message; stay on the current page
- [x] 4.2 Persist lead (optional unused inquiry columns); honeypot + min time + IP rate limit; no vendor captcha

## 5. Visual system

- [x] 5.1 Remove Soft UI / Steep as the public system; one Apple-like card/button language; white vs black canvases as specified
- [x] 5.2 Large generated images with zoom on scroll, hover, or click

## 6. Verify

- [x] 6.1 Confirm IA, redirects, Strapi publish/unpublish, overlay persist, spam rejects, canvases, no modals, no careers
- [x] 6.2 FEAT-28 rule: mobile, keyboard, overlay, and image load on `/`, a service page, a work page, `/blog`, `/about`
