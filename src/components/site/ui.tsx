import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="label-mono mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-signal" aria-hidden />
        {label}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {children && <div className="mt-5 text-lg text-muted-foreground">{children}</div>}
    </Reveal>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="rounded-full border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">{children}</span>;
}

export function Pipeline({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-2" aria-label="Pipeline">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-foreground">
            <span className="mr-2 text-primary">{String(i + 1).padStart(2, "0")}</span>
            {s}
          </span>
          {i < steps.length - 1 && (
            <svg width="28" height="8" aria-hidden className="text-teal">
              <line x1="0" y1="4" x2="28" y2="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="animate-flow" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

export function BarChart({ title, metric, max, bars }: { title: string; metric: string; max: number; bars: { label: string; value: number; highlight?: boolean }[] }) {
  return (
    <figure className="panel p-6">
      <figcaption className="mb-5 flex items-baseline justify-between">
        <span className="font-display text-lg">{title}</span>
        <span className="label-mono">{metric}</span>
      </figcaption>
      <ul className="space-y-3">
        {bars.map((b) => (
          <li key={b.label} className="grid grid-cols-[7.5rem_1fr_3.5rem] items-center gap-3 text-sm">
            <span className="truncate font-mono text-xs text-muted-foreground">{b.label}</span>
            <span className="h-2.5 overflow-hidden rounded-full bg-surface-2">
              <motion.span
                className={`block h-full rounded-full ${b.highlight ? "bg-signal" : "bg-primary/50"}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${(b.value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </span>
            <span className={`text-right font-mono text-xs ${b.highlight ? "text-teal" : "text-foreground"}`}>
              {max === 1 ? b.value.toFixed(2) : b.value.toFixed(1)}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
