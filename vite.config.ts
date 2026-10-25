// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves the site at https://<user>.github.io/portfolio/, so production
// builds use base "/portfolio/". Dev/preview stays at "/" so the Lovable preview works.
const isBuild = process.env["NODE_ENV"] === "production";

// Every route is prerendered to static HTML at build time: the site needs no server.
// autoStaticPathsDiscovery is off so this list is the complete set of prerendered pages.
const pages = [
  { path: "/" },
  { path: "/projects/intelcia-tech-monitoring-pipeline" },
  { path: "/projects/srm-strategic-meters" },
  { path: "/projects/darija-ner" },
  { path: "/projects/darija-ner-app" },
  { path: "/projects/arabic-ocr" },
  { path: "/projects/farmguard" },
  { path: "/projects/heart-disease-prediction" },
  { path: "/projects/shopmarket" },
  { path: "/projects/multichannel-dwh" },
  { path: "/projects/hadoop-movielens" },
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
