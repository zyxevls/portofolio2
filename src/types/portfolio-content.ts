export type IconKey =
    | "code2"
    | "layout-grid"
    | "zap"
    | "shield-check"
    | "github"
    | "linkedin"
    | "mail"
    | "external-link"
    | "sun"
    | "moon"
    | "menu"
    | "x"
    | "arrow-right"
    | "chart-column"
    | "sparkles"
    | "laptop"
    | "database"
    | "server"
    | "palette"
    | "rocket";

export interface NavItem
{
    label: string;
    href: string;
}

export interface HeroStat
{
    value: string;
    label: string;
}

export interface Highlight
{
    title: string;
    description: string;
    icon: IconKey;
}

export interface ProjectItem
{
    title: string;
    description: string;
    image: string;
    href: string;
    stack: string[];
    year: string;
}

export interface SkillGroup
{
    title: string;
    icon: IconKey;
    skills: string[];
}

export interface ContactLink
{
    label: string;
    href: string;
    icon: IconKey;
}

export interface ServiceItem
{
    title: string;
    description: string;
    icon: IconKey;
}

export interface ProcessStep
{
    title: string;
    description: string;
    icon: IconKey;
}

export interface TestimonialItem
{
    quote: string;
    author: string;
    role: string;
}

export interface PortfolioContent
{
    brand: string;
    role: string;
    tagline: string;
    intro: string;
    nav: NavItem[];
    stats: HeroStat[];
    highlights: Highlight[];
    projects: ProjectItem[];
    skills: SkillGroup[];
    services: ServiceItem[];
    process: ProcessStep[];
    testimonials: TestimonialItem[];
    contactLinks: ContactLink[];
}
