import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <main data-page="opensploit">
      <div data-component="container">
        <Header />

        <section data-component="not-found">
          <div data-slot="content">
            <pre data-slot="ascii">{`
   _  _    ___  _  _
  | || |  / _ \\| || |
  | || |_| | | | || |_
  |__   _| | | |__   _|
     | | | |_| |  | |
     |_|  \\___/   |_|
`}</pre>
            <h1>Page not found</h1>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Link href="/" data-slot="back">
              &larr; Back to home
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
