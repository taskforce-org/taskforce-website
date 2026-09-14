export type TechnologyCapability = {
  title: string;
  body: string;
};

export type TechnologyGroup = {
  label: string;
  capabilities: readonly TechnologyCapability[];
};

export type TechnologySection = {
  heading: string;
  body: string;
};

export type TechnologyCta = {
  label: string;
  href: string;
};

export type TechnologyContent = {
  documentTitle: string;
  description: string;
  heading: string;
  intro: string;
  groups: readonly TechnologyGroup[];
  callout: TechnologySection;
  cta: TechnologyCta;
};

export const technologyContent: TechnologyContent = {
  documentTitle: "Technology — Task Force",
  description:
    "The surfaces Task Force ships on: web, systems, automation, integrations, and 3D that still hold up.",
  heading: "Technology",
  intro:
    "Depth per line of work, not a logo wall. Same studio, same quality bar, chosen for the surface you will keep.",
  groups: [
    {
      label: "Websites & E-commerce",
      capabilities: [
        {
          title: "Production web",
          body: "Marketing sites and storefronts built to load fast, convert, and stay editable after launch.",
        },
        {
          title: "Checkout that holds",
          body: "Commerce flows kept short and honest, so the buy path does not collapse under real traffic.",
        },
      ],
    },
    {
      label: "Custom Systems & Dashboards",
      capabilities: [
        {
          title: "Internal tools",
          body: "Admin surfaces and reporting shaped around how the work actually happens, not a generic grid.",
        },
        {
          title: "APIs that operators can trust",
          body: "Seams between systems stay visible, so dispatch, status, and handoff do not hide in a black box.",
        },
      ],
    },
    {
      label: "Desktop Software & Automation",
      capabilities: [
        {
          title: "Native utilities",
          body: "Desktop tools for the jobs a browser should not own, with a clear operator override.",
        },
        {
          title: "Scripted pipelines",
          body: "Repetitive paths taken off people. The reliable parts run; the exceptions stay human.",
        },
      ],
    },
    {
      label: "Integrations, Redesign & Support",
      capabilities: [
        {
          title: "Connect the stack",
          body: "Existing systems talked to first. Risky seams get cut before the surface is redesigned.",
        },
        {
          title: "Keep it running",
          body: "A tired admin or storefront modernised without a full rewrite, then owned after it ships.",
        },
      ],
    },
    {
      label: "3D & Interactive Experiences",
      capabilities: [
        {
          title: "Web-based 3D",
          body: "Product viewers and motion-led scenes that still perform on a phone, not only on a demo machine.",
        },
        {
          title: "Constrained interaction",
          body: "The 3D is prototyped, then limited so the rest of the site stays fast.",
        },
      ],
    },
  ],
  callout: {
    heading: "Stack follows the work",
    body: "We pick the surface that will last, not a fashionable list. Tell us what you are building and we will say what belongs.",
  },
  cta: {
    label: "Start a Project",
    href: "/contact",
  },
};
