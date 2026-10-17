import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Search, Users } from "lucide-react";
import { DataUniverse } from "./DataUniverse";
import { BarChart, Chip, Pipeline, Reveal, SectionHead } from "./ui";
import { config, credibility, experiences, skillClusters, ui } from "@/content/site";
import { additional, categories, getProject, projects, type CatKey } from "@/content/projects";
import { useLang } from "@/content/i18n";

export function CvButton() {
  const { t } = useLang();
  if (!config.cvUrl)
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border px-5 py-3 text-sm text-muted-foreground" role="note">
        <Download className="size-4" /> {t(ui.cvMissing)}
      </span>
    );
  return (
    <a href={config.cvUrl} download className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline">
      <Download className="size-4" /> {t(ui.cv)}
    </a>
  );
}

export function Hero() {
  const { t } = useLang();
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" aria-hidden />
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="label-mono mb-6 text-teal">{t(ui.heroLabel)}</p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] md:text-6xl xl:text-7xl">
            {t(ui.heroTitle).split(",")[0]},<span className="text-signal">{t(ui.heroTitle).split(",").slice(1).join(",")}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t(ui.heroBody)}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {ui.specs.map((s, i) => (
              <li key={i} className="flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm">
                <span className={`size-1.5 rounded-full ${["bg-primary", "bg-violet", "bg-teal"][i]}`} aria-hidden />
                {t(s)}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
              {t(ui.explore)} <ArrowRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary">
              {t(ui.connect)}
            </a>
            <CvButton />
          </div>
        </Reveal>
        <div className="relative h-[360px] md:h-[520px]">
          <DataUniverse />
        </div>
      </div>
      <div className="relative border-y border-border bg-surface/50">
        <ul className="mx-auto grid max-w-7xl grid-cols-1 divide-border px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:divide-x">
          {credibility.map((c) => (
            <li key={c.org} className="py-5 lg:px-6 lg:first:pl-0">
              <p className="font-display text-sm font-medium">{c.org}</p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">{t(c.role)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ slug, big }: { slug: string; big?: boolean }) {
  const { t } = useLang();
  const p = getProject(slug)!;
  return (
    <article className={`panel group relative flex flex-col overflow-hidden p-6 transition-colors hover:border-primary/50 ${big ? "md:col-span-2 md:p-8" : ""}`}>
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="label-mono">{t(p.catLabel)}</span>
        {p.period && <span className="font-mono text-[11px] text-muted-foreground">{p.period}</span>}
      </div>
      <p className="text-sm text-teal">{t(p.org)}</p>
      <h3 className={`mt-2 text-balance font-semibold leading-snug ${big ? "text-2xl md:text-3xl" : "text-xl"}`}>{t(p.title)}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{t(p.problem)}</p>
      {big && (
        <div className="mt-6 hidden md:block">
          <Pipeline steps={p.pipeline} />
        </div>
      )}
      <p className="mt-5 text-sm">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{t(ui.myRole)} — </span>
        {t(p.contribution[0])}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.stack.slice(0, big ? 8 : 5).map((s) => (
          <Chip key={s}>{s}</Chip>
        ))}
      </div>
      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
        {p.metric ? <p className="font-display text-lg text-signal">{t(p.metric)}</p> : <span />}
        <Link to="/projects/$slug" params={{ slug: p.slug }} className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium after:absolute after:inset-0">
          {t(ui.caseStudy)} <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLang();
  const [cat, setCat] = useState<CatKey | "all">("all");
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (cat === "all" || p.cats.includes(cat)) &&
        (!s || [p.title.en, p.title.fr, p.org.en, p.short, ...p.stack].join(" ").toLowerCase().includes(s)),
    );
  }, [cat, q]);
  const extra = additional.filter((a) => (cat === "all" || a.cat === cat) && (!q || (a.title + a.stack).toLowerCase().includes(q.toLowerCase())));

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 md:px-8">
      <SectionHead label={t(ui.projectsLabel)} title={t(ui.projectsTitle)} />
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              aria-pressed={cat === c.key}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${cat === c.key ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
            >
              {t(c.label)}
            </button>
          ))}
        </div>
        <label className="relative block lg:w-72">
          <span className="sr-only">{t(ui.search)}</span>
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t(ui.search)}
            className="w-full rounded-full border border-input bg-surface py-2 pl-9 pr-4 text-sm placeholder:text-muted-foreground"
          />
        </label>
      </div>
      {list.length === 0 && extra.length === 0 && <p className="text-muted-foreground">{t(ui.noResults)}</p>}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <ProjectCard key={p.slug} slug={p.slug} big={p.size === "xl" || (p.size === "lg" && i < 3 && cat === "all")} />
        ))}
      </div>
      {extra.length > 0 && (
        <>
          <h3 className="label-mono mb-5 mt-16">{t(ui.more)}</h3>
          <ul className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {extra.map((a) => (
              <li key={a.title} className="bg-background p-5">
                <div className="flex items-center justify-between">
                  <p className="font-display font-medium">{a.title}</p>
                  {a.team && (
                    <span className="flex items-center gap-1 font-mono text-[10px] text-violet">
                      <Users className="size-3" /> {t(ui.team)}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t(a.desc)}</p>
                <p className="mt-3 font-mono text-[11px] text-muted-foreground">{a.stack}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

export function Experience() {
  const { t } = useLang();
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <SectionHead label={t(ui.expLabel)} title={t(ui.expTitle)} />
        <ol className="relative ml-2 border-l border-border">
          {experiences.map((e, i) => (
            <li key={e.org} className="relative pb-10 pl-8 last:pb-0">
              <span className={`absolute -left-[7px] top-2 size-3.5 rounded-full border-2 border-background ${open === i ? "bg-signal" : "bg-surface-2"}`} aria-hidden />
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="w-full text-left">
                <p className="font-mono text-xs text-teal">{t(e.dates)}</p>
                <h3 className="mt-1 text-2xl font-semibold">{e.org}</h3>
                <p className="text-muted-foreground">{t(e.role)}</p>
              </button>
              {open === i && (
                <Reveal className="mt-5 grid gap-6 md:grid-cols-[1.4fr_1fr]">
                  <p className="leading-relaxed">{t(e.mission)}</p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">{e.tech.map((x) => <Chip key={x}>{x}</Chip>)}</div>
                    <p className="text-sm text-muted-foreground">{e.skills.map((s) => t(s)).join(" · ")}</p>
                    <Link to="/projects/$slug" params={{ slug: e.project }} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                      {t(ui.viewProject)} <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </Reveal>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useLang();
  const [sel, setSel] = useState<{ name: string; projects: string[] } | null>(null);
  return (
    <section className="mx-auto max-w-7xl px-5 py-28 md:px-8" aria-labelledby="skills-h">
      <SectionHead label={t(ui.skillsLabel)} title={t(ui.skillsTitle)} />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-7">
          {skillClusters.map((c) => (
            <div key={c.name.en}>
              <h3 className="label-mono mb-3">{t(c.name)}</h3>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => setSel(s)}
                    aria-pressed={sel?.name === s.name}
                    className={`rounded-md border px-3 py-1.5 text-sm transition-colors ${sel?.name === s.name ? "border-teal bg-teal/10" : "border-border hover:border-muted-foreground"}`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="panel h-fit p-6 lg:sticky lg:top-24" aria-live="polite">
          {!sel ? (
            <p className="text-muted-foreground">{t(ui.skillsHint)}</p>
          ) : (
            <>
              <p className="font-display text-2xl">{sel.name}</p>
              <p className="label-mono mb-4 mt-4">{t(ui.usedIn)}</p>
              {sel.projects.length === 0 && <p className="text-sm text-muted-foreground">{t(ui.notLinked)}</p>}
              <ul className="space-y-3">
                {sel.projects.map((slug) => {
                  const p = getProject(slug)!;
                  return (
                    <li key={slug}>
                      <Link to="/projects/$slug" params={{ slug }} className="group block rounded-lg border border-border p-3 transition-colors hover:border-primary">
                        <p className="text-sm font-medium">{p.short}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{t(p.title)}</p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export { BarChart };
