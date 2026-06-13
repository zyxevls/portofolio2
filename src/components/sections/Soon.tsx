import { motion } from "framer-motion";
import SoonImage from "/public/img/soon.jpg";

export function Soon() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute top-2/3 left-1/3 h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[100px]" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      <div className="flex flex-col items-center gap-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div className="lux-card rounded-2xl overflow-hidden w-[280px] h-[280px] md:w-[360px] md:h-[360px]">
            <img
              src={SoonImage}
              alt="Coming soon"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <div className="rounded-full border border-teal-500/20 bg-teal-500/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-teal-700 dark:text-teal-300">
            Under Construction
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-foreground leading-none">
            Coming Soon
          </h1>

          <p className="max-w-md text-sm md:text-base text-slate-600 dark:text-stone-400 leading-relaxed">
            Something great is being built here. Check back shortly.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Soon;
