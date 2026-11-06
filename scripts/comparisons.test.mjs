// The comparison facts (src/data/comparisons/*.json): well formed, sourced, dated, and still valid. A fact past its
// validity fails here until someone reads its source again (src/data/comparisons/WATCH.md); 30 days before, the
// test says so without failing. docs/maintenance.md, « Comparison pages ».
//
//   COMPARISONS_TODAY=2027-01-10 pnpm test   # as on another day
//   COMPARISONS_STALE=warn pnpm test         # stale facts as warnings (the release workflow: a release is never held back)
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { test } from 'node:test';
import { ATTRIBUTES, VALIDITY, WARN_DAYS, check } from '../src/lib/comparisons-rules.ts';

const dir = new URL('../src/data/comparisons/', import.meta.url);
const tools = Object.fromEntries(
  fs.readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => [f.slice(0, -5), JSON.parse(fs.readFileSync(new URL(f, dir), 'utf8'))]),
);
const today = process.env.COMPARISONS_TODAY ? new Date(`${process.env.COMPARISONS_TODAY}T12:00:00Z`) : new Date();
if (Number.isNaN(today.getTime())) throw new Error(`COMPARISONS_TODAY=${process.env.COMPARISONS_TODAY}: a day, YYYY-MM-DD`);
const facts = Object.entries(tools).flatMap(([id, tool]) => [
  ...Object.entries(tool.facts).map(([attribute, fact]) => [`${id}.${attribute}`, fact]),
  ...(tool.gaps ?? []).map((gap) => [`${id}.gaps.${gap.id}`, gap]),
]);

test('the comparison facts are well formed', () => {
  assert.deepEqual(check(tools, today).errors, []);
});

test('no comparison fact is past its validity', (t) => {
  const { stale, soon } = check(tools, today);
  for (const line of soon) t.diagnostic(`to read again within ${WARN_DAYS} days: ${line}`);
  if (process.env.COMPARISONS_STALE === 'warn') {
    for (const line of stale) t.diagnostic(`past its validity: ${line}`);
    return;
  }
  assert.deepEqual(stale, [], 'Read these facts again at their source, as src/data/comparisons/WATCH.md says, then set `checked` to that day');
});

test('Elabora has a fact for every row a comparison can show, and its gaps', () => {
  for (const attribute of ATTRIBUTES) assert.ok(tools.elabora.facts[attribute], `elabora.${attribute}`);
  assert.ok(tools.elabora.gaps.length >= 1);
});

test('each compared tool has at least the facts of the overview’s first columns', () => {
  for (const [id, tool] of Object.entries(tools)) {
    if (tool.role === 'requirement') continue;
    for (const attribute of ['price', 'delivery']) assert.ok(tool.facts[attribute], `${id}.${attribute}`);
  }
});

test('the French values follow French typography (as typo.mjs does for pages)', () => {
  for (const [where, fact] of facts) {
    assert.doesNotMatch(fact.fr, / [?!:;»%]/, `${where}: a no-break space before ? ! : ; » %`);
    assert.doesNotMatch(fact.fr, /« /, `${where}: a no-break space after «`);
    assert.doesNotMatch(fact.fr, /\d \d{3}\b|\d [$€]/, `${where}: a narrow no-break space in thousands, a no-break space before $ and €`);
    assert.doesNotMatch(fact.fr, /\p{L}'\p{L}/u, `${where}: the typographic apostrophe ’`);
  }
});

test('Elabora’s own facts cite its public pages', () => {
  for (const [where, fact] of facts.filter(([w]) => w.startsWith('elabora.'))) assert.match(fact.source, /^https:\/\/elabora\.studio\//, where);
});

test('the rules: a fact ends after its validity, is announced before, and is never dated in the future', () => {
  const day = (offset) => new Date(Date.parse('2026-11-05T12:00:00Z') + offset * 86_400_000).toISOString().slice(0, 10);
  const tool = (attribute, checked) => ({ elabora: { name: 'E', short: 'E', vendor: 'E', url: 'https://e.example', facts: { [attribute]: { en: 'x', fr: 'x', source: 'https://e.example', checked } } } });
  const now = new Date('2026-11-05T12:00:00Z');
  assert.equal(check(tool('price', day(-(VALIDITY.price - 1))), now).stale.length, 0);
  assert.equal(check(tool('price', day(-(VALIDITY.price + 1))), now).stale.length, 1);
  assert.equal(check(tool('delivery', day(-(VALIDITY.format + 1))), now).stale.length, 1);
  assert.equal(check(tool('platforms', day(-(VALIDITY.platform - 10))), now).soon.length, 1);
  assert.equal(check(tool('ai', day(1)), now).errors.length, 0, 'a day ahead of UTC is today somewhere');
  assert.equal(check(tool('ai', day(2)), now).errors.length, 1);
  assert.equal(check(tool('nonsense', day(0)), now).errors.length, 1);
});
