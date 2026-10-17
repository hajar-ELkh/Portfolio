import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { Reveal, SectionHead } from "./ui";
import { aboutText, aboutTimeline, bmc, config, domains, insights, statusLabel, ui } from "@/content/site";
import { useLang } from "@/content/i18n";
import portrait from "@/assets/portrait.jpg.asset.json";

const statusColor = { Exploring: "text-muted-foreground", Learning: "text-primary", Practicing: "text-violet", Applied: "text-teal" } as const;

export function Beyond() {
  const { t } = useLang();
  const [d, setD] = useState(0);
  const [b, setB] = useState("vp");
  const dom = domains[d];
  const block = bmc.find((x) => x.key === b)!;
  const area: Record<string, string> = {
    kp: "md:col-start-1 md:row-start-1 md:row-span-2",
    ka: "md:col-start-2 md:row-start-1",
    kr: "md:col-start-2 md:row-start-2",
    vp: "md:col-start-3 md:row-start-1 md:row-span-2",
    cr: "md:col-start-4 md:row-start-1",
    ch: "md:col-start-4 md:row-start-2",
    cs: "md:col-start-5 md:row-start-1 md:row-span-2",
    co: "md:col-start-1 md:col-span-3 md:row-start-3",
    rs: "md:col-start-4 md:col-span-2 md:row-start-3",
  };
  return (
    <section id="beyond" className="relative scroll-mt-20 overflow-hidden border-y border-border">
      <div className="pointer-events-none absolute -right-40 top-20 size-[520px] rounded-full bg-violet/10 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-28 md:px-8">
        <SectionHead label={t(ui.beyondLabel)} title={t(ui.beyondTitle)}>
          {t(ui.beyondIntro)}
        </SectionHead>

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="panel p-7">
            <p className="label-mono text-violet">Leadership · JLM · 2025 – 2026</p>
            <h3 className="mt-3 text-2xl font-semibold">{t({ en: "Former Head of Action & Activities", fr: "Ex-Cheffe Action & Activités" })}</h3>
            <p className="mt-3 text-muted-foreground">
              {t({
                en: "Organized events and activities, took part in AI Days and Caravane initiatives, and collaborated with the SMILEY Business Challenge — learning coordination, teamwork and initiative.",
                fr: "Organisation d'événements et d'activités, participation aux AI Days et aux Caravanes, collaboration avec le SMILEY Business Challenge — apprentissage de la coordination, du travail d'équipe et de l'initiative.",
              })}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="panel p-7">
            <p className="label-mono text-teal">{t({ en: "Entrepreneurship · June 2026 – present", fr: "Entrepreneuriat · Juin 2026 – présent" })}</p>
            <h3 className="mt-3 text-2xl font-semibold">NKHDMLIK.MA — {t({ en: "Project holder", fr: "Porteuse de projet" })}</h3>
            <p className="mt-3 text-muted-foreground">
              {t({
                en: "A digital service platform developed within the Digital Startup Incubation program, with JLM alumni and Stellantis. It taught me that building software is only one part of building a business.",
                fr: "Une plateforme de services digitaux développée dans le programme Digital Startup Incubation, avec les alumni JLM et Stellantis. J'y ai appris que construire un logiciel n'est qu'une partie de la construction d'une entreprise.",
              })}
            </p>
          </Reveal>
        </div>

        <h3 className="mb-6 mt-20 font-display text-2xl">{t(ui.mapTitle)}</h3>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {domains.map((x, i) => (
              <li key={i}>
                <button
                  onClick={() => setD(i)}
                  aria-pressed={d === i}
                  className={`flex h-full w-full items-start gap-3 rounded-lg border p-3 text-left text-sm transition-colors ${d === i ? "border-violet bg-violet/10" : "border-border hover:border-muted-foreground"}`}
                >
                  <span className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span>{t(x.name)}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="panel h-fit space-y-5 p-7 lg:sticky lg:top-24" aria-live="polite">
            <p className="font-display text-xl">{t(dom.name)}</p>
            <div>
              <p className="label-mono mb-1">{t(ui.why)}</p>
              <p>{t(dom.why)}</p>
            </div>
            <div>
              <p className="label-mono mb-1">{t(ui.questions)}</p>
              <ul className="list-inside list-disc text-muted-foreground">{dom.q.map((q, i) => <li key={i}>{t(q)}</li>)}</ul>
            </div>
            <div>
              <p className="label-mono mb-1">{t(ui.tools)}</p>
              <p className="font-mono text-sm">{dom.tools}</p>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="label-mono">{t(ui.status)}</span>
              <span className={`font-mono text-sm ${statusColor[dom.status]}`}>● {t(statusLabel[dom.status])}</span>
            </div>
          </div>
        </div>

        <h3 className="mb-6 mt-20 font-display text-2xl">{t(ui.bmcTitle)}</h3>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:grid-rows-[repeat(3,minmax(84px,auto))]">
          {bmc.map((x) => (
            <button
              key={x.key}
              onClick={() => setB(x.key)}
              aria-pressed={b === x.key}
              className={`rounded-lg border p-4 text-left text-sm transition-colors ${area[x.key]} ${b === x.key ? "border-teal bg-teal/10" : "border-border bg-surface/50 hover:border-muted-foreground"}`}
            >
              {t(x.name)}
            </button>
          ))}
        </div>
        <div className="panel mt-4 grid gap-4 p-6 md:grid-cols-2" aria-live="polite">
          <div>
            <p className="font-display text-lg">{t(block.name)}</p>
            <p className="mt-1 text-muted-foreground">{t(block.desc)}</p>
          </div>
          <div>
            <p className="label-mono mb-1 text-teal">{t(ui.techLink)}</p>
            <p>{t(block.tech)}</p>
          </div>
        </div>

        <Reveal className="mt-20 max-w-3xl border-l-2 border-violet pl-6">
          <h3 className="font-display text-2xl">{t(ui.learningTitle)}</h3>
          <p className="mt-3 text-lg text-muted-foreground">{t(ui.learningBody)}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  const { t } = useLang();
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 md:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img src={portrait.url} alt="Portrait of Hajar El Khouchali" className="aspect-[4/5] w-full object-cover grayscale-[30%]" loading="lazy" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-5">
              <p className="font-mono text-xs text-muted-foreground">ENSA KHOURIBGA · IID</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHead label={t(ui.aboutLabel)} title={t(ui.aboutTitle)} />
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {aboutText.map((p, i) => <p key={i}>{t(p)}</p>)}
          </div>
          <ol className="mt-12 space-y-0">
            {aboutTimeline.map((a) => (
              <li key={a.year} className="grid grid-cols-[7rem_1fr] gap-4 border-t border-border py-4">
                <span className="font-mono text-sm text-teal">{a.year}</span>
                <span>{t(a.text)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="border-t border-border bg-surface/30" aria-label="Insights">
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8">
        <SectionHead label={t(ui.insightsLabel)} title={t(ui.insightsTitle)}>
          <span className="text-sm">{t(ui.insightsNote)}</span>
        </SectionHead>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((x, i) => (
            <article key={i} className="panel flex flex-col p-6">
              <p className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, "0")} · {x.from}</p>
              <h3 className="mt-3 text-xl font-semibold leading-snug">{t(x.title)}</h3>
              <p className={`mt-3 text-sm leading-relaxed text-muted-foreground ${open === i ? "" : "line-clamp-3"}`}>{t(x.body)}</p>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="mt-auto self-start pt-4 text-sm font-medium text-primary hover:underline">
                {open === i ? t(ui.close) : t(ui.read)} →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  const [v, setV] = useState({ name: "", email: "", org: "", topic: "", message: "" });
  const [err, setErr] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (!v.name.trim()) er.name = t(ui.f.errName);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) er.email = t(ui.f.errEmail);
    if (!v.topic) er.topic = t(ui.f.errTopic);
    if (v.message.trim().length < 10) er.message = t(ui.f.errMsg);
    setErr(er);
    if (Object.keys(er).length) return;
    const body = `${v.message}\n\n— ${v.name}${v.org ? `, ${v.org}` : ""}\n${v.email}`;
    window.location.href = `mailto:${config.email}?subject=${encodeURIComponent(`[Portfolio] ${v.topic}`)}&body=${encodeURIComponent(body)}`;
    setDone(true);
  };

  const field = "w-full rounded-lg border border-input bg-surface px-4 py-3 text-sm placeholder:text-muted-foreground";
  const E = ({ k }: { k: string }) => (err[k] ? <p className="mt-1 text-xs text-destructive" role="alert">{err[k]}</p> : null);

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-border">
      <div className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-28 md:px-8 lg:grid-cols-2">
        <div>
          <SectionHead label={t(ui.contactLabel)} title={t(ui.contactTitle)}>
            {t(ui.contactBody)}
          </SectionHead>
          <ul className="space-y-3">
            {[
              { href: `mailto:${config.email}`, icon: Mail, label: config.email },
              { href: config.linkedin, icon: Linkedin, label: "linkedin.com/in/hajar-elkhouchali" },
              { href: config.github, icon: Github, label: "github.com/hajar-ELkh" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <l.icon className="size-4" /> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="panel space-y-4 p-6 md:p-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label={t(ui.f.topic)}>
            {ui.topics.map((tp, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setV({ ...v, topic: t(tp) })}
                aria-pressed={v.topic === t(tp)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${v.topic === t(tp) ? "border-primary bg-primary/10" : "border-border text-muted-foreground hover:text-foreground"}`}
              >
                {t(tp)}
              </button>
            ))}
          </div>
          <E k="topic" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">{t(ui.f.name)}</span>
              <input className={field} placeholder={t(ui.f.name)} value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} aria-invalid={!!err.name} />
              <E k="name" />
            </label>
            <label className="block">
              <span className="sr-only">{t(ui.f.email)}</span>
              <input type="email" className={field} placeholder={t(ui.f.email)} value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} aria-invalid={!!err.email} />
              <E k="email" />
            </label>
          </div>
          <label className="block">
            <span className="sr-only">{t(ui.f.org)}</span>
            <input className={field} placeholder={t(ui.f.org)} value={v.org} onChange={(e) => setV({ ...v, org: e.target.value })} />
          </label>
          <label className="block">
            <span className="sr-only">{t(ui.f.message)}</span>
            <textarea rows={5} className={field} placeholder={t(ui.f.message)} value={v.message} onChange={(e) => setV({ ...v, message: e.target.value })} aria-invalid={!!err.message} />
            <E k="message" />
          </label>
          <button type="submit" className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
            {t(ui.f.send)}
          </button>
          <p className="text-xs text-muted-foreground">{t(ui.f.sendNote)}</p>
          {done && (
            <div className="flex items-start justify-between gap-3 rounded-lg border border-teal/40 bg-teal/10 p-3 text-sm" role="status">
              <span>
                {t(ui.f.opened)} <a className="underline" href={`mailto:${config.email}`}>{config.email}</a>.
              </span>
              <button type="button" onClick={() => setDone(false)} aria-label={t(ui.close)}><X className="size-4" /></button>
            </div>
          )}
        </form>
      </div>
      <p className="relative mx-auto max-w-7xl px-5 pb-24 text-balance font-display text-3xl md:px-8 md:text-5xl">
        <span className="text-signal">{t(ui.finalLine)}</span>
      </p>
    </section>
  );
}
