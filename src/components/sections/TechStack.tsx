import { useEffect, useRef } from "react";
import { useLanguage } from "@/providers/language-provider";
import { gsap, ScrollTrigger, animateHeading, staggerReveal, revealFade, parallaxY } from "@/lib/gsap-utils";

const allTech = [
  { name: "React",       slug: "react" },
  { name: "TypeScript",  slug: "typescript" },
  { name: "Next.js",     slug: "nextdotjs" },
  { name: "Tailwind",    slug: "tailwindcss" },
  { name: "Node.js",     slug: "nodedotjs" },
  { name: "Laravel",     slug: "laravel" },
  { name: "Supabase",    slug: "supabase" },
  { name: "Docker",      slug: "docker" },
  { name: "PostgreSQL",  slug: "postgresql" },
  { name: "Figma",       slug: "figma" },
  { name: "Git",         slug: "git" },
  { name: "Python",      slug: "python" },
  { name: "Vue",         slug: "vuedotjs" },
  { name: "NestJS",      slug: "nestjs" },
  { name: "Nuxt",        slug: "nuxt" },
  { name: "Go",          slug: "go" },
  { name: "PHP",         slug: "php" },
  { name: "Bun",         slug: "bun" },
  { name: "Svelte",      slug: "svelte" },
  { name: "Postman",     slug: "postman" },
];

function TechPill({ tech }: { tech: { name: string; slug: string } }) {
  return (
    <span className="group inline-flex items-center gap-2 px-4 py-2 border border-border text-[10px] font-mono text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-150 cursor-default shrink-0 select-none">
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/808080`}
        alt=""
        aria-hidden
        className="h-3 w-3 group-hover:brightness-0 group-hover:invert transition-all duration-150"
        loading="lazy"
      />
      {tech.name}
    </span>
  );
}

export function TechStack() {
  const { content } = useLanguage();

  const sectionRef  = useRef<HTMLElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);
  const marqueeRef  = useRef<HTMLDivElement>(null);
  const skillRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const kills: (() => void)[] = [];

    if (lineRef.current) {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top 85%",
        onEnter: () => gsap.to(lineRef.current, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }),
        once: true,
      });
      kills.push(() => st.kill());
    }

    kills.push(animateHeading(headingRef.current, { trigger: section }));
    kills.push(revealFade(marqueeRef.current, { trigger: section, delay: 0.1 }));
    kills.push(staggerReveal(skillRefs.current, { trigger: section, stagger: 0.06, y: 12 }));
    kills.push(parallaxY(gridRef.current, { yFactor: 0.15, trigger: section }));

    return () => kills.forEach((k) => k());
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="relative py-2 overflow-hidden">
      {/* Parallax grid */}
      <div ref={gridRef} className="parallax-layer absolute inset-0 -z-10 grid-bg opacity-60" aria-hidden />

      {/* Section label */}
      <div className="flex items-center gap-4 pb-4 mb-14">
        <div ref={lineRef} className="h-px flex-1 bg-border" />
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em] shrink-0">
          004 — {content.common.techStack}
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — heading + skill groups */}
        <div className="flex flex-col gap-6">
          <h2
            ref={headingRef}
            data-text={`${content.common.builtWith} ${content.common.modernTech}`}
            className="font-display text-4xl md:text-5xl leading-none tracking-tight text-foreground"
          >
            {content.common.builtWith}
            <br />
            <em>{content.common.modernTech}</em>
          </h2>
          <p className="text-xs text-muted-foreground leading-[1.9] max-w-xs font-mono">
            {content.common.techStackDescription}
          </p>

          {/* Skill groups — boxed rows */}
          <div className="mt-4 border border-border">
            {content.skills.map((group, i) => (
              <div
                key={group.title}
                ref={(el) => { skillRefs.current[i] = el; }}
                className="grid grid-cols-[100px_1fr] gap-6 px-5 py-4 border-b border-border last:border-0 hover:bg-secondary transition-colors duration-150"
              >
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest pt-0.5 shrink-0">
                  {group.title}
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {group.skills.map((s) => (
                    <span key={s} className="text-[11px] font-mono text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — scrolling marquee pills */}
        <div ref={marqueeRef} className="flex flex-col gap-2.5 overflow-hidden">
          {/* Row → */}
          <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-2 whitespace-nowrap marquee-track">
              {allTech.concat(allTech).slice(0, 28).map((t, i) => (
                <TechPill key={`a${i}`} tech={t} />
              ))}
            </div>
          </div>
          {/* Row ← */}
          <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-2 whitespace-nowrap marquee-track-rev">
              {[...allTech].reverse().concat([...allTech].reverse()).slice(0, 28).map((t, i) => (
                <TechPill key={`b${i}`} tech={t} />
              ))}
            </div>
          </div>
          {/* Row → slow */}
          <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex gap-2 whitespace-nowrap marquee-track-slow">
              {allTech.concat(allTech).slice(4, 30).map((t, i) => (
                <TechPill key={`c${i}`} tech={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
