"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Scroll to the top of the document whenever the route changes.
 * If the destination URL includes a hash (in-page anchor like /#contact),
 * the browser's own hash-scroll behaviour is left in place.
 */
export default function ScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
