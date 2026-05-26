import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Clock3, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;
const CALENDLY_URL =
  "https://calendly.com/angadsingh69420/30min?hide_gdpr_banner=1&background_color=f7f5ef&text_color=121212&primary_color=2e3b2f";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export function CTA() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [calendarReady, setCalendarReady] = useState(false);
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showCalendly || !calendlyRef.current) return;

    setCalendarReady(false);
    calendlyRef.current.innerHTML = "";

    const initCalendly = () => {
      if (!calendlyRef.current || !window.Calendly) return;
      calendlyRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: calendlyRef.current,
      });
      window.setTimeout(() => setCalendarReady(true), 900);
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );

    if (window.Calendly) {
      initCalendly();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", initCalendly, { once: true });
      return () => existingScript.removeEventListener("load", initCalendly);
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.addEventListener("load", initCalendly, { once: true });
    document.body.appendChild(script);

    return () => script.removeEventListener("load", initCalendly);
  }, [showCalendly]);

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="relative overflow-hidden bg-primary py-24 text-primary-foreground"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,var(--olive-deep),transparent_60%)] opacity-60 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--gold)_55%,transparent),transparent_60%)] opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-xs uppercase tracking-[0.35em] text-primary-foreground/60"
        >
          Book the call
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mx-auto mt-6 max-w-4xl font-display text-balance text-5xl leading-[1] tracking-normal md:text-7xl"
        >
          Let&apos;s find the
          <span className="italic text-[var(--gold)]"> highest leverage move.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          className="mx-auto mt-6 max-w-xl text-primary-foreground/70"
        >
          One short conversation. Pick a date, choose a time, add your email, and Calendly sends the
          invite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          whileHover={{ y: -4 }}
          className="mx-auto mt-10 grid max-w-5xl overflow-hidden rounded-[2rem] border border-primary-foreground/15 bg-[var(--cream)] text-left text-foreground shadow-[0_40px_100px_-70px_var(--ink)] md:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="relative overflow-hidden p-8 md:p-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[var(--gold)] to-primary" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-foreground/55">
                <Sparkles className="h-3.5 w-3.5 text-primary" strokeWidth={1.6} />
                Simple booking
              </div>
              <h3 className="mt-6 max-w-xl font-display text-4xl leading-[1.02] md:text-6xl">
                Pick a time with Aurben.
              </h3>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-foreground/65">
                The booking flow should be simple: choose a date, choose a time, then enter your
                name and email so the meeting invite can reach you.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["01", "Select a date"],
                  ["02", "Choose a time"],
                  ["03", "Add email and confirm"],
                ].map(([n, label]) => (
                  <div
                    key={n}
                    className="rounded-2xl border border-foreground/10 bg-background/55 p-4"
                  >
                    <div className="font-display text-2xl text-primary">{n}</div>
                    <div className="mt-3 text-xs leading-relaxed text-foreground/60">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-foreground/10 bg-background/50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-foreground/45">
                    Confirmation
                  </span>
                  <span className="h-px flex-1 bg-foreground/10" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/65">
                  After the final Calendly step, the invitee email receives the calendar invite and
                  the host account receives the booking details.
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-[#e6d79a] p-8 md:p-10">
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent" />
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-foreground/55">Meeting</p>
                <p className="mt-4 font-display text-5xl leading-none">30 min</p>
              </div>
              <div className="grid h-16 w-16 place-items-center rounded-full border border-foreground/15 bg-background/60">
                <CalendarDays className="h-7 w-7 text-primary" strokeWidth={1.4} />
              </div>
            </div>

            <div>
              <div className="mb-6 space-y-3 rounded-2xl border border-foreground/10 bg-background/35 p-4 text-sm text-foreground/70">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 text-primary" strokeWidth={1.6} />
                  Strategy call with Aurben
                </div>
                <div className="flex items-center gap-3">
                  <ArrowUpRight className="h-4 w-4 text-primary" strokeWidth={1.6} />
                  Date, time, name, email
                </div>
              </div>

              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  setCalendarReady(false);
                  setShowCalendly(true);
                }}
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-5 text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[var(--olive-deep)] hover:shadow-[0_18px_45px_-30px_var(--ink)]"
              >
                <span className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[420%]" />
                <span className="relative">
                  {showCalendly ? "Calendar is open" : "Open available times"}
                </span>
                <ArrowUpRight
                  className="relative h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.8}
                />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-primary-foreground/50">
          <span className="h-px w-12 bg-primary-foreground/30" />
          Calendly handles the email confirmation after a time is selected
          <span className="h-px w-12 bg-primary-foreground/30" />
        </div>
      </div>

      {showCalendly && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Aurben booking calendar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-[var(--ink)]/55 p-4 backdrop-blur-md"
          onClick={() => setShowCalendly(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="relative flex h-[min(86vh,780px)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-white/20 bg-[var(--cream)] shadow-[0_40px_120px_-70px_var(--ink)] md:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-foreground/10 px-5 py-4 text-foreground md:px-6">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                  Aurben calendar
                </p>
                <p className="mt-1 font-display text-2xl">Pick a time with Aurben</p>
              </div>
              <button
                type="button"
                aria-label="Close calendar"
                onClick={() => setShowCalendly(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-foreground/10 bg-background/70 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <X className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </div>
            <div className="relative min-h-0 flex-1 bg-[var(--cream)]">
              {!calendarReady && (
                <div className="absolute inset-0 z-10 grid place-items-center bg-[var(--cream)]">
                  <div className="text-center text-foreground">
                    <div className="mx-auto mb-4 flex justify-center gap-2">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.35] }}
                          transition={{
                            duration: 0.8,
                            delay: dot * 0.12,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="h-2.5 w-2.5 rounded-full bg-primary"
                        />
                      ))}
                    </div>
                    <p className="font-display text-2xl">Loading available times</p>
                    <p className="mt-2 text-sm text-foreground/55">
                      Keeping the booking on the Aurben page.
                    </p>
                  </div>
                </div>
              )}
              <div ref={calendlyRef} className="h-full min-h-[680px] w-full" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
