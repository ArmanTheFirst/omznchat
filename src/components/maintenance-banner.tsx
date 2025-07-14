"use client";
import { useState } from "react";

export default function MaintenanceBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div
      className="mx-auto mt-2 flex w-full max-w-3xl items-center justify-between rounded-xl bg-yellow-200/90 px-4 py-2 shadow-lg ring-1 ring-yellow-300/60 backdrop-blur-md transition-all sm:mt-4 sm:px-6 sm:py-3 md:mt-6 md:px-8 md:py-4"
      style={{ fontFamily: 'inherit' }}
      role="status"
      aria-live="polite"
    >
      <span className="flex-1 text-center text-sm font-semibold text-yellow-900 sm:text-base md:text-lg">
        🚧 Site is under minor updates—<span className="font-bold">chat coming soon!</span>
      </span>
      <button
        aria-label="Dismiss maintenance banner"
        className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-100 text-yellow-900 transition hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:ml-4 md:h-8 md:w-8"
        onClick={() => setVisible(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}