"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { useUser, useClerk } from "@clerk/nextjs";
import ChatButton from "./chatbutton";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export default function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Section IDs for scrollspy
  const sectionLinks = [
    { label: "Features", id: "features", href: "/#features" },
    { label: "How it Works", id: "how-it-works", href: "/#how-it-works" },
    { label: "Pricing", id: "pricing", href: "/#pricing" },
  ];

  useEffect(() => {
    function onScroll() {
      if (pathname !== "/") return;
      let found = "";
      for (let i = sectionLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionLinks[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Use nav height as threshold (e.g., 80px)
          const threshold = 80;
          if (rect.top <= threshold && rect.bottom > threshold) {
            found = sectionLinks[i].id;
            break;
          }
        }
      }
      setActiveSection(found);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, sectionLinks]);

  // Trap focus in drawer when open and prevent background scroll
  useEffect(() => {
    if (!mobileOpen) return;

    // Prevent background scroll
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
      // Trap focus
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    // Focus first link
    setTimeout(() => {
      const first = drawerRef.current?.querySelector<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [mobileOpen]);

  // Navigation links config
  const navLinks = [{ label: "Home", href: "/" }, ...sectionLinks];
  if (isSignedIn) {
    navLinks.push({ label: "Chat", href: "/chat" });
  }

  function isActive(link: { label: string; href: string; id?: string }) {
    if (link.href === "/") return pathname === "/" && !activeSection;
    if (link.href === "/chat") return pathname.startsWith("/chat");
    if (link.href === "/dashboard") return pathname.startsWith("/dashboard");
    if (link.id) return pathname === "/" && activeSection === link.id;
    return false;
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-transparent transition-all duration-300`}
      aria-label="Main navigation"
    >
      <div className="mx-auto mb-2 mt-2 w-[95vw] max-w-4xl rounded-2xl border border-gray-200 bg-white/70 px-2 shadow-xl backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
        <div className="flex h-16 items-center justify-between px-2 md:px-8">
          {/* Left: Logo + Brand (centered on mobile) */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="OMZN Home"
          >
            <Image
              src={logo}
              height={40}
              width={40}
              alt="OMZN logo"
              className="rounded-lg"
            />
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-xl">
              OMZN
            </span>
            {process.env.NODE_ENV === "development" && (
              <span className="ml-2 rounded border border-yellow-100 bg-yellow-50 px-2 py-0.5 align-middle text-[10px] font-semibold text-yellow-700 opacity-80 dark:border-yellow-800/40 dark:bg-yellow-900/40 dark:text-yellow-200">
                Dev
              </span>
            )}
          </Link>
          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-2 md:flex lg:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${isActive(link) ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : "text-gray-700 hover:bg-blue-100/60 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800/60 dark:hover:text-blue-400"}`}
                aria-current={isActive(link) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Right: CTA or User + Mobile menu button */}
          <div className="flex items-center gap-1 md:gap-2">
            {isLoaded &&
              (isSignedIn ? (
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                    {user?.firstName?.charAt(0) ||
                      user?.emailAddresses[0]?.emailAddress?.charAt(0) ||
                      "U"}
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="hidden rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white md:inline-flex"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <ChatButton
                  label="Launch App"
                  className="hidden rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600 md:inline-flex md:px-5 md:py-2.5 md:text-base"
                />
              ))}
            {/* Mobile menu button */}
            <button
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white/80 shadow-sm transition-all hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900/80 dark:hover:bg-gray-800 md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Nav Drawer + Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
              aria-hidden
              onClick={() => setMobileOpen(false)}
            />
            {/* Slide-down Drawer */}
            <motion.div
              ref={drawerRef}
              initial={{ y: -64, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -64, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed left-0 right-0 top-0 z-50 h-[100dvh] w-full bg-white/95 px-6 pb-20 pt-6 shadow-2xl backdrop-blur-2xl dark:bg-gray-900/95 md:hidden"
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
            >
              <div className="h-full overflow-y-auto pb-6">
                <div className="flex items-center justify-between pb-6">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    aria-label="OMZN Home"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Image
                      src={logo}
                      height={36}
                      width={36}
                      alt="OMZN logo"
                      className="rounded-lg"
                    />
                    <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      OMZN
                    </span>
                    {process.env.NODE_ENV === "development" && (
                      <span className="ml-1 rounded border border-yellow-100 bg-yellow-50 px-1.5 py-0.5 align-middle text-[9px] font-semibold text-yellow-700 opacity-80 dark:border-yellow-800/40 dark:bg-yellow-900/40 dark:text-yellow-200">
                        Dev
                      </span>
                    )}
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="rounded-full p-3 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                  >
                    <X className="h-7 w-7" />
                  </button>
                </div>
                <nav className="mt-2 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-xl px-4 py-5 text-xl font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${isActive(link) ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : "text-gray-700 hover:bg-blue-100/60 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-gray-800/60 dark:hover:text-blue-400"}`}
                      aria-current={isActive(link) ? "page" : undefined}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
                  {isLoaded &&
                    (isSignedIn ? (
                      <div className="space-y-4">
                        {/* User Info Section */}
                        <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-lg font-semibold text-white shadow-sm">
                            {user?.firstName?.charAt(0) ||
                              user?.emailAddresses[0]?.emailAddress?.charAt(
                                0,
                              ) ||
                              "U"}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                              {user?.firstName} {user?.lastName}
                            </p>
                            <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                              {user?.emailAddresses[0]?.emailAddress}
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-3">
                          <Link
                            href="/chat"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-600"
                            onClick={() => setMobileOpen(false)}
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                              />
                            </svg>
                            Go to Chat
                          </Link>
                          <Link
                            href="/dashboard"
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 text-base font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:bg-gray-700"
                            onClick={() => setMobileOpen(false)}
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                            Dashboard
                          </Link>
                          <button
                            onClick={() => {
                              signOut();
                              setMobileOpen(false);
                            }}
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-base font-medium text-red-700 transition-all hover:border-red-300 hover:bg-red-100 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:hover:border-red-700 dark:hover:bg-red-900/30"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                              />
                            </svg>
                            Sign Out
                          </button>
                        </div>
                      </div>
                    ) : (
                      <ChatButton
                        label="Launch App"
                        className="w-full rounded-full bg-blue-600 px-5 py-4 text-lg font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-600"
                        onClick={() => setMobileOpen(false)}
                      />
                    ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
