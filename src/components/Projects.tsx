import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { projects } from "../data/portfolio";

export default function Projects()
{
    return (
        <section id="projects" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
            <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                    <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">Projects</Badge>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Selected work framed with clearer hierarchy and stronger presentation.</h2>
                </div>
                <p className="max-w-xl text-base leading-8 text-muted-foreground">
                    A small set of representative concepts showing layout systems, product thinking, and the kind of interfaces I want to build more of.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                        whileHover={{ y: -6 }}
                    >
                        <Card className="flex h-full flex-col overflow-hidden border-white/10 bg-white/5">
                            <div className="relative overflow-hidden">
                                <img src={project.image} alt={project.title} className="aspect-4/3 w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,8,22,0.86))]" />
                                <div className="absolute left-4 top-4 flex gap-2">
                                    <Badge className="border-white/10 bg-background/70 text-foreground">{project.category}</Badge>
                                    <Badge variant="secondary">{project.year}</Badge>
                                </div>
                            </div>

                            <CardHeader className="space-y-3">
                                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                                <p className="text-sm leading-6 text-muted-foreground">{project.description}</p>
                            </CardHeader>

                            <CardContent className="flex flex-wrap gap-2 pt-0">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="outline" className="border-white/10 bg-white/5 text-muted-foreground">
                                        {tag}
                                    </Badge>
                                ))}
                            </CardContent>

                            <CardFooter className="mt-auto pt-0">
                                <Button asChild variant="ghost" size="sm" className="w-full justify-between border border-border/60 bg-white/5">
                                    <a href={project.href}>
                                        View project <ArrowUpRight className="size-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}