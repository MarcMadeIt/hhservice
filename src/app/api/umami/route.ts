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

  const startAt = Date.now() - 30 * 24 * 60 * 60 * 1000; // 30 dage siden
  const endAt = Date.now(); // Nu

  try {
    const response = await fetch(
      `${BASE_URL}/websites/${WEBSITE_ID}/pageviews?startAt=${startAt}&endAt=${endAt}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: Failed to fetch pageviews`);
    }

    const data = await response.json();
    const totalVisitors =
      data.pageviews?.reduce(
        (sum: number, entry: { y: number }) => sum + entry.y,
        0
      ) ?? 0;

    return NextResponse.json({ totalVisitors });
  } catch (error) {
    console.error("Umami API error:", error);
    return NextResponse.json(
      { error: `Failed to fetch analytics: ${error.message}` },
      { status: 500 }
    );
  }
}
