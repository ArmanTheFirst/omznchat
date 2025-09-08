"use client";

import { useEffect, useState } from "react";

export default function TestError() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // This will be caught by the error boundary
      throw new Error("This is a test error to demonstrate the error page");
    }
  }, [countdown]);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-8">
      <div className="space-y-6 rounded-2xl border bg-card p-8 shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          testing error boundary
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          this page will throw a test error in {countdown}...
        </p>
        <p className="text-sm text-muted-foreground">
          (this is intentional to test the error page)
        </p>
      </div>
    </div>
  );
}
