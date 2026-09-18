"use client";

import { useLayoutEffect } from "react";

import type { Locale } from "@/lib/i18n";

export function HtmlLang({ locale }: { locale: Locale }) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(locale)};document.documentElement.dir=${JSON.stringify(locale === "fa" ? "rtl" : "ltr")}`,
      }}
    />
  );
}
