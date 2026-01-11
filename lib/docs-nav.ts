export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

export const docsNav: NavItem[] = [
  {
    title: "Getting Started",
    href: "/docs",
  },
  {
    title: "Configuration",
    href: "/docs/config",
  },
  {
    title: "Providers",
    href: "/docs/providers",
  },
  {
    title: "Tools",
    href: "/docs/tools",
  },
  {
    title: "Phases",
    href: "/docs/phases",
  },
  {
    title: "Agents",
    href: "/docs/agents",
  },
  {
    title: "CLI",
    href: "/docs/cli",
  },
  {
    title: "Security",
    href: "/docs/security",
  },
];
