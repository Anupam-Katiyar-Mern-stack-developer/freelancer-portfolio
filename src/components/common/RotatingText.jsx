import {
  AnimatePresence,
  motion,
} from "motion/react";

import { useEffect, useState } from "react";

const RotatingText = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [items]);

  if (!items.length) return null;

  return (
    <span className="relative inline-flex min-h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[activeIndex]}
          initial={{
            y: 25,
            opacity: 0,
            filter: "blur(6px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            y: -25,
            opacity: 0,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-semibold text-blue-600"
        >
          {items[activeIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;