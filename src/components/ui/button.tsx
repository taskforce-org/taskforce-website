import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-[15px] font-medium tracking-tight transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copy/40 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        filled: "bg-copy text-canvas hover:opacity-80",
        soft: "border border-current/15 bg-transparent text-copy hover:bg-copy/5",
        ghost: "bg-transparent text-copy hover:opacity-70",
        link: "text-copy underline-offset-4 hover:underline px-0",
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
