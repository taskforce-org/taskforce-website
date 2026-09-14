## MODIFIED Requirements

### Requirement: Services overview is reachable

The site MUST present the five-line services overview as the homepage section with id `services`. A request to `/services` MUST NOT render a standalone overview page. It MUST send the visitor to `/#services`.

#### Scenario: Overview loads on home

- **WHEN** a visitor opens the homepage and scrolls to the services section
- **THEN** they see the five service lines and the document title still identifies Task Force

#### Scenario: Old overview URL redirects

- **WHEN** a visitor opens `/services`
- **THEN** they reach `/#services` and they do not see a standalone Services overview page

### Requirement: Five service lines at overview depth

The overview section MUST present these five labels: Websites & E-commerce; Custom Systems & Dashboards; Desktop Software & Automation; Integrations, Redesign & Support; 3D & Interactive Experiences. Each line MUST include short supporting copy. The section MUST remain an index (no per-line scope, process, or deliverables on the overview itself). Cards MUST be equal in size, MUST NOT show a “Service” eyebrow, and MUST present “Learn more” that becomes more visible with motion on hover. Cards MUST NOT navigate to `/services/[slug]`.

#### Scenario: Five lines visible

- **WHEN** a visitor views the homepage services section
- **THEN** they see those five labels with supporting copy and the section itself is not a service detail page

#### Scenario: Cards do not open detail pages

- **WHEN** a visitor activates a homepage service card
- **THEN** they do not reach `/services/[slug]`

### Requirement: Steep on the overview

The overview section MUST use the Steep token set (Paper White, Ink Black, mist or glass cards at 24px radius). Blush Peach MAY appear at most once on the homepage. The section MUST NOT introduce a new palette.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views service cards on the homepage
- **THEN** those cards use a 24px corner radius

## REMOVED Requirements

### Requirement: Start a Project from overview

**Reason:** The standalone `/services` overview is gone. The homepage in-page “Start a Project” control remains the primary CTA.

**Migration:** Use the homepage hero CTA, which still goes to `/contact`.
