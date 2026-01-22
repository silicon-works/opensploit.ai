import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InstallTabs } from "@/components/install-tabs";
import { Legal } from "@/components/legal";
import { FAQItem } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { SolvedMachines } from "@/components/solved-machines";
import { config, features, faqItems } from "@/lib/config";

const metrics = [
  { label: "Open Source", value: "MIT" },
  { label: "Security Tools", value: "25+" },
  { label: "LLM Providers", value: "75+" },
  { label: "Attack Phases", value: "5" },
];

export default function Home() {
  return (
    <main data-page="opensploit">
      <div data-component="container">
        <Header />

        {/* Hero Section */}
        <section data-component="hero">
          <div data-slot="content">
            <h1>{config.tagline}</h1>
            <p data-slot="subtitle">{config.description}</p>
            <InstallTabs />
          </div>
        </section>

        {/* Metrics Section */}
        <section data-component="metrics">
          <div data-slot="content">
            {metrics.map((metric, index) => (
              <div key={index} data-slot="metric">
                <span data-slot="value">{metric.value}</span>
                <span data-slot="label">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Solved Machines Ticker */}
        <SolvedMachines />

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

        {/* FAQ Section */}
        <section data-component="faq">
          <div data-slot="content">
            <h2>Frequently Asked Questions</h2>
            <div data-slot="list">
              {faqItems.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />

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

      <Legal />
    </main>
  );
}
