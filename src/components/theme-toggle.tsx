import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMounted } from "@/providers/theme-provider";
import { useLanguage } from "@/providers/language-provider";

type ViewTransitionCapableDocument = Document & {
    startViewTransition?: (updateCallback: () => void) => {
        finished: Promise<void>;
    };
};

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const mounted = useMounted();
    const { resolvedTheme, setTheme } = useTheme();
    const { language } = useLanguage();
    const isSwitchingRef = React.useRef(false);
    const cleanupTimeoutRef = React.useRef<number | null>(null);

    const handleThemeToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (isSwitchingRef.current) return;
        const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
        const isMobileDevice = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
        
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const maxX = Math.max(centerX, window.innerWidth - centerX);
        const maxY = Math.max(centerY, window.innerHeight - centerY);
        const endRadius = Math.hypot(maxX, maxY);

        document.documentElement.style.setProperty("--theme-x", `${centerX}px`);
        document.documentElement.style.setProperty("--theme-y", `${centerY}px`);
        document.documentElement.style.setProperty("--theme-end-radius", `${endRadius}px`);

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const transitionDocument = document as ViewTransitionCapableDocument;
        const root = document.documentElement;
        const useViewTransition = Boolean(transitionDocument.startViewTransition) && !reduceMotion && !isMobileDevice;

        isSwitchingRef.current = true;

        if (useViewTransition && transitionDocument.startViewTransition) {
            root.classList.add("theme-vt");
            const transition = transitionDocument.startViewTransition(() => {
                setTheme(nextTheme);
            });

            transition.finished.finally(() => {
                root.classList.remove("theme-vt");
                isSwitchingRef.current = false;
            });
            return;
        }

        const fallbackClass = isMobileDevice ? "theme-switching-mobile" : "theme-switching";
        const fallbackDuration = isMobileDevice ? 180 : 240;

        if (cleanupTimeoutRef.current !== null) {
            window.clearTimeout(cleanupTimeoutRef.current);
        }

        root.classList.add(fallbackClass);

        requestAnimationFrame(() => {
            setTheme(nextTheme);

            cleanupTimeoutRef.current = window.setTimeout(() => {
                root.classList.remove(fallbackClass);
                isSwitchingRef.current = false;
                cleanupTimeoutRef.current = null;
            }, fallbackDuration);
        });
    };

    React.useEffect(() => {
        return () => {
            if (cleanupTimeoutRef.current !== null) {
                window.clearTimeout(cleanupTimeoutRef.current);
            }
        };
    }, []);

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";
    const text = {
        en: {
            light: "Light",
            dark: "Dark",
            switchToLight: "Switch to light mode",
            switchToDark: "Switch to dark mode"
        },
        id: {
            light: "Terang",
            dark: "Gelap",
            switchToLight: "Ganti ke mode terang",
            switchToDark: "Ganti ke mode gelap"
        }
    }[language];

    return (
        <motion.button
            initial="initial"
            whileHover="hover"
            onClick={handleThemeToggle}
            className={cn(
                "relative flex items-center h-12 rounded-l-full border border-r-0 border-border bg-background/60 backdrop-blur-xl transition-colors hover:bg-background/90 group overflow-hidden",
                className
            )}
            aria-label={isDark ? text.switchToLight : text.switchToDark}
        >
            {/* Background Highlight */}
            <motion.div 
                className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                variants={{
                    hover: { x: 0 }
                }}
            />

            {/* Content Container */}
            <div className="flex items-center gap-3 pl-3 pr-1">
                {/* Text Label - Revealed on Hover */}
                <motion.span
                    variants={{
                        initial: { width: 0, opacity: 0, x: 20 },
                        hover: { width: "auto", opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-widest text-foreground"
                >
                    {isDark ? text.light : text.dark}
                </motion.span>

            {/* Icon Container */}
            <div className="flex size-8 items-center justify-center rounded-full bg-foreground/5 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {isDark ? (
                    <Sun className="size-4" />
                ) : (
                    <Moon className="size-4" />
                )}
            </div>
            </div>
        </motion.button>
    );
}
