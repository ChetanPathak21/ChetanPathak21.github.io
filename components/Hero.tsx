import React from "react";
import { profileData } from "@/data/profile";

export function Hero() {
  const { hero } = profileData;

  return (
    <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-36 border-b border-[var(--border)] transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        {/* Subhead / Tag */}
        <div className="mb-6 sm:mb-8">
          <span className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono py-1 px-2.5 border border-[var(--border)] rounded-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)] inline-block animate-pulse" aria-hidden="true" />
            <span>{hero.tagline}</span>
          </span>
        </div>

        {/* Large Name Display */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] mb-4 sm:mb-6 uppercase">
          {hero.nameDisplay}
        </h1>

        {/* Main Headline */}
        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[var(--text-primary)] leading-snug sm:leading-tight mb-6 sm:mb-8 max-w-3xl">
          {hero.headline}
        </p>

        {/* Introduction */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-2xl mb-8 sm:mb-12">
          {hero.intro}
        </p>

        {/* Action Buttons with Mobile-Friendly Touch Targets */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-sm bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-hover-bg)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] w-full sm:w-auto text-center"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-sm border border-[var(--border)] bg-transparent text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] w-full sm:w-auto text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
