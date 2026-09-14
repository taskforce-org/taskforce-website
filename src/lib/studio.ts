export type StudioPrinciple = {
  label: string;
  blurb: string;
};

export type StudioSection = {
  heading: string;
  body: string;
};

export type StudioCta = {
  label: string;
  href: string;
};

export type StudioContent = {
  documentTitle: string;
  description: string;
  heading: string;
  intro: string;
  whoWeAre: StudioSection;
  howWeWork: StudioSection;
  principles: readonly StudioPrinciple[];
  callout: StudioSection;
  cta: StudioCta;
};

export const studioContent: StudioContent = {
  documentTitle: "Studio — Task Force",
  description:
    "Task Force is a senior engineering studio building websites, custom systems, and automation that hold up.",
  heading: "Studio",
  intro:
    "A senior engineering studio. We ship websites, custom systems, and automation with the quality standards of a team that has maintained its own work for years.",
  whoWeAre: {
    heading: "Who we are",
    body: "Task Force is a small software studio. We build for teams that need the work to last: marketing sites and storefronts, internal systems, desktop automation, and the seams that hold them together.",
  },
  howWeWork: {
    heading: "How we work",
    body: "We take on a small number of projects so each one gets senior attention. Scope and trade-offs stay visible before anyone commits. We keep the surface you can operate, not a pile of handoffs.",
  },
  principles: [
    {
      label: "Software that holds up",
      blurb:
        "We ship work we are willing to maintain years later, not a demo that ages on day two.",
    },
    {
      label: "A small number of projects",
      blurb:
        "Capacity stays limited on purpose so each engagement gets senior time, not a bench of handoffs.",
    },
    {
      label: "Own the result",
      blurb:
        "We stay with the system after it ships. The studio is accountable for the surface you run.",
    },
  ],
  callout: {
    heading: "Tell us what you are building",
    body: "We will come back with scope, timing, and the trade-offs worth knowing before you commit.",
  },
  cta: {
    label: "Start a Project",
    href: "/contact",
  },
};
