import { useEffect, useRef } from "react";
import { useLanguage } from "@/providers/language-provider";
import { iconMap } from "@/lib/icon-map";
import { gsap, ScrollTrigger, animateHeading, revealSide, parallaxY } from "@/lib/gsap-utils";

export function Contact() {
  const { content } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const lineRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const kills: (() => void)[] = [];

    if (lineRef.current) {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        onEnter: () => gsap.to(lineRef.current, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }),
        once: true,
      });
      kills.push(() => st.kill());
    }

    kills.push(animateHeading(headingRef.current, { trigger: section }));
    kills.push(revealSide(leftRef.current, { direction: "left", trigger: section, delay: 0.1 }));
    kills.push(revealSide(rightRef.current, { direction: "right", trigger: section, delay: 0.15 }));
    kills.push(parallaxY(gridRef.current, { yFactor: 0.12, trigger: section }));

    return () => kills.forEach((k) => k());
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-2 pb-14 overflow-hidden">
      {/* Parallax grid */}
      <div ref={gridRef} className="parallax-layer absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden />

      {/* Section label */}
      <div className="flex items-center gap-4 pb-4 mb-14">
        <div ref={lineRef} className="h-px flex-1 bg-border" />
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] shrink-0">
          008 — {content.common.getInTouch}
        </span>
      </div>

      <h2
        ref={headingRef}
        data-text={content.common.letsBuildSomething}
        className="font-display text-4xl md:text-5xl leading-tight text-foreground mb-14"
      >
        {content.common.letsBuildSomething}
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Info */}
        <div ref={leftRef} className="flex flex-col gap-8">
          <div>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3">
              {content.common.hireMe}
            </p>
            <p className="text-sm text-foreground leading-relaxed mb-5">
              {content.common.contactSummary}
            </p>
            <ul className="space-y-2">
              {[content.common.productionReady, content.common.strongUx, content.common.maintainableCode].map((item) => (
                <li key={item} className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                  <span className="h-px w-5 bg-foreground shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {content.contactLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 h-10 px-4 border border-border text-[10px] font-mono text-muted-foreground uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-150"
                >
                  <Icon className="size-3" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <div ref={rightRef}>
          <form className="flex flex-col gap-0 border border-border" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder={content.common.yourName}
              className="h-12 border-b border-border bg-transparent px-5 text-xs font-mono outline-none focus:bg-secondary transition-colors duration-150 placeholder:text-muted-foreground/50"
            />
            <input
              type="email"
              placeholder={content.common.emailAddress}
              className="h-12 border-b border-border bg-transparent px-5 text-xs font-mono outline-none focus:bg-secondary transition-colors duration-150 placeholder:text-muted-foreground/50"
            />
            <textarea
              placeholder={content.common.howCanIHelp}
              rows={5}
              className="border-b border-border bg-transparent px-5 py-4 text-xs font-mono outline-none focus:bg-secondary transition-colors duration-150 resize-none placeholder:text-muted-foreground/50"
            />
            <button
              type="submit"
              className="h-12 bg-foreground text-background text-[10px] font-mono uppercase tracking-widest hover:opacity-80 transition-opacity"
            >
              {content.common.sendMessage}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
