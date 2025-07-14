import Footer from "@/components/footer";
import Landing from "@/components/landing";
import Head from "next/head";
import MaintenanceBanner from "@/components/maintenance-banner";

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
      <div>
        <main>
          <MaintenanceBanner />
          <Landing />
        </main>
        <Footer />
      </div>
    </>
  );
}
