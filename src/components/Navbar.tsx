import { motion } from "framer-motion";

import { navigationLinks } from "../data/portfolio";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <a href="#home" className="inline-flex items-center gap-3 self-start text-lg font-semibold tracking-[0.2em] text-foreground">
          <span className="flex size-9 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">MJ</span>
          ZYXEVLS
        </a>

        <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {navigationLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ y: -2 }}
              className={cn(
                "rounded-full px-4 py-2 transition-colors hover:bg-white/5 hover:text-foreground",
                item.label === "Home" && "text-foreground",
              )}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <Button asChild size="sm" className="self-start lg:self-auto">
          <a href="#contact">Let us talk</a>
        </Button>
      </div>
    </motion.header>
  );
}