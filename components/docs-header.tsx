"use client";

import Link from "next/link";
import { config } from "@/lib/config";
import { IconGitHub, IconSearch } from "./icons";
import { LogoLight, LogoDark } from "./logo";
import { SearchModal, useSearchModal } from "./search-modal";

export function DocsHeader() {
  const search = useSearchModal();

  return (
    <>
      <header data-component="docs-header">
        <div data-slot="inner">
          <Link href="/" data-slot="logo">
            <LogoLight />
            <LogoDark />
          </Link>

          <div data-slot="search">
            <button data-slot="search-button" onClick={search.open}>
              <IconSearch />
              <span>Search docs...</span>
              <kbd>⌘K</kbd>
            </button>
          </div>

          <nav data-slot="nav">
            <Link href="/">Home</Link>
            <a
              href={config.github.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGitHub style={{ width: 20, height: 20 }} />
            </a>
          </nav>
        </div>
      </header>

      <SearchModal isOpen={search.isOpen} onClose={search.close} />
    </>
  );
}
