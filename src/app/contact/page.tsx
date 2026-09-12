import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project — Task Force",
  description: "How to begin a project with the Task Force studio.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-20">
      <h1 className="max-w-[16ch] text-[44px] leading-[1.3] tracking-[-0.66px] text-ink-black">
        Start a project with Task Force
      </h1>
      <p className="mt-8 max-w-[60ch] text-[20px] leading-[1.35] text-slate-gray">
        The project inquiry form arrives in a later release. Until then, tell us
        about the work and we will follow up with scope, timing, and a quote.
      </p>
    </section>
  );
}
