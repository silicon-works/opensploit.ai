import { config } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-component="footer">
      <div data-slot="content">
        <div data-slot="links">
          <a
            href={config.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href={config.docs.url}>Docs</a>
        </div>

        <div data-slot="legal">
          <span>&copy; {currentYear} Silicon Works</span>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
