"use client";
import { useState } from "react";

export default function MaintenanceBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-yellow-300 text-gray-900 flex items-center justify-center py-2 px-4 font-medium shadow-md">
      <span className="flex-1 text-center">🚧 Site is under minor updates—chat coming soon!</span>
      <button
        aria-label="Dismiss maintenance banner"
        className="ml-4 rounded-full p-1 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        onClick={() => setVisible(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}