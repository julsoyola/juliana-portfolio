import type { Project } from "@/content/projects/types";

export default function ProjectIllustration({ id }: { id: Project["id"] }) {
  return (
                    <div
                      aria-hidden="true"
                      className="relative mt-4 h-16 border-b border-[var(--forest)]/25"
                    >
                      {id === "macwipe" && (
                        <div className="absolute inset-x-4 top-2 h-10 rounded-md border-2 border-[var(--forest)]/60 p-2">
                          <div className="h-1.5 w-10 bg-[var(--terracotta)]/70" />
                          <div className="mt-2 grid grid-cols-3 gap-1">
                            <span className="h-3 bg-[var(--paper)]/70" />
                            <span className="h-3 bg-[var(--pink)]/70" />
                            <span className="h-3 bg-[var(--paper)]/70" />
                          </div>
                        </div>
                      )}
                      {id === "figmacleaner" && (
                        <div className="absolute inset-x-8 top-4 flex items-center justify-between">
                          <span className="h-3 w-3 rounded-full border-2 border-[var(--forest)]/70" />
                          <span className="h-px flex-1 bg-[var(--forest)]/60" />
                          <span className="h-3 w-3 rounded-full border-2 border-[var(--forest)]/70" />
                          <span className="h-px flex-1 bg-[var(--forest)]/60" />
                          <span className="h-3 w-3 rounded-full border-2 border-[var(--forest)]/70" />
                        </div>
                      )}
                      {id === "googlecleaner" && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 64 48"
                          className="absolute right-8 top-1 h-12 w-16 fill-[var(--paper)] stroke-[var(--forest)]/70"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="6" y="5" width="24" height="32" rx="4" />
                          <rect x="17" y="12" width="24" height="32" rx="4" />
                          <path d="M23 21h12M23 27h12M23 33h7" fill="none" />
                          <path d="m38 27 17 10-8 2-4 7z" />
                          <path d="m56 4 2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                        </svg>
                      )}
                      {id === "portfolio" && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 64 48"
                          className="absolute right-8 top-1 h-12 w-16 fill-none stroke-[var(--forest)]/70"
                          strokeWidth="2"
                        >
                          <path d="M14 18h36v22H14zM20 18v-6h24v6M20 27h24M20 34h10" />
                          <path d="m39 28 5-5 6 6-5 5zM44 23l3-3 6 6-3 3" />
                        </svg>
                      )}
                    </div>
  );
}
