import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#141111" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://opensploit.ai"),
  title: {
    default: "OpenSploit - The Open Source Offensive Security Agent",
    template: "%s | OpenSploit",
  },
  description:
    "AI-powered autonomous penetration testing. Orchestrate 25+ security tools with intelligent automation. Local-first, privacy-focused, and open source.",
  keywords: [
    "penetration testing",
    "pentest",
    "security testing",
    "AI security",
    "autonomous hacking",
    "offensive security",
    "vulnerability scanner",
    "nmap",
    "sqlmap",
    "metasploit",
    "open source security",
    "cybersecurity",
    "ethical hacking",
  ],
  authors: [{ name: "Silicon Works", url: "https://opensploit.ai" }],
  creator: "Silicon Works",
  publisher: "Silicon Works",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opensploit.ai",
    siteName: "OpenSploit",
    title: "OpenSploit - The Open Source Offensive Security Agent",
    description:
      "AI-powered autonomous penetration testing. Orchestrate 25+ security tools with intelligent automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenSploit - AI-powered penetration testing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenSploit - The Open Source Offensive Security Agent",
    description:
      "AI-powered autonomous penetration testing. Orchestrate 25+ security tools with intelligent automation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://opensploit.ai",
  },
  category: "technology",
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "OpenSploit",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Linux, macOS, Windows",
  description:
    "AI-powered autonomous penetration testing agent that orchestrates 25+ security tools with intelligent automation.",
  url: "https://opensploit.ai",
  downloadUrl: "https://opensploit.ai/download",
  softwareVersion: "0.1.0",
  author: {
    "@type": "Organization",
    name: "Silicon Works",
    url: "https://opensploit.ai",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "AI-powered penetration testing",
    "25+ security tools orchestration",
    "Local-first architecture",
    "75+ LLM provider support",
    "Phase-based methodology",
    "Automated reporting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
