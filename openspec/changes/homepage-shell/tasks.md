## 1. Scaffold

- [x] 1.1 Add Next.js App Router + TypeScript + Tailwind v4 into `products/Website` without overwriting `openspec/`, `design/`, `AGENTS.md`, or `.cursor/`
- [x] 1.2 Import Steep tokens from `design/steep/tailwind-theme.css` into app CSS; do not invent new colors
- [x] 1.3 Add Source Serif 4 (Signifier fallback) and Inter (Sohne fallback); map H1/H2 to serif weight 400
- [x] 1.4 Initialize shadcn/ui and restyle Button to Steep pills (ink fill, 9999px radius). No MUI/Ant
- [x] 1.5 Add `motion/react` for light motion only (no GSAP, no WebGL)

## 2. Chrome and routes

- [x] 2.1 Build transparent nav: Task Force identity, links Home / Services / Work / Process / Studio / Careers / FAQ / Contact, primary “Start a Project” pill to `/contact`
- [x] 2.2 Build footer with Task Force identity
- [x] 2.3 Add `/contact` stub page with no form
- [x] 2.4 Set document title to identify Task Force

## 3. Homepage sections

- [x] 3.1 Hero: Signifier-scale headline (Task Force identity + coding-quality value prop), Sohne-scale subhead, filled pill “Start a Project” plus ghost pill
- [x] 3.2 Featured services strip: five Neutral Cards (mist, 24px radius) with the spec labels and placeholder links
- [x] 3.3 Selected work: static Neutral Cards, no CMS
- [x] 3.4 One Accent Peach Card (sienna text) as the only chromatic callout

## 4. Verify

- [x] 4.1 README documents install + `npm run dev` (or equivalent) start command
- [x] 4.2 Browser-check `/` and `/contact`: no blocking errors, identity visible, no inquiry form, no 3D, no i18n switcher
