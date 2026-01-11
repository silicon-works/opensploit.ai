import { DocsHeader } from "@/components/docs-header";
import { DocsSidebar } from "@/components/docs-sidebar";

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
