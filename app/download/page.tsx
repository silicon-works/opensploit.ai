import { Header } from "@/components/header";
import { Legal } from "@/components/legal";

export default function DownloadPage() {
  return (
    <main data-page="download">
      <div data-component="container">
        <Header />
        <div data-component="download-content">
          <h1>Download</h1>
          <p data-slot="subtitle">
            Install OpenSploit on your system
          </p>

          <div data-slot="install-options">
            <div data-slot="install-card">
              <h3>macOS / Linux</h3>
              <p>Install via curl (recommended)</p>
              <pre>
                <code>curl -fsSL https://opensploit.ai/install.sh | sh</code>
              </pre>
            </div>

            <div data-slot="install-card">
              <h3>npm</h3>
              <p>Install globally via npm</p>
              <pre>
                <code>npm install -g opensploit</code>
              </pre>
            </div>

            <div data-slot="install-card">
              <h3>Homebrew</h3>
              <p>Install via Homebrew (macOS)</p>
              <pre>
                <code>brew install opensploit</code>
              </pre>
            </div>
          </div>

          <h2>System Requirements</h2>
          <div data-slot="requirements">
            <h3>Minimum Requirements</h3>
            <ul>
              <li>macOS 12+, Ubuntu 20.04+, or Windows 11 (WSL2)</li>
              <li>Node.js 20+ or Bun 1.0+</li>
              <li>Docker Desktop or Docker Engine</li>
              <li>8GB RAM (16GB recommended)</li>
              <li>5GB free disk space</li>
            </ul>
          </div>

          <div data-slot="requirements">
            <h3>Required for Full Functionality</h3>
            <ul>
              <li>Docker - For running security tools in isolated containers</li>
              <li>API key for an LLM provider (Anthropic, OpenAI, etc.)</li>
              <li>Network access for target scanning</li>
            </ul>
          </div>

          <h2>After Installation</h2>
          <p>
            Once installed, run <code>opensploit</code> in your terminal to start.
            On first run, you&apos;ll be prompted to configure your LLM provider.
          </p>
          <pre>
            <code>opensploit</code>
          </pre>
          <p>
            See the <a href="/docs">documentation</a> for detailed setup instructions
            and usage guides.
          </p>
        </div>
      </div>
      <Legal />
    </main>
  );
}
