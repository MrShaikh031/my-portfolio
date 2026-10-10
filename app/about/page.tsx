"use client";

import Reveal from "@/components/Reveal";

const journey = [
  {
    year: "01",
    title: "Programming",
    description:
      "Started building a foundation in programming and problem solving while developing an interest in technology.",
  },
  {
    year: "02",
    title: "Web Development",
    description:
      "Started creating responsive websites and exploring frontend, backend and deployment technologies.",
  },
  {
    year: "03",
    title: "Data Science",
    description:
      "Focused on Python, data analysis, visualization, statistics and machine learning fundamentals.",
  },
  {
    year: "04",
    title: "Cybersecurity",
    description:
      "Currently exploring Linux, networking, cybersecurity fundamentals and ethical hacking.",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Data Science",
    description:
      "Strengthening skills in Python, data analysis, visualization and machine learning.",
    direction: "left" as const,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Building modern responsive websites and improving backend and deployment skills.",
    direction: "up" as const,
  },
  {
    number: "03",
    title: "Cybersecurity",
    description:
      "Building foundational knowledge in Linux, networking, web security and ethical hacking.",
    direction: "right" as const,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Header */}
      <section className="border-b border-[var(--border)] px-6 pb-20 pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="up">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
              About Me
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Building skills today for the{" "}
              <span className="text-[var(--accent)]">
                technology of tomorrow.
              </span>
            </h1>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I&apos;m a technology-focused learner and developer interested
              in Data Science, Web Development and creative digital
              experiences, while continuously exploring cybersecurity and
              emerging technologies.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <Reveal direction="left">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                Who I Am
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Curious by nature.
                <br />
                <span className="text-[var(--muted)]">
                  Focused on building.
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="space-y-6 text-sm leading-8 text-[var(--muted)] sm:text-base">
              <p>
                I enjoy learning how technology works and turning what I
                learn into practical projects. My interests span data,
                development, creativity and emerging technologies.
              </p>

              <p>
                My current focus is developing stronger Data Science and
                Web Development skills while building a solid foundation
                in cybersecurity.
              </p>

              <p>
                I believe the best way to learn technology is by building,
                experimenting, solving problems and continuously improving.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-6 py-24 transition-colors duration-300 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="up">
            <div className="mb-14">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                My Journey
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Learning through{" "}
                <span className="text-[var(--accent)]">experience.</span>
              </h2>
            </div>
          </Reveal>

          <div>
            {journey.map((item, index) => (
              <Reveal
                key={item.title}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 0.08}
              >
                <div className="group grid gap-6 border-t border-[var(--border)] py-8 md:grid-cols-[100px_1fr] md:gap-10">
                  <span className="font-mono text-sm text-[var(--accent)]">
                    {item.year}
                  </span>

                  <div className="grid gap-4 md:grid-cols-2">
                    <h3 className="text-xl font-semibold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal direction="up">
            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
                Current Focus
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                What I&apos;m working towards.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <Reveal
                key={area.number}
                direction={area.direction}
                delay={index * 0.12}
                className="h-full"
              >
                <div className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)]/50 hover:shadow-[0_15px_40px_var(--shadow-color)]">
                  <p className="font-mono text-sm text-[var(--accent)]">
                    {area.number}
                  </p>

                  <h3 className="mt-6 text-xl font-semibold transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {area.title}
                  </h3>

                  {area.title === "Cybersecurity" && (
                    <div className="mt-3 inline-flex rounded-full border border-[var(--accent)]/40 bg-[var(--accent-dark)] px-3 py-1 text-[10px] uppercase tracking-wide text-[var(--accent)]">
                      Currently Learning
                    </div>
                  )}

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career Direction */}
      <section className="px-6 pb-24 lg:px-8">
        <Reveal direction="up">
          <div className="mx-auto max-w-7xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-colors duration-300 sm:p-12 lg:p-16">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent)]">
              Long-Term Direction
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Building expertise at the intersection of{" "}
              <span className="text-[var(--accent)]">
                Data, AI &amp; Cybersecurity.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[var(--muted)] sm:text-base">
              My goal is to keep developing across these areas and eventually
              work on technology where data, artificial intelligence and
              security come together.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Resume */}
      <section className="border-t border-[var(--border)] px-6 py-20 text-center lg:px-8">
        <Reveal direction="up">
          <p className="text-sm text-[var(--muted)]">
            Want to explore my experience in more detail?
          </p>

          <a
            href="/resume.pdf"
            download="Shaikh_Tohid_Resume.pdf"
            className="mt-6 inline-flex rounded-xl bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--selection-text)] transition hover:-translate-y-1 hover:shadow-[0_10px_35px_var(--shadow-color)]"
          >
            Download Resume
          </a>
        </Reveal>
      </section>
    </main>
  );
}