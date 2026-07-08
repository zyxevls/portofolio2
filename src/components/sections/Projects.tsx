import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/providers/language-provider";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { gsap, ScrollTrigger, animateHeading, parallaxY } from "@/lib/gsap-utils";

function ProjectSlide({
  project,
  index,
}: {
  project: { title: string; description: string; image: string; href: string; stack: string[]; year: string };
  index: number;
}) {
  return (
    <div className="group relative flex-[0_0_100%] min-w-0 pl-px md:flex-[0_0_88%] lg:flex-[0_0_76%] xl:flex-[0_0_68%]">
      <article className="grid overflow-hidden border border-border bg-background lg:grid-cols-[1.1fr_0.9fr]">
        {/* Image */}
        <div className="relative bg-secondary min-h-72 lg:min-h-0">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent lg:bg-linear-to-r lg:from-black/40 lg:via-transparent lg:to-transparent" />

          {/* Index badge */}
          <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
            <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-white/80">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Year + drag hint */}
          <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
            <span className="border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white/70 backdrop-blur-sm">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex items-center bg-background border-t lg:border-t-0 lg:border-l border-border px-7 py-10 lg:px-10 lg:py-12">
          <div className="max-w-xl">
            <span className="mb-4 block text-[10px] font-mono uppercase tracking-[0.32em] text-muted-foreground">
              Project {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mb-5 font-display text-3xl leading-[0.95] tracking-tight text-foreground md:text-4xl">
              {project.title}
            </h3>

            <p className="mb-7 text-xs leading-[1.9] text-muted-foreground font-mono">
              {project.description}
            </p>

            {/* Stack pills */}
            <div className="mb-8 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-[10px] font-mono uppercase tracking-[0.28em] text-foreground transition-all duration-200 hover:gap-3 hover:border-foreground"
            >
              View Project
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export function Projects() {
  const { content } = useLanguage();
  const { projects } = content;

  const sectionRef  = useRef<HTMLElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    kills.push(parallaxY(gridRef.current, { yFactor: 0.15, trigger: section }));

    return () => kills.forEach((k) => k());
  }, []);

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

  return (
    <section ref={sectionRef} id="projects" className="relative py-2 overflow-hidden">
      {/* Parallax grid */}
      <div ref={gridRef} className="parallax-layer absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden />

      {/* Section label + controls */}
      <div className="flex items-center gap-4 pb-4 mb-10">
        <div ref={lineRef} className="h-px flex-1 bg-border" />
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] shrink-0">
          006 — {content.common.myWork}
        </span>
      </div>

      <div className="flex flex-col gap-5 mb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2
            ref={headingRef}
            data-text={content.common.myWork}
            className="font-display text-4xl md:text-5xl leading-none text-foreground"
          >
            {content.common.myWork}
          </h2>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="max-w-xs text-xs leading-[1.8] text-muted-foreground md:text-right font-mono">
            {content.common.recentProjects}
          </p>
          <div className="flex items-center gap-px">
            <button
              onClick={scrollPrev}
              aria-label="Previous project"
              className="h-10 w-10 border border-border flex items-center justify-center text-foreground transition-all duration-200 hover:bg-foreground hover:text-background hover:border-foreground"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next project"
              className="h-10 w-10 border border-border flex items-center justify-center text-foreground transition-all duration-200 hover:bg-foreground hover:text-background hover:border-foreground"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden border-l border-border" ref={emblaRef}>
        <div className="flex items-stretch gap-px bg-border">
          {projects.map((project, i) => (
            <ProjectSlide key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Progress dots */}
      <div className="mt-5 flex items-center gap-1">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`h-px rounded-full transition-all duration-300 ${i === selectedIndex ? "w-10 bg-foreground" : "w-5 bg-border hover:bg-muted-foreground"}`}
          />
        ))}
      </div>
    </section>
  );
}
