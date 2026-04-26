import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { portfolioContent } from "@/data/portfolio-content";

import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

interface HeaderProps {
  isScrolled: boolean;
}

export function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const content = portfolioContent;

  const logoSrc = resolvedTheme === "dark" ? logoLight : logoDark;

  return (
    <motion.header
      initial={{ y: -18, opacity: 0.75 }}
      animate={{
        y: 0,
        opacity: 1,
        paddingTop: isScrolled ? 8 : 18
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <div
          className={cn(
            "w-full rounded-2xl px-3 transition-all duration-300 md:px-5",
            isScrolled
              ? "border border-border/70 bg-background/82 shadow-xl shadow-slate-950/12 backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          )}
        >
          <div className="flex h-16 items-center justify-between md:h-20">
            <a href="#overview" className="flex items-center gap-3 transition-opacity hover:opacity-80 group">
              <img 
                src={logoSrc} 
                alt="Logo" 
                className="h-8 w-auto md:h-9" 
              />
              <a href="mailto:jaelanim465@gmail.com" className="text-lg font-bold tracking-tighter md:text-xl">
                zyxevls
              </a>
            </a>

            <div className="flex items-center gap-4 md:gap-6">
              <div className="hidden items-center gap-1 md:flex">
                {content.nav.map((item) => (
                  <Button key={item.href} variant="ghost" size="sm" asChild>
                    <a href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                      {item.label}
                    </a>
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button className="hidden md:inline-flex" asChild>
                  <a href="#contact">Let's Talk</a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  aria-label="Toggle navigation"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-6 top-20 z-50 rounded-4xl border border-border/60 bg-background/90 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-2">Navigation</p>
              {content.nav.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-primary active:scale-95"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px w-full bg-border/50 my-4" />
              <Button size="lg" className="h-14 rounded-2xl text-base font-bold shadow-lg shadow-primary/20" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Let's Talk</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
