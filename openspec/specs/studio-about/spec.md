# studio-about Specification

## Purpose

There is no Studio page. `/studio` redirects to about.

## Requirements

### Requirement: Studio page is gone

The site MUST NOT serve `/studio` as a standalone Studio page. That URL MUST send the visitor to about.

#### Scenario: Old studio URL

- **WHEN** a visitor opens `/studio`
- **THEN** they reach `/fa/about`
