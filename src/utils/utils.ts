import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pluralize(
  count: number,
  singular: string,
  plural: string = `${singular}s`,
) {
  return count === 1 ? singular : plural;
}

export function capitalize(str: string) {
  if (!str) return "Unknown";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const isServer = () => typeof window === "undefined";
