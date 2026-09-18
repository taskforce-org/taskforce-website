export const TIMELINE_OPTIONS = [
  { value: "asap", label: "ASAP" },
  { value: "one_to_three_months", label: "1–3 months" },
  { value: "three_to_six_months", label: "3–6 months" },
  { value: "six_plus_months", label: "6+ months" },
  { value: "flexible", label: "Flexible" },
] as const;

export type TimelineValue = (typeof TIMELINE_OPTIONS)[number]["value"];

export const NEED_MAX_CHARS = 4000;
export const MAX_LINKS = 3;
export const MAX_PHONES = 2;
