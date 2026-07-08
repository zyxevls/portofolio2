import { useEffect, useRef } from "react";
import { useLanguage } from "@/providers/language-provider";
import { Stats } from "./Stats";
import { FileText, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/me.webp";
import
{
  gsap,
  animateHeading,
  revealScale,
  addMagnetic,
  parallaxY,
} from "@/lib/gsap-utils";

interface HeroProps
{
  startStatsCount: boolean;
}

export function Hero({ startStatsCount }: HeroProps)
{
  const { content } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const cornerTLRef = useRef<HTMLDivElement>(null);
  const cornerBRRef = useRef<HTMLDivElement>(null);
  const ghBtnRef = useRef<HTMLAnchorElement>(null);
  const liRef = useRef<HTMLAnchorElement>(null);
  const cvBtnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() =>
  {
    const kills: (() => void)[] = [];
    const section = sectionRef.current;
    if (!section) return;

    // ── Entrance timeline ─────────────────────────────────────────────────
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Corner accent boxes
    [cornerTLRef.current, cornerBRRef.current].forEach((el, i) =>
    {
      if (!el) return;
      gsap.set(el, { opacity: 0, scale: 0.7 });
      tl.to(el, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }, i * 0.1);
    });

    // Tagline badge
    if (taglineRef.current) {
      gsap.set(taglineRef.current, { opacity: 0, y: 12 });
      tl.to(taglineRef.current, { opacity: 1, y: 0, duration: 0.45 }, 0.2);
    }

    // Heading word reveal
    kills.push(animateHeading(headingRef.current, { delay: 0.35 }));

    // Intro paragraph
    if (introRef.current) {
      gsap.set(introRef.current, { opacity: 0, y: 18 });
      tl.to(introRef.current, { opacity: 1, y: 0, duration: 0.65 }, 0.75);
    }

    // CTA row
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 14 });
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.55 }, 1.0);
    }

    // Chips
    if (chipsRef.current) {
      gsap.set(chipsRef.current, { opacity: 0, y: 10 });
      tl.to(chipsRef.current, { opacity: 1, y: 0, duration: 0.5 }, 1.15);
    }

    // Profile image box reveal
    kills.push(revealScale(imageRef.current, { delay: 0.3, duration: 1 }));

    // Availability badge
    if (badgeRef.current) {
      gsap.set(badgeRef.current, { opacity: 0, y: 8, scale: 0.85 });
      tl.to(badgeRef.current, { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: "back.out(1.4)" }, 1.1);
    }

    // Grid parallax
    kills.push(parallaxY(gridRef.current, { yFactor: 0.3 }));

    // Magnetic social
    kills.push(addMagnetic(ghBtnRef.current));
    kills.push(addMagnetic(liRef.current));
    kills.push(addMagnetic(cvBtnRef.current));

    return () =>
    {
      kills.forEach((k) => k());
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden py-28 md:py-36 lg:py-18"
    >
      {/* ── Grid background parallax ── */}
      <div
        ref={gridRef}
        className="parallax-layer absolute inset-0 -z-10 grid-bg opacity-100"
        aria-hidden
      />

      {/* ── Corner accent boxes ── */}
      <div ref={cornerTLRef} className="absolute top-8 left-8 hidden lg:block z-10 pointer-events-none" aria-hidden>
        <div className="w-16 h-16 border border-border grid grid-cols-2 grid-rows-2">
          <div className="border-r border-b border-border" />
          <div className="border-b border-border" />
          <div className="border-r border-border" />
          <div />
        </div>
      </div>
      <div ref={cornerBRRef} className="absolute bottom-12 right-8 hidden lg:block z-10 pointer-events-none" aria-hidden>
        <div className="w-10 h-10 border border-border" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Text column ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">

            {/* Tagline */}
            <div ref={taglineRef} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-border text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                {content.role}
              </span>
            </div>

            {/* Heading */}
            <h1
              ref={headingRef}
              data-text={content.tagline}
              className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-foreground mb-8 font-black"
            >
              {content.tagline}
            </h1>

            {/* Intro */}
            <p
              ref={introRef}
              className="max-w-[520px] text-[15px] text-muted-foreground leading-[1.85] mb-10"
            >
              {content.intro}
            </p>

            {/* CTA row */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <a
                ref={cvBtnRef}
                href="/src/assets/cv.pdf"
                download="CV - Muhamad Jaelani"
                className="inline-flex items-center gap-2 h-11 px-7 bg-foreground text-background text-xs font-mono uppercase tracking-widest hover:opacity-80 transition-opacity w-full sm:w-auto justify-center"
              >
                <FileText size={13} />
                {content.common.downloadCv}
              </a>
              <div className="flex gap-2">
                <a
                  ref={ghBtnRef}
                  href="https://github.com/zyxevls"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center justify-center h-11 w-11 border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-150"
                >
                  <Github size={16} />
                </a>
                <a
                  ref={liRef}
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center h-11 w-11 border border-border hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-150"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Tech chips */}
            <div ref={chipsRef} className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 max-w-md">
              {content.highlights.map((h) => (
                <span
                  key={h.title}
                  className="px-3 py-1 border border-border text-[10px] font-mono uppercase tracking-widest text-muted-foreground hover:border-foreground hover:text-foreground transition-colors duration-150 cursor-default"
                >
                  {h.title}
                </span>
              ))}
            </div>
          </div>

          {/* ── Image column ── */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div ref={imageRef} className="relative w-full max-w-[340px] md:max-w-[420px]">
              {/* Offset box accent */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-border pointer-events-none z-0" aria-hidden />
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-border pointer-events-none z-0" aria-hidden />

              {/* Image box */}
              <div className="relative overflow-hidden aspect-4/5 border border-border bg-secondary z-10 group">
                <img
                  src={profileImage}
                  alt="Muhamad Jaelani"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
                  loading="eager"
                  fetchPriority="high"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
              </div>

              {/* Availability badge */}
              <div
                ref={badgeRef}
                className="absolute -bottom-5 -right-5 z-20 border border-border bg-background px-4 py-2.5 flex items-center gap-2.5 shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-[0.25em]">
                  {content.common.availableForWork}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="mt-20 lg:mt-28">
          <Stats startStatsCount={startStatsCount} />
        </div>
      </div>
    </section>
  );
}
