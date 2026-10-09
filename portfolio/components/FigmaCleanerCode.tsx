"use client";

import { useState } from "react";

const snippet = `// Asynchronous Non-Blocking Event Loop in code.ts
figma.ui.onmessage = async (msg: PluginMessage) => {
  try {
    if (msg.type === 'clean-all') {
      const removedHidden = purgeHiddenLayers(figma.currentPage);
      const removedContainers = deleteEmptyContainers(figma.currentPage);
      const unwrappedGroups = unwrapSingleChildGroups(figma.currentPage);

      figma.ui.postMessage({
        type: 'status',
        message: \`Purged \${removedHidden + removedContainers + unwrappedGroups} items.\`
      });
    }
  } catch (err) {
    figma.ui.postMessage({ type: 'error', message: 'Canvas traversal failed' });
  }
};`;

const tokens = snippet.split(/(\/\/[^\n]*|'[^']*'|`[^`]*`|\b(?:async|try|if|const|catch|PluginMessage)\b)/g);

export default function FigmaCleanerCode() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopyStatus("Copied to clipboard");
    } catch {
      setCopyStatus("Copy unavailable. Select the code to copy it.");
    }
  }
  return (
    <div className="mt-8 min-w-0 overflow-hidden rounded-2xl border border-[#2C2C2C] bg-[#1E1E1E] text-[#ededed] shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#383838] px-5 py-4 font-mono text-xs">
        <span className="text-[#b5b5b5]">code.ts / TypeScript architecture example</span>
        <button type="button" onClick={copy} className="min-h-11 rounded-lg border border-[#383838] px-4 py-2 transition-colors hover:bg-[#383838] focus-visible:outline-[#86efac]">Copy code</button>
      </div>
      <pre tabIndex={0} aria-label="FigmaCleaner asynchronous message handler" className="overflow-x-auto p-5 font-mono text-xs leading-7 sm:p-8 sm:text-sm">
        <code>{tokens.map((token, index) => (
          <span key={index} className={token.startsWith("//") ? "text-[#a3a3a3]" : token.startsWith("'") || token.startsWith("`") ? "text-[#86efac]" : /^(async|try|if|const|catch|PluginMessage)$/.test(token) ? "text-[#e9a0ad]" : undefined}>{token}</span>
        ))}</code>
      </pre>
      <p role="status" aria-live="polite" className="px-5 pb-4 text-xs text-[#86efac]">{copyStatus}</p>
    </div>
  );
}
