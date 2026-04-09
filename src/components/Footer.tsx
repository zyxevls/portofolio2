import { motion } from "framer-motion";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { contactHighlights, socialLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-6 pb-12 pt-10 sm:px-8 lg:px-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">Contact</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Open to frontend work, collaboration, and focused product teams.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              If you want a portfolio, landing page, or product interface that feels modern and maintainable, I am open to talking.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <Button key={link.label} asChild variant="outline" size="sm" className="border-white/10 bg-background/40">
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                    <link.icon className="size-4" /> {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-background/30 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="size-4" />
                  </div>
                  <p className="font-medium text-foreground">{item.title}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Built with React, TypeScript, Tailwind CSS, Framer Motion, and ShadCN-style primitives.</p>
          <p>© {new Date().getFullYear()} Muhamad Jaelani</p>
        </div>
      </div>
    </footer>
  );
}