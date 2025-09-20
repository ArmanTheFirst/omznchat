import { Metadata } from "next";
import Link from "next/link";
import StaticPageLayout from '@/components/static-page-layout';
import { GridBackground } from "@/components/ui/grid-background";
export const metadata: Metadata = {
  title: 'Roadmap',
  description: "Here's what we're building, and what's coming next"
};

type RoadmapItem = {
  title: string;
  description: string;
  status: 'done' | 'in progress' | 'not started';
};

export default function RoadmapPage() {
  const roadmap: RoadmapItem[] = [
    {
      title: 'initial setup',
      description: 'basic chat functionality, demo of dashboard',
      status: 'done',
    },
    {
      title: 'our website',
      description: 'static pages explaining our project',
      status: 'done',
    },
    {
      title: 'open sourcing',
      description: 'github repo of source code for collaboration',
      status: 'in progress',
    },
    {
      title: 'establish public community',
      description: 'networking first helpful users and developers',
      status: 'in progress',
    },
    {
      title: 'keep shipping basic features',
      description: 'improve experience with small contributions adding up',
      status: 'in progress',
    },
    {
      title: 'officially become commercial',
      description: 'switch from development to production, purchase own domain',
      status: 'not started',
    },
    {
      title: 'modern, beautiful ui',
      description: 'a cleaner, more intuitive interface',
      status: 'not started',
    },
    {
      title: 'ai and fun',
      description: 'build game-changing features of omzn chat',
      status: 'not started',
    },
    {
      title: 'expand to an app',
      description: 'develop an equivalent experience for ios/android (or enhance PWA)',
      status: 'not started',
    }
  ];

  return (
    <StaticPageLayout>
      <div className="w-full">
        <div className="w-screen left-1/2 right-1/2 -mx-[50vw] relative bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
              <div className="text-center mb-8">          
                <h1 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl mb-4">
                  our roadmap
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  here's what we're building, and what's coming next
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen left-1/2 right-1/2 -mx-[50vw] relative -mt-px">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-b-2xl border border-t-0 border-border/20">
              <GridBackground className="p-8">
                <div className="px-4 sm:px-6">
                  <ul className="flex flex-col items-center gap-8 sm:gap-10">
                    {roadmap.map((item) => (
                      <li key={item.title} className="w-full max-w-md mx-auto">
                        <div className="text-left">
                          <div className="flex items-center gap-3">
                            <div 
                              className={`mt-0.5 h-2 w-2 flex-shrink-0 rounded-full ${
                                item.status === 'done'
                                  ? 'bg-green-500'
                                  : item.status === 'in progress'
                                  ? 'bg-blue-500'
                                  : 'bg-muted-foreground/50'
                              }`}
                            />
                            <h2 className="text-xl font-medium text-foreground">
                              {item.title}
                            </h2>
                          </div>
                          <p className="text-muted-foreground mt-2 ml-5 text-base">{item.description}</p>
                          <p 
                            className={`text-sm mt-2 ml-5 ${
                              item.status === 'done'
                                ? 'text-green-500'
                                : item.status === 'in progress'
                                ? 'text-blue-500'
                                : 'text-muted-foreground/70'
                            }`}
                          >
                            {item.status}
                          </p>
                        </div>
                      </li>
                    ))}
                    <li className="w-full max-w-md mx-auto">
                      <div className="flex items-center gap-3 text-left">
                        <div className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-blue-500" />
                        <p className="text-muted-foreground/70 text-base">more to be announced soon</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </GridBackground>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-12 mb-24">
          <div className="text-center">
            <h3 className="text-xl font-medium text-foreground mb-4">have ideas?</h3>
            <p className="text-muted-foreground mb-6">
              we're building this together. share your thoughts and help shape the future of omzn.
            </p>
            <Link 
              href="/#community" 
              className="inline-flex items-center group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg hover:shadow-blue-500/30 transition-all px-6 py-2.5 rounded-lg font-medium"
              rel="noopener noreferrer"
            >
              join our community
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </StaticPageLayout>
  );
}