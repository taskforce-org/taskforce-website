## Purpose

Lets visitors read studio writing at `/blog` and on individual post pages whose slugs and bodies come from published Strapi posts.

## ADDED Requirements

### Requirement: Blog index

The site MUST serve `/blog` on a white canvas. The page MUST list published posts from Strapi. Activating a post MUST go to `/blog/[slug]`.

#### Scenario: Index lists posts

- **WHEN** a visitor opens `/blog` and at least one post is published
- **THEN** they see those posts and can open one at `/blog/{slug}`

### Requirement: Post page

The site MUST serve `/blog/[slug]` for a published slug on a white canvas. An unknown slug MUST NOT render another post’s body.

#### Scenario: Known post

- **WHEN** a visitor opens `/blog/{slug}` for a published post
- **THEN** they see that post’s title and body from Strapi

#### Scenario: Unknown post slug

- **WHEN** a visitor opens `/blog/not-a-post`
- **THEN** they do not see a published post body for a different slug
