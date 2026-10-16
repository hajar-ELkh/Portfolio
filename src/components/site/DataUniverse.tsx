import { useEffect, useRef } from "react";

/** Lightweight canvas graph: nodes, streaming particles, three anchor concepts. */
export function DataUniverse() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const css = getComputedStyle(document.documentElement);
    const col = (v: string) => css.getPropertyValue(v).trim();
    const colors = [col("--primary"), col("--violet"), col("--teal")];
    const fg = col("--muted-foreground");

    let w = 0, h = 0, raf = 0;
    let mx = 0, my = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const anchors = [
      { label: "DATA", x: 0.22, y: 0.7, c: 0 },
      { label: "INTELLIGENCE", x: 0.55, y: 0.25, c: 1 },
      { label: "IMPACT", x: 0.82, y: 0.68, c: 2 },
    ];
    const rnd = (a: number, b: number) => a + Math.random() * (b - a);
    const nodes = Array.from({ length: 46 }, () => {
      const a = anchors[Math.floor(Math.random() * 3)];
      return { ax: a.x + rnd(-0.18, 0.18), ay: a.y + rnd(-0.18, 0.18), c: a.c, p: rnd(0, Math.PI * 2), r: rnd(1, 2.4) };
    });
    const links = [[0, 1], [1, 2], [0, 2]] as const;
    const particles = Array.from({ length: 18 }, () => ({ l: Math.floor(Math.random() * 3), t: Math.random(), s: rnd(0.0015, 0.004) }));

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      const sy = Math.min(window.scrollY / 800, 1);
      ctx.clearRect(0, 0, w, h);
      const pos = (x: number, y: number, depth = 1) => [x * w + mx * 18 * depth, y * h + my * 18 * depth - sy * 40 * depth] as const;
      const pts = nodes.map((n) => {
        const k = reduce ? 0 : Math.sin(time / 1800 + n.p) * 0.012;
        return pos(n.ax + k, n.ay + Math.cos(time / 2100 + n.p) * 0.012, 0.6);
      });
      // node mesh
      ctx.lineWidth = 0.6;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i][0] - pts[j][0], dy = pts[i][1] - pts[j][1];
          const d = Math.hypot(dx, dy);
          if (d < 90) {
            ctx.strokeStyle = colors[nodes[i].c];
            ctx.globalAlpha = (1 - d / 90) * 0.25;
            ctx.beginPath(); ctx.moveTo(pts[i][0], pts[i][1]); ctx.lineTo(pts[j][0], pts[j][1]); ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      pts.forEach((p, i) => {
        ctx.fillStyle = colors[nodes[i].c];
        ctx.globalAlpha = 0.75;
        ctx.beginPath(); ctx.arc(p[0], p[1], nodes[i].r, 0, Math.PI * 2); ctx.fill();
      });
      // anchor links
      const A = anchors.map((a) => pos(a.x, a.y));
      links.forEach(([a, b]) => {
        const g = ctx.createLinearGradient(A[a][0], A[a][1], A[b][0], A[b][1]);
        g.addColorStop(0, colors[anchors[a].c]); g.addColorStop(1, colors[anchors[b].c]);
        ctx.strokeStyle = g; ctx.globalAlpha = 0.45; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(A[a][0], A[a][1]);
        const cx = (A[a][0] + A[b][0]) / 2, cy = (A[a][1] + A[b][1]) / 2 - 40;
        ctx.quadraticCurveTo(cx, cy, A[b][0], A[b][1]); ctx.stroke();
      });
      // particles
      particles.forEach((p) => {
        if (!reduce) p.t = (p.t + p.s) % 1;
        const [a, b] = links[p.l];
        const cx = (A[a][0] + A[b][0]) / 2, cy = (A[a][1] + A[b][1]) / 2 - 40;
        const t = p.t, u = 1 - t;
        const x = u * u * A[a][0] + 2 * u * t * cx + t * t * A[b][0];
        const y = u * u * A[a][1] + 2 * u * t * cy + t * t * A[b][1];
        ctx.globalAlpha = 0.9; ctx.fillStyle = colors[anchors[t < 0.5 ? a : b].c];
        ctx.beginPath(); ctx.arc(x, y, 1.8, 0, Math.PI * 2); ctx.fill();
      });
      // anchors
      anchors.forEach((a, i) => {
        const [x, y] = A[i];
        ctx.globalAlpha = 0.18; ctx.fillStyle = colors[a.c];
        ctx.beginPath(); ctx.arc(x, y, 22 + (reduce ? 0 : Math.sin(time / 900 + i) * 3), 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
        ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = fg; ctx.font = "500 11px 'JetBrains Mono', monospace";
        ctx.textAlign = "center"; ctx.fillText(a.label, x, y + 42);
      });
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="h-full w-full" role="img" aria-label="Abstract network connecting data, intelligence and impact" />;
}
