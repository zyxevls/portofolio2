import { useRef, useEffect } from "react";
import { CountUpNumber } from "@/components/shared/CountUpNumber";
import { useLanguage } from "@/providers/language-provider";
import { staggerReveal } from "@/lib/gsap-utils";

interface StatsProps {
  startStatsCount: boolean;
}

export function Stats({ startStatsCount }: StatsProps) {
  const { content } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs     = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const kill = staggerReveal(itemRefs.current, {
      trigger: containerRef.current,
      stagger: 0.08,
      y: 14,
      duration: 0.5,
    });
    return kill;
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 sm:grid-cols-4 border border-border"
    >
      {content.stats.map((stat, i) => (
        <div
          key={stat.label}
          ref={(el) => { itemRefs.current[i] = el; }}
          className="flex flex-col gap-1.5 px-6 py-7 border-r border-b border-border last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r sm:[&:nth-child(4)]:border-r-0 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0 [&:nth-child(1)]:sm:border-b-0 [&:nth-child(2)]:sm:border-b-0 hover:bg-secondary transition-colors duration-150"
        >
          <div className="text-3xl md:text-4xl font-display text-foreground tabular-nums">
            <CountUpNumber value={stat.value} delay={100 + i * 90} start={startStatsCount} />
          </div>
          <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-[0.28em] leading-tight">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
