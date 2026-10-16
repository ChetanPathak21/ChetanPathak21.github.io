import React from "react";
import { profileData } from "@/data/profile";

export function Skills() {
  const { skills } = profileData;

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-32 border-b border-[var(--border)] transition-colors scroll-mt-16"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block mb-2">
            Technical Stack
          </span>
          <h2
            id="skills-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)] mb-3 sm:mb-4"
          >
            {skills.heading}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] font-normal leading-relaxed">
            {skills.description}
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {skills.categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-sm border border-[var(--border)] bg-transparent hover:bg-[var(--hover-bg)] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Badge & Title */}
                <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-medium tracking-tight text-[var(--text-primary)]">
                    {cat.title}
                  </h3>
                  {cat.badge && (
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 border border-[var(--border)] text-[var(--text-secondary)] rounded-sm whitespace-nowrap">
                      {cat.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                {cat.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="inline-block text-xs font-mono px-2.5 py-1 border border-[var(--border)] text-[var(--text-primary)] rounded-sm bg-transparent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* C & DSA Focus Card: Authentic educational context */}
        <div className="p-6 sm:p-7 rounded-sm border border-[var(--border)] bg-transparent">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--border)]">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)]">
              Current Practice • Data Structures in C
            </span>
            <span className="text-[11px] font-mono text-[var(--text-secondary)]">
              Core Syntax & Memory Models
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-[var(--text-secondary)]">
            <div className="space-y-1.5">
              <p className="text-[var(--text-primary)] font-medium">Fundamental Focus:</p>
              <p>• Dynamic memory management (`malloc`, `free`) and pointer mechanics.</p>
              <p>• Linear structure traversal, insertion, and deletion algorithms.</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-[var(--text-primary)] font-medium">Algorithmic Goals:</p>
              <p>• Analyzing time complexity (\(O(1)\), \(O(n)\), \(O(\log n)\)) and space trade-offs.</p>
              <p>• Writing modular, well-commented C code with proper memory hygiene.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
