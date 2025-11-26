import { createContext } from "react";

export interface ThemeContextType {
  darkTheme: boolean;
  setDarkTheme: (darkTheme: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => null,
});

export default ThemeContext;