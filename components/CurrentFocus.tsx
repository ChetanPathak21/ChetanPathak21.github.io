import React from "react";
import { profileData } from "@/data/profile";

export function CurrentFocus() {
  const { currentFocus } = profileData;

  return (
    <section
      className="py-16 md:py-24 border-b border-[var(--border)] transition-colors"
      aria-labelledby="focus-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-baseline">
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block mb-2">
              Philosophy
            </span>
            <h2
              id="focus-heading"
              className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)]"
            >
              {currentFocus.heading}
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
              {currentFocus.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
