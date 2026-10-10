"use client";

import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "DATA SCIENCE",
    title: "Student Performance Analytics",
    description:
      "A data-driven analysis of student performance, attendance and subject trends using Python and data visualization.",
    technologies: ["Python", "Pandas", "Matplotlib"],
    status: "In Development",
    visual: "analytics",
  },
  {
    number: "02",
    category: "WEB DEVELOPMENT",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio designed to showcase technical skills, projects and professional work.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "In Development",
    visual: "code",
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "ML Classification Project",
    description:
      "Exploring classification algorithms, model training and predictive performance evaluation.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    status: "Learning",
    visual: "ml",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "code") {
    return (
      <div className="relative h-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 font-mono text-xs leading-7">
        <div className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]/15" />
          <span className="ml-2 text-[#5c6470]">portfolio.tsx</span>
        </div>

        <p className="text-[var(--muted)]">
          <span className="text-[#c792ea]">export default</span>{" "}
          <span className="text-[var(--accent)]">function</span> Portfolio() {"{"}
        </p>
        <p className="pl-4 text-[var(--muted)]">
          <span className="text-[var(--accent)]">return</span> (
        </p>
        <p className="pl-8 text-[var(--foreground)]">&lt;CreativeExperience /&gt;</p>
        <p className="pl-4 text-[var(--muted)]">);</p>
        <p className="text-[var(--muted)]">{"}"}</p>

        <div className="absolute bottom-5 right-5 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent-dark)] px-3 py-2 text-[var(--accent)]">
          &lt;/&gt; Development
        </div>
      </div>
    );
  }

  if (type === "ml") {
    return (
      <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-[var(--muted)]">
            MODEL EXPLORATION
          </span>
          <span className="rounded-full border border-[var(--accent)]/30 px-2 py-1 text-[9px] text-[var(--accent)]">
            LEARNING
          </span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col gap-3">
            <span className="h-3 w-3 rounded-full bg-[var(--accent)]/50" />
            <span className="h-3 w-3 rounded-full bg-[var(--accent)]/80" />
            <span className="h-3 w-3 rounded-full bg-[var(--accent)]/40" />
          </div>

          <div className="flex flex-col gap-4">
            <span className="h-px w-14 bg-[var(--accent)]/40" />
            <span className="h-px w-14 bg-[var(--accent)]/60" />
            <span className="h-px w-14 bg-[var(--accent)]/30" />
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[var(--accent)]/40 bg-[var(--accent-dark)] font-mono text-xl text-[var(--accent)]">
            ML
          </div>
        </div>

        <p className="text-xs text-[var(--muted)]">
          Classification · Training · Evaluation
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[var(--muted)]">
          STUDENT DATA
        </span>
        <span className="font-mono text-[10px] text-[var(--accent)]">
          PYTHON / PANDAS
        </span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
          <p className="text-[10px] text-[var(--muted)]">Attendance</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#252a31]">
            <div className="h-full w-3/4 rounded-full bg-[var(--accent)]/70" />
          </div>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
          <p className="text-[10px] text-[var(--muted)]">Subject Analysis</p>
          <div className="mt-3 flex h-6 items-end gap-1">
            <span className="h-3 flex-1 rounded-t bg-[var(--accent)]/30" />
            <span className="h-5 flex-1 rounded-t bg-[var(--accent)]/60" />
            <span className="h-4 flex-1 rounded-t bg-[var(--accent)]/40" />
            <span className="h-6 flex-1 rounded-t bg-[var(--accent)]/80" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-[var(--muted)]">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
        Data visualization concept
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-24 text-[var(--foreground)] transition-colors duration-300 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[var(--accent)]/[0.03] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />

              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                Featured Projects
              </span>
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Things I&apos;ve{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] to-[#37c98a] bg-clip-text text-transparent">
                built & explored.
              </span>
            </h2>
          </div>

          <motion.a
            href="/work"
            whileHover={shouldReduceMotion ? undefined : { x: 4 }}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            View All Projects
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 35 }
              }
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: shouldReduceMotion ? 0 : index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -7, transition: { duration: 0.25 } }
              }
              className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--accent)]/50 hover:shadow-[0_20px_50px_var(--shadow-color)]"
            >
              {/* Preview */}
              <div className="relative h-56 overflow-hidden border-b border-[var(--border)] bg-[var(--surface)] p-4">
                <motion.div
                  className="h-full"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectVisual type={project.visual} />
                </motion.div>

                <span className="absolute left-7 top-7 font-mono text-xs text-[var(--accent)]">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[10px] font-medium tracking-[0.18em] text-[var(--accent)]">
                    {project.category}
                  </span>

                  <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[9px] text-[var(--muted)]">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2.5 py-1.5 text-[10px] text-[var(--muted)] transition-colors group-hover:border-[var(--accent)]/30"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <a
                  href="/work"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                >
                  Explore Projects
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Bottom Accent */}
              <div className="mx-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-6 text-[var(--muted)]">
          Project previews are illustrative design concepts, not screenshots
          or verified results from completed applications. Project status
          reflects current development progress.
        </p>
      </div>
    </section>
  );
}