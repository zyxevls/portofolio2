import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { portfolioContent } from "@/data/portfolio-content";
import { iconMap } from "@/lib/icon-map";

const sophisticatedHover = {
  whileHover: { y: -12, scale: 1.03, rotateX: 2 },
  transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.8 }
} as const;

export function Services() {
  const content = portfolioContent;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--x", `${x}px`);
    currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <section className="relative py-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 -z-10 h-48 w-48 bg-primary/5 blur-[80px] rounded-full opacity-50" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-48 w-48 bg-secondary/5 blur-[80px] rounded-full opacity-50" />

      <div className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-3 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-bold uppercase tracking-[0.3em] text-primary"
          >
            My Expertise
          </motion.div>

          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              My Quality <span className="bg-linear-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Services</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-xl mx-auto text-sm md:text-base text-muted-foreground leading-relaxed"
            >
              We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
            </motion.p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onMouseMove={handleMouseMove}
                className="group h-full"
              >
                <div
                  className="flex flex-col h-full rounded-4xl border border-border/40 bg-card/40 p-8 backdrop-blur-xl"
                >
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                          <Icon className="size-6" />
                        </div>
                        <span className="text-5xl font-black text-foreground/5 dark:text-white/5 select-none tracking-tighter">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-muted-foreground group-hover:text-foreground dark:group-hover:text-white/80 transition-colors duration-300">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-8">
                      <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary group-hover:gap-5 transition-all duration-300 cursor-pointer">
                        Learn More
                        <div className="h-px w-6 bg-primary group-hover:w-10 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



