// The chat's models list (public/app/chat-models.json), read by the app at the start of a chat
// (elabora-app src/main/agents/acp/models.ts): the same rules as the app's, so that a list published
// here is never one the app refuses. docs/maintenance.md, « The chat's models ».
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { test } from 'node:test';

const list = JSON.parse(fs.readFileSync(new URL('../public/app/chat-models.json', import.meta.url), 'utf8'));
const MODEL_ID = /^[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9._-]{0,99}$/;

test('the chat’s models list is one the app reads', () => {
  assert.equal(list.format, 1, 'format 1: the app reads no other');
  assert.match(list.checked, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(!Number.isNaN(Date.parse(list.checked)) && Date.parse(list.checked) <= Date.now(), 'checked: the date of the last check, not in the future');
  assert.ok(Array.isArray(list.opencode) && list.opencode.length >= 1 && list.opencode.length <= 20);
  const ids = new Set();
  for (const model of list.opencode) {
    assert.match(model.id, MODEL_ID);
    assert.ok(model.id.startsWith('opencode/'), `${model.id}: a model of OpenCode Zen`);
    assert.ok(typeof model.name === 'string' && model.name.trim() && model.name.length <= 60 && !/[\u0000-\u001f\u007f]/.test(model.name), `${model.id}: a short name`);
    assert.ok(model.images === undefined || typeof model.images === 'boolean', `${model.id}: images is true or false`);
    assert.ok(!ids.has(model.id), `${model.id} twice`);
    ids.add(model.id);
  }
});
