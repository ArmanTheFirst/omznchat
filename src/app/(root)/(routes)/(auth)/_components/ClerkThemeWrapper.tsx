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
        toast.success(`Welcome back, ${user.firstName || "there"}! 👋`, {
          duration: 4000,
          position: "bottom-center",
          style: {
            background: "#10B981",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
          },
        });
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

  return (
    <ClerkProvider
      appearance={theme === "dark" ? { baseTheme: shadesOfPurple } : undefined}
    >
      <AuthToasts />
      {children}
    </ClerkProvider>
  );
}
