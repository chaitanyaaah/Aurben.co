const loops = [
  "Ideas become systems",
  "Signals become strategy",
  "Content becomes pipeline",
  "Manual work becomes automation",
  "Traffic becomes revenue",
  "Experiments become playbooks",
];

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-foreground/10 bg-background py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.45),transparent)]" />
      <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-3 px-6 md:flex-row md:items-end md:justify-between lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">The loop underneath</p>
        <p className="max-w-md text-sm text-foreground/60">
          The same engine keeps moving, but the pieces change shape as they compound.
        </p>
      </div>
      <div className="relative mx-auto max-w-[1500px] rotate-[-0.6deg] overflow-hidden rounded-[2rem] border border-foreground/10 bg-[var(--cream)]/75 py-6 shadow-[0_30px_90px_-75px_var(--ink)] backdrop-blur [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee-reverse gap-10 px-8">
          {[...loops, ...loops].map((l, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap rounded-full border border-foreground/10 bg-background px-7 py-3 font-display text-xl tracking-normal text-foreground/65 shadow-[0_18px_50px_-50px_var(--ink)]"
            >
              {l}
              <span className="h-1.5 w-8 rounded-full bg-[var(--gold)]" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
