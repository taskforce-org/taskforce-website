"use server";

import { headers } from "next/headers";
import { z } from "zod";

import { prisma } from "@/lib/db";
import { isLocale, ui } from "@/lib/i18n";

const MIN_MS = 2500;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 3;

const hits = new Map<string, number[]>();

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; errors: Record<string, string> };

function clientIp(headerList: Headers) {
  const forwarded = headerList.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return headerList.get("x-real-ip") || "unknown";
}

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function submitContact(
  formData: FormData,
): Promise<SubmitContactResult> {
  const localeRaw = String(formData.get("locale") ?? "fa");
  const locale = isLocale(localeRaw) ? localeRaw : "fa";
  const errorsText = ui[locale].errors;

  const payloadSchema = z.object({
    name: z.string().trim().min(1, errorsText.name),
    phone: z.string().trim().min(7, errorsText.phone),
    reason: z.string().trim().min(1, errorsText.reason).max(2000),
    company_website: z.string().optional(),
    startedAt: z.string(),
  });

  const parsed = payloadSchema.safeParse({
    name: formData.get("name") ?? "",
    phone: formData.get("phone") ?? "",
    reason: formData.get("reason") ?? "",
    company_website: String(formData.get("company_website") ?? ""),
    startedAt: formData.get("startedAt") ?? "",
  });

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors };
  }

  if (parsed.data.company_website) {
    return { ok: true };
  }

  const started = Number(parsed.data.startedAt);
  if (!Number.isFinite(started) || Date.now() - started < MIN_MS) {
    return { ok: false, errors: { form: errorsText.slow } };
  }

  const headerList = await headers();
  if (limited(clientIp(headerList))) {
    return { ok: false, errors: { form: errorsText.rate } };
  }

  try {
    await prisma.lead.create({
      data: {
        companyName: "",
        personFullName: parsed.data.name,
        personRole: "",
        subject: parsed.data.reason.slice(0, 200),
        need: parsed.data.reason,
        budgetMinAmount: 0,
        timeline: "flexible",
        phones: {
          create: [{ number: parsed.data.phone, sortOrder: 0 }],
        },
      },
    });
  } catch {
    return {
      ok: false,
      errors: { form: errorsText.store },
    };
  }

  return { ok: true };
}
