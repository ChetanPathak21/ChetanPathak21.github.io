"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about", number: "01" },
    { label: "Skills", href: "#skills", number: "02" },
    { label: "Learning", href: "#learning", number: "03" },
    { label: "Contact", href: "#contact", number: "04" },
  ];

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)] transition-colors">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between md:justify-center">
          {/* Mobile Left Brand/Anchor */}
          <div className="flex items-center md:hidden">
            <a
              href="#"
              className="text-xs uppercase tracking-widest font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
              aria-label="Scroll to top of page"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Centered Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] rounded-sm"
              >
                {link.label}
              </a>
            ))}

            <div className="pl-3 border-l border-[var(--border)] flex items-center">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Right Controls: ThemeToggle + Hamburger Button */}
          <div className="flex items-center space-x-2.5 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
              className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--hover-bg)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] transition-colors"
            >
              <Menu className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop for Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Right-Side Slide Drawer with Solid Background */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-50 w-[280px] sm:w-[320px] bg-[var(--bg)] border-l border-[var(--border)] shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[var(--border)] mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--hover-bg)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] transition-colors"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Links with Numbers */}
          <nav className="flex flex-col space-y-2" aria-label="Mobile Drawer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-baseline justify-between py-3 border-b border-[var(--border)] text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
              >
                <span className="text-xl font-medium tracking-tight">
                  {link.label}
                </span>
                <span className="text-xs font-mono text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {link.number}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer with Appearance Toggle & Info */}
        <div className="pt-6 border-t border-[var(--border)] space-y-4">
          <div className="flex items-center justify-between text-xs text-[var(--text-secondary)]">
            <span className="font-mono">Switch Theme</span>
            <ThemeToggle />
          </div>

          <div className="pt-2 text-[11px] font-mono text-[var(--text-secondary)] flex items-center justify-between">
            <span>B.Tech CSE (AI)</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </>
  );
}
