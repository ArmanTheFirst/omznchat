import { Metadata } from "next";
import StaticPageLayout from "@/components/static-page-layout";
import { env } from "@/env";

export const metadata: Metadata = {
  title: 'About OMZN',
  description: 'An open, human-first chat platform built for 2025',
  openGraph: {
    title: 'About OMZN',
    description: 'Learn more about our mission to create a better chat experience for everyone.',
    type: 'website',
  },
};

export default function About() {
  return (
    <StaticPageLayout>
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            about omzn
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            omzn is an open, human-first chat platform.
          </p>
        </div>
        
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-foreground">
            we're building messaging that's as transparent and fast-moving as the internet itself—no closed doors, and you help shape every feature.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground">
            built by real people, in public, with contributors from everywhere.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground">
            want to help? <a href={env.NEXT_PUBLIC_GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80">jump in on github</a> or <a href={env.NEXT_PUBLIC_DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80">join our discord</a>.
          </p>
          
          <p className="text-lg font-medium leading-relaxed text-foreground">
            made for 2025, not stuck in 2010.
          </p>
        </div>
      </div>
    </StaticPageLayout>
  );
}
