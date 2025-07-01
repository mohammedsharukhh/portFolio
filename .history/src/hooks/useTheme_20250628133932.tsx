import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  gradient: string;
  gradientAlt: string;
  glow: string;
  background: string;
}

export const themes: Record<string, Theme> = {
    neon: {
    name: 'Neon Green',
    primary: 'text-green-400',
    secondary: 'text-emerald-300',
    accent: 'text-lime-300',
    gradient: 'bg-gradient-to-r from-green-400 to-emerald-600',
    gradientAlt: 'bg-gradient-to-r from-emerald-600 to-teal-600',
    glow: 'shadow-green-400/50',
    background: 'bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900',
  },
  cyber: {
    name: 'Cyber Blue',
    primary: 'text-cyan-400',
    secondary: 'text-blue-300',
    accent: 'text-cyan-300',
    gradient: 'bg-gradient-to-r from-cyan-400 to-blue-600',
    gradientAlt: 'bg-gradient-to-r from-blue-600 to-purple-600',
    glow: 'shadow-cyan-400/50',
    background: 'bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900',
  }, 
  electric: {
    name: 'Electric Purple',
    primary: 'text-purple-400',
    secondary: 'text-violet-300',
    accent: 'text-fuchsia-300',
    gradient: 'bg-gradient-to-r from-purple-400 to-pink-600',
    gradientAlt: 'bg-gradient-to-r from-pink-600 to-purple-600',
    glow: 'shadow-purple-400/50',
    background: 'bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900',
  },
  fire: {
    name: 'Fire Orange',
    primary: 'text-orange-400',
    secondary: 'text-red-300',
    accent: 'text-yellow-300',
    gradient: 'bg-gradient-to-r from-orange-400 to-red-600',
    gradientAlt: 'bg-gradient-to-r from-red-600 to-pink-600',
    glow: 'shadow-orange-400/50',
    background: 'bg-gradient-to-br from-gray-900 via-red-900 to-orange-900',
  },
  ice: {
    name: 'Ice Blue',
    primary: 'text-blue-300',
    secondary: 'text-sky-200',
    accent: 'text-cyan-200',
    gradient: 'bg-gradient-to-r from-blue-300 to-cyan-500',
    gradientAlt: 'bg-gradient-to-r from-cyan-500 to-teal-500',
    glow: 'shadow-blue-300/50',
    background: 'bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900',
  },
  sunset: {
    name: 'Sunset Pink',
    primary: 'text-pink-400',
    secondary: 'text-rose-300',
    accent: 'text-orange-300',
    gradient: 'bg-gradient-to-r from-pink-400 to-orange-500',
    gradientAlt: 'bg-gradient-to-r from-orange-500 to-yellow-500',
    glow: 'shadow-pink-400/50',
    background: 'bg-gradient-to-br from-gray-900 via-pink-900 to-orange-900',
  },
};

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