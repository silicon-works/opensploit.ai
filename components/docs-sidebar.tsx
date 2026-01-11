"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/lib/docs-nav";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside data-component="docs-sidebar">
      <nav>
        <ul>
          {docsNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                data-active={pathname === item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
