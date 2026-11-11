# Publishing to npm from Debian

This guide publishes `design-app-tauri-rust-svelte` to npm. **Only run `npm publish` when you are ready to release publicly.** A published version cannot be reused.

## Requirements
- Debian, Node.js 18+ and npm.
- An npm account authorized to publish this package name.
- Access to this Git repository.
- npm 2FA if required by your account or npm policy.

```bash
node --version
npm --version
```

## 1. Get the source

```bash
git clone https://github.com/kathennn/design-app-tauri-rust-svelte.git
cd design-app-tauri-rust-svelte
```

For an existing clone: `git pull --ff-only origin main`.

## 2. Review package and license

```bash
cat package.json
less LICENSE
less README.md
less PUBLISHING.md
```

The package uses project-specific proprietary EULA-style terms. They allow download, installation and use, including technical copies required for installation and execution, but do not grant modification or redistribution rights. This is not an OSI-approved open-source license or standard SPDX license. Consider qualified legal review before commercial distribution. Mandatory rights under applicable law still apply.

## 3. Sign in to npm

```bash
npm login
npm whoami
```

Complete npm browser/device authentication. Never paste your npm password, access token, or one-time code into chat or source files.

## 4. Run release checks

```bash
npm test
npm run pack:check
node --check bin/design-app.js
npm pack --dry-run
```

Review the file list. It should contain `LICENSE`, both READMEs, `PUBLISHING.md`, `bin/`, `skills/`, and `references/`. It should not contain credentials, `.env` files, local caches, or unrelated files.

Optional local archive inspection:

```bash
npm pack
tar -tf design-app-tauri-rust-svelte-*.tgz
```

## 5. Check package-name availability

```bash
npm view design-app-tauri-rust-svelte name version
```

An `E404` before the first release generally means the package is not in the registry yet. If another account owns the name, stop and resolve that first.

## 6. Publish the first release

Only when ready to make the package public:

```bash
npm publish --access public
```

Complete the 2FA prompt if npm requests it. Do not weaken account security to publish.

## 7. Verify

```bash
npm view design-app-tauri-rust-svelte version
npm view design-app-tauri-rust-svelte license
npx -y design-app-tauri-rust-svelte list-agents
```

Test in a disposable project:

```bash
mkdir -p /tmp/design-app-npm-check
cd /tmp/design-app-npm-check
npx -y design-app-tauri-rust-svelte --dry-run
npx -y design-app-tauri-rust-svelte
```

## 8. Publish future updates

Increment the version in `package.json` and `plugin.json` together, run tests, commit and push the release source, then publish:

```bash
npm version patch
npm test
npm run pack:check
git push origin main --follow-tags
npm publish --access public
```

Use `minor` or `major` when appropriate. Review the generated version commit/tag before pushing. Use `npm pack` for tests, never a test publication.

## Troubleshooting
- `E401` / `ENEEDAUTH`: run `npm login` and verify with `npm whoami`.
- `E403`: check package-name ownership, account permissions, 2FA and publishing policy.
- `E404` from `npm view`: package may not have been published yet, or the name may be wrong.
- `E409` / version already exists: increment the version; npm does not allow overwriting a release.
- `ENOTFOUND`: check Debian DNS and network connectivity.
