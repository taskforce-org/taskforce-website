import { notFound } from "next/navigation";

import { ZoomMedia } from "@/components/zoom-media";
import { getService } from "@/lib/cms";
import { isLocale, ui, type Locale } from "@/lib/i18n";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const service = await getService(slug, locale);
  if (!service) notFound();
  const text = ui[locale];

  return (
    <article className="mx-auto max-w-[1100px] px-6 pb-32 pt-8">
      <p className="text-[13px] uppercase tracking-[0.16em] opacity-50">{text.serviceKicker}</p>
      <h1 className="mt-4 max-w-[16ch] text-[52px] font-medium leading-[1.02] tracking-tight sm:text-[72px]">
        {service.title}
      </h1>
      <p className="mt-6 max-w-[48ch] text-[20px] opacity-80">{service.blurb}</p>
      <div className="mt-12 overflow-hidden rounded-[32px]">
        <ZoomMedia src={service.image} alt="" priority className="h-[62vh] min-h-[300px] w-full" />
      </div>
      <p className="mt-12 max-w-[62ch] text-[18px] leading-[1.55] opacity-85">{service.body}</p>
    </article>
  );
}
