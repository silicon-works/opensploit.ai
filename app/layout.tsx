import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "OpenSploit - The Open Source Offensive Security Agent",
  description:
    "AI-powered autonomous penetration testing. Orchestrate 25+ security tools with intelligent automation. Local-first, privacy-focused, and open source.",
  keywords: [
    "penetration testing",
    "pentest",
    "security",
    "AI",
    "autonomous",
    "hacking",
    "offensive security",
    "nmap",
    "sqlmap",
    "open source",
  ],
  authors: [{ name: "Silicon Works" }],
  openGraph: {
    title: "OpenSploit - The Open Source Offensive Security Agent",
    description:
      "AI-powered autonomous penetration testing. Orchestrate 25+ security tools with intelligent automation.",
    url: "https://opensploit.ai",
    siteName: "OpenSploit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenSploit - The Open Source Offensive Security Agent",
    description:
      "AI-powered autonomous penetration testing. Orchestrate 25+ security tools with intelligent automation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body>{children}</body>
    </html>
  );
}
