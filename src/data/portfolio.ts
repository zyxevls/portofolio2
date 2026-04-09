import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Blocks,
  BriefcaseBusiness,
  Code2,
  DatabaseZap,
  Github,
  GraduationCap,
  Mail,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  TabletSmartphone,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface FeatureCardData {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  href: string;
  category: string;
  year: string;
  tags: string[];
}

export interface SkillGroup {
  name: string;
  description: string;
  items: string[];
}

export interface EducationEntry {
  school: string;
  program: string;
  year: string;
  description: string;
  logo: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: HeroStat[] = [
  { value: "10+", label: "Interfaces shipped" },
  { value: "4", label: "Core disciplines" },
  { value: "100%", label: "Responsive focus" },
];

export const featureCards: FeatureCardData[] = [
  {
    title: "Composable UI",
    description: "Reusable primitives keep the portfolio consistent, maintainable, and fast to extend.",
    icon: Blocks,
  },
  {
    title: "Modern Motion",
    description: "Scroll-aware animation adds polish without overwhelming the content or the layout.",
    icon: Sparkles,
  },
  {
    title: "System Thinking",
    description: "A modular TypeScript structure makes every section easy to evolve and reason about.",
    icon: ShieldCheck,
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A polished personal portfolio with motion, responsive layout, and modern UI primitives.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    href: "#contact",
    category: "Frontend",
    year: "2026",
    tags: ["React", "TypeScript", "ShadCN"],
  },
  {
    title: "Supabase Gallery",
    description: "An image gallery concept designed for realtime content management and storage workflows.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    href: "#contact",
    category: "Full Stack",
    year: "2025",
    tags: ["Supabase", "Realtime", "UI"],
  },
  {
    title: "Laravel Dashboard",
    description: "A production-style dashboard concept with clean hierarchy and dense information architecture.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200",
    href: "#contact",
    category: "Dashboard",
    year: "2025",
    tags: ["Laravel", "Analytics", "Tailwind"],
  },
  {
    title: "AI Chat System",
    description: "A conversational product surface centered on clarity, speed, and accessible interaction design.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&sat=-100",
    href: "#contact",
    category: "Product",
    year: "2026",
    tags: ["AI", "UX", "Realtime"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    description: "Core tools for building responsive interfaces and design systems.",
    items: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    name: "Backend",
    description: "Practical experience with server-side workflows and storage systems.",
    items: ["PHP", "Laravel", "Node.js", "Supabase", "MySQL"],
  },
  {
    name: "Creative Tools",
    description: "Visual tools used for layout, presentation, and production assets.",
    items: ["Figma", "Photoshop", "Illustrator", "Canva", "Premiere Pro"],
  },
  {
    name: "Infrastructure",
    description: "The tooling and environments that keep projects organized and deployable.",
    items: ["Git", "Docker", "Linux", "Bash", "NPM"],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    school: "SMK Negeri 1 Subang",
    program: "Teknik Komputer dan Jaringan (TKJ)",
    year: "2022 - 2025",
    description:
      "Focused on networking, server administration, and the foundations of modern web development.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/Logo_SMK_Negeri_1_Subang.png",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  { label: "Open Resume", href: "#home", icon: ArrowRight },
];

export const highlights: FeatureCardData[] = [
  {
    title: "Design Systems",
    description: "Cleaner structure with shared UI tokens and small reusable primitives.",
    icon: Palette,
  },
  {
    title: "Delivery Focus",
    description: "Layouts that read well on mobile first, then expand naturally on large screens.",
    icon: TabletSmartphone,
  },
  {
    title: "Pragmatic Shipping",
    description: "A portfolio that feels current without adding unnecessary complexity.",
    icon: Rocket,
  },
  {
    title: "Data Ready",
    description: "Sections and content organized for easy future API or CMS integration.",
    icon: DatabaseZap,
  },
];

export const contactHighlights: FeatureCardData[] = [
  {
    title: "Direct Contact",
    description: "Best for freelance, collaboration, or product work discussions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Code First",
    description: "Focused on building maintainable interfaces and reliable frontends.",
    icon: Code2,
  },
  {
    title: "Graduating Focus",
    description: "Balancing practical delivery with a strong technical foundation.",
    icon: GraduationCap,
  },
];