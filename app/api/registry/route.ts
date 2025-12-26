import { NextResponse } from "next/server";

const GITHUB_RAW_URL =
  "https://raw.githubusercontent.com/silicon-works/mcp-tools/main/registry.yaml";

export async function GET() {
  try {
    const response = await fetch(GITHUB_RAW_URL, {
      headers: {
        "User-Agent": "opensploit.ai-registry-proxy",
      },
      next: {
        revalidate: 300, // Cache for 5 minutes
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch registry", status: response.status },
        { status: 502 }
      );
    }

    const yaml = await response.text();

    return new NextResponse(yaml, {
      status: 200,
      headers: {
        "Content-Type": "text/yaml; charset=utf-8",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
        "X-Source": "github/silicon-works/mcp-tools",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Registry fetch failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
