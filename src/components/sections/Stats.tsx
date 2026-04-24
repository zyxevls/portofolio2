import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { CountUpNumber } from "@/components/shared/CountUpNumber";
import { portfolioContent } from "@/data/portfolio-content";

interface StatsProps {
  startStatsCount: boolean;
}

export function Stats({ startStatsCount }: StatsProps) {
  const content = portfolioContent;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="col-span-full grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-4"
    >
      {content.stats.map((stat, index) => (
        <motion.div 
          key={stat.label} 
          className="flex items-center gap-4 py-2"
        >
          <div className="flex flex-col">
            <div className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
              <CountUpNumber
                value={stat.value}
                delay={220 + index * 140}
                start={startStatsCount && isInView}
              />
            </div>
          </div>
          <div className="h-8 w-px bg-border/40 hidden sm:block" />
          <div className="text-[9px] md:text-xs font-semibold leading-tight text-muted-foreground uppercase tracking-[0.2em]">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
