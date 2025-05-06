import Footer from "@/components/footer";
import Link from "next/link";

export default function FAQ() {
  return (
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
                  Yes! OMZN Chat offers a free version with essential features.
                  However, we may introduce premium features in the future.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  Do I need an account to use OMZN Chat?
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Yes, you&apos;ll need an account to access full functionality,
                  including saved conversations and personalized settings.
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
                  Yes! You can delete your messages and chat history anytime in
                  the settings.
                </p>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold">
                  Is OMZN Chat available on mobile?
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Currently, you can access OMZN Chat via the web. A mobile app
                  is in the works!
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
                <h3 className="mb-1 text-lg font-semibold">Is my data safe?</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Absolutely! We prioritize security and do not sell your data.
                  Read our{" "}
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
                  Yes, you can delete your account permanently in your settings.
                  This removes all associated data.
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
  );
}
