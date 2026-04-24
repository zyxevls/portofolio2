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

    const handleThemeToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
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

        if (transitionDocument.startViewTransition && !reduceMotion && !isMobileDevice) {
            transitionDocument.startViewTransition(() => {
                setTheme(nextTheme);
            });
            return;
        }

        const root = document.documentElement;
        const fallbackClass = isMobileDevice ? "theme-switching-mobile" : "theme-switching";
        const fallbackDuration = isMobileDevice ? 220 : 360;

        root.classList.add(fallbackClass);
        setTheme(nextTheme);

        window.setTimeout(() => {
            root.classList.remove(fallbackClass);
        }, fallbackDuration + 80);
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
                    <AnimatePresence mode="wait">
                        {isDark ? (
                            <motion.div
                                key="sun"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Sun className="size-4" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Moon className="size-4" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.button>
    );
}

