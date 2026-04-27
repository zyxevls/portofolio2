import * as React from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { LanguageProvider } from "@/providers/language-provider";

interface AppProvidersProps
{
    children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps)
{
    return (
        <LanguageProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                {children}
            </ThemeProvider>
        </LanguageProvider>
    );
}
