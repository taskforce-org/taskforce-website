# about-team Specification

## Purpose

Lets visitors scan the team on the homepage and read each member’s story and timeline on `/[locale]/about`.

## Requirements

### Requirement: Home team shorts

The homepage MUST list team members with name, speciality, and an outbound link when present.

#### Scenario: Shorts on home

- **WHEN** a visitor views the homepage about section
- **THEN** they see each member’s name and speciality

### Requirement: About page

The site MUST serve `/[locale]/about` on a white canvas with stored story and timeline only. `/studio` MUST send the visitor to about.

#### Scenario: Old studio URL

- **WHEN** a visitor opens `/studio`
- **THEN** they reach `/fa/about` (or the locale equivalent)
