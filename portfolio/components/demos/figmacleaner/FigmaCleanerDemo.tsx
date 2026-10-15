"use client";

import { useState } from "react";
import { cleanCanvas, createDemoCanvas, type CanvasLayer, type CleanupAction } from "./figmaCleanerCanvas";
import FigmaCleanerPlugin, { cleanupMessage } from "./FigmaCleanerPlugin";
import styles from "./FigmaCleanerDemo.module.css";

function LayerTree({ layers }: { layers: CanvasLayer[] }) {
  return <ul className={styles.layers}>{layers.map(layer => <li key={layer.id}>
    <span className={layer.hidden ? styles.hidden : undefined}><span aria-hidden="true">{layer.type === "GROUP" ? "◇" : layer.type === "FRAME" ? "#" : "□"}</span>{layer.name}{layer.hidden && <small>Hidden</small>}</span>
    {layer.children.length > 0 && <LayerTree layers={layer.children} />}
  </li>)}</ul>;
}

function visibleShapes(layers: CanvasLayer[]): CanvasLayer[] {
  return layers.flatMap(layer => layer.hidden ? [] : layer.type === "GROUP" ? visibleShapes(layer.children) : [layer]);
}

export default function FigmaCleanerDemo() {
  const [layers, setLayers] = useState(createDemoCanvas);
  const [status, setStatus] = useState("> ready to scan page");
  function clean(action: CleanupAction) {
    const result = cleanCanvas(layers, action);
    setLayers(result.layers);
    setStatus(cleanupMessage(action, result.removed));
  }
  return <section className={styles.editor} aria-label="Interactive FigmaCleaner demo">
    <header className={styles.editorBar}><span>FigmaCleaner — Interactive Test</span><button type="button" onClick={() => { setLayers(createDemoCanvas()); setStatus("> ready to scan page"); }}>Reset demo</button></header>
    <div className={styles.workspace}>
      <aside className={styles.sidebar} aria-label="Sample layer hierarchy"><div className={styles.pages}><strong>Pages</strong><span>Page 1</span></div><strong className={styles.layerHeading}>Layers</strong><LayerTree layers={layers} /></aside>
      <div className={styles.canvas}>
        <div className={styles.shapes} aria-label="Sample canvas objects">{visibleShapes(layers).map(layer => <div key={layer.id} data-layer={layer.id} className={`${styles.shape} ${layer.type === "FRAME" ? styles.frame : styles.rectangle}`}><span>{layer.name}</span></div>)}</div>
        <div className={styles.floatingPlugin}><FigmaCleanerPlugin status={status} onClean={clean} /></div>
        <div className={styles.toolbar} aria-hidden="true"><span>↖</span><span>#</span><span>□</span><span>◇</span><span>T</span><span>○</span></div>
      </div>
    </div>
  </section>;
}
