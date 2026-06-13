import { useEffect, useRef } from "react";
import { motion, type Variants, useReducedMotion, useScroll } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useLanguage } from "@/providers/language-provider";
import { useTheme } from "next-themes";
import { Stats } from "./Stats";
import { FileText, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/logo-dark.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" }
  }
};

const statChipVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardHoverTilt = {
  whileHover: {
    y: -8,
    scale: 1.02,
    rotateX: 2,
    rotateY: 2,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
} as const;

const floatingAnimation: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

interface HeroProps
{
  startStatsCount: boolean;
}

export function Hero({ startStatsCount }: HeroProps)
{
  const { content, language } = useLanguage();
  const { resolvedTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRectRef = useRef<DOMRect | null>(null);
  const frameRef = useRef<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const isDark = resolvedTheme === "dark";

  // Dynamic aesthetic gradient colors for background particles
  const gradientBgStart = isDark ? "rgb(9, 9, 11)" : "rgb(250, 250, 249)";
  const gradientBgEnd = isDark ? "rgb(15, 23, 42)" : "rgb(241, 245, 249)";
  const firstColor = isDark ? "99, 102, 241" : "217, 70, 239"; // Indigo / Fuchsia
  const secondColor = isDark ? "168, 85, 247" : "99, 102, 241"; // Purple / Indigo
  const thirdColor = isDark ? "6, 182, 212" : "14, 165, 233"; // Cyan / Sky
  const fourthColor = isDark ? "236, 72, 153" : "16, 185, 129"; // Pink / Emerald
  const fifthColor = isDark ? "139, 92, 246" : "249, 115, 22"; // Violet / Orange
  const pointerColor = isDark ? "129, 140, 248" : "244, 63, 94";

  const handleCardPointerMove = (event: React.MouseEvent<HTMLDivElement>) =>
  {
    if (prefersReducedMotion) return;

    cardRectRef.current ??= event.currentTarget.getBoundingClientRect();

    if (frameRef.current !== null) {
      return;
    }

    const { clientX, clientY, currentTarget } = event;

    frameRef.current = window.requestAnimationFrame(() =>
    {
      const rect = cardRectRef.current;

      if (rect) {
        currentTarget.style.setProperty("--mx", `${clientX - rect.left}px`);
        currentTarget.style.setProperty("--my", `${clientY - rect.top}px`);
      }

      frameRef.current = null;
    });
  };

  const handleCardPointerEnter = (event: React.MouseEvent<HTMLDivElement>) =>
  {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    cardRectRef.current = rect;
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const handleCardPointerLeave = (event: React.MouseEvent<HTMLDivElement>) =>
  {
    cardRectRef.current = null;
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    event.currentTarget.style.removeProperty("--mx");
    event.currentTarget.style.removeProperty("--my");
  };

  useEffect(() =>
  {
    return () =>
    {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-4 md:py-6 lg:min-h-[calc(100vh-6rem)] flex flex-col justify-center"
    >
      {/* High-tech ambient glowing gradient background */}
      <BackgroundGradientAnimation
        gradientBackgroundStart={gradientBgStart}
        gradientBackgroundEnd={gradientBgEnd}
        firstColor={firstColor}
        secondColor={secondColor}
        thirdColor={thirdColor}
        fourthColor={fourthColor}
        fifthColor={fifthColor}
        pointerColor={pointerColor}
        size="85%"
        blendingValue={isDark ? "screen" : "color-burn"}
        interactive={true}
        containerClassName="absolute inset-0 -z-10 h-full w-full opacity-35 dark:opacity-45"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 z-50 flex items-center justify-center px-4 text-center font-bold text-white pointer-events-none text-3xl md:text-4xl lg:text-7xl">
          <p className="bg-linear-to-b from-white/10 to-white/0 bg-clip-text text-transparent drop-shadow-2xl opacity-10 dark:opacity-20 font-black tracking-widest uppercase">
            Jaelani
          </p>
        </div>
      </BackgroundGradientAnimation>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-8 justify-between h-full">
        <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative order-2 flex max-w-2xl flex-col items-center text-center lg:order-1 lg:items-start lg:text-left z-20"
          >
            <motion.h1
              variants={itemVariants}
              className="text-balance mb-4 font-display text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.05]"
            >
              {content.tagline.split(" ").map((word, i) =>
              {
                const isName = word.includes("Jaelani") || word.includes("Muhamad");
                return (
                  <span
                    key={i}
                    className={isName ? "bg-gradient-to-r from-teal-600 via-cyan-600 to-indigo-600 dark:from-teal-300 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent font-black" : ""}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[620px] text-sm md:text-base text-slate-600 dark:text-stone-300 leading-relaxed font-medium mb-5"
            >
              {content.intro}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="group relative h-11 px-6 text-sm font-bold w-full sm:w-auto rounded-xl bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-500 hover:to-indigo-500 dark:from-teal-400 dark:to-indigo-500 dark:text-slate-950 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-300 overflow-hidden" asChild>
                  <a href="/src/assets/cv.pdf" download="CV - Muhamad Jaelani">
                    <span className="relative z-10 flex items-center">
                      {content.common.downloadCv}
                      <FileText size={16} className="ml-2 transition-transform group-hover:translate-y-0.5" />
                    </span>
                  </a>
                </Button>
              </motion.div>

              <div className="flex gap-3">
                <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}>
                  <Button size="lg" variant="outline" className="h-11 w-11 p-0 rounded-xl border-border/80 bg-background/50 backdrop-blur-md hover:bg-teal-500/10 hover:border-teal-500/40 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-sm" asChild>
                    <a href="https://github.com/zyxevls" target="_blank" aria-label="GitHub"><Github size={18} /></a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}>
                  <Button size="lg" variant="outline" className="h-11 w-11 p-0 rounded-xl border-border/80 bg-background/50 backdrop-blur-md hover:bg-teal-500/10 hover:border-teal-500/40 hover:text-teal-600 dark:hover:text-teal-400 transition-all shadow-sm" asChild>
                    <a href="https://www.linkedin.com/in/jaelanim" target="_blank" aria-label="LinkedIn"><Linkedin size={18} /></a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 lg:items-start">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 max-w-2xl">
                {(language === "en" ? [
                  "Fast UI",
                  "Type-safe systems",
                  "Performance-first UX"
                ] : [
                  "UI cepat",
                  "Sistem tipe-aman",
                  "UX mengutamakan performa"
                ]).map((chip) => (
                  <motion.div
                    key={chip}
                    variants={statChipVariants}
                    className="rounded-full border border-teal-500/10 bg-teal-500/5 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-widest text-teal-700 dark:text-teal-300 backdrop-blur-sm dark:bg-teal-400/5"
                  >
                    {chip}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Interactive Image Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            style={prefersReducedMotion ? undefined : { perspective: 1200 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0"
          >
            {/* Specular glowing backdrop light */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[120%] w-[120%] rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 blur-[100px] opacity-25 dark:opacity-30 ${prefersReducedMotion ? "" : "animate-pulse"}`} />

            <div className="relative group/card">
              {/* Animated outer tech border elements */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-teal-500 rounded-tl-lg opacity-80 group-hover/card:scale-105 transition-transform duration-300" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-indigo-500 rounded-tr-lg opacity-80 group-hover/card:scale-105 transition-transform duration-300" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-indigo-500 rounded-bl-lg opacity-80 group-hover/card:scale-105 transition-transform duration-300" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-teal-500 rounded-br-lg opacity-80 group-hover/card:scale-105 transition-transform duration-300" />

              <motion.div
                variants={prefersReducedMotion ? undefined : floatingAnimation}
                animate={prefersReducedMotion ? undefined : "animate"}
                className="relative w-full max-w-[260px] md:max-w-[320px] lg:max-w-[350px] aspect-square"
              >
                <motion.div
                  {...cardHoverTilt}
                  className="lux-card w-full h-full relative rounded-2xl overflow-hidden border border-teal-500/20 bg-background/20 backdrop-blur-xl group will-change-transform shadow-2xl shadow-teal-950/10 dark:shadow-black/40"
                  onMouseEnter={handleCardPointerEnter}
                  onMouseMove={handleCardPointerMove}
                  onMouseLeave={handleCardPointerLeave}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-transparent to-indigo-500/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="w-full h-full relative overflow-hidden">
                    <motion.img
                      src={profileImage}
                      alt="Muhamad Jaelani"
                      className="h-full w-full object-cover grayscale brightness-95 contrast-[1.02] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                      loading="eager"
                      fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-80" />
                  </div>
                </motion.div>

                {/* Animated tech status badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-2 -right-2 bg-background/90 backdrop-blur-xl border border-teal-500/30 p-2.5 rounded-xl shadow-xl z-20 flex items-center gap-2 hover:border-teal-400 transition-colors"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-800 dark:text-slate-100">{content.common.availableForWork}</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 lg:mt-10">
          <Stats startStatsCount={startStatsCount} />
        </div>
      </div>
    </section>
  );
}


