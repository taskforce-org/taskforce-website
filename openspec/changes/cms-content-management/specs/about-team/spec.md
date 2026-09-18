## Purpose

Lets visitors scan the team on the homepage and read each member’s story and professional timeline on `/about`, using Strapi data that exists now without waiting for a finished about-page art direction.

## ADDED Requirements

### Requirement: Home team shorts

The homepage MUST include an about-us section that lists published team members with name, speciality, and an outbound contact link when Strapi provides one.

#### Scenario: Shorts on home

- **WHEN** a visitor views the homepage and team members are published
- **THEN** they see each member’s name and speciality, and a contact link when that field is present

### Requirement: About page

The site MUST serve `/about` on a white canvas. The page MUST present published members with story and professional timeline fields that exist in Strapi. The page MUST NOT invent biography the CMS does not hold. `/studio` MUST send the visitor to `/about`.

#### Scenario: About shows stored story

- **WHEN** a visitor opens `/about` and a member has story and timeline in Strapi
- **THEN** they see that story and timeline

#### Scenario: Old studio URL

- **WHEN** a visitor opens `/studio`
- **THEN** they reach `/about`
