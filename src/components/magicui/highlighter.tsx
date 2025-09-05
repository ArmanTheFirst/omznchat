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
  // Use theme-appropriate color
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the effective color based on the current theme
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

    // Create annotation with the current effective color
    const annotation = annotate(element, {
      type: action,
      color: effectiveColor,
      strokeWidth,
      padding,
      multiline,
      iterations: iterations === Infinity ? 0 : iterations,
      animationDuration,
    });

    // Show the annotation
    annotation.show();

    // Handle theme changes by recreating the annotation
    const handleThemeChange = () => {
      const newColor = theme === 'dark' ? (darkColor || color) : color;
      if (annotation) {
        annotation.remove();
        const newAnnotation = annotate(element, {
          type: action,
          color: newColor,
          strokeWidth,
          padding,
          multiline,
          iterations: iterations === Infinity ? 0 : iterations,
          animationDuration,
        });
        newAnnotation.show();
      }
    };

    // Add theme change listener
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
      if (element) {
        annotate(element, { type: action }).remove();
      }
    };
  }, [
    shouldShow,
    action,
    effectiveColor,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
    theme,
    darkColor,
    color,
  ]);

  return (
    <span 
      ref={elementRef} 
      className="relative inline-block bg-transparent"
      style={{
        '--highlight-color': color,
        '--highlight-dark-color': darkColor || color,
      } as React.CSSProperties}
    >
      {children}
    </span>
  );
}
