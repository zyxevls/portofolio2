import { motion } from "framer-motion";
import { portfolioContent } from "@/data/portfolio-content";
import { iconMap } from "@/lib/icon-map";

function WorkflowRow({ step, index, displayIndex }: { step: any, index: number, displayIndex: string }) {
  const Icon = iconMap[step.icon as keyof typeof iconMap];

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--mx", `${x}px`);
    currentTarget.style.setProperty("--my", `${y}px`);
  }

  return (
    <motion.div
      key={step.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative lux-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background: `radial-gradient(800px circle at var(--mx, 0) var(--my, 0), rgba(var(--primary-rgb), 0.15), rgba(0, 255, 255, 0.05) 30%, transparent 80%)`
        }}
      />

      {/* Background Hover Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 -z-20 -translate-x-full group-hover:translate-x-0" />

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 px-6 border-b border-border/50 dark:border-white/10 transition-all duration-500 group-hover:px-10 overflow-hidden">

        {/* Large Index Number */}
        <span className="text-2xl font-black text-primary/40 group-hover:text-primary transition-colors duration-500">
          {displayIndex}
        </span>

        {/* Icon & Title */}
        <div className="flex items-center gap-6 flex-1 min-w-[200px]">
          <div className="h-12 w-12 rounded-2xl bg-muted dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-white/20 transition-all duration-500 transform group-hover:scale-110">
            <Icon className="size-6 text-primary group-hover:text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {step.title}
          </h3>
        </div>

        {/* Description */}
        <p className="flex-2 text-sm md:text-base text-slate-600 dark:text-muted-foreground group-hover:text-foreground dark:group-hover:text-white transition-colors leading-relaxed font-medium">
          {step.description}
        </p>

        {/* Arrow Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 dark:border-white/10 group-hover:border-primary/40 group-hover:rotate-45 transition-all duration-500">
          <svg
            className="w-4 h-4 text-foreground dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

      </div>
    </motion.div>
  );
}

export function Workflow() {
  const content = portfolioContent;

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="absolute top-1/4 left-0 -z-10 h-[500px] w-[500px] bg-primary/10 blur-[140px] rounded-full opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 -z-10 h-[500px] w-[500px] bg-primary/5 blur-[120px] rounded-full opacity-30" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.3em] text-[10px]"
          >
            <div className="h-px w-8 bg-primary" />
            Working Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            How I <span className="text-primary italic font-serif">Work</span>
          </motion.h2>
        </div>

        <div className="flex flex-col border-t border-border/50 dark:border-white/10 ">
          {content.process.map((step, index) => {
            const displayIndex = (index + 1).toString().padStart(2, '0');
            return <WorkflowRow key={step.title} step={step} index={index} displayIndex={displayIndex} />;
          })}
        </div>
      </div>
    </section>
  );
}