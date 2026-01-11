"use client";

import { useState } from "react";
import { config } from "@/lib/config";
import { IconCopy, IconCheck } from "./icons";

const tabs = [
  { id: "curl", label: "curl", command: config.install.curl },
  { id: "npm", label: "npm", command: config.install.npm },
  { id: "bun", label: "bun", command: config.install.bun },
  { id: "brew", label: "brew", command: config.install.brew },
] as const;

export function InstallTabs() {
  const [activeTab, setActiveTab] = useState<string>("curl");
  const [copied, setCopied] = useState(false);

  const activeCommand = tabs.find((t) => t.id === activeTab)?.command ?? "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div data-component="install-tabs">
      <div data-slot="tabs" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            data-slot="tab"
            data-active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div data-slot="panel" role="tabpanel">
        <code data-slot="command">{activeCommand}</code>
        <button
          data-slot="copy-btn"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied ? <IconCheck /> : <IconCopy />}
        </button>
      </div>
    </div>
  );
}
