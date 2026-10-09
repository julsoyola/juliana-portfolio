export type CanvasLayer = {
  id: string;
  name: string;
  type: "RECTANGLE" | "FRAME" | "GROUP";
  hidden?: boolean;
  children: CanvasLayer[];
};

export type CleanupAction = "hidden" | "empty" | "groups" | "all";

export function createInitialCanvas(): CanvasLayer[] {
  return [
    { id: "group-3", name: "Group 3", type: "GROUP", children: [
      { id: "group-2", name: "Group 2", type: "GROUP", children: [
        { id: "group-1", name: "Group 1", type: "GROUP", children: [
          { id: "rectangle-5", name: "Rectangle 5", type: "RECTANGLE", children: [] },
        ] },
      ] },
    ] },
    { id: "iphone", name: "iPhone 17 - 1", type: "FRAME", children: [] },
    { id: "twitter", name: "Twitter post - 1", type: "FRAME", children: [] },
    { id: "rectangle-3", name: "Rectangle 3", type: "RECTANGLE", hidden: true, children: [] },
    { id: "rectangle-4", name: "Rectangle 4", type: "RECTANGLE", hidden: true, children: [] },
    { id: "rectangle-2", name: "Rectangle 2", type: "RECTANGLE", children: [] },
    { id: "rectangle-1", name: "Rectangle 1", type: "RECTANGLE", children: [] },
  ];
}

export function cleanCanvas(layers: CanvasLayer[], action: CleanupAction) {
  let removed = 0;
  function visit(nodes: CanvasLayer[]): CanvasLayer[] {
    return nodes.flatMap((node): CanvasLayer[] => {
      if ((action === "hidden" || action === "all") && node.hidden) {
        removed++;
        return [];
      }
      const children = visit(node.children);
      if ((action === "empty" || action === "all") && node.type !== "RECTANGLE" && children.length === 0) {
        removed++;
        return [];
      }
      if ((action === "groups" || action === "all") && node.type === "GROUP" && children.length === 1) {
        removed++;
        return children;
      }
      return [{ ...node, children }];
    });
  }
  return { layers: visit(layers), removed };
}

export function formatLayerTree(layers: CanvasLayer[], indent = ""): string {
  return layers.map((node) => {
    const icon = node.hidden ? "[x]" : node.type === "GROUP" ? "[~]" : "[ ]";
    const state = node.hidden ? " (Hidden)" : node.type === "FRAME" && !node.children.length ? " (Empty Frame)" : "";
    return `${indent}${icon} ${node.name}${state}` +
      (node.children.length ? `\n${formatLayerTree(node.children, indent + "  ")}` : "");
  }).join("\n");
}

export function timedCleanCanvas(layers: CanvasLayer[], action: CleanupAction) {
  const start = performance.now();
  const result = cleanCanvas(layers, action);
  return { ...result, elapsed: (performance.now() - start).toFixed(2) };
}
