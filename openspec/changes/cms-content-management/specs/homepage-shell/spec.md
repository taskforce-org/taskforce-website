## MODIFIED Requirements

### Requirement: Site chrome

The site MUST show a top navigation oval and a footer on every public page that uses the site shell. The oval MUST keep a pill shape and MUST contain exactly three slots: the Task Force mark (links to `/`), the current page name, and a Contact us control on the right. The current page name on `/` MUST be `Home`. On `/blog/[slug]`, `/services/[slug]`, and `/work/[slug]` the name MUST be that entry’s title from Strapi. On `/blog` it MUST be `Blog`. On `/about` it MUST be `About`. The oval MUST NOT include Services, Work, Process, Studio, Careers, FAQ, or a Contact page link as separate items. The oval MUST NOT include a “Tell us the work” or “Start a Project” control. The footer MUST include Task Force identity and MUST NOT include a Technology link or a “Tell us the work” link.

#### Scenario: Nav labels present

- **WHEN** a visitor views the homepage
- **THEN** they see the Task Force mark, the page name Home, and Contact us, and they do not see Process, Careers, FAQ, or a Contact page item

#### Scenario: Footer present

- **WHEN** a visitor views the homepage
- **THEN** they see a footer that includes Task Force identity and no Technology link

#### Scenario: Contact us opens overlay

- **WHEN** a visitor activates Contact us
- **THEN** the short contact overlay opens and they do not go to `/contact`

### Requirement: Featured services strip

The homepage MUST show a services section with id `services`. Cards MUST come from published Strapi services, MUST be allowed to differ in size in one layout, and MUST navigate to `/services/[slug]` for that entry. Cards MUST NOT open a service modal.

#### Scenario: Five service teasers

- **WHEN** a visitor views the homepage and services are published
- **THEN** they see those services as cards that can differ in size

#### Scenario: Card goes to service page

- **WHEN** a visitor activates a service card for slug `example`
- **THEN** they reach `/services/example`

### Requirement: Selected work teasers

The homepage MUST show a portfolio section with id `work` as a vertical scroll of published Strapi work entries. Activating an entry MUST go to `/work/[slug]`. Cards MUST NOT be static hardcoded-only teasers once Strapi has published work.

#### Scenario: Work from Strapi

- **WHEN** a visitor views the homepage and work entries are published
- **THEN** they see those entries in a vertical scroll and can open `/work/{slug}`

### Requirement: Start a Project CTA

The homepage MUST NOT include an in-page “Tell us the work” or “See selected work” control in the hero. Contact MUST happen through the oval Contact us overlay.

#### Scenario: CTA present

- **WHEN** a visitor views the homepage hero
- **THEN** they do not see “Tell us the work” or “See selected work”

### Requirement: Home holds Process and Studio sections

The homepage MUST NOT include a Process section or a Studio section.

#### Scenario: Process and Studio on home

- **WHEN** a visitor views the homepage
- **THEN** they do not see sections with ids `process` or `studio`

### Requirement: Mobile navigation is complete

Below the desktop breakpoint the oval destinations that still exist (mark, page name, Contact us) MUST remain reachable. Hiding the oval without a replacement MUST NOT occur.

#### Scenario: Small viewport can reach nav items

- **WHEN** a visitor uses a viewport below the desktop nav breakpoint
- **THEN** they can activate Contact us

### Requirement: Steep visual system

The homepage MUST use the Apple-like visual system in `apple-visual-system` (white canvas on home). The Steep token set and Soft UI MUST NOT be required.

#### Scenario: Peach accent is rationed

- **WHEN** a visitor views the homepage
- **THEN** the page follows the Apple-like white canvas and does not require a Blush Peach card

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views content cards on the homepage
- **THEN** those cards use the shared Apple-like card language, not a mandated 24px Steep radius

### Requirement: Out of scope stays absent

The homepage shell MUST NOT include CRM admin, job board, bilingual/RTL UI, or 3D/WebGL scenes. CMS editing belongs in Strapi, not on the public homepage. Public contact is the short overlay only.

#### Scenario: No functional backend surfaces

- **WHEN** a visitor uses only the homepage
- **THEN** they cannot apply for a job or switch language, and they can send only the short contact overlay
