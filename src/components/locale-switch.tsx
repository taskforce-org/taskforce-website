"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { switchLocalePath, ui, type Locale } from "@/lib/i18n";

export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const other: Locale = locale === "fa" ? "en" : "fa";

  return (
    <Link
      href={switchLocalePath(pathname, other)}
      className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-current/15 bg-canvas/90 text-[13px] font-medium tracking-tight shadow-lg backdrop-blur-xl"
      aria-label={ui[locale].switchLabel}
      hrefLang={other}
    >
      {ui[locale].switchTo}
    </Link>
  );
}
