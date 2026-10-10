"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Reveal from "@/components/Reveal";

const contactDetails = [
  {
    label: "Email",
    value: "shaikhtohid890@gmail.com",
    href: "mailto:shaikhtohid890@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/Shaikh Tohid",
    href: "#",
  },
  {
    label: "GitHub",
    value: "github.com/MrShaikh031",
    href: "#",
  },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (loading) return;

    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setLoading(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text();

      if (!responseText) {
        throw new Error("The server returned an empty response.");
      }

      let result: { success?: boolean; message?: string };

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error("The server returned an invalid response.");
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Your message could not be sent.",
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm text-[var(--foreground)] outline-none transition-all duration-300 placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)]/70 focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <main className="relative z-0 min-h-screen bg-[var(--background)] px-6 pb-24 pt-40 text-[var(--foreground)] transition-colors duration-300 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="max-w-4xl">
          <Reveal direction="up">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
              Contact Me
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s build something{" "}
              <span className="text-[var(--accent)]">
                interesting.
              </span>
            </h1>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Have a project, collaboration idea, internship opportunity
              or simply want to connect? Send me a message.
            </p>
          </Reveal>
        </section>

        {/* Contact Section */}
        <section className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Details */}
          <Reveal direction="left" className="h-full">
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-300 sm:p-9">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                Get In Touch
              </p>

              <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">
                Let&apos;s start a conversation.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                I&apos;m open to discussing projects, collaborations,
                opportunities and interesting ideas related to technology.
              </p>

              <div className="mt-10 space-y-5">
                {contactDetails.map((item, index) => (
                  <Reveal
                    key={item.label}
                    direction="left"
                    delay={index * 0.1}
                  >
                    <motion.a
                      href={item.href}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { x: 5 }
                      }
                      transition={{ duration: 0.2 }}
                      className="group block rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-colors duration-300 hover:border-[var(--accent)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                        {item.label}
                      </p>

                      <p className="mt-2 break-words text-sm text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                        {item.value}
                      </p>
                    </motion.a>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal direction="right" delay={0.15} className="h-full">
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-colors duration-300 sm:p-9">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                  Send A Message
                </p>

                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  Tell me about your idea.
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <Reveal direction="up" delay={0.05}>
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-[var(--muted)]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Shaikh Tohid"
                      autoComplete="name"
                      maxLength={100}
                      required
                      disabled={loading}
                      className={inputClass}
                    />
                  </div>
                </Reveal>

                {/* Email */}
                <Reveal direction="up" delay={0.1}>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium text-[var(--muted)]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      required
                      disabled={loading}
                      className={inputClass}
                    />
                  </div>
                </Reveal>

                {/* Subject */}
                <Reveal direction="up" delay={0.15}>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-medium text-[var(--muted)]"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What would you like to discuss?"
                      maxLength={150}
                      required
                      disabled={loading}
                      className={inputClass}
                    />
                  </div>
                </Reveal>

                {/* Message */}
                <Reveal direction="up" delay={0.2}>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-medium text-[var(--muted)]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project or idea..."
                      maxLength={5000}
                      required
                      disabled={loading}
                      className={`${inputClass} resize-y`}
                    />
                  </div>
                </Reveal>

                {/* Submit Button */}
                <Reveal direction="up" delay={0.25}>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={
                      shouldReduceMotion || loading
                        ? undefined
                        : { y: -2 }
                    }
                    whileTap={
                      shouldReduceMotion || loading
                        ? undefined
                        : { scale: 0.98 }
                    }
                    transition={{ duration: 0.2 }}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--selection-text)] transition-shadow duration-300 hover:shadow-[0_10px_35px_var(--shadow-color)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending Message..." : "Send Message"}

                    {!loading && (
                      <motion.span
                        aria-hidden="true"
                        className="inline-block"
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : { x: 4 }
                        }
                      >
                        →
                      </motion.span>
                    )}
                  </motion.button>
                </Reveal>

                {/* Success and Error Messages */}
                <AnimatePresence mode="wait">
                  {submitted && (
                    <motion.div
                      key="success"
                      role="status"
                      aria-live="polite"
                      initial={
                        shouldReduceMotion
                          ? false
                          : { opacity: 0, y: 10 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.3,
                      }}
                      className="rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-dark)]/40 px-4 py-3 text-sm text-[var(--foreground)]"
                    >
                      Message sent successfully! Thank you for reaching out.
                    </motion.div>
                  )}

                  {errorMessage && (
                    <motion.div
                      key="error"
                      role="alert"
                      initial={
                        shouldReduceMotion
                          ? false
                          : { opacity: 0, y: 10 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.3,
                      }}
                      className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-400"
                    >
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </Reveal>
        </section>

        {/* Availability */}
        <section className="mt-16 border-t border-[var(--border)] pt-10">
          <Reveal direction="up">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-[var(--muted)]">
                Currently open to meaningful projects and opportunities.
              </p>

              <span className="inline-flex items-center gap-2 text-xs text-[var(--accent)]">
                <span
                  className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]"
                  aria-hidden="true"
                />
                Available
              </span>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}