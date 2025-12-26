export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>OPENSPLOIT</h1>
      <p style={styles.tagline}>Autonomous Penetration Testing Platform</p>
      <div style={styles.status}>Coming Soon</div>
      <div style={styles.links}>
        <a href="https://github.com/silicon-works/opensploit" style={styles.link}>
          GitHub
        </a>
        <a href="/registry.yaml" style={styles.link}>
          Tool Registry
        </a>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, monospace",
    background: "#0a0a0a",
    color: "#e0e0e0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: "2rem",
  },
  title: {
    fontSize: "3rem",
    color: "#00ff88",
    marginBottom: "1rem",
    fontWeight: 300,
    letterSpacing: "0.1em",
  },
  tagline: {
    fontSize: "1.2rem",
    color: "#888",
    marginBottom: "2rem",
  },
  status: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    background: "#1a1a1a",
    border: "1px solid #333",
    borderRadius: "4px",
    fontSize: "0.9rem",
    color: "#ffaa00",
  },
  links: {
    marginTop: "2rem",
  },
  link: {
    color: "#00ff88",
    textDecoration: "none",
    margin: "0 1rem",
    fontSize: "0.9rem",
  },
};
