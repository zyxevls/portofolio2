/**
 * Performance optimization utilities
 * Monitoring, image optimization, dan lazy loading strategies
 */

/**
 * Performance metrics monitoring untuk Core Web Vitals
 */
export function initPerformanceMonitoring()
{
    if ("web-vital" in window || "PerformanceObserver" in window) {
        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) =>
        {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log("LCP:", lastEntry.renderTime || lastEntry.loadTime);
        });

        // First Input Delay (FID) / Interaction to Next Paint (INP)
        const fidObserver = new PerformanceObserver((list) =>
        {
            for (const entry of list.getEntries()) {
                console.log("FID/INP:", entry.processingDuration);
            }
        });

        // Cumulative Layout Shift (CLS)
        const clsObserver = new PerformanceObserver((list) =>
        {
            let clsValue = 0;
            for (const entry of list.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            }
            console.log("CLS:", clsValue);
        });

        try {
            lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
            fidObserver.observe({ entryTypes: ["first-input", "event"] });
            clsObserver.observe({ entryTypes: ["layout-shift"] });
        } catch (e) {
            console.debug("Some PerformanceObserver not supported");
        }
    }
}

/**
 * Image optimization hints - gunakan pada img elements
 */
export const imageOptimizationConfig = {
    lazy: "lazy" as const,
    loading: "lazy" as const,
    decoding: "async" as const,
};

/**
 * Generate responsive image srcset untuk WebP + fallback
 */
export function generateImageSrcSet(basePath: string)
{
    return {
        webp: `${basePath}.webp 1x, ${basePath}@2x.webp 2x`,
        fallback: `${basePath}.png 1x, ${basePath}@2x.png 2x`,
    };
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources()
{
    const criticalFonts = [
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
    ];

    criticalFonts.forEach((href) =>
    {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "style";
        link.href = href;
        document.head.appendChild(link);
    });
}

/**
 * Prefetch non-critical resources
 */
export function prefetchResources(urls: string[])
{
    urls.forEach((url) =>
    {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = url;
        document.head.appendChild(link);
    });
}

/**
 * Enable compression hint untuk besar resources
 */
export function enableCompressionHints()
{
    if ("PerformanceResourceTiming" in window) {
        const observer = new PerformanceObserver((list) =>
        {
            for (const entry of list.getEntries()) {
                if (entry.transferSize > 0) {
                    const ratio = ((entry.transferSize / entry.decodedBodySize) * 100).toFixed(2);
                    console.debug(`${entry.name} - Compression: ${ratio}%`);
                }
            }
        });
        observer.observe({ entryTypes: ["resource"] });
    }
}

/**
 * Request idle callback untuk non-critical tasks
 */
export function scheduleIdleWork(callback: () => void, timeout = 2000)
{
    if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(callback, { timeout });
    } else {
        setTimeout(callback, timeout);
    }
}

/**
 * Intersection observer untuk lazy-load elements
 */
export function observeLazyElements(selector: string, callback?: (el: Element) => void)
{
    const elements = document.querySelectorAll(selector);

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) =>
        {
            entries.forEach((entry) =>
            {
                if (entry.isIntersecting) {
                    callback?.(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        elements.forEach((el) => observer.observe(el));
    }
}

/**
 * Get Performance Score (simulate Lighthouse score)
 */
export function getPerformanceScore(): number
{
    if ("performance" in window) {
        const navigation = performance.getEntriesByType("navigation")[0];
        if (navigation) {
            const duration = (navigation as any).loadEventEnd - (navigation as any).fetchStart;
            return Math.max(0, 100 - Math.floor(duration / 50));
        }
    }
    return 100;
}

/**
 * Analytics event tracking (privacy-friendly)
 */
export function trackEvent(eventName: string, data?: Record<string, unknown>)
{
    if (window.location.hostname !== "localhost") {
        const event = new CustomEvent("analytics", {
            detail: { eventName, data, timestamp: new Date().toISOString() },
        });
        window.dispatchEvent(event);
    }
}
