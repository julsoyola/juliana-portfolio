"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type HeroParallaxProps = {
  children: ReactNode;
};

export default function HeroParallax({
  children,
}: HeroParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  return (
    <motion.div
      ref={containerRef}
      style={{ y: reduceMotion ? 0 : y }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}