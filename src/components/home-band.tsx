import type { ReactNode } from "react";

import { DottedCloud } from "@/components/dotted-cloud";

export function HomeBand({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] scroll-mt-28 items-center"
    >
      <DottedCloud />
      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-24">
        {children}
      </div>
    </section>
  );
}
