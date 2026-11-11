# Testing and Quality Standards

## Test pyramid
- Rust unit tests for domain logic, validation, and error cases.
- Rust integration tests for repositories, persistence, and service boundaries.
- Frontend unit/component tests for state, validation, accessibility, and rendering.
- IPC contract tests where feasible.
- End-to-end tests for critical user journeys.
- Manual smoke tests on each target OS for native integrations and installers.

## Test design
- Derive tests from acceptance criteria.
- Cover success, invalid input, boundary values, missing data, permission denial, I/O failure, and recovery.
- Use deterministic fixtures and isolate external services.
- Avoid flaky time/network dependencies.
- Test database migrations from supported prior versions where applicable.

## Suggested checks
Frontend (if scripts exist): `pnpm check`, `pnpm lint`, `pnpm test`, `pnpm build`.
Rust: `cargo fmt --check`, `cargo clippy --all-targets --all-features -- -D warnings`, `cargo test`.
Tauri: verify the actual desktop build on target OS with required native prerequisites.

## Reporting
For each command, record whether it was not run, attempted, passed, or failed. Include relevant output and environment limitations. Never convert "not run" into "passed".
