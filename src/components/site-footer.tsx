import { ui, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale: Locale }) {
  const text = ui[locale];
  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[15px] tracking-tight">Task Force</p>
        <p className="text-[14px] opacity-70">{text.footerLine}</p>
      </div>
    </footer>
  );
}
