import { notFound } from "next/navigation";

import { ZoomMedia } from "@/components/zoom-media";
import { isLocale } from "@/lib/i18n";
import { getWork } from "@/lib/cms";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const work = await getWork(slug, raw);
  if (!work) notFound();

  return (
    <article className="mx-auto max-w-[1100px] px-6 pb-32 pt-8">
      <p className="text-[13px] tracking-[0.16em] opacity-50">{work.kind}</p>
      <h1 className="mt-4 max-w-[16ch] text-[52px] font-medium leading-[1.02] tracking-[-0.05em] sm:text-[72px]">
        {work.title}
      </h1>
      <p className="mt-6 max-w-[48ch] text-[20px] opacity-80">{work.summary}</p>
      <div className="mt-12 overflow-hidden rounded-[32px]">
        <ZoomMedia src={work.image} alt="" priority className="h-[62vh] min-h-[300px] w-full" />
      </div>
      <p className="mt-12 max-w-[62ch] text-[18px] leading-[1.55] opacity-85">{work.body}</p>
    </article>
  );
}
