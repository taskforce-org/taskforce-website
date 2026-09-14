import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/lib/contact";

export const metadata: Metadata = {
  title: contactContent.documentTitle,
  description: contactContent.description,
};

export default function ContactPage() {
  const cards = [
    contactContent.availability,
    contactContent.estimates,
    contactContent.nextStep,
  ];

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-16">
        <Reveal>
          <h1 className="max-w-[16ch] text-[44px] leading-[1.3] tracking-[-0.66px] text-ink-black sm:text-[64px] sm:tracking-[-0.96px]">
            {contactContent.heading}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[58ch] text-[20px] leading-[1.35] text-slate-gray">
            {contactContent.intro}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10">
            <Button asChild>
              <Link href={contactContent.cta.href}>
                {contactContent.cta.label}
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20">
        <ul className="grid gap-6 lg:grid-cols-3">
          {cards.map((section, index) => (
            <li key={section.heading}>
              <Reveal delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-3xl bg-mist-gray p-8">
                  <h2 className="text-[20px] font-medium text-ink-black">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                    {section.body}
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
              {contactContent.callout.heading}
            </h2>
            <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.5] text-sienna-brown">
              {contactContent.callout.body}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
