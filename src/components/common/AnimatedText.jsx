import { motion } from "motion/react";

const AnimatedText = ({ text, className = "" }) => {
  const words = text?.split(" ") || [];

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden"
        >
          <motion.span
            initial={{
              y: "110%",
              opacity: 0,
            }}
            animate={{
              y: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;