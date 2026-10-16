import React from "react";
import { profileData } from "@/data/profile";

export function About() {
  const { about } = profileData;

  return (
    <section
      id="about"
      className="py-20 md:py-32 border-b border-[var(--border)] transition-colors scroll-mt-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Section Indicator & Title */}
          <div className="md:col-span-4">
            <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block mb-2">
              Background
            </span>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]"
            >
              {about.heading}
            </h2>
          </div>

          {/* About Text Content */}
          <div className="md:col-span-8 space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
