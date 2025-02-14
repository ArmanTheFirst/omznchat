import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="pt-20 text-center">
      <div className="space-y-3 px-5 text-left md:px-80">
        <div className="tracking-wide">
          <h1 className="py-1 text-4xl font-bold">Get in Touch</h1>
          <h2 className="text-2xl font-semibold text-text-secondary">
            Have questions? Feedback? Just want to say hi? We&apos;d{" "}
            <span className="text-text-secondary underline decoration-accent decoration-wavy underline-offset-4">
              love
            </span>{" "}
            to hear from you!
          </h2>
        </div>
        <div className="flex flex-col gap-y-7 py-10">
          <div>
            <h3 className="s py-2 text-3xl font-semibold">Reach Out to Us</h3>
            <p className="text-lg text-text-secondary">
              Whether you have a question, suggestion, or just want to chat, our
              team is here to help. Drop us a message, and we&apos;ll get back
              to you as soon as possible!
            </p>
            <p className="text-lg">
              📩 <span className="font-medium">Email</span>:{" "}
              <Link
                href={`mailto:${process.env.OMZN_MAIL}`}
                className="underline-offset-2 hover:underline"
              >
                {process.env.OMZN_MAIL}
                {/* support@omznchat.com */}
              </Link>{" "}
              <br /> 💬 <span className="font-medium">Live Chat</span>:
              Available inside OMZN Chat for instant support <br /> 🐦{" "}
              <span className="font-medium">Twitter/X</span>: @OMZNChat <br />{" "}
              📢 <span className="font-medium">Feedback & Suggestions</span>: We
              love hearing from our users! Share your ideas with us.
            </p>
          </div>
          <div>
            <h3 className="s py-2 text-3xl font-semibold">
              Frequently Asked Questions (FAQ)
            </h3>
            <p className="text-lg text-text-secondary">
              Before reaching out, check our FAQ section—your answer might be
              waiting there!
            </p>
            <Link
              href="/faq"
              className="text-lg transition duration-200 hover:underline"
            >
              🔍 Visit the FAQ
            </Link>
          </div>
          <div>
            <h3 className="s py-2 text-3xl font-semibold">
              Business & Partnerships
            </h3>
            <p className="text-lg text-text-secondary">
              Interested in working with us? We&apos;re open to collaborations,
              integrations, and business inquiries. Let&apos;s build something
              great together!
            </p>
            <p className="text-lg">
              📧 <span className="font-medium">Business Inquiries</span>:{" "}
              <Link
                href={`mailto:${process.env.OMZN_MAIL}`}
                className="underline-offset-2 hover:underline"
              >
                {process.env.OMZN_MAIL}
                {/* partnerships@omznchat.com */}
              </Link>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>

      <p className="text-lg text-text-secondary">
        We&apos;re here to make your chat experience better. Let&apos;s talk! 🚀
      </p>
      <Footer />
    </div>
  );
}
