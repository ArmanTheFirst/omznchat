"use client";

import StaticPageLayout from "@/components/static-page-layout";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { GitHub } from "@/components/icons/icons";

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
    <StaticPageLayout
      title="Something went wrong"
      description="An unexpected error occurred. Please try again."
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
            className="rounded-full bg-destructive/10 p-4"
          >
            <AlertCircle className="h-12 w-12 text-destructive" />
          </motion.div>

          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              oops... something went wrong
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              we're having some technical difficulties. please try again.
            </p>
            {error.message && (
              <p className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                error: {error.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <button
                onClick={() => reset()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <RefreshCw className="h-4 w-4" />
                Try again
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Home className="h-4 w-4" />
                Back to home
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={`${process.env.NEXT_PUBLIC_GITHUB_REPO_URL}/issues/new?title=Error%20Report&body=Please%20describe%20what%20happened%20and%20how%20to%20reproduce%20the%20issue...`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <GitHub className="h-4 w-4" />
                Report an issue
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </StaticPageLayout>
  )}
