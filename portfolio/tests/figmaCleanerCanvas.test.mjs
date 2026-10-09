import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = fs.readFileSync(new URL('../components/figmaCleanerCanvas.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 },
}).outputText;
const exportsObject = {};
vm.runInNewContext(compiled, { exports: exportsObject, performance });
const { createInitialCanvas, cleanCanvas, formatLayerTree } = exportsObject;
const names = (layers) => Array.from(layers, (layer) => layer.name);

test('clean all retains the three visible rectangles and counts every removed wrapper', () => {
  const initial = createInitialCanvas();
  const snapshot = JSON.stringify(initial);
  const result = cleanCanvas(initial, 'all');
  assert.deepEqual(names(result.layers), ['Rectangle 5', 'Rectangle 2', 'Rectangle 1']);
  assert.equal(result.removed, 7);
  assert.equal(JSON.stringify(initial), snapshot);
  assert.equal(cleanCanvas(result.layers, 'all').removed, 0);
});

test('individual actions preserve unrelated layer types and combine to the same result', () => {
  const layers = createInitialCanvas();
  const hidden = cleanCanvas(layers, 'hidden');
  assert.equal(hidden.removed, 2);
  assert(names(hidden.layers).includes('Group 3'));
  assert(names(hidden.layers).includes('iPhone 17 - 1'));
  const empty = cleanCanvas(hidden.layers, 'empty');
  assert.equal(empty.removed, 2);
  const groups = cleanCanvas(empty.layers, 'groups');
  assert.equal(groups.removed, 3);
  assert.deepEqual(names(groups.layers), ['Rectangle 5', 'Rectangle 2', 'Rectangle 1']);
});

test('empty cleanup cascades and multi-child groups retain their hierarchy', () => {
  const layers = [{ id: 'outer', name: 'Outer', type: 'GROUP', children: [
    { id: 'inner', name: 'Inner', type: 'FRAME', children: [] },
  ] }];
  assert.equal(cleanCanvas(layers, 'empty').removed, 2);
  const group = [{ id: 'group', name: 'Group', type: 'GROUP', children: [
    { id: 'a', name: 'A', type: 'RECTANGLE', children: [] },
    { id: 'b', name: 'B', type: 'RECTANGLE', children: [] },
  ] }];
  assert.equal(cleanCanvas(group, 'groups').removed, 0);
  assert.equal(cleanCanvas(group, 'groups').layers[0].children.length, 2);
  assert(formatLayerTree(createInitialCanvas()).includes('      [ ] Rectangle 5'));
});
