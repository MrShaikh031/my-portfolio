"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-24 text-[var(--foreground)] transition-colors duration-300 lg:px-8">
      {/* Main Container */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
        whileInView={
          shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
        }
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-500 hover:border-[var(--accent)]/50"
      >
        {/* Background Glow */}
        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 1, 0.6],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[var(--accent)]/[0.06] blur-3xl"
        />

        {/* Decorative Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 75%)",
          }}
        />

        <div className="relative px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20">
          {/* Label */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : { opacity: [1, 0.5, 1] }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]"
            />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
              Let&apos;s Connect
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl"
          >
            Have a project or{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] via-[#7af0bd] to-[#37c98a] bg-clip-text text-transparent">
              idea?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]"
          >
            Whether it&apos;s a project, collaboration, internship or simply
            an interesting idea, I&apos;d love to hear from you.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9"
          >
            <motion.a
              href="/contact"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.03,
                    }
              }
              whileTap={
                shouldReduceMotion ? undefined : { scale: 0.97 }
              }
              transition={{ duration: 0.2 }}
              className="group/button inline-flex items-center gap-3 rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--selection-text)] shadow-[0_0_0_rgba(92,230,168,0)] transition-shadow duration-300 hover:shadow-[0_10px_35px_var(--shadow-color)]"
            >
              Get In Touch

              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { x: [0, 4, 0] }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Bottom Caption */}
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={
              shouldReduceMotion ? undefined : { opacity: 1 }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-xs tracking-wide text-[var(--muted)]"
          >
            Have an idea? Let&apos;s explore what we can build.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
