# services-overview Specification

## Purpose

Services appear as homepage cards that open locale service pages. `/services` redirects to the home services section.

## Requirements

### Requirement: Services overview is reachable

The site MUST present services as the homepage section with id `services`. A request to `/services` MUST send the visitor to the Farsi (or current) home services section.

#### Scenario: Old overview URL redirects

- **WHEN** a visitor opens `/services`
- **THEN** they reach a locale home `#services` and they do not see a standalone Services overview page

### Requirement: Cards open detail pages

Activating a card MUST navigate to `/[locale]/services/[slug]`. Cards MUST NOT open a modal.

#### Scenario: Card goes to detail

- **WHEN** a visitor activates a homepage service card for a known slug
- **THEN** they reach `/[locale]/services/{slug}`
