import {
  motion,
  useReducedMotion,
} from "motion/react";

import {
  animations,
  animationTransition,
} from "../../utils/animations";

const Reveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={animations[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        ...animationTransition,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;