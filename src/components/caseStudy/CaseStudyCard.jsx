import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiTarget,
  FiZap,
} from "react-icons/fi";

const CaseStudyCard = ({ caseStudy, index }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-slate-200
        bg-white
        shadow-[0_20px_70px_rgba(15,23,42,0.05)]
        transition
        duration-500

        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_35px_100px_rgba(37,99,235,0.12)]
      "
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

        {/* Image */}
        <div className="relative min-h-[270px] overflow-hidden bg-slate-100 lg:min-h-full">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            loading="lazy"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-top
              transition-transform
              duration-700

              group-hover:scale-105
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />

          <span
            className="
              absolute
              left-5
              top-5
              rounded-full
              border
              border-white/30
              bg-white/90
              px-4
              py-2
              font-[Manrope]
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.15em]
              text-slate-700
              backdrop-blur-lg
            "
          >
            {caseStudy.category}
          </span>

          <div className="absolute bottom-5 left-5">
            <p className="font-['Space_Grotesk'] text-5xl font-bold text-white/80">
              0{index + 1}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 lg:p-10">

          <h3
            className="
              font-['Space_Grotesk']
              text-2xl
              font-bold
              leading-tight
              tracking-[-0.04em]
              text-slate-950

              sm:text-3xl
            "
          >
            {caseStudy.title}
          </h3>

          <div className="mt-8 space-y-6">

            {/* Problem */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                <FiTarget />
              </div>

              <div>
                <p className="font-[Manrope] text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">
                  Problem
                </p>

                <p className="mt-1 font-[Manrope] text-sm leading-7 text-slate-600">
                  {caseStudy.problem}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <FiZap />
              </div>

              <div>
                <p className="font-[Manrope] text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">
                  Solution
                </p>

                <p className="mt-1 font-[Manrope] text-sm leading-7 text-slate-600">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Impact */}
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <FiCheckCircle />
              </div>

              <div>
                <p className="font-[Manrope] text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">
                  Impact
                </p>

                <p className="mt-1 font-[Manrope] text-sm leading-7 text-slate-600">
                  {caseStudy.impact}
                </p>
              </div>
            </div>

          </div>

          {/* Tech */}
          <div className="mt-8 flex flex-wrap gap-2">
            {caseStudy.technologies?.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-50
                  px-3
                  py-1.5
                  font-[Manrope]
                  text-[11px]
                  font-bold
                  text-slate-500
                "
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-100 pt-6">
            <a
              href={caseStudy.url}
              className="
                group/link
                inline-flex
                items-center
                gap-3
                font-[Manrope]
                text-sm
                font-extrabold
                text-slate-950
                transition

                hover:text-blue-600
              "
            >
              Read Full Case Study

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-950
                  text-white
                  transition
                  duration-300

                  group-hover/link:translate-x-1
                  group-hover/link:-translate-y-1
                  group-hover/link:bg-blue-600
                "
              >
                <FiArrowUpRight />
              </span>
            </a>
          </div>

        </div>
      </div>

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-violet-500
          transition-all
          duration-500

          group-hover:w-[90%]
        "
      />
    </motion.article>
  );
};

export default CaseStudyCard;