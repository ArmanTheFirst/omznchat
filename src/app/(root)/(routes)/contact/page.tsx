import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-20 dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="relative mb-4 inline-block text-4xl font-extrabold tracking-tight md:text-5xl">
            Contact Us
            <span className="absolute -bottom-2 left-1/2 block h-1 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/60" />
          </h1>
          <h2 className="mb-2 text-xl font-medium text-gray-600 dark:text-gray-300">
            Have questions? Feedback? Just want to say hi? We&apos;d{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              love
            </span>{" "}
            to hear from you!
          </h2>
        </div>
        <div className="space-y-8">
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              Reach Out to Us
            </h3>
            <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
              Whether you have a question, suggestion, or just want to chat, our
              team is here to help. Drop us a message, and we&apos;ll get back
              to you as soon as possible!
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">
              📩 <span className="font-medium">Email</span>:{" "}
              <Link
                href={`mailto:${process.env.OMZN_MAIL}`}
                className="text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
              >
                {process.env.OMZN_MAIL}
              </Link>
              <br />
              💬 <span className="font-medium">Live Chat</span>: Available
              inside OMZN Chat for instant support
              <br />
              🐦 <span className="font-medium">Twitter/X</span>: @OMZNChat
              <br />
              📢 <span className="font-medium">Feedback & Suggestions</span>: We
              love hearing from our users! Share your ideas with us.
            </p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              Frequently Asked Questions (FAQ)
            </h3>
            <p className="mb-2 text-base text-gray-600 dark:text-gray-300">
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
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              Business & Partnerships
            </h3>
            <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
              Interested in working with us? We&apos;re open to collaborations,
              integrations, and business inquiries. Let&apos;s build something
              great together!
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">
              📧 <span className="font-medium">Business Inquiries</span>:{" "}
              <Link
                href={`mailto:${process.env.OMZN_MAIL}`}
                className="text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
              >
                {process.env.OMZN_MAIL}
              </Link>
            </p>
          </section>
          <section
            className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900"
            id="contact-form"
          >
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              Contact Form
            </h3>
            <ContactForm />
          </section>
        </div>
        <p className="mt-12 text-center text-lg text-gray-600 dark:text-gray-300">
          We&apos;re here to make your chat experience better. Let&apos;s talk!
          🚀
        </p>
      </div>
      <Footer />
    </div>
  );
}
