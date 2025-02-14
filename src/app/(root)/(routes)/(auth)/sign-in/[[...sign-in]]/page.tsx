"use client";

import Footer from "@/components/footer";
import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SignInPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex h-dvh items-center justify-center py-10">
        <SignIn
          appearance={{
            variables: {
              colorPrimary: "#1D4ED8",
              fontSize: "14px",
            },
          }}
        />
      </div>
      <Footer />
    </>
  );
}
