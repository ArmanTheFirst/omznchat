import Footer from "@/components/footer";
import Landing from "@/components/landing";
import { SiteHeader } from "@/components/site-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'omzn chat | future of chat',
  description: 'omzn chat is an ambitious project, by/for the community',
  openGraph: {
    title: 'omzn chat | future of chat',
    description: 'omzn chat is an ambitious project, by/for the community',
    images: [{  
      url: 'https://omznchat.vercel.app/logo.png',
      width: 512,
      height: 512,
      alt: 'omzn chat',
    }],
    siteName: 'omzn chat',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'omzn chat | future of chat',
    description: 'omzn chat is an ambitious project, by/for the community',
    images: ['https://omznchat.vercel.app/logo.png'],
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <SiteHeader />
        <Landing />
      </div>
      <Footer />
    </div>
  );
}
