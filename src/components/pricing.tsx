import ChatButton from "./chatbutton";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Unlimited AI-powered messages",
  "Smart replies & suggestions",
  "Real-time team collaboration",
  "End-to-end encrypted chat",
  "All future features included",
];

export default function Pricing() {
  return (
    <section className="px-2 py-14 sm:px-4 md:px-0 md:py-24" id="pricing">
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Simple, Transparent AI Chat Pricing
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
            OMZN Chat is free forever—no paywalls, no premium tiers, and no
            hidden fees. Enjoy unlimited AI messaging, smart features, and
            secure team chat at zero cost.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900 sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl">Free Forever</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                All features. No credit card required.
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold">$0</span>
              <span className="ml-1 text-base text-gray-500 dark:text-gray-400">
                /forever
              </span>
            </div>
          </div>

          <div className="mb-8 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-sm text-gray-700 dark:text-gray-200 sm:text-base"
              >
                <Check className="mr-3 h-5 w-5 text-blue-500" aria-hidden />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <ChatButton label="Start Free – No Card Needed" className="w-full" />
        </motion.div>
      </div>
    </section>
  );
}
