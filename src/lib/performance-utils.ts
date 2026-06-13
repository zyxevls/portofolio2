/**
 * Initializes basic performance monitoring using the Web Vitals API (if available).
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === "undefined") return;

  // Log navigation timing when the page fully loads
  window.addEventListener("load", () => {
    const nav = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming | undefined;

    if (nav) {
      const lcp = nav.loadEventEnd - nav.startTime;
      if (import.meta.env.DEV) {
        console.debug(`[Perf] Page load: ${lcp.toFixed(0)}ms`);
      }
    }
  });
}

/**
 * Preloads critical image resources to reduce LCP.
 */
export function preloadCriticalResources(): void {
  const criticalImages = [
    "/img/profile.png",
  ];

  for (const href of criticalImages) {
    const existing = document.querySelector(`link[rel="preload"][href="${href}"]`);
    if (existing) continue;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    document.head.appendChild(link);
  }
}
