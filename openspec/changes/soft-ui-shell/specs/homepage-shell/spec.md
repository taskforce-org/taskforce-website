## ADDED Requirements

### Requirement: Home sections are large placeholder bands

The homepage MUST present the hero and the Services, Work, Process, and Studio blocks as large, full-bleed section bands sized for later background art and scroll motion. Each hashed section (`services`, `work`, `process`, `studio`) MUST include a visible dotted-cloud placeholder so it is obvious that the band will be filled later. The placeholders MUST NOT be live 3D, WebGL, or production scroll-animation scenes.

#### Scenario: Hashed sections look large and reserved

- **WHEN** a visitor views the homepage
- **THEN** they see Services, Work, Process, and Studio as large section bands and they see a dotted-cloud placeholder in each of those bands

#### Scenario: Placeholders are not production motion

- **WHEN** a visitor views those dotted-cloud placeholders
- **THEN** they do not see a WebGL or 3D scene

### Requirement: Satellite pages link to home sections in-page

Every public satellite page that uses the site shell (`/careers`, `/faq`, `/contact`, `/technology`) MUST show dedicated in-page controls for Services, Work, Process, and Studio. Those controls MUST go to `/#services`, `/#work`, `/#process`, and `/#studio`. Those controls MUST NOT appear inside the oval.

#### Scenario: FAQ can reach Services section

- **WHEN** a visitor on `/faq` activates the in-page Services control
- **THEN** they reach `/#services`

#### Scenario: Oval on FAQ stays satellite items

- **WHEN** a visitor views `/faq`
- **THEN** the oval does not add Services, Work, Process, or Studio as oval items

## MODIFIED Requirements

### Requirement: Site chrome

The site MUST show a top navigation bar and a footer on every public page that uses the site shell. Navigation MUST be a single slim centered Soft UI oval.

On `/` the oval items MUST be grouped as: Logo, then Services · Work · Process · Studio, then a small down-pointing control that opens Careers, FAQ, and Contact. On `/careers`, `/faq`, `/contact`, and `/technology` the oval items MUST be grouped as: Logo, then Careers · FAQ · Contact. The current satellite item MUST look selected. The oval MUST NOT add home-section items on those pages.

Logo MUST link to `/` and MUST land the visitor at the homepage beginning (hero). The oval MUST NOT include a Home label. The oval MUST NOT include a Technology item. The oval MUST NOT include a “Start a Project” control. Services MUST link to `/#services`. Work MUST link to `/#work`. Process MUST link to `/#process`. Studio MUST link to `/#studio`. Careers MUST link to `/careers`. FAQ MUST link to `/faq`. Contact MUST link to `/contact`. The footer MUST include Task Force identity and a Technology link to `/technology`.

The current destination MUST look selected. Changing the selected item MUST be animated. On the homepage, the selected item among Services, Work, Process, and Studio MUST follow which of those sections is in view. On `/careers`, `/faq`, and `/contact`, that page’s item MUST look selected.

#### Scenario: Nav labels present

- **WHEN** a visitor views the homepage
- **THEN** they see nav items for Services, Work, Process, and Studio, they see the Task Force logo, they see a down-pointing control for Careers, FAQ, and Contact, and they do not see a Home label or a header “Start a Project” control

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
- **THEN** the FAQ nav item looks selected and Services, Work, Process, and Studio do not appear as oval items

#### Scenario: Logo goes to homepage start

- **WHEN** a visitor activates the Task Force logo from `/faq`
- **THEN** they reach `/` at the hero beginning

#### Scenario: Dropdown lists satellite pages

- **WHEN** a visitor on `/` opens the oval down-pointing control
- **THEN** they see Careers, FAQ, and Contact as separate destinations

### Requirement: Hero and value proposition

The homepage MUST include a hero at the start of `/` with a value proposition that communicates studio coding quality and team experience. The hero MUST be a large section band consistent with other home sections.

#### Scenario: Hero visible

- **WHEN** a visitor opens the homepage
- **THEN** they see a hero headline and supporting copy stating the studio value proposition in a large section band

### Requirement: Mobile navigation is complete

Below the desktop breakpoint the site MUST still expose every oval destination (Services, Work, Process, Studio, Careers, FAQ, Contact). Hiding the desktop oval without a replacement MUST NOT occur. The dropdown destinations MUST remain reachable.

#### Scenario: Small viewport can reach nav items

- **WHEN** a visitor uses a viewport below the desktop nav breakpoint
- **THEN** they can activate Services, Work, Process, Studio, Careers, FAQ, and Contact

### Requirement: Out of scope stays absent

The homepage shell MUST NOT include CRM, job board, CMS editing, bilingual/RTL UI, real forms, admin, live portfolio data, or production 3D/WebGL scenes. Dotted-cloud placeholders for later section backgrounds are allowed.

#### Scenario: No functional backend surfaces

- **WHEN** a visitor uses only the homepage and contact stub
- **THEN** they cannot submit an inquiry, apply for a job, or switch language

## REMOVED Requirements

### Requirement: Steep visual system

**Reason:** Steep (paper/ink/peach/glass) is retired. Soft UI + Coolors is the live system.
**Migration:** Follow `soft-ui` and `design/soft-ui/`. Archived files live at `design/archive/steep/`.
