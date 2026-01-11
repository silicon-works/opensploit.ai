import { ReactNode } from "react";

interface CalloutProps {
  type?: "note" | "tip" | "warning" | "danger";
  title?: string;
  children: ReactNode;
}

export function Callout({ type = "note", title, children }: CalloutProps) {
  const defaultTitles: Record<string, string> = {
    note: "Note",
    tip: "Tip",
    warning: "Warning",
    danger: "Danger",
  };

  return (
    <div data-component="callout" data-type={type}>
      <div data-slot="header">
        <span data-slot="title">{title || defaultTitles[type]}</span>
      </div>
      <div data-slot="content">{children}</div>
    </div>
  );
}

export function Note({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="note" title={title}>{children}</Callout>;
}

export function Tip({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="tip" title={title}>{children}</Callout>;
}

export function Warning({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="warning" title={title}>{children}</Callout>;
}

export function Danger({ children, title }: { children: ReactNode; title?: string }) {
  return <Callout type="danger" title={title}>{children}</Callout>;
}
