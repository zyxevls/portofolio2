import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FeatureCard } from "./components/FeatureCard";
import { featureCards } from "./data/portfolio";

export default function App()
{
    const rootRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({ target: rootRef });
    const drift = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

    return (
        <main ref={rootRef} className="relative isolate overflow-hidden">
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -top-28 left-[8%] h-96 w-96 rounded-full bg-primary/10 blur-3xl"
                style={{ y: drift }}
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute right-[4%] top-72 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"
                style={{ y: drift }}
            />

            <Navbar />
            <Hero />
            <About />

            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
                <div className="mb-10 max-w-2xl">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-primary/80">What this portfolio highlights</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A cleaner system for showing design, code, and delivery.</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {featureCards.map((card, index) => (
                        <FeatureCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                            badge={`0${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            <Projects />
            <Skills />
            <Education />
            <Footer />
        </main>
    );
}