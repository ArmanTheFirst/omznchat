import {
  UserRoundPlus,
  MessagesSquare,
  Cpu,
  Mail,
  StepForward,
} from "lucide-react";
import Marquee from "react-fast-marquee";
import SingleReview from "./single-review";

const elements = [
  {
    label: "Account",
    icon: UserRoundPlus,
    desc: "Create your account",
  },
  {
    label: "Conversations",
    icon: MessagesSquare,
    desc: "Chat on this platform",
  },
  { label: "Features", icon: Cpu, desc: "Make use of features" },
  { label: "Invite", icon: Mail, desc: "Attract more users" },
];

export default function HowItWorks() {
  return (
    <section className="relative px-10 py-28 text-center lg:px-40">
      <h1
        className="mb-0 text-center text-5xl font-bold"
        data-aos="fade-down"
        data-aos-once="true"
      >
        How It Works
      </h1>
      <h2
        className="mb-10 text-3xl font-bold underline decoration-accent decoration-wavy underline-offset-8"
        data-aos="fade-down"
        data-aos-once="true"
      >
        ( so simple! )
      </h2>
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1/3 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-1/3 bg-gradient-to-l from-background to-transparent"></div>
      <Marquee gradient={false} speed={50} direction="left" className="mb-16">
        {elements.map((element, i) => (
          <div
            key={i}
            className={`ml-14 flex items-center ${elements.indexOf(element) == 3 ? "mr-48" : "mr-0"}`}
          >
            {elements.indexOf(element) !== 0 && (
              <StepForward
                size={50}
                className="mr-14 cursor-pointer text-text-secondary transition-transform duration-300 ease-in-out hover:scale-110"
              />
            )}

            <div className="flex flex-col items-center">
              <element.icon size={100} />
              <h1 className="text-xl font-medium text-text-secondary">
                {element.desc}
              </h1>
            </div>
          </div>
        ))}
      </Marquee>
      <SingleReview rating={5} />
    </section>
  );
}
