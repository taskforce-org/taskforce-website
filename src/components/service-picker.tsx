"use client";

import { useCallback, useState } from "react";

import { Reveal } from "@/components/reveal";
import { ServiceModal } from "@/components/service-modal";
import { Surface } from "@/components/surface";
import { serviceLines, type ServiceLine } from "@/lib/services";

function isFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function ServiceTrigger({
  service,
  variant,
  onOpen,
}: {
  service: ServiceLine;
  variant: "card" | "name";
  onOpen: (slug: string) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={
        variant === "card"
          ? "h-full w-full cursor-pointer text-left"
          : "cursor-pointer text-left text-[18px] leading-[1.4] text-copy underline-offset-4 hover:underline"
      }
      onPointerEnter={() => {
        if (isFinePointer()) {
          onOpen(service.slug);
        }
      }}
      onClick={(event) => {
        event.stopPropagation();
        onOpen(service.slug);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(service.slug);
        }
      }}
    >
      {variant === "card" ? (
        <Surface>
          <span className="text-[20px] font-medium text-copy">{service.label}</span>
          <span className="mt-3 text-[16px] leading-[1.5] text-copy">
            {service.blurb}
          </span>
          <span className="mt-auto pt-6 text-[15px] text-copy opacity-40 translate-y-0.5 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Learn more
          </span>
        </Surface>
      ) : (
        service.label
      )}
    </div>
  );
}

export function ServicePicker({
  variant,
  heading,
}: {
  variant: "card" | "name";
  heading?: string;
}) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const open = useCallback((slug: string) => setOpenSlug(slug), []);
  const close = useCallback(() => setOpenSlug(null), []);
  const service = serviceLines.find((line) => line.slug === openSlug);

  return (
    <div data-service-open={openSlug ?? ""}>
      {variant === "card" ? (
        <ul className="mt-10 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLines.map((line, index) => (
            <li key={line.slug} className="h-full">
              <Reveal delay={index * 0.05} className="h-full">
                <ServiceTrigger service={line} variant="card" onOpen={open} />
              </Reveal>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          {heading ? (
            <h2 className="text-[26px] leading-[1.18] tracking-[-0.23px] text-copy">
              {heading}
            </h2>
          ) : null}
          <ul className="mt-6 flex flex-col gap-3">
            {serviceLines.map((line) => (
              <li key={line.slug}>
                <ServiceTrigger service={line} variant="name" onOpen={open} />
              </li>
            ))}
          </ul>
        </div>
      )}
      {service ? (
        <ServiceModal
          service={service}
          ctaMode={variant === "card" ? "link" : "inplace"}
          onClose={close}
        />
      ) : null}
    </div>
  );
}
