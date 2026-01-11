import { searchData, SearchEntry } from "./search-data";

export interface SearchResult {
  title: string;
  href: string;
  excerpt: string;
  matchType: "title" | "heading" | "content";
}

function highlightMatch(text: string, query: string): string {
  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return text.slice(0, 100);

  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + query.length + 60);

  let excerpt = text.slice(start, end);
  if (start > 0) excerpt = "..." + excerpt;
  if (end < text.length) excerpt = excerpt + "...";

  return excerpt;
}

export function searchDocs(query: string): SearchResult[] {
  if (!query.trim() || query.length < 2) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];
  const seen = new Set<string>();

  // Search through all entries
  for (const entry of searchData) {
    if (seen.has(entry.href)) continue;

    // Check title match (highest priority)
    if (entry.title.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: entry.title,
        href: entry.href,
        excerpt: entry.headings.slice(0, 3).join(" · ") || entry.content.slice(0, 100),
        matchType: "title",
      });
      seen.add(entry.href);
      continue;
    }

    // Check heading match
    const matchedHeading = entry.headings.find((h) =>
      h.toLowerCase().includes(normalizedQuery)
    );
    if (matchedHeading) {
      results.push({
        title: entry.title,
        href: entry.href,
        excerpt: matchedHeading,
        matchType: "heading",
      });
      seen.add(entry.href);
      continue;
    }

    // Check content match
    if (entry.content.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: entry.title,
        href: entry.href,
        excerpt: highlightMatch(entry.content, normalizedQuery),
        matchType: "content",
      });
      seen.add(entry.href);
    }
  }

  // Sort: title matches first, then headings, then content
  results.sort((a, b) => {
    const priority = { title: 0, heading: 1, content: 2 };
    return priority[a.matchType] - priority[b.matchType];
  });

  return results.slice(0, 10);
}
