// Proxy registry.yaml from mcp-tools GitHub repo with edge caching

const GITHUB_RAW_URL =
  "https://raw.githubusercontent.com/silicon-works/mcp-tools/main/registry.yaml";

// Cache for 5 minutes, stale-while-revalidate for 1 hour
const CACHE_CONTROL = "public, s-maxage=300, stale-while-revalidate=3600";

export const config = {
  runtime: "edge",
};

export default async function handler(request: Request): Promise<Response> {
  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  try {
    const response = await fetch(GITHUB_RAW_URL, {
      headers: {
        "User-Agent": "opensploit.ai-registry-proxy",
      },
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          error: "Failed to fetch registry",
          status: response.status
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache",
          },
        }
      );
    }

    const yaml = await response.text();

    return new Response(yaml, {
      status: 200,
      headers: {
        "Content-Type": "text/yaml; charset=utf-8",
        "Cache-Control": CACHE_CONTROL,
        "X-Source": "github/silicon-works/mcp-tools",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Registry fetch failed",
        message: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      }
    );
  }
}
