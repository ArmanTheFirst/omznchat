import ChatButton from "@/components/chatbutton";
import Footer from "@/components/footer";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="pt-20 text-center">
      <div className="space-y-3 px-5 text-left md:px-80">
        <div>
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <h2 className="text-xl font-semibold text-text-secondary">
            Last updated: 10th Feb 2025
          </h2>
        </div>
        <div className="flex flex-col gap-y-7 py-10">
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              1. Introduction
            </h3>
            <p className="text-lg text-text-secondary">
              By using OMZN Chat, you agree to these Terms of Use. If you do not
              agree, please do not use our platform.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              2. User Responsibilities
            </h3>
            <ul className="list-disc px-5 text-lg text-text-secondary">
              <li>You must be at least 13 years old to use OMZN Chat.</li>
              <li>
                You are responsible for any content you share on the platform.
              </li>
              <li>
                Do not use OMZN Chat for illegal, abusive, or harmful
                activities.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              3. Acceptable Use
            </h3>
            <ul className="list-disc px-5 text-lg text-text-secondary">
              <li>No harassment, hate speech, or spam.</li>
              <li>No impersonation or misleading information.</li>
              <li>No attempting to hack or disrupt the service.</li>
            </ul>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              4. Intellectual Property
            </h3>
            <p className="text-lg text-text-secondary">
              All content on OMZN Chat (excluding user messages) is owned by us.
              You may not copy or distribute our materials without permission.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              5. Termination of Service
            </h3>
            <p className="text-lg text-text-secondary">
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              6. Limitation of Liability
            </h3>
            <p className="text-lg text-text-secondary">
              OMZN Chat is provided “as is.” We are not responsible for damages
              resulting from the use of our platform.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-3xl font-semibold text-text-primary">
              7. Changes to These Terms
            </h3>
            <p className="text-lg text-text-secondary">
              We may update these terms periodically. Continued use of OMZN Chat
              means you accept the changes.
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
                {/* support@omznchat.com */}
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
