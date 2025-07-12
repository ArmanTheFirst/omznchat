import { UserRoundPlus, MessagesSquare, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description: "Sign up in seconds—no credit card required.",
    icon: UserRoundPlus,
    delay: 0.1,
  },
  {
    number: "02",
    title: "Start a Conversation",
    description: "Instantly connect with your team or AI assistant.",
    icon: MessagesSquare,
    delay: 0.2,
  },
  {
    number: "03",
    title: "Unlock Smart Features",
    description: "Use AI-powered replies, summaries, and productivity tools.",
    icon: Cpu,
    delay: 0.3,
  },
  {
    number: "04",
    title: "Collaborate & Grow",
    description:
      "Invite teammates, share insights, and scale your chat workflows.",
    icon: Mail,
    delay: 0.4,
  },
];

export default function HowItWorks() {
  return (
    <section className="px-2 py-14 sm:px-4 md:px-0 md:py-20" id="how-it-works">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            How OMZN Chat Works: AI Messaging in 4 Simple Steps
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            Get started with OMZN Chat in minutes. Onboard your team, launch
            your first chat, and unlock AI-powered features for smarter, faster,
            and more secure communication.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800 md:left-1/2 md:-ml-0.5"></div>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step.delay }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 md:left-1/2 md:-ml-4">
                  <span className="text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="w-full rounded-lg bg-white p-5 shadow-md dark:bg-gray-900 sm:p-6">
                    <div className="mb-3 flex items-center">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <step.icon
                          className="h-5 w-5 text-blue-500"
                          aria-hidden
                        />
                      </div>
                      <div>
                        <span className="block font-mono text-sm font-medium text-blue-500">
                          {step.number}
                        </span>
                        <h3 className="text-lg font-bold sm:text-xl">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
