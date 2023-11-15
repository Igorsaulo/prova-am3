import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {Box, ThemeProvider} from "@mui/material";
import {LightTheme, DarkTheme} from "../themes";
import { ToggleThemeButton } from "../components";

interface IThemeContext {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext: React.Context<IThemeContext> = createContext<IThemeContext>({} as IThemeContext);

interface IThemeProviderProps {
    children: React.ReactNode;
}

export const appUseThemeContext = (): IThemeContext => {
   return useContext<IThemeContext>(ThemeContext);
}
export const AppThemeProvider: React.FC<IThemeProviderProps> = ({children}: IThemeProviderProps) => {
    const [theme, setTheme]
        = useState<"light" | "dark">("light");

    const toggleTheme = useCallback(() => {
            setTheme(theme === "light" ? "dark" : "light");
        }
        , [theme]);

    const themeUse = useMemo(() => {
            return theme === "light" ? LightTheme : DarkTheme;
        }
        , [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={themeUse}>
                <Box
                    height={'100vh'}
                    width={'100vw'}
                    bgcolor={themeUse.palette.background.default}
                >
                    <ToggleThemeButton />
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}