import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Palette } from "lucide-react";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const focusAreas = [
  { icon: Code2, label: "Frontend development" },
  { icon: Cpu, label: "System thinking" },
  { icon: Palette, label: "Interface polish" },
  { icon: Globe, label: "Web integration" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="mb-10 max-w-2xl">
        <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">About</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">A practical frontend profile with a sharp visual edge.</h2>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          I like building interfaces that feel deliberate: clean hierarchy, measured motion, and enough personality to stand out without becoming noisy.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Card className="overflow-hidden border-white/10 bg-white/5">
            <div className="aspect-square overflow-hidden">
              <img src="/img/profile.png" alt="Muhamad Jaelani profile" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Card>
        </motion.div>

        <div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">What I focus on</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                {focusAreas.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-background/30 px-4 py-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}