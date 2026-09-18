import { notFound, redirect } from "next/navigation";

import { isLocale, localized } from "@/lib/i18n";

export default async function ProcessRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  redirect(localized(locale));
}
