"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import ModalComponent from "./menu-modal";
import { useUser, UserButton } from "@clerk/nextjs";
import ChatButton from "./chatbutton";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { LayoutDashboard } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const isLandingPage = pathname === "/";
  const isDashboardPage = pathname.startsWith("/dashboard");
  const isChatPage = pathname.startsWith("/chat");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active section based on scroll position
      const sections = ["product", "pricing"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 flex w-full justify-center bg-transparent transition-all duration-300"
    >
      <div
        className={`mx-auto mt-3 w-[95vw] max-w-4xl rounded-2xl border border-[#64748bcc] bg-white/50 px-6 shadow-xl backdrop-blur-lg transition-all duration-300 dark:border-t dark:border-t-white/30 dark:bg-gray-900/60 ${
          scrolled ? "ring-1 ring-blue-200/40" : ""
        }`}
        style={{
          boxShadow:
            "0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.04)",
        }}
      >
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: -12 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <Image
                src={logo}
                height={40}
                width={40}
                alt="OMZN logo"
                className="transition-all duration-300"
              />
              <motion.div
                className="absolute -inset-1 rounded-full bg-blue-500/10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                OMZN
              </h1>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                AI-Powered Chat
              </span>
            </div>
            <span className="ml-3 rounded-full border border-yellow-200 bg-yellow-100 px-2 py-0.5 align-middle text-xs font-semibold text-yellow-800 dark:border-yellow-700 dark:bg-yellow-900 dark:text-yellow-200">
              Dev Mode
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {isLandingPage && (
              <div className="hidden md:flex md:items-center md:gap-8">
                <NavLink
                  href="/#product"
                  isActive={activeSection === "product"}
                >
                  Product
                </NavLink>
                <NavLink
                  href="/#pricing"
                  isActive={activeSection === "pricing"}
                >
                  Pricing
                </NavLink>
              </div>
            )}

            <div className="hidden md:flex md:items-center md:gap-4">
              {isSignedIn ? (
                <>
                  {isDashboardPage ? (
                    <Link
                      href="/"
                      className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Back to Home
                    </Link>
                  ) : isChatPage ? (
                    <Link
                      href="/dashboard"
                      className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>
                  ) : (
                    <Link
                      href="/dashboard"
                      className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>
                  )}
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "scale-[1.2]",
                      },
                    }}
                  />
                </>
              ) : (
                <ChatButton
                  label="Launch App"
                  className="relative overflow-hidden rounded-full bg-blue-600 px-6 py-2.5 text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 dark:bg-blue-500 dark:hover:bg-blue-600"
                />
              )}
            </div>

            <ModalComponent
              classes="flex md:hidden"
              isSignedIn={isSignedIn as boolean}
              imageUrl={user?.imageUrl}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className="group relative px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
    >
      {children}
      <AnimatePresence>
        {isActive && (
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400"
          />
        )}
      </AnimatePresence>
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 dark:bg-blue-400"
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
}
