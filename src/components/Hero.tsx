import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { heroStats } from "../data/portfolio";

const introLines = ["Frontend Web Developer", "Tech Enthusiast", "Builder of thoughtful interfaces"];

export default function Hero()
{
    return (
        <section id="home" className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-8 lg:px-10 lg:pb-32 lg:pt-20">
            <div className="absolute inset-x-6 top-10 -z-10 h-112 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(126,231,255,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.14),transparent_38%)] blur-3xl" />

            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="max-w-3xl">
                    <Badge className="mb-6 border-primary/20 bg-primary/10 text-primary">Available for collaboration</Badge>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground"
                    >
                        Muhamad Jaelani
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
                    >
                        Clean, responsive, and modern portfolio experiences for the web.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
                    >
                        I build calm interfaces that combine strong layout systems, motion, and a practical frontend workflow.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-8 flex flex-wrap items-center gap-4"
                    >
                        <Button asChild size="lg">
                            <a href="#projects">
                                View projects <ArrowRight className="size-4" />
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <a href="#contact">
                                Contact me <Mail className="size-4" />
                            </a>
                        </Button>
                    </motion.div>

                    <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
                        {introLines.map((line) => (
                            <Badge key={line} variant="outline" className="border-white/10 bg-white/5">
                                {line}
                            </Badge>
                        ))}
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {heroStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.35 + index * 0.08 }}
                            >
                                <Card className="h-full border-white/10 bg-white/5">
                                    <CardContent className="p-5">
                                        <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
                                        <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button asChild variant="ghost" size="sm" className="border border-border/60 bg-white/5">
                            <a href="https://github.com/" target="_blank" rel="noreferrer">
                                <Github className="size-4" /> GitHub
                            </a>
                        </Button>
                        <Button asChild variant="ghost" size="sm" className="border border-border/60 bg-white/5">
                            <a href="#about">
                                <ArrowRight className="size-4" /> About me
                            </a>
                        </Button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="relative"
                >
                    <div className="absolute inset-0 -z-10 rounded-4xl bg-[linear-gradient(135deg,rgba(126,231,255,0.2),rgba(129,140,248,0.18))] blur-2xl" />
                    <Card className="overflow-hidden border-white/10 bg-white/5 p-4">
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                            <img
                                src="/img/profile.png"
                                alt="Muhamad Jaelani"
                                className="aspect-4/5 w-full object-cover"
                                loading="eager"
                            />
                        </div>
                        <CardContent className="grid gap-3 p-0 pt-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-muted-foreground">Focus</p>
                                <p className="mt-2 text-lg font-medium text-foreground">UI systems and motion-led interfaces</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-sm text-muted-foreground">Approach</p>
                                <p className="mt-2 text-lg font-medium text-foreground">Responsive, maintainable, and product-ready</p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}