"use client";

import Footer from "@/components/footer";
import Link from "next/link";

export default function Error() {
  return (
    <div className="pt-28 text-center">
      <div className="px-5">
        <h1 className="text-4xl font-bold">
          Well... This wasn&apos;t supposed to happen 🤖💥
        </h1>
        <p className="py-5 text-xl">
          Looks like our AI got a little too smart and broke something. Try
          refreshing or come back later!
        </p>
        <Link href="/" className="btn btn-primary text-base">
          Back to Safety
        </Link>
      </div>
      <Footer />
    </div>
  );
}
