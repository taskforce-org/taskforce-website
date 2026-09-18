import Link from "next/link";
import { notFound } from "next/navigation";

import { ZoomMedia } from "@/components/zoom-media";
import { getCms } from "@/lib/cms";
import { isLocale, localized, ui, type Locale } from "@/lib/i18n";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const cms = await getCms(locale);
  const text = ui[locale];

  return (
    <section className="mx-auto max-w-[900px] px-6 pb-32 pt-10">
      <h1 className="text-[56px] font-medium tracking-tight sm:text-[72px]">{text.blog}</h1>
      <ul className="mt-14 flex flex-col gap-16">
        {cms.posts.map((post) => (
          <li key={post.slug}>
            <Link href={localized(locale, `/blog/${post.slug}`)} className="block">
              <div className="overflow-hidden rounded-[28px]">
                <ZoomMedia src={post.image} alt="" className="h-[46vh] min-h-[240px] w-full" />
              </div>
              <h2 className="mt-6 text-[32px] font-medium tracking-tight">{post.title}</h2>
              <p className="mt-2 text-[18px] opacity-75">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
