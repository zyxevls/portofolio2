import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Soon from "@/components/sections/Soon";
import { AppProviders } from "@/providers/app-providers";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProviders>
      <Soon />
    </AppProviders>
  </StrictMode>,
);

