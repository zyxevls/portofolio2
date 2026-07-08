import type { PortfolioContent } from "@/types/portfolio-content";

export const portfolioContent: PortfolioContent = {
    brand: "/assets/logo/logo-dark.png",
    role: "Full-Stack | Web Development",
    tagline: "Hey, I'm Jaelani!",
    intro:
        "Fullstack dev who's lowkey obsessed with frontend, and I genuinely love crafting UIs that are easy on the eyes and a breeze to use. Solid on both frontend and backend, and I'm all about shipping web apps that feel fast and smooth.",
    highlights: [
        { title: "React" },
        { title: "TypeScript" },
        { title: "Next.js" },
        { title: "Node.js" },
        { title: "Tailwind" }
    ],
    nav: [
        { label: "About", href: "#overview" },
        { label: "Services", href: "#services" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ],
    stats: [
        { value: "2+", label: "Years in the game" },
        { value: "4+", label: "Happy Clients" },
        { value: "20+", label: "Tech I've used" },
        { value: "10+", label: "Projects shipped" }
    ],

    services: [
        {
            title: "Web Development",
            description: "I build modern, responsive sites that look dope on any device and help you pull in more people online.",
            icon: "code2"
        },
        {
            title: "App Development",
            description: "Whipping up powerful mobile & web apps built around what your biz and users actually need.",
            icon: "laptop"
        },
        {
            title: "UI/UX Design",
            description: "Designing clean, friendly interfaces that make your digital product easy and fun to use.",
            icon: "palette"
        },
        {
            title: "Digital Branding",
            description: "Helping you lock in a strong online presence with a unique visual vibe and consistent brand voice.",
            icon: "sparkles"
        },
        {
            title: "E-commerce",
            description: "Setting up secure, smooth online stores so you can sell your stuff to the whole world.",
            icon: "rocket"
        },
        {
            title: "Tech Consulting",
            description: "Giving you the real advice on which tech fits your project best so it stays winning long-term.",
            icon: "zap"
        }
    ],
    process: [
        {
            title: "Plan It Out",
            description: "We dig into your goals first so every pixel actually means something.",
            icon: "sparkles"
        },
        {
            title: "Creative Design",
            description: "Crafting interfaces that are not just pretty but super intuitive and a joy to click through.",
            icon: "palette"
        },
        {
            title: "Precision Build",
            description: "Coding with clean, efficient stacks on the latest frameworks so it's fast and easy to scale.",
            icon: "laptop"
        },
        {
            title: "Ship It",
            description: "Testing and tuning till it's solid, then a smooth launch to bring your vision online.",
            icon: "arrow-right"
        }
    ],
    testimonials: [
        {
            quote: "It feels so polished and fast. Every section has a point, and the transitions feel premium.",
            author: "Project Stakeholder",
            role: "Product Lead"
        },
        {
            quote: "The hover states and motion make the page feel alive without being loud or distracting.",
            author: "Design Collaborator",
            role: "UI Designer"
        },
        {
            quote: "Working with Jaelani was a total game-changer. The UI detail is next-level, no cap.",
            author: "Alex Rivera",
            role: "CEO at TechFlow"
        },
        {
            quote: "Rare talent who gets both the aesthetic and the technical side of modern apps.",
            author: "Sarah Chen",
            role: "Senior UX Architect"
        }
    ],
    projects: [
        {
            title: "SMKN 1 Rangkasbitung",
            description: "Modernized the school’s website with a clean, responsive design that highlights academic excellence and community events.",
            image: "/src/assets/projects/skensa.webp",
            href: "https://smkn1rangkasbitung.sch.id/",
            stack: ["Wordpress", "Elementor", "Bootstrap CSS"],
            year: "2026"
        },
        {
            title: "Realtime Gallery Console",
            description: "A dashboard concept for live media uploads, moderation flow, and quick analytics snapshots.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400",
            href: "#contact",
            stack: ["Supabase", "Realtime", "UI Architecture"],
            year: "2026"
        },
        {
            title: "Ops Metrics Workbench",
            description: "A data-heavy product that balances exploration, accuracy, and keyboard-first workflows.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400",
            href: "#contact",
            stack: ["Charts", "State Modeling", "A11y"],
            year: "2025"
        }
    ],
    skills: [
        {
            title: "Frontend",
            icon: "laptop",
            skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"]
        },
        {
            title: "Backend",
            icon: "server",
            skills: ["Node.js", "REST APIs", "Supabase", "Authentication"]
        },
        {
            title: "Data & Storage",
            icon: "database",
            skills: ["PostgreSQL", "MySQL", "Prisma", "Data Modeling"]
        },
        {
            title: "Product & Design",
            icon: "palette",
            skills: ["Figma", "Design Systems", "UX Writing", "Interaction Design"]
        }
    ],
    contactLinks: [
        { label: "GitHub", href: "https://github.com/", icon: "github" },
        { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
        { label: "Email", href: "mailto:hello@example.com", icon: "mail" }
    ],
    common: {
        availableForWork: "I'm open!",
        downloadCv: "Download CV",
        letsTalk: "Let's Chat",
        navigation: "Nav",
        myExpertise: "My Skills",
        myQualityServices: "My Go-To Services",
        servicesDescription: "We turn your ideas and wishes into a unique web project that hypes you and your customers up.",
        learnMore: "Check it out",
        ourWorkflow: "Our Workflow",
        workingProcess: "How I Work",
        processDescription: "My organized way of bringing your digital vision to life with care.",
        myTestimonials: "Testimonials",
        clientFeedback: "What Clients Say",
        recentProjects: "Recent Projects",
        myWork: "My Work",
        professionalSkills: "Professional Skills",
        techStack: "Tech Stack",
        techStackDescription: "Using top-tier tools and languages to build digital experiences that are solid, scalable, and fast.",
        builtWith: "Built with",
        modernTech: "Modern Tech",
        getInTouch: "Hit Me Up",
        contactDescription: "Got a project in mind? Let's talk about building something cool together.",
        hireMe: "Hire Me",
        letsBuildSomething: "Let's Build Something Cool",
        contactSummary: "Open for freelance and long-term collabs. I'll help you ship clean UIs on solid architecture.",
        whatYouGet: "What you get",
        productionReady: "Production-ready React frontend",
        strongUx: "Strong UX and responsive system",
        maintainableCode: "Clean, scalable codebase",
        projectInquiry: "Project Inquiry Form",
        projectGoals: "Drop your project goals and I'll hit you back quick.",
        yourName: "Your Name",
        emailAddress: "Your Email",
        howCanIHelp: "How can I help?",
        sendMessage: "Send Message",
        readyToStart: "READY TO START",
        yourProject: "YOUR PROJECT?",
        collaborate: "Collaborate",
        letsBuild: "Let's build",
        theFuture: "the future",
        together: "together.",
        ctaDescription: "Turning bold ideas into high-performance digital reality. Let's make something that scales and inspires.",
        kickstartNow: "Let's Go",
        readyToChat: "Down to chat? I reply within 24h.",
        or: "OR",
        active: "Online",
        footerDescription: "Crafting fast digital experiences with precision.",
        menu: "Menu",
        connect: "Connect",
        quickContact: "Quick Contact",
        allRightsReserved: "All rights reserved.",
        backToTop: "Back to top"
    }
};
