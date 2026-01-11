import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://opensploit.ai";

  // Static pages
  const staticPages = [
    "",
    "/download",
    "/brand",
    "/legal/privacy-policy",
    "/legal/terms-of-service",
  ];

  // Documentation pages
  const docPages = [
    "/docs",
    "/docs/config",
    "/docs/providers",
    "/docs/tui",
    "/docs/cli",
    "/docs/tools",
    "/docs/phases",
    "/docs/agents",
    "/docs/security",
    "/docs/commands",
    "/docs/keybinds",
    "/docs/themes",
    "/docs/mcp-servers",
    "/docs/permissions",
    "/docs/custom-tools",
    "/docs/troubleshooting",
    "/docs/rules",
    "/docs/models",
    "/docs/share",
    "/docs/zen",
    "/docs/sdk",
    "/docs/server",
  ];

  const allPages = [...staticPages, ...docPages];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/docs") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/docs" ? 0.9 : 0.7,
  }));
}
