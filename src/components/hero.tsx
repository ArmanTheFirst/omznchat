import Link from "next/link";
import ChatButton from "./chatbutton";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-0">
      <div className="flex flex-col items-center justify-center px-2 lg:items-start">
        <div className="mb-6" data-aos="fade-down">
          <div className="relative inline-flex before:absolute before:inset-0">
            <Link
              href="https://x.com/omznchat"
              className="group inline-flex w-full items-center justify-center rounded-full border border-light_card_border px-3 py-1 text-sm font-medium text-light_text_secondary transition duration-150 ease-in-out dark:border-card_border dark:text-text-secondary dark:hover:text-white"
              target="_blank"
            >
              <span className="relative inline-flex items-center">
                Our Socials
                <span className="ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:-translate-x-0.5">
                  -&gt;
                </span>
              </span>
            </Link>
          </div>
        </div>
        <h1
          className="w-full pb-4 text-center text-6xl font-extrabold tracking-tight text-light_text_primary dark:text-text-primary md:text-7xl lg:text-left"
          data-aos="fade-down"
        >
          Smarter{" "}
          <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Chat.
          </span>
          <br /> AI built in.
        </h1>

        <p
          className="mb-8 text-center text-base font-medium text-light_text_secondary dark:text-text-secondary md:text-lg lg:text-left"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          OMZN transforms how you message — turning ordinary chats into
          intelligent, adaptive conversations. Get instant insights, smarter
          replies, and a chat experience that grows with you.
        </p>

        <ChatButton />
      </div>
      <div className="mx-0 flex justify-center overflow-hidden">
        <div
          className="mockup-phone mx-20 min-w-fit"
          data-aos="fade-top"
          data-aos-once="true"
          data-aos-delay="1000"
          data-aos-offset="0"
        >
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 bg-light_background dark:bg-background">
              <h3 className="text-2xl font-medium text-light_text_primary dark:text-text-primary">
                Demo coming 🔜
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
