"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

export default function Reveal({
  children,
}: {
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="motion-reduce:!opacity-100 motion-reduce:!transform-none"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.42,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}