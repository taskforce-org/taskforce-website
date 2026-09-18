# homepage-shell Specification

## Purpose

Public homepage that identifies Task Force, lists services, work, blog, testimonials, and team shorts, and uses a three-slot oval. Locale-prefixed URLs; Farsi is the default.

## Requirements

### Requirement: Homepage is reachable locally

The Website product MUST serve a homepage (at `/fa` after `/` redirects) that loads without blocking runtime errors. The repository MUST document a start command.

#### Scenario: Homepage loads

- **WHEN** a developer follows the documented start command and opens the site root
- **THEN** they reach the Farsi homepage without blocking runtime errors

### Requirement: Task Force identity

The homepage MUST present Task Force as the product identity in the document title and in a visible heading.

#### Scenario: Identity in title and heading

- **WHEN** a visitor opens `/fa`
- **THEN** the page title and a visible heading identify the site as Task Force

### Requirement: Site chrome

The site MUST show a top navigation oval and a footer on every public page that uses the site shell. The oval MUST keep a pill shape and MUST contain exactly three slots in left-to-right order regardless of document `dir`: the Task Force mark, the current page name, and Contact. Labels MAY translate. The oval MUST NOT include a language switch. The footer MUST include Task Force identity and MUST NOT include a Technology link or “Tell us the work”.

#### Scenario: Nav labels present

- **WHEN** a visitor views the Farsi homepage
- **THEN** they see the mark, a translated Home page name, and Contact, and they do not see Process, Careers, FAQ, or a language control in the oval

#### Scenario: Footer present

- **WHEN** a visitor views the homepage
- **THEN** they see a footer that includes Task Force identity and no Technology link

#### Scenario: Contact us opens overlay

- **WHEN** a visitor activates Contact
- **THEN** the short contact overlay opens and they do not go to `/contact`

### Requirement: Featured services strip

The homepage MUST show a services section with id `services`. Cards MUST come from the locale seed (or published Strapi when wired). Cards MAY differ in size. Activating a card MUST go to `/[locale]/services/[slug]`. Cards MUST NOT open a modal.

#### Scenario: Card goes to service page

- **WHEN** a visitor on `/fa` activates a service card for slug `example`
- **THEN** they reach `/fa/services/example`

### Requirement: Selected work teasers

The homepage MUST show a portfolio section with id `work` as a vertical scroll. Activating an entry MUST go to `/[locale]/work/[slug]`.

#### Scenario: Work list

- **WHEN** a visitor views the homepage work section
- **THEN** they can open a work page under the current locale

### Requirement: Hero CTAs

The homepage MUST NOT include “Tell us the work” or “See selected work” in the hero.

#### Scenario: CTA absent

- **WHEN** a visitor views the homepage hero
- **THEN** they do not see those two controls

### Requirement: Home holds Process and Studio sections

The homepage MUST NOT include Process or Studio sections.

#### Scenario: Process and Studio off home

- **WHEN** a visitor views the homepage
- **THEN** they do not see sections with ids `process` or `studio`

### Requirement: Out of scope stays absent

The homepage shell MUST NOT include CRM admin, job board, or 3D/WebGL scenes.

#### Scenario: No those surfaces

- **WHEN** a visitor uses only the homepage
- **THEN** they cannot apply for a job or open a CRM
