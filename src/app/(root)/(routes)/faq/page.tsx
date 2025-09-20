import { Metadata } from "next";
import { env } from "@/env";
import StaticPageLayout from "@/components/static-page-layout";

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about OMZN Chat.',
  openGraph: {
    title: 'FAQ - OMZN Chat',
    description: 'Get answers to frequently asked questions about OMZN Chat and how to get the most out of our platform.',
    type: 'website',
  },
};

export default function FAQ() {
  const faqs = [
    {
      question: "who builds omzn?",
      answer: "a global crew of devs and non-devs, building in public. anyone can contribute."
    },
    {
      question: "is my data private?",
      answer: "yes. messages are end-to-end encrypted where possible. no ads, no selling, no creepy tracking."
    },
    {
      question: "do i need to pay?",
      answer: "nope. omzn is free and will stay free."
    },
    {
      question: "can i use ai without losing my privacy?",
      answer: "our ai only uses your chats when you want it to, and never outside your own account. you control what ai sees and does."
    },
    {
      question: "how do i get notifications?",
      answer: "enable push in your browser or pwa for instant updates.",
    },
    {
      question: "can i self-host or extend omzn?",
      answer: `absolutely—full source is on <a href="${env.NEXT_PUBLIC_GITHUB_REPO_URL}" target="_blank" rel="noopener noreferrer" className="text-primary hover:opacity-80">github</a>.`,
      isHtml: true
    },
    {
      question: "found a bug? suggestion?",
      answer: "open an issue, or reach out on <a href=\"/contact\" className=\"text-primary hover:opacity-80\">contact</a>.",
      isHtml: true
    }
  ];

  return (
    <StaticPageLayout>
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            frequently asked questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            can't find what you're looking for? reach out and we'll help you out.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">
                {faq.question}
              </h2>
              <div 
                className="text-foreground/80 [&_a]:text-primary [&_a]:underline [&_a]:hover:opacity-80"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-12 rounded-xl border bg-card p-8 text-center">
          <h2 className="mb-3 text-2xl font-semibold text-foreground">
            still have questions?
          </h2>
          <p className="mb-6 text-foreground/80">
            we're here to help. get in touch with our team for more information.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            contact us
          </a>
        </div>
      </div>
    </StaticPageLayout>
  );
}
