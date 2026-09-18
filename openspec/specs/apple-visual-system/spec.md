# apple-visual-system Specification

## Purpose

Apple-like public visual system: large generated software/startup images, zoom on scroll/hover/click, one card and button language. Soft UI and Steep are retired.

## Requirements

### Requirement: Soft UI is gone

Public pages MUST NOT use Soft UI / neumorphic chrome as the visual system.

#### Scenario: No soft shadows as the system

- **WHEN** a visitor views `/fa` or a work page
- **THEN** they do not see the prior Soft UI surface language as the page system

### Requirement: Canvas by route family

Home, blog, blog posts, and about MUST use a white canvas. Service and work pages MUST use a black canvas.

#### Scenario: Home is white

- **WHEN** a visitor opens `/fa`
- **THEN** the page canvas is white

#### Scenario: Work page is black

- **WHEN** a visitor opens a work page
- **THEN** the page canvas is black

### Requirement: Generated images and motion

Hero and card images MUST be generated software/startup stills. Large images MUST support zoom on scroll, hover, or click.

#### Scenario: Image present on a service page

- **WHEN** a visitor opens a service page
- **THEN** they see a large generated image, not an empty placeholder as the only media

### Requirement: TF mark in the oval

The oval left slot MUST show the Task Force mark. The mark MUST link to the current locale home.

#### Scenario: Logo goes home

- **WHEN** a visitor activates the oval mark on `/fa/about`
- **THEN** they reach `/fa`
