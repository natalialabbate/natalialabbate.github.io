"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  label?: string;
  tag?: string;
};

export default function LoadingScreen({
  label = "Natalia L'Abbate",
  tag = "Product & AI Systems",
}: Props) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setVisible(true);
    setFadeOut(false);
    setProgress(0);

    const startTime = performance.now();
    const duration = 850;

    let frameId: number;
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);
      if (pct < 100) {
        frameId = requestAnimationFrame(updateProgress);
      }
    };
    frameId = requestAnimationFrame(updateProgress);

    const t1 = setTimeout(() => setFadeOut(true), 1000);
    const t2 = setTimeout(() => setVisible(false), 1700);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className={`loading-screen${fadeOut ? " loading-screen--out" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="loading-screen__ambient" aria-hidden />

      <div className="loading-card">
        {/* Futuristic SVG Aperture with glowing Teal accents */}
        <div className="loading-aperture">
          <svg
            className="loading-aperture__svg"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="60%" stopColor="#0d9488" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <filter id="tealGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Subtle static guide ring */}
            <circle
              className="loading-aperture__track"
              cx="50"
              cy="50"
              r="44"
              stroke="var(--line-strong)"
              strokeWidth="1"
            />

            {/* Outer segmented tech ring */}
            <circle
              className="loading-aperture__outer"
              cx="50"
              cy="50"
              r="44"
              stroke="url(#tealGrad)"
              strokeWidth="1.5"
              strokeDasharray="8 16 32 12 20 24"
              strokeLinecap="round"
            />

            {/* Inner counter-rotating ring with luminous teal glow */}
            <circle
              className="loading-aperture__inner"
              cx="50"
              cy="50"
              r="35"
              stroke="url(#tealGrad)"
              strokeWidth="2"
              strokeDasharray="42 160"
              strokeLinecap="round"
              filter="url(#tealGlowFilter)"
            />

            {/* Center radar pulse backing */}
            <circle
              className="loading-aperture__core-pulse"
              cx="50"
              cy="50"
              r="24"
              fill="var(--teal-bg)"
              stroke="var(--teal-dim)"
              strokeWidth="1"
            />
          </svg>

          {/* Central Monogram */}
          <div className="loading-aperture__monogram">
            <span className="loading-aperture__letter">N</span>
            <span className="loading-aperture__dot" />
            <span className="loading-aperture__letter">L</span>
          </div>
        </div>

        {/* Progress & Brand Typography */}
        <div className="loading-meta">
          <div className="loading-meta__top">
            <span className="loading-meta__label">{label}</span>
            <span className="loading-meta__count mono">{progress}%</span>
          </div>

          <div className="loading-meta__bar">
            <div
              className="loading-meta__bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="loading-meta__tag mono">{tag}</div>
        </div>
      </div>
    </div>
  );
}

