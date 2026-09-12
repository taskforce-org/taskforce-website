import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-[16px] font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ink-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Steep Pill Button — Filled
        filled:
          "bg-ink-black text-paper-white border border-ink-black hover:bg-ink-black/90",
        // Steep Pill Button — Ghost
        ghost:
          "bg-transparent text-ink-black border border-ink-black hover:bg-mist-gray",
        // Steep Text Link with Arrow
        link: "text-ink-black hover:underline px-0",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4",
        link: "h-auto py-5",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
