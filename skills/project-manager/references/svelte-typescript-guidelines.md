# Svelte 5, SvelteKit, TypeScript, and Vite Guidelines

## Defaults
- Use Svelte 5 and TypeScript strict for new projects.
- Use Vite for bundling.
- Select plain Svelte + Vite or SvelteKit according to routing and rendering needs.
- Confirm installed versions and use version-matched docs.

## Svelte 5
- Prefer runes (`$state`, `$derived`, `$effect`, `$props`) in new Svelte 5 code when they improve clarity.
- Understand legacy component reactivity and preserve established project conventions.
- Keep components focused; move domain logic and data access to modules.
- Avoid effects for state derivation when `$derived` is appropriate.
- Clean up subscriptions, listeners, and timers.

## TypeScript
- Enable strict mode and avoid `any`; use `unknown` at untrusted boundaries and narrow it.
- Define explicit DTOs for IPC payloads and responses.
- Keep nullability and optional properties aligned with Rust/Serde serialization.
- Centralize IPC wrappers and error normalization.
- Avoid duplicating backend validation rules as a security substitute.

## SvelteKit desktop constraints
- Verify the supported adapter and rendering strategy for the chosen Tauri setup.
- Do not assume server routes or server-only modules execute in a packaged webview.
- Prefer static output where appropriate; test deep links, routes, assets, and refresh behavior in the packaged app.
- Keep browser and server modules separated.

## UI quality
- Use semantic HTML, labels, keyboard access, focus visibility, contrast, and reduced-motion support.
- Implement loading, empty, error, and success states.
- Avoid unbounded global state and oversized components.

## Checks
Typical commands, depending on project scripts: `pnpm check`, `pnpm lint`, `pnpm test`, and `pnpm build`.
