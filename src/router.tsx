import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // During build-time prerendering (TSS_PRERENDERING) the router must run at "/":
  // with the production basepath it redirect-loops and no page is written.
  const isPrerendering =
    typeof process !== "undefined" && process.env.TSS_PRERENDERING === "true";

  const router = createRouter({
    routeTree,
    // Matches the Vite base: "/portfolio" on GitHub Pages, "/" in dev/preview.
    basepath: isPrerendering ? "/" : import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
