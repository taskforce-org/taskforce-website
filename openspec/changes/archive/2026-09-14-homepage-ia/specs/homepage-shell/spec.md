## MODIFIED Requirements

### Requirement: Site chrome

The site MUST show a top navigation bar and a footer on every public page that uses the site shell. Navigation MUST be a single slim liquid-glass oval whose items are grouped as: Logo, then Services · Work · Process · Studio, then Careers · FAQ, then Contact. Logo MUST link to the site root. The oval MUST NOT include a Home label. The oval MUST NOT include a Technology item. The oval MUST NOT include a “Start a Project” control. Services MUST link to `/#services`. Work MUST link to `/#work`. Process MUST link to `/#process`. Studio MUST link to `/#studio`. Careers MUST link to `/careers`. FAQ MUST link to `/faq`. Contact MUST link to `/contact`. The footer MUST include Task Force identity and a Technology link to `/technology`.

The current destination MUST look selected. Changing the selected item MUST be animated. On the homepage, the selected item among Services, Work, Process, and Studio MUST follow which of those sections is in view. On `/careers`, `/faq`, and `/contact`, that page’s item MUST look selected.

#### Scenario: Nav labels present

- **WHEN** a visitor views the homepage
- **THEN** they see nav items for Services, Work, Process, Studio, Careers, FAQ, and Contact, they see the Task Force logo, and they do not see a Home label or a header “Start a Project” control

#### Scenario: Footer present

- **WHEN** a visitor views the homepage
- **THEN** they see a footer that includes Task Force identity

#### Scenario: Services nav goes to home services section

- **WHEN** a visitor activates the Services nav item
- **THEN** they reach `/#services`

#### Scenario: Work nav goes to home work section

- **WHEN** a visitor activates the Work nav item from `/process` or any non-home path
- **THEN** they reach `/#work` and they do not remain on that path with only a `#work` fragment

#### Scenario: Studio nav goes to home studio section

- **WHEN** a visitor activates the Studio nav item
- **THEN** they reach `/#studio`

#### Scenario: Process nav goes to home process section

- **WHEN** a visitor activates the Process nav item
- **THEN** they reach `/#process`

#### Scenario: FAQ nav goes to FAQ page

- **WHEN** a visitor activates the FAQ nav item
- **THEN** they reach `/faq`

#### Scenario: Contact nav goes to contact page

- **WHEN** a visitor activates the Contact nav item
- **THEN** they reach `/contact`

#### Scenario: Careers nav goes to careers stub

- **WHEN** a visitor activates the Careers nav item
- **THEN** they reach `/careers`

#### Scenario: Footer technology link goes to technology page

- **WHEN** a visitor activates the footer Technology link
- **THEN** they reach `/technology`

#### Scenario: Satellite page looks selected

- **WHEN** a visitor views `/faq`
- **THEN** the FAQ nav item looks selected and Services, Work, Process, and Studio do not

### Requirement: Featured services strip

The homepage MUST show a featured services section with id `services` and these five labels: Websites & E-commerce; Custom Systems & Dashboards; Desktop Software & Automation; Integrations, Redesign & Support; 3D & Interactive Experiences. Each card MUST include short supporting copy from the shared service content document. Cards MUST be equal in size. Cards MUST NOT show a “Service” eyebrow. Each card MUST present a “Learn more” control that stays visually quiet until hover, when it MUST become more visible with motion. The strip MUST NOT be a full service detail page and MUST NOT navigate to `/services` or `/services/[slug]`.

#### Scenario: Five service teasers

- **WHEN** a visitor views the homepage
- **THEN** they see those five service labels as equal-size cards without a “Service” eyebrow

#### Scenario: Learn more on hover

- **WHEN** a visitor hovers a service card
- **THEN** they see the “Learn more” control become more visible with motion

### Requirement: Selected work teasers

The homepage MUST show a selected-work section with id `work` and static placeholder cards. Cards MUST use the same visual language as the service cards at a larger width. Cards MUST NOT require a CMS or live project data.

#### Scenario: Static work cards

- **WHEN** a visitor views the homepage
- **THEN** they see static work teaser cards that render without fetching a CMS and that are larger than the service cards

### Requirement: Start a Project CTA

The homepage MUST include an in-page primary call-to-action labeled “Start a Project”. The CTA MUST navigate to `/contact`. `/contact` MUST load as the Contact / Start a Project page and MUST NOT include a project-inquiry form. Repeating filled “Start a Project” pills on the site MUST share one size. The header MUST NOT contain this CTA.

#### Scenario: CTA present

- **WHEN** a visitor views the homepage
- **THEN** they see an in-page primary control labeled “Start a Project” and they do not see that control in the header

#### Scenario: Contact page has no form

- **WHEN** a visitor follows the CTA to `/contact`
- **THEN** the page loads without a project-inquiry form

#### Scenario: Filled pills share one size

- **WHEN** a visitor sees more than one filled “Start a Project” pill on the site
- **THEN** those pills use the same size

## ADDED Requirements

### Requirement: Home holds Process and Studio sections

The homepage MUST include a Process section with id `process` and a Studio section with id `studio`. Process copy MUST come from the Process content document. Studio copy MUST come from the Studio content document, including the Technology & capabilities link to `/technology`.

#### Scenario: Process and Studio on home

- **WHEN** a visitor views the homepage
- **THEN** they see Process and Studio sections with those ids and copy from the matching content documents

### Requirement: Mobile navigation is complete

Below the desktop breakpoint the site MUST still expose every oval destination (Services, Work, Process, Studio, Careers, FAQ, Contact). Hiding the desktop oval without a replacement MUST NOT occur.

#### Scenario: Small viewport can reach nav items

- **WHEN** a visitor uses a viewport below the desktop nav breakpoint
- **THEN** they can activate Services, Work, Process, Studio, Careers, FAQ, and Contact
