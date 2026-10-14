"use client";

import { useEffect, useState } from "react";
import styles from "./CaseStudyArchive.module.css";

export default function ArchiveNavigation({ sections, name }: { sections: [string, string][]; name: string }) {
  const [active, setActive] = useState<string>("overview");

  useEffect(() => {
    const targets = sections.map(([id]) => document.getElementById(id));
    let frame = 0;
    const update = () => {
      frame = 0;
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
        const linkedTarget = targets.find(target => target && `#${target.id}` === window.location.hash);
        const top = linkedTarget?.getBoundingClientRect().top;
        setActive(top !== undefined && top >= 0 && top < window.innerHeight ? linkedTarget!.id : "outcome");
        return;
      }
      const visible = targets.filter(target => target && target.getBoundingClientRect().top <= window.innerHeight * 0.35);
      const nearestTop = visible.at(-1)?.getBoundingClientRect().top;
      const currentRow = visible.filter(target => nearestTop !== undefined && target && Math.abs(target.getBoundingClientRect().top - nearestTop) < 4);
      setActive(previous => currentRow.some(target => target?.id === previous) ? previous : currentRow[0]?.id ?? "overview");
    };
    const scheduleUpdate = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sections]);

  return <nav className={styles.archiveNav} aria-label={`${name} case study sections`}>
    {sections.map(([id, label]) => <a key={id} href={`#${id}`}
      aria-current={active === id ? "location" : undefined}
      onClick={() => setActive(id)}>
      <span className={styles.folder} aria-hidden="true" />{label}
    </a>)}
  </nav>;
}
