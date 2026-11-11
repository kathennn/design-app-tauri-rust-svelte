# Tauri 2 and Rust Guidelines

## Version discipline
- Confirm Tauri major version and plugin compatibility before coding.
- Tauri 2 uses capabilities and permission identifiers; do not copy v1 allowlist examples.
- Verify configuration keys and plugin APIs against docs for the installed version.

## Tauri application structure
- Keep application startup and handler registration focused.
- Put command handlers in modules grouped by feature.
- Register only commands the UI needs.
- Use Tauri events for backend-to-frontend notifications with documented event names and payloads.
- Review navigation, deep links, updater, shell, filesystem, dialog, process, and opener permissions individually.

## Rust design
- Use stable Rust unless a justified toolchain requirement says otherwise.
- Prefer explicit types and domain-specific error enums.
- Use `Result` for recoverable errors; avoid panics in normal application flows.
- Keep async functions non-blocking. Move CPU-heavy or blocking I/O to suitable blocking execution.
- Use `serde` DTOs at serialization boundaries; control field casing explicitly.
- Avoid unnecessary `clone`; understand ownership and lifetimes before introducing shared state.
- Use `Arc`/locks only when shared mutable state is genuinely needed; keep lock scopes short.
- Add migrations for schema changes and transactions for multi-step writes.

## IPC
Document command name, request DTO, response DTO, errors, permissions, and validation.
Validate paths, identifiers, enum values, size limits, and any user-controlled input in Rust.
Do not trust frontend-only validation.

## Security
Grant least privilege. Avoid arbitrary command execution and unrestricted filesystem access. Do not embed API keys or credentials in frontend bundles. Sanitize/validate imported files and external data. Treat all IPC values as untrusted.

## Quality checks
Use project-specific commands. Typical checks: `cargo fmt --check`, `cargo clippy --all-targets --all-features -- -D warnings`, and `cargo test`. Confirm features and target platform before assuming all-target checks are portable.
