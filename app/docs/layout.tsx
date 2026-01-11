import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-page="opensploit">
      <Header />
      <div data-component="docs-layout">
        <DocsSidebar />
        <main data-component="docs-content">
          <article>{children}</article>
        </main>
      </div>
      <Footer />
    </div>
  );
}
