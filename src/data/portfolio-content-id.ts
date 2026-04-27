import type { PortfolioContent } from "@/types/portfolio-content";

export const idPortfolioContent: PortfolioContent = {
    brand: "/assets/logo/logo-dark.png",
    role: "Full-Stack | Pengembangan Web",
    tagline: "Saya Muhamad Jaelani.",
    intro:
        "Seorang insinyur fullstack yang mengkhususkan diri dalam pengembangan frontend, dengan semangat untuk menciptakan antarmuka pengguna yang intuitif dan pengalaman digital yang mulus. Dengan fondasi yang kuat dalam teknologi frontend dan backend, saya berkembang dalam menjembatani kesenjangan antara desain dan fungsionalitas untuk menciptakan aplikasi web yang berdampak.",
    nav: [
        { label: "Ringkasan", href: "#overview" },
        { label: "Proyek", href: "#projects" },
        { label: "Keahlian", href: "#skills" },
        { label: "Kontak", href: "#contact" }
    ],
    stats: [
        { value: "2+", label: "Tahun Pengalaman" },
        { value: "4+", label: "Klien Puas" },
        { value: "20+", label: "Teknologi Digunakan" },
        { value: "10+", label: "Proyek Selesai" }
    ],
    highlights: [
        {
            title: "Sistem Komposabel",
            description: "Primitif yang selaras dengan Shadcn dengan varian yang dapat diprediksi dan token bersama.",
            icon: "layout-grid"
        },
        {
            title: "Pengiriman Aman Tipe",
            description: "Arsitektur TypeScript yang mengutamakan domain yang berskala tanpa ketergantungan UI.",
            icon: "shield-check"
        },
        {
            title: "Gerakan dengan Batasan",
            description: "Transisi Framer Motion yang disetel untuk keterbacaan, bukan gangguan visual.",
            icon: "sparkles"
        },
        {
            title: "Pola Pikir Performa",
            description: "Aset yang dioptimalkan, keputusan runtime yang lebih ringan, dan metrik UX praktis.",
            icon: "zap"
        }
    ],
    services: [
        {
            title: "Pengembangan Web",
            description: "Saya membangun situs web modern dan responsif yang terlihat bagus di perangkat apa pun dan membantu Anda menjangkau lebih banyak pelanggan online.",
            icon: "code2"
        },
        {
            title: "Pengembangan Aplikasi",
            description: "Menciptakan aplikasi seluler dan web yang kuat yang disesuaikan dengan kebutuhan bisnis dan persyaratan pengguna Anda.",
            icon: "laptop"
        },
        {
            title: "Desain UI/UX",
            description: "Merancang antarmuka yang bersih dan ramah pengguna yang membuat produk digital Anda mudah dan menyenangkan untuk digunakan.",
            icon: "palette"
        },
        {
            title: "Branding Digital",
            description: "Membantu Anda membangun kehadiran online yang kuat dengan identitas visual yang unik dan pesan merek yang konsisten.",
            icon: "sparkles"
        },
        {
            title: "E-commerce",
            description: "Menyiapkan toko online yang aman dan efisien sehingga Anda dapat menjual produk dan layanan Anda ke dunia.",
            icon: "rocket"
        },
        {
            title: "Konsultasi Teknologi",
            description: "Memberikan saran ahli tentang teknologi terbaik untuk digunakan pada proyek Anda guna memastikan keberhasilan jangka panjang.",
            icon: "zap"
        }
    ],
    process: [
        {
            title: "Perencanaan Strategis",
            description: "Menyelami tujuan Anda untuk membuat peta jalan teknis yang memastikan setiap piksel memiliki tujuan.",
            icon: "sparkles"
        },
        {
            title: "Desain Kreatif",
            description: "Membuat antarmuka yang modern dan intuitif yang tidak hanya terlihat memukau tetapi juga memberikan perjalanan pengguna yang mulus.",
            icon: "palette"
        },
        {
            title: "Pembangunan Presisi",
            description: "Mengembangkan dengan kode yang bersih dan efisien menggunakan framework terbaru untuk menjamin performa tinggi dan skalabilitas.",
            icon: "laptop"
        },
        {
            title: "Peluncuran Akhir",
            description: "Pengujian dan optimasi yang ketat diikuti dengan peluncuran yang mulus untuk membawa visi Anda ke dunia digital.",
            icon: "arrow-right"
        }
    ],
    testimonials: [
        {
            quote: "Pengalamannya terasa halus dan cepat. Setiap bagian memiliki tujuan dan transisinya terasa premium.",
            author: "Pemangku Kepentingan Proyek",
            role: "Product Lead"
        },
        {
            quote: "State hover dan gerakan membantu halaman terasa hidup tanpa menjadi mengganggu atau berisik.",
            author: "Kolaborator Desain",
            role: "UI Designer"
        },
        {
            quote: "Bekerja dengan Muhamad adalah pengubah permainan. Perhatian terhadap detail pada UI sangat berkelas.",
            author: "Alex Rivera",
            role: "CEO di TechFlow"
        },
        {
            quote: "Bakat langka yang memahami persyaratan estetika dan teknis dari aplikasi modern.",
            author: "Sarah Chen",
            role: "Arsitek UX Senior"
        }
    ],
    projects: [
        {
            title: "Penyegaran Platform Kampus",
            description: "Arsitektur situs web pendidikan yang dimodernisasi dengan fokus pada hierarki informasi dan navigasi cepat.",
            image: "/img/web-smkn1rks-home.webp",
            href: "https://smkn1rangkasbitung.sch.id/",
            stack: ["React", "TypeScript", "Tailwind"],
            year: "2026"
        },
        {
            title: "Konsol Galeri Realtime",
            description: "Konsep dasbor untuk ingesti media langsung, alur moderasi, dan cuplikan analitik.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400",
            href: "#contact",
            stack: ["Supabase", "Realtime", "UI Architecture"],
            year: "2026"
        },
        {
            title: "Workbench Metrik Operasi",
            description: "Permukaan produk padat data yang menyeimbangkan penemuan, presisi, dan alur kerja yang mengutamakan keyboard.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400",
            href: "#contact",
            stack: ["Charts", "State Modeling", "A11y"],
            year: "2025"
        }
    ],
    skills: [
        {
            title: "Rekayasa Frontend",
            icon: "laptop",
            skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"]
        },
        {
            title: "Integrasi Backend",
            icon: "server",
            skills: ["Node.js", "REST APIs", "Supabase", "Authentication"]
        },
        {
            title: "Data dan Penyimpanan",
            icon: "database",
            skills: ["PostgreSQL", "MySQL", "Prisma", "Data Modeling"]
        },
        {
            title: "Produk dan Desain",
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
        availableForWork: "Siap untuk bekerja",
        downloadCv: "Unduh CV",
        letsTalk: "Hubungi Saya",
        navigation: "Navigasi",
        myExpertise: "Keahlian Saya",
        myQualityServices: "Layanan Berkualitas Saya",
        servicesDescription: "Kami menuangkan ide dan keinginan Anda ke dalam bentuk proyek web unik yang menginspirasi Anda dan pelanggan Anda.",
        learnMore: "Pelajari Lebih Lanjut",
        ourWorkflow: "Alur Kerja Kami",
        workingProcess: "Proses Kerja",
        processDescription: "Pendekatan terstruktur untuk menghidupkan visi digital Anda dengan presisi dan kepedulian.",
        myTestimonials: "Testimoni Saya",
        clientFeedback: "Umpan Balik Klien",
        recentProjects: "Proyek Terbaru",
        myWork: "Pekerjaan Saya",
        professionalSkills: "Keahlian Profesional",
        techStack: "Tumpukan Teknologi",
        techStackDescription: "Memanfaatkan alat dan bahasa terkemuka di industri untuk membangun pengalaman digital yang kuat, terukur, dan dioptimalkan untuk performa.",
        builtWith: "Dibangun dengan",
        modernTech: "Teknologi Modern",
        getInTouch: "Hubungi Kami",
        contactDescription: "Punya proyek dalam pikiran? Mari diskusikan bagaimana kita bisa membangun sesuatu yang luar biasa bersama.",
        hireMe: "Pekerjakan Saya",
        letsBuildSomething: "Mari Bangun Sesuatu yang Berguna",
        contactSummary: "Terbuka untuk freelance dan kolaborasi produk jangka panjang. Saya dapat membantu Anda mengirimkan antarmuka yang halus dengan arsitektur yang kuat.",
        whatYouGet: "Apa yang Anda dapatkan",
        productionReady: "Frontend React siap produksi",
        strongUx: "UX yang kuat dan sistem responsif",
        maintainableCode: "Codebase yang mudah dipelihara dan terukur",
        projectInquiry: "Formulir Pertanyaan Proyek",
        projectGoals: "Bagikan tujuan proyek Anda dan saya akan menghubungi Anda dengan cepat.",
        yourName: "Nama Anda",
        emailAddress: "Alamat Email",
        howCanIHelp: "Bagaimana saya bisa membantu Anda?",
        sendMessage: "Kirim Pesan",
        readyToStart: "SIAP MEMULAI",
        yourProject: "PROYEK ANDA?",
        collaborate: "Kolaborasi",
        letsBuild: "Mari bangun",
        theFuture: "masa depan",
        together: "bersama.",
        ctaDescription: "Mengubah ide berani menjadi realitas digital berkinerja tinggi. Mari buat sesuatu yang dapat diskalakan dan menginspirasi.",
        kickstartNow: "Mulai Sekarang",
        readyToChat: "Siap mengobrol? Respons dalam 24 jam.",
        or: "ATAU"
    }
};
