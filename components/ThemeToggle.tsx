"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? `Switch to ${theme === "dark" ? "light" : "dark"} mode`
          : "Toggle color theme"
      }
      title={
        mounted
          ? `Switch to ${theme === "dark" ? "light" : "dark"} mode`
          : "Toggle color theme"
      }
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-md border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--hover-bg)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] transition-colors"
    >
      {/* If not yet mounted, render default dark mode icon (Sun to switch to light) */}
      {!mounted ? (
        <Sun className="w-4 h-4" aria-hidden="true" />
      ) : theme === "dark" ? (
        <Sun className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4" aria-hidden="true" />
      )}
      <span className="sr-only">
        {mounted
          ? `Current theme: ${theme}. Click to switch to ${
              theme === "dark" ? "light" : "dark"
            } mode.`
          : "Toggle theme"}
      </span>
    </button>
  );
}
