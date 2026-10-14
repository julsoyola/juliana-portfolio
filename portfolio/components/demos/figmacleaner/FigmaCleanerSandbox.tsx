"use client";

import { useRef, useState } from "react";
import { timedCleanCanvas, createInitialCanvas, type CanvasLayer, type CleanupAction } from "./figmaCleanerCanvas";

const actions: { label: string; action: CleanupAction }[] = [
  { label: "[x] Remove Hidden Layers", action: "hidden" },
  { label: "[ ] Delete Empty Containers", action: "empty" },
  { label: "[~] Unwrap Single-Child Groups", action: "groups" },
  { label: "⚡ Clean All Canvas", action: "all" },
];

const additions = [
  { label: "+ Add Hidden Layer", type: "hidden" },
  { label: "+ Add Empty Frame", type: "empty" },
  { label: "+ Add Nested Group", type: "group" },
] as const;

function LayerTree({ layers }: { layers: CanvasLayer[] }) {
  return (
    <ul className="space-y-2">
      {layers.map((node) => (
        <li key={node.id}>
          <div className={`flex flex-wrap gap-x-2 rounded-md px-2 py-2 ${node.hidden ? "text-[#a3a3a3]" : "text-[#e5e5e5]"}`}>
            <span aria-hidden="true" className={node.hidden ? "text-[#e9a0ad]" : "text-[#86efac]"}>
              {node.hidden ? "[x]" : node.type === "GROUP" ? "[~]" : "[ ]"}
            </span>
            <span className="break-all">{node.name}</span>
            {node.hidden && <span className="text-[10px] uppercase tracking-wide">Hidden</span>}
            {node.type === "FRAME" && node.children.length === 0 && <span className="text-[10px] uppercase tracking-wide text-[#a3a3a3]">Empty Frame</span>}
            {node.type === "GROUP" && <span className="text-[10px] uppercase tracking-wide text-[#a3a3a3]">Nested Group</span>}
          </div>
          {node.children.length > 0 && (
            <div className="ml-3 border-l border-[#383838] pl-2">
              <LayerTree layers={node.children} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function FigmaCleanerSandbox() {
  const [layers, setLayers] = useState(createInitialCanvas);
  const [status, setStatus] = useState("> ready to scan page");
  const nextId = useRef(0);

  function clean(action: CleanupAction) {
    const result = timedCleanCanvas(layers, action);
    setLayers(result.layers);
    setStatus(`> Cleaned ${result.removed} redundant layers in ${result.elapsed}ms`);
  }

  function add(type: "hidden" | "empty" | "group") {
    const id = `added-${++nextId.current}`;
    const layer: CanvasLayer = type === "group"
      ? { id, name: `Nested Group ${nextId.current}`, type: "GROUP", children: [
          { id: `${id}-inner`, name: "Inner Group", type: "GROUP", children: [
            { id: `${id}-rectangle`, name: `Rectangle ${nextId.current + 5}`, type: "RECTANGLE", children: [] },
          ] },
        ] }
      : { id, name: `${type === "hidden" ? "Hidden Layer" : "Empty Frame"} ${nextId.current}`, type: type === "hidden" ? "RECTANGLE" : "FRAME", hidden: type === "hidden", children: [] };
    setLayers((current) => [...current, layer]);
    setStatus(`> Added ${layer.name}`);
  }

  return (
    <section aria-label="Interactive FigmaCleaner canvas simulator" className="overflow-hidden rounded-2xl border border-[#2C2C2C] bg-[#1E1E1E] font-mono text-[#ededed] shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2C2C2C] px-5 py-4 text-xs">
        <span className="uppercase tracking-[0.16em] text-[#86efac]">Interactive sandbox</span>
        <span className="text-[#a3a3a3]">Simulated canvas · changes stay in this demo</span>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="min-w-0 border-b border-[#2C2C2C] p-5 sm:p-8 lg:border-r lg:border-b-0">
          <h3 className="mb-5 text-xs uppercase tracking-[0.16em] text-[#a3a3a3]">Layers / Test Canvas</h3>
          <div className="max-h-[480px] overflow-y-auto text-xs leading-6 sm:text-sm">
            {layers.length ? <LayerTree layers={layers} /> : <p className="text-[#a3a3a3]">No layers. Add a layer to keep experimenting.</p>}
          </div>
        </div>
        <div className="min-w-0 bg-[#252525]/50 p-5 sm:p-8">
          <div className="overflow-hidden rounded-2xl border border-[#383838] bg-[#1E1E1E] shadow-lg">
            <div className="flex flex-wrap items-center gap-4 border-b border-[#383838] px-4 py-4">
              <div aria-hidden="true" className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs sm:text-sm">figmaCleaner v1.0</span>
            </div>
            <div className="space-y-2 p-4">
              {actions.map(({ label, action }) => (
                <button key={action} type="button" onClick={() => clean(action)} className={`min-h-11 w-full rounded-lg border px-3 py-3 text-left text-xs leading-6 transition-colors focus-visible:outline-[#86efac] sm:text-sm ${action === "all" ? "border-[#86efac]/40 bg-[#86efac]/10 text-[#86efac] hover:bg-[#86efac]/20" : "border-[#383838] bg-[#252525] hover:border-[#86efac]/50 hover:bg-[#2c2c2c]"}`}>
                  {label}
                </button>
              ))}
            </div>
            <div className="flex items-start gap-3 border-t border-[#383838] px-4 py-4 text-xs leading-6 text-[#86efac]">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#86efac] motion-reduce:animate-none" />
              <p role="status" aria-live="polite" aria-atomic="true">{status}</p>
            </div>
          </div>
          <h3 className="mt-6 mb-3 text-xs uppercase tracking-[0.16em] text-[#a3a3a3]">Build your test canvas</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {additions.map(({ label, type }) => (
              <button key={label} type="button" onClick={() => add(type)} className="min-h-11 rounded-lg border border-[#383838] px-3 py-3 text-left text-xs transition-colors hover:bg-[#383838] focus-visible:outline-[#86efac]">{label}</button>
            ))}
            <button type="button" onClick={() => { setLayers(createInitialCanvas()); setStatus("> ready to scan page"); }} className="min-h-11 rounded-lg border border-[#383838] px-3 py-3 text-left text-xs transition-colors hover:bg-[#383838] focus-visible:outline-[#86efac]">↺ Reset Canvas</button>
          </div>
        </div>
      </div>
    </section>
  );
}
