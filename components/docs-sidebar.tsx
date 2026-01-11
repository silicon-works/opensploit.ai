"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav, NavItem } from "@/lib/docs-nav";

function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  if (!item.href) return null;

  return (
    <li>
      <Link href={item.href} data-active={pathname === item.href}>
        {item.title}
      </Link>
    </li>
  );
}

function NavCategory({ item, pathname }: { item: NavItem; pathname: string }) {
  if (!item.items) return null;

  return (
    <li data-slot="category">
      <span data-slot="category-title">{item.title}</span>
      <ul>
        {item.items.map((subItem) => (
          <NavLink key={subItem.href} item={subItem} pathname={pathname} />
        ))}
      </ul>
    </li>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside data-component="docs-sidebar">
      <nav>
        <ul>
          {docsNav.map((item, index) =>
            item.items ? (
              <NavCategory key={item.title} item={item} pathname={pathname} />
            ) : (
              <NavLink key={item.href || index} item={item} pathname={pathname} />
            )
          )}
        </ul>
      </nav>
    </aside>
  );
}
