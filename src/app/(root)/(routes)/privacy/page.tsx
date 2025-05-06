import Footer from "@/components/footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-20 dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="relative mb-4 inline-block text-4xl font-extrabold tracking-tight md:text-5xl">
            Privacy Policy
            <span className="absolute -bottom-2 left-1/2 block h-1 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/60" />
          </h1>
          <h2 className="mb-2 text-xl font-medium text-gray-600 dark:text-gray-300">
            Last updated: 9th Feb 2025
          </h2>
        </div>
        <div className="space-y-8">
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              1. Introduction
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Welcome to OMZN Chat! We respect your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and safeguard your information.
            </p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              2. What Information We Collect
            </h3>
            <ul className="list-disc space-y-2 px-5 text-base text-gray-600 dark:text-gray-300">
              <li>
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  Account Information
                </span>
                : When you sign up, we collect your email and username.
              </li>
              <li>
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  Chat Data
                </span>
                : Messages you send and receive are stored temporarily to
                improve your experience but can be deleted anytime.
              </li>
              <li>
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  Usage Data
                </span>
                : We collect anonymized analytics to enhance our service.
              </li>
            </ul>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              3. How We Use Your Information
            </h3>
            <ul className="list-disc space-y-2 px-5 text-base text-gray-600 dark:text-gray-300">
              <li>To provide and improve OMZN Chat.</li>
              <li>To personalize your experience.</li>
              <li>To ensure security and prevent misuse.</li>
            </ul>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              4. Data Protection & Security
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We use encryption and industry-standard security measures to
              protect your data.
            </p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              5. Your Rights
            </h3>
            <ul className="list-disc space-y-2 px-5 text-base text-gray-600 dark:text-gray-300">
              <li>
                You can{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  delete your account
                </span>{" "}
                anytime.
              </li>
              <li>
                You can request{" "}
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  access to your data
                </span>{" "}
                or ask us to delete it.
              </li>
            </ul>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              6. Third-Party Services
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We do not sell your data. Some features may integrate third-party
              services (e.g., authentication providers).
            </p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              7. Changes to This Policy
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We may update this Privacy Policy. We&apos;ll notify you of any
              major changes.
            </p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <p className="text-base text-gray-600 dark:text-gray-300">
              📩 Questions? Contact us at{" "}
              <Link
                href={`mailto:${process.env.OMZN_MAIL}`}
                className="text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
              >
                {process.env.OMZN_MAIL}
              </Link>
            </p>
          </section>
        </div>
        <p className="mt-12 text-center text-lg text-gray-600 dark:text-gray-300">
          We value your privacy and are committed to keeping your data safe.
        </p>
      </div>
      <Footer />
    </div>
  );
}
