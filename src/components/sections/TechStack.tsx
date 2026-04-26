import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const languages = [
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css" },
  { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Python", slug: "python" },
  { name: "Go", slug: "go" },
  { name: "PHP", slug: "php" },
  { name: "SQL", slug: "postgresql" },
  { name: "Dart", slug: "dart" },
  { name: "Kotlin", slug: "kotlin" },
  { name: "Rust", slug: "rust" },
  { name: "Bash", slug: "gnubash" },
  { name: "Arduino", slug: "arduino" },
];

const tools = [
  { name: "React", slug: "react" },
  { name: "Next", slug: "nextdotjs" },
  { name: "Vue", slug: "vuedotjs" },
  { name: "Laravel", slug: "laravel" },
  { name: "Codeigniter", slug: "codeigniter" },
  { name: "Nestjs", slug: "nestjs" },
  { name: "Nuxt", slug: "nuxt" },
  { name: "Express", slug: "express" },
  { name: "Svelte", slug: "svelte" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Bun", slug: "bun" },
  { name: "Supabase", slug: "supabase" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
  { name: "Shadcn UI", slug: "shadcnui" },
  { name: "ReactQuery", slug: "reactquery" },
  { name: "Postman", slug: "postman" }
];

function TechPod({ tech, rotateDir = 1 }: { tech: { name: string; slug: string }, rotateDir?: number }) {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--mx", `${x}px`);
    currentTarget.style.setProperty("--my", `${y}px`);
  }

  return (
    <div 
      className="group relative lux-card rounded-3xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseMove}
    >
      <div className="flex items-center gap-4 px-8 py-4 rounded-3xl bg-card/60 dark:bg-white/5 border border-border/50 dark:border-white/10 backdrop-blur-xl hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/40 transition-all duration-700 shadow-xl dark:shadow-black/20 overflow-hidden">
        {/* Colorful Spotlight Overlay using synced CSS Variables */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at var(--mx, 0) var(--my, 0), rgba(var(--primary-rgb), 0.15), rgba(0, 255, 255, 0.05) 40%, transparent 80%)`
          }}
        />
        
        <div className={`h-10 w-10 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 ${rotateDir > 0 ? 'group-hover:rotate-6' : 'group-hover:-rotate-6'}`}>
          <img
            src={`https://cdn.simpleicons.org/${tech.slug}`}
            alt={tech.name}
            className="h-full w-full object-contain"
          />
        </div>
        <span className="text-sm font-bold tracking-tight text-muted-foreground group-hover:text-foreground transition-colors">
          {tech.name}
        </span>
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-32 bg-background/50">
      {/* Dynamic Mesh Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-[600px] w-[600px] bg-primary/10 blur-[160px] rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-cyan-500/5 blur-[140px] rounded-full" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Dynamic Marquees */}
          <div className="w-full lg:w-[60%] flex flex-col gap-8 select-none order-2 lg:order-1">
            {/* Languages Row */}
            <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex animate-marquee-left gap-8 whitespace-nowrap py-4">
                {languages.concat(languages).map((tech, i) => (
                  <TechPod key={`lang-${i}`} tech={tech} rotateDir={1} />
                ))}
              </div>
            </div>

            {/* Tools Row */}
            <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex animate-marquee-right gap-8 whitespace-nowrap py-4">
                {tools.concat(tools).map((tech, i) => (
                  <TechPod key={`tool-${i}`} tech={tech} rotateDir={-1} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Sophisticated Text Section */}
          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-[0.4em] text-primary w-fit lg:ml-auto"
              >
                Technology Stack
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.9] text-foreground"
              >
                Built with <br />
                <span className="bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Modern Tech</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm lg:ml-auto font-medium"
            >
              Leveraging industry-leading tools and languages to build robust, scalable, and performance-optimized digital experiences.
            </motion.p>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 50s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee-left { animation-duration: 25s; }
          .animate-marquee-right { animation-duration: 30s; }
        }
      `}} />
    </section>
  );
}

