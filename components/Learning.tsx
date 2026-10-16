import React from "react";
import { profileData } from "@/data/profile";

export function Learning() {
  const { learning } = profileData;

  return (
    <section
      id="learning"
      className="py-20 md:py-32 border-b border-[var(--border)] transition-colors scroll-mt-16"
      aria-labelledby="learning-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block mb-2">
            Interests & Focus
          </span>
          <h2
            id="learning-heading"
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]"
          >
            {learning.heading}
          </h2>
        </div>

        {/* 2-column Grid with Thin Monochrome Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[var(--border)]">
          {learning.categories.map((item, index) => {
            // Apply borders to create a balanced editorial grid
            const isRightCol = index % 2 === 1;
            return (
              <div
                key={item.id}
                className={`py-8 md:py-10 border-b border-[var(--border)] transition-colors ${
                  isRightCol ? "md:pl-10 md:border-l md:border-[var(--border)]" : "md:pr-10"
                }`}
              >
                {/* Large Understated Number */}
                <div className="text-sm font-mono text-[var(--text-secondary)] mb-4 tracking-wider">
                  {item.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium tracking-tight text-[var(--text-primary)] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
