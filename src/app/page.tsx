import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { serviceLines } from "@/lib/services";

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
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-16">
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
              <Link href="#work">See selected work</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section id="services" className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-ink-black sm:text-[44px] sm:tracking-[-0.66px]">
          What we do
        </h2>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLines.map((service, index) => (
            <li key={service.label}>
              <Reveal delay={index * 0.05}>
                <Link
                  href="/services"
                  className="flex h-full flex-col rounded-3xl bg-mist-gray p-8 transition-colors hover:bg-fog-white"
                >
                  <span className="text-[14px] text-ash-gray">Service</span>
                  <span className="mt-3 text-[20px] font-medium text-ink-black">
                    {service.label}
                  </span>
                  <span className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                    {service.blurb}
                  </span>
                  <span className="mt-6 text-[16px] text-ink-black">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="mx-auto max-w-[1200px] px-6 py-20">
        <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-ink-black sm:text-[44px] sm:tracking-[-0.66px]">
          Selected work
        </h2>

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {selectedWork.map((item, index) => (
            <li key={item.project}>
              <Reveal delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-3xl bg-mist-gray p-8">
                  <span className="text-[14px] text-ash-gray">{item.kind}</span>
                  <h3 className="mt-3 text-[20px] font-medium text-ink-black">
                    {item.project}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                    {item.outcome}
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
