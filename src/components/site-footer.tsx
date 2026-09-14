import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#ececec]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[16px] text-ink-black">Task Force</p>
        <p className="text-[15px] text-slate-gray">
          Software studio — websites, custom systems, automation.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/technology" className="text-[16px] text-ink-black">
            Technology
          </Link>
          <Link href="/contact" className="text-[16px] text-ink-black">
            Start a Project →
          </Link>
        </div>
      </div>
    </footer>
  );
}
