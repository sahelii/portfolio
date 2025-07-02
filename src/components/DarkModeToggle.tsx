"use client";

import { FaMoon, FaSun } from "react-icons/fa";

type Props = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

export function DarkModeToggle({ theme, setTheme }: Props) {
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-[9999] p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md border-2 border-primary/30 hover:border-primary/50 hover:from-primary/30 hover:to-secondary/30 transition-all duration-300 shadow-xl hover:shadow-2xl"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <FaMoon className="text-gray-700 dark:text-gray-300 w-6 h-6" />
      )}
    </button>
  );
} 