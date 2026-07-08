import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/providers/language-provider";
import { iconMap } from "@/lib/icon-map";
import { gsap, ScrollTrigger, animateHeading, staggerReveal, parallaxY } from "@/lib/gsap-utils";

export function Services() {
  const { content } = useLanguage();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const sectionRef  = useRef<HTMLElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const rowRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const kills: (() => void)[] = [];

    // Line scale-in
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
    kills.push(staggerReveal(rowRefs.current, { trigger: section, stagger: 0.07, y: 16 }));
    kills.push(parallaxY(gridRef.current, { yFactor: 0.2, trigger: section }));

    return () => kills.forEach((k) => k());
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative py-2 overflow-hidden">
      {/* Subtle grid bg parallax */}
      <div ref={gridRef} className="parallax-layer absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden />

      {/* Section label */}
      <div className="flex items-center gap-4 pb-4 mb-14">
        <div ref={lineRef} className="h-px flex-1 bg-border" />
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] shrink-0">
          002 — {content.common.myExpertise}
        </span>
      </div>

      {/* Title row */}
      <div className="flex items-end justify-between mb-10 gap-6">
        <h2
          ref={headingRef}
          data-text={content.common.myQualityServices}
          className="font-display text-4xl md:text-6xl leading-none tracking-tight text-foreground max-w-xl"
        >
          {content.common.myQualityServices}
        </h2>
        <p className="hidden md:block text-xs text-muted-foreground leading-relaxed max-w-52 text-right font-mono">
          {content.common.servicesDescription}
        </p>
      </div>

      {/* Services list rows */}
      <div className="border-t border-border">
        {content.services.map((service, i) => {
          const Icon = iconMap[service.icon];
          const isHovered = hoveredIdx === i;

          return (
            <div
              key={service.title}
              ref={(el) => { rowRefs.current[i] = el; }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group grid grid-cols-[40px_1fr_auto] items-start gap-6 py-5 border-b border-border cursor-default transition-colors duration-150 hover:bg-secondary -mx-6 px-6"
            >
              {/* Index */}
              <span className="text-[10px] font-mono text-muted-foreground pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Title + desc */}
              <div>
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight group-hover:italic transition-all duration-150">
                  {service.title}
                </h3>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isHovered ? "72px" : "0px", opacity: isHovered ? 1 : 0 }}
                >
                  <p className="text-xs text-muted-foreground leading-relaxed pt-2 font-mono">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div className="flex items-center gap-2 mt-1">
                <Icon className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                {/* Expand indicator */}
                <div
                  className="w-4 h-px bg-muted-foreground transition-all duration-200 group-hover:w-6 group-hover:bg-foreground"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile desc */}
      <p className="md:hidden mt-8 text-xs text-muted-foreground leading-relaxed font-mono">
        {content.common.servicesDescription}
      </p>
    </section>
  );
}
