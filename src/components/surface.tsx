import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Surface({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-3xl bg-canvas p-8 shadow-soft-out transition-[box-shadow] hover:shadow-soft-hover",
        className,
      )}
    >
      {children}
    </article>
  );
}
