import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { careersContent } from "@/lib/careers";

export const metadata: Metadata = {
  title: careersContent.documentTitle,
  description: careersContent.description,
};

export default function CareersPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-32 pt-8">
      <Reveal>
        <h1 className="max-w-[16ch] text-[44px] leading-[1.3] tracking-[-0.66px] text-ink-black sm:text-[64px] sm:tracking-[-0.96px]">
          {careersContent.heading}
        </h1>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-8 max-w-[58ch] text-[20px] leading-[1.35] text-slate-gray">
          {careersContent.intro}
        </p>
      </Reveal>
    </section>
  );
}
