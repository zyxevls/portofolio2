import { portfolioContent } from "@/data/portfolio-content";

/**
 * Injects JSON-LD structured data for SEO into the document head.
 */
export function injectStructuredData(): void {
  const existing = document.getElementById("structured-data");
  if (existing) return;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhamad Jaelani",
    url: window.location.origin,
    jobTitle: "Fullstack Developer",
    description: portfolioContent.intro,
    sameAs: [
      "https://github.com/zyxevls",
      "https://www.linkedin.com/in/jaelanim",
    ],
  };

  const script = document.createElement("script");
  script.id = "structured-data";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

type PageKey = "home";

const metaConfig: Record<PageKey, { title: string; description: string }> = {
  home: {
    title: "Muhamad Jaelani — Fullstack Developer",
    description: portfolioContent.intro,
  },
};

/**
 * Updates the document title and meta description for a given page.
 */
export function updateMetaTags(page: PageKey): void {
  const config = metaConfig[page];
  if (!config) return;

  document.title = config.title;

  let metaDesc = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]'
  );
  if (!metaDesc) {
    metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = config.description;
}
