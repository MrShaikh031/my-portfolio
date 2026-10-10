"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/Reveal";

const technologies = ["Python", "Pandas", "NumPy", "Matplotlib"];

const stats = [
  { label: "Attendance", value: "90%" },
  { label: "Average Score", value: "82" },
  { label: "Subjects", value: "04" },
];

const chartBars = [
  { height: "55%", opacity: 30 },
  { height: "72%", opacity: 45 },
  { height: "65%", opacity: 35 },
  { height: "88%", opacity: 70 },
  { height: "76%", opacity: 50 },
];

const processSteps = [
  {
    number: "01",
    title: "Data Preparation",
    description:
      "Understanding the dataset and preparing the data for analysis.",
  },
  {
    number: "02",
    title: "Analysis",
    description:
      "Exploring relationships between attendance, subjects and student performance.",
  },
  {
    number: "03",
    title: "Visualization",
    description:
      "Turning the analysis into clear visual insights and reports.",
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function StudentPerformancePage() {
  const shouldReduceMotion = useReducedMotion();

  const revealTransition = {
    duration: shouldReduceMotion ? 0 : 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const hoverLift = shouldReduceMotion ? undefined : { y: -5 };

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 pb-24 pt-16 text-[var(--foreground)] transition-colors duration-300 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Back to Projects */}
        <motion.a
          href="/work"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={revealTransition}
          whileHover={shouldReduceMotion ? undefined : { x: -4 }}
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-300 hover:text-[var(--accent)]"
        >
          ← Back to Projects
        </motion.a>

        {/* Header */}
        <section className="mt-12">

          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
              Data Science
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Student Performance{" "}
              <span className="text-[var(--accent)]">
                Analytics
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              A data-driven project focused on exploring student performance,
              attendance and subject-wise trends through Python and data
              visualization.
            </p>
          </Reveal>

          {/* Technologies */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion ? undefined : { y: -4, scale: 1.03 }
                }
                transition={{ duration: 0.2 }}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

        </section>

        {/* Project Preview */}
        <Reveal delay={0.1}>
          <section className="mt-16">

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={revealTransition}
              className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300 sm:p-10"
            >

              {/* Decorative Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
                style={{
                  background:
                    "color-mix(in srgb, var(--accent) 8%, transparent)",
                }}
              />

              <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 transition-colors duration-300 sm:p-8">

                {/* Dashboard Header */}
                <div className="flex items-center justify-between gap-4">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                      Project Dashboard
                    </p>

                    <p className="mt-2 text-sm text-[var(--muted)]">
                      Student performance overview
                    </p>
                  </div>

                  <span className="font-mono text-xs text-[var(--muted)]">
                    DATA_01
                  </span>

                </div>

                {/* Analytics Cards */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-10 grid gap-4 sm:grid-cols-3"
                >
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={cardVariants}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: -5,
                              borderColor: "var(--accent)",
                            }
                      }
                      transition={{ duration: 0.25 }}
                      className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-300"
                    >

                      <p className="text-xs text-[var(--muted)]">
                        {stat.label}
                      </p>

                      <motion.p
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, y: 8 }
                        }
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.5,
                          delay: shouldReduceMotion ? 0 : 0.15,
                        }}
                        className="mt-3 text-3xl font-bold text-[var(--accent)]"
                      >
                        {stat.value}
                      </motion.p>

                    </motion.div>
                  ))}
                </motion.div>

                {/* Subject Performance Chart */}
                <motion.div
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, y: 20 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={revealTransition}
                  className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-300"
                >

                  <p className="text-xs text-[var(--muted)]">
                    Subject Performance
                  </p>

                  <div className="mt-7 flex h-40 items-end gap-3">

                    {chartBars.map((bar, index) => (
                      <motion.div
                        key={index}
                        initial={
                          shouldReduceMotion
                            ? false
                            : { height: "0%", opacity: 0 }
                        }
                        whileInView={{
                          height: bar.height,
                          opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.8,
                          delay: shouldReduceMotion ? 0 : index * 0.12,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={
                          shouldReduceMotion ? undefined : { scaleY: 1.05 }
                        }
                        style={{
                          backgroundColor: `color-mix(in srgb, var(--accent) ${bar.opacity}%, transparent)`,
                          transformOrigin: "bottom",
                        }}
                        className="flex-1 rounded-t"
                      />
                    ))}

                  </div>

                </motion.div>

              </div>
            </motion.div>

          </section>
        </Reveal>

        {/* Overview */}
        <section className="mt-20 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">

          <Reveal direction="left">
            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                Overview
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Understanding the data.
              </h2>

            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="space-y-6 text-sm leading-8 text-[var(--muted)] sm:text-base">

              <p>
                The goal of this project is to explore student-related data and
                identify useful patterns in academic performance and attendance.
              </p>

              <p>
                The dataset is cleaned, explored and analyzed using Python-based
                data science tools before creating visual representations of the
                findings.
              </p>

              <p>
                This project helped strengthen practical skills in data
                manipulation, exploratory analysis and visualization.
              </p>

            </div>
          </Reveal>

        </section>

        {/* Process */}
        <section className="mt-24 border-t border-[var(--border)] pt-16 transition-colors duration-300">

          <Reveal>

            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Process
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              From raw data to{" "}
              <span className="text-[var(--accent)]">
                insights.
              </span>
            </h2>

          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -7,
                        borderColor: "var(--accent)",
                      }
                }
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors duration-300"
              >

                <span className="font-mono text-sm text-[var(--accent)]">
                  {step.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {step.description}
                </p>

                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.6,
                    delay: shouldReduceMotion ? 0 : index * 0.15,
                  }}
                  className="mt-6 h-px"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--accent) 50%, transparent)",
                  }}
                />

              </motion.div>
            ))}
          </motion.div>

        </section>

        {/* What I Learned */}
        <Reveal>

          <motion.section
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    borderColor: "var(--accent)",
                  }
            }
            transition={{ duration: 0.3 }}
            className="mt-20 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-colors duration-300 sm:p-12"
          >

            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              What I Learned
            </p>

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              Turning practice into{" "}
              <span className="text-[var(--accent)]">
                practical skills.
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-[var(--muted)] sm:text-base">
              This project provided hands-on practice with data preparation,
              filtering, analysis and visualization while improving my ability
              to communicate findings through data.
            </p>

          </motion.section>

        </Reveal>

        {/* Back to All Projects */}
        <Reveal delay={0.1}>

          <div className="mt-12">

            <motion.a
              href="/work"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                      borderColor: "var(--accent)",
                    }
              }
              whileTap={
                shouldReduceMotion ? undefined : { scale: 0.97 }
              }
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
            >
              ← Back to All Projects
            </motion.a>

          </div>

        </Reveal>

      </div>
    </main>
  );
}