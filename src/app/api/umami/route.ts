import { NextResponse } from "next/server";

export async function GET() {
  const BASE_URL = process.env.UMAMI_API_URL;
  const WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;
  const API_KEY = process.env.UMAMI_API_KEY;

  if (!API_KEY || !BASE_URL || !WEBSITE_ID) {
    return NextResponse.json(
      { error: "Missing API credentials in .env.local" },
      { status: 500 }
    );
  }

  // Generate correct timestamps
  const endAt = Date.now();
  const startAt = endAt - 30 * 24 * 60 * 60 * 1000;
  const timezone = "Europe/Copenhagen";

  try {
    console.log(
      `➡️ Fetching from: ${BASE_URL}/api/websites/${WEBSITE_ID}/pageviews`
    );

    const response = await fetch(
      `${BASE_URL}/api/websites/${WEBSITE_ID}/pageviews?startAt=${startAt}&endAt=${endAt}&unit=day&timezone=${encodeURIComponent(
        timezone
      )}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );

    console.log(`➡️ Response status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    return NextResponse.json({
      pageviews: data.pageviews || [],
      sessions: data.sessions || [],
    });
  } catch (error) {
    console.error("🚨 API Route Error:", (error as Error).message);
    return NextResponse.json(
      { error: `Failed to fetch analytics: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
