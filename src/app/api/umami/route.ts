import { NextResponse } from "next/server";

export async function GET(request) {
  const BASE_URL = process.env.UMAMI_API_URL;
  const WEBSITE_ID = process.env.UMAMI_WEBSITE_ID;
  const API_KEY = process.env.UMAMI_API_KEY;

  if (!API_KEY || !BASE_URL || !WEBSITE_ID) {
    return NextResponse.json(
      { error: "Missing API credentials in .env.local" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const period = searchParams.get("period") || "7d";
  const endAt = Date.now();
  const startAt =
    period === "30d"
      ? endAt - 30 * 24 * 60 * 60 * 1000
      : endAt - 7 * 24 * 60 * 60 * 1000;

  try {
    console.log(
      `➡️ Fetching stats from: ${BASE_URL}/api/websites/${WEBSITE_ID}/stats`
    );

    // Hent statistik (pageviews, visits, visitors)
    const statsResponse = await fetch(
      `${BASE_URL}/api/websites/${WEBSITE_ID}/stats?startAt=${startAt}&endAt=${endAt}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );
    const statsData = await statsResponse.json();

    console.log(
      `➡️ Fetching page metrics from: ${BASE_URL}/api/websites/${WEBSITE_ID}/metrics?type=url`
    );

    // Hent de mest besøgte sider
    const pagesResponse = await fetch(
      `${BASE_URL}/api/websites/${WEBSITE_ID}/metrics?startAt=${startAt}&endAt=${endAt}&type=url`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );
    const pagesData = await pagesResponse.json();

    console.log(
      `➡️ Fetching device metrics from: ${BASE_URL}/api/websites/${WEBSITE_ID}/metrics?type=device`
    );

    // Hent enhedsstatistik
    const devicesResponse = await fetch(
      `${BASE_URL}/api/websites/${WEBSITE_ID}/metrics?startAt=${startAt}&endAt=${endAt}&type=device`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
        },
      }
    );
    const devicesData = await devicesResponse.json();

    return NextResponse.json({
      pageviews: statsData.pageviews.value || 0,
      visitors: statsData.visitors.value || 0,
      visits: statsData.visits.value || 0,
      pages: pagesData || [],
      devices: devicesData || [],
    });
  } catch (error) {
    console.error("🚨 API Route Error:", error.message);
    return NextResponse.json(
      { error: `Failed to fetch analytics: ${error.message}` },
      { status: 500 }
    );
  }
}
