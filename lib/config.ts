export const config = {
  name: "OpenSploit",
  tagline: "The open source offensive security agent",
  description:
    "AI-powered penetration testing. Free models included or connect any provider including Claude, GPT, Gemini, and local models via Ollama.",
  github: {
    url: "https://github.com/silicon-works/opensploit",
  },
  docs: {
    url: "/docs",
  },
  install: {
    curl: "curl -fsSL https://opensploit.ai/install | bash",
    npm: "npm install -g opensploit",
    bun: "bun install -g opensploit",
    brew: "brew install opensploit",
  },
} as const;

export const features = [
  {
    title: "Phase-based methodology",
    description:
      "Systematic approach through Reconnaissance, Enumeration, Exploitation, Post-Exploitation, and Reporting",
  },
  {
    title: "25+ security tools",
    description:
      "nmap, sqlmap, ffuf, hydra, nuclei, metasploit, and more via MCP containers",
  },
  {
    title: "Intelligent tool discovery",
    description:
      "Tool Registry RAG automatically finds the right tool for each task",
  },
  {
    title: "Local-first architecture",
    description:
      "Your targets, findings, and session data never leave your machine",
  },
  {
    title: "On-demand containers",
    description:
      "Tools download only when needed, minimizing disk usage",
  },
  {
    title: "75+ LLM providers",
    description:
      "Run locally with Ollama or connect Claude, GPT, Gemini, and more",
  },
] as const;

export const faqItems = [
  {
    question: "What is OpenSploit?",
    answer:
      "OpenSploit is an AI-powered autonomous penetration testing agent. It orchestrates 25+ security tools through intelligent automation, guiding you through reconnaissance, enumeration, exploitation, and reporting phases.",
  },
  {
    question: "How does it work?",
    answer:
      "You describe your target and objectives in natural language. OpenSploit's AI agent selects appropriate tools, executes them in Docker containers, analyzes results, and adapts its strategy based on findings.",
  },
  {
    question: "Do I need security expertise?",
    answer:
      "OpenSploit lowers the barrier to security testing, but understanding the basics helps. It's designed for security practitioners, developers learning security, and students in cybersecurity programs.",
  },
  {
    question: "What tools are included?",
    answer:
      "25+ tools including nmap (scanning), sqlmap (SQL injection), ffuf (fuzzing), hydra (brute force), nuclei (vulnerability scanning), metasploit (exploitation), and more. Tools download on-demand when first used.",
  },
  {
    question: "Is it legal to use?",
    answer:
      "OpenSploit is for authorized security testing only. You must have explicit written permission to test any target. Unauthorized testing is illegal. The tool includes safeguards against scanning forbidden targets.",
  },
  {
    question: "Does it support local LLMs?",
    answer:
      "Yes. OpenSploit supports 75+ LLM providers including Ollama for fully local, offline operation. You can also use Claude, GPT, Gemini, or any compatible API.",
  },
  {
    question: "How much does it cost?",
    answer:
      "OpenSploit is free and open source. You only pay for LLM API usage if you choose a cloud provider. Local models via Ollama are completely free.",
  },
  {
    question: "Is it open source?",
    answer:
      "Yes. OpenSploit is MIT licensed and available on GitHub. Contributions are welcome.",
  },
] as const;
