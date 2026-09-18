import Link from "next/link";

import { HomeBand } from "@/components/home-band";
import { Reveal } from "@/components/reveal";
import { ServicePicker } from "@/components/service-picker";
import { Surface } from "@/components/surface";
import { Button } from "@/components/ui/button";
import { processContent } from "@/lib/process";
import { siteCta } from "@/lib/site-cta";
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
      <HomeBand id="hero">
        <Reveal>
          <h1 className="max-w-[18ch] text-[44px] leading-[1.3] tracking-[-0.66px] text-copy sm:text-[64px] sm:tracking-[-0.96px]">
            Task Force builds software that <em>holds up</em>
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[58ch] text-[20px] leading-[1.35] text-copy">
            A senior engineering studio. We ship websites, custom systems, and
            automation with the quality standards of a team that has maintained
            its own work for years.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href={siteCta.href}>{siteCta.label}</Link>
            </Button>
            <Button asChild variant="soft">
              <Link href="/#work">See selected work</Link>
            </Button>
          </div>
        </Reveal>
      </HomeBand>

      <HomeBand id="services">
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-copy sm:text-[44px] sm:tracking-[-0.66px]">
          What we do
        </h2>

        <ServicePicker variant="card" />
      </HomeBand>

      <HomeBand id="work">
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-copy sm:text-[44px] sm:tracking-[-0.66px]">
          Selected work
        </h2>

        <ul className="mt-10 grid auto-rows-fr gap-6 lg:grid-cols-2">
          {selectedWork.map((item, index) => (
            <li
              key={item.project}
              className={
                index === selectedWork.length - 1
                  ? "h-full lg:col-span-2"
                  : "h-full"
              }
            >
              <Reveal delay={index * 0.05} className="h-full">
                <Surface className="min-h-[220px] lg:p-10">
                  <span className="text-[14px] text-edge">{item.kind}</span>
                  <h3 className="mt-3 text-[22px] font-medium text-copy sm:text-[26px]">
                    {item.project}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.5] text-copy sm:text-[18px]">
                    {item.outcome}
                  </p>
                </Surface>
              </Reveal>
            </li>
          ))}
        </ul>
      </HomeBand>

      <HomeBand id="process">
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-copy sm:text-[44px] sm:tracking-[-0.66px]">
          {processContent.heading}
        </h2>
        <p className="mt-6 max-w-[58ch] text-[20px] leading-[1.35] text-copy">
          {processContent.intro}
        </p>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {processContent.steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.05} className="h-full">
                <Surface>
                  <span className="text-[14px] text-edge">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[20px] font-medium text-copy">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.5] text-copy">
                    {step.body}
                  </p>
                </Surface>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <Button asChild>
            <Link href={processContent.cta.href}>{processContent.cta.label}</Link>
          </Button>
        </div>
      </HomeBand>

      <HomeBand id="studio">
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-copy sm:text-[44px] sm:tracking-[-0.66px]">
          {studioContent.heading}
        </h2>
        <p className="mt-6 max-w-[58ch] text-[20px] leading-[1.35] text-copy">
          {studioContent.intro}
        </p>

        <ul className="mt-10 grid gap-6 lg:grid-cols-2">
          {[studioContent.whoWeAre, studioContent.howWeWork].map(
            (block, index) => (
              <li key={block.heading}>
                <Reveal delay={index * 0.05} className="h-full">
                  <Surface>
                    <h3 className="text-[20px] font-medium text-copy">
                      {block.heading}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.5] text-copy">
                      {block.body}
                    </p>
                  </Surface>
                </Reveal>
              </li>
            ),
          )}
        </ul>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studioContent.principles.map((principle, index) => (
            <li key={principle.label}>
              <Reveal delay={index * 0.05} className="h-full">
                <Surface>
                  <span className="text-[20px] font-medium text-copy">
                    {principle.label}
                  </span>
                  <p className="mt-3 text-[16px] leading-[1.5] text-copy">
                    {principle.blurb}
                  </p>
                </Surface>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button asChild>
            <Link href={studioContent.cta.href}>{studioContent.cta.label}</Link>
          </Button>
          <Button asChild variant="soft">
            <Link href={studioContent.technologyLink.href}>
              {studioContent.technologyLink.label}
            </Link>
          </Button>
        </div>
      </HomeBand>
    </>
  );
}
