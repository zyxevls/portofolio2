import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps)
{
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function useMounted(): boolean
{
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() =>
    {
        setMounted(true);
    }, []);

    return mounted;
}
