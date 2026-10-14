"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type ResumeMotionProps = {
  children: ReactNode;
};

export default function ResumeMotion({ children }: ResumeMotionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 20%"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.35, 1, 1]);

  const y = useSpring(rawY, {
    stiffness: 90,
    damping: 22,
  });

  return (
    <motion.div
      ref={ref}
      className="motion-reduce:!opacity-100 motion-reduce:!transform-none"
      style={{ y, opacity: rawOpacity }}
    >
      {children}
    </motion.div>
  );
}