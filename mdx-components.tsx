import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/code-block";
import { Note, Tip, Warning, Danger, Callout } from "@/components/callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: ({ children, ...props }) => {
      return <CodeBlock {...props}>{children}</CodeBlock>;
    },
    Note,
    Tip,
    Warning,
    Danger,
    Callout,
  };
}
