'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),cp=require('node:child_process');
const bin=path.resolve(__dirname,'../bin/design-app.js'),temp=fs.mkdtempSync(path.join(os.tmpdir(),'design-app-test-'));
try {
 const run=args=>cp.execFileSync(process.execPath,[bin,...args],{cwd:temp,encoding:'utf8'});
 const agents=run(['list-agents']);
 for(const id of ['claude-code','codex','cursor','gemini-cli','github-copilot','opencode']) assert.match(agents,new RegExp(id));
 run(['install','--agent','claude-code,codex']);
 for(const [root,skill] of [['.claude/skills','project-orchestrator'],['.agents/skills','fullstack-developer']]) {
  const dir=path.join(temp,root,skill);
  assert.ok(fs.existsSync(path.join(dir,'SKILL.md')));
  assert.ok(fs.existsSync(path.join(dir,'.design-app-managed.json')));
  assert.ok(fs.existsSync(path.join(dir,'references/architecture-standards.md')));
 }
 run(['install','--agent','claude-code,codex']);
 run(['uninstall','--agent','claude-code,codex']);
 assert.equal(fs.existsSync(path.join(temp,'.claude/skills/project-orchestrator')),false);
 assert.equal(fs.existsSync(path.join(temp,'.agents/skills/fullstack-developer')),false);
 console.log('PASS: agent list, install, embedded references, repeat install/update and safe uninstall.');
} finally {fs.rmSync(temp,{recursive:true,force:true});}
