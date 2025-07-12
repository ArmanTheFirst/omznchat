import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "Contact OMZN Chat – AI Chat SaaS Support",
  description:
    "Contact OMZN Chat for support, feedback, business inquiries, or questions about our AI-powered chat platform.",
  openGraph: {
    title: "Contact OMZN Chat – AI Chat SaaS Support",
    description:
      "Contact OMZN Chat for support, feedback, business inquiries, or questions about our AI-powered chat platform.",
    url: "https://omznchat.vercel.app/contact",
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
    title: "Contact OMZN Chat – AI Chat SaaS Support",
    description:
      "Contact OMZN Chat for support, feedback, business inquiries, or questions about our AI-powered chat platform.",
    images: ["https://omznchat.vercel.app/android-chrome-512x512.png"],
  },
};

export default function Contact() {
  const siteUrl = "https://omznchat.vercel.app/contact";
  const title = "Contact OMZN Chat – AI Chat SaaS Support";
  const description =
    "Contact OMZN Chat for support, feedback, business inquiries, or questions about our AI-powered chat platform.";
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
              Contact OMZN Chat: AI Chat Platform Support & Inquiries
              <span className="absolute -bottom-2 left-1/2 block h-1 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/60" />
            </h1>
            <p className="mx-auto max-w-xl text-base text-gray-600 dark:text-gray-300">
              Reach out to OMZN Chat for support, feedback, or business
              inquiries. We’re here to help you get the most from your
              AI-powered chat experience.
            </p>
          </div>
          <div className="space-y-7">
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-1 text-xl font-bold text-blue-600 dark:text-blue-400">
                Reach Out to Us
              </h2>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                Have a question, suggestion, or need support? Our team is here
                for you. Drop us a message and we’ll get back to you fast.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                📩 <span className="font-medium">Email</span>:{" "}
                <a
                  href="mailto:support@omznchat.com"
                  className="text-blue-600 underline dark:text-blue-400"
                >
                  support@omznchat.com
                </a>
                <br />
                💬 <span className="font-medium">Live Chat</span>: Available
                inside OMZN Chat for instant support
                <br />
                🐦 <span className="font-medium">Twitter/X</span>: @OMZNChat
                <br />
                📢 <span className="font-medium">Feedback & Suggestions</span>:
                We love hearing from our users!
              </p>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-1 text-xl font-bold text-blue-600 dark:text-blue-400">
                Frequently Asked Questions (FAQ)
              </h2>
              <p className="mb-2 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                Before reaching out, check our FAQ section—your answer might be
                waiting there!
              </p>
              <Link
                href="/faq"
                className="text-base font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
              >
                🔍 Visit the FAQ
              </Link>
            </section>
            <section className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
              <h2 className="mb-1 text-xl font-bold text-blue-600 dark:text-blue-400">
                Business & Partnerships
              </h2>
              <p className="mb-3 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                Interested in working with us? We’re open to collaborations,
                integrations, and business inquiries. Let’s build something
                great together!
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                📧 <span className="font-medium">Business Inquiries</span>:{" "}
                <a
                  href="mailto:support@omznchat.com"
                  className="text-blue-600 underline dark:text-blue-400"
                >
                  support@omznchat.com
                </a>
              </p>
            </section>
            <section
              className="rounded-2xl bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6"
              id="contact-form"
            >
              <h2 className="mb-1 text-xl font-bold text-blue-600 dark:text-blue-400">
                Contact Form
              </h2>
              <ContactForm />
            </section>
          </div>
          <p className="mt-10 text-center text-base text-gray-600 dark:text-gray-300">
            We’re here to make your chat experience better. Let’s talk! 🚀
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
