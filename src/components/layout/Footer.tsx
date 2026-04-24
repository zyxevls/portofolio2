import { portfolioContent } from "@/data/portfolio-content";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";

import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

export function Footer()
{
  const { nav, contactLinks } = portfolioContent;
  const { resolvedTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  const logoSrc = resolvedTheme === "dark" ? logoLight : logoDark;

  const scrollToTop = () =>
  {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialIcons: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail
  };

  return (
    <footer className="relative w-full bg-background border-t border-border/50 dark:border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-[10vw] font-black text-foreground/3 dark:text-white/2 select-none pointer-events-none leading-none -mb-4 text-center uppercase tracking-tighter">
        Muhamad Jaelani
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <img src={logoSrc} alt="Logo" className="h-8 w-auto" />
              <div className="flex items-center gap-2 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Active</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              Crafting high-performance digital experiences with precision.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground dark:text-white text-[10px] font-bold uppercase tracking-[0.2em]">Menu</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium flex items-center group"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground dark:text-white text-[10px] font-bold uppercase tracking-[0.2em]">Connect</h4>
            <div className="flex gap-4">
              {contactLinks.map((link) =>
              {
                const Icon = socialIcons[link.icon] || Mail;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-xl bg-muted dark:bg-white/5 border border-border/50 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all group"
                    title={link.label}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground dark:text-white text-[10px] font-bold uppercase tracking-[0.2em]">Quick Contact</h4>
            <a href="mailto:jaelanim465@gmail.com" className="block text-sm font-bold text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors truncate">
              jaelanim465@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-[10px] font-medium tracking-tight">
            &copy; {currentYear} Muhamad Jaelani. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp className="size-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
