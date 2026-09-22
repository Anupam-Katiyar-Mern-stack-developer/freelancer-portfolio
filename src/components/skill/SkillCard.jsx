import { motion } from "motion/react";

import { iconMap } from "../../utils/iconMap";

const SkillCard = ({ skill, index }) => {
  const Icon = iconMap[skill.icon];

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 30,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-slate-200
        bg-white
        p-5
        shadow-[0_15px_45px_rgba(15,23,42,0.04)]
        transition
        duration-300

        hover:border-blue-200
        hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)]

        sm:p-6
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-blue-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      <div className="relative">

        <div className="mb-6 flex items-start justify-between">

          {/* Icon */}
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-100
              bg-slate-50
              text-2xl
              text-slate-700
              transition
              duration-300

              group-hover:scale-110
              group-hover:border-blue-100
              group-hover:bg-blue-50
              group-hover:text-blue-600
            "
          >
            {Icon && <Icon />}
          </div>

          {/* Level */}
          <span
            className="
              rounded-full
              border
              border-slate-200
              bg-white
              px-3
              py-1
              font-[Manrope]
              text-[10px]
              font-bold
              uppercase
              tracking-wide
              text-slate-400
            "
          >
            {skill.level}
          </span>
        </div>

        <h3 className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-slate-950">
          {skill.name}
        </h3>

        <p className="mt-1 font-[Manrope] text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
          {skill.category}
        </p>

        {/* Bottom accent */}
        <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-0 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
        </div>

      </div>
    </motion.article>
  );
};

export default SkillCard;