const stats = [
  {
    number: "05+",
    label: "Projects",
  },
  {
    number: "04",
    label: "Domains",
  },
  {
    number: "03",
    label: "Core Areas",
  },
  {
    number: "∞",
    label: "Always Learning",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-[#252a31] bg-[#0d0f12]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center justify-center px-6 py-8 text-center ${
              index !== 0 ? "border-l border-[#252a31]" : ""
            }`}
          >
            <span className="text-3xl font-bold text-[#5ce6a8] sm:text-4xl">
              {stat.number}
            </span>

            <span className="mt-2 text-xs uppercase tracking-[0.2em] text-[#969da8] sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}