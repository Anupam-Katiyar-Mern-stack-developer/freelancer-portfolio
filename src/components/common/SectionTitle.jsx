import { motion } from "motion/react";

const SectionTitle = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}) => {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={
        isLeft
          ? "max-w-2xl text-left"
          : "mx-auto max-w-3xl text-center"
      }
    >
      <span className="mb-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
        {eyebrow}
      </span>

      <h2 className="font-['Space_Grotesk'] text-3xl font-bold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
        {title}{" "}

        {highlight && (
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-5 font-[Manrope] text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;