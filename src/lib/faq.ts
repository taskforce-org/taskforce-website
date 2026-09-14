export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqSection = {
  heading: string;
  body: string;
};

export type FaqCta = {
  label: string;
  href: string;
};

export type FaqContent = {
  documentTitle: string;
  description: string;
  heading: string;
  intro: string;
  items: readonly FaqItem[];
  callout: FaqSection;
  cta: FaqCta;
};

export const faqContent: FaqContent = {
  documentTitle: "FAQ — Task Force",
  description:
    "Pre-sales answers from Task Force: how we price, time, own, revise, support, and start work.",
  heading: "FAQ",
  intro:
    "Short answers before you start. Scope and a quote come after we see the work — not from a rate card.",
  items: [
    {
      question: "How do you price a project?",
      answer:
        "We quote against a locked scope. You see what is in, what waits, and the trade-offs before anyone commits. No rate card on this page.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Timing follows the surface we agree to ship. We come back with a path after discover, not a calendar promise up front.",
    },
    {
      question: "Who owns the work when it ships?",
      answer:
        "You get the running system. We stay accountable for the result after handoff, not a pile of leftovers.",
    },
    {
      question: "How do revisions work?",
      answer:
        "Revisions sit inside the locked scope. New work is a new slice, not an open-ended loop.",
    },
    {
      question: "What support looks like after launch?",
      answer:
        "We keep the surface you operate. Support is part of owning the result, not a ticket void after go-live.",
    },
    {
      question: "How do we start?",
      answer:
        "Tell us what you are building. We come back with scope, timing, and the next step.",
    },
  ],
  callout: {
    heading: "Still deciding?",
    body: "Start a project when you have a surface in mind. We will say what belongs and what can wait.",
  },
  cta: {
    label: "Start a Project",
    href: "/contact",
  },
};
