import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // Matches the Vite base: "/portfolio" on GitHub Pages, "/" in dev/preview.
    basepath: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
    // Canonical URLs keep a trailing slash so each page is a static
    // <route>/index.html — exactly what GitHub Pages serves without a server.
    trailingSlash: "always",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
