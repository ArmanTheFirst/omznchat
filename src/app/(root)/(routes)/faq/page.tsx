import Footer from "@/components/footer";
import Head from "next/head";

export const metadata = {
  title: "FAQ – OMZN Chat",
  description:
    "Frequently asked questions about OMZN Chat, the AI-powered chat platform for smarter, secure, and seamless conversations.",
  openGraph: {
    title: "FAQ – OMZN Chat",
    description:
      "Frequently asked questions about OMZN Chat, the AI-powered chat platform for smarter, secure, and seamless conversations.",
    url: "https://omznchat.vercel.app/faq",
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
    title: "FAQ – OMZN Chat",
    description:
      "Frequently asked questions about OMZN Chat, the AI-powered chat platform for smarter, secure, and seamless conversations.",
    images: ["https://omznchat.vercel.app/android-chrome-512x512.png"],
  },
};

export default function FAQ() {
  const siteUrl = "https://omznchat.vercel.app/faq";
  const title = "FAQ – OMZN Chat";
  const description =
    "Frequently asked questions about OMZN Chat, the AI-powered chat platform for smarter, secure, and seamless conversations.";
  const ogImage = "https://omznchat.vercel.app/android-chrome-512x512.png";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is OMZN Chat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OMZN Chat is an AI-powered chat platform designed to enhance conversations with smart features, seamless messaging, and intuitive interactions.",
        },
      },
      {
        "@type": "Question",
        name: "Is OMZN Chat free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! OMZN Chat offers a free version with essential features. However, we may introduce premium features in the future.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need an account to use OMZN Chat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you'll need an account to access full functionality, including saved conversations and personalized settings.",
        },
      },
      {
        "@type": "Question",
        name: "How does OMZN Chat's AI work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI enhances conversations by analyzing chat context and providing smart replies, suggestions, and interactive experiences.",
        },
      },
      {
        "@type": "Question",
        name: "Can I delete my chat history?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! You can delete your messages and chat history anytime in the settings.",
        },
      },
      {
        "@type": "Question",
        name: "Is OMZN Chat available on mobile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Currently, you can access OMZN Chat via the web. A mobile app is in the works!",
        },
      },
      {
        "@type": "Question",
        name: "Is my data safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We prioritize security and do not sell your data. Read our Privacy Policy for full details.",
        },
      },
      {
        "@type": "Question",
        name: "Can I delete my account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can delete your account permanently in your settings. This removes all associated data.",
        },
      },
      {
        "@type": "Question",
        name: "How do I report a bug or issue?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contact us at support@omznchat.com, and we'll look into it!",
        },
      },
    ],
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-20 dark:from-gray-900 dark:to-gray-950">
        <div className="mx-auto max-w-3xl px-3 py-12 sm:px-4 md:py-16">
          <div className="mb-10 text-center">
            <h1 className="relative mb-3 inline-block text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              OMZN Chat FAQ: AI Chat Platform Questions Answered
              <span className="absolute -bottom-2 left-1/2 block h-1 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/60" />
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-600 dark:text-gray-300">
              Find answers to common questions about OMZN Chat—your AI-powered
              chat platform for teams, creators, and secure, real-time
              messaging.
            </p>
          </div>
          <div className="space-y-7">
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-3 text-xl font-bold text-blue-600 dark:text-blue-400">
                General
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    What is OMZN Chat?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                    OMZN Chat is an AI-powered chat platform for smarter,
                    faster, and more secure conversations.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Is OMZN Chat free to use?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                    Yes! OMZN Chat is free forever. No paywalls, no hidden fees.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Do I need an account to use OMZN Chat?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                    Yes, you’ll need an account to access all features and save
                    your conversations.
                  </p>
                </div>
              </div>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-3 text-xl font-bold text-blue-600 dark:text-blue-400">
                Features & Functionality
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    How does OMZN Chat’s AI work?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                    Our AI analyzes chat context to provide smart replies,
                    suggestions, and productivity tools.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Can I delete my chat history?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                    Yes! You can delete your messages and chat history anytime
                    in your settings.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Is OMZN Chat available on mobile?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                    You can use OMZN Chat on the web. A mobile app is coming
                    soon!
                  </p>
                </div>
              </div>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-3 text-xl font-bold text-blue-600 dark:text-blue-400">
                Security & Privacy
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Is my data safe?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                    Absolutely! We prioritize security and never sell your data.
                    See our Privacy Policy for details.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Can I delete my account?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                    Yes, you can permanently delete your account and all data in
                    your settings.
                  </p>
                </div>
              </div>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-3 text-xl font-bold text-blue-600 dark:text-blue-400">
                Support
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    How do I report a bug or issue?
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                    Contact us at{" "}
                    <a
                      href="mailto:support@omznchat.com"
                      className="text-blue-600 underline dark:text-blue-400"
                    >
                      support@omznchat.com
                    </a>{" "}
                    and we’ll help you out!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
