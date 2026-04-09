import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

export function FeatureCard({ title, description, icon: Icon, badge }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
      <Card className="relative h-full overflow-hidden border-white/10 bg-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,231,255,0.12),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(129,140,248,0.12),transparent_35%)]" />
        <CardHeader className="relative gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <Icon className="size-5" />
            </div>
            {badge ? <Badge variant="secondary">{badge}</Badge> : null}
          </div>
          <CardTitle className="text-xl text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <CardDescription className="text-sm leading-6 text-muted-foreground">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}