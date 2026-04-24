import type { ComponentType } from "react";
import type { IconKey } from "@/types/portfolio-content";
import
    {
        ArrowRight,
        ChartColumn,
        Code2,
        Database,
        ExternalLink,
        Github,
        Laptop,
        LayoutGrid,
        Linkedin,
        Mail,
        Menu,
        Moon,
        Palette,
        Rocket,
        Server,
        ShieldCheck,
        Sparkles,
        Sun,
        X,
        Zap
    } from "lucide-react";

export const iconMap: Record<IconKey, ComponentType<{ className?: string }>> = {
    "arrow-right": ArrowRight,
    "chart-column": ChartColumn,
    "code2": Code2,
    "database": Database,
    "external-link": ExternalLink,
    "github": Github,
    "laptop": Laptop,
    "layout-grid": LayoutGrid,
    "linkedin": Linkedin,
    "mail": Mail,
    "menu": Menu,
    "moon": Moon,
    "palette": Palette,
    "rocket": Rocket,
    "server": Server,
    "shield-check": ShieldCheck,
    "sparkles": Sparkles,
    "sun": Sun,
    "x": X,
    "zap": Zap
};
