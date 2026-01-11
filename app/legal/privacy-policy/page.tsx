import { Header } from "@/components/header";
import { Legal } from "@/components/legal";

export default function PrivacyPolicyPage() {
  return (
    <main data-page="legal">
      <div data-component="container">
        <Header />
        <div data-component="legal-content">
          <h1>Privacy Policy</h1>
          <p data-slot="updated">Last updated: January 2026</p>

          <h2>Overview</h2>
          <p>
            OpenSploit is designed with privacy as a core principle. This policy
            explains how we handle data when you use OpenSploit.
          </p>

          <h2>Local-First Architecture</h2>
          <p>
            OpenSploit runs entirely on your local machine. Your targets, scan
            results, session data, and findings are stored locally and never
            transmitted to our servers.
          </p>
          <ul>
            <li>All security tool execution happens locally via Docker</li>
            <li>Session history is stored in ~/.opensploit/</li>
            <li>No telemetry or usage tracking is collected</li>
            <li>No analytics scripts on this website</li>
          </ul>

          <h2>LLM Provider Communication</h2>
          <p>
            When you use OpenSploit with an LLM provider (Anthropic, OpenAI,
            etc.), your prompts and tool outputs are sent to that provider. This
            communication is:
          </p>
          <ul>
            <li>Direct between your machine and the provider</li>
            <li>Subject to the provider&apos;s privacy policy</li>
            <li>Not routed through or stored by OpenSploit</li>
          </ul>
          <p>
            We recommend reviewing your chosen provider&apos;s data handling
            policies, especially regarding security-sensitive information.
          </p>

          <h2>Tool Registry</h2>
          <p>
            OpenSploit fetches a tool registry from opensploit.ai to discover
            available security tools. This request:
          </p>
          <ul>
            <li>Contains no personally identifiable information</li>
            <li>Does not include scan targets or results</li>
            <li>Is cached locally to minimize requests</li>
          </ul>

          <h2>Website Data</h2>
          <p>
            This website (opensploit.ai) does not use cookies, analytics, or
            tracking scripts. We do not collect any personal information through
            the website.
          </p>

          <h2>Security Disclosures</h2>
          <p>
            If you discover a security vulnerability in OpenSploit, please
            report it to security@opensploit.ai. We do not share reporter
            information without consent.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy as OpenSploit evolves. Significant changes
            will be announced in release notes.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a href="mailto:privacy@opensploit.ai">privacy@opensploit.ai</a>.
          </p>
        </div>
      </div>
      <Legal />
    </main>
  );
}
