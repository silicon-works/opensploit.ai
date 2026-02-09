import { NextResponse } from "next/server";

const RELEASE_URL =
  "https://github.com/silicon-works/mcp-tools/releases/download/registry-latest/registry.lance.tar.gz";

export async function GET() {
  try {
    const response = await fetch(RELEASE_URL, {
      headers: {
        "User-Agent": "opensploit.ai-registry-proxy",
      },
      next: {
        revalidate: 300, // Cache for 5 minutes
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch registry lance archive", status: response.status },
        { status: 502 }
      );
    }

    const body = await response.arrayBuffer();

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": "application/gzip",
        "Content-Disposition": "attachment; filename=registry.lance.tar.gz",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600",
        "X-Source": "github/silicon-works/mcp-tools/releases",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Registry lance fetch failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
