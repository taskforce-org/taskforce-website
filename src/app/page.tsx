import Link from "next/link";

import { GlassCard } from "@/components/glass-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { processContent } from "@/lib/process";
import { serviceLines } from "@/lib/services";
import { studioContent } from "@/lib/studio";

const selectedWork = [
  {
    project: "Field operations dashboard",
    kind: "Custom system",
    outcome: "Dispatch time cut from hours to minutes.",
  },
  {
    project: "Direct-to-consumer storefront",
    kind: "E-commerce",
    outcome: "Checkout rebuilt around a single-page flow.",
  },
  {
    project: "Warehouse automation suite",
    kind: "Desktop & automation",
    outcome: "Nightly reconciliation runs without an operator.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-8">
        <Reveal>
          <h1 className="max-w-[18ch] text-[44px] leading-[1.3] tracking-[-0.66px] text-ink-black sm:text-[64px] sm:tracking-[-0.96px]">
            Task Force builds software that <em>holds up</em>
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[58ch] text-[20px] leading-[1.35] text-slate-gray">
            A senior engineering studio. We ship websites, custom systems, and
            automation with the quality standards of a team that has maintained
            its own work for years.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/#work">See selected work</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section
        id="services"
        className="mx-auto max-w-[1200px] scroll-mt-28 px-6 py-20"
      >
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-ink-black sm:text-[44px] sm:tracking-[-0.66px]">
          What we do
        </h2>

        <ul className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLines.map((service, index) => (
            <li key={service.label} className="h-full">
              <Reveal delay={index * 0.05} className="h-full">
                <GlassCard>
                  <span className="text-[20px] font-medium text-ink-black">
                    {service.label}
                  </span>
                  <span className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                    {service.blurb}
                  </span>
                  <span className="mt-auto pt-6 text-[15px] text-ink-black opacity-40 translate-y-0.5 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Learn more
                  </span>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="work"
        className="mx-auto max-w-[1200px] scroll-mt-28 px-6 py-20"
      >
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-ink-black sm:text-[44px] sm:tracking-[-0.66px]">
          Selected work
        </h2>

        <ul className="mt-10 grid auto-rows-fr gap-6 lg:grid-cols-2">
          {selectedWork.map((item, index) => (
            <li
              key={item.project}
              className={
                index === selectedWork.length - 1 ? "h-full lg:col-span-2" : "h-full"
              }
            >
              <Reveal delay={index * 0.05} className="h-full">
                <GlassCard className="min-h-[220px] lg:p-10">
                  <span className="text-[14px] text-ash-gray">{item.kind}</span>
                  <h3 className="mt-3 text-[22px] font-medium text-ink-black sm:text-[26px]">
                    {item.project}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.5] text-ink-black sm:text-[18px]">
                    {item.outcome}
                  </p>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="process"
        className="mx-auto max-w-[1200px] scroll-mt-28 px-6 py-20"
      >
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-ink-black sm:text-[44px] sm:tracking-[-0.66px]">
          {processContent.heading}
        </h2>
        <p className="mt-6 max-w-[58ch] text-[20px] leading-[1.35] text-slate-gray">
          {processContent.intro}
        </p>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {processContent.steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.05} className="h-full">
                <GlassCard>
                  <span className="text-[14px] text-ash-gray">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[20px] font-medium text-ink-black">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                    {step.body}
                  </p>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Button asChild>
            <Link href={processContent.cta.href}>{processContent.cta.label}</Link>
          </Button>
        </div>
      </section>

      <section
        id="studio"
        className="mx-auto max-w-[1200px] scroll-mt-28 px-6 py-20"
      >
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-ink-black sm:text-[44px] sm:tracking-[-0.66px]">
          {studioContent.heading}
        </h2>
        <p className="mt-6 max-w-[58ch] text-[20px] leading-[1.35] text-slate-gray">
          {studioContent.intro}
        </p>

        <ul className="mt-10 grid gap-6 lg:grid-cols-2">
          {[studioContent.whoWeAre, studioContent.howWeWork].map(
            (block, index) => (
              <li key={block.heading}>
                <Reveal delay={index * 0.05} className="h-full">
                  <GlassCard>
                    <h3 className="text-[20px] font-medium text-ink-black">
                      {block.heading}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                      {block.body}
                    </p>
                  </GlassCard>
                </Reveal>
              </li>
            ),
          )}
        </ul>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioContent.principles.map((principle, index) => (
            <li key={principle.label}>
              <Reveal delay={index * 0.05} className="h-full">
                <GlassCard>
                  <span className="text-[20px] font-medium text-ink-black">
                    {principle.label}
                  </span>
                  <p className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                    {principle.blurb}
                  </p>
                </GlassCard>
              </Reveal>
            </li>
          ))}
        </ul>

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
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <Reveal>
          <div className="rounded-3xl bg-blush-peach p-10">
            <h2 className="max-w-[22ch] text-[26px] leading-[1.18] tracking-[-0.23px] text-sienna-brown">
              We take on a small number of projects so each one gets the senior
              attention it needs.
            </h2>
            <p className="mt-6 max-w-[60ch] text-[18px] leading-[1.5] text-sienna-brown">
              Tell us what you are building. We will come back with scope,
              timing, and the trade-offs worth knowing before you commit.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
