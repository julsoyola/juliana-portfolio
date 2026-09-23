"use client";

import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--forest)]/20 bg-[var(--paper)] px-4 py-3 sm:px-5 sm:py-4 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between md:px-2">
        <a
          href="#top"
          className="font-display flex items-center gap-2 text-lg font-semibold text-[var(--forest)] sm:text-2xl"
        >
          <span aria-hidden="true" className="text-2xl text-[var(--terracotta)]">✳</span>
          <span className="hidden sm:inline">Juliana Oyola-Pabon</span>
          <span className="sm:hidden">Juliana</span>
        </a>

        <div className="flex items-center gap-4 lg:gap-6">
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a className="nav-link" href="#experience">
              experience
            </a>
            <a className="nav-link" href="#resume">
              resume
            </a>
            <a className="nav-link" href="#skills">
              skills
            </a>
            <a className="nav-link" href="#work">
              work
            </a>
            <a className="nav-link" href="#contact">
              contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-[var(--forest)] bg-[var(--mustard)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--terracotta)] hover:text-[var(--paper)] lg:inline-flex"
          >
            let&apos;s connect
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="border border-[var(--forest)]/40 bg-[var(--paper)] px-3.5 py-1.5 text-sm font-semibold text-[var(--forest)] md:hidden"
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="mx-auto mt-4 flex max-w-7xl flex-col gap-3 border border-[var(--forest)]/20 bg-[var(--cream)] p-5 md:hidden"
        >
          {[
            ["experience", "#experience"],
            ["resume", "#resume"],
            ["skills", "#skills"],
            ["work", "#work"],
            ["contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b border-[var(--forest)]/10 py-2 font-semibold text-[var(--forest)] last:border-0"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}