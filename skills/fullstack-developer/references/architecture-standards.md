# Modular Architecture Standards

## Default principles
- Organize by business capability/feature first when the application has multiple domains; use shared/core modules only for genuinely cross-cutting concerns.
- Keep UI, application orchestration, domain rules, infrastructure, and persistence boundaries explicit.
- Prefer dependency direction toward domain logic; domain code should not depend on Svelte, Tauri runtime, SQL drivers, or UI components.
- Use the simplest architecture that supports the product's current complexity. Modular monolith is the default; microservices are generally inappropriate for a local desktop app unless there is a separate remote service requirement.
- Define contracts at boundaries and avoid duplicated business rules across frontend and backend.

## Suggested repository layout
```text
src/
  lib/
    components/       # generic reusable UI
    features/<name>/  # feature UI, state, types, client services
    services/         # cross-feature frontend integrations
    stores/           # truly shared state
    utils/
src-tauri/
  src/
    commands/         # IPC entry points
    features/<name>/  # domain/service/repository/model by feature
    infrastructure/   # database, filesystem, external integrations
    state/
    errors/
    lib.rs
docs/
  requirements/
  architecture/
  decisions/
  api/
tests/
```
Adapt to existing conventions; do not force this exact tree onto every project.

## Tauri boundary
Frontend -> typed IPC client -> Tauri command -> application/service -> domain/repository -> infrastructure.
Keep command handlers thin. Return stable serializable DTOs, not database entities or internal implementation objects.

## Data ownership
Choose one source of truth for each piece of state. Define lifecycle, persistence, validation, migration, export/import, and backup behavior. Keep secrets and privileged operations in Rust.

## SvelteKit choice
Use plain Svelte + Vite for a compact desktop UI without server-side routing requirements. Use SvelteKit when file-based routing, layouts, load patterns, or conventions justify it. For packaged desktop builds, explicitly select and verify the adapter/rendering mode. Avoid depending on a Node server unless one is intentionally bundled and managed.

## When to use stronger patterns
Introduce ports/adapters, repositories, domain services, or use cases when they isolate meaningful complexity or enable testing. Avoid ceremonial layers that merely forward calls.
