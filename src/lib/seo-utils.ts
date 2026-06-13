/**
 * SEO utilities dan structured data
 * Digunakan untuk mengoptimalkan markup semantik dan metadata
 */

export const SEO_CONFIG = {
    siteName: "Muhamad Jaelani",
    siteUrl: "https://jaelanim.tech",
    defaultOgImage: "/og-image.png",
    socialLinks: {
        github: "https://github.com/zyxevls",
        linkedin: "https://linkedin.com/in/muhamadjaelani",
        twitter: "https://twitter.com/zyxevls",
    },
};

/**
 * Generate JSON-LD structured data untuk Person/Developer
 */
export function generatePersonSchema()
{
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SEO_CONFIG.siteUrl}/#person`,
        name: "Muhamad Jaelani",
        url: SEO_CONFIG.siteUrl,
        image: `${SEO_CONFIG.siteUrl}/profile.png`,
        jobTitle: "Full Stack Developer & UI/UX Designer",
        sameAs: [
            SEO_CONFIG.socialLinks.github,
            SEO_CONFIG.socialLinks.linkedin,
            SEO_CONFIG.socialLinks.twitter,
        ],
        description:
            "Full Stack Developer & UI/UX Designer specializing in building premium, high-performance web applications",
    };
}

/**
 * Generate JSON-LD structured data untuk Website
 */
export function generateWebsiteSchema()
{
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SEO_CONFIG.siteUrl}/?s={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

/**
 * Generate Organization schema dengan contact info
 */
export function generateOrganizationSchema()
{
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Muhamad Jaelani - Developer",
        url: SEO_CONFIG.siteUrl,
        logo: `${SEO_CONFIG.siteUrl}/logo-dark.png`,
        description:
            "Portfolio dan jasa konsultasi web development oleh Muhamad Jaelani",
        sameAs: Object.values(SEO_CONFIG.socialLinks),
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            url: `${SEO_CONFIG.siteUrl}/#contact`,
        },
    };
}

/**
 * Inject structured data ke <head>
 */
export function injectStructuredData()
{
    const schemas = [generatePersonSchema(), generateWebsiteSchema(), generateOrganizationSchema()];

    schemas.forEach((schema) =>
    {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);
    });
}

/**
 * Update meta tags untuk SEO
 */
export function updateMetaTags(page: "home" | "projects" | "contact" = "home")
{
    const descriptions: Record<string, string> = {
        home: "Muhamad Jaelani - Full Stack Developer & UI/UX Designer. Membangun aplikasi web premium dengan React, TypeScript, dan teknologi modern.",
        projects:
            "Portfolio proyek dari Muhamad Jaelani. Lihat proyek-proyek menarik yang telah dibuat dengan teknologi terkini.",
        contact: "Hubungi Muhamad Jaelani untuk konsultasi atau project development.",
    };

    const titleSuffix = " | Muhamad Jaelani - Full Stack Developer";

    // Update meta description
    let descElement = document.querySelector('meta[name="description"]');
    if (!descElement) {
        descElement = document.createElement("meta");
        descElement.setAttribute("name", "description");
        document.head.appendChild(descElement);
    }
    descElement.setAttribute("content", descriptions[page]);

    // Update Open Graph tags
    const ogTags = [
        { property: "og:title", content: `Muhamad Jaelani${titleSuffix}` },
        { property: "og:description", content: descriptions[page] },
        { property: "og:url", content: `${SEO_CONFIG.siteUrl}` },
        { property: "og:image", content: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultOgImage}` },
    ];

    ogTags.forEach(({ property, content }) =>
    {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
            element = document.createElement("meta");
            element.setAttribute("property", property);
            document.head.appendChild(element);
        }
        element.setAttribute("content", content);
    });
}

/**
 * Generate sitemap data
 */
export function generateSitemapData()
{
    return {
        urlset: [
            {
                url: SEO_CONFIG.siteUrl,
                lastmod: new Date().toISOString().split("T")[0],
                changefreq: "weekly",
                priority: "1.0",
            },
            {
                url: `${SEO_CONFIG.siteUrl}/#projects`,
                lastmod: new Date().toISOString().split("T")[0],
                changefreq: "weekly",
                priority: "0.8",
            },
            {
                url: `${SEO_CONFIG.siteUrl}/#contact`,
                lastmod: new Date().toISOString().split("T")[0],
                changefreq: "monthly",
                priority: "0.7",
            },
        ],
    };
}
