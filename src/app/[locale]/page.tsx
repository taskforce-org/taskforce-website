import Link from "next/link";
import { notFound } from "next/navigation";

import { ZoomMedia } from "@/components/zoom-media";
import { getCms } from "@/lib/cms";
import { isLocale, localized, ui, type Locale } from "@/lib/i18n";

const sizeClass = {
  large: "min-h-[420px] md:col-span-2",
  medium: "min-h-[320px]",
  small: "min-h-[240px]",
};

export default async function Home({
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
    <>
      <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-10">
        <h1 className="max-w-[14ch] text-[56px] font-medium leading-[1.02] tracking-tight sm:text-[80px]">
          {text.heroTitle}
        </h1>
        <p className="mt-8 max-w-[42ch] text-[21px] leading-[1.4] tracking-tight opacity-80">
          {text.heroBody}
        </p>
        <div className="mt-12 overflow-hidden rounded-[32px]">
          <ZoomMedia src="/images/tf-hero.jpg" alt="" priority className="h-[52vh] min-h-[280px] w-full" />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1200px] px-6 pb-28">
        <h2 className="text-[40px] font-medium tracking-tight sm:text-[56px]">{text.services}</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {cms.services.map((service) => (
            <li key={service.slug} className={sizeClass[service.cardSize]}>
              <Link
                href={localized(locale, `/services/${service.slug}`)}
                className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-black text-white"
              >
                <ZoomMedia src={service.image} alt="" className="h-48 w-full md:h-56" />
                <span className="flex flex-1 flex-col p-7">
                  <span className="text-[28px] font-medium tracking-tight">
                    {service.title}
                  </span>
                  <span className="mt-3 text-[17px] opacity-80">{service.blurb}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="mx-auto max-w-[900px] px-6 pb-28">
        <h2 className="text-[40px] font-medium tracking-tight sm:text-[56px]">{text.work}</h2>
        <ul className="mt-10 flex flex-col gap-16">
          {cms.work.map((item) => (
            <li key={item.slug}>
              <Link href={localized(locale, `/work/${item.slug}`)} className="block">
                <div className="overflow-hidden rounded-[28px]">
                  <ZoomMedia src={item.image} alt="" className="h-[58vh] min-h-[280px] w-full" />
                </div>
                <p className="mt-5 text-[13px] uppercase tracking-[0.14em] opacity-50">
                  {item.kind}
                </p>
                <h3 className="mt-2 text-[32px] font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-[18px] opacity-80">{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="blog" className="mx-auto max-w-[1200px] px-6 pb-28">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[40px] font-medium tracking-tight sm:text-[56px]">{text.blog}</h2>
          <Link
            href={localized(locale, "/blog")}
            className="text-[16px] underline-offset-4 hover:underline"
          >
            {text.allPosts}
          </Link>
        </div>
        <ul className="mt-10 grid gap-8 md:grid-cols-2">
          {cms.posts.map((post) => (
            <li key={post.slug}>
              <Link href={localized(locale, `/blog/${post.slug}`)} className="block">
                <div className="overflow-hidden rounded-[28px]">
                  <ZoomMedia src={post.image} alt="" className="h-64 w-full" />
                </div>
                <h3 className="mt-5 text-[24px] font-medium tracking-tight">{post.title}</h3>
                <p className="mt-2 text-[16px] opacity-75">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {cms.testimonialsOn && cms.testimonials.length > 0 ? (
        <section id="testimonials" className="mx-auto max-w-[720px] px-6 pb-28">
          <h2 className="text-[40px] font-medium tracking-tight sm:text-[56px]">
            {text.testimonials}
          </h2>
          <ul className="mt-10 flex flex-col gap-16">
            {cms.testimonials.map((item) => (
              <li key={item.quote}>
                <p className="text-[28px] leading-[1.25] tracking-tight">
                  {locale === "fa" ? `«${item.quote}»` : `“${item.quote}”`}
                </p>
                <p className="mt-4 text-[15px] opacity-60">
                  {item.person} — {item.role}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section id="about" className="mx-auto max-w-[1200px] px-6 pb-32">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[40px] font-medium tracking-tight sm:text-[56px]">{text.aboutUs}</h2>
          <Link
            href={localized(locale, "/about")}
            className="text-[16px] underline-offset-4 hover:underline"
          >
            {text.stories}
          </Link>
        </div>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cms.team.map((member) => (
            <li key={member.slug} className="rounded-[28px] border border-current/10 p-7">
              <p className="text-[24px] font-medium tracking-tight">{member.name}</p>
              <p className="mt-2 text-[16px] opacity-70">{member.speciality}</p>
              {member.link ? (
                <a
                  href={member.link}
                  className="mt-4 inline-block text-[15px] underline-offset-4 hover:underline"
                >
                  {text.profile}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
