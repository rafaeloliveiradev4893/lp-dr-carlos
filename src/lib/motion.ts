import type { Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export function fadeUp(reduce: boolean | null): Variants {
  const calm = Boolean(reduce);
  return {
    hidden: { opacity: 0, y: calm ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: calm ? 0.2 : 0.65, ease: easeOut },
    },
  };
}

export function stagger(reduce: boolean | null): Variants {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.04,
      },
    },
  };
}
