import { NextResponse } from "next/server";

const baseUrl = "https://hhservice.dk";
const today = new Date().toISOString().split("T")[0];

const staticPaths = ["", "services", "nyheder", "tilbud"];

const serviceSlugs = [
  "graesslaaning",
  "beskaering",
  "haekkeklipning",
  "haekklipning",
  "brolaegning",
  "snerydning",
  "bortskaffelse",
  "ukrudtsbekaempelse",
  "byggepladsservice",
];

const cities = [
  "hundested",
  "frederiksværk",
  "liseleje",
  "melby",
  "ølsted",
  "tisvildeleje",
  "helsinge",
];

export async function GET() {
  const urls = [
    // Statics
    ...staticPaths.map(
      (path) => `
    <url>
      <loc>${baseUrl}/${path}</loc>
      <priority>${
        path === "" ? "1.0" : path === "tilbud" ? "0.9" : "0.7"
      }</priority>
      <changefreq>${path === "nyheder" ? "monthly" : "weekly"}</changefreq>
      <lastmod>${today}</lastmod>
    </url>`
    ),

    // Service root pages
    ...serviceSlugs.map(
      (slug) => `
    <url>
      <loc>${baseUrl}/service/${slug}</loc>
      <priority>0.8</priority>
      <changefreq>weekly</changefreq>
      <lastmod>${today}</lastmod>
    </url>`
    ),

    // City-specific pages
    ...serviceSlugs.flatMap((slug) =>
      cities.map(
        (city) => `
      <url>
        <loc>${baseUrl}/service/${slug}/${city}</loc>
        <priority>0.7</priority>
        <changefreq>weekly</changefreq>
        <lastmod>${today}</lastmod>
      </url>`
      )
    ),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
