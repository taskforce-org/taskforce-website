## MODIFIED Requirements

### Requirement: Five service lines at overview depth

The overview MUST present these five labels: Websites & E-commerce; Custom Systems & Dashboards; Desktop Software & Automation; Integrations, Redesign & Support; 3D & Interactive Experiences. Each line MUST include short supporting copy. The page MUST remain an index (no per-line scope, process, or deliverables on the overview itself). Each line’s primary link MUST go to that line’s `/services/[slug]` detail page.

#### Scenario: Five lines visible

- **WHEN** a visitor views `/services`
- **THEN** they see those five labels with supporting copy and the page itself is not a service detail page

#### Scenario: Cards go to detail pages

- **WHEN** a visitor activates an overview service card
- **THEN** they reach that line’s `/services/[slug]` page
