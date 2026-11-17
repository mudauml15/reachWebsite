const stats = [
  { value: "01", label: "Person at a time" },
  { value: "06", label: "Months of support" },
  { value: "∞", label: "Room to grow" },
];

export default function StatsBar() {
  return (
    <section className="bg-navy">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-8 lg:grid-cols-2 lg:px-8">
        <div className="flex">
          {stats.map((s) => (
            <div key={s.label} className="border-r border-white/15 pr-8 last:border-r-0 [&:not(:first-child)]:pl-8 first:pl-0">
              <p className="text-3xl font-semibold text-gold">{s.value}</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-sky-200/60">{s.label}</p>
            </div>
          ))}
        </div>
        <blockquote className="max-w-md text-sm leading-relaxed text-sky-100 lg:justify-self-end">
          “We don’t just teach people how to get a job — we teach them how to keep it, flourish, and build a career.”
        </blockquote>
      </div>
    </section>
  );
}
