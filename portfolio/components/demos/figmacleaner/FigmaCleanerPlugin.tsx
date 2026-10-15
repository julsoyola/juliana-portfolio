"use client";

import { useState } from "react";
import { cleanCanvas, createDemoCanvas, type CleanupAction } from "./figmaCleanerCanvas";
import styles from "./FigmaCleanerDemo.module.css";

const actions = [
  { label: "[x] Remove Hidden Layers", action: "hidden", result: "removed", subject: "hidden layer(s)" },
  { label: "[ ] Delete Empty Containers", action: "empty", result: "removed", subject: "empty container(s)" },
  { label: "[~] Unwrap Single-Child Groups", action: "groups", result: "unwrapped", subject: "single-child group(s)" },
] as const;

export function cleanupMessage(action: CleanupAction, count: number) {
  const item = actions.find(item => item.action === action)!;
  return `> ${item.result} ${count} ${item.subject}`;
}

export default function FigmaCleanerPlugin({ status, onClean }: {
  status?: string; onClean?: (action: CleanupAction) => void;
}) {
  const [layers, setLayers] = useState(createDemoCanvas);
  const [previewStatus, setPreviewStatus] = useState("> ready to scan page");
  function clean(action: CleanupAction) {
    if (onClean) return onClean(action);
    const result = cleanCanvas(layers, action);
    setLayers(result.layers);
    setPreviewStatus(cleanupMessage(action, result.removed));
  }
  return <div className={styles.plugin} aria-label="FigmaCleaner plugin preview">
    <div className={styles.pluginBar}><span><span aria-hidden="true">🍓</span> figmaCleaner</span><span aria-hidden="true">×</span></div>
    <div className={styles.pluginBody}>
      <strong>figmacleaner_v1.0</strong>
      <div className={styles.actions}>{actions.map(item => <button type="button" key={item.action} onClick={() => clean(item.action)}>{item.label}</button>)}</div>
      <p className={styles.status} role="status" aria-live="polite" aria-atomic="true">{status ?? previewStatus}</p>
    </div>
  </div>;
}
