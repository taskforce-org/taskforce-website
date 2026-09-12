## MODIFIED Requirements

### Requirement: Site chrome

The site MUST show a top navigation bar and a footer on the homepage. Navigation MUST include Home plus items: Services, Work, Process, Studio, Careers, FAQ, and Contact. Home MUST link to the site root. Services MUST link to `/services`. Remaining non-Home items MAY link to `#` or to stub routes that do not 404.

#### Scenario: Nav labels present

- **WHEN** a visitor views the homepage
- **THEN** they see nav items for Home, Services, Work, Process, Studio, Careers, FAQ, and Contact

#### Scenario: Footer present

- **WHEN** a visitor views the homepage
- **THEN** they see a footer that includes Task Force identity

#### Scenario: Services nav goes to overview

- **WHEN** a visitor activates the Services nav item
- **THEN** they reach `/services`

### Requirement: Featured services strip

The homepage MUST show a featured services strip with five placeholder service labels: Websites & E-commerce; Custom Systems & Dashboards; Desktop Software & Automation; Integrations, Redesign & Support; 3D & Interactive Experiences. Each teaser’s primary link MUST go to `/services`. The strip MUST NOT be a full service detail page.

#### Scenario: Five service teasers

- **WHEN** a visitor views the homepage
- **THEN** they see those five service labels as teasers, not as full service pages

#### Scenario: Teasers go to overview

- **WHEN** a visitor activates a homepage service teaser
- **THEN** they reach `/services`
