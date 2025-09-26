import { Metadata } from "next";
import { SiteHeader } from "./site-header";
import Footer from "./footer";

interface StaticPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function generateMetadata({ title, description }: { title?: string, description?: string }): Metadata {
  return {
    title: title || 'OMZN Chat',
    description: description || 'Future of chat',
  };
}

export default function StaticPageLayout({ children, title, description }: StaticPageLayoutProps) {
  // Generate metadata if not already set by page
  if (title || description) {
    generateMetadata({ title, description });
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
