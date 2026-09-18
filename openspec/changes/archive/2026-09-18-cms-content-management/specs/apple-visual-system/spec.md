## Purpose

Replaces Soft UI, Steep, and neumorphism with an Apple-like public visual system: large generated software/startup images, zoom and motion on scroll, hover, and click, and a single card and button language.

## ADDED Requirements

### Requirement: Soft UI is gone

Public pages MUST NOT use Soft UI / neumorphic inset-outset chrome as the visual system. Cards and buttons MUST share one Apple-like language across the site.

#### Scenario: No soft shadows as the system

- **WHEN** a visitor views `/` or `/work/{slug}`
- **THEN** they do not see the prior Soft UI surface language as the page system

### Requirement: Canvas by route family

`/` , `/blog`, and `/blog/[slug]` MUST use a white canvas. `/services/[slug]` and `/work/[slug]` MUST use a black canvas. `/about` MUST use a white canvas.

#### Scenario: Home is white

- **WHEN** a visitor opens `/`
- **THEN** the page canvas is white

#### Scenario: Work page is black

- **WHEN** a visitor opens a published `/work/{slug}`
- **THEN** the page canvas is black

### Requirement: Generated images and motion

Where a section or page needs a hero or card image, the product MUST supply a generated software or startup image (not an empty grey frame as the finished look). Large images MUST support zoom interaction on scroll, hover, or click as appropriate to the surface.

#### Scenario: Image present on a service page

- **WHEN** a visitor opens a published service page
- **THEN** they see a large generated software or startup image, not an empty placeholder box as the only media

### Requirement: TF mark in the oval

The oval left slot MUST show the Task Force line-mark from `TF_base_logo.jpg` (copied into the site). The mark MUST link to `/`.

#### Scenario: Logo goes home

- **WHEN** a visitor activates the oval mark
- **THEN** they reach `/`
