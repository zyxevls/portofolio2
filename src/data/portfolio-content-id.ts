import type { PortfolioContent } from "@/types/portfolio-content";

export const idPortfolioContent: PortfolioContent = {
    brand: "/assets/logo/logo-dark.png",
    role: "Full-Stack | Web Developer",
    tagline: "Halo, aku Jaelani nih!",
    intro:
        "Fullstack developer yang jatuh cinta sama dunia frontend, hobi banget bikin UI yang enak dilihat dan gampang dipake. Kuat di frontend maupun backend, dan paling suka bikin web yang kenceng tapi tetep halus pas dipake.",
    highlights: [
        { title: "React" },
        { title: "TypeScript" },
        { title: "Next.js" },
        { title: "Node.js" },
        { title: "Tailwind" }
    ],
    nav: [
        { label: "Tentang", href: "#overview" },
        { label: "Jasa", href: "#services" },
        { label: "Skill", href: "#skills" },
        { label: "Project", href: "#projects" },
        { label: "Kontak", href: "#contact" }
    ],
    stats: [
        { value: "2+", label: "Pengalaman" },
        { value: "4+", label: "Klien Happy" },
        { value: "20+", label: "Tech yang Dipake" },
        { value: "10+", label: "Project Kelar" }
    ],

    services: [
        {
            title: "Web Developer",
            description: "Bikin web kekinian yang responsif, cakep di layar kapan aja, dan bikin kamu makin gampang dikenal orang online.",
            icon: "code2"
        },
        {
            title: "Bikin Aplikasi",
            description: "Bikin aplikasi web & mobile yang kuat, disesuaikan sama kebutuhan bisnis dan user kamu.",
            icon: "laptop"
        },
        {
            title: "Desain UI/UX",
            description: "Racik tampilan yang bersih dan enak dipake biar produk digital kamu gampang & asik dipake.",
            icon: "palette"
        },
        {
            title: "Branding Digital",
            description: "Bantu bangun image online yang kuat lewat identitas visual unik dan pesan brand yang konsisten.",
            icon: "sparkles"
        },
        {
            title: "E-commerce",
            description: "Siapin toko online yang aman & efisien biar kamu bisa jualan ke seluruh dunia.",
            icon: "rocket"
        },
        {
            title: "Konsultasi Tech",
            description: "Kasih saran expert soal tech terbaik buat project kamu biar awet dan sukses jangka panjang.",
            icon: "zap"
        }
    ],
    process: [
        {
            title: "Rencana Dulu",
            description: "Kita gali dulu tujuan kamu biar tiap piksel punya makna dan nggak asal taruh.",
            icon: "sparkles"
        },
        {
            title: "Desain Kreatif",
            description: "Bikin tampilan yang modis & intuitif, nggak cuma cakep tapi nyaman banget dipake.",
            icon: "palette"
        },
        {
            title: "Coding Presisi",
            description: "Ngoding pake framework terbaru, clean & efisien biar kenceng dan gampang dikembangin.",
            icon: "laptop"
        },
        {
            title: "Peluncuran",
            description: "Test & optimasi sampe mateng, baru rilis mulus biar visi kamu hidup di dunia digital.",
            icon: "arrow-right"
        }
    ],
    testimonials: [
        {
            quote: "Rasanya halus banget dan kenceng. Tiap bagian ada fungsinya, transisinya terasa mewah.",
            author: "Stakeholder Proyek",
            role: "Product Lead"
        },
        {
            quote: "Efek hover & geraknya bikin halaman berasa hidup tanpa bikin pusing atau berisik.",
            author: "Teman Desain",
            role: "UI Designer"
        },
        {
            quote: "Kerja bareng Jaelani itu game changer sih. Detail UI-nya rapi banget, kelas deh.",
            author: "Alex Rivera",
            role: "CEO di TechFlow"
        },
        {
            quote: "Bakat langka yang paham sisi estetik & teknis app modern.",
            author: "Sarah Chen",
            role: "Senior UX Architect"
        }
    ],
    projects: [
        {
            title: "Penyegaran Platform Kampus",
            description: "Desain ulang web sekolah biar lebih modern, fokus ke info yang jelas dan navigasi yang cepet.",
            image: "/img/web-smkn1rks-home.webp",
            href: "https://smkn1rangkasbitung.sch.id/",
            stack: ["React", "TypeScript", "Tailwind"],
            year: "2026"
        },
        {
            title: "Konsol Galeri Realtime",
            description: "Konsep dashboard buat upload media real-time, alur moderasi, plus ringkasan analitik.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400",
            href: "#contact",
            stack: ["Supabase", "Realtime", "UI Architecture"],
            year: "2026"
        },
        {
            title: "Workbench Metrik Operasi",
            description: "Produk padat data yang seimbang antara eksplorasi, akurasi, dan alur kerja pakai keyboard.",
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
            title: "Produk & Desain",
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
        availableForWork: "Lagi open nih",
        downloadCv: "Download CV",
        letsTalk: "Yuk Ngobrol",
        navigation: "Menu Navigasi",
        myExpertise: "Skill Aku",
        myQualityServices: "Jasa Andalan Aku",
        servicesDescription: "Kita wujudin ide & keinginan kamu jadi project web kece yang bikin kamu & customermu terinspirasi.",
        learnMore: "Cek Selengkapnya",
        ourWorkflow: "Alur Kerja Kita",
        workingProcess: "Proses Kerja",
        processDescription: "Cara kita yang teratur buat mewujudin visi digital kamu dengan teliti.",
        myTestimonials: "Testimoni",
        clientFeedback: "Kata Klien",
        recentProjects: "Project Terbaru",
        myWork: "Karya Aku",
        professionalSkills: "Skill Profesional",
        techStack: "Tech Stack",
        techStackDescription: "Pake tool & bahasa kece di industri buat bangun pengalaman digital yang kuat, terukur, dan kenceng.",
        builtWith: "Dibangun pake",
        modernTech: "Tech Modern",
        getInTouch: "Hubungi Aku",
        contactDescription: "Punya ide project? Yuk obrolin gimana kita bisa bangun sesuatu yang keren bareng.",
        hireMe: "Hire Me",
        letsBuildSomething: "Mari Bangun Sesuatu yang Keren",
        contactSummary: "Open buat freelance & kolaborasi jangka panjang. Aku bantu kirim UI yang halus dengan arsitektur yang kuat.",
        whatYouGet: "Yang Kamu Dapet",
        productionReady: "Frontend React siap produksi",
        strongUx: "UX kuat & sistem responsif",
        maintainableCode: "Codebase yang rapi & gampang dikembangin",
        projectInquiry: "Form Pertanyaan Project",
        projectGoals: "Share tujuan project kamu, nanti aku hubungi cepet.",
        yourName: "Nama Kamu",
        emailAddress: "Email Kamu",
        howCanIHelp: "Ada yang bisa aku bantu?",
        sendMessage: "Kirim Pesan",
        readyToStart: "SIAP MULAI",
        yourProject: "PROJECT KAMU?",
        collaborate: "Kolaborasi",
        letsBuild: "Yuk bangun",
        theFuture: "masa depan",
        together: "bareng.",
        ctaDescription: "Ubah ide berani jadi realita digital yang kenceng. Yuk bikin yang scalable & inspiratif.",
        kickstartNow: "Gas Sekarang",
        readyToChat: "Siap ngobrol? Balas dalam 24 jam.",
        or: "ATAU",
        active: "Lagi Aktif",
        footerDescription: "Bikin pengalaman digital kenceng dengan presisi.",
        menu: "Menu",
        connect: "Connect",
        quickContact: "Kontak Cepat",
        allRightsReserved: "Hak cipta dilindungi.",
        backToTop: "Kembali ke atas"
    }
};
