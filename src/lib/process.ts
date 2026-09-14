export type ProcessStep = {
  title: string;
  body: string;
};

export type ProcessSection = {
  heading: string;
  body: string;
};

export type ProcessCta = {
  label: string;
  href: string;
};

export type ProcessContent = {
  documentTitle: string;
  description: string;
  heading: string;
  intro: string;
  steps: readonly ProcessStep[];
  callout: ProcessSection;
  cta: ProcessCta;
};

export const processContent: ProcessContent = {
  documentTitle: "Process — Task Force",
  description:
    "How an engagement with Task Force moves from first talk to a surface you can keep.",
  heading: "Process",
  intro:
    "A short path from first talk to handoff. Few projects at a time, so each step gets senior attention.",
  steps: [
    {
      title: "Discover",
      body: "We start with the work as it actually happens. Goals, constraints, and what must hold up after launch.",
    },
    {
      title: "Scope",
      body: "We lock what is in, what waits, and the trade-offs worth knowing before anyone commits.",
    },
    {
      title: "Build",
      body: "We ship a production surface you can operate. Senior time stays on the risky seams, not a bench of handoffs.",
    },
    {
      title: "Handoff",
      body: "You get the running system, not a pile of leftovers. We stay accountable for the result after it ships.",
    },
  ],
  callout: {
    heading: "Ready to start",
    body: "Tell us what you are building. We will come back with scope, timing, and the next step.",
  },
  cta: {
    label: "Start a Project",
    href: "/contact",
  },
};
