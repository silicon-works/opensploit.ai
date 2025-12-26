import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OpenSploit - Autonomous Penetration Testing",
  description: "AI-powered security testing platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
