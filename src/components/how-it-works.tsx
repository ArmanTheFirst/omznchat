import { UserRoundPlus, MessagesSquare, Cpu, Mail } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in seconds",
    icon: UserRoundPlus,
    delay: 0.1,
  },
  {
    number: "02",
    title: "Start Chatting",
    description: "Connect with your team instantly",
    icon: MessagesSquare,
    delay: 0.2,
  },
  {
    number: "03",
    title: "Use Smart Features",
    description: "Let AI enhance your communication",
    icon: Cpu,
    delay: 0.3,
  },
  {
    number: "04",
    title: "Grow Your Network",
    description: "Invite teammates and collaborate",
    icon: Mail,
    delay: 0.4,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            How OMZN Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-light_text_secondary dark:text-text-secondary">
            Getting started is simple. Follow these steps to transform how you
            communicate.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-800 md:left-1/2 md:-ml-0.5"></div>

          {/* Steps */}
          <div className="space-y-12">
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
                {/* Circle on timeline */}
                <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 md:left-1/2 md:-ml-4">
                  <span className="text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="w-full rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
                    <div className="mb-4 flex items-center">
                      <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                        <step.icon className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <span className="block font-mono text-sm font-medium text-blue-500">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-light_text_secondary dark:text-text-secondary">
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
