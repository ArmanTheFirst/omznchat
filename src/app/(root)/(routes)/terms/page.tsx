import Footer from "@/components/footer";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-20 dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="relative mb-4 inline-block text-4xl font-extrabold tracking-tight md:text-5xl">
            Terms of Use
            <span className="absolute -bottom-2 left-1/2 block h-1 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/60" />
          </h1>
          <h2 className="mb-2 text-xl font-medium text-gray-600 dark:text-gray-300">
            Last updated: 10th Feb 2025
          </h2>
        </div>
        <div className="space-y-8">
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              1. Introduction
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              By using OMZN Chat, you agree to these Terms of Use. If you do not
              agree, please do not use our platform.
            </p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              2. User Responsibilities
            </h3>
            <ul className="list-disc space-y-2 px-5 text-base text-gray-600 dark:text-gray-300">
              <li>You must be at least 13 years old to use OMZN Chat.</li>
              <li>
                You are responsible for any content you share on the platform.
              </li>
              <li>
                Do not use OMZN Chat for illegal, abusive, or harmful
                activities.
              </li>
            </ul>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              3. Acceptable Use
            </h3>
            <ul className="list-disc space-y-2 px-5 text-base text-gray-600 dark:text-gray-300">
              <li>No harassment, hate speech, or spam.</li>
              <li>No impersonation or misleading information.</li>
              <li>No attempting to hack or disrupt the service.</li>
            </ul>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              4. Intellectual Property
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              All content on OMZN Chat (excluding user messages) is owned by us.
              You may not copy or distribute our materials without permission.
            </p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              5. Termination of Service
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              6. Limitation of Liability
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              OMZN Chat is provided &quot;as is.&quot; We are not responsible
              for damages resulting from the use of our platform.
            </p>
          </section>
          <section className="rounded-2xl bg-white p-6 shadow-md dark:bg-gray-900">
            <h3 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              7. Changes to These Terms
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We may update these terms periodically. Continued use of OMZN Chat
              means you accept the changes.
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
          Thank you for using OMZN Chat and respecting our terms.
        </p>
      </div>
      <Footer />
    </div>
  );
}
