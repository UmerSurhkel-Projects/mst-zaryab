import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const defaultThemeContext: ThemeContextType = {
  theme: 'light', // default theme
  toggleTheme: () => {}, // default empty function
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export default ThemeContext;
export type { ThemeContextType };
