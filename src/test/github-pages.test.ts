import { afterEach, describe, expect, it, vi } from "vitest";
import { existsSync } from "node:fs";

vi.mock("@lovable.dev/vite-tanstack-config", () => ({
  defineConfig: (config: unknown) => config,
}));

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("GitHub Pages deployment", () => {
  it("uses the case-sensitive /Portfolio/ production base", async () => {
    vi.stubEnv("NODE_ENV", "production");
    const { default: config } = await import("../../vite.config");
    expect((config as unknown as { vite: { base: string } }).vite.base).toBe("/Portfolio/");
  });

  it("prerenders all eleven portfolio pages without crawling downloadable assets", async () => {
    const { default: config } = await import("../../vite.config");
    const { tanstackStart } = config as unknown as {
      tanstackStart: { pages: { path: string }[]; prerender: { enabled: boolean; crawlLinks: boolean; autoStaticPathsDiscovery: boolean } };
    };
    expect(tanstackStart.prerender.enabled).toBe(true);
    expect(tanstackStart.prerender.crawlLinks).toBe(false);
    expect(tanstackStart.prerender.autoStaticPathsDiscovery).toBe(false);
    expect(tanstackStart.pages).toHaveLength(11);
    expect(tanstackStart.pages.some(({ path }) => path.endsWith(".pdf"))).toBe(false);
  });

  it("links the real CV filename under the deployment base", async () => {
    vi.stubEnv("BASE_URL", "/Portfolio/");
    const { config } = await import("../content/site");
    expect(config.cvUrl).toBe("/Portfolio/cv-hajar-el-khouchali.pdf");
    expect(existsSync("public/cv-hajar-el-khouchali.pdf")).toBe(true);
  });
});