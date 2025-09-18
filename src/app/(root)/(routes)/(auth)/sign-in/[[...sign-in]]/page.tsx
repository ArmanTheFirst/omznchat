"use client";

import { SignIn, ClerkLoading, ClerkLoaded, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [mounted, setMounted] = useState(false);
  const [isAuthComplete, setIsAuthComplete] = useState(false);
  const { resolvedTheme } = useTheme();
  const { isSignedIn } = useUser();
  const router = useRouter();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    if (isSignedIn) {
      setIsAuthComplete(true);
      const timer = setTimeout(() => {
        router.push('/chat');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex min-h-dvh w-full items-center justify-center p-4 bg-background">
        <div className="relative w-full max-w-xl rounded-lg border border-border dark:border-gray-700 shadow-lg dark:shadow-gray-900/20 bg-card dark:bg-card/80">
          <div className="p-6">
            <div className="h-8 w-24 mb-6 bg-muted rounded"></div>
            <div className="space-y-4">
              <div className="h-4 w-3/4 bg-muted rounded"></div>
              <div className="h-10 bg-muted rounded"></div>
              <div className="h-10 bg-muted rounded"></div>
              <div className="h-10 bg-primary rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-[100dvh] bg-background">
      <BackgroundLines className="absolute inset-0 hidden md:block" svgOptions={{}}>
        <></>
      </BackgroundLines>
      <div className="relative z-10 flex min-h-[100dvh] w-full items-center justify-center p-4">
        <div className="w-full max-w-xl rounded-lg border border-border bg-card shadow-lg dark:border-gray-700 dark:bg-card/80 dark:shadow-gray-900/20">
          <div className="px-6 pt-6 pb-6">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        
        <ClerkLoading>
          <div className="space-y-4">
            <div className="h-10 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-10 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-10 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-10 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-10 w-1/2 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
          </div>
        </ClerkLoading>
        
        <ClerkLoaded>
          {isAuthComplete ? (
            <div className="p-6 flex flex-col items-center justify-center space-y-4 min-h-[400px]">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-75"></div>
                <CheckCircle2 className="h-12 w-12 text-green-500 relative z-10" />
              </div>
              <h2 className="text-2xl font-bold text-center">Authentication Successful!</h2>
              <p className="text-muted-foreground text-center">Taking you to your chat...</p>
              <Loader2 className="h-8 w-8 animate-spin text-primary mt-4" />
            </div>
          ) : (
            <div className="px-6 pb-6 [&_.cl-card]:border-none [&_.cl-card]:shadow-none">
              <SignIn 
                afterSignInUrl="/chat"
                afterSignUpUrl="/sign-up"
                signUpFallbackRedirectUrl="/sign-up"
              />
            </div>
          )}
        </ClerkLoaded>
      </div>
    </div>
  </div>
  );
}
