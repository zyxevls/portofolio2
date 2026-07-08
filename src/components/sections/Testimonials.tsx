import { useEffect, useRef, useCallback, useState } from "react";
import { useLanguage } from "@/providers/language-provider";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { gsap, ScrollTrigger, animateHeading, revealFade, parallaxY } from "@/lib/gsap-utils";

function TestimonialCard({ t, idx }: { t: { quote: string; author: string; role: string }; idx: number }) {
  return (
    <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pr-px">
      <div className="flex flex-col h-full border border-border bg-background p-7 hover:bg-secondary transition-colors duration-200 group">
        {/* Quote number */}
        <span className="text-[10px] font-mono text-muted-foreground mb-5 block">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <p className="flex-1 text-[13px] text-foreground leading-[1.9] mb-8">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-5 border-t border-border">
          <div className="h-8 w-8 border border-border overflow-hidden bg-secondary shrink-0">
            <img
              src={`https://i.pravatar.cc/80?u=${t.author}`}
              alt={t.author}
              className="h-full w-full object-cover grayscale"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">{t.author}</p>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{t.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { content } = useLanguage();
  const { testimonials } = content;

  const sectionRef  = useRef<HTMLElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const wrapRef     = useRef<HTMLDivElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const onSelect   = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

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
    kills.push(revealFade(wrapRef.current, { trigger: section, delay: 0.2 }));
    kills.push(parallaxY(gridRef.current, { yFactor: 0.15, trigger: section }));

    return () => kills.forEach((k) => k());
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-2 overflow-hidden">
      {/* Parallax grid */}
      <div ref={gridRef} className="parallax-layer absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden />

      {/* Section label */}
      <div className="flex items-center gap-4 pb-4 mb-14">
        <div ref={lineRef} className="h-px flex-1 bg-border" />
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] shrink-0">
          005 — {content.common.myTestimonials}
        </span>
      </div>

      <div className="flex items-end justify-between gap-6 mb-10">
        <h2
          ref={headingRef}
          data-text={content.common.clientFeedback}
          className="font-display text-4xl md:text-5xl leading-tight text-foreground"
        >
          {content.common.clientFeedback}
        </h2>

        <div className="flex items-center gap-px shrink-0">
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="h-10 w-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-150"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="h-10 w-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-150"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div ref={wrapRef}>
        <div className="overflow-hidden border-t border-border" ref={emblaRef}>
          <div className="flex gap-px bg-border">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} idx={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Dot nav */}
      <div className="flex gap-1 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-px transition-all duration-300 ${i === selectedIndex ? "w-10 bg-foreground" : "w-5 bg-border hover:bg-muted-foreground"}`}
          />
        ))}
      </div>
    </section>
  );
}
