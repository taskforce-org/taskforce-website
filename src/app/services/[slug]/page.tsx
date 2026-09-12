import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, serviceLines } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceLines.map((line) => ({ slug: line.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Not found — Task Force" };
  }
  return {
    title: `${service.label} — Task Force`,
    description: service.blurb,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const sections = [
    { label: "Scope", copy: service.scope },
    { label: "How we work", copy: service.process },
    { label: "Example", copy: service.example },
  ];

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-16">
        <Reveal>
          <p className="text-[14px] text-ash-gray">Service</p>
          <h1 className="mt-3 max-w-[18ch] text-[44px] leading-[1.3] tracking-[-0.66px] text-ink-black sm:text-[64px] sm:tracking-[-0.96px]">
            {service.label}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 max-w-[58ch] text-[20px] leading-[1.35] text-slate-gray">
            {service.blurb}
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
        <ul className="grid gap-6 lg:grid-cols-3">
          {sections.map((section, index) => (
            <li key={section.label}>
              <Reveal delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-3xl bg-mist-gray p-8">
                  <span className="text-[14px] text-ash-gray">
                    {section.label}
                  </span>
                  <p className="mt-3 text-[16px] leading-[1.5] text-ink-black">
                    {section.copy}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
