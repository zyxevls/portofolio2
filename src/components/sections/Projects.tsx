import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/providers/language-provider";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

// Project Card Component - Now Wide & Cinematic
function ProjectCard({ project, isActive }: { project: any, isActive: boolean }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--mx", `${clientX - left}px`);
    currentTarget.style.setProperty("--my", `${clientY - top}px`);
  };

  return (
    <div className={`flex-[0_0_90vw] md:flex-[0_0_70vw] px-4 transition-all duration-1000 ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-20 blur-sm"}`}>
      <div
        className="group relative h-[500px] w-full bg-card/60 dark:bg-white/5 border border-border/50 dark:border-white/10 backdrop-blur-md overflow-hidden rounded-[2.5rem] transition-all duration-700 flex flex-col shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseMove}
      >
        <div className="absolute inset-0 -z-20">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-0" />
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent z-0" />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            background: `radial-gradient(1000px circle at var(--mx, 0) var(--my, 0), rgba(var(--primary-rgb), 0.15), transparent 80%)`
          }}
        />

        <div className="mt-auto p-8 md:p-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 rounded-lg bg-primary/20 backdrop-blur-xl text-[10px] font-bold text-primary uppercase tracking-[0.2em] border border-primary/20">
                {project.year}
              </span>
              <div className="h-px w-12 bg-primary/30" />
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter leading-none drop-shadow-sm">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech: string) => (
                <span key={tech} className="text-[10px] font-bold text-slate-600 dark:text-white/50 uppercase tracking-widest bg-slate-100 dark:bg-white/5 px-2 py-1 rounded backdrop-blur-md border border-border/40 dark:border-transparent">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn h-20 w-20 rounded-full bg-white text-black flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <ArrowUpRight className="size-10 transition-transform duration-500 group-hover/btn:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { content, language } = useLanguage();
  const { projects } = content;
  const extendedProjects = [...projects, ...projects, ...projects];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    containScroll: false
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap() % projects.length);
  }, [emblaApi, projects.length]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const currentProject = projects[selectedIndex];

  return (
    <section id="projects" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-background">
      {/* Background Projects Label */}
      <div className="absolute top-10 left-10 text-[10vw] font-black text-foreground/3 dark:text-white/2 select-none pointer-events-none leading-none uppercase">
        {content.common.recentProjects}
      </div>

      {/* Main Carousel Area */}
      <div className="w-full">
        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex">
            {extendedProjects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                isActive={(index % projects.length) === selectedIndex}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Overlaid UI - Modern App Layout */}
      <div className="absolute top-0 right-0 h-full w-[350px] hidden xl:flex flex-col justify-between p-12 z-50 pointer-events-none">
        {/* Side Info Panel */}
        <div className="bg-card/80 dark:bg-background/20 backdrop-blur-3xl border border-border/50 dark:border-white/5 rounded-4xl p-8 mt-24 pointer-events-auto shadow-2xl">
          <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
            <span className="h-px w-8 bg-primary" />
            {language === "en" ? "Information" : "Informasi"}
          </div>
          <h2 className="font-display text-7xl font-black tracking-tighter text-foreground leading-[0.8] mb-10">
            {content.common.myWork.split(" ").slice(0, -1).join(" ")} <br />
            <span className="text-primary italic font-serif">{content.common.myWork.split(" ").slice(-1)}</span>
          </h2>

          <div className="h-40">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4"
              >
                <div className="text-slate-900 dark:text-white font-bold text-sm tracking-tight border-l-2 border-primary pl-4 uppercase">
                  {currentProject.title}
                </div>
                <p className="text-slate-700 dark:text-muted-foreground text-xs leading-relaxed font-medium">
                  {currentProject.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Integrated in Panel */}
          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border/50 dark:border-white/5">
            <button
              onClick={scrollPrev}
              className="h-14 w-14 rounded-2xl border border-border/50 dark:border-white/10 bg-muted dark:bg-white/5 flex items-center justify-center transition-all hover:bg-primary hover:border-primary group"
            >
              <ChevronLeft className="size-6 text-foreground dark:text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={scrollNext}
              className="h-14 w-14 rounded-2xl border border-border/50 dark:border-white/10 bg-muted dark:bg-white/5 flex items-center justify-center transition-all hover:bg-primary hover:border-primary group"
            >
              <ChevronRight className="size-6 text-foreground dark:text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Controls Overlay */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6 xl:hidden">
        <button onClick={scrollPrev} className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
          <ChevronLeft className="size-8 text-white" />
        </button>
        <button onClick={scrollNext} className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
          <ChevronRight className="size-8 text-white" />
        </button>
      </div>

      {/* Progress Bar (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
        <motion.div
          className="h-full bg-primary"
          animate={{
            width: `${((selectedIndex + 1) / projects.length) * 100}%`
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>
    </section>
  );
}
