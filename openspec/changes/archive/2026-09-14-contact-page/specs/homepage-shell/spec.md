## MODIFIED Requirements

### Requirement: Site chrome

The site MUST show a top navigation bar and a footer on the homepage. Navigation MUST include Home plus items: Services, Work, Process, Studio, Careers, FAQ, and Contact. Home MUST link to the site root. Services MUST link to `/services`. Studio MUST link to `/studio`. Process MUST link to `/process`. FAQ MUST link to `/faq`. Contact MUST link to `/contact`. Remaining non-Home items MAY link to `#` or to stub routes that do not 404. Navigation MUST NOT include a Technology item. The footer MUST include a Technology link to `/technology`.

#### Scenario: Nav labels present

- **WHEN** a visitor views the homepage
- **THEN** they see nav items for Home, Services, Work, Process, Studio, Careers, FAQ, and Contact

#### Scenario: Footer present

- **WHEN** a visitor views the homepage
- **THEN** they see a footer that includes Task Force identity

#### Scenario: Services nav goes to overview

- **WHEN** a visitor activates the Services nav item
- **THEN** they reach `/services`

#### Scenario: Studio nav goes to studio page

- **WHEN** a visitor activates the Studio nav item
- **THEN** they reach `/studio`

#### Scenario: Process nav goes to process page

- **WHEN** a visitor activates the Process nav item
- **THEN** they reach `/process`

#### Scenario: FAQ nav goes to FAQ page

- **WHEN** a visitor activates the FAQ nav item
- **THEN** they reach `/faq`

#### Scenario: Contact nav goes to contact page

- **WHEN** a visitor activates the Contact nav item
- **THEN** they reach `/contact`

#### Scenario: Footer technology link goes to technology page

- **WHEN** a visitor activates the footer Technology link
- **THEN** they reach `/technology`

### Requirement: Start a Project CTA

The homepage MUST include a primary call-to-action labeled “Start a Project”. The CTA MUST navigate to `/contact`. `/contact` MUST load as the Contact / Start a Project page and MUST NOT include a project-inquiry form.

#### Scenario: CTA present

- **WHEN** a visitor views the homepage
- **THEN** they see a primary control labeled “Start a Project”

#### Scenario: Contact page has no form

- **WHEN** a visitor follows the CTA to `/contact`
- **THEN** the page loads without a project-inquiry form
