import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { serviceLines } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services — Task Force",
  description:
    "Five lines of work from Task Force: websites, custom systems, desktop automation, integrations, and 3D experiences.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-16">
        <Reveal>
          <h1 className="max-w-[16ch] text-[44px] leading-[1.3] tracking-[-0.66px] text-ink-black sm:text-[64px] sm:tracking-[-0.96px]">
            Services
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[58ch] text-[20px] leading-[1.35] text-slate-gray">
            Five lines of work. Same studio, same quality bar. This overview is
            the map; start a project when a line fits.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-10">
            <Button asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-32">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLines.map((service, index) => (
            <li key={service.label}>
              <Reveal delay={index * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex h-full flex-col rounded-3xl bg-mist-gray p-8 transition-colors hover:bg-fog-white"
                >
                  <span className="text-[14px] text-ash-gray">Service</span>
                  <span className="mt-3 text-[20px] font-medium text-ink-black">
                    {service.label}
                  </span>
                  <p className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                    {service.blurb}
                  </p>
                  <span className="mt-6 text-[16px] text-ink-black">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
