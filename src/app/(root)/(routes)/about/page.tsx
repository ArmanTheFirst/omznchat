import ChatButton from "@/components/chatbutton";
import Footer from "@/components/footer";
import Head from "next/head";

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
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="mb-12 text-center">
            <h1 className="relative mb-4 inline-block text-4xl font-extrabold tracking-tight md:text-5xl">
              About OMZN
              <span className="absolute -bottom-2 left-1/2 block h-1 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/60" />
            </h1>
            <h2 className="mb-2 text-xl font-medium text-gray-600 dark:text-gray-300">
              Revolutionizing Conversations with AI-Driven Chat
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray-500 dark:text-gray-400">
              Bringing the{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Future of Communication
              </span>{" "}
              to You
            </p>
          </div>
          <div className="space-y-8">
            <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                Our Mission
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                At OMZN Chat, we believe conversations should be more than just
                messages on a screen. Our mission is to create a{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  smarter, more interactive, and engaging
                </span>{" "}
                chat experience—powered by AI, designed for seamless and{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  dynamic
                </span>{" "}
                interactions.
              </p>
            </section>
            <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                Why OMZN Chat?
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Unlike ordinary messaging platforms,{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  OMZN Chat
                </span>{" "}
                isn&apos;t just a place to talk—it&apos;s a space to{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  connect, automate, and enhance
                </span>{" "}
                communication. Whether it&apos;s{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  AI-assisted chats, intelligent responses
                </span>
                , or{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  seamless user experiences
                </span>
                , we make conversations better.
              </p>
            </section>
            <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                How It Started
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                We saw a gap in the way people chat online. Conversations were{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  static
                </span>
                , limited to basic messages and repetitive interactions. So, we
                built a platform that integrates AI{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  not just as an assistant, but as an active part of the
                  conversation
                </span>
                —learning, adapting, and making every chat feel more alive.
              </p>
            </section>
            <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                What Sets Us Apart?
              </h3>
              <ul className="space-y-2 text-base text-gray-600 dark:text-gray-300">
                <li>
                  ✅{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    AI-Enhanced Conversations
                  </span>{" "}
                  – Your chat learns and adapts to improve your experience.
                </li>
                <li>
                  ✅{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Real-Time Interactions
                  </span>{" "}
                  – No delays, no clutter—just smooth, instant messaging.
                </li>
                <li>
                  ✅{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    User-Centric Design
                  </span>{" "}
                  – A sleek, intuitive interface that puts you first.
                </li>
                <li>
                  ✅{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Privacy First
                  </span>{" "}
                  – Your data is yours, and we keep it that way.
                </li>
              </ul>
            </section>
            <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
              <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                The Future of Chat Starts Here
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                We&apos;re not just building another messaging app. We&apos;re
                crafting the{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  next generation of digital conversations
                </span>
                —where AI enhances every interaction and{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  communication becomes effortless
                </span>
                .<br />
                <br />
                🚀{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Join OMZN Chat today and experience the future of messaging!
                </span>
              </p>
            </section>
          </div>
          <div className="mt-12 flex justify-center">
            <ChatButton className="w-full max-w-xs" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
