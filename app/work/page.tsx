"use client";

import { useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";

import Reveal from "@/components/Reveal";

const projects = [
  {
    number: "01",
    category: "DATA SCIENCE",
    title: "Student Performance Analytics",
    description:
      "A data analysis project focused on student performance, attendance and subject-wise trends using Python and data visualization.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    status: "Data Project",
  },
  {
    number: "02",
    category: "MACHINE LEARNING",
    title: "ML Classification Project",
    description:
      "A machine learning project exploring classification, model training, prediction and performance evaluation using real datasets.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    status: "ML Project",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Professional Portfolio",
    description:
      "A modern multi-page portfolio built to present technical skills, projects, experience and creative work.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Development",
  },
  {
    number: "04",
    category: "WEB DEVELOPMENT",
    title: "Creative Web Project",
    description:
      "An interactive web experience focused on responsive design, visual presentation and practical functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Web Project",
  },
  {
    number: "05",
    category: "PYTHON",
    title: "QR Student ID System",
    description:
      "A Python-based concept for generating and using QR codes as part of a student identification system.",
    technologies: ["Python", "QR Code", "Data"],
    status: "Python Project",
  },
  {
    number: "06",
    category: "EXPERIMENTAL",
    title: "More Projects Coming",
    description:
      "Continuously experimenting with new ideas across data science, machine learning, web development and technology.",
    technologies: ["Learning", "Building", "Experimenting"],
    status: "Ongoing",
  },
];

const categories = [
  "All",
  "Data Science",
  "Machine Learning",
  "Web Development",
  "Python",
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory.toUpperCase(),
        );

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : index % 2 === 0 ? -35 : 35,
      y: shouldReduceMotion ? 0 : 12,
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 pb-24 pt-16 text-[var(--foreground)] transition-colors duration-300 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="max-w-4xl">
          <Reveal direction="up">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
              My Work
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Things I&apos;ve{" "}
              <span className="text-[var(--accent)]">
                built &amp; explored.
              </span>
            </h1>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              A collection of projects, experiments and practical work across
              Data Science, Machine Learning, Web Development and Python.
            </p>
          </Reveal>
        </section>

        {/* Filters */}
        <Reveal direction="up" delay={0.1}>
          <section className="mt-12">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <motion.button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    whileHover={
                      shouldReduceMotion ? undefined : { y: -2 }
                    }
                    whileTap={
                      shouldReduceMotion ? undefined : { scale: 0.96 }
                    }
                    transition={{ duration: 0.2 }}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                      isActive
                        ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--selection-text)]"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                    }`}
                  >
                    {category}
                  </motion.button>
                );
              })}
            </div>
          </section>
        </Reveal>

        {/* Project Count */}
        <Reveal direction="up" delay={0.1}>
          <div className="mt-8 text-xs text-[var(--muted)]">
            Showing{" "}
            <span className="font-medium text-[var(--accent)]">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </div>
        </Reveal>

        {/* Projects */}
        <LayoutGroup>
          <motion.section
            aria-live="polite"
            layout
            className="mt-6 grid gap-6 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.number}
                  layout
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          scale: 0.97,
                          transition: { duration: 0.18 },
                        }
                  }
                  className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--accent)]/40"
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -5 }
                  }
                  transition={{ duration: 0.25 }}
                >
                  {/* Preview */}
                  <div className="relative h-56 overflow-hidden border-b border-[var(--border)] bg-[var(--background)]">
                    <motion.div
                      className="absolute inset-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5"
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { scale: 1.035 }
                      }
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="h-2 w-2 rounded-full bg-[var(--accent)]/60" />
                          <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                          <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                        </div>

                        <span className="font-mono text-[10px] text-[var(--muted)]">
                          {project.number}
                        </span>
                      </div>

                      <div
                        className="mt-7 flex h-28 items-end gap-2"
                        aria-hidden="true"
                      >
                        {[30, 50, 40, 70, 90, 60].map((height, index) => (
                          <motion.span
                            key={index}
                            className="flex-1 rounded-t bg-[var(--accent)]"
                            style={{
                              height: `${height}%`,
                              opacity: 0.2 + index * 0.1,
                            }}
                            initial={
                              shouldReduceMotion
                                ? false
                                : { scaleY: 0, transformOrigin: "bottom" }
                            }
                            animate={{ scaleY: 1 }}
                            transition={{
                              duration: shouldReduceMotion ? 0 : 0.5,
                              delay: shouldReduceMotion ? 0 : index * 0.06,
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    <span className="absolute left-7 top-7 text-[10px] font-medium tracking-[0.18em] text-[var(--accent)]">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h2 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-[var(--accent)]">
                        {project.title}
                      </h2>

                      <span className="shrink-0 rounded-full border border-[var(--border)] px-3 py-1 text-[9px] text-[var(--muted)]">
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <motion.span
                          key={technology}
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { y: -2 }
                          }
                          className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 text-[10px] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>

                    <a
                      href={
                        project.number === "01"
                          ? "/work/student-performance"
                          : "#"
                      }
                      aria-label={`View case study for ${project.title}`}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      View Case Study
                      <motion.span
                        aria-hidden="true"
                        className="inline-block"
                        whileHover={
                          shouldReduceMotion ? undefined : { x: 4 }
                        }
                      >
                        →
                      </motion.span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.section>
        </LayoutGroup>

        {/* Bottom CTA */}
        <section className="mt-20">
          <Reveal direction="up">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center transition-colors duration-300 sm:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                Always Building
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl">
                More projects are{" "}
                <span className="text-[var(--accent)]">on the way.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[var(--muted)]">
                I&apos;m continuously learning and turning new concepts into
                practical projects.
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}