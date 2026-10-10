"use client";

import Reveal from "@/components/Reveal";

const skillGroups = [
  {
    number: "01",
    title: "Data Science",
    description:
      "Building a strong foundation in data analysis, visualization and machine learning.",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    direction: "left" as const,
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Creating modern, responsive websites with clean UI and practical functionality.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    direction: "right" as const,
  },
  {
    number: "03",
    title: "Tools & Development",
    description:
      "Tools and technologies I use for development, version control and workflow.",
    skills: ["Git", "GitHub", "VS Code", "SQL", "Linux"],
    direction: "left" as const,
  },
  {
    number: "04",
    title: "Cybersecurity",
    description:
      "Currently developing foundational knowledge in cybersecurity and ethical hacking.",
    skills: ["Linux", "Networking", "Web Security", "TryHackMe"],
    learning: true,
    direction: "right" as const,
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 pb-24 pt-16 text-[var(--foreground)] transition-colors duration-300 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="max-w-4xl">
          <Reveal direction="up">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
              My Skills
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <h1 className="mt-5 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Skills I&apos;m{" "}
              <span className="text-[var(--accent)]">
                building and using.
              </span>
            </h1>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              A practical toolkit developed through projects, experimentation
              and continuous learning across data, development and technology.
            </p>
          </Reveal>
        </section>

        {/* Skill Groups */}
        <section className="mt-20 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              direction={group.direction}
              delay={index * 0.1}
              className="h-full"
            >
              <article className="group h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:bg-[var(--card)] sm:p-8">
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm text-[var(--accent)]">
                    {group.number}
                  </span>

                  {group.learning && (
                    <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent-dark)]/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[var(--accent)]">
                      Currently Learning
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="mt-8 text-2xl font-semibold transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {group.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {group.description}
                </p>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <Reveal
                      key={skill}
                      direction="up"
                      delay={skillIndex * 0.045}
                    >
                      <span className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/50 hover:text-[var(--accent)]">
                        {skill}
                      </span>
                    </Reveal>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </section>

        {/* Philosophy */}
        <section className="mt-20">
          <Reveal direction="up">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-colors duration-300 sm:p-12 lg:p-16">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                My Approach
              </p>

              <h2 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                I don&apos;t want to just{" "}
                <span className="text-[var(--accent)]">
                  know the tools.
                </span>
                <br />
                I want to know how to use them.
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-[var(--muted)] sm:text-base">
                My focus is on understanding concepts, applying them to real
                projects and improving through hands-on problem solving rather
                than simply collecting technologies.
              </p>
            </div>
          </Reveal>
        </section>
      </div>
    </main>
  );
}