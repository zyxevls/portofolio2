import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMounted } from "@/providers/theme-provider";

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
    const [isPending, startTransition] = React.useTransition();

    const handleThemeToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (isPending) return;
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

        if (transitionDocument.startViewTransition && !reduceMotion) {
            transitionDocument.startViewTransition(() => {
                startTransition(() => {
                    setTheme(nextTheme);
                });
            });
            return;
        }

        const root = document.documentElement;
        const fallbackClass = isMobileDevice ? "theme-switching-mobile" : "theme-switching";
        const fallbackDuration = isMobileDevice ? 200 : 300;

        root.classList.add(fallbackClass);
        startTransition(() => {
            setTheme(nextTheme);
        });

        window.setTimeout(() => {
            root.classList.remove(fallbackClass);
        }, fallbackDuration + 50);
    };

    if (!mounted) return null;

    const isDark = resolvedTheme === "dark";

    return (
        <motion.button
            initial="initial"
            whileHover="hover"
            onClick={handleThemeToggle}
            className={cn(
                "relative flex items-center h-12 rounded-l-full border border-r-0 border-border bg-background/60 backdrop-blur-xl transition-colors hover:bg-background/90 group overflow-hidden",
                className
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
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
                    {isDark ? "Light" : "Dark"}
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
