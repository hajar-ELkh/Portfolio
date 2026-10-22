import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Menu, X } from "lucide-react";
import { nav, ui } from "@/content/site";
import { useLang } from "@/content/i18n";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const LangSwitch = (
    <div className="flex rounded-full border border-border p-0.5 font-mono text-[11px]" role="group" aria-label="Language">
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${lang === l ? "bg-surface-2 text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <motion.div className="absolute bottom-0 left-0 h-px w-full origin-left bg-signal" style={{ scaleX }} aria-hidden />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href={`${import.meta.env.BASE_URL}#home`} className="font-display text-sm font-semibold tracking-[0.16em]">
          HAJAR <span className="text-muted-foreground">EL KHOUCHALI</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`${import.meta.env.BASE_URL}#${n.id}`}
              aria-current={active === n.id ? "true" : undefined}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${active === n.id ? "bg-surface-2 text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t(n.label)}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {LangSwitch}
          <a href={`${import.meta.env.BASE_URL}#contact`} className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90">
            {t(ui.connect)}
          </a>
        </div>
        <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          {nav.map((n) => (
            <a key={n.id} href={`${import.meta.env.BASE_URL}#${n.id}`} onClick={() => setOpen(false)} className="block border-b border-border py-3 text-base">
              {t(n.label)}
            </a>
          ))}
          <div className="mt-4 flex items-center justify-between">
            {LangSwitch}
            <a href={`${import.meta.env.BASE_URL}#contact`} onClick={() => setOpen(false)} className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">
              {t(ui.connect)}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export function BackToTop() {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t(ui.top)}
      className="fixed bottom-6 right-6 z-40 rounded-full border border-border bg-surface p-3 shadow-glow transition-colors hover:border-primary"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 font-mono text-xs text-muted-foreground md:flex-row md:px-8">
        <span>© {new Date().getFullYear()} Hajar El Khouchali</span>
        <span>DATA → INTELLIGENCE → IMPACT</span>
      </div>
    </footer>
  );
}
