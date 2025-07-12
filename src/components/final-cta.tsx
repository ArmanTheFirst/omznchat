import ChatButton from "./chatbutton";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="px-2 py-14 sm:px-4 md:px-0 md:py-24">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="mx-auto max-w-3xl rounded-2xl bg-blue-50 px-4 py-12 text-center dark:bg-blue-900/20 sm:px-10 md:px-16 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-800/30 dark:text-blue-300 sm:text-sm">
              Ready to experience AI-powered messaging?
            </span>

            <h2 className="mb-5 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Start Your AI Chat Journey – Free Forever
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
              Join OMZN Chat for unlimited AI messaging, real-time team chat,
              and smart features—no paywalls, no nonsense. Get started in
              seconds and boost your productivity today.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ChatButton
                label="Start Free – No Card Needed"
                className="m-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
