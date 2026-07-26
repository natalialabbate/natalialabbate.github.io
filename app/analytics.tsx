"use client";

/**
 * Analytics placeholder — wire GA4, Plausible, or Umami here at the end.
 * Set NEXT_PUBLIC_ANALYTICS_ID at build time to enable.
 *
 * Example (GA4):
 *   <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
 */

import Script from "next/script";

export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
