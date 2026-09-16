import type { Metadata } from "next";
import Link from "next/link";

import { HomeSectionLinks } from "@/components/home-section-links";
import { Reveal } from "@/components/reveal";
import { Surface } from "@/components/surface";
import { Button } from "@/components/ui/button";
import { faqContent } from "@/lib/faq";

export const metadata: Metadata = {
  title: faqContent.documentTitle,
  description: faqContent.description,
};

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-16">
        <Reveal>
          <h1 className="max-w-[16ch] text-[44px] leading-[1.3] tracking-[-0.66px] text-copy sm:text-[64px] sm:tracking-[-0.96px]">
            {faqContent.heading}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[58ch] text-[20px] leading-[1.35] text-copy">
            {faqContent.intro}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10">
            <Button asChild>
              <Link href={faqContent.cta.href}>{faqContent.cta.label}</Link>
            </Button>
          </div>
        </Reveal>

        <HomeSectionLinks />
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <ul className="grid gap-6 sm:grid-cols-2">
          {faqContent.items.map((item, index) => (
            <li key={item.question}>
              <Reveal delay={index * 0.05}>
                <Surface>
                  <h2 className="text-[20px] font-medium text-copy">
                    {item.question}
                  </h2>
                  <p className="mt-3 text-[16px] leading-[1.5] text-copy">
                    {item.answer}
                  </p>
                </Surface>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <Reveal>
          <Surface className="p-10">
            <h2 className="max-w-[22ch] text-[26px] leading-[1.18] tracking-[-0.23px] text-copy">
              {faqContent.callout.heading}
            </h2>
            <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.5] text-copy">
              {faqContent.callout.body}
            </p>
          </Surface>
        </Reveal>
      </section>
    </>
  );
}
