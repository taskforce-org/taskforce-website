"use server";

import { z } from "zod";

import { prisma } from "@/lib/db";
import {
  MAX_LINKS,
  MAX_PHONES,
  NEED_MAX_CHARS,
  TIMELINE_OPTIONS,
} from "@/lib/inquiry";

const timelineValues = TIMELINE_OPTIONS.map((option) => option.value) as [
  (typeof TIMELINE_OPTIONS)[number]["value"],
  ...(typeof TIMELINE_OPTIONS)[number]["value"][],
];

const payloadSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required."),
  personFullName: z.string().trim().min(1, "Full name is required."),
  personRole: z.string().trim().min(1, "Role is required."),
  subject: z.string().trim().min(1, "Subject is required.").max(200),
  need: z
    .string()
    .trim()
    .min(1, "Need is required.")
    .max(NEED_MAX_CHARS, `Need must be at most ${NEED_MAX_CHARS} characters.`),
  budgetMinUsd: z
    .string()
    .trim()
    .min(1, "Minimum budget is required.")
    .refine((value) => {
      const amount = Number(value);
      return Number.isFinite(amount) && amount >= 0;
    }, "Enter a minimum budget in USD."),
  timeline: z.enum(timelineValues, {
    message: "Pick a timeline.",
  }),
  links: z.array(z.string()).max(MAX_LINKS, "At most three links."),
  phones: z.array(z.string()).max(MAX_PHONES, "At most two phone numbers."),
});

export type SubmitInquiryResult =
  | { ok: true }
  | { ok: false; errors: Record<string, string> };

function collectList(formData: FormData, key: string): string[] {
  return formData
    .getAll(key)
    .flatMap((value) => (typeof value === "string" ? [value.trim()] : []))
    .filter(Boolean);
}

function flattenIssues(
  error: z.ZodError,
): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) {
      errors[key] = issue.message;
    }
  }
  return errors;
}

export async function submitInquiry(
  formData: FormData,
): Promise<SubmitInquiryResult> {
  const parsed = payloadSchema.safeParse({
    companyName: formData.get("companyName") ?? "",
    personFullName: formData.get("personFullName") ?? "",
    personRole: formData.get("personRole") ?? "",
    subject: formData.get("subject") ?? "",
    need: formData.get("need") ?? "",
    budgetMinUsd: formData.get("budgetMinUsd") ?? "",
    timeline: formData.get("timeline") ?? "",
    links: collectList(formData, "links"),
    phones: collectList(formData, "phones"),
  });

  if (!parsed.success) {
    return { ok: false, errors: flattenIssues(parsed.error) };
  }

  const phones = parsed.data.phones.filter((number) => number.length >= 7);
  const shortPhone = parsed.data.phones.find(
    (number) => number.length > 0 && number.length < 7,
  );
  if (shortPhone) {
    return {
      ok: false,
      errors: { phones: "Each phone number needs at least 7 digits." },
    };
  }

  const budgetMinAmount = Math.round(Number(parsed.data.budgetMinUsd) * 100);

  try {
    await prisma.lead.create({
      data: {
        companyName: parsed.data.companyName,
        personFullName: parsed.data.personFullName,
        personRole: parsed.data.personRole,
        subject: parsed.data.subject,
        need: parsed.data.need,
        budgetMinAmount,
        budgetCurrency: "usd",
        timeline: parsed.data.timeline,
        links: {
          create: parsed.data.links.map((url, index) => ({
            url,
            sortOrder: index,
          })),
        },
        phones: {
          create: phones.map((number, index) => ({
            number,
            sortOrder: index,
          })),
        },
      },
    });
  } catch {
    return {
      ok: false,
      errors: {
        form: "Inquiry could not be stored. Check the database connection.",
      },
    };
  }

  return { ok: true };
}
