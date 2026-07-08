import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Shared eases ────────────────────────────────────────────────────────────
export const EASE_OUT = "power3.out";
export const EASE_INOUT = "power2.inOut";
export const EASE_EXPO = "expo.out";

// ─── Defaults ────────────────────────────────────────────────────────────────
const SCROLL_START = "top 88%";

// ─── helpers ─────────────────────────────────────────────────────────────────

/**
 * Simple fade + slide-up reveal for a single element.
 */
export function revealUp(
  el: HTMLElement | null,
  opts?: { delay?: number; duration?: number; y?: number; trigger?: Element | null }
) {
  if (!el) return () => {};
  const { delay = 0, duration = 0.7, y = 36, trigger } = opts ?? {};
  gsap.set(el, { opacity: 0, y });
  const anim = gsap.to(el, {
    opacity: 1,
    y: 0,
    duration,
    ease: EASE_OUT,
    delay,
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? el, start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Fade-in only (no y movement).
 */
export function revealFade(
  el: HTMLElement | null,
  opts?: { delay?: number; duration?: number; trigger?: Element | null }
) {
  if (!el) return () => {};
  const { delay = 0, duration = 0.8, trigger } = opts ?? {};
  gsap.set(el, { opacity: 0 });
  const anim = gsap.to(el, {
    opacity: 1,
    duration,
    ease: EASE_INOUT,
    delay,
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? el, start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Stagger fade + slide-up for an array of elements.
 */
export function staggerReveal(
  els: (HTMLElement | null)[],
  opts?: {
    trigger?: Element | null;
    stagger?: number;
    y?: number;
    delay?: number;
    duration?: number;
  }
) {
  const valid = els.filter(Boolean) as HTMLElement[];
  if (!valid.length) return () => {};
  const { trigger, stagger = 0.1, y = 30, delay = 0, duration = 0.65 } = opts ?? {};
  gsap.set(valid, { opacity: 0, y });
  const anim = gsap.to(valid, {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    ease: EASE_OUT,
    delay,
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? valid[0], start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Heading word-mask reveal — splits text into word spans, then reveals each.
 * Reads from data-text attribute to avoid React reconciler conflicts.
 *
 * Usage: <h2 ref={ref} data-text="My Heading">My Heading</h2>
 */
export function animateHeading(
  el: HTMLElement | null,
  opts?: { delay?: number; trigger?: Element | null; stagger?: number }
) {
  if (!el) return () => {};
  const { delay = 0, trigger, stagger = 0.055 } = opts ?? {};

  const text = el.dataset.text ?? el.textContent ?? "";
  if (!text.trim()) return () => {};

  if (!el.dataset.split) {
    el.innerHTML = text
      .split(" ")
      .map(
        (w) =>
          `<span style="display:inline-block;overflow:hidden;vertical-align:bottom;line-height:1.2;"><span class="sw-inner" style="display:inline-block;">${w}</span></span>`
      )
      .join(" ");
    el.dataset.split = "1";
  }

  const inners = Array.from(el.querySelectorAll<HTMLElement>(".sw-inner"));
  gsap.set(inners, { yPercent: 110 });
  const anim = gsap.to(inners, {
    yPercent: 0,
    duration: 0.85,
    stagger,
    ease: "power4.out",
    delay,
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? el, start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Clip-path wipe from bottom → top.
 */
export function clipReveal(
  el: HTMLElement | null,
  opts?: { delay?: number; trigger?: Element | null; duration?: number }
) {
  if (!el) return () => {};
  const { delay = 0, trigger, duration = 1 } = opts ?? {};
  gsap.set(el, { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 });
  const anim = gsap.to(el, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration,
    ease: "power4.inOut",
    delay,
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? el, start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Slide-in from left or right.
 */
export function revealSide(
  el: HTMLElement | null,
  opts?: { direction?: "left" | "right"; delay?: number; duration?: number; trigger?: Element | null }
) {
  if (!el) return () => {};
  const { direction = "left", delay = 0, duration = 0.75, trigger } = opts ?? {};
  const x = direction === "left" ? -40 : 40;
  gsap.set(el, { opacity: 0, x });
  const anim = gsap.to(el, {
    opacity: 1,
    x: 0,
    duration,
    ease: EASE_OUT,
    delay,
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? el, start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Scale-up reveal (for images / cards).
 */
export function revealScale(
  el: HTMLElement | null,
  opts?: { delay?: number; duration?: number; from?: number; trigger?: Element | null }
) {
  if (!el) return () => {};
  const { delay = 0, duration = 0.8, from = 0.88, trigger } = opts ?? {};
  gsap.set(el, { opacity: 0, scale: from });
  const anim = gsap.to(el, {
    opacity: 1,
    scale: 1,
    duration,
    ease: EASE_EXPO,
    delay,
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? el, start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Magnetic cursor attraction for buttons / icons.
 */
export function addMagnetic(el: HTMLElement | null, strength = 0.35) {
  if (!el) return () => {};
  const onMove = (e: MouseEvent) => {
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * strength;
    const y = (e.clientY - top - height / 2) * strength;
    gsap.to(el, { x, y, duration: 0.3, ease: "power2.out" });
  };
  const onLeave = () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
  };
}

/**
 * Line draw (scaleX from 0 → 1 for decorative lines).
 */
export function drawLine(
  el: HTMLElement | null,
  opts?: { delay?: number; duration?: number; trigger?: Element | null }
) {
  if (!el) return () => {};
  const { delay = 0, duration = 0.6, trigger } = opts ?? {};
  gsap.set(el, { scaleX: 0, transformOrigin: "left center" });
  const anim = gsap.to(el, {
    scaleX: 1,
    duration,
    ease: EASE_EXPO,
    delay,
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? el, start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Counter / number count-up using GSAP.
 * Writes directly to element's textContent.
 */
export function countUp(
  el: HTMLElement | null,
  opts?: { target: number; suffix?: string; duration?: number; delay?: number; trigger?: Element | null }
) {
  if (!el) return () => {};
  const { target = 0, suffix = "", duration = 1.5, delay = 0, trigger } = opts ?? {};
  const obj = { val: 0 };
  const anim = gsap.to(obj, {
    val: target,
    duration,
    delay,
    ease: "power2.out",
    onUpdate: () => {
      el.textContent = Math.round(obj.val) + suffix;
    },
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? el, start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Cleanup utility: kill all ScrollTrigger instances tied to a container.
 */
export function killScrollTriggers(container?: HTMLElement | null) {
  if (container) {
    ScrollTrigger.getAll()
      .filter((st) => container.contains(st.trigger as Node))
      .forEach((st) => st.kill());
  } else {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  }
}

/**
 * Parallax scroll — moves element at yFactor speed relative to scroll.
 * yFactor: positive = slow down (move up slower), negative = move opposite.
 */
export function parallaxY(
  el: HTMLElement | null,
  opts?: { yFactor?: number; trigger?: Element | null }
) {
  if (!el) return () => {};
  const { yFactor = 0.25, trigger } = opts ?? {};
  const anim = gsap.fromTo(
    el,
    { yPercent: -yFactor * 50 },
    {
      yPercent: yFactor * 50,
      ease: "none",
      scrollTrigger: {
        trigger: trigger ?? el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Parallax on the background-position (for large grid/pattern overlays).
 */
export function parallaxBg(
  el: HTMLElement | null,
  opts?: { speed?: number }
) {
  if (!el) return () => {};
  const { speed = 0.15 } = opts ?? {};
  const anim = gsap.fromTo(
    el,
    { backgroundPositionY: "0%" },
    {
      backgroundPositionY: `${speed * 100}%`,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

/**
 * Box-clip reveal: clip-path inset top → 0 (dramatic box wipe).
 */
export function boxReveal(
  el: HTMLElement | null,
  opts?: { delay?: number; duration?: number; trigger?: Element | null; from?: "bottom" | "top" | "left" | "right" }
) {
  if (!el) return () => {};
  const { delay = 0, duration = 0.9, trigger, from = "bottom" } = opts ?? {};
  const clipStart = {
    bottom: "inset(100% 0% 0% 0%)",
    top: "inset(0% 0% 100% 0%)",
    left: "inset(0% 100% 0% 0%)",
    right: "inset(0% 0% 0% 100%)",
  }[from];
  gsap.set(el, { clipPath: clipStart });
  const anim = gsap.to(el, {
    clipPath: "inset(0% 0% 0% 0%)",
    duration,
    ease: "power4.inOut",
    delay,
    scrollTrigger: trigger !== undefined
      ? { trigger: trigger ?? el, start: SCROLL_START }
      : undefined,
  });
  return () => { anim.scrollTrigger?.kill(); anim.kill(); };
}

export { gsap, ScrollTrigger };
