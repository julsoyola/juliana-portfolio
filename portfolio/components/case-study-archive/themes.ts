import type { CSSProperties } from "react";
import type { ArchiveTheme } from "./types";

type ThemeStyle = CSSProperties & Record<`--archive-${string}`, string>;

// App colors come from MacWipe theme.css and GoogleCleaner popup.css.
export const themes: Record<ArchiveTheme, ThemeStyle> = {
  portfolio: {},
  macwipe: {
    "--archive-ink": "#542b45", "--archive-orange": "#d7a6ba",
    "--archive-yellow": "#eaccd7", "--archive-pink": "#f0d7df",
    "--archive-sage": "#9bb5a4", "--archive-blue": "#d7c9dd",
    "--archive-background": "#fff4eb", "--archive-panel": "#fff6ec",
    "--archive-muted": "#65465a", "--archive-selected": "#eaccd7",
    "--archive-tint": "#f2dde4", "--archive-label": "#713553",
    "--archive-focus": "#713553", "--archive-rule": "#b9899f",
    "--archive-reflection": "#e8eee4", "--archive-link": "#713553",
  },
  googlecleaner: {
    "--archive-ink": "#302b3d", "--archive-orange": "#c4bcdd",
    "--archive-yellow": "#c4bcdd", "--archive-pink": "#e5dff0",
    "--archive-sage": "#a7b8e8", "--archive-blue": "#a7b8e8",
    "--archive-background": "#f8f6ff", "--archive-panel": "#f7f3e9",
    "--archive-muted": "#625869", "--archive-selected": "#e5dff0",
    "--archive-tint": "#e5dff0", "--archive-label": "#584779",
    "--archive-focus": "#1b4fd1", "--archive-rule": "#898390",
    "--archive-reflection": "#e5dff0", "--archive-link": "#584779",
  },
};
