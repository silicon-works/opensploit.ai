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
    default: "OpenSploit - Autonomous Penetration Testing Platform",
    template: "%s | OpenSploit",
  },
  description:
    "AI-powered penetration testing that orchestrates 25+ security tools. Local-first architecture for privacy. Open source and free.",
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
    title: "OpenSploit - Autonomous Penetration Testing Platform",
    description:
      "AI-powered penetration testing that orchestrates 25+ security tools. Local-first architecture for privacy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenSploit - Autonomous Penetration Testing Platform",
    description:
      "AI-powered penetration testing that orchestrates 25+ security tools. Local-first architecture for privacy.",
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
    "Local-first autonomous penetration testing platform. AI-powered security testing that orchestrates 25+ tools via MCP containers.",
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
    "Autonomous penetration testing",
    "25+ security tools via MCP",
    "Local-first architecture",
    "75+ LLM provider support",
    "Phase-based methodology (Recon, Enum, Exploit, Post-Exploit, Report)",
    "On-demand tool containers",
    "Tool Registry RAG for intelligent tool selection",
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
