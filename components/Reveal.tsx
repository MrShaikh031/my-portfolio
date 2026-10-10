"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const initialX =
    direction === "left" ? -40 : direction === "right" ? 40 : 0;

  const initialY = direction === "up" ? 25 : 0;

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              x: initialX,
              y: initialY,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.15,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}