export type ServiceLine = {
  slug: string;
  label: string;
  blurb: string;
  scope: string;
  process: string;
  example: string;
};

export const serviceLines: readonly ServiceLine[] = [
  {
    slug: "websites-ecommerce",
    label: "Websites & E-commerce",
    blurb: "Marketing sites and storefronts that load fast and convert.",
    scope:
      "Marketing sites, storefronts, and content-led pages built to load fast and convert.",
    process:
      "We lock positioning and information architecture first, then ship a production surface you can keep.",
    example:
      "A direct-to-consumer storefront rebuilt around a single-page checkout flow.",
  },
  {
    slug: "custom-systems-dashboards",
    label: "Custom Systems & Dashboards",
    blurb: "Internal tools, admin panels, and reporting built around real work.",
    scope:
      "Internal tools, admin panels, and reporting that match how the work actually happens.",
    process:
      "We map the real workflow with operators, then build the smallest system that removes the wait.",
    example:
      "A field operations dashboard that cut dispatch time from hours to minutes.",
  },
  {
    slug: "desktop-software-automation",
    label: "Desktop Software & Automation",
    blurb: "Native utilities and scripted pipelines that remove manual steps.",
    scope:
      "Native utilities and scripted pipelines that take repetitive work off people.",
    process:
      "We isolate the manual path, automate the reliable parts, and leave a clear operator override.",
    example:
      "A warehouse automation suite where nightly reconciliation runs without an operator.",
  },
  {
    slug: "integrations-redesign-support",
    label: "Integrations, Redesign & Support",
    blurb: "Connect the stack, modernise the surface, keep it running.",
    scope:
      "Connecting existing systems, modernising a tired surface, and keeping the result running.",
    process:
      "We inventory the stack, cut the risky seams first, then redesign only what users actually touch.",
    example:
      "An aging admin surface rebuilt on the current stack without a full rewrite.",
  },
  {
    slug: "3d-interactive-experiences",
    label: "3D & Interactive Experiences",
    blurb: "Web-based product viewers and motion-led storytelling.",
    scope:
      "Web-based product viewers and motion-led storytelling that still perform on a phone.",
    process:
      "We prototype the interaction, then constrain the 3D so the rest of the site stays fast.",
    example:
      "A product viewer that lets buyers inspect a SKU in the browser before they buy.",
  },
];

export function getServiceBySlug(slug: string): ServiceLine | undefined {
  return serviceLines.find((line) => line.slug === slug);
}
