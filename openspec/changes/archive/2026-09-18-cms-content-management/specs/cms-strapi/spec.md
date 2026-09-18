## Purpose

Lets editors publish marketing content in self-hosted Strapi so the public Next.js site renders services, work, blog, testimonials, and team from published entries instead of hardcoded TypeScript routes.

## ADDED Requirements

### Requirement: Self-hosted Strapi

The product MUST run a self-hosted Strapi instance that editors can sign into. The Next.js site MUST read published content from that instance. The site MUST NOT depend on Strapi Cloud.

#### Scenario: Editor can publish

- **WHEN** an editor signs into the self-hosted Strapi and publishes an entry of a supported type
- **THEN** a later request to the matching public page shows that published content

#### Scenario: Unpublished stays off the site

- **WHEN** an entry exists in Strapi but is not published
- **THEN** the public site MUST NOT show that entry

### Requirement: Content types

Strapi MUST provide content types for: service, work (project / case study), blog post, testimonial, and team member. Service and work entries MUST have a slug used as the public path segment. Blog posts MUST have a slug used under `/blog`. Testimonials MUST include an on/off (or equivalent publish/visibility) control that hides the home testimonials section when off. Team members MUST include at least name, speciality, and an optional outbound contact URL, plus story and professional timeline fields used on `/about`.

#### Scenario: Service slug becomes a page

- **WHEN** a published service has slug `example`
- **THEN** `/services/example` renders that service’s content from Strapi

#### Scenario: Work slug becomes a page

- **WHEN** a published work entry has slug `example`
- **THEN** `/work/example` renders that work’s content from Strapi

#### Scenario: Testimonials off

- **WHEN** testimonials are switched off in Strapi
- **THEN** the homepage MUST NOT show the testimonials section
