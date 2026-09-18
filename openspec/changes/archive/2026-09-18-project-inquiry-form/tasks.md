## 1. Data

- [x] 1.1 Add Prisma + PostgreSQL client deps and `prisma/schema.prisma` with Lead, LeadLink, LeadPhone, LeadNote, LeadReminder, User, Mailbox as in design.md (nullable later-Feature columns, stage default `new`, `openedAt` null, no assignee)
- [x] 1.2 Add first migration and `.env.example` with `DATABASE_URL` plus unused `ADMIN_BOOTSTRAP_USERNAME` / `ADMIN_BOOTSTRAP_PASSWORD`
- [x] 1.3 Add a server action (or Route Handler) that validates the FEAT-9 payload, writes Lead + links + phones, rejects >3 links, >2 phones, need >4000 chars, and does not set serviceSlug, wantsConsultation, or send mail

## 2. Contact form

- [x] 2.1 Build the Soft UI inquiry form on `/contact` with the specified fields, plus controls for links and phones, USD min budget text input, and timeline select
- [x] 2.2 Show a thank-you popup on success then return to `/contact` with a cleared form; surface validation errors without persisting
- [x] 2.3 Update `src/lib/contact.ts` so copy no longer says the form ships later; put form labels and thank-you strings in that document

## 3. CTA label

- [x] 3.1 Replace every public “Start a Project” string with “Tell us the work” (home, footer, FAQ, Process, Studio, Technology, Contact). Add `labelFa` «کار را بگویید» next to each CTA. Do not put this CTA in the oval
- [x] 3.2 Keep repeating filled pills the same size

## 4. Verify

- [x] 4.1 Confirm `/contact` shows the form, a valid submit creates a New unassigned lead, thank-you then `/contact`, over-limit lists fail, no consultation checkbox, no captcha, no login. Confirm no public “Start a Project” remains
