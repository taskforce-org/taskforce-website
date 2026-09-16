import Link from "next/link";

import { siteCta } from "@/lib/site-cta";

export function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[16px] text-copy">Task Force</p>
        <p className="text-[15px] text-copy">
          Software studio — websites, custom systems, automation.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/technology" className="text-[16px] text-copy">
            Technology
          </Link>
          <Link href={siteCta.href} className="text-[16px] text-copy">
            {siteCta.label} →
          </Link>
        </div>
      </div>
    </footer>
  );
}
