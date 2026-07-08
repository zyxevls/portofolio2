import { useEffect, useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/providers/language-provider";
import { gsap, ScrollTrigger, addMagnetic } from "@/lib/gsap-utils";

export function CallToAction() {
  const { content } = useLanguage();

  const sectionRef   = useRef<HTMLElement>(null);
  const gridRef      = useRef<HTMLDivElement>(null);
  const bigNumRef    = useRef<HTMLDivElement>(null);
  const line1Ref     = useRef<HTMLDivElement>(null);
  const line2Ref     = useRef<HTMLDivElement>(null);
  const line3Ref     = useRef<HTMLDivElement>(null);
  const ctaBtnRef    = useRef<HTMLAnchorElement>(null);
  const lineAccRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const kills: (() => void)[] = [];

    // Lines stagger in
    const lines = [line1Ref.current, line2Ref.current, line3Ref.current];
    lines.forEach((el) => el && gsap.set(el, { opacity: 0, y: 60 }));

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top 72%",
      onEnter: () => {
        gsap.to(lines, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power4.out",
        });
      },
      once: true,
    });
    kills.push(() => st.kill());

    // Line accent draw
    if (lineAccRef.current) {
      gsap.set(lineAccRef.current, { scaleX: 0, transformOrigin: "left" });
      const st2 = ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => gsap.to(lineAccRef.current, { scaleX: 1, duration: 1, ease: "power3.inOut" }),
        once: true,
      });
      kills.push(() => st2.kill());
    }

    // Parallax grid
    if (gridRef.current) {
      const stGrid = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        animation: gsap.fromTo(gridRef.current, { y: -30 }, { y: 30, ease: "none" }),
      });
      kills.push(() => stGrid.kill());
    }

    // Big watermark parallax
    if (bigNumRef.current) {
      const stBig = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
        animation: gsap.fromTo(bigNumRef.current, { y: 40 }, { y: -40, ease: "none" }),
      });
      kills.push(() => stBig.kill());
    }

    // Magnetic CTA button
    kills.push(addMagnetic(ctaBtnRef.current));

    return () => kills.forEach((k) => k());
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="relative py-2 overflow-hidden">
      {/* Parallax grid */}
      <div ref={gridRef} className="parallax-layer absolute inset-0 -z-10 grid-bg" aria-hidden />

      {/* Section label */}
      <div className="flex items-center gap-4 pb-4 mb-20">
        <div ref={lineAccRef} className="h-px flex-1 bg-border" />
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] shrink-0">
          007 — {content.common.collaborate}
        </span>
      </div>

      {/* Giant watermark number */}
      <div
        ref={bigNumRef}
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span className="text-[30vw] font-black text-foreground/2 leading-none whitespace-nowrap font-display">
          07
        </span>
      </div>

      {/* Editorial type block */}
      <div className="relative z-10 py-12 md:py-20">
        <div className="space-y-1 overflow-hidden mb-16">
          <div className="overflow-hidden">
            <div ref={line1Ref} className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-none tracking-tight uppercase text-foreground">
              {content.common.letsBuild}
            </div>
          </div>
          <div className="overflow-hidden">
            <div ref={line2Ref} className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-none tracking-tight uppercase text-foreground italic pl-[5vw]">
              {content.common.theFuture}
            </div>
          </div>
          <div className="overflow-hidden">
            <div ref={line3Ref} className="font-display text-[clamp(3rem,8vw,7.5rem)] leading-none tracking-tight uppercase text-foreground pl-[10vw]">
              {content.common.together}
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-border pt-10">
          <p className="text-xs text-muted-foreground max-w-xs leading-relaxed font-mono">
            {content.common.ctaDescription}
          </p>
          <div className="flex items-center gap-4 sm:ml-auto">
            <a
              href="mailto:jaelanim465@gmail.com"
              className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors"
            >
              <Mail size={12} />
              jaelanim465@gmail.com
            </a>
            <a
              ref={ctaBtnRef}
              href="#contact"
              className="group inline-flex items-center gap-2 h-10 px-6 bg-foreground text-background text-[10px] font-mono uppercase tracking-widest hover:opacity-75 transition-opacity"
            >
              {content.common.letsTalk}
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
