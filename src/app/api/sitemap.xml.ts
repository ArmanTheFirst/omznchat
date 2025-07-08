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
      (page) =>
        `    <url>\n      <loc>${baseUrl}/${page}</loc>\n      <lastmod>${lastmod}</lastmod>\n      <changefreq>weekly</changefreq>\n      <priority>0.8</priority>\n    </url>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
