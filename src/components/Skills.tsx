import { motion } from "framer-motion";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="mb-10 max-w-2xl">
        <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">Skills</Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Technical depth, creative tooling, and practical delivery.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <Card className="h-full border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{group.name}</CardTitle>
                <p className="text-sm leading-6 text-muted-foreground">{group.description}</p>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline" className="border-white/10 bg-background/40 text-foreground">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}