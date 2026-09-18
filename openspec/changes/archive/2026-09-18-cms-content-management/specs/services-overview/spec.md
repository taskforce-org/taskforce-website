## MODIFIED Requirements

### Requirement: Services overview is reachable

The site MUST present services as the homepage section with id `services`, populated from published Strapi services. A request to `/services` MUST send the visitor to `/#services`.

#### Scenario: Overview loads on home

- **WHEN** a visitor opens the homepage and scrolls to the services section
- **THEN** they see published services from Strapi

#### Scenario: Old overview URL redirects

- **WHEN** a visitor opens `/services`
- **THEN** they reach `/#services` and they do not see a standalone Services overview page

### Requirement: Five service lines at overview depth

The overview MUST show published Strapi services as cards that MAY differ in size. Activating a card MUST navigate to `/services/[slug]`. Cards MUST NOT open a modal. The overview MUST NOT require a fixed list of five hardcoded labels.

#### Scenario: Five lines visible

- **WHEN** a visitor views the homepage services section
- **THEN** they see published service cards from Strapi

#### Scenario: Cards do not open detail pages

- **WHEN** a visitor activates a homepage service card for a published slug
- **THEN** they reach `/services/{slug}`

### Requirement: Steep on the overview

The overview MUST use the Apple-like white-canvas language on home. It MUST NOT require Steep or Soft UI.

#### Scenario: Cards use Steep radius

- **WHEN** a visitor views service cards on the homepage
- **THEN** those cards use the shared Apple-like language
