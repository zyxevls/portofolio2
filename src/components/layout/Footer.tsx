import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/providers/language-provider";
import { staggerReveal } from "@/lib/gsap-utils";

import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

export function Footer() {
  const { content } = useLanguage();
  const { resolvedTheme } = useTheme();
  const currentYear = new Date().getFullYear();
  const logoSrc = resolvedTheme === "dark" ? logoLight : logoDark;

  const footerRef = useRef<HTMLElement>(null);
  const colRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    return staggerReveal(colRefs.current, { trigger: footer, stagger: 0.06, y: 14, duration: 0.5 });
  }, []);

  const socialIcons: Record<string, typeof Github> = { github: Github, linkedin: Linkedin, mail: Mail };

  return (
    <footer ref={footerRef} className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div ref={(el) => { colRefs.current[0] = el; }} className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={logoSrc} alt="Logo" className="h-5 w-auto" />
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
                <span className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                  {content.common.active}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[200px] font-mono">
              {content.common.footerDescription}
            </p>
          </div>

          {/* Menu */}
          <div ref={(el) => { colRefs.current[1] = el; }} className="space-y-4">
            <p className="text-[9px] font-mono text-foreground uppercase tracking-widest">{content.common.menu}</p>
            <ul className="space-y-2.5">
              {content.nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div ref={(el) => { colRefs.current[2] = el; }} className="space-y-4">
            <p className="text-[9px] font-mono text-foreground uppercase tracking-widest">{content.common.connect}</p>
            <div className="flex gap-1.5">
              {content.contactLinks.map((link) => {
                const Icon = socialIcons[link.icon] || Mail;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                    className="h-8 w-8 border border-border flex items-center justify-center text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-150"
                  >
                    <Icon className="size-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div ref={(el) => { colRefs.current[3] = el; }} className="space-y-4">
            <p className="text-[9px] font-mono text-foreground uppercase tracking-widest">{content.common.quickContact}</p>
            <a
              href="mailto:jaelanim465@gmail.com"
              className="text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors truncate block"
            >
              jaelanim465@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-muted-foreground">
            &copy; {currentYear} Muhamad Jaelani. {content.common.allRightsReserved}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[10px] font-mono text-muted-foreground hover:text-foreground transition-colors"
          >
            {content.common.backToTop}
            <ArrowUp className="size-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
