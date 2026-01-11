import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InstallTabs } from "@/components/install-tabs";
import { config, features } from "@/lib/config";

export default function Home() {
  return (
    <div data-page="opensploit">
      <Header />

      <div data-component="container">
        {/* Hero Section */}
        <section data-component="hero">
          <div data-slot="content">
            <h1>{config.tagline}</h1>
            <p data-slot="subtitle">{config.description}</p>
            <InstallTabs />
          </div>
        </section>

        {/* Features Section */}
        <section data-component="features">
          <div data-slot="content">
            <h2>What is OpenSploit?</h2>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>
                  <span data-slot="marker">[*]</span>
                  <span data-slot="text">
                    <strong>{feature.title}</strong> &mdash;{" "}
                    {feature.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Privacy Section */}
        <section data-component="privacy">
          <div data-slot="content">
            <h2>Privacy First</h2>
            <p>
              OpenSploit runs entirely on your machine. Your targets, findings,
              and session data never leave your system unless you explicitly
              choose to share them. No telemetry, no cloud dependencies for core
              functionality.
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <div data-component="disclaimer">
          <div data-slot="content">
            <strong>Authorized Use Only:</strong> OpenSploit is designed for
            authorized security testing. You must have explicit written
            permission before testing any system. Unauthorized access to
            computer systems is illegal. By using OpenSploit, you agree to use
            it responsibly and in compliance with all applicable laws.
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
