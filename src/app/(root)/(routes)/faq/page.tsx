import Footer from "@/components/footer";
import Link from "next/link";
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
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="mb-12 text-center">
            <h1 className="relative mb-4 inline-block text-4xl font-extrabold tracking-tight md:text-5xl">
              FAQ (Frequently Asked Questions)
              <span className="absolute -bottom-2 left-1/2 block h-1 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/60" />
            </h1>
          </div>
          <div className="space-y-8">
            <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-blue-600 dark:text-blue-400">
                General
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    What is OMZN Chat?
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    OMZN Chat is an AI-powered chat platform designed to enhance
                    conversations with smart features, seamless messaging, and
                    intuitive interactions.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Is OMZN Chat free to use?
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Yes! OMZN Chat offers a free version with essential
                    features. However, we may introduce premium features in the
                    future.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Do I need an account to use OMZN Chat?
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Yes, you&apos;ll need an account to access full
                    functionality, including saved conversations and
                    personalized settings.
                  </p>
                </div>
              </div>
            </section>
            <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-blue-600 dark:text-blue-400">
                Features & Functionality
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    How does OMZN Chat&apos;s AI work?
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Our AI enhances conversations by analyzing chat context and
                    providing smart replies, suggestions, and interactive
                    experiences.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Can I delete my chat history?
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Yes! You can delete your messages and chat history anytime
                    in the settings.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Is OMZN Chat available on mobile?
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Currently, you can access OMZN Chat via the web. A mobile
                    app is in the works!
                  </p>
                </div>
              </div>
            </section>
            <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-blue-600 dark:text-blue-400">
                Privacy & Security
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Is my data safe?
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Absolutely! We prioritize security and do not sell your
                    data. Read our{" "}
                    <Link
                      href="/privacy"
                      className="text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for full details.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    Can I delete my account?
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Yes, you can delete your account permanently in your
                    settings. This removes all associated data.
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">
                    How do I report a bug or issue?
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Contact us at{" "}
                    <Link
                      href={`mailto:${process.env.OMZN_MAIL}`}
                      className="text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
                    >
                      {process.env.OMZN_MAIL}
                    </Link>
                    , and we&apos;ll look into it!
                  </p>
                </div>
              </div>
            </section>
          </div>
          <p className="mt-12 text-center text-lg text-gray-600 dark:text-gray-300">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
            >
              Contact us
            </Link>{" "}
            and we&apos;ll be happy to help!
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
