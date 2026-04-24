import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(selector: string, behavior: ScrollBehavior = "smooth"): void {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior });
  }
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Toggle dark mode class on document
 */
export function toggleDarkMode(isDark: boolean): void {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

/**
 * Get dark mode preference from localStorage
 */
export function getDarkModePreference(): boolean {
  if (typeof localStorage === "undefined") return false;
  const saved = localStorage.getItem("darkMode");
  return saved ? JSON.parse(saved) : false;
}

/**
 * Save dark mode preference to localStorage
 */
export function saveDarkModePreference(isDark: boolean): void {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }
}