import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://omznchat.vercel.app";
  const pages = [
    "",
    "about",
    "faq",
    "contact",
    "chat",
    "dashboard",
    "terms",
    "privacy",
  ];
  const lastmod = new Date().toISOString().split("T")[0];
  const urls = pages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`;
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
