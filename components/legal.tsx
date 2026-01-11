import Link from "next/link";

export function Legal() {
  const currentYear = new Date().getFullYear();

  return (
    <div data-component="legal">
      <div data-slot="content">
        <span>
          &copy; {currentYear}{" "}
          <a
            href="https://github.com/silicon-works"
            target="_blank"
            rel="noopener noreferrer"
          >
            Silicon Works
          </a>
        </span>
        <Link href="/brand">Brand</Link>
        <Link href="/legal/privacy-policy">Privacy Policy</Link>
        <Link href="/legal/terms-of-service">Terms of Service</Link>
      </div>
    </div>
  );
}
