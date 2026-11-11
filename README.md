# Design App — Agent Skills for Tauri, Rust, Svelte and TypeScript

<p align="center"><img src="assets/grok_1794419957728.jpg" alt="Design App artwork" width="720"></p>
<p align="center"><strong>Six specialist engineering skills. One installer. A broad ecosystem of compatible AI coding agents.</strong></p>

Design App is a portable Agent Skills package for engineering desktop applications with Tauri 2, Rust, Svelte 5, TypeScript and Vite. It includes six focused skills and their technical reference material.

## One-command installation

Run in the project directory where you want the skills installed:

```bash
npx -y design-app-tauri-rust-svelte
```

By default, the installer installs all six skills into project-level directories for the supported agents in its compatibility registry. Shared Agent Skills locations (such as `.agents/skills/`) are written once.

Install globally for your user account:

```bash
npx -y design-app-tauri-rust-svelte --global
```

Choose agents:

```bash
npx -y design-app-tauri-rust-svelte --agent claude-code,codex,cursor
```

Preview, list, and uninstall:

```bash
npx -y design-app-tauri-rust-svelte --dry-run
npx -y design-app-tauri-rust-svelte list-agents
npx -y design-app-tauri-rust-svelte uninstall
```

The installer refuses to overwrite an existing skill directory unless it contains this package's ownership marker. Re-running install updates only package-managed copies. Uninstall removes only those managed copies.

## Supported agent ecosystem

The compatibility registry follows the public Agent Skills directory conventions for Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot, OpenCode, Cline, Windsurf, Roo Code, OpenClaw, Amp, Goose, Kiro CLI, Qwen Code, Continue and many others.

Agent Skills is a shared format, not a guarantee that every AI product supports skills. Compatibility depends on each host recognizing the Agent Skills specification and loading skills from its documented directory. Proprietary agents may require a future adapter. See the [upstream supported-agent matrix](https://github.com/vercel-labs/skills/blob/main/docs/agents.md).

## Included skills

| Skill | Purpose |
|---|---|
| `project-orchestrator` | Coordinates end-to-end delivery |
| `research-engineer` | Researches APIs, dependencies and technical choices |
| `fullstack-developer` | Implements Svelte, TypeScript, Tauri and Rust |
| `software-analyst` | Reviews architecture, security and tests |
| `project-manager` | Plans milestones, risks and acceptance criteria |
| `technical-writer` | Creates technical docs and release notes |

Each skill contains its own `references/` directory so references remain available when a skill is installed independently.

## Installer details

- Node.js 18 or newer; no runtime dependencies.
- Project-local installation by default; `--global` uses user-level agent directories.
- `--agent all` is the default; selected agent IDs can be comma-separated.
- Re-running installation updates package-managed files.
- Uninstall removes only directories bearing this package's ownership marker.
- The installer copies skill content and does not execute scripts from skill files.
- Reload the target agent if it does not discover new skills immediately.

## Development and verification

```bash
npm test
npm run pack:check
node bin/design-app.js list-agents
```

## Version

Installer/package version: **1.1.0**. Prepared for npm publication; not published yet.

## Maintainer

[@kathennn](https://github.com/kathennn)
