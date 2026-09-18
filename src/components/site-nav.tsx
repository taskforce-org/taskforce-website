"use client";

import Image from "next/image";
import Link from "next/link";

import { ContactOverlay } from "@/components/contact-overlay";
import { useChrome } from "@/components/chrome";
import { localized, ui, type Locale } from "@/lib/i18n";

export function SiteNav({ locale }: { locale: Locale }) {
  const { pageName } = useChrome();
  const text = ui[locale];

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <nav aria-label="Primary" className="mx-auto flex justify-center">
        <div
          dir="ltr"
          className="flex w-full max-w-[720px] items-center justify-between gap-3 rounded-full border border-current/10 bg-canvas/80 px-2 py-1.5 backdrop-blur-xl"
        >
          <Link
            href={localized(locale)}
            className="flex h-10 w-10 shrink-0 items-center justify-center"
            aria-label="Task Force home"
          >
            <Image
              src="/tf-logo.jpg"
              alt=""
              width={28}
              height={28}
              className="tf-logo h-7 w-7 object-contain"
            />
          </Link>
          <p className="min-w-0 truncate text-center text-[15px] font-medium tracking-tight">
            {pageName}
          </p>
          <button
            type="button"
            className="shrink-0 rounded-full bg-copy px-4 py-2 text-[14px] text-canvas"
            popoverTarget="contact-pop"
          >
            {text.contact}
          </button>
        </div>
      </nav>
      <ContactOverlay locale={locale} />
    </header>
  );
}
