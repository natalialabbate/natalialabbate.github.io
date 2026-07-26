"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Props = { label?: string };

export default function LoadingScreen({ label = "Natalia L'Abbate" }: Props) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setVisible(true);
    setFadeOut(false);
    const t1 = setTimeout(() => setFadeOut(true), 900);
    const t2 = setTimeout(() => setVisible(false), 1600);
    return () => {
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
      <div className="loading-mark">
        <div className="loading-mark__ring" />
        <div className="loading-mark__label">{label}</div>
      </div>
    </div>
  );
}
