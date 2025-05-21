"use client";

import { FaMoon, FaSun } from "react-icons/fa";

type Props = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

export function DarkModeToggle({ theme, setTheme }: Props) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-500 w-5 h-5" />
      ) : (
        <FaMoon className="text-gray-700 w-5 h-5" />
      )}
    </button>
  );
} 