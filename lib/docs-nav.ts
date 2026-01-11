export interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
}

export const docsNav: NavItem[] = [
  // Core docs (no category header)
  {
    title: "Intro",
    href: "/docs",
  },
  {
    title: "Config",
    href: "/docs/config",
  },
  {
    title: "Providers",
    href: "/docs/providers",
  },
  {
    title: "Troubleshooting",
    href: "/docs/troubleshooting",
  },
  // Usage category
  {
    title: "Usage",
    items: [
      {
        title: "TUI",
        href: "/docs/tui",
      },
      {
        title: "CLI",
        href: "/docs/cli",
      },
      {
        title: "Zen",
        href: "/docs/zen",
      },
      {
        title: "Share",
        href: "/docs/share",
      },
    ],
  },
  // Configure category
  {
    title: "Configure",
    items: [
      {
        title: "Tools",
        href: "/docs/tools",
      },
      {
        title: "Rules",
        href: "/docs/rules",
      },
      {
        title: "Agents",
        href: "/docs/agents",
      },
      {
        title: "Models",
        href: "/docs/models",
      },
      {
        title: "Themes",
        href: "/docs/themes",
      },
      {
        title: "Keybinds",
        href: "/docs/keybinds",
      },
      {
        title: "Commands",
        href: "/docs/commands",
      },
      {
        title: "Permissions",
        href: "/docs/permissions",
      },
      {
        title: "MCP Servers",
        href: "/docs/mcp-servers",
      },
      {
        title: "Custom Tools",
        href: "/docs/custom-tools",
      },
    ],
  },
  // Security category
  {
    title: "Security",
    items: [
      {
        title: "Phases",
        href: "/docs/phases",
      },
      {
        title: "Security & Legal",
        href: "/docs/security",
      },
    ],
  },
  // Develop category
  {
    title: "Develop",
    items: [
      {
        title: "SDK",
        href: "/docs/sdk",
      },
      {
        title: "Server",
        href: "/docs/server",
      },
    ],
  },
];
