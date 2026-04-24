import * as React from "react";
import { ThemeProvider } from "@/providers/theme-provider";

interface AppProvidersProps
{
    children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps)
{
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            {children}
        </ThemeProvider>
    );
}
