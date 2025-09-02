import { cn } from "@/lib/utils";
import { TracingBeam } from "./ui/tracing-beam";
import { ConnectingArrow } from "./ui/connecting-arrow";

export default function Examples() {
  const steps = [
  {
    title: "messaging feels like it's on repeat",
    description:
      "year after year, it's the same: minor tweaks, but every chat still looks and feels like it did in 2010. group chats lag, media vanishes, features you beg for? maybe next decade.",
  },
  {
    title: "open? not a chance",
    description:
      "your messages, your network, your life—locked up behind closed doors. curious how anything works? sorry. want to build, fix, or even verify what happens with your data? guess again.",
  },
  {
    title: "privacy, but trust us",
    description:
      "big promises about encryption, but security audits are secret, bugs stay unpatched, and policies change without notice. if the product is free, you know who pays: you, with your attention and your trust.",
  },
  {
    title: "ai that doesn't serve you",
    description:
      "ai buzzwords everywhere, but do you actually get real value? voice notes still can't be transcribed, smart suggestions are hit-or-miss, and 'smarter chat' usually means more algorithms, not more control.",
  },
  {
    title: "omzn is a hard reset",
    description:
      "our code is open. our roadmap is public. real ai features you can actually use (translate, summarize, automate), real privacy, and a say in what comes next. chat for 2025—not ad revenue."
  }
];



  return (
    <section id="examples" className="relative w-full overflow-hidden py-12">
      <div className="max-w-4xl mx-auto antialiased pt-4 relative px-2 sm:px-16">
        <div className="mb-16 sm:mb-20">
        </div>
        <TracingBeam className={cn(
          "relative z-10",
          "[--dot-bg-light:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "[--dot-bg-dark:radial-gradient(#404040_1px,transparent_1px)]",
          "bg-[length:20px_20px] bg-[position:0_0] [background-image:var(--dot-bg-light)] dark:[background-image:var(--dot-bg-dark)]"
        )}>
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              const isEven = index % 2 === 0;
              
              return (
                <div key={`content-${index}`} className="space-y-8">
                  <div 
                    className={cn(
                      "space-y-2 max-w-2xl mx-auto w-full sm:w-auto pl-10 pr-4 sm:px-0 text-left",
                      isEven ? 'sm:ml-0 sm:mr-auto sm:text-left' : 'sm:mr-0 sm:ml-auto sm:text-right',
                      isEven ? 'sm:pr-0 sm:pl-8' : 'sm:pl-0 sm:pr-8',
                      isEven ? 'sm:border-l-2 border-muted/30' : 'sm:border-r-2 border-muted/30',
                      isEven ? 'sm:pl-6' : 'sm:pr-6',
                      !isLast && 'pb-8',
                      'relative z-10'
                    )}
                  >
                    <h3 className="text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {!isLast && (
                    <div className={`hidden sm:flex ${isEven ? 'justify-start pl-[15%]' : 'justify-end pr-[15%]'} py-4`}>
                      <div className={`hover:opacity-70 transition-opacity duration-300 ${isEven ? 'scale-x-[-1]' : ''}`}>
                        <ConnectingArrow
                          color="#3b82f6"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          </TracingBeam>
        </div>
      
    </section>
  );
}
