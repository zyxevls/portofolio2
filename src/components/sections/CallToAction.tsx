import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Mail, Send } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/providers/language-provider";

export function CallToAction() {
  const { content } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    currentTarget.style.setProperty("--mx", `${clientX - left}px`);
    currentTarget.style.setProperty("--my", `${clientY - top}px`);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-32 md:py-48 overflow-hidden bg-background"
    >
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Giant Parallax Typography */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden opacity-[0.03] dark:opacity-[0.05]">
        <motion.h2
          style={{ x: xLeft }}
          className="text-[25vw] font-black leading-none whitespace-nowrap"
        >
          {content.common.readyToStart}
        </motion.h2>
        <motion.h2
          style={{ x: xRight }}
          className="text-[25vw] font-black leading-none whitespace-nowrap"
        >
          {content.common.yourProject}
        </motion.h2>
      </div>

      <div className="w-full px-6 md:px-20 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-center">

          {/* Left Side: Dramatic Heading (Spans 3 cols) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-3 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
            >
              <span className="h-px w-10 bg-primary" />
              {content.common.collaborate}
            </motion.div>

            <h2 className="text-6xl md:text-8xl lg:text-[7.5vw] font-black tracking-tighter text-foreground leading-none mb-10 uppercase">
              {content.common.letsBuild} <br />
              <span className="text-primary italic font-serif">{content.common.theFuture}</span> <br />
              {content.common.together}
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0 font-medium">
              {content.common.ctaDescription}
            </p>
          </div>

          {/* Right Side: Interactive CTA Card (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseMove={handleMouseMove}
              className="group relative lux-card bg-card/60 dark:bg-white/5 border border-border/50 dark:border-white/10 backdrop-blur-3xl rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-2xl"
            >
              {/* Spotlight */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `radial-gradient(600px circle at var(--mx, 0) var(--my, 0), rgba(var(--primary-rgb), 0.15), transparent 80%)`
                }}
              />

              <div className="relative z-10 flex flex-col gap-10">
                <div className="h-20 w-20 rounded-3xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                  <Send className="size-10 text-primary" />
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-foreground dark:text-white mb-2 tracking-tight">{content.common.kickstartNow}</h3>
                  <p className="text-muted-foreground dark:text-white/60 text-sm font-medium tracking-wide">{content.common.readyToChat}</p>
                </div>

                <a
                  href="#contact"
                  className="group/btn relative h-22 w-full rounded-2xl bg-primary dark:bg-white text-primary-foreground dark:text-black font-black text-2xl flex items-center justify-center gap-4 transition-all duration-500 hover:scale-[1.02] active:scale-95 shadow-xl"
                >
                  {content.common.getInTouch}
                  <ArrowRight className="size-8 transition-transform duration-500 group-hover/btn:translate-x-3" />
                </a>

                <div className="flex items-center gap-6">
                  <div className="flex-1 h-px bg-border/50 dark:bg-white/10" />
                  <span className="text-muted-foreground/40 dark:text-white/20 text-[10px] font-bold uppercase tracking-widest">{content.common.or}</span>
                  <div className="flex-1 h-px bg-border/50 dark:bg-white/10" />
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-5 text-muted-foreground dark:text-white/60 hover:text-primary transition-colors cursor-pointer group/link">
                    <div className="h-12 w-12 rounded-xl bg-muted dark:bg-white/5 flex items-center justify-center group-hover/link:bg-primary/20 transition-all">
                      <Mail className="size-6" />
                    </div>
                    <span className="text-lg font-bold tracking-tight">jaelanim465@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
