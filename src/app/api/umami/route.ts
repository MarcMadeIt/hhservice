import { NextResponse } from "next/server";

export async function GET() {
  const BASE_URL = process.env.UMAMI_API_URL;
  const WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;
  const API_KEY = process.env.UMAMI_API_KEY;

  if (!API_KEY || !BASE_URL || !WEBSITE_ID) {
    return NextResponse.json(
      { error: "Missing API credentials in .env" },
      { status: 500 }
    );
  }

  const startAt = Math.floor(Date.now() / 1000) - 30 * 24 * 60 * 60;
  const endAt = Math.floor(Date.now() / 1000);

  try {
    const response = await fetch(
      `${BASE_URL}/api/websites/${WEBSITE_ID}/pageviews?startAt=${startAt}&endAt=${endAt}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    const totalVisitors =
      data.pageviews?.reduce(
        (sum: number, entry: { y: number }) => sum + entry.y,
        0
      ) ?? 0;

    return NextResponse.json({ totalVisitors });
  } catch (error: any) {
    console.error("Umami API error:", error.message);
    return NextResponse.json(
      { error: `Failed to fetch analytics: ${error.message}` },
      { status: 500 }
    );
  }
}
