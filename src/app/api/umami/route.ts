import { NextResponse } from "next/server";

export async function GET() {
  const API_URL = `${process.env.UMAMI_API_URL}/websites/${process.env.UMAMI_WEBSITE_ID}/stats`;
  const API_KEY = process.env.UMAMI_API_KEY;

  if (!API_KEY) {
    return NextResponse.json({ error: "API key missing" }, { status: 500 });
  }

  const response = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data);
}
