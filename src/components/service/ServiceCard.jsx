import { motion } from "motion/react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

import { iconMap } from "../../utils/iconMap";

const ServiceCard = ({
  service,
  detailed = false,
  index = 0,
}) => {
  const Icon = iconMap[service.icon];

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -7,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-6
        shadow-[0_16px_55px_rgba(15,23,42,0.04)]
        transition
        duration-300

        hover:border-blue-200
        hover:shadow-[0_28px_80px_rgba(37,99,235,0.10)]

        sm:p-7
      "
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/0 blur-3xl transition group-hover:bg-blue-100/70" />

      <div className="relative">
        <div
          className="
            flex
            h-13
            w-13
            items-center
            justify-center
            rounded-2xl
            bg-slate-950
            text-xl
            text-white
            transition
            duration-300

            group-hover:bg-blue-600
          "
        >
          {Icon && <Icon />}
        </div>

        <div className="mt-6 flex items-start justify-between gap-4">
          <h3 className="font-['Space_Grotesk'] text-xl font-bold tracking-[-0.025em] text-slate-950">
            {service.title}
          </h3>

          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-slate-50
              text-slate-400
              transition

              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:bg-blue-50
              group-hover:text-blue-600
            "
          >
            <FiArrowUpRight />
          </span>
        </div>

        <p className="mt-3 font-[Manrope] text-sm leading-7 text-slate-500">
          {detailed
            ? service.description
            : service.shortDescription}
        </p>

        {detailed && service.bestFor && (
          <div className="mt-5 rounded-2xl bg-slate-50 px-4 py-3">
            <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Best For
            </p>

            <p className="mt-1 font-[Manrope] text-xs font-bold text-slate-700">
              {service.bestFor}
            </p>
          </div>
        )}

        {detailed && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.features?.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs text-blue-600">
                  <FiCheck />
                </span>

                <span className="font-[Manrope] text-xs font-semibold text-slate-600">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ServiceCard;