import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { portfolioContent } from "@/data/portfolio-content";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function Contact() {
  const content = portfolioContent;

  const handleCardPointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const handleCardPointerEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="contact" className="space-y-6 pb-8">
      <h2 className="font-display text-2xl md:text-3xl">Contact</h2>
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card
          className="lux-card"
          onMouseEnter={handleCardPointerEnter}
          onMouseMove={handleCardPointerMove}
        >
          <CardHeader>
            <Badge variant="outline" className="w-fit">Hire Me</Badge>
            <CardTitle className="text-2xl">Let’s Build Something Useful</CardTitle>
            <CardDescription>
              Open for freelance and long-term product collaboration. I can help you ship polished interfaces with strong architecture.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-border/70 bg-background/65 p-4">
              <p className="text-sm font-semibold">What you get</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><BriefcaseBusiness className="size-4 text-primary" /> Production-ready React frontend</li>
                <li className="flex items-center gap-2"><BriefcaseBusiness className="size-4 text-primary" /> Strong UX and responsive system</li>
                <li className="flex items-center gap-2"><BriefcaseBusiness className="size-4 text-primary" /> Maintainable, scalable codebase</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              {content.contactLinks.map((link) => {
                const Icon = iconMap[link.icon];

                return (
                  <motion.div key={link.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <Button variant="outline" className={cn("gap-2")} asChild>
                      <motion.a href={link.href} target="_blank" rel="noreferrer" whileHover={{ x: 2 }}>
                        <Icon className="size-4" />
                        {link.label}
                      </motion.a>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card
          className="lux-card"
          onMouseEnter={handleCardPointerEnter}
          onMouseMove={handleCardPointerMove}
        >
          <CardHeader>
            <CardTitle className="text-2xl">Project Inquiry Form</CardTitle>
            <CardDescription>Share your project goals and I will get back to you quickly.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
              <motion.input 
                className="h-11 rounded-xl border border-input bg-background/70 px-4 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background/90" 
                type="text" 
                placeholder="Your Name"
                whileFocus={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <motion.input 
                className="h-11 rounded-xl border border-input bg-background/70 px-4 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background/90" 
                type="email" 
                placeholder="Email Address"
                whileFocus={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <motion.textarea 
                className="min-h-32 rounded-xl border border-input bg-background/70 p-4 text-sm outline-none ring-0 transition focus:border-primary focus:bg-background/90" 
                placeholder="How can I help you?"
                whileFocus={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
              <Button type="submit" className="h-11 gap-2">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
