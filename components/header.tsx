"use client";

import { useState } from "react";
import Link from "next/link";
import { config } from "@/lib/config";
import { IconMenu, IconClose, IconGitHub } from "./icons";
import { LogoLight, LogoDark } from "./logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header data-component="header">
        <div data-slot="inner">
          <Link href="/" data-slot="logo">
            <LogoLight />
            <LogoDark />
          </Link>

          <nav data-slot="nav">
            <a
              href={config.github.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGitHub style={{ width: 18, height: 18 }} />
              GitHub
            </a>
            <a href={config.docs.url}>Docs</a>
          </nav>

          <button
            data-slot="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </header>

      <nav data-component="mobile-menu" data-open={mobileMenuOpen}>
        <a
          href={config.github.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
        >
          GitHub
        </a>
        <a href={config.docs.url} onClick={() => setMobileMenuOpen(false)}>
          Docs
        </a>
      </nav>
    </>
  );
}
