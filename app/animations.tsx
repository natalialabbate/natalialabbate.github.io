"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Animations() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(".reveal", { opacity: 1, y: 0, clearProps: "all" });
      return;
    }

    // Opt-in to the hidden-first state now that we know JS is running.
    document.documentElement.classList.add("has-anim");

    const ease = "power3.out";
    const triggers: ScrollTrigger[] = [];

    ScrollTrigger.batch(".reveal", {
      start: "top 88%",
      onEnter: (els) =>
        gsap.to(els, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease,
          overwrite: true,
        }),
    }).forEach((t) => triggers.push(t));

    ScrollTrigger.batch(".section-title", {
      start: "top 85%",
      onEnter: (els) =>
        gsap.fromTo(
          els,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease, stagger: 0.1, overwrite: true },
        ),
    }).forEach((t) => triggers.push(t));

    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    // Safety net: if any reveal is still hidden after the page settles,
    // force it visible via inline styles (no clearProps — otherwise the
    // has-anim CSS rule would immediately re-hide it).
    const safety = window.setTimeout(() => {
      gsap.set(".reveal", { opacity: 1, y: 0 });
    }, 2000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(safety);
      triggers.forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
