import { notFound } from "next/navigation";

import { getCms } from "@/lib/cms";
import { isLocale, ui, type Locale } from "@/lib/i18n";

export default async function AboutPage({
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
    <section className="mx-auto max-w-[800px] px-6 pb-32 pt-10">
      <h1 className="text-[56px] font-medium tracking-tight sm:text-[72px]">{text.about}</h1>
      <ul className="mt-16 flex flex-col gap-24">
        {cms.team.map((member) => (
          <li key={member.slug}>
            <p className="text-[13px] uppercase tracking-[0.14em] opacity-50">
              {member.speciality}
            </p>
            <h2 className="mt-3 text-[40px] font-medium tracking-tight">{member.name}</h2>
            {member.link ? (
              <a
                href={member.link}
                className="mt-3 inline-block text-[16px] underline-offset-4 hover:underline"
              >
                {text.profile}
              </a>
            ) : null}
            {member.story ? (
              <p className="mt-6 text-[18px] leading-[1.55] opacity-85">{member.story}</p>
            ) : null}
            {member.timeline.length > 0 ? (
              <ol className="mt-8 flex flex-col gap-4 border-s border-current/15 ps-5">
                {member.timeline.map((item) => (
                  <li key={`${item.year}-${item.event}`}>
                    <p className="text-[13px] opacity-50">{item.year}</p>
                    <p className="text-[17px]">{item.event}</p>
                  </li>
                ))}
              </ol>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
