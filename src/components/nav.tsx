"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="top-0 z-50 w-full bg-navbar p-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between">
          <Link href="/" className="group flex items-center gap-1">
            <Image
              src={logo}
              height={40}
              width={40}
              alt="OMZN logo"
              className="transition-all duration-300 active:rotate-12 group-hover:-rotate-12"
            />
            <h1 className="hidden text-3xl font-bold transition-all duration-300 group-hover:translate-x-0.5 md:inline">
              <span>OMZN</span>
            </h1>
          </Link>

          <div className="flex flex-wrap items-center gap-2 text-lg">
            <Link
              href="/#product"
              className="btn btn-neutral hidden text-lg text-text-primary md:flex"
            >
              Product
            </Link>
            <Link
              href="/#pricing"
              className="btn btn-neutral hidden text-lg text-text-primary md:flex"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="btn btn-neutral hidden text-lg text-text-primary md:flex"
            >
              About
            </Link>
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Link href="/sign-in">
                <button className="btn btn-primary text-lg font-semibold duration-500 hover:btn-accent">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
