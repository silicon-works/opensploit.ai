import { NextResponse } from "next/server";

const RELEASE_URL =
  "https://github.com/silicon-works/mcp-tools/releases/download/registry-latest/registry.sha256";

export async function GET() {
  try {
    const response = await fetch(RELEASE_URL, {
      headers: {
        "User-Agent": "opensploit.ai-registry-proxy",
      },
      next: {
        revalidate: 60, // Cache for 1 minute (64 bytes)
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch registry hash", status: response.status },
        { status: 502 }
      );
    }

    const hash = (await response.text()).trim();

    return new NextResponse(hash + "\n", {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        "X-Source": "github/silicon-works/mcp-tools/releases",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Registry hash fetch failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
