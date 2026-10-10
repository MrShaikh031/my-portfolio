"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const technologies = [
  { name: "Python", category: "Data" },
  { name: "Pandas", category: "Data" },
  { name: "NumPy", category: "Data" },
  { name: "SQL", category: "Data" },
  { name: "Matplotlib", category: "Data" },
  { name: "Scikit-learn", category: "Data" },

  { name: "HTML", category: "Web" },
  { name: "CSS", category: "Web" },
  { name: "JavaScript", category: "Web" },
  { name: "React", category: "Web" },
  { name: "Next.js", category: "Web" },
  { name: "Tailwind CSS", category: "Web" },

  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },

  { name: "Linux", category: "Learning" },
  { name: "Networking", category: "Learning" },
  { name: "Web Security", category: "Learning" },
  { name: "Ethical Hacking", category: "Learning" },
];

const filters = ["All", "Data", "Web", "Tools", "Learning"];

const categoryLabels: Record<string, string> = {
  Data: "Data Science",
  Web: "Web Development",
  Tools: "Developer Tools",
  Learning: "Currently Learning",
};

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredTechnologies =
    activeFilter === "All"
      ? technologies
      : technologies.filter(
          (technology) => technology.category === activeFilter
        );

  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-24 text-[var(--foreground)] transition-colors duration-300 lg:px-8">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[var(--accent)]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Tech Stack
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Technologies I{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[#37c98a] bg-clip-text text-transparent">
                work with.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            A growing toolkit across data, development and creative work,
            alongside technologies I&apos;m currently exploring.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter technologies by category"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                  isActive
                    ? "border-[var(--accent)]/50 bg-[var(--accent-dark)] text-[var(--accent)]"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent)]/40 hover:text-[var(--foreground)]"
                }`}
              >
                {filter === "Learning"
                  ? "Currently Learning"
                  : filter === "All"
                    ? "All Technologies"
                    : categoryLabels[filter]}
              </button>
            );
          })}
        </motion.div>

        {/* Technology Grid */}
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors duration-300 sm:p-6">
          <motion.div
            layout
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          >
            {filteredTechnologies.map((technology, index) => (
              <motion.div
                layout
                key={technology.name}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 18 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.3,
                  delay: shouldReduceMotion ? 0 : index * 0.025,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.025,
                      }
                }
                className="group relative flex min-h-[120px] flex-col items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 text-center transition-colors duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_10px_30px_var(--shadow-color)]"
              >
                {/* Subtle Hover Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[var(--accent)]/0 blur-2xl transition-colors duration-300 group-hover:bg-[var(--accent)]/10"
                />

                {/* Technology Initials */}
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : { rotate: 5 }}
                  className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-dark)] font-mono text-xs font-bold text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)]/60"
                >
                  {technology.name
                    .replace(/[^a-zA-Z0-9]/g, "")
                    .slice(0, 2)
                    .toUpperCase()}
                </motion.div>

                <p className="relative mt-3 text-xs font-medium text-[var(--foreground)]">
                  {technology.name}
                </p>

                <span className="relative mt-1 text-[9px] uppercase tracking-wider text-[var(--muted)]">
                  {technology.category === "Learning"
                    ? "Learning"
                    : technology.category}
                </span>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Note */}
          <div className="mt-6 border-t border-[var(--border)] pt-5">
            <p className="text-xs leading-6 text-[var(--muted)]">
              This toolkit reflects technologies I work with and explore.
              Cybersecurity-related topics are currently part of my learning
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
