import ChatButton from "./chatbutton";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Unlimited messages",
  "AI-powered suggestions",
  "Smart replies",
  "Team collaboration",
  "All future updates",
];

export default function Pricing() {
  return (
    <section className="py-20 sm:py-32" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            No Premium Tiers, No Paywalls
          </h2>
          <p className="text-lg text-light_text_secondary dark:text-text-secondary">
            We believe great communication shouldn&apos;t cost a fortune.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Free Plan</h3>
              <p className="text-light_text_secondary dark:text-text-secondary">
                Everything included
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-light_text_secondary dark:text-text-secondary">
                /forever
              </span>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <Check className="mr-3 h-5 w-5 text-blue-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <ChatButton label="Get Started For Free" className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
