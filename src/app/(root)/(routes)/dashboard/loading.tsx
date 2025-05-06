"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 px-4 py-8 dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto max-w-7xl">
        {/* Header Skeleton */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="h-6 w-6 text-blue-500" />
            <div className="h-8 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
          </motion.div>
          <div className="h-6 w-72 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
        </div>

        <div className="mt-8 space-y-8">
          {/* Quick Stats Skeleton */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex h-40 flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center justify-between">
                  <div className="h-5 w-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                  <div className="h-5 w-5 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="h-8 w-16 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                <div className="h-4 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
              </motion.div>
            ))}
          </div>

          {/* Profile and Features Skeleton */}
          <div className="flex flex-col gap-8 xl:flex-row">
            <div className="xl:w-[60%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex h-[600px] flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center justify-between">
                  <div className="h-6 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                  <div className="h-5 w-5 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="h-32 w-32 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
                <div className="space-y-4">
                  <div className="h-4 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                  <div className="h-4 w-64 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                </div>
              </motion.div>
            </div>
            <div className="xl:w-[40%]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex h-[600px] flex-col gap-4 rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center justify-between">
                  <div className="h-6 w-40 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                  <div className="h-5 w-5 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                </div>
                <div className="space-y-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="h-10 w-10 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                        <div className="h-3 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
