import { NextResponse } from "next/server";

export async function GET() {
  const BASE_URL = process.env.UMAMI_API_URL;
  const WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;
  const API_KEY = process.env.UMAMI_API_KEY;

  if (!API_KEY) {
    return NextResponse.json({ error: "API key missing" }, { status: 500 });
  }

  try {
    // Fetch multiple Umami statistics
    const [activeVisitors, pageviews, events] = await Promise.all([
      fetch(`${BASE_URL}/websites/${WEBSITE_ID}/active`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }).then((res) => res.json()),

      fetch(
        `${BASE_URL}/websites/${WEBSITE_ID}/pageviews?unit=day&tz=Europe/Copenhagen`,
        {
          headers: { Authorization: `Bearer ${API_KEY}` },
        }
      ).then((res) => res.json()),

      fetch(`${BASE_URL}/websites/${WEBSITE_ID}/events`, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }).then((res) => res.json()),
    ]);

    return NextResponse.json({
      activeVisitors: activeVisitors.value ?? 0,
      totalPageViews: pageviews.value ?? 0,
      totalEvents: events.length ?? 0, // Use this for "Henvendelser"
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
