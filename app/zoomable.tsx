"use client";

import { useState } from "react";
import Lightbox, { type LightboxImage } from "./lightbox";
import { asset } from "./assets";

/**
 * Wraps a single image with a zoom-in cursor and opens the fullscreen
 * lightbox on click. Used for the case hero image.
 */
export function ZoomableHero({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="case-hero-media case-hero-media--zoom"
        onClick={() => setOpen(true)}
        aria-label={`Open image: ${alt}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(src)} alt={alt} loading="eager" decoding="async" />
      </button>
      {open && (
        <Lightbox images={[{ src, alt }]} initial={0} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

/**
 * Renders the gallery and opens the lightbox at the clicked index,
 * with prev/next navigation across all gallery items.
 *
 * `layout="grid"` (default) is a 2-column responsive grid.
 * `layout="stack"` renders each image full-width in a vertical column —
 * better for galleries with varied image dimensions.
 */
export function ZoomableGallery({
  images,
  layout = "grid",
}: {
  images: LightboxImage[];
  layout?: "grid" | "stack";
}) {
  const [openIndex, setOpen] = useState<number | null>(null);
  const container =
    layout === "stack" ? "case-gallery-stack" : "case-gallery-grid";
  return (
    <>
      <div className={container}>
        {images.map((img, i) => (
          <figure
            key={i}
            className={`case-gallery__item${
              layout === "grid" && img.wide ? " case-gallery__item--wide" : ""
            }`}
          >
            <button
              type="button"
              className="case-gallery__zoom"
              onClick={() => setOpen(i)}
              aria-label={`Open image ${i + 1}: ${img.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(img.src)}
                alt={img.alt}
                loading="lazy"
                decoding="async"
              />
            </button>
          </figure>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox
          images={images}
          initial={openIndex}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
