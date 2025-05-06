"use client";

import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Home } from "lucide-react";

export default function NotFound() {
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
            className="rounded-full bg-blue-50 p-4 dark:bg-blue-900/30"
          >
            <Search className="h-12 w-12 text-blue-500 dark:text-blue-400" />
          </motion.div>

          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Oops... Lost in Cyberspace? 🚀
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The page you&apos;re looking for doesn&apos;t exist. Maybe it got
              lost in the chat?
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <Home className="h-4 w-4" />
              Take Me Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
