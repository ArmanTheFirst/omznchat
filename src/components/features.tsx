import { useState } from "react";
import ChatButton from "./chatbutton";

const pains = [
  {
    name: "❌ Slow & outdated chat apps",
    desc: "Laggy messages, poor performance.",
  },
  {
    name: "❌ No AI-powered enhancements",
    desc: "No smart suggestions or chat summaries.",
  },
  {
    name: "❌ Hard-to-use interfaces",
    desc: "Cluttered design, not intuitive.",
  },
  {
    name: "❌ Weak privacy & security",
    desc: "No end-to-end encryption, weak data protection.",
  },
  {
    name: "❌ No seamless team collaboration",
    desc: "Switching between apps kills workflow.",
  },
  {
    name: "❌ Boring, static conversations",
    desc: "No real engagement or smart interactions.",
  },
];

const gains = [
  {
    name: "🚀 Ultra-fast & real-time",
    desc: "Stream-powered, near-instant messaging.",
  },
  {
    name: "🧠 AI-assisted chat",
    desc: "Smart suggestions, summaries, auto-replies.",
  },
  {
    name: "🎯 Clean & modern UI ",
    desc: "Optimized for speed, clarity, and ease of use.",
  },
  {
    name: "🔒 End-to-end encryption ",
    desc: "Your conversations stay private & secure.",
  },
  {
    name: "🤝 Built for teams & communities",
    desc: "Organize discussions, shared spaces.",
  },
  {
    name: "🌟 Interactive & engaging",
    desc: "AI-driven interactivity, reactions, and insights.",
  },
];

export default function Features() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 text-center" id="product">
      <h1 className="mb-10 text-4xl font-bold">
        Frustrated with outdated, <br className="sm:hidden" />
        lifeless chats?
      </h1>
      <div className="mb-10 grid grid-cols-1 gap-10 px-5 md:px-0 lg:grid-cols-2">
        <div className="card rounded-lg bg-[#FFEAEC]">
          <div className="card-body rounded-lg border border-dashed border-red-500 text-left">
            <h2 className="card-title text-red-600">
              ❌ What You&apos;re Missing Out On
            </h2>
            {pains.map((quote, i) => (
              <div key={i} className="collapse collapse-arrow p-0">
                <input
                  type="checkbox"
                  checked={openIndex === i}
                  onChange={() => handleToggle(i)}
                  className="peer"
                />
                <div className="collapse-title flex items-center px-0.5 text-lg text-red-500">
                  <span className="pr-2 text-red-500">{quote.name}</span>
                  <div className="min-w-[10px]"></div>
                </div>
                <div className="collapse-content">
                  <p className="text-red-400">{quote.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card rounded-lg bg-[#DEFCED]">
          <div className="card-body rounded-lg border border-dashed border-green-500 text-left">
            <h2 className="card-title text-green-600">
              ✅ Why OMZN Is the Solution
            </h2>
            {gains.map((quote, i) => (
              <div key={i} className="collapse collapse-arrow p-0">
                <input
                  type="checkbox"
                  checked={openIndex === i}
                  onChange={() => handleToggle(i)}
                  className="peer"
                />
                <div className="collapse-title flex items-center px-0.5 text-lg text-green-500">
                  <span className="pr-2 text-green-500">{quote.name}</span>
                  <div className="min-w-[10px]"></div>
                </div>
                <div className="collapse-content">
                  <p className="text-green-400">{quote.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatButton />
    </section>
  );
}
