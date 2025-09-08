import { SiteHeader } from "./site-header";
import Footer from "./footer";
import Head from "next/head";

interface StaticPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function StaticPageLayout({ title, description, children }: StaticPageLayoutProps) {
  const siteUrl = "https://omznchat.vercel.app";
  const fullTitle = `${title} | OMZN Chat`;
  const ogImage = siteUrl + "/android-chrome-512x512.png";

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={`${siteUrl}/${title.toLowerCase().replace(/\s+/g, '-')}`} />
        <link rel="canonical" href={`${siteUrl}/${title.toLowerCase().replace(/\s+/g, '-')}`} />
      </Head>
      <div className="min-h-screen flex flex-col bg-background">
        <SiteHeader />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
