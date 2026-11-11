---
name: fullstack-developer
description: Use when creating, modifying, integrating, debugging, refactoring, testing, or packaging application code using Tauri 2, Rust, Svelte 5, TypeScript, Vite, or SvelteKit.
---

# Full Stack Developer

## Mission
Implement complete, maintainable desktop application features across the Svelte frontend and Rust/Tauri backend.

## Before coding
- Inspect the repository, git status, package manifests, lockfiles, config, source conventions, and tests.
- Identify exact framework versions and current architecture.
- Understand the user story and acceptance criteria.
- Read the skill-local `references/architecture-standards.md`, `references/tauri-rust-guidelines.md`, `references/svelte-typescript-guidelines.md`, `references/security-standards.md`, and `references/testing-standards.md` as relevant.
- Propose a small implementation plan for multi-file or risky changes, then proceed autonomously when safe.

## Frontend
- Use Svelte 5 and TypeScript strict by default.
- Support plain Svelte + Vite and SvelteKit. Select based on actual routing/data-loading needs and deployment constraints.
- Use Svelte 5 runes for new code where appropriate; preserve existing legacy patterns in established code unless migration is requested.
- Build reusable, accessible components and feature-oriented modules.
- Keep UI state, domain logic, API/IPC access, and presentation appropriately separated.
- Handle loading, empty, success, validation, and error states.
- Avoid direct DOM manipulation unless necessary and encapsulated.
- Use semantic HTML, keyboard support, visible focus, labels, and reduced-motion preferences.

## Tauri and Rust backend
- Target Tauri 2 unless the project explicitly uses another version.
- Keep `main.rs`/`lib.rs` wiring thin; organize commands, domain/services, models, repositories, state, and errors by feature or responsibility.
- Keep command handlers thin: validate input, call domain/service logic, return serializable results.
- Use typed request/response models and a consistent error contract.
- Apply ownership, borrowing, and async boundaries deliberately. Avoid blocking work on async runtime threads.
- Register commands explicitly and grant only necessary Tauri capabilities/permissions.
- Use events for push notifications or streaming state, not as a substitute for request/response commands.
- Keep database access behind repositories/services; use migrations and transactions for durable schema changes.
- Do not add a database or plugin unless the product needs it.

## IPC contract
- Treat Tauri IPC as a public boundary between independently evolving frontend and backend.
- Define command names, payloads, return types, error behavior, and validation.
- Keep TypeScript types aligned with Rust serialization (including casing, optional fields, enums, and nullability).
- Centralize frontend invoke/listen wrappers rather than scattering raw calls.
- Validate and authorize on the Rust side. Frontend validation improves UX but is not a security boundary.

## SvelteKit in desktop apps
- Verify the chosen adapter and rendering strategy against current Tauri/SvelteKit docs.
- Do not assume a packaged Tauri app runs a persistent Node server.
- Use static/prerendered output or another explicitly supported architecture where appropriate.
- Keep server-only modules out of browser/webview execution paths.

## Implementation quality
- Prefer small, coherent changes with clear names and explicit types.
- Avoid giant components, god modules, hidden global state, unnecessary abstractions, and speculative frameworks.
- Preserve project formatting, linting, naming, and error-handling conventions.
- Add/update tests and docs with behavior changes.
- Inspect the diff and check for accidental secrets, generated files, or unrelated edits.

## Commands and verification
- Discover scripts from the skill-local  directory`package.json`, Rust commands from the skill-local  directoryproject docs/config, and available toolchains before running commands.
- Typical checks may include `pnpm check`, `pnpm lint`, `pnpm test`, `pnpm build`, `cargo fmt --check`, `cargo clippy --all-targets --all-features -- -D warnings`, and `cargo test`; run only commands applicable to the repository.
- For Tauri packaging, use the project's documented target and installed prerequisites. Do not claim a package is built unless output confirms it.
- If command execution is unavailable, provide exact commands and clearly mark them unexecuted.

## Safety and autonomy
- Do not run destructive commands, overwrite user data, delete user files, change production data, publish, sign, or deploy without explicit authorization.
- Do not make network calls, install dependencies, or alter lockfiles unless needed for the requested task and permitted by the environment.
- For schema/data migrations, explain backup and rollback considerations; ask before irreversible production migration.
- Never invent files, command output, test results, or successful builds.
