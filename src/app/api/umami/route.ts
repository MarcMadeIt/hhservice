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

  try {
    // Fetch multiple Umami statistics in parallel
    const [activeVisitors, pageviews, events, summarizedStats] =
      await Promise.all([
        fetch(`${BASE_URL}/websites/${WEBSITE_ID}/active`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            Accept: "application/json",
          },
        }).then((res) =>
          res.ok
            ? res.json()
            : Promise.reject(`Error ${res.status}: Active visitors`)
        ),

        fetch(
          `${BASE_URL}/websites/${WEBSITE_ID}/pageviews?unit=day&tz=Europe/Copenhagen`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              Accept: "application/json",
            },
          }
        ).then((res) =>
          res.ok ? res.json() : Promise.reject(`Error ${res.status}: Pageviews`)
        ),

        fetch(`${BASE_URL}/websites/${WEBSITE_ID}/events`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            Accept: "application/json",
          },
        }).then((res) =>
          res.ok ? res.json() : Promise.reject(`Error ${res.status}: Events`)
        ),

        fetch(`${BASE_URL}/websites/${WEBSITE_ID}/stats`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            Accept: "application/json",
          },
        }).then((res) =>
          res.ok ? res.json() : Promise.reject(`Error ${res.status}: Stats`)
        ),
      ]);

    return NextResponse.json({
      activeVisitors: activeVisitors.value ?? 0,
      totalPageViews: pageviews.value ?? 0,
      totalEvents: events.length ?? 0, // Use this for "Henvendelser"
      summarizedStats: {
        pageviews: summarizedStats.pageviews.value ?? 0,
        visitors: summarizedStats.visitors.value ?? 0,
        visits: summarizedStats.visits.value ?? 0,
        bounces: summarizedStats.bounces.value ?? 0,
        totaltime: summarizedStats.totaltime.value ?? 0,
      },
    });
  } catch (error) {
    console.error("Umami API error:", error);
    return NextResponse.json(
      { error: `Failed to fetch analytics: ${error}` },
      { status: 500 }
    );
  }
}
