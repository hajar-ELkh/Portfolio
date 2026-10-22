// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves the site at https://<user>.github.io/portfolio/, so production
// builds use base "/portfolio/". Dev/preview stays at "/" so the Lovable preview works.
const isBuild = process.env.NODE_ENV === "production";

// Every route is prerendered to static HTML at build time: the site needs no server.
// autoStaticPathsDiscovery is off so this list is the complete set of prerendered pages.
// Paths include the production base: the router runs with basepath "/portfolio"
// during the build, and unprefixed paths redirect-loop in the prerenderer.
const base = isBuild ? "/portfolio" : "";
const pages = [
  { path: `${base}/` },
  { path: `${base}/projects/intelcia-tech-monitoring-pipeline` },
  { path: `${base}/projects/srm-strategic-meters` },
  { path: `${base}/projects/darija-ner` },
  { path: `${base}/projects/darija-ner-app` },
  { path: `${base}/projects/arabic-ocr` },
  { path: `${base}/projects/farmguard` },
  { path: `${base}/projects/heart-disease-prediction` },
  { path: `${base}/projects/shopmarket` },
  { path: `${base}/projects/multichannel-dwh` },
  { path: `${base}/projects/hadoop-movielens` },
];

export default defineConfig({
  vite: {
    base: isBuild ? "/portfolio/" : "/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    pages,
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
