import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--bg)] border-t border-[var(--border)] transition-colors py-10">
      <div className="max-w-5xl mx-auto px-6 text-center text-xs font-mono text-[var(--text-secondary)]">
        <p>© {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  );
}
