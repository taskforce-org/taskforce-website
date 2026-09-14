import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { studioContent } from "@/lib/studio";

export const metadata: Metadata = {
  title: studioContent.documentTitle,
  description: studioContent.description,
};

export default function StudioPage() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-16">
        <Reveal>
          <h1 className="max-w-[16ch] text-[44px] leading-[1.3] tracking-[-0.66px] text-ink-black sm:text-[64px] sm:tracking-[-0.96px]">
            {studioContent.heading}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[58ch] text-[20px] leading-[1.35] text-slate-gray">
            {studioContent.intro}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href={studioContent.cta.href}>{studioContent.cta.label}</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href={studioContent.technologyLink.href}>
                {studioContent.technologyLink.label}
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <ul className="grid gap-6 lg:grid-cols-2">
          {[studioContent.whoWeAre, studioContent.howWeWork].map(
            (section, index) => (
              <li key={section.heading}>
                <Reveal delay={index * 0.05}>
                  <article className="flex h-full flex-col rounded-3xl bg-mist-gray p-8">
                    <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-ink-black">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-[16px] leading-[1.5] text-ink-black">
                      {section.body}
                    </p>
                  </article>
                </Reveal>
              </li>
            ),
          )}
        </ul>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioContent.principles.map((principle, index) => (
            <li key={principle.label}>
              <Reveal delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-3xl bg-mist-gray p-8">
                  <span className="text-[20px] font-medium text-ink-black">
                    {principle.label}
                  </span>
                  <p className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                    {principle.blurb}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <Reveal>
          <div className="rounded-3xl bg-blush-peach p-10">
            <h2 className="max-w-[22ch] text-[26px] leading-[1.18] tracking-[-0.23px] text-sienna-brown">
              {studioContent.callout.heading}
            </h2>
            <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.5] text-sienna-brown">
              {studioContent.callout.body}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
