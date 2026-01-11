"use client";

import { useState, useRef } from "react";
import { IconCopy, IconCheck } from "./icons";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (!preRef.current) return;

    const code = preRef.current.textContent || "";
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div data-component="code-block">
      <button
        data-slot="copy-button"
        onClick={handleCopy}
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? (
          <IconCheck className="icon-check" />
        ) : (
          <IconCopy className="icon-copy" />
        )}
      </button>
      <pre ref={preRef} className={className}>
        {children}
      </pre>
    </div>
  );
}

// For inline code (not in a pre block)
export function InlineCode({ children }: { children: React.ReactNode }) {
  return <code>{children}</code>;
}
