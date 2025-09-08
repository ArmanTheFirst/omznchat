import Footer from "@/components/footer";
import Landing from "@/components/landing";
import { SiteHeader } from "@/components/site-header";
import Head from "next/head";

export default function Home() {
  const siteUrl = "https://omznchat.vercel.app";
  const title = "OMZN Chat – AI-Powered Chat Platform";
  const description =
    "OMZN Chat is a next-generation AI chat SaaS for smarter, seamless, and secure conversations. Try OMZN Chat for free.";
  const ogImage = siteUrl + "/android-chrome-512x512.png";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={siteUrl} />
        <link rel="canonical" href={siteUrl} />
      </Head>
      <div className="min-h-screen flex flex-col bg-background">
        <SiteHeader />
        <main className="flex-1 pt-10">
          <Landing />
        </main>
        <Footer />
      </div>
    </>
  );
}
