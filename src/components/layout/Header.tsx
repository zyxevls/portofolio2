import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/language-provider";
import { LanguageToggle } from "@/components/language-toggle";
import { gsap } from "@/lib/gsap-utils";

import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

interface HeaderProps {
  isScrolled: boolean;
}

export function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);

  const logoSrc = resolvedTheme === "dark" ? logoLight : logoDark;

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 0.05 }
    );
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 transition-all duration-200",
          isScrolled
            ? "bg-background/96 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="flex h-14 items-center justify-between">
          {/* Logo */}
          <a href="#overview" className="flex items-center gap-2.5 hover:opacity-60 transition-opacity">
            <img src={logoSrc} alt="Logo" className="h-5 w-auto" />
            <span className="text-[11px] font-mono font-medium tracking-[0.15em] uppercase">JAELANIM.TECH</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[10px] font-mono text-muted-foreground hover:text-foreground transition-colors duration-150 uppercase tracking-[0.2em]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <a
              href="#contact"
              className="hidden md:inline-flex items-center h-8 px-4 border border-border bg-foreground text-background text-[10px] font-mono uppercase tracking-widest hover:opacity-75 transition-opacity"
            >
              {content.common.letsTalk}
            </a>
            <button
              className="md:hidden h-8 w-8 flex items-center justify-center border border-border hover:bg-secondary transition-colors"
              onClick={() => setIsMenuOpen((p) => !p)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-14 z-50 bg-background border-b border-border px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-0 border border-border mb-4">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-5 py-4 border-b border-border last:border-0 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center h-11 w-full bg-foreground text-background text-[10px] font-mono uppercase tracking-widest"
          >
            {content.common.letsTalk}
          </a>
        </div>
      )}
    </header>
  );
}
