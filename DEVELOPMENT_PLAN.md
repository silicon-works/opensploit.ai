# OpenSploit.ai Landing Page Development Plan

## Overview

Create a landing page for opensploit.ai that mirrors the opencode.ai design language but communicates OpenSploit's value proposition as an autonomous penetration testing platform.

**Tech Stack**: Next.js 15 + React 19 + CSS Custom Properties
**Hosting**: Vercel
**Design Reference**: opencode.ai (SolidJS Start)

---

## 1. Project Structure

```
opensploit.ai/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles + CSS tokens
│   └── api/
│       └── registry/route.ts   # Registry API (existing)
├── components/
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer links
│   ├── faq.tsx                 # Collapsible FAQ item
│   ├── install-tabs.tsx        # Installation method tabs
│   └── icons.tsx               # SVG icon components
├── assets/
│   ├── logo-light.svg          # OpenSploit logo (light mode)
│   ├── logo-dark.svg           # OpenSploit logo (dark mode)
│   ├── wordmark-light.svg      # OpenSploit wordmark (light mode)
│   └── wordmark-dark.svg       # OpenSploit wordmark (dark mode)
├── lib/
│   └── config.ts               # Site configuration
├── public/
│   └── (static assets)
└── DEVELOPMENT_PLAN.md         # This file
```

---

## 2. Design System

### 2.1 Color Tokens

Adapt opencode.ai's warm grayscale palette with **red accent** (from OpenSploit brand):

```css
/* Light Theme */
--color-background: hsl(0, 20%, 99%);           /* Off-white */
--color-background-weak: hsl(0, 8%, 97%);       /* Light gray */
--color-background-strong: hsl(0, 5%, 12%);     /* Near black */
--color-background-interactive: hsl(0, 70%, 45%); /* Brand red accent */

--color-text: hsl(0, 1%, 39%);                  /* Body text */
--color-text-weak: hsl(0, 1%, 60%);             /* Secondary text */
--color-text-strong: hsl(0, 5%, 12%);           /* Headings */
--color-text-inverted: hsl(0, 20%, 99%);        /* On dark bg */

--color-border: hsl(30, 2%, 81%);               /* Borders */
--color-border-weak: hsla(0, 100%, 3%, 0.12);   /* Subtle borders */

/* Dark Theme (via prefers-color-scheme) */
--color-background: hsl(0, 9%, 7%);             /* Near black */
--color-background-weak: hsl(0, 6%, 10%);       /* Dark gray */
--color-background-strong: hsl(0, 15%, 94%);    /* Off-white */
--color-background-interactive: hsl(0, 70%, 55%); /* Lighter red */

--color-text: hsl(0, 4%, 71%);                  /* Body text */
--color-text-strong: hsl(0, 15%, 94%);          /* Headings */
```

### 2.2 Typography

```css
--font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
--font-sans: var(--font-mono);  /* All monospace */

/* Sizes */
--font-size-sm: 0.8125rem;      /* 13px */
--font-size-md: 0.9375rem;      /* 15px */
--font-size-lg: 1.125rem;       /* 18px */
--font-size-hero: 2.375rem;     /* 38px */
--font-size-hero-mobile: 1.375rem; /* 22px */
```

### 2.3 Spacing

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */

--padding: 5rem;              /* Section horizontal padding */
--vertical-padding: 4rem;     /* Section vertical padding */

/* Mobile */
--padding-mobile: 1.5rem;
--vertical-padding-mobile: 3rem;
```

### 2.4 Breakpoints

```css
@media (max-width: 60rem) { /* Tablet */ }
@media (max-width: 40rem) { /* Mobile nav switch */ }
@media (max-width: 30rem) { /* Small phone */ }
```

---

## 3. Page Sections

### 3.1 Header
- Logo (switches light/dark)
- Navigation: GitHub, Docs (placeholder)
- Mobile hamburger menu
- Sticky positioning

### 3.2 Hero
- **Headline**: "The open source offensive security agent"
- **Subheadline**: "AI-powered penetration testing. Connect any LLM provider including Claude, GPT, Gemini, or run locally with Ollama."
- **Install tabs**: curl, npm, bun, brew (placeholder commands)
- Copy-to-clipboard functionality

### 3.3 Features ("What is OpenSploit?")
Six key capabilities with checkmarks:
1. **Phase-based methodology** - Reconnaissance, Enumeration, Exploitation, Post-Exploitation, Reporting
2. **25+ security tools** - nmap, sqlmap, ffuf, hydra, and more via MCP
3. **Intelligent tool discovery** - Tool Registry RAG finds the right tool for each task
4. **Local-first architecture** - Your targets and findings never leave your machine
5. **On-demand containers** - Tools download only when needed
6. **75+ LLM providers** - Local (Ollama) or cloud (Claude, GPT, Gemini, etc.)

### 3.4 Privacy Section
"OpenSploit runs entirely on your machine. Your targets, findings, and session data never leave your system unless you explicitly share them."

### 3.5 FAQ Section
8 questions:
1. What is OpenSploit?
2. How does it work?
3. Do I need security expertise?
4. What tools are included?
5. Is it legal to use?
6. Does it support local LLMs?
7. How much does it cost?
8. Is it open source?

### 3.6 Footer
- GitHub link
- Docs link (placeholder)
- Copyright: "© 2025 Silicon Works"

### 3.7 Legal Disclaimer
Small print about authorized use only.

---

## 4. Components

### 4.1 Header (`components/header.tsx`)
```tsx
Props: none
State: mobileMenuOpen
Features:
- Logo with dark mode switching
- Desktop nav links
- Mobile hamburger menu
- Sticky on scroll
```

### 4.2 InstallTabs (`components/install-tabs.tsx`)
```tsx
Props: none
State: activeTab, copied
Features:
- Tab switching (curl, npm, bun, brew)
- Command display
- Copy to clipboard with feedback
```

### 4.3 FAQ (`components/faq.tsx`)
```tsx
Props: { question: string, children: ReactNode }
State: isOpen
Features:
- Click to expand/collapse
- Plus/minus icon toggle
- Smooth animation
```

### 4.4 Footer (`components/footer.tsx`)
```tsx
Props: none
Features:
- Links row
- Copyright
```

---

## 5. Assets to Copy

From `../opensploit/packages/console/app/src/asset/brand/`:
- `opensploit-logo-light.svg` → `assets/logo-light.svg`
- `opensploit-logo-dark.svg` → `assets/logo-dark.svg`
- `opensploit-wordmark-light.svg` → `assets/wordmark-light.svg`
- `opensploit-wordmark-dark.svg` → `assets/wordmark-dark.svg`

---

## 6. Implementation Order

### Phase 1: Foundation
1. Set up CSS tokens in `globals.css` (colors, fonts, spacing)
2. Install IBM Plex Mono font
3. Copy brand assets to project
4. Update `layout.tsx` with fonts and global styles

### Phase 2: Components
5. Create `components/icons.tsx` (copy, check, menu, plus, minus icons)
6. Create `components/header.tsx`
7. Create `components/footer.tsx`
8. Create `components/faq.tsx`
9. Create `components/install-tabs.tsx`

### Phase 3: Landing Page
10. Create `lib/config.ts` with site configuration
11. Build `page.tsx` with all sections
12. Style each section following opencode.ai patterns

### Phase 4: Polish
13. Test responsive design at all breakpoints
14. Test dark mode
15. Verify all links and interactions
16. Add meta tags and OG images

---

## 7. Content

### Hero Headline
"The open source offensive security agent"

### Hero Subheadline
"AI-powered penetration testing. Free models included or connect any provider including Claude, GPT, Gemini, and local models via Ollama."

### Install Commands (Placeholders)
```bash
curl -fsSL https://opensploit.ai/install | bash
npm install -g opensploit
bun install -g opensploit
brew install opensploit
```

### FAQ Answers

**Q: What is OpenSploit?**
A: OpenSploit is an AI-powered autonomous penetration testing agent. It orchestrates 25+ security tools through intelligent automation, guiding you through reconnaissance, enumeration, exploitation, and reporting phases.

**Q: How does it work?**
A: You describe your target and objectives in natural language. OpenSploit's AI agent selects appropriate tools, executes them in Docker containers, analyzes results, and adapts its strategy based on findings.

**Q: Do I need security expertise?**
A: OpenSploit lowers the barrier to security testing, but understanding the basics helps. It's designed for security practitioners, developers learning security, and students in cybersecurity programs.

**Q: What tools are included?**
A: 25+ tools including nmap (scanning), sqlmap (SQL injection), ffuf (fuzzing), hydra (brute force), nuclei (vulnerability scanning), metasploit (exploitation), and more. Tools download on-demand when first used.

**Q: Is it legal to use?**
A: OpenSploit is for authorized security testing only. You must have explicit written permission to test any target. Unauthorized testing is illegal. The tool includes safeguards against scanning forbidden targets.

**Q: Does it support local LLMs?**
A: Yes. OpenSploit inherits 75+ LLM provider support including Ollama for fully local, offline operation. You can also use Claude, GPT, Gemini, or any compatible API.

**Q: How much does it cost?**
A: OpenSploit is free and open source. You only pay for LLM API usage if you choose a cloud provider. Local models via Ollama are completely free.

**Q: Is it open source?**
A: Yes. OpenSploit is MIT licensed and available on GitHub. Contributions are welcome.

---

## 8. Configuration

### `lib/config.ts`
```ts
export const config = {
  name: "OpenSploit",
  tagline: "The open source offensive security agent",
  description: "AI-powered penetration testing platform",
  github: {
    url: "https://github.com/silicon-works/opensploit",
  },
  docs: {
    url: "/docs", // Placeholder
  },
  install: {
    curl: "curl -fsSL https://opensploit.ai/install | bash",
    npm: "npm install -g opensploit",
    bun: "bun install -g opensploit",
    brew: "brew install opensploit",
  },
};
```

---

## 9. Deferred (Post-MVP)

- [ ] Video demo section
- [ ] Stats section (tools, providers, etc.)
- [ ] Email signup / newsletter
- [ ] Enterprise / premium tier promotion
- [ ] Discord and Twitter/X links
- [ ] Documentation site integration
- [ ] Blog
- [ ] Changelog

---

## 10. Notes

- All styling uses `data-component` and `data-slot` attributes for scoped CSS, matching opencode.ai patterns
- Dark mode is automatic via `prefers-color-scheme`, no toggle needed
- Mobile-first responsive design
- Copy-to-clipboard uses navigator.clipboard API with visual feedback
- FAQ uses native HTML `<details>` element (or custom component for animation)
