import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { themes, Theme } from './themeConstants';

interface ThemeContextType {
  currentTheme: Theme;
  themes: Record<string, Theme>;
  setTheme: (themeKey: string) => void;
  isThemeMenuOpen: boolean;
  setIsThemeMenuOpen: (isOpen: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentThemeKey, setCurrentThemeKey] = useState('cyber');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const setTheme = (themeKey: string) => {
    setCurrentThemeKey(themeKey);
    localStorage.setItem('theme', themeKey);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentThemeKey(savedTheme);
    }
  }, []);

  const value = {
    currentTheme: themes[currentThemeKey],
    themes,
    setTheme,
    isThemeMenuOpen,
    setIsThemeMenuOpen,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};