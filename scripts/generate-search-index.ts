import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

interface SearchEntry {
  title: string;
  href: string;
  content: string;
  headings: string[];
}

function extractContent(mdx: string): { title: string; content: string; headings: string[] } {
  const lines = mdx.split("\n");
  let title = "";
  const headings: string[] = [];
  const contentLines: string[] = [];

  for (const line of lines) {
    // Extract title (first h1)
    if (!title && line.startsWith("# ")) {
      title = line.replace(/^#\s+/, "").trim();
      continue;
    }

    // Extract headings
    const headingMatch = line.match(/^#{2,4}\s+(.+)$/);
    if (headingMatch) {
      headings.push(headingMatch[1].trim());
    }

    // Skip code blocks and frontmatter
    if (line.startsWith("```") || line.startsWith("---")) {
      continue;
    }

    // Clean markdown syntax and add to content
    const cleaned = line
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Remove links, keep text
      .replace(/[*_`#]/g, "") // Remove formatting
      .replace(/\|/g, " ") // Replace table pipes
      .trim();

    if (cleaned) {
      contentLines.push(cleaned);
    }
  }

  return {
    title,
    content: contentLines.join(" ").slice(0, 2000), // Limit content size
    headings,
  };
}

function getDocsPages(dir: string, basePath = "/docs"): SearchEntry[] {
  const entries: SearchEntry[] = [];

  const items = readdirSync(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      // Check for page.mdx in subdirectory
      const pagePath = join(fullPath, "page.mdx");
      try {
        const content = readFileSync(pagePath, "utf-8");
        const { title, content: textContent, headings } = extractContent(content);

        entries.push({
          title: title || item,
          href: `${basePath}/${item}`,
          content: textContent,
          headings,
        });
      } catch {
        // No page.mdx, recurse into directory
        entries.push(...getDocsPages(fullPath, `${basePath}/${item}`));
      }
    } else if (item === "page.mdx" && basePath === "/docs") {
      // Root docs page
      const content = readFileSync(fullPath, "utf-8");
      const { title, content: textContent, headings } = extractContent(content);

      entries.push({
        title: title || "Introduction",
        href: "/docs",
        content: textContent,
        headings,
      });
    }
  }

  return entries;
}

// Generate the index
const docsDir = join(process.cwd(), "app/docs");
const searchIndex = getDocsPages(docsDir);

// Write as TypeScript module
const output = `// Auto-generated search index - do not edit
export interface SearchEntry {
  title: string;
  href: string;
  content: string;
  headings: string[];
}

export const searchData: SearchEntry[] = ${JSON.stringify(searchIndex, null, 2)};
`;

writeFileSync(join(process.cwd(), "lib/search-data.ts"), output);
console.log(`Generated search index with ${searchIndex.length} entries`);
