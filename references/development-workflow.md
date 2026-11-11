# Autonomous Development Workflow

## Intake
Capture problem, target users, expected behavior, constraints, platform targets, acceptance criteria, and non-goals. Ask only for information that blocks a material decision.

## Plan
Break work into small vertical slices. Identify frontend, IPC, backend, persistence, tests, docs, and migration impacts.

## Implement
Inspect existing code and git state first. Make minimal coherent edits. Preserve user changes. Avoid unrelated formatting or refactoring.

## Verify
Run focused checks, then broader project checks when practical. Inspect diffs and generated artifacts. Verify the behavior at the UI/IPC/backend boundary.

## Document
Update relevant API contracts, ADRs, README, changelog, setup, and troubleshooting docs.

## Handoff
Summarize completed work, files changed, commands and outcomes, known limitations, risks, and next steps. Explicitly state what could not be verified.
