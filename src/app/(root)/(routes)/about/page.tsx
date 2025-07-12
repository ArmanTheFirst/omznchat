import ChatButton from "@/components/chatbutton";
import Footer from "@/components/footer";
import Head from "next/head";

export const metadata = {
  title: "About OMZN Chat – AI-Powered Chat Platform",
  description:
    "Learn about OMZN Chat, the AI-powered chat SaaS platform revolutionizing digital conversations with smart, secure, and seamless messaging.",
  openGraph: {
    title: "About OMZN Chat – AI-Powered Chat Platform",
    description:
      "Learn about OMZN Chat, the AI-powered chat SaaS platform revolutionizing digital conversations with smart, secure, and seamless messaging.",
    url: "https://omznchat.vercel.app/about",
    siteName: "OMZN Chat",
    images: [
      {
        url: "https://omznchat.vercel.app/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "OMZN Chat Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About OMZN Chat – AI-Powered Chat Platform",
    description:
      "Learn about OMZN Chat, the AI-powered chat SaaS platform revolutionizing digital conversations with smart, secure, and seamless messaging.",
    images: ["https://omznchat.vercel.app/android-chrome-512x512.png"],
  },
};

export default function About() {
  const siteUrl = "https://omznchat.vercel.app/about";
  const title = "About OMZN Chat – AI-Powered Chat Platform";
  const description =
    "Learn about OMZN Chat, the AI-powered chat SaaS platform revolutionizing digital conversations with smart, secure, and seamless messaging.";
  const ogImage = "https://omznchat.vercel.app/android-chrome-512x512.png";

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
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-20 dark:from-gray-900 dark:to-gray-950">
        <div className="mx-auto max-w-3xl px-3 py-12 sm:px-4 md:py-16">
          <div className="mb-10 text-center">
            <h1 className="relative mb-3 inline-block text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              About OMZN Chat: AI-Powered Messaging for Teams & Creators
              <span className="absolute -bottom-2 left-1/2 block h-1 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/60" />
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-600 dark:text-gray-300">
              OMZN Chat is a modern AI chat platform built for teams, creators,
              and early adopters. Experience real-time, secure, and smart
              messaging—free forever.
            </p>
          </div>
          <div className="space-y-7">
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-1 text-xl font-bold text-blue-600 dark:text-blue-400">
                Our Mission
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                We believe chat should be more than messages. Our mission:
                deliver smarter, more interactive, and engaging
                conversations—powered by AI, designed for seamless teamwork.
              </p>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-1 text-xl font-bold text-blue-600 dark:text-blue-400">
                Why OMZN Chat?
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                OMZN Chat isn’t just a place to talk—it’s where you connect,
                automate, and enhance every conversation. Enjoy AI-assisted
                chats, intelligent responses, and a seamless user experience.
              </p>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-1 text-xl font-bold text-blue-600 dark:text-blue-400">
                How It Started
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                We saw a gap: online chat was static and repetitive. So we built
                OMZN Chat—where AI is an active participant, making every
                conversation smarter and more dynamic.
              </p>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-1 text-xl font-bold text-blue-600 dark:text-blue-400">
                What Sets Us Apart
              </h2>
              <ul className="list-disc space-y-2 pl-4 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                <li>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    AI-Enhanced Conversations
                  </span>{" "}
                  – Your chat learns and adapts to you.
                </li>
                <li>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Real-Time Messaging
                  </span>{" "}
                  – Fast, seamless, and always in sync.
                </li>
                <li>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    User-Centric Design
                  </span>{" "}
                  – Clean, intuitive, and distraction-free.
                </li>
                <li>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Privacy First
                  </span>{" "}
                  – Your data stays private, always.
                </li>
              </ul>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-1 text-xl font-bold text-blue-600 dark:text-blue-400">
                The Future of Chat Starts Here
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                We’re building the next generation of digital
                conversations—where AI enhances every interaction and
                communication is effortless.
                <br />
                <br />
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Join OMZN Chat today and experience the future of messaging!
                </span>
              </p>
            </section>
          </div>
          <div className="mt-10 flex justify-center">
            <ChatButton className="w-full max-w-xs" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
