import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./loading-screen";
import Animations from "./animations";
import Analytics from "./analytics";
import ScrollTop from "./scroll-top";

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://natalialabbate.com";
const SITE_NAME = "Natalia L'Abbate";
const TITLE = "Natalia L'Abbate · Senior Product Designer";
const DESCRIPTION =
  "Senior Product Designer based in São Paulo, working with teams worldwide. 6+ years shipping high-impact products across Healthcare, AI, Real Estate, Financial Services, Retail, and Transportation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Natalia L'Abbate",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Natalia L'Abbate",
    "Natalia Labbate",
    "Product Designer",
    "Senior Product Designer",
    "UX Designer",
    "UI Designer",
    "Product Design",
    "Design Systems",
    "Design Strategy",
    "User Research",
    "Design Portfolio",
    "São Paulo",
    "Brazil",
    "Healthcare Design",
    "AI Design",
    "FinTech Design",
    "Real Estate Design",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  category: "design",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Natalia L'Abbate",
  alternateName: "Natalia Labbate",
  jobTitle: "Senior Product Designer",
  url: SITE_URL,
  email: "natalia.chiota@gmail.com",
  telephone: "+55-11-98193-4182",
  description: DESCRIPTION,
  worksFor: { "@type": "Organization", name: "Independent" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressCountry: "BR",
  },
  knowsAbout: [
    "Product Design",
    "User Experience",
    "User Interface",
    "Design Systems",
    "Design Strategy",
    "User Research",
    "Prototyping",
    "Accessibility",
  ],
  sameAs: [
    "https://www.linkedin.com/in/natalialabbate/",
    "https://wa.me/5511981934182",
  ],
};

const themeInitScript = `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const t = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', t);
  } catch (_) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={interTight.variable}>
        <ScrollTop />
        <LoadingScreen />
        <Animations />
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
