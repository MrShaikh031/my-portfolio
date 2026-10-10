"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Data Science",
    description:
      "Data analysis, visualization and machine learning fundamentals to discover meaningful insights from data.",
    tags: ["Python", "Pandas", "NumPy"],
    icon: "▥",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern, responsive and functional websites with a focus on clean design, development and deployment.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "</>",
  },
  {
    number: "03",
    title: "Creative Technology",
    description:
      "Video editing, visual design and digital content creation combined with technology.",
    tags: ["Video Editing", "Design"],
    icon: "▶",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Currently building foundational knowledge in Linux, networking, cybersecurity and ethical hacking.",
    tags: ["Learning", "TryHackMe"],
    icon: "⌁",
    learning: true,
  },
];

export default function WhatIDo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-24 text-[var(--foreground)] transition-colors duration-300 lg:px-8">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[var(--accent)]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: [1, 0.5, 1],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
              />

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                What I Do
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              A combination of{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[#37c98a] bg-clip-text text-transparent">
                data, development
              </span>{" "}
              and creativity.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[var(--muted)]">
            Building practical skills across technology while continuously
            learning, experimenting and creating.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -8,
                      transition: { duration: 0.25 },
                    }
              }
              className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_15px_45px_var(--shadow-color)]"
            >
              {/* Hover Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--accent)]/0 blur-3xl transition-colors duration-500 group-hover:bg-[var(--accent)]/[0.09]"
              />

              {/* Number and Status */}
              <div className="relative flex items-start justify-between gap-2">
                <span className="font-mono text-xs tracking-[0.2em] text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {service.number}
                </span>

                {service.learning && (
                  <span className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent-dark)] px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[var(--accent)]">
                    Currently Learning
                  </span>
                )}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.1,
                        rotate: service.icon === "</>" ? 0 : 5,
                      }
                }
                transition={{ duration: 0.25 }}
                className="relative mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-dark)] font-mono text-lg font-bold text-[var(--accent)] transition-all duration-300 group-hover:border-[var(--accent)]/60"
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <div className="relative mt-7">
                <h3 className="text-xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="relative mt-auto flex flex-wrap gap-2 pt-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[10px] text-[var(--muted)] transition-colors duration-300 group-hover:border-[var(--accent)]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
