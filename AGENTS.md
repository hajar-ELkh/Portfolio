<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- GitHub Pages CI installs dependencies with Bun using the root `bun.lock`, retains `npm run build`, and uploads only `dist/client`; this matches the project's lockfile and publishes static files without server output.
- Prerender only explicitly listed HTML pages with `crawlLinks: false`; public downloads must be copied unchanged by Vite rather than fetched as HTML, and asset URLs must use `import.meta.env.BASE_URL` to follow the deployment base.
