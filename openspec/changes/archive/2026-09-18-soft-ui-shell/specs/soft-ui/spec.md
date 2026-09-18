## Purpose

Public Soft UI (neumorph) visual system for the Task Force Website: Coolors tokens, dual-shadow extruded surfaces, one shared Surface for cards, oval, and buttons, with Steep archived and unused.

## ADDED Requirements

### Requirement: Coolors token set is the only palette

Public pages MUST use only these colors: `#DAE2EA` (canvas and extruded fill), `#AEB2BA` (inset / disabled / nested), `#9DA2AA` (borders and muted icons), `#6B6F78` (text and unselected labels), `#1D79D6` (accent: selected, filled primary, focus). The site MUST NOT use Steep Paper White, Ink Black, Blush Peach, Sienna Brown, or glass/mist fills as live tokens.

#### Scenario: Canvas matches Soft UI

- **WHEN** a visitor views any public page that uses the site shell
- **THEN** the page canvas is `#DAE2EA` and they do not see a Blush Peach surface

### Requirement: Dual-shadow extruded surfaces

Cards, the oval, and buttons MUST share one Surface language: fill matches or nearly matches the canvas, light highlight toward the top-left, dark shadow toward the bottom-right. Glass blur and hairline-only Steep elevation MUST NOT be used. Hover MUST increase elevation. Pressed MUST deepen the shadow (inset allowed). Disabled MUST flatten (no dual shadow) and lower contrast. Focus MUST keep a persistent `#1D79D6` ring.

#### Scenario: Card looks extruded

- **WHEN** a visitor views a content card
- **THEN** the card uses canvas-matching fill and dual shadows, not a glass/blur treatment

#### Scenario: Disabled control is flat

- **WHEN** a visitor sees a disabled button
- **THEN** that control has no dual-shadow extrusion and lower contrast than the default control

### Requirement: One Surface component

All content cards on public pages MUST use a single Surface component. The oval and buttons MUST use the same elevation recipe. Cards MUST use a 24px corner radius. The oval MUST remain a pill (fully rounded).

#### Scenario: Cards share one component

- **WHEN** a visitor compares a service card on `/` with a content card on `/faq`
- **THEN** both use the same Surface language and 24px radius

### Requirement: Steep files are archived

The live design source MUST be `design/soft-ui/`. Steep files MUST NOT remain in `design/steep/` as the active system.

#### Scenario: Steep is not the live path

- **WHEN** a developer looks for the live visual system
- **THEN** they find `design/soft-ui/` and they do not find an active `design/steep/` directory
