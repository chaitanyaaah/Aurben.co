import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[var(--olive-deep)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6 transition-transform duration-300 group-hover:scale-105"
        fill="none"
      >
        <path
          d="M8.5 23.5 14.7 8.8c.47-1.08 2.06-1.08 2.53 0l6.27 14.7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M11.7 18.7h8.6" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  );
}
