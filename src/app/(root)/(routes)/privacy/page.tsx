import { Metadata } from "next";
import { Mail } from "lucide-react";
import Link from "next/link";
import StaticPageLayout from "@/components/static-page-layout";
import { env } from "@/env";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how OMZN respects your privacy and handles your data.',
  openGraph: {
    title: 'Privacy Policy - OMZN Chat',
    description: 'Learn how we protect your privacy and handle your data at OMZN Chat.',
    type: 'website',
  },
};

export default function PrivacyPolicy() {
  return (
    <StaticPageLayout>
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            privacy policy
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            we respect your privacy—simple as that. your chats stay yours.
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              we never sell your data, never read your messages, and never show ads.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              omzn uses end-to-end encryption wherever possible. some message data (e.g. for delivery, ai features) may be temporarily processed but never stored long-term, reused, or profiled.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              we use cookies/session info only to keep you logged in and the app smooth.
            </p>
            
            <div className="pt-4">
              <p className="text-lg font-medium text-foreground">have questions?</p>
              <Link 
                href="mailto:privacy@omzn.chat"
                className="group mt-2 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              >
                <Mail className="h-5 w-5" />
                <span>{env.OMZN_MAIL}</span>
                <span className="block h-px w-full max-w-0 bg-primary transition-all duration-300 group-hover:max-w-full" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </StaticPageLayout>
  );
}
