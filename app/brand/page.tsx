import { Header } from "@/components/header";
import { Legal } from "@/components/legal";
import Image from "next/image";

export default function BrandPage() {
  return (
    <main data-page="brand">
      <div data-component="container">
        <Header />
        <div data-component="brand-content">
          <h1>Brand Assets</h1>
          <p data-slot="subtitle">
            Guidelines and assets for using the OpenSploit brand
          </p>

          <h2>Logo</h2>
          <p>
            The OpenSploit logo represents autonomous security testing. Use the
            appropriate variant based on the background color.
          </p>

          <div data-slot="logo-grid">
            <div data-slot="logo-item">
              <div data-slot="logo-preview">
                <Image
                  src="/assets/logo-light.svg"
                  alt="OpenSploit Logo (Light)"
                  width={48}
                  height={48}
                />
              </div>
              <div data-slot="logo-info">Logo - Light backgrounds</div>
              <a href="/assets/logo-light.svg" download data-slot="logo-download">
                Download SVG
              </a>
            </div>

            <div data-slot="logo-item">
              <div data-slot="logo-preview" data-theme="dark">
                <Image
                  src="/assets/logo-dark.svg"
                  alt="OpenSploit Logo (Dark)"
                  width={48}
                  height={48}
                />
              </div>
              <div data-slot="logo-info">Logo - Dark backgrounds</div>
              <a href="/assets/logo-dark.svg" download data-slot="logo-download">
                Download SVG
              </a>
            </div>
          </div>

          <h2>Wordmark</h2>
          <p>
            The wordmark includes the full &quot;opensploit&quot; text. Use this
            when the brand name needs to be clearly visible.
          </p>

          <div data-slot="logo-grid">
            <div data-slot="logo-item">
              <div data-slot="logo-preview">
                <Image
                  src="/assets/wordmark-light.svg"
                  alt="OpenSploit Wordmark (Light)"
                  width={180}
                  height={32}
                />
              </div>
              <div data-slot="logo-info">Wordmark - Light backgrounds</div>
              <a
                href="/assets/wordmark-light.svg"
                download
                data-slot="logo-download"
              >
                Download SVG
              </a>
            </div>

            <div data-slot="logo-item">
              <div data-slot="logo-preview" data-theme="dark">
                <Image
                  src="/assets/wordmark-dark.svg"
                  alt="OpenSploit Wordmark (Dark)"
                  width={180}
                  height={32}
                />
              </div>
              <div data-slot="logo-info">Wordmark - Dark backgrounds</div>
              <a
                href="/assets/wordmark-dark.svg"
                download
                data-slot="logo-download"
              >
                Download SVG
              </a>
            </div>
          </div>

          <h2>Colors</h2>
          <p>The OpenSploit color palette.</p>

          <div data-slot="color-grid">
            <div data-slot="color-item">
              <div
                data-slot="color-swatch"
                style={{ background: "hsl(0, 70%, 50%)" }}
              />
              <div data-slot="color-info">
                <strong>Primary Red</strong>
                HSL: 0, 70%, 50%
              </div>
            </div>

            <div data-slot="color-item">
              <div data-slot="color-swatch" style={{ background: "#0a0a0a" }} />
              <div data-slot="color-info">
                <strong>Background Dark</strong>
                #0a0a0a
              </div>
            </div>

            <div data-slot="color-item">
              <div data-slot="color-swatch" style={{ background: "#fafafa" }} />
              <div data-slot="color-info">
                <strong>Background Light</strong>
                #fafafa
              </div>
            </div>

            <div data-slot="color-item">
              <div data-slot="color-swatch" style={{ background: "#171717" }} />
              <div data-slot="color-info">
                <strong>Surface Dark</strong>
                #171717
              </div>
            </div>
          </div>

          <h2>Typography</h2>
          <p>
            OpenSploit uses <strong>IBM Plex Mono</strong> for all text. This
            monospace font reinforces the technical, terminal-focused nature of
            the product.
          </p>

          <h2>Usage Guidelines</h2>
          <p>When using OpenSploit brand assets:</p>
          <ul>
            <li>Do not modify, distort, or recolor the logos</li>
            <li>Maintain adequate spacing around the logo</li>
            <li>Use the appropriate variant for the background</li>
            <li>Do not use the logo to imply endorsement</li>
          </ul>
        </div>
      </div>
      <Legal />
    </main>
  );
}
