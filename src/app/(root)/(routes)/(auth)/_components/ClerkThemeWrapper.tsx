"use client";

import { ClerkProvider, useAuth, useUser } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

function AuthToasts() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const wasSignedIn = useRef(false);

  useEffect(() => {
    if (isSignedIn && user) {
      wasSignedIn.current = true;
      if (!sessionStorage.getItem("welcomeToastShown")) {
        // Combined welcome and development warning toast
        toast(
          <div className="space-y-2">
            <div className="flex items-center">
              <svg 
                className="h-5 w-5 text-white mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="font-medium">Welcome back, {user.firstName || "there"}! 👋</span>
            </div>
            <div className="flex items-start text-sm">
              <svg 
                className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
              <span>This is a development environment. Data may be reset.</span>
            </div>
          </div>,
          {
            duration: 6000,
            position: "bottom-center",
            style: {
              background: "#10B981",
              color: "#fff",
              borderRadius: "8px",
              padding: "16px",
              borderLeft: "4px solid #059669",
            },
            icon: null,
          }
        );

        sessionStorage.setItem("welcomeToastShown", "true");
      }
    } else if (!isSignedIn && wasSignedIn.current) {
      wasSignedIn.current = false;
      sessionStorage.removeItem("welcomeToastShown");
      toast.success("You've been signed out. See you soon! 👋", {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: "#10B981",
          color: "#fff",
          borderRadius: "8px",
          padding: "16px",
        },
      });
    }
  }, [isSignedIn, user]);

  return null;
}

export default function ClerkThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  const appearance = {
    baseTheme: isDark ? shadesOfPurple : undefined,
    variables: {
      fontSize: "14px",
      colorPrimary: "hsl(217, 91%, 60%)",
      colorText: isDark ? "#f3f4f6" : "#1f2937",
      colorTextSecondary: isDark ? "#9ca3af" : "#4b5563",
      colorBackground: isDark ? "#1f2937" : "#ffffff",
      colorInputBackground: isDark ? "#111827" : "#f9fafb",
      colorInputText: isDark ? "#f9fafb" : "#111827",
    },
    elements: {
      card: "shadow-lg dark:shadow-lg dark:shadow-gray-900/20 border border-solid border-border dark:border-gray-700 p-0 w-full bg-card/50 dark:bg-card/80 backdrop-blur-sm overflow-hidden",
      headerTitle: 'text-2xl font-bold text-foreground',
      headerSubtitle: 'text-muted-foreground',
      form: 'px-6 pb-6',
      formField: 'text-sm',
      formFieldLabel: 'text-muted-foreground font-medium text-sm mb-1.5',
      formFieldInput: 'bg-background border-input text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:ring-primary/50 text-sm py-2',
      formFieldInputGroup: 'text-sm',
      socialButtonsRoot: 'px-3',
      socialButtons: 'px-3',
      socialButtonsBlockButton: 'border-border bg-background hover:bg-accent text-foreground',
      socialButtonsBlockButtonText: 'text-muted-foreground',
      dividerLine: 'bg-border',
      dividerText: 'text-muted-foreground',
      formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-sm font-medium text-white py-2 mt-2",
      footerActionText: isDark ? 'text-gray-400' : 'text-gray-600',
      footerActionLink: "text-indigo-400 hover:text-indigo-300 font-medium",
      formFieldAction: "text-indigo-400 hover:text-indigo-300",
      identityPreviewEditButton: "text-indigo-400 hover:text-indigo-300"
    }
  };

  return (
    <ClerkProvider appearance={appearance}>
      <AuthToasts />
      {children}
    </ClerkProvider>
  );
}
