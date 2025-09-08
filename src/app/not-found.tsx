"use client";

import { StaticPageLayout } from "@/components/static-page-layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Home } from "lucide-react";

export default function NotFound() {
  return (
    <StaticPageLayout
      title="Page Not Found"
      description="The page you're looking for doesn't exist or has been moved"
    >
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-8 rounded-2xl border bg-card p-8 shadow-sm"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="rounded-full bg-primary/10 p-4"
          >
            <Search className="h-12 w-12 text-primary" />
          </motion.div>

          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              oops... page not found
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              the page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Home className="h-4 w-4" />
              back to home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </StaticPageLayout>
  );
}
