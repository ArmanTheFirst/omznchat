import ChatButton from "@/components/chatbutton";
import Footer from "@/components/footer";
import Link from "next/link";

export default function FAQ() {
  return (
    <div className="pt-20 text-center">
      <div className="space-y-3 px-5 text-left md:px-80">
        <div>
          <h1 className="text-4xl font-bold">
            FAQ (Frequently Asked Questions)
          </h1>
        </div>
        <div className="flex flex-col gap-y-7 py-10">
          <h2 className="text-3xl font-medium underline decoration-accent decoration-dashed">
            General
          </h2>
          <div>
            <h3 className="py-2 text-2xl font-semibold text-text-primary">
              What is OMZN Chat?
            </h3>
            <p className="text-lg text-text-secondary">
              OMZN Chat is an AI-powered chat platform designed to enhance
              conversations with smart features, seamless messaging, and
              intuitive interactions.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-2xl font-semibold text-text-primary">
              Is OMZN Chat free to use?
            </h3>
            <p className="text-lg text-text-secondary">
              Yes! OMZN Chat offers a free version with essential features.
              However, we may introduce premium features in the future.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-2xl font-semibold text-text-primary">
              Do I need an account to use OMZN Chat?
            </h3>
            <p className="text-lg text-text-secondary">
              Yes, you&apos;ll need an account to access full functionality,
              including saved conversations and personalized settings.
            </p>
          </div>
          <h2 className="text-3xl font-medium underline decoration-accent decoration-dashed">
            Features & Functionality
          </h2>
          <div>
            <h3 className="py-2 text-2xl font-semibold text-text-primary">
              How does OMZN Chat&apos;s AI work?
            </h3>
            <p className="text-lg text-text-secondary">
              Our AI enhances conversations by analyzing chat context and
              providing smart replies, suggestions, and interactive experiences.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-2xl font-semibold text-text-primary">
              Can I delete my chat history?
            </h3>
            <p className="text-lg text-text-secondary">
              Yes! You can delete your messages and chat history anytime in the
              settings.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-2xl font-semibold text-text-primary">
              Is OMZN Chat available on mobile?
            </h3>
            <p className="text-lg text-text-secondary">
              Currently, you can access OMZN Chat via the web. A mobile app is
              in the works!
            </p>
          </div>
          <h2 className="text-3xl font-medium underline decoration-accent decoration-dashed">
            Privacy & Security
          </h2>
          <div>
            <h3 className="py-2 text-2xl font-semibold text-text-primary">
              Is my data safe?
            </h3>
            <p className="text-lg text-text-secondary">
              Absolutely! We prioritize security and do not sell your data. Read
              our{" "}
              <Link href="/privacy" className="text-text-secondary underline">
                Privacy Policy
              </Link>{" "}
              for full details.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-2xl font-semibold text-text-primary">
              Can I delete my account?
            </h3>
            <p className="text-lg text-text-secondary">
              Yes, you can delete your account permanently in your settings.
              This removes all associated data.
            </p>
          </div>
          <div>
            <h3 className="py-2 text-2xl font-semibold text-text-primary">
              How do I report a bug or issue?
            </h3>
            <p className="text-lg text-text-secondary">
              Contact us at{" "}
              <Link
                href={`mailto:${process.env.OMZN_MAIL}`}
                className="text-text-secondary underline"
              >
                {process.env.OMZN_MAIL}
                {/* support@omznchat.com */}
              </Link>
              , and we&apos;ll look into it!
            </p>
          </div>
        </div>
      </div>
      <ChatButton />
      <Footer />
    </div>
  );
}
