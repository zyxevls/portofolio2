import { useEffect, useState, Suspense, lazy, useRef } from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { ThemeToggle } from "@/components/theme-toggle";
import { Hero } from "@/components/sections/Hero";
import { gsap } from "@/lib/gsap-utils";

const Services = lazy(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const TechStack = lazy(() => import("@/components/sections/TechStack").then(m => ({ default: m.TechStack })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const Projects = lazy(() => import("@/components/sections/Projects").then(m => ({ default: m.Projects })));
const CallToAction = lazy(() => import("@/components/sections/CallToAction").then(m => ({ default: m.CallToAction })));
const Contact = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));

export default function App()
{
  const [showLoader, setShowLoader] = useState(true);
  const [startStatsCount, setStartStats] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const loaderTextRef = useRef<HTMLParagraphElement>(null);

  /* ── Intro loader ── */
  useEffect(() =>
  {
    const el = loaderRef.current;
    if (!el) return;

    const tl = gsap.timeline();

    // Text fade in
    if (loaderTextRef.current) {
      tl.fromTo(loaderTextRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" }, 0);
    }

    // Bar fill
    if (barRef.current) {
      tl.fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, 0.1);
    }

    // Fade out loader
    tl.to(el, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      delay: 0.1,
      onComplete: () =>
      {
        setShowLoader(false);
        setStartStats(true);
      },
    });

    return () => { tl.kill(); };
  }, []);

  /* ── Scroll state ── */
  useEffect(() =>
  {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="noise bg-background text-foreground selection:bg-foreground selection:text-background">
      <CustomCursor />

      {/* ── Minimal intro loader ── */}
      {showLoader && (
        <div
          ref={loaderRef}
          className="fixed inset-0 z-70 flex items-end justify-end p-10 bg-background pointer-events-none grid-bg"
        >
          <div className="flex flex-col items-end gap-3">
            <p ref={loaderTextRef} className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.3em]">
              Muhamad Jaelani
            </p>
            <div className="h-px w-40 bg-border overflow-hidden">
              <div
                ref={barRef}
                className="h-full w-full origin-left bg-foreground"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          </div>
        </div>
      )}

      <Header isScrolled={isScrolled} />

      {/* Floating theme toggle */}
      <div className="fixed right-0 top-1/2 z-40 -translate-y-1/2">
        <ThemeToggle className="shadow-sm" />
      </div>

      <main className="mx-auto max-w-6xl px-6 flex flex-col gap-32 pb-0">
        <Suspense fallback={null}>
          <Hero startStatsCount={startStatsCount} />
          <Services />
          <TechStack />
          <Testimonials />
          <Projects />
          <CallToAction />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
