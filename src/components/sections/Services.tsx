import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/providers/language-provider";
import { iconMap } from "@/lib/icon-map";
import { Sparkles, Terminal } from "lucide-react";

interface ServiceCardProps
{
  service: {
    title: string;
    description: string;
    icon: string;
  };
  index: number;
  content: any;
}

function ServiceCard({ service, index, content }: ServiceCardProps)
{
  const Icon = iconMap[service.icon] || Sparkles;
  const cardRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() =>
  {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight,
      });
    }
  }, []);

  const handleMouseMove = (event: React.MouseEvent) =>
  {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  // 3D Spring tilt rotations
  const rotateX = useSpring(useTransform(mouseY, [0, dimensions.height], [10, -10]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, dimensions.width], [-10, 10]), { stiffness: 180, damping: 20 });

  // Dynamic Neon Border Trail following the cursor
  const borderBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(180px circle at ${x}px ${y}px, rgba(20, 184, 166, 0.4), rgba(99, 102, 241, 0.3), transparent 60%)`
  );

  // Dynamic Center Glowing Spotlight
  const innerBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(250px circle at ${x}px ${y}px, rgba(20, 184, 166, 0.08), rgba(99, 102, 241, 0.03), transparent 80%)`
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() =>
      {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        perspective: 1000,
      }}
      className="relative h-full"
    >
      {/* Vercel-style glowing neon border container */}
      <motion.div
        style={{
          background: isHovered ? borderBg : "rgba(255, 255, 255, 0.06)",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full p-[1px] rounded-2xl transition-all duration-300 shadow-xl dark:shadow-slate-950/20"
      >
        <Card className="relative h-full border border-transparent bg-black/60 dark:bg-stone-950/80 backdrop-blur-2xl overflow-hidden rounded-2xl flex flex-col justify-between select-none">
          {/* Spotlight Glow */}
          <motion.div
            style={{
              background: isHovered ? innerBg : "none",
            }}
            className="absolute inset-0 pointer-events-none"
          />

          {/* Futuristic subtle grid matrix design */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          <CardHeader className="p-5 pb-2 relative z-10">
            <div className="flex items-center justify-between">
              {/* Dynamic glowing icon box */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 opacity-20 blur-sm group-hover:opacity-100 transition duration-500" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-teal-400 group-hover:text-white transition duration-300">
                  <Icon className="size-5" />
                </div>
              </div>

              {/* Glowing Glassmorphic Card Index */}
              <span className="text-3xl font-black bg-gradient-to-b from-foreground/10 to-transparent bg-clip-text text-transparent group-hover:from-teal-500/20 select-none tracking-tighter transition-all duration-500">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>
          </CardHeader>

          <CardContent className="p-5 pt-0 flex flex-col justify-between h-[calc(100%-68px)] min-h-[140px] relative z-10">
            <div className="space-y-2">
              <CardTitle className="text-base font-extrabold tracking-tight text-white/90 group-hover:text-teal-400 transition-colors duration-300 flex items-center gap-1.5">
                {service.title}
                {isHovered && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-block text-[10px] text-teal-400 font-normal uppercase tracking-widest bg-teal-500/10 px-1.5 py-0.5 rounded"
                  >
                    Active
                  </motion.span>
                )}
              </CardTitle>
              <p className="text-[11px] leading-relaxed text-stone-400/90 group-hover:text-stone-300 transition-colors duration-300">
                {service.description}
              </p>
            </div>

            {/* Futuristic cyber indicator status and learn more */}
            <div className="pt-4 mt-auto flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-widest text-teal-400 hover:text-indigo-400 transition-all duration-300 cursor-pointer">
                <span>{content.common.learnMore}</span>
                <motion.div
                  animate={{ x: isHovered ? 4 : 0 }}
                  className="h-px w-5 bg-teal-400 group-hover:bg-indigo-400 transition-colors"
                />
              </div>

              {/* Minimal status pixel */}
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-[7px] text-stone-500 uppercase tracking-widest font-mono">SYS-ONLINE</span>
              </div>
            </div>
          </CardContent>

          {/* Glowing bottom structural accent */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-teal-500 via-indigo-500 to-transparent opacity-30" />
        </Card>
      </motion.div>
    </motion.div>
  );
}

export function Services()
{
  const { content } = useLanguage();

  return (
    <section className="relative py-10">
      {/* Dynamic colorful decorative ambient orbs */}
      <div className="absolute top-1/4 left-1/10 -z-10 h-48 w-48 bg-teal-500/10 blur-[100px] rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 -z-10 h-48 w-48 bg-indigo-500/10 blur-[100px] rounded-full opacity-60 animate-pulse" />

      <div className="space-y-8">
        <div className="flex flex-col items-center text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5"
          >
            <Badge variant="outline" className="px-3 py-0.5 rounded-full bg-teal-500/10 border-teal-500/20 text-[9px] font-extrabold uppercase tracking-[0.25em] text-teal-400 flex items-center gap-1">
              <Terminal className="size-2.5" />
              {content.common.myExpertise}
            </Badge>
          </motion.div>

          <div className="space-y-1">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-black tracking-tight leading-tight"
            >
              {content.common.myQualityServices.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
                {content.common.myQualityServices.split(" ").slice(-1)}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-xl mx-auto text-xs md:text-sm text-stone-400 leading-relaxed"
            >
              {content.common.servicesDescription}
            </motion.p>
          </div>
        </div>

        {/* Services Grid with 3D Spotlight Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
