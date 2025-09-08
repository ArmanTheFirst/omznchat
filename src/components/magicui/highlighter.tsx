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

  const annotationRef = useRef<any>(null);

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

    // Store reference to annotation
    annotationRef.current = annotation;

    // Show the annotation
    annotation.show();

    return () => {
      if (element) {
        annotation.remove();
        annotationRef.current = null;
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
  ]);

  // Handle theme changes by updating the SVG color directly
  useEffect(() => {
    if (!shouldShow || !mounted || !annotationRef.current) return;

    const newColor = theme === 'dark' ? (darkColor || color) : color;
    
    // Find and update the SVG stroke color directly
    const element = elementRef.current;
    if (element) {
      const svgElements = element.querySelectorAll('svg');
      svgElements.forEach(svg => {
        const paths = svg.querySelectorAll('path, line, polyline, polygon, circle, ellipse, rect');
        paths.forEach(path => {
          path.setAttribute('stroke', newColor);
        });
      });
    }
  }, [theme, mounted, shouldShow, darkColor, color]);

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


