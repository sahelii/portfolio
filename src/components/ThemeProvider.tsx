"use client";

import { useEffect, useState, ReactNode } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or system preference
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Apply theme to document
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  // Apply initial theme immediately to prevent flash
  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    
    if (initialTheme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, []);

  // Don't render toggle until after hydration to avoid mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <DarkModeToggle theme={theme} setTheme={setTheme} />
      {children}
    </>
  );
} 