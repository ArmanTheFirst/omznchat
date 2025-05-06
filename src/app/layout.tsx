import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";
import { ThemeProvider } from "next-themes";
import ClerkThemeWrapper from "./(root)/(routes)/(auth)/_components/ClerkThemeWrapper";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OMZN Chat",
  description: "A smarter way to communicate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClerkThemeWrapper>
            <Navbar />
            <main className="pt-20">{children}</main>
            <Toaster />
          </ClerkThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
