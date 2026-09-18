"use client";

import Image from "next/image";
import { useState } from "react";

export function ZoomMedia({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <button
      type="button"
      className={`group relative block overflow-hidden ${className}`}
      onClick={() => setZoomed((value) => !value)}
      aria-label={zoomed ? "Zoom out image" : "Zoom image"}
    >
      <Image
        src={src}
        alt={alt}
        width={1800}
        height={1012}
        priority={priority}
        className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
          zoomed ? "scale-125" : "scale-100"
        }`}
      />
    </button>
  );
}
