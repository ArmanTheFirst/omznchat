"use client";

import { SignUp } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SignUpPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="flex min-h-dvh w-full items-center justify-center bg-gray-50 p-4 dark:bg-gray-900">
      <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-md dark:bg-gray-800">
        <Link 
          href="/" 
          className="mb-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Home
        </Link>
        <SignUp
          appearance={{
            baseTheme: isDark ? undefined : undefined, // Use default dark theme if dark mode
            variables: {
              fontSize: "14px",
              colorPrimary: "#4f46e5",
              colorText: isDark ? "#f3f4f6" : "#1f2937",
              colorTextSecondary: isDark ? "#9ca3af" : "#4b5563",
              colorBackground: isDark ? "#1f2937" : "#ffffff",
              colorInputBackground: isDark ? "#111827" : "#f9fafb",
              colorInputText: isDark ? "#f9fafb" : "#111827",
            },
            elements: {
              card: "shadow-none p-0 w-full",
              headerTitle: `text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`,
              headerSubtitle: isDark ? 'text-gray-300' : 'text-gray-600',
              socialButtonsBlockButton: isDark 
                ? "border-gray-600 hover:bg-gray-700 text-gray-300" 
                : "border-gray-300 hover:bg-gray-50 text-gray-700",
              dividerLine: isDark ? 'bg-gray-700' : 'bg-gray-200',
              dividerText: isDark ? 'text-gray-400' : 'text-gray-500',
              formFieldLabel: isDark ? 'text-gray-300 font-medium' : 'text-gray-700 font-medium',
              formFieldInput: isDark 
                ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500 focus:ring-indigo-500' 
                : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500',
              formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white",
              footerActionText: isDark ? 'text-gray-400' : 'text-gray-600',
              footerActionLink: "text-indigo-400 hover:text-indigo-300 font-medium",
              formFieldAction: "text-indigo-400 hover:text-indigo-300",
              identityPreviewEditButton: "text-indigo-400 hover:text-indigo-300"
            },
          }}
        />
      </div>
    </div>
  );
}
