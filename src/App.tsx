import { useEffect, useState, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioContent } from "@/data/portfolio-content";
import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";

// Layout & Components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/shared/CustomCursor";
import logoDark from "@/assets/logo-dark.png";

// Lazy load sections for better performance
const Hero = lazy(() => import("@/components/sections/Hero").then(m => ({ default: m.Hero })));
const TechStack = lazy(() => import("@/components/sections/TechStack").then(m => ({ default: m.TechStack })));
const Stats = lazy(() => import("@/components/sections/Stats").then(m => ({ default: m.Stats })));
const Services = lazy(() => import("@/components/sections/Services").then(m => ({ default: m.Services })));
const Workflow = lazy(() => import("@/components/sections/Workflow").then(m => ({ default: m.Workflow })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const Projects = lazy(() => import("@/components/sections/Projects").then(m => ({ default: m.Projects })));
const CallToAction = lazy(() => import("@/components/sections/CallToAction").then(m => ({ default: m.CallToAction })));
const Contact = lazy(() => import("@/components/sections/Contact").then(m => ({ default: m.Contact })));

export default function App() {
    const [showIntroLoader, setShowIntroLoader] = useState(true);
    const [startStatsCount, setStartStatsCount] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setShowIntroLoader(false);
        }, 1700);
        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!showIntroLoader) {
            setStartStatsCount(true);
        }
    }, [showIntroLoader]);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="bg-background text-foreground">
            <CustomCursor />
            <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.02, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none fixed inset-0 z-0 opacity-80 [background:radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.16),transparent_28%),radial-gradient(circle_at_78%_0%,rgba(15,118,110,0.2),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.14),transparent_32%)]"
            />

            <AnimatePresence>
                {showIntroLoader && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
                        className="fixed inset-0 z-70 flex flex-col items-center justify-center bg-background"
                    >
                        <div className="absolute inset-0 opacity-80 [background:radial-gradient(circle_at_18%_14%,rgba(249,115,22,0.17),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(15,118,110,0.2),transparent_30%)]" />
                        <div className="relative mx-auto flex flex-col items-center px-6">
                            <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45 }}
                                className="text-sm tracking-[0.28em] text-muted-foreground uppercase"
                            >
                                Muhamad Jaelani
                            </motion.p>
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="relative h-20 w-auto mb-6"
                            >
                                <img
                                    src={logoDark}
                                    alt="Logo"
                                    className="h-full w-auto object-contain brightness-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                />
                            </motion.div>

                            <div className="mt-10 h-1 w-64 overflow-hidden rounded-full bg-secondary/80">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="h-full bg-linear-to-r from-primary via-cyan-400 to-orange-400"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Header isScrolled={isScrolled} />

            <motion.div
                className="fixed right-0 top-1/2 z-40 -translate-y-1/2"
                animate={{ x: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <ThemeToggle className="shadow-2xl" />
            </motion.div>

            <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-20 md:gap-20 top-20">
                <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading experience...</div>}>
                    <Hero startStatsCount={startStatsCount} />
                    <Separator />
                    <Services />
                    <Workflow />
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
