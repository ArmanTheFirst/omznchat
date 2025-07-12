"use client";

import { useEffect } from "react";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  useEffect(() => {
    // Simple scroll to top after component mounts
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
}
