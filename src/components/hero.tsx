import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
      <div className="flex flex-col items-center justify-center px-2 lg:items-start">
        <div className="mb-6" data-aos="fade-down">
          <div className="relative inline-flex before:absolute before:inset-0">
            <Link
              href="https://www.smartbio.me/clupcmsmq0001p4vkq68r0pyp"
              className="group inline-flex w-full items-center justify-center rounded-full border border-slate-100/40 px-3 py-1 text-sm font-medium text-zinc-300 transition duration-150 ease-in-out hover:text-white"
              target="_blank"
            >
              <span className="relative inline-flex items-center">
                Our Socials
                <span className="text-primary-500 ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:-translate-x-0.5">
                  -&gt;
                </span>
              </span>
            </Link>
          </div>
        </div>
        <h1
          className="w-full bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-500 bg-clip-text pb-4 text-center text-7xl font-extrabold tracking-tight text-transparent lg:text-left"
          data-aos="fade-down"
        >
          Connect. Chat. Create.
        </h1>

        <p
          className="mb-8 text-center text-lg font-medium text-zinc-300/40 lg:text-left"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          A smarter way to engage with conversations, powered by AI.
        </p>

        <Link
          href="/chat"
          className="group flex w-56 items-center justify-center rounded bg-gradient-to-r from-white/80 via-white to-white/80 py-1.5 font-medium text-zinc-900 transition duration-150 ease-in-out hover:bg-white"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Get Started{" "}
          <ArrowRight className="text-primary-500 ml-1 h-3 w-3 tracking-normal transition-transform duration-150 ease-in-out group-hover:-translate-x-0.5" />
        </Link>
      </div>
      <div className="mx-14 flex justify-center">
        <div
          className="mockup-phone mx-20 min-w-fit"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="500"
        >
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <h3 className="text-2xl">Demo coming 🔜</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
