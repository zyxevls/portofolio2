import { motion } from "framer-motion";
import { useLanguage } from "@/providers/language-provider";
import { Card } from "@/components/ui/card";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

function TestimonialCard({ testimonial }: { testimonial: any }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--mx", `${clientX - left}px`);
    currentTarget.style.setProperty("--my", `${clientY - top}px`);
  };

  return (
    <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-3">
      <Card
        className="group relative h-full lux-card bg-card/60 dark:bg-white/3 border border-border/50 dark:border-white/10 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden rounded-4xl shadow-xl transition-all duration-500 hover:border-primary/30"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseMove}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            background: `radial-gradient(400px circle at var(--mx, 0) var(--my, 0), rgba(var(--primary-rgb), 0.15), transparent 80%)`
          }}
        />

        <div className="relative z-10">
          <Quote className="size-8 text-primary/20 mb-4 group-hover:text-primary/40 transition-colors" />
          <p className="text-sm md:text-base font-semibold text-slate-700 dark:text-foreground group-hover:text-primary transition-colors leading-relaxed">
            "{testimonial.quote}"
          </p>
        </div>

        <div className="mt-8 flex items-center gap-4 pt-5 border-t border-border/50 dark:border-white/5">
          <div className="h-11 w-11 rounded-full border-2 border-primary/20 p-0.5 group-hover:border-primary transition-colors">
            <img
              src={`https://i.pravatar.cc/150?u=${testimonial.author}`}
              alt={testimonial.author}
              className="h-full w-full object-cover rounded-full bg-secondary"
            />
          </div>
          <div>
            <h4 className="font-bold text-sm text-foreground group-hover:text-(--hover-text) transition-colors">
              {testimonial.author}
            </h4>
            <p className="text-[10px] text-muted-foreground group-hover:text-(--hover-text)/70 transition-colors uppercase tracking-wider font-semibold">
              {testimonial.role}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export function Testimonials() {
  const { content } = useLanguage();
  const { testimonials } = content;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[9px]">
              <span className="h-px w-6 bg-primary/40" />
              {content.common.myTestimonials}
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              {content.common.clientFeedback.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary italic font-serif">
                {content.common.clientFeedback.split(" ").slice(-1)}
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="h-10 w-10 rounded-full border border-border/50 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all bg-card/40 dark:bg-transparent"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={scrollNext}
              className="h-10 w-10 rounded-full border border-border/50 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all bg-card/40 dark:bg-transparent"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-3">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-muted dark:bg-white/10"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
