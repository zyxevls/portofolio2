import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioContent } from "@/data/portfolio-content";
import { Stats } from "./Stats";
import { FileText, Github, Linkedin } from "lucide-react";

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
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

interface HeroProps {
  startStatsCount: boolean;
}

export function Hero({ startStatsCount }: HeroProps) {
  const content = portfolioContent;

  const handleCardPointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const handleCardPointerEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="overview"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden py-20 lg:py-0"
    >
      <div className="container mx-auto px-6 relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 py-5 lg:py-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center md:items-start md:text-left z-20 relative"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-6 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-primary/5 border-primary/20 text-primary">
                {content.role}
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-balance font-display text-4xl leading-[1] md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mb-8"
            >
              {content.tagline.split(" ").map((word, i) => (
                <span key={i} className={word.includes("Jaelani") ? "text-primary italic font-serif" : ""}>
                  {word}{" "}
                </span>
              ))}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[600px] text-base md:text-lg text-slate-600 dark:text-muted-foreground leading-relaxed font-medium mb-10"
            >
              {content.intro}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="h-14 px-8 text-base font-bold w-full sm:w-auto rounded-2xl shadow-xl shadow-primary/20" asChild>
                  <a href="/src/assets/cv.pdf" download="CV - Muhamad Jaelani">
                    Download CV
                    <FileText size={18} className="ml-2" />
                  </a>
                </Button>
              </motion.div>

              <div className="flex gap-3">
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="h-14 w-14 p-0 rounded-2xl backdrop-blur-sm border-border/50 dark:border-border hover:bg-primary/5" asChild>
                    <a href="https://github.com/zyxevls" target="_blank"><Github size={22} /></a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="h-14 w-14 p-0 rounded-2xl backdrop-blur-sm border-border/50 dark:border-border hover:bg-primary/5" asChild>
                    <a href="https://www.linkedin.com/" target="_blank"><Linkedin size={22} /></a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-2 max-w-md">
              {[
                "Fast turnaround",
                "Motion-rich UI",
                "Mobile-first polish"
              ].map((chip) => (
                <Badge
                  key={chip}
                  variant="secondary"
                  className="rounded-full px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest bg-secondary/80 dark:bg-secondary/20 border-secondary-foreground/5 text-slate-700 dark:text-secondary-foreground backdrop-blur-sm"
                >
                  {chip}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-full w-full bg-primary/20 blur-[120px] rounded-full opacity-40 animate-pulse" />

            <motion.div
              variants={floatingAnimation}
              animate="animate"
              {...cardHoverTilt}
              className="relative w-full max-w-[420px] aspect-square"
            >
              <Card
                className="lux-card w-full h-full relative overflow-hidden border-border/50 bg-card/40 backdrop-blur-md group shadow-2xl"
                onMouseEnter={handleCardPointerEnter}
                onMouseMove={handleCardPointerMove}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <motion.img
                    src="/src/assets/me.webp"
                    alt="Muhamad Jaelani"
                    className="h-full w-full object-cover grayscale transition-[filter] duration-700 ease-in-out group-hover:grayscale-0"
                    loading="eager"
                    whileHover={{ scale: 1.1 }}
                  />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(255,255,255,0.1),transparent_40%)]"
                    aria-hidden="true"
                  />
                </div>
              </Card>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-xl border border-border p-3 rounded-xl shadow-lg z-20 hidden sm:flex items-center gap-2"
              >
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-wider">Available for work</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-12 lg:mt-14">
          <Stats startStatsCount={startStatsCount} />
        </div>
      </div>
    </section>
  );
}


