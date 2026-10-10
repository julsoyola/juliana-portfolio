"use strict";

// Fictional, memory-only adapter. Does not call fetch, OAuth, or real Chrome APIs.
globalThis.GoogleCleanerDemo = (() => {
  const now = new Date(2026, 9, 9, 12).getTime();
  const account = "alex@example.com";
  const mime = GCLib.MIME_BY_FILTER;
  const files = [
    { id: "sample-folder", name: "Workshop archive", mimeType: mime.folder, modifiedTime: "2023-06-15T12:00:00Z" },
    { id: "sample-doc-old", name: "Workshop notes", mimeType: mime.doc, modifiedTime: "2024-02-12T12:00:00Z" },
    { id: "sample-pdf", name: "Workshop handout.pdf", mimeType: mime.pdf, size: "2097152", modifiedTime: "2026-01-15T12:00:00Z" },
    { id: "sample-image", name: "Moodboard.png", mimeType: "image/png", size: "8388608", modifiedTime: "2026-06-01T12:00:00Z" },
    { id: "sample-slide", name: "Workshop presentation", mimeType: mime.slide, modifiedTime: "2026-09-22T12:00:00Z" },
    { id: "sample-sheet", name: "Workshop budget", mimeType: mime.sheet, size: "32768", modifiedTime: "2026-10-05T12:00:00Z" },
    { id: "sample-doc-new", name: "Current plan", mimeType: mime.doc, modifiedTime: "2026-10-08T12:00:00Z" },
  ];
  const listeners = new Set();
  let job = null;
  let failureShown = false;
  let timer = null;
  const moved = new Set();
  const clone = (value) => value == null ? value : JSON.parse(JSON.stringify(value));
  function publish() {
    for (const listener of listeners) listener({ cleanupJob: { newValue: clone(job) } }, "local");
  }
  function schedule() {
    if (timer !== null || !job || job.status !== "processing") return;
    timer = setTimeout(() => {
      timer = null;
      if (!job || job.status !== "processing") return;
      const item = GCLib.nextPendingItem(job);
      if (!item) return;
      // The first attempted item fails once, whichever files the visitor chooses.
      const ok = failureShown;
      failureShown = true;
      GCLib.markItemResult(job, item.id, ok, ok ? null : "Simulated temporary failure. Choose Retry failed.");
      if (ok) moved.add(item.id);
      publish();
      schedule();
    }, 500);
  }
  const chrome = {
    runtime: {
      lastError: null,
      getManifest: () => ({ oauth2: { client_id: "sample-only-not-a-credential" } }),
      async sendMessage(message) {
        switch (message.type) {
          case "getJob": return { ok: true, job: clone(job) };
          case "startJob":
            if (GCLib.isJobActive(job)) return { ok: false, error: "A simulated job is already active." };
            if (message.account !== account) return { ok: false, error: "Sample account mismatch." };
            job = GCLib.createJob({ id: "sample-job", account, items: clone(message.items) });
            failureShown = false;
            publish(); schedule();
            return { ok: true, job: clone(job) };
          case "retryFailed":
            if (!job || GCLib.isJobActive(job)) return { ok: false, error: "Finish or resume the simulated job first." };
            GCLib.resetFailedItems(job); publish(); schedule();
            return { ok: true, job: clone(job) };
          case "disconnectJob":
            if (GCLib.isJobActive(job)) { job.status = "paused_disconnected"; publish(); }
            return { ok: true };
          case "resumeJob":
            if (!job || job.account !== account) return { ok: false, error: "Connect the same sample account." };
            job.status = GCLib.nextPendingItem(job) ? "processing" : "done";
            publish(); schedule(); return { ok: true, job: clone(job) };
          case "dismissJob":
            if (GCLib.isJobActive(job)) return { ok: false, error: "Finish the simulated job first." };
            job = null; publish(); return { ok: true };
          default: throw new Error("Unsupported mock operation.");
        }
      },
    },
    identity: {
      getAuthToken: (_options, callback) => callback("sample-token-not-a-credential"),
      removeCachedAuthToken: (_options, callback) => callback(),
      clearAllCachedAuthTokens: (callback) => callback(),
    },
    storage: { onChanged: { addListener: (listener) => listeners.add(listener) } },
  };
  async function drive(path, options = {}) {
    if (options.method && options.method !== "GET") throw new Error("Demo Drive mutations are disabled.");
    if (path.startsWith("about?")) return { user: { emailAddress: account } };
    if (path.startsWith("files?")) return { files: clone(files.filter((file) => !moved.has(file.id))) };
    throw new Error("Unsupported mock Drive read.");
  }
  return { now, chrome, drive };
})();
