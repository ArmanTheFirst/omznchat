import ChatButton from "@/components/chatbutton";
import Footer from "@/components/footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 text-center">
      <div className="space-y-3 px-5 text-left md:px-80">
        <div>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <h2 className="text-xl font-semibold text-text-secondary">
            Last updated: 9th Feb 2025
          </h2>
        </div>
        <div className="flex flex-col gap-y-7 py-10">
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              1. Introduction
            </h3>
            <p className="text-lg text-text-secondary">
              Welcome to OMZN Chat! We respect your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, and safeguard your information.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              2. What Information We Collect
            </h3>
            <ul className="list-disc px-5 text-lg text-text-secondary">
              <li>
                <span className="font-medium text-text-secondary">
                  Account Information
                </span>
                : When you sign up, we collect your email and username.
              </li>
              <li>
                <span className="font-medium text-text-secondary">
                  Chat Data
                </span>
                : Messages you send and receive are stored temporarily to
                improve your experience but can be deleted anytime.
              </li>
              <li>
                <span className="font-medium text-text-secondary">
                  Usage Data
                </span>
                : We collect anonymized analytics to enhance our service.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              3. How We Use Your Information
            </h3>
            <ul className="list-disc px-5 text-lg text-text-secondary">
              <li>To provide and improve OMZN Chat.</li>
              <li>To personalize your experience.</li>
              <li>To ensure security and prevent misuse.</li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              4. Data Protection & Security
            </h3>
            <p className="text-lg text-text-secondary">
              We use encryption and industry-standard security measures to
              protect your data.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              5. Your Rights
            </h3>
            <ul className="list-disc px-5 text-lg text-text-secondary">
              <li>
                You can{" "}
                <span className="font-medium text-text-secondary">
                  delete your account
                </span>{" "}
                anytime.
              </li>
              <li>
                You can request{" "}
                <span className="font-medium text-text-secondary">
                  access to your data
                </span>{" "}
                or ask us to delete it.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              6. Third-Party Services
            </h3>
            <p className="text-lg text-text-secondary">
              We do not sell your data. Some features may integrate third-party
              services (e.g., authentication providers).
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              7. Changes to This Policy
            </h3>
            <p className="text-lg text-text-secondary">
              We may update this Privacy Policy. We&apos;ll notify you of any
              major changes.
            </p>
          </div>
          <div>
            <p className="text-lg">
              📩 Questions? Contact us at{" "}
              <Link
                href={`mailto:${process.env.OMZN_MAIL}`}
                className="underline"
              >
                {process.env.OMZN_MAIL}
                {/* privacy@omznchat.com */}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ChatButton />
      <Footer />
    </div>
  );
}
