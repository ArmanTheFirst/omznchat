import Footer from "@/components/footer";
import Landing from "@/components/landing";
import { SiteHeader } from "@/components/site-header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'OMZN Chat – AI-Powered Chat Platform',
  description: 'OMZN Chat is a next-generation AI chat SaaS for smarter, seamless, and secure conversations. Try OMZN Chat for free.',
  openGraph: {
    title: 'OMZN Chat – AI-Powered Chat Platform',
    description: 'Experience the next generation of AI-powered chat with OMZN. Smart, intuitive, and always learning.',
    images: [{
      url: 'https://omznchat.vercel.app/android-chrome-512x512.png',
      width: 512,
      height: 512,
      alt: 'OMZN Chat',
    }],
    siteName: 'OMZN Chat',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMZN Chat – AI-Powered Chat Platform',
    description: 'Experience the next generation of AI-powered chat with OMZN. Smart, intuitive, and always learning.',
    images: ['https://omznchat.vercel.app/android-chrome-512x512.png'],
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
