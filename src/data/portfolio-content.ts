import type { PortfolioContent } from "@/types/portfolio-content";

export const portfolioContent: PortfolioContent = {
    brand: "/assets/logo/logo-dark.png",
    role: "Full-Stack | Web Development",
    tagline: "I am Muhamad Jaelani.",
    intro:
        "A fullstack engineer specializing in frontend development, with a passion for crafting intuitive user interfaces and seamless digital experiences. With a strong foundation in both frontend and backend technologies, I thrive on bridging the gap between design and functionality to create impactful web applications.",
    nav: [
        { label: "Overview", href: "#overview" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" }
    ],
    stats: [
        { value: "2+", label: "Years of Experience" },
        { value: "4+", label: "Happy Clients" },
        { value: "20+", label: "Tech Stack Used" },
        { value: "10+", label: "Projects Completed" }
    ],
    highlights: [
        {
            title: "Composable Systems",
            description: "Shadcn-aligned primitives with predictable variants and shared tokens.",
            icon: "layout-grid"
        },
        {
            title: "Type-Safe Delivery",
            description: "Domain-first TypeScript architecture that scales without UI coupling.",
            icon: "shield-check"
        },
        {
            title: "Motion with Restraint",
            description: "Framer Motion transitions tuned for readability, not visual noise.",
            icon: "sparkles"
        },
        {
            title: "Performance Mindset",
            description: "Optimized assets, lighter runtime decisions, and practical UX metrics.",
            icon: "zap"
        }
    ],
    services: [
        {
            title: "Web Development",
            description: "I build modern, responsive websites that look great on any device and help you reach more customers online.",
            icon: "code2"
        },
        {
            title: "App Development",
            description: "Creating powerful mobile and web applications tailored to your business needs and user requirements.",
            icon: "laptop"
        },
        {
            title: "UI/UX Design",
            description: "Designing clean, user-friendly interfaces that make your digital products easy and enjoyable to use.",
            icon: "palette"
        },
        {
            title: "Digital Branding",
            description: "Helping you establish a strong online presence with unique visual identities and consistent brand messaging.",
            icon: "sparkles"
        },
        {
            title: "E-commerce",
            description: "Setting up secure and efficient online stores so you can sell your products and services to the world.",
            icon: "rocket"
        },
        {
            title: "Tech Consulting",
            description: "Providing expert advice on the best technologies to use for your project to ensure long-term success.",
            icon: "zap"
        }
    ],
    process: [
        {
            title: "Strategic Planning",
            description: "Deep diving into your goals to create a technical roadmap that ensures every pixel serves a purpose.",
            icon: "sparkles"
        },
        {
            title: "Creative Design",
            description: "Crafting modern, intuitive interfaces that not only look stunning but also provide a seamless user journey.",
            icon: "palette"
        },
        {
            title: "Precision Build",
            description: "Developing with clean, efficient code using the latest frameworks to guarantee high performance and scalability.",
            icon: "laptop"
        },
        {
            title: "Final Deployment",
            description: "Rigorous testing and optimization followed by a smooth launch to bring your vision to the digital world.",
            icon: "arrow-right"
        }
    ],
    testimonials: [
        {
            quote: "The experience feels polished and fast. Every section has a purpose and the transitions feel premium.",
            author: "Project Stakeholder",
            role: "Product Lead"
        },
        {
            quote: "The hover states and motion help the page feel alive without becoming distracting or noisy.",
            author: "Design Collaborator",
            role: "UI Designer"
        }
    ],
    projects: [
        {
            title: "Campus Platform Refresh",
            description: "A modernized educational website architecture focused on information hierarchy and fast navigation.",
            image: "/img/web-smkn1rks-home.webp",
            href: "https://smkn1rangkasbitung.sch.id/",
            stack: ["React", "TypeScript", "Tailwind"],
            year: "2026"
        },
        {
            title: "Realtime Gallery Console",
            description: "A dashboard concept for live media ingestion, moderation flow, and analytics snapshots.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400",
            href: "#contact",
            stack: ["Supabase", "Realtime", "UI Architecture"],
            year: "2026"
        },
        {
            title: "Ops Metrics Workbench",
            description: "Data-dense product surface balancing discoverability, precision, and keyboard-first workflows.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400",
            href: "#contact",
            stack: ["Charts", "State Modeling", "A11y"],
            year: "2025"
        }
    ],
    skills: [
        {
            title: "Frontend Engineering",
            icon: "laptop",
            skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"]
        },
        {
            title: "Backend Integration",
            icon: "server",
            skills: ["Node.js", "REST APIs", "Supabase", "Authentication"]
        },
        {
            title: "Data and Storage",
            icon: "database",
            skills: ["PostgreSQL", "MySQL", "Prisma", "Data Modeling"]
        },
        {
            title: "Product and Design",
            icon: "palette",
            skills: ["Figma", "Design Systems", "UX Writing", "Interaction Design"]
        }
    ],
    contactLinks: [
        { label: "GitHub", href: "https://github.com/", icon: "github" },
        { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
        { label: "Email", href: "mailto:hello@example.com", icon: "mail" }
    ]
};
