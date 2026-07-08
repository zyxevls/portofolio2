import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useMounted } from "@/providers/theme-provider";
import { useLanguage } from "@/providers/language-provider";

type ViewTransitionDoc = Document & {
  startViewTransition?: (cb: () => void) => { finished: Promise<void> };
};

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const mounted          = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const { language }     = useLanguage();
  const switchingRef     = React.useRef(false);
  const timerRef         = React.useRef<number | null>(null);

  React.useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (switchingRef.current) return;
    const next  = resolvedTheme === "dark" ? "light" : "dark";
    const isMob = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;

    const r = e.currentTarget.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top  + r.height / 2;
    document.documentElement.style.setProperty("--theme-x", `${cx}px`);
    document.documentElement.style.setProperty("--theme-y", `${cy}px`);
    document.documentElement.style.setProperty("--theme-end-radius", `${Math.hypot(Math.max(cx, innerWidth - cx), Math.max(cy, innerHeight - cy))}px`);

    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const vt = document as ViewTransitionDoc;
    switchingRef.current = true;

    if (vt.startViewTransition && !noMotion && !isMob) {
      document.documentElement.classList.add("theme-vt");
      vt.startViewTransition(() => setTheme(next)).finished.finally(() => {
        document.documentElement.classList.remove("theme-vt");
        switchingRef.current = false;
      });
      return;
    }

    setTheme(next);
    timerRef.current = window.setTimeout(() => { switchingRef.current = false; }, 250);
  };

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";
  const label  = { en: { l: "Light", d: "Dark" }, id: { l: "Terang", d: "Gelap" } }[language];

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "group flex items-center h-10 border-y border-l border-border bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-150 overflow-hidden",
        className
      )}
    >
      <div className="flex items-center gap-2 pl-3 pr-3">
        <span className="hidden group-hover:block text-[10px] font-mono uppercase tracking-widest whitespace-nowrap">
          {isDark ? label.l : label.d}
        </span>
        {isDark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
      </div>
    </button>
  );
}
