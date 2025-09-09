import { StaticPageLayout } from "@/components/static-page-layout";
import ContactForm from "@/components/contact-form";
import { env } from "@/env";


export default function Contact() {
  return (
    <StaticPageLayout
      title="Contact Us"
      description="Have questions or feedback? We'd love to hear from you."
    >
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            contact us
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            have questions? we're here to help.
          </p>
        </div>
        
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">send us a message</h2>
              <p className="text-lg leading-relaxed text-foreground">
                fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <ContactForm />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">other ways to reach us</h2>
            
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-medium text-foreground">email</h3>
                <p className="text-muted-foreground">
                  For general inquiries
                </p>
                <div className="truncate">
                  <a href={`mailto:${env.OMZN_MAIL}`} className="text-primary hover:underline">
                    {env.OMZN_MAIL}
                  </a>
                </div>
              </div>

              <div className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-medium text-foreground">github</h3>
                <p className="text-muted-foreground">
                  For issues and contributions
                </p>
                <div className="w-full overflow-hidden">
                  <a
                    href={env.NEXT_PUBLIC_GITHUB_REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-words text-primary hover:underline"
                  >
                    {env.NEXT_PUBLIC_GITHUB_REPO_URL}
                  </a>
                </div>
              </div>
            </div>
            
            <p className="pt-4 text-center text-sm text-muted-foreground">
              we typically respond within 24-48 hours. for urgent matters, please include "URGENT" in your subject line.
            </p>
          </div>
        </div>
      </div>
    </StaticPageLayout>
  );
}
