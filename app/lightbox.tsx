"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { asset } from "./assets";

export type LightboxImage = { src: string; alt: string; wide?: boolean };

const MIN_ZOOM = 1;
const MAX_ZOOM = 6;

type LightboxProps = {
  images: LightboxImage[];
  initial: number;
  onClose: () => void;
};

/**
 * Fullscreen viewer with zoom + pan + arrow navigation.
 * Uses one client-rendered overlay per instance, portalled onto document.body
 * only after mount (so SSR stays clean and there is no hydration mismatch).
 */
export default function Lightbox({ images, initial, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initial);
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);

  const drag = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);
  const pinch = useRef<{ dist: number; scale: number } | null>(null);
  const activePointers = useRef<Map<number, { x: number; y: number }>>(new Map());

  const reset = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  const zoomBy = useCallback((delta: number) => {
    setScale((s) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, s + delta));
      if (next === 1) {
        setTx(0);
        setTy(0);
      }
      return next;
    });
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + images.length) % images.length);
    },
    [images.length],
  );

  // Reset zoom whenever the active image changes.
  useEffect(() => {
    reset();
  }, [index, reset]);

  // Global key handlers + scroll lock while the lightbox is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          if (images.length > 1) go(1);
          break;
        case "ArrowLeft":
          if (images.length > 1) go(-1);
          break;
        case "+":
        case "=":
          zoomBy(0.5);
          break;
        case "-":
        case "_":
          zoomBy(-0.5);
          break;
        case "0":
          reset();
          break;
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [go, images.length, onClose, reset, zoomBy]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    zoomBy(-e.deltaY * 0.003);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.current.size === 2) {
      const pts = Array.from(activePointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      pinch.current = { dist, scale };
      drag.current = null;
    } else if (scale > 1) {
      drag.current = { x: e.clientX, y: e.clientY, tx, ty };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!activePointers.current.has(e.pointerId)) return;
    activePointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pinch.current && activePointers.current.size === 2) {
      const pts = Array.from(activePointers.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const factor = dist / pinch.current.dist;
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, pinch.current.scale * factor));
      setScale(next);
      if (next === 1) {
        setTx(0);
        setTy(0);
      }
    } else if (drag.current) {
      setTx(drag.current.tx + e.clientX - drag.current.x);
      setTy(drag.current.ty + e.clientY - drag.current.y);
    }
  };

  const endPointer = (e: React.PointerEvent) => {
    activePointers.current.delete(e.pointerId);
    if (activePointers.current.size < 2) pinch.current = null;
    if (activePointers.current.size === 0) drag.current = null;
  };

  const onDoubleClick = () => {
    if (scale > 1) reset();
    else zoomBy(1.5);
  };

  const img = images[index];
  const canPan = scale > 1;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div
        className="lightbox__stage"
        onClick={(e) => e.stopPropagation()}
        onWheel={onWheel}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(img.src)}
          alt={img.alt}
          draggable={false}
          onDoubleClick={onDoubleClick}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPointer}
          onPointerCancel={endPointer}
          onPointerLeave={endPointer}
          style={{
            transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
            cursor: canPan ? "grab" : "zoom-in",
            touchAction: "none",
          }}
        />
      </div>

      <div
        className="lightbox__toolbar"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <>
            <button
              type="button"
              className="lightbox__btn"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              ←
            </button>
            <span className="lightbox__count mono">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              className="lightbox__btn"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              →
            </button>
            <span className="lightbox__sep" aria-hidden />
          </>
        )}
        <button
          type="button"
          className="lightbox__btn"
          onClick={() => zoomBy(-0.5)}
          aria-label="Zoom out"
        >
          −
        </button>
        <button
          type="button"
          className="lightbox__btn lightbox__btn--reset mono"
          onClick={reset}
          aria-label="Reset zoom"
        >
          {Math.round(scale * 100)}%
        </button>
        <button
          type="button"
          className="lightbox__btn"
          onClick={() => zoomBy(0.5)}
          aria-label="Zoom in"
        >
          +
        </button>
        <span className="lightbox__sep" aria-hidden />
        <button
          type="button"
          className="lightbox__btn"
          onClick={onClose}
          aria-label="Close viewer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
