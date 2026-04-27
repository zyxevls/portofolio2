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
    common: {
        availableForWork: string;
        downloadCv: string;
        letsTalk: string;
        navigation: string;
        myExpertise: string;
        myQualityServices: string;
        servicesDescription: string;
        learnMore: string;
        ourWorkflow: string;
        workingProcess: string;
        processDescription: string;
        myTestimonials: string;
        clientFeedback: string;
        recentProjects: string;
        myWork: string;
        professionalSkills: string;
        techStack: string;
        techStackDescription: string;
        builtWith: string;
        modernTech: string;
        getInTouch: string;
        contactDescription: string;
        hireMe: string;
        letsBuildSomething: string;
        contactSummary: string;
        whatYouGet: string;
        productionReady: string;
        strongUx: string;
        maintainableCode: string;
        projectInquiry: string;
        projectGoals: string;
        yourName: string;
        emailAddress: string;
        howCanIHelp: string;
        sendMessage: string;
        readyToStart: string;
        yourProject: string;
        collaborate: string;
        letsBuild: string;
        theFuture: string;
        together: string;
        ctaDescription: string;
        kickstartNow: string;
        readyToChat: string;
        or: string;
        active: string;
        footerDescription: string;
        menu: string;
        connect: string;
        quickContact: string;
        allRightsReserved: string;
        backToTop: string;
    };
}
