## ADDED Requirements

### Requirement: Locale service cards
Home service cards MUST use the locale seed and MUST link to `/[locale]/services/[slug]`.

#### Scenario: Farsi service card
- **WHEN** a visitor on `/fa` opens a service card
- **THEN** they land on `/fa/services/` plus that service slug with Farsi copy
