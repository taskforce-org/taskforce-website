export type ContactSection = {
  heading: string;
  body: string;
};

export type ContactCta = {
  label: string;
  href: string;
};

export type ContactContent = {
  documentTitle: string;
  description: string;
  heading: string;
  intro: string;
  availability: ContactSection;
  estimates: ContactSection;
  nextStep: ContactSection;
  callout: ContactSection;
  cta: ContactCta;
};

export const contactContent: ContactContent = {
  documentTitle: "Contact — Task Force",
  description:
    "Start a project with Task Force: availability, how estimates work, and what happens next.",
  heading: "Start a project",
  intro:
    "Tell us the surface you need. We come back with scope, timing, and the trade-offs before anyone commits. The inquiry form ships in a later release.",
  availability: {
    heading: "Availability",
    body: "We take a small number of projects so each one gets senior time. If the work fits, we say so. If it does not, we say that too.",
  },
  estimates: {
    heading: "How estimates work",
    body: "We quote against a locked scope: what is in, what waits, and the trade-offs. No rate card on this page. A number comes after we see the work.",
  },
  nextStep: {
    heading: "What happens next",
    body: "Share what you are building. We reply with a path. A project-inquiry form arrives in a later release; until then, this page is the start.",
  },
  callout: {
    heading: "Ready when you are",
    body: "Have a surface in mind. We will say what belongs now and what can wait.",
  },
  cta: {
    label: "Start a Project",
    href: "/contact",
  },
};
