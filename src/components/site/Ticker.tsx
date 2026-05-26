const phrases = [
  "AI Automation",
  "Growth Engineering",
  "Content Systems",
  "Paid Acquisition",
  "Funnel Design",
  "Outbound Pipelines",
  "Brand Studios",
  "Agent Workflows",
];

export function Ticker() {
  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-primary-foreground/10 bg-primary py-8 text-primary-foreground"
    >
      <div className="flex w-max animate-marquee-reverse gap-12 px-6">
        {[...phrases, ...phrases, ...phrases].map((p, i) => (
          <span
            key={i}
            className="flex items-center gap-12 whitespace-nowrap font-display text-4xl italic tracking-normal text-primary-foreground/90 md:text-6xl"
          >
            {p}
            <span className="h-2 w-2 rotate-45 bg-[var(--gold)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
