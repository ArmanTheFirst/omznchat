import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ClerkThemeWrapper from "./(root)/(routes)/(auth)/_components/ClerkThemeWrapper";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMZN Chat",
  description: "A smarter way to communicate",
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
    "A smarter way to communicate. AI-powered chat platform for seamless, secure, and engaging conversations.";
  const ogImage = siteUrl + "/android-chrome-512x512.png";
  const twitterHandle = "@OMZNChat";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      <body className={`${outfit.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClerkThemeWrapper>
            <main className="w-screen overflow-x-hidden">{children}</main>
            <Toaster />
          </ClerkThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
