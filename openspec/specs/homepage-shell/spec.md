# homepage-shell Specification

## Purpose

Public homepage shell that identifies Task Force, presents placeholder services and work, and offers a Start a Project path so the site can run locally before later Features add real pages and forms.

## Requirements

### Requirement: Homepage is reachable locally

The Website product MUST serve a homepage at the site root that loads without blocking runtime errors. The repository MUST document a start command that a developer can follow to run the site locally.

#### Scenario: Homepage loads

- **WHEN** a developer follows the documented start command and opens the site root
- **THEN** the homepage renders without blocking runtime errors

#### Scenario: Start command is documented

- **WHEN** a developer opens the project README
- **THEN** they find the commands required to install dependencies and start the local server

### Requirement: Task Force identity

The homepage MUST present Task Force as the product identity in the document title and in a visible heading.

#### Scenario: Identity in title and heading

- **WHEN** a visitor opens the homepage
- **THEN** the page title and a visible heading identify the site as Task Force

### Requirement: Site chrome

The site MUST show a top navigation bar and a footer on the homepage. Navigation MUST include Home plus placeholder items: Services, Work, Process, Studio, Careers, FAQ, and Contact. Non-Home items MAY link to `#` or to stub routes that do not 404. Home MUST link to the site root.

#### Scenario: Nav labels present

- **WHEN** a visitor views the homepage
- **THEN** they see nav items for Home, Services, Work, Process, Studio, Careers, FAQ, and Contact

#### Scenario: Footer present

- **WHEN** a visitor views the homepage
- **THEN** they see a footer that includes Task Force identity

### Requirement: Hero and value proposition

The homepage MUST include a hero with a value proposition that communicates studio coding quality and team experience.

#### Scenario: Hero visible

- **WHEN** a visitor opens the homepage
- **THEN** they see a hero headline and supporting copy stating the studio value proposition

### Requirement: Featured services strip

The homepage MUST show a featured services strip with five placeholder service labels: Websites & E-commerce; Custom Systems & Dashboards; Desktop Software & Automation; Integrations, Redesign & Support; 3D & Interactive Experiences. Links MUST be placeholders (`#` or `/services` stubs). The strip MUST NOT be a full service detail page.

#### Scenario: Five service teasers

- **WHEN** a visitor views the homepage
- **THEN** they see those five service labels as teasers, not as full service pages

### Requirement: Selected work teasers

The homepage MUST show a selected-work section with static placeholder cards. Cards MUST NOT require a CMS or live project data.

#### Scenario: Static work cards

- **WHEN** a visitor views the homepage
- **THEN** they see static work teaser cards that render without fetching a CMS

### Requirement: Start a Project CTA

The homepage MUST include a primary call-to-action labeled “Start a Project”. The CTA MUST navigate to `#` or to `/contact`. If `/contact` exists, it MUST be a stub page with no inquiry form.

#### Scenario: CTA present

- **WHEN** a visitor views the homepage
- **THEN** they see a primary control labeled “Start a Project”

#### Scenario: Contact stub has no form

- **WHEN** a visitor follows the CTA to `/contact`
- **THEN** the page loads without a project-inquiry form

### Requirement: Steep visual system

The homepage MUST use the Steep token set: Paper White canvas, Ink Black text, Blush Peach as the only chromatic accent (at most one peach card), serif display/headline type, and 24px radius on content cards. The system MUST NOT introduce a new color palette. Signifier MAY be substituted with the listed fallbacks (GT Sectra, Tiempos Headline, Source Serif 4, or Georgia).

#### Scenario: Peach accent is rationed

- **WHEN** a visitor views the homepage
- **THEN** at most one peach accent card is present and remaining surfaces stay achromatic (paper, mist, fog, ink)

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views content cards on the homepage
- **THEN** those cards use a 24px corner radius

### Requirement: Out of scope stays absent

The homepage shell MUST NOT include CRM, job board, CMS editing, bilingual/RTL UI, real forms, admin, live portfolio data, or 3D/WebGL scenes.

#### Scenario: No functional backend surfaces

- **WHEN** a visitor uses only the homepage and contact stub
- **THEN** they cannot submit an inquiry, apply for a job, or switch language
