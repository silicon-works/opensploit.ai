import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OpenSploit",
    short_name: "OpenSploit",
    description:
      "AI-powered autonomous penetration testing agent. Orchestrate 25+ security tools with intelligent automation.",
    start_url: "/",
    display: "standalone",
    background_color: "#141111",
    theme_color: "#141111",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
