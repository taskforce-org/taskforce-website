import { siteCta } from "@/lib/site-cta";

export type ContactSection = {
  heading: string;
  body: string;
};

export type ContactCta = {
  label: string;
  labelFa: string;
  href: string;
};

export type ContactFormCopy = {
  heading: string;
  companyName: string;
  links: string;
  websitePlaceholder: string;
  linkPlaceholder: string;
  addLink: string;
  personFullName: string;
  personRole: string;
  phones: string;
  addPhone: string;
  subject: string;
  need: string;
  budgetMin: string;
  timeline: string;
  timelinePlaceholder: string;
  submit: string;
  submitting: string;
  thanksHeading: string;
  thanksBody: string;
  thanksClose: string;
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
  form: ContactFormCopy;
};

export const contactContent: ContactContent = {
  documentTitle: "Contact — Task Force",
  description:
    "Tell us the work: availability, how estimates work, and a project inquiry.",
  heading: "Tell us the work",
  intro:
    "Tell us the surface you need. We come back with scope, timing, and the trade-offs before anyone commits.",
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
    body: "Share what you are building. We reply with a path.",
  },
  callout: {
    heading: "Ready when you are",
    body: "Have a surface in mind. We will say what belongs now and what can wait.",
  },
  cta: {
    ...siteCta,
    href: "#inquire",
  },
  form: {
    heading: "Project inquiry",
    companyName: "Company name",
    links: "Website and links",
    websitePlaceholder: "https://",
    linkPlaceholder: "https://",
    addLink: "+",
    personFullName: "Your full name",
    personRole: "Role",
    phones: "Phone numbers",
    addPhone: "+",
    subject: "Subject",
    need: "What you need",
    budgetMin: "Minimum budget (USD)",
    timeline: "Timeline",
    timelinePlaceholder: "Select a timeline",
    submit: "Send inquiry",
    submitting: "Sending…",
    thanksHeading: "Thank you",
    thanksBody: "We have the inquiry. We will come back with a path.",
    thanksClose: "Back to contact",
  },
};
