"use client";

import { usePathname } from "next/navigation";
import Navbar from "./nav";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isProductRoute =
    pathname.startsWith("/dashboard") || pathname.startsWith("/chat");

  if (isProductRoute) {
    return null;
  }

  return <Navbar />;
}
