import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import fs from "node:fs";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const lib = require("../public/demos/googlecleaner/lib.js");

function mockDemo() {
  const pending = [];
  const context = vm.createContext({ GCLib: lib, setTimeout: (fn) => { pending.push(fn); return pending.length; } });
  vm.runInContext(fs.readFileSync(new URL("../public/demos/googlecleaner/mock-adapter.js", import.meta.url), "utf8"), context);
  return { adapter: context.GoogleCleanerDemo, tick: () => pending.shift()?.() };
}

test("sample reads are fictional, deterministic, and reject mutations", async () => {
  const { adapter } = mockDemo();
  assert.equal((await adapter.drive("about?fields=user")).user.emailAddress, "alex@example.com");
  const { files } = await adapter.drive("files?q=anything");
  assert.equal(files.length, 7);
  assert.ok(files.some((file) => file.mimeType === lib.MIME_BY_FILTER.folder));
  assert.ok(lib.summarizeSize(files).unknownCount > 0);
  const recent = lib.filterFiles(files, { type: "all", search: "", dateRange: lib.computeDateRange("7d", {}, adapter.now) });
  assert.equal(recent.length, 2);
  assert.equal(lib.sortFiles(files, "largest")[0].name, "Moodboard.png");
  await assert.rejects(adapter.drive("files/sample", { method: "PATCH" }), /mutations are disabled/);
});

test("confirmed snapshot is independent, one failure is reported, retry changes only failed item", async () => {
  const { adapter, tick } = mockDemo();
  const send = adapter.chrome.runtime.sendMessage;
  const items = [{ id: "sample-pdf", name: "Workshop handout.pdf" }, { id: "sample-doc-old", name: "Workshop notes" }];
  await send({ type: "startJob", account: "alex@example.com", items });
  items[0].id = "not-confirmed";
  tick(); tick();
  let { job } = await send({ type: "getJob" });
  assert.equal(job.status, "done");
  assert.equal(job.items[0].id, "sample-pdf");
  assert.equal(job.items[0].status, "failed");
  assert.equal(job.items[1].status, "ok");
  await send({ type: "retryFailed" }); tick();
  ({ job } = await send({ type: "getJob" }));
  assert.equal(job.items[0].status, "ok");
  assert.equal(job.items[0].attempts, 2);
  assert.equal(job.items[1].attempts, 1);
  assert.equal((await adapter.drive("files?")).files.length, 5);
});

test("disconnect pauses pending work and account mismatch prevents starting it", async () => {
  const { adapter, tick } = mockDemo();
  const send = adapter.chrome.runtime.sendMessage;
  const items = [{ id: "sample-pdf", name: "Workshop handout.pdf" }];
  assert.equal((await send({ type: "startJob", account: "other@example.com", items })).ok, false);
  await send({ type: "startJob", account: "alex@example.com", items });
  await send({ type: "disconnectJob" }); tick();
  let { job } = await send({ type: "getJob" });
  assert.equal(job.status, "paused_disconnected");
  assert.equal(job.items[0].status, "pending");
  await send({ type: "resumeJob" }); tick();
  ({ job } = await send({ type: "getJob" }));
  assert.equal(job.status, "done");
});
