import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap-utils";

export function CustomCursor() {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });
    };

    const onEnterLink = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.6, duration: 0.2 });
      gsap.to(dot,  { scale: 0,   duration: 0.2 });
    };
    const onLeaveLink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2 });
      gsap.to(dot,  { scale: 1, duration: 0.2 });
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role=button]")) {
        onEnterLink();
      } else {
        onLeaveLink();
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="h-2 w-2 rounded-full bg-foreground" />
      </div>
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="h-8 w-8 rounded-full border border-foreground opacity-40" />
      </div>
    </>
  );
}
