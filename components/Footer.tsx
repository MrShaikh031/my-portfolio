"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[var(--accent)]/[0.06] blur-3xl"
      />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={
          shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
        }
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8"
      >
        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="Go to homepage"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: -5,
                        scale: 1.05,
                      }
                }
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent)]/40 bg-[var(--accent-dark)] font-mono text-sm font-bold text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)]/70"
              >
                ST
              </motion.div>

              <span className="text-lg font-semibold text-[var(--foreground)]">
                Shaikh Tohid
                <span className="text-[var(--accent)]">.</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--muted)]">
              Data Science · Web Development · Creative Technology
            </p>

            <p className="mt-2 text-xs text-[var(--muted)]">
              Always learning. Always building.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-4"
          >
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 10,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.07,
                }}
              >
                <Link
                  href={link.href}
                  className="group relative py-2 text-sm text-[var(--muted)] transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  {link.name}

                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center">
          <p>© 2026 Shaikh Tohid. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Crafted with
            <span className="text-[var(--accent)]">♥</span>
            using Next.js &amp; TypeScript
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
