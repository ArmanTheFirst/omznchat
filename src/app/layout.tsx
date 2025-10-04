import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ClerkThemeWrapper from "./(root)/(routes)/(auth)/_components/ClerkThemeWrapper";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'OMZN Chat',
    template: '%s | OMZN Chat',
  },
  description: "the future of chat",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1D4ED8",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = "https://omznchat.vercel.app";
  const siteName = "OMZN Chat";
  const description =
    "an ambitious project with a vision to redefine the future of chat (like car moving to self-driving)";
  const ogImage = siteUrl + "/logo.png";
  const twitterHandle = "@OMZNChat";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check for saved theme preference
                const savedTheme = localStorage.getItem('theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                // Apply theme class immediately to prevent flash
                if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                
                // Add a class to the html element once the theme is set
                document.documentElement.classList.add('theme-loaded');
              })();
            `,
          }}
        />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="apple-mobile-web-app-title" content="OMZN" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteName,
              url: siteUrl,
              logo: ogImage,
              sameAs: ["https://twitter.com/OMZNChat"],
              description,
            }),
          }}
        />
        <meta 
          name="google-site-verification"
          content="COOATcOSNOycv3-CKEIw7_1sYeNRSUU7pDku3Nfyj94"
        />
      </head>
      <body className={`${outfit.className} overflow-x-hidden bg-background text-foreground transition-colors duration-200`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          storageKey="omznchat-theme"
        >
          <ClerkThemeWrapper>
            <main className="w-screen overflow-x-hidden bg-background">{children}</main>
            <Toaster position="bottom-right" />
          </ClerkThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
