import { notFound } from "next/navigation";

import { ChromeProvider } from "@/components/chrome";
import { HtmlLang } from "@/components/html-lang";
import { LocaleSwitch } from "@/components/locale-switch";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { isLocale, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <ChromeProvider locale={locale}>
      <HtmlLang locale={locale} />
      <SiteNav locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
      <LocaleSwitch locale={locale} />
    </ChromeProvider>
  );
}
