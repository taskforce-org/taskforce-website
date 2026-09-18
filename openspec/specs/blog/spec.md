# blog Specification

## Purpose

Lets visitors read studio writing at `/[locale]/blog` and on individual post pages.

## Requirements

### Requirement: Blog index

The site MUST serve `/[locale]/blog` on a white canvas and list posts for that locale. Activating a post MUST go to `/[locale]/blog/[slug]`.

#### Scenario: Index lists posts

- **WHEN** a visitor opens `/fa/blog`
- **THEN** they see Farsi posts and can open one at `/fa/blog/{slug}`

### Requirement: Post page

The site MUST serve `/[locale]/blog/[slug]` for a known slug. An unknown slug MUST NOT render another post’s body.

#### Scenario: Unknown post slug

- **WHEN** a visitor opens `/fa/blog/not-a-post`
- **THEN** they do not see a different post’s body
