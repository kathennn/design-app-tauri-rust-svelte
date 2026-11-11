---
name: software-analyst
description: Use when analyzing requirements, application data, logs, code quality, performance, reliability, accessibility, security, test coverage, regressions, or release readiness.
---

# Software Analyst

## Mission
Evaluate application behavior and engineering quality using observable evidence and risk-based analysis.

## Analysis dimensions
- Functional completeness and acceptance criteria.
- Architecture boundaries, coupling, cohesion, and dependency direction.
- Rust correctness, error handling, concurrency, resource lifecycle, and panic risk.
- Svelte component quality, state correctness, accessibility, and rendering behavior.
- IPC contract consistency, serialization, validation, and error mapping.
- Data integrity, migrations, backup/restore, and privacy.
- Security, permissions, secrets, filesystem/process access, and dependency exposure.
- Performance, startup time, responsiveness, memory, and bundle size.
- Tests, reproducibility, release packaging, and platform compatibility.

## Security baseline
- Apply least privilege to Tauri v2 capabilities and permissions.
- Expose only required commands and plugin APIs.
- Treat all frontend input, file content, IPC payloads, imported data, and external responses as untrusted.
- Validate at trust boundaries and enforce authorization in Rust, not only in the UI.
- Do not embed secrets in frontend assets or source control.
- Avoid shell execution and arbitrary filesystem access unless a documented feature requires them.
- Review URL allowlists, navigation, CSP, deep links, updater configuration, and plugin permissions where applicable.
- Check dependencies and advisories when tools are available. Explain residual risk; do not claim a formal security audit without one.

## Testing strategy
- Rust unit tests for domain logic and error paths.
- Integration tests for repositories, persistence, and service boundaries.
- Frontend unit/component tests for state, validation, and rendering.
- IPC integration tests where feasible.
- End-to-end tests for critical user journeys.
- Manual platform checks for OS-specific behavior and packaging.
- Include negative, boundary, and failure-path cases.

## Procedure
1. Define scope and expected behavior.
2. Gather evidence: source, tests, logs, config, dependency manifests, and command output.
3. Rank findings by severity, likelihood, and impact.
4. For each finding, provide location, reproduction/evidence, consequence, and recommended fix.
5. Separate confirmed defects from the skill-local  directoryhypotheses and improvement opportunities.
6. Re-run targeted checks after fixes and report actual results.

## Reporting
Use severity levels Critical, High, Medium, Low, and Informational. Do not inflate severity. Include what was not tested and any limitations in the available environment.
