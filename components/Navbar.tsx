"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const light = savedTheme === "light";

    document.documentElement.classList.toggle("light", light);
    setIsLight(light);
    setMounted(true);
  }, []);

useLayoutEffect(() => {
  setMenuOpen(false);

  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  });
}, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isLight ? "dark" : "light";

    document.documentElement.classList.toggle("light", nextTheme === "light");
    localStorage.setItem("theme", nextTheme);
    setIsLight(nextTheme === "light");
  };

  const linkClasses = (href: string) => {
    const active = pathname === href;

    return `relative py-2 text-sm transition-colors duration-300 ${
      active
        ? "text-[var(--foreground)]"
        : "text-[var(--muted)] hover:text-[var(--accent)]"
    }`;
  };

  const themeButtonClasses =
    "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg text-[var(--muted)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]";

  const resumeButtonClasses =
    "rounded-lg border border-[var(--accent)]/60 px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[var(--selection-text)]";

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--navbar-bg)] text-[var(--foreground)] shadow-[0_4px_30px_var(--shadow-color)] backdrop-blur-2xl transition-colors duration-300">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <motion.div
            whileHover={
              shouldReduceMotion ? undefined : { rotate: -5, scale: 1.05 }
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent)]/40 bg-[var(--accent-dark)] text-lg font-bold text-[var(--accent)] transition-colors duration-300 group-hover:border-[var(--accent)]/70"
          >
            ST
          </motion.div>

          <span className="hidden text-sm font-semibold tracking-wide sm:block">
            Shaikh Tohid
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={linkClasses(item.href)}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                    transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
            aria-label={
              mounted
                ? `Switch to ${isLight ? "dark" : "light"} mode`
                : "Toggle color theme"
            }
            className={themeButtonClasses}
          >
            {mounted ? (isLight ? "☀" : "☾") : "◐"}
          </motion.button>

          <a
            href="/resume.pdf"
            download="Shaikh_Tohid_Resume.pdf"
            className={resumeButtonClasses}
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              mounted
                ? `Switch to ${isLight ? "dark" : "light"} mode`
                : "Toggle color theme"
            }
            className={themeButtonClasses}
          >
            {mounted ? (isLight ? "☀" : "☾") : "◐"}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-xl text-[var(--foreground)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--navbar-bg)] backdrop-blur-2xl md:hidden"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6"
            >
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.name}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.2,
                      delay: shouldReduceMotion ? 0 : index * 0.04,
                    }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                        isActive
                          ? "bg-[var(--accent-dark)] text-[var(--accent)]"
                          : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <a
                href="/resume.pdf"
                download="Shaikh_Tohid_Resume.pdf"
                className={`mt-3 block rounded-xl px-5 py-3 text-center text-sm font-medium ${resumeButtonClasses}`}
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
