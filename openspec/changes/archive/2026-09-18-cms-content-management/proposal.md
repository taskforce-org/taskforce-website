## Why

Marketing copy, services, work, blog, and team still live in TypeScript modules. Soft UI and the FEAT-30 oval (Process, Careers, FAQ, Contact page, long inquiry, service modals) no longer match the IA the owner locked. FEAT-20 (`869f13b0j`, Project Website) is one change: self-hosted Strapi plus a new public IA and Apple-like visual system. FEAT-21 and FEAT-22 content types live in that Strapi. No extra Features.

## What Changes

- Run self-hosted Strapi next to the Next.js app. Editors publish services, work/case studies, blog posts, testimonials (including an on/off flag), and team members. Public pages read published entries by slug. No hardcoded service or work routes.
- **BREAKING** public IA. Keep `/`. Add `/about`, `/blog`, `/blog/[slug]`, `/services/[slug]`, `/work/[slug]`. Delete `/technology`, `/faq`, `/contact`, `/careers` as pages (old URLs redirect to `/`). Drop home `#process` and `#studio`. Drop careers everywhere.
- Home sections: hero (no “Tell us the work”, no “See selected work”) → services (unequal-size cards from Strapi; click goes to that service page) → portfolio (vertical scroll from Strapi; click goes to that work page) → blog (Strapi) → testimonials (vertical scroll; hidden when Strapi says off) → about-us shorts (name, speciality, outbound link).
- Oval stays a pill. Three slots: TF mark (`TF_base_logo.jpg`) | current page name | Contact us (right). Contact us opens the only overlay: name, phone, reason; success message; then close. Spam: honeypot + min time-on-form + IP rate limit. No vendor captcha. Long `/contact` inquiry form and service modals go away.
- **BREAKING** visual system. Soft UI / Steep / neumorphism are dead. Apple-like: large generated software/startup images, zoom on scroll/hover/click, one card and button language site-wide. Canvas: white on `/` and `/blog` (and post pages); black on `/services/[slug]` and `/work/[slug]`. `/about` follows home (white) unless a later pass says otherwise.
- Footer: identity only. No Technology link. No “Tell us the work”.

Out of this change: FEAT-23 3D (Hold, coworker); FEAT-24 EN/FA; FEAT-25…27 skipped; FEAT-28 is a design/test rule at the end, not a Feature; CRM admin / pipeline / mail / careers; consultation checkbox.

## Capabilities

### New Capabilities

- `cms-strapi`: Self-hosted Strapi, content types, Next.js fetch of published entries.
- `blog`: `/blog` index and `/blog/[slug]` posts from Strapi.
- `about-team`: Home member shorts and `/about` member stories/timelines from Strapi (scope = data on hand; layout not a finished art direction).
- `contact-popup`: Oval Contact us control, short lead (name, phone, reason), success state, honeypot + time-trap + rate limit.
- `apple-visual-system`: Apple-like UI, generated images, motion, white/black canvases, TF mark in the oval.

### Modified Capabilities

- `homepage-shell`: Oval three-slot; home section list; drop Process/Studio/hero CTAs; white canvas.
- `services-overview`: Strapi cards, unequal sizes, navigate to `/services/[slug]`.
- `service-detail-pages`: Serve Strapi service pages again (black canvas). `/services` may redirect to `/#services`.
- `contact-page`: No Contact page. Overlay owns contact.
- `faq-page`: No FAQ page.
- `technology-capabilities`: No Technology page.
- `careers-stub`: No Careers page or nav item.
- `studio-about`: No home Studio section. Team lives on `/about`.
- `process-page`: No home Process section.
- `project-inquiry`: Replace the long Contact form with the short popup payload.
- `service-inquiry-cta`: Remove shared service modals.

## Impact

- Next.js App Router routes and chrome (`site-nav`, footer, home). Remove inquiry form UI, service modal/picker, satellite pages.
- New Strapi app (Docker on the VPS later; local Docker now). Content types + seed. Next.js fetches the Strapi API.
- Copy `TF_base_logo.jpg` into `public/`. Generate software/startup images into the repo / Strapi media for empty entries.
- Prisma Lead write path stores name, phone, reason. Fat inquiry fields unused on this form.
- Stacked on `feat/FEAT-10-service-inquiry-cta` as `feat/FEAT-20-cms-content-management`.
