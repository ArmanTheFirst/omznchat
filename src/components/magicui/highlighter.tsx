"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { annotate } from "rough-notation";
import { useTheme } from "next-themes";
import type React from "react";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  darkColor?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean;
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#fef3c7",
  darkColor,
  strokeWidth = 2,
  animationDuration = 1000,
  iterations = 1,
  padding = 5,
  multiline = false,
  isView = true,
}: HighlighterProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure we're in the browser and component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Use darkColor if in dark mode and darkColor is provided
  const effectiveColor = mounted && theme === 'dark' ? (darkColor || color) : color;

  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  });

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView;

  useEffect(() => {
    if (!shouldShow) return;

    const element = elementRef.current;
    if (!element) return;

    const annotation = annotate(element, {
      type: action,
      color: effectiveColor,
      strokeWidth,
      padding,
      multiline,
      iterations: iterations === Infinity ? 0 : iterations,
      animationDuration,
    });

    annotation.show();

    return () => {
      if (element) {
        annotate(element, { type: action }).remove();
      }
    };
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
