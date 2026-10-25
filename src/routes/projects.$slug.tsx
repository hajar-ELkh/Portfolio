import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ChevronDown, Info } from "lucide-react";
import { getProject } from "@/content/projects";
import { ui } from "@/content/site";
import { useLang, type Loc } from "@/content/i18n";
import { BarChart, Chip, Pipeline, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return { slug: p.slug };
  },
  head: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    const title = `${p.title.en} — Hajar El Khouchali`;
    return {
      meta: [
        { title },
        { name: "description", content: p.problem.en },
        { property: "og:title", content: title },
        { property: "og:description", content: p.problem.en },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `${import.meta.env.BASE_URL}projects/${p.slug}` }],
    };
  },
  notFoundComponent: () => (
    <main className="mx-auto max-w-3xl px-5 pb-20 pt-40 text-center">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <Link to="/" hash="projects" className="mt-6 inline-block text-primary underline">Back to projects</Link>
    </main>
  ),
  component: ProjectPage,
});

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-4 border-t border-border py-10 md:grid-cols-[14rem_1fr]">
      <h2 className="label-mono pt-1"><span className="text-primary">{n}</span> · {title}</h2>
      <div className="text-lg leading-relaxed">{children}</div>
    </Reveal>
  );
}

function List({ items }: { items: Loc[] }) {
  const { t } = useLang();
  return (
    <ul className="space-y-2">
      {items.map((x, i) => (
        <li key={i} className="flex gap-3"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden />{t(x)}</li>
      ))}
    </ul>
  );
}

const S = {
  context: { en: "The context", fr: "Le contexte" },
  problem: { en: "The problem", fr: "Le problème" },
  solution: { en: "Solution & architecture", fr: "Solution & architecture" },
  built: { en: "What I built", fr: "Ce que j'ai construit" },
  decisions: { en: "Technical decisions", fr: "Décisions techniques" },
  challenges: { en: "Challenges", fr: "Défis" },
  results: { en: "Verified results", fr: "Résultats vérifiés" },
  learned: { en: "What I learned", fr: "Ce que j'ai appris" },
  next: { en: "What I would improve next", fr: "Ce que j'améliorerais ensuite" },
  stack: { en: "Technology stack", fr: "Stack technique" },
  related: { en: "Related projects", fr: "Projets liés" },
  links: { en: "Code & demos", fr: "Code & démos" },
  linksBody: { en: "Public code and demo links are coming soon. Ask me for a walkthrough.", fr: "Les liens publics vers le code et les démos arrivent bientôt. Demandez-moi une présentation." },
  illus: { en: "Illustrative pipeline diagram", fr: "Schéma de pipeline illustratif" },
};

function ProjectPage() {
  const { slug } = Route.useLoaderData();
  const { t } = useLang();
  const p = getProject(slug)!;
  return (
    <main className="mx-auto max-w-5xl px-5 pb-24 pt-28 md:px-8">
      <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> {t(ui.back)}
      </Link>
      <header className="mb-14 mt-10">
        <p className="label-mono">{t(p.catLabel)}</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight md:text-6xl">{t(p.title)}</h1>
        <p className="mt-5 flex flex-wrap gap-x-4 text-teal">
          <span>{t(p.org)}</span>
          {p.period && <span className="font-mono text-sm text-muted-foreground">{p.period}</span>}
        </p>
        {p.note && (
          <p className="mt-6 flex items-start gap-2 rounded-lg border border-border bg-surface p-3 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0" /> {t(p.note)}
          </p>
        )}
      </header>

      <figure className="panel mb-6 p-6">
        <Pipeline steps={p.pipeline} />
        <figcaption className="label-mono mt-4">{t(S.illus)}</figcaption>
      </figure>

      <Block n="01" title={t(S.context)}>{t(p.context)}</Block>
      <Block n="02" title={t(S.problem)}>{t(p.problem)}</Block>
      <Block n="03" title={t(S.solution)}>{t(p.solution)}</Block>
      <Block n="04" title={t(S.built)}><List items={p.contribution} /></Block>
      <Block n="05" title={t(S.results)}>
        <List items={p.results} />
        {p.chart && <div className="mt-6"><BarChart title={t(p.chart.title)} metric={p.chart.metric} max={p.chart.max} bars={p.chart.bars} /></div>}
      </Block>
      <Block n="06" title={t(S.stack)}>
        <div className="flex flex-wrap gap-2">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
      </Block>
      <Reveal className="space-y-3 border-t border-border py-10">
        {[
          { k: S.decisions, items: p.decisions },
          { k: S.challenges, items: p.challenges },
        ].map((d) => (
          <details key={d.k.en} className="panel group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg">
              {t(d.k)} <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-4 text-muted-foreground"><List items={d.items} /></div>
          </details>
        ))}
      </Reveal>
      <Block n="07" title={t(S.learned)}><List items={p.lessons} /></Block>
      <Block n="08" title={t(S.next)}><List items={p.next} /></Block>
      <Block n="09" title={t(S.links)}><p className="text-muted-foreground">{t(S.linksBody)}</p></Block>

      <section className="border-t border-border pt-10">
        <h2 className="label-mono mb-5">{t(S.related)}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {p.related.map((r) => {
            const rp = getProject(r)!;
            return (
              <Link key={r} to="/projects/$slug/" params={{ slug: r }} className="panel group p-5 transition-colors hover:border-primary">
                <p className="text-sm text-teal">{rp.short}</p>
                <p className="mt-1 flex items-start justify-between gap-3 font-display text-lg">
                  {t(rp.title)} <ArrowUpRight className="size-4 shrink-0" />
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
