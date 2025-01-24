import React, { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode
}
// ReactNode관련 블로그: https://merrily-code.tistory.com/209#google_vignette

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return ( <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>)
}