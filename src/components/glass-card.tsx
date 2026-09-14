import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-3xl border border-ink-black/8 bg-mist-gray/80 p-8 shadow-subtle backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </article>
  );
}
