"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    // Simulate submission - replace with actual API endpoint
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 500);
  };

  return (
    <section data-component="newsletter">
      <div data-slot="content">
        <h2>Stay Updated</h2>
        <p>Get notified about new releases, security advisories, and guides.</p>

        {status === "success" ? (
          <div data-slot="success">
            Thanks for subscribing! Check your inbox to confirm.
          </div>
        ) : (
          <form onSubmit={handleSubmit} data-slot="form">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
            />
            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
