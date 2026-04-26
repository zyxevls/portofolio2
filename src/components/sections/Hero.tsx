import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { portfolioContent } from "@/data/portfolio-content";
import { Stats } from "./Stats";
import { FileText, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/me.webp";

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
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden py-24 md:py-32 lg:py-0"
    >
      <div className="container mx-auto px-6 relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left z-20 relative order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-6 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] bg-primary/5 border-primary/20 text-primary rounded-full">
                {content.role}
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-balance font-display text-4xl leading-[1.1] md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-8"
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

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="h-14 px-10 text-base font-bold w-full sm:w-auto rounded-2xl shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30" asChild>
                  <a href="/src/assets/cv.pdf" download="CV - Muhamad Jaelani">
                    Download CV
                    <FileText size={18} className="ml-2" />
                  </a>
                </Button>
              </motion.div>

              <div className="flex gap-4">
                <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}>
                  <Button size="lg" variant="outline" className="h-14 w-14 p-0 rounded-2xl border-border/60 bg-background/50 backdrop-blur-md hover:bg-primary/5 hover:border-primary/30" asChild>
                    <a href="https://github.com/zyxevls" target="_blank" aria-label="GitHub"><Github size={22} /></a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.9 }}>
                  <Button size="lg" variant="outline" className="h-14 w-14 p-0 rounded-2xl border-border/60 bg-background/50 backdrop-blur-md hover:bg-primary/5 hover:border-primary/30" asChild>
                    <a href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn"><Linkedin size={22} /></a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 max-w-md">
              {[
                "Full-Stack Precision",
                "Type-Safe Development",
                "Performance-First UX"
              ].map((chip) => (
                <div
                  key={chip}
                  className="rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-widest bg-secondary/40 dark:bg-secondary/10 border border-border/50 text-slate-600 dark:text-secondary-foreground backdrop-blur-sm"
                >
                  {chip}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[120%] w-[120%] bg-primary/10 blur-[100px] rounded-full opacity-40 animate-pulse" />

            <motion.div
              variants={floatingAnimation}
              animate="animate"
              className="relative w-full max-w-[360px] md:max-w-[420px] aspect-square"
            >
              <div
                className="lux-card w-full h-full relative rounded-3xl overflow-hidden border border-border/50 bg-card/20 backdrop-blur-xl group"
                onMouseEnter={handleCardPointerEnter}
                onMouseMove={handleCardPointerMove}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <motion.img
                    src={profileImage}
                    alt="Muhamad Jaelani"
                    className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-60" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
                className="absolute -bottom-4 -right-4 bg-background/90 backdrop-blur-xl border border-border/60 p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3"
              >
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest">Available for work</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-16 lg:mt-24">
          <Stats startStatsCount={startStatsCount} />
        </div>
      </div>
    </section>
  );
}


