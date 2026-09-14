## MODIFIED Requirements

### Requirement: Site chrome

The site MUST show a top navigation bar and a footer on the homepage. Navigation MUST include Home plus items: Services, Work, Process, Studio, Careers, FAQ, and Contact. Home MUST link to the site root. Services MUST link to `/services`. Studio MUST link to `/studio`. Remaining non-Home items MAY link to `#` or to stub routes that do not 404.

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
