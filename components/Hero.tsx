"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const revealTransition = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--background)] pt-28 transition-colors duration-300">

      {/* Background Glow */}
      <motion.div
        aria-hidden="true"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl"
      />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2 lg:px-8">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.13,
                delayChildren: shouldReduceMotion ? 0 : 0.15,
              },
            },
          }}
          className="relative z-10"
        >

          {/* Availability */}
          <motion.div
            variants={fadeUp}
            transition={revealTransition}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-dark)]/40 px-4 py-2 text-xs font-medium tracking-wide text-[var(--accent)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>

            OPEN TO INTERNSHIPS & OPPORTUNITIES
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            transition={revealTransition}
            className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent)] to-[var(--accent)] bg-clip-text text-transparent">
              Shaikh Tohid.
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={fadeUp}
            transition={revealTransition}
            className="mt-7 max-w-2xl text-xl font-medium leading-relaxed text-[var(--foreground)] sm:text-2xl"
          >
            Data Science{" "}
            <span className="text-[var(--accent)]">·</span>{" "}
            Web Development{" "}
            <span className="text-[var(--accent)]">·</span>{" "}
            Creative Technology
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            transition={revealTransition}
            className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg"
          >
            I’m developing practical skills in data analysis and modern web
            development, while exploring machine learning and cybersecurity
            through continuous learning and hands-on practice.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            transition={revealTransition}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="/work"
              whileHover={shouldReduceMotion ? undefined : {
                y: -4,
                scale: 1.02,
              }}
              whileTap={shouldReduceMotion ? undefined : {
                scale: 0.98,
              }}
              transition={{ duration: 0.2 }}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--selection-text)] transition-shadow duration-300 hover:shadow-[0_10px_35px_var(--shadow-color)]"
            >
              Explore My Work

              <motion.span
                animate={shouldReduceMotion ? undefined : { x: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              whileHover={shouldReduceMotion ? undefined : {
                y: -4,
              }}
              whileTap={shouldReduceMotion ? undefined : {
                scale: 0.98,
              }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)]/80 px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--accent)]/50 hover:bg-[var(--card)]"
            >
              ↓ Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            transition={revealTransition}
            className="mt-10 flex items-center gap-7 text-sm text-[var(--muted)]"
          >
            <a
              href="/contact"
              className="transition-colors hover:text-[var(--accent)]"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: shouldReduceMotion ? 0 : 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto flex h-[420px] w-full max-w-xl items-center justify-center sm:h-[500px]"
        >

          {/* Main Visual */}
          <motion.div
            animate={shouldReduceMotion ? undefined : {
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-72 w-72 items-center justify-center rounded-full border border-[var(--accent)]/20 bg-[var(--surface)] shadow-[0_0_100px_var(--shadow-color)] sm:h-80 sm:w-80"
          >
            {/* Inner Circle */}
            <div className="flex h-60 w-60 items-center justify-center rounded-full border border-[var(--accent)]/10 bg-[var(--card)] sm:h-64 sm:w-64">

              <div className="text-center">
                <motion.div
                  whileHover={shouldReduceMotion ? undefined : {
                    rotate: 5,
                    scale: 1.05,
                  }}
                  className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-[var(--accent)]/30 bg-[#163d2d]/30 text-2xl font-bold text-[var(--accent)]"
                >
                  ST
                </motion.div>

                <p className="text-sm font-medium text-[var(--foreground)]">
                  Data × Technology
                </p>

                <p className="mt-1 text-xs text-[var(--muted)]">
                  Build · Learn · Grow
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Analysis Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
            animate={shouldReduceMotion ? undefined : {
              opacity: 1,
              x: 0,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.5 },
              x: { duration: 0.7, delay: 0.5 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute left-0 top-8 hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 p-4 shadow-xl backdrop-blur-xl sm:block"
          >
            <p className="text-xs text-[var(--muted)]">Data Analysis</p>

            <div className="mt-3 flex items-end gap-1">
              <span className="h-5 w-2 rounded-sm bg-[var(--accent)]/40" />
              <span className="h-8 w-2 rounded-sm bg-[var(--accent)]/60" />
              <span className="h-6 w-2 rounded-sm bg-[var(--accent)]/50" />
              <span className="h-11 w-2 rounded-sm bg-[var(--accent)]" />
              <span className="h-9 w-2 rounded-sm bg-[var(--accent)]/70" />
            </div>
          </motion.div>

          {/* Machine Learning Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
            animate={shouldReduceMotion ? undefined : {
              opacity: 1,
              x: 0,
              y: [0, 6, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.7 },
              x: { duration: 0.7, delay: 0.7 },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute right-0 top-12 hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 p-4 shadow-xl backdrop-blur-xl sm:block"
          >
            <p className="text-xs text-[var(--muted)]">Machine Learning</p>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="h-px w-16 bg-[var(--accent)]/50" />
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            </div>
          </motion.div>

          {/* Python Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={shouldReduceMotion ? undefined : {
              opacity: 1,
              y: [0, -5, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.8 },
              y: {
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-16 left-4 hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
          >
            <p className="text-xs text-[var(--muted)]">Python</p>

            <p className="mt-1 text-sm font-semibold text-[var(--foreground)]">
              Pandas · NumPy
            </p>
          </motion.div>

          {/* Cybersecurity Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={shouldReduceMotion ? undefined : {
              opacity: 1,
              y: [0, 5, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 1 },
              y: {
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-8 right-0 hidden rounded-xl border border-[var(--accent)]/30 bg-[var(--surface)]/95 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
          >
            <p className="text-xs text-[var(--muted)]">Cybersecurity</p>

            <p className="mt-1 text-xs font-medium text-[var(--accent)]">
              Currently Learning
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}