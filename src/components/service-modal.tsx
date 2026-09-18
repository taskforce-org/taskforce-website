"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/button";
import { Surface } from "@/components/surface";
import { applyServiceToInquiry } from "@/lib/apply-service";
import type { ServiceLine } from "@/lib/services";
import { siteCta } from "@/lib/site-cta";

export function ServiceModal({
  service,
  ctaMode,
  onClose,
}: {
  service: ServiceLine;
  ctaMode: "link" | "inplace";
  onClose: () => void;
}) {
  const [backdropLive, setBackdropLive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setBackdropLive(false);

    function onMove() {
      setBackdropLive(true);
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("pointermove", onMove, { once: true });
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, service.slug]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-copy/20 px-6 py-10 ${
        backdropLive ? "" : "pointer-events-none"
      }`}
      onClick={() => {
        if (backdropLive) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="pointer-events-auto max-h-full w-full max-w-2xl overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <Surface className="p-10">
          <h2
            id="service-modal-title"
            className="text-[26px] leading-[1.18] tracking-[-0.23px] text-copy"
          >
            {service.label}
          </h2>
          <p className="mt-6 text-[16px] leading-[1.5] text-copy">{service.scope}</p>
          <p className="mt-4 text-[16px] leading-[1.5] text-copy">
            {service.process}
          </p>
          <p className="mt-4 text-[16px] leading-[1.5] text-copy">{service.example}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {ctaMode === "link" ? (
              <Button asChild>
                <Link href={`/contact?service=${service.slug}#inquire`}>
                  {siteCta.label}
                </Link>
              </Button>
            ) : (
              <Button
                type="button"
                onClick={() => {
                  applyServiceToInquiry(service.slug);
                  onClose();
                }}
              >
                {siteCta.label}
              </Button>
            )}
            <Button type="button" variant="soft" onClick={onClose}>
              Close
            </Button>
          </div>
        </Surface>
      </div>
    </div>,
    document.body,
  );
}
