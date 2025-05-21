"use client";

import { useEffect, useState, ReactNode } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always start with 'light' to match server render
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Don't render toggle until after hydration to avoid mismatch
  if (!mounted) return <>{children}</>;

  return (
    <>
      <DarkModeToggle theme={theme} setTheme={setTheme} />
      {children}
    </>
  );
} 