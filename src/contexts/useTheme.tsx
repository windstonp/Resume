"use client";

import { Theme } from "@radix-ui/themes";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";

type ThemeType = "light" | "dark";

export const AccentColor = "crimson";
export const GrayColor = "slate";

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeType;
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <Theme
        appearance={theme}
        accentColor={AccentColor}
        grayColor={GrayColor}
        scaling="110%"
        panelBackground="solid"
      >
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro do ThemeProvider");
  }
  return context;
};
