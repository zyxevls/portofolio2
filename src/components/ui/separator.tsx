import * as React from "react";

import { cn } from "../../lib/utils";

export type SeparatorProps = React.HTMLAttributes<HTMLDivElement>;

function Separator({ className, ...props }: SeparatorProps) {
  return <div role="separator" aria-orientation="horizontal" className={cn("h-px w-full bg-border/80", className)} {...props} />;
}

export { Separator };