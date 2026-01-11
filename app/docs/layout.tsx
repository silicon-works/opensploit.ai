import type { Metadata } from "next";
import { DocsHeader } from "@/components/docs-header";
import { DocsSidebar } from "@/components/docs-sidebar";

export const metadata: Metadata = {
  title: {
    default: "Documentation",
    template: "%s | OpenSploit Docs",
  },
  description:
    "Learn how to use OpenSploit for penetration testing. Configuration, CLI commands, TUI usage, and security tool orchestration.",
  openGraph: {
    title: "OpenSploit Documentation",
    description:
      "Learn how to use OpenSploit for penetration testing. Configuration, CLI commands, TUI usage, and security tool orchestration.",
    type: "website",
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-page="docs">
      <DocsHeader />
      <div data-component="docs-layout">
        <DocsSidebar />
        <main data-component="docs-content">
          <article>{children}</article>
        </main>
      </div>
    </div>
  );
}
