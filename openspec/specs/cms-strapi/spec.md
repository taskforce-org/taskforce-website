# cms-strapi Specification

## Purpose

Lets editors publish marketing content in self-hosted Strapi so the public Next.js site can render services, work, blog, testimonials, and team from published entries. Until the site is online, the public site MAY render bilingual seed content instead of calling Strapi.

## Requirements

### Requirement: Self-hosted Strapi

The product MUST include a self-hosted Strapi instance editors can sign into. The Next.js site MUST be able to read published content from that instance. The site MUST NOT depend on Strapi Cloud. When `STRAPI_URL` is empty, the site MUST render seed content so pages are not empty.

#### Scenario: Seed when Strapi is off

- **WHEN** `STRAPI_URL` is empty
- **THEN** public pages still render services, work, blog, testimonials, and team from seed

### Requirement: Content types

Strapi MUST provide types for service, work, blog post, testimonial, and team member, with slugs on service, work, and post. Testimonials MUST include an on/off control. Team members MUST include name, speciality, optional link, story, and timeline.

#### Scenario: Service slug becomes a page

- **WHEN** a published (or seed) service has slug `example`
- **THEN** `/[locale]/services/example` renders that service
