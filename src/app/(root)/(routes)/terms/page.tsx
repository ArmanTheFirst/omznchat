import Link from "next/link";
import { StaticPageLayout } from "@/components/static-page-layout";

export default function TermsOfUse() {
  return (
    <StaticPageLayout
      title="Terms of Service"
      description="By using OMZN, you agree to be awesome and follow these simple terms."
    >
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            terms of service
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            by using omzn, you agree to be awesome:
          </p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-6">
            <ul className="space-y-4 text-lg leading-relaxed text-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>don't spam or harass—treat others like real humans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>don't break the law (no illegal content or usage)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>don't try to hack or exploit the service</span>
              </li>
            </ul>
            
            <p className="text-lg leading-relaxed text-foreground">
              we can block/suspend accounts for abuse or security reasons. features may change (it's open source and evolving!).
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              your data belongs to you—delete it anytime.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground">
              for detailed rules, see our{' '}
              <Link 
                href="https://github.com/omzn/omzn" 
                className="text-primary underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </Link>{' '}
              or ask in our community. using omzn = you accept these terms.
            </p>
          </div>
        </div>
      </div>
    </StaticPageLayout>
  );
}
