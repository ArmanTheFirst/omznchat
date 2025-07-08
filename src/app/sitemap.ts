export default async function sitemap() {
  const baseUrl = "https://omznchat.vercel.app";
  const lastmod = new Date().toISOString().split("T")[0];
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
  return pages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: lastmod,
  }));
}
