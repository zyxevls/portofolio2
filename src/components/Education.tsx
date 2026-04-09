import { motion } from "framer-motion";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { educationEntries } from "../data/portfolio";

export default function Education()
{
    return (
        <section id="education" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
            <div className="mb-10 max-w-2xl">
                <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">Education</Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A foundation in networking, systems, and web fundamentals.</h2>
            </div>

            <div className="grid gap-6">
                {educationEntries.map((item, index) => (
                    <motion.article
                        key={item.school}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                    >
                        <Card className="overflow-hidden border-white/10 bg-white/5">
                            <div className="grid gap-0 lg:grid-cols-[18rem_1fr]">
                                <div className="flex items-center justify-center border-b border-white/10 bg-background/30 p-10 lg:border-b-0 lg:border-r">
                                    <div className="flex size-36 items-center justify-center rounded-4xl border border-white/10 bg-white/5 p-6">
                                        <img src={item.logo} alt={item.school} className="h-full w-full object-contain" loading="lazy" />
                                    </div>
                                </div>
                                <CardContent className="p-6 sm:p-8">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-2xl text-foreground">{item.school}</CardTitle>
                                    </CardHeader>
                                    <div className="mt-4 space-y-3 text-muted-foreground">
                                        <p className="text-sm uppercase tracking-[0.3em] text-primary">{item.year}</p>
                                        <p className="text-lg font-medium text-foreground">{item.program}</p>
                                        <p className="max-w-2xl text-base leading-8">{item.description}</p>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}