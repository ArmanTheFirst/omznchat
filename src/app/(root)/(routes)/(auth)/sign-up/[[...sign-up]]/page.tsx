"use client";

import Footer from "@/components/footer";
import { SignUp } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SignUpPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex min-h-dvh items-center justify-center py-10">
        <SignUp
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
