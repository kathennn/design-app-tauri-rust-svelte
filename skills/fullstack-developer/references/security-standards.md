# Desktop Application Security Standards

## Threat model
Identify assets, trust boundaries, entry points, attacker capabilities, and impact. Consider malicious local files, compromised dependencies, untrusted IPC input, external content, deep links, and accidental data disclosure.

## Tauri controls
- Use least-privilege capabilities and permissions.
- Expose only required commands and plugins.
- Restrict filesystem scopes and shell/process access.
- Review CSP, navigation, external URL handling, deep links, updater signatures, and plugin permissions.
- Keep privileged logic in Rust.

## Input and data
- Validate every IPC payload and external/imported input in backend code.
- Normalize and constrain filesystem paths; defend against traversal and symlink edge cases.
- Use parameterized database queries.
- Protect sensitive local data according to the threat model and platform capabilities.
- Define retention, export, deletion, and backup behavior.
- Never commit secrets or embed them in frontend assets.

## Dependencies and supply chain
- Minimize dependencies and features.
- Review package source, maintenance, license, advisories, and transitive dependencies.
- Commit lockfiles for applications.
- Do not claim a dependency audit unless it was run and reviewed.

## Reporting
Document findings, severity, evidence, remediation, and residual risk. This guidance is not a substitute for a formal penetration test or security certification.
