import ChatButton from "./chatbutton";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-2xl bg-blue-50 px-6 py-16 text-center dark:bg-blue-900/20 sm:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800 dark:bg-blue-800/30 dark:text-blue-300">
              Ready to transform your communication?
            </span>

            <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Stop Missing Out – Experience the Future of Chat Today
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              AI-enhanced conversations, seamless interactions, and next-level
              engagement—all in one place.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ChatButton label="Enter the Chat" className="m-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
