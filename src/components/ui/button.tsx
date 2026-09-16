import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-[16px] font-normal transition-[box-shadow,background-color,color] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:bg-inset disabled:text-copy/70 disabled:shadow-none",
  {
    variants: {
      variant: {
        filled:
          "bg-accent text-canvas shadow-soft-out hover:shadow-soft-hover active:shadow-soft-in",
        soft: "bg-canvas text-copy shadow-soft-out hover:shadow-soft-hover active:shadow-soft-in",
        ghost: "bg-transparent text-copy hover:underline",
        link: "text-copy hover:underline px-0",
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
