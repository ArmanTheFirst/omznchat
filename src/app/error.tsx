"use client";

import Footer from "@/components/footer";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 px-4 py-8 dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="rounded-full bg-red-50 p-4 dark:bg-red-900/30"
          >
            <AlertCircle className="h-12 w-12 text-red-500 dark:text-red-400" />
          </motion.div>

          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Well... This wasn&apos;t supposed to happen 🤖💥
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Looks like our AI got a little too smart and broke something. Try
              refreshing or come back later!
            </p>
            {error.message && (
              <p className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                Error: {error.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </motion.button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <Home className="h-4 w-4" />
                Back to Safety
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
