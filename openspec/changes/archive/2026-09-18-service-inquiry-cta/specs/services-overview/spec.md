## MODIFIED Requirements

### Requirement: Five service lines at overview depth

The overview section MUST present these five labels: Websites & E-commerce; Custom Systems & Dashboards; Desktop Software & Automation; Integrations, Redesign & Support; 3D & Interactive Experiences. Each line MUST include short supporting copy. The section MUST remain an index (no per-line scope, process, or deliverables on the overview itself). Cards MUST be equal in size, MUST NOT show a “Service” eyebrow, and MUST present “Learn more” that becomes more visible with motion on hover. Cards MUST NOT navigate to `/services/[slug]`. Hover, click, tap, or keyboard activation of a card MUST open the shared service modal defined by `service-inquiry-cta` for that line.

#### Scenario: Five lines visible

- **WHEN** a visitor views the homepage services section
- **THEN** they see those five labels with supporting copy and the section itself is not a service detail page

#### Scenario: Cards do not open detail pages

- **WHEN** a visitor activates a homepage service card
- **THEN** they do not reach `/services/[slug]`

#### Scenario: Card opens the shared modal

- **WHEN** a visitor hovers or activates a homepage service card
- **THEN** they see that line’s service modal on the homepage
