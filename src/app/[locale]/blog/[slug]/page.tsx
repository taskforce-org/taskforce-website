import { notFound } from "next/navigation";

import { ZoomMedia } from "@/components/zoom-media";
import { getPost } from "@/lib/cms";
import { isLocale, type Locale } from "@/lib/i18n";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const post = await getPost(slug, locale);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[760px] px-6 pb-32 pt-10">
      <h1 className="text-[44px] font-medium leading-[1.08] tracking-tight sm:text-[60px]">
        {post.title}
      </h1>
      <div className="mt-10 overflow-hidden rounded-[28px]">
        <ZoomMedia src={post.image} alt="" priority className="h-[42vh] min-h-[220px] w-full" />
      </div>
      <p className="mt-10 text-[19px] leading-[1.6] opacity-90">{post.body}</p>
    </article>
  );
}
