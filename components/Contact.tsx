import React from "react";
import { ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function Contact() {
  const { contact } = profileData;

  const links = [
    {
      label: "Email",
      href: `mailto:${contact.email}`,
      available: Boolean(contact.email),
      isExternal: false,
    },
    {
      label: "GitHub",
      href: contact.github,
      available: Boolean(contact.github),
      isExternal: true,
    },
    {
      label: "LinkedIn",
      href: contact.linkedin,
      available: Boolean(contact.linkedin),
      isExternal: true,
    },
  ].filter((item) => item.available && item.href);

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-32 border-b border-[var(--border)] transition-colors scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono block mb-2">
            Connect
          </span>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)] mb-4 sm:mb-6"
          >
            {contact.heading}
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] font-normal leading-relaxed mb-8 sm:mb-10">
            {contact.description}
          </p>

          {/* Minimal Responsive Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center text-sm sm:text-base font-medium text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-primary)] rounded-sm border border-[var(--border)] sm:border-0 px-3.5 py-2 sm:px-0 sm:py-0 hover:bg-[var(--hover-bg)] sm:hover:bg-transparent"
              >
                <span>{link.label}</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 ml-1.5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
