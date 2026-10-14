import type { CSSProperties } from "react";
import type { ArchiveTheme } from "./types";

type ThemeStyle = CSSProperties & Record<`--archive-${string}`, string>;

// Archive palettes follow the supplied reference hex colors.
export const themes: Record<ArchiveTheme, ThemeStyle> = {
  portfolio: {},
  macwipe: {
    "--archive-ink": "#493d3d", "--archive-orange": "#ffb5a7",
    "--archive-yellow": "#f4d9a6", "--archive-pink": "#ffb5a7",
    "--archive-sage": "#b7dcd6", "--archive-blue": "#d6e4fa",
    "--archive-background": "#fef6d6", "--archive-panel": "#fff8ec",
    "--archive-muted": "#62504a", "--archive-selected": "#f4d9a6",
    "--archive-tint": "#ffe4d9", "--archive-label": "#823f30",
    "--archive-focus": "#823f30", "--archive-rule": "#bc9988",
    "--archive-reflection": "#e5efdf", "--archive-link": "#823f30",
  },
  googlecleaner: {
    "--archive-ink": "#302b3d", "--archive-orange": "#e9b9c7",
    "--archive-yellow": "#c4bcdd", "--archive-pink": "#e5dff0",
    "--archive-sage": "#a7b8e8", "--archive-blue": "#a7b8e8",
    "--archive-background": "#f7f0e3", "--archive-panel": "#f7f3e9",
    "--archive-muted": "#625869", "--archive-selected": "#e5dff0",
    "--archive-tint": "#e5dff0", "--archive-label": "#584779",
    "--archive-focus": "#1b4fd1", "--archive-rule": "#898390",
    "--archive-reflection": "#e5dff0", "--archive-link": "#584779",
  },
  figmacleaner: {
    "--archive-ink": "#302820", "--archive-orange": "#de8948",
    "--archive-yellow": "#f9d58d", "--archive-pink": "#e07970",
    "--archive-sage": "#bbab47", "--archive-blue": "#cdd7d8",
    "--archive-background": "#fef6d6", "--archive-panel": "#fff8ec",
    "--archive-muted": "#625045", "--archive-selected": "#f4d9a6",
    "--archive-tint": "#f9e6d3", "--archive-label": "#7c3c2b",
    "--archive-focus": "#7c3c2b", "--archive-rule": "#bca28a",
    "--archive-reflection": "#e9edd9", "--archive-link": "#7c3c2b",
  },
};
