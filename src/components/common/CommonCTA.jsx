import { motion } from "motion/react";
import { Link } from "react-router";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiMessageCircle,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

const CommonCTA = () => {
  const { siteData } = useSiteData();

  const cta = siteData?.commonCTA;

  if (!cta) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20

        sm:px-8

        lg:px-10
        lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            overflow-hidden
            rounded-[34px]
            bg-slate-950
            px-7
            py-10
            text-white

            sm:px-10
            sm:py-12

            lg:px-14
            lg:py-14
          "
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/30 blur-[110px]" />

          <div className="pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />

          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "46px 46px",
            }}
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-10

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* LEFT */}
            <div className="max-w-3xl">

              <div
                className="
                  mb-5
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.07]
                  text-xl
                  text-blue-300
                "
              >
                <FiMessageCircle />
              </div>

              <p
                className="
                  font-[Manrope]
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-blue-300
                "
              >
                {cta.eyebrow}
              </p>

              <h2
                className="
                  mt-4
                  font-['Space_Grotesk']
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-[-0.045em]

                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {cta.heading}

                <span className="mt-1 block text-blue-300">
                  {cta.highlight}
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  font-[Manrope]
                  text-sm
                  leading-7
                  text-slate-400

                  sm:text-base
                "
              >
                {cta.description}
              </p>

            </div>

            {/* RIGHT BUTTONS */}
            <div
              className="
                flex
                shrink-0
                flex-col
                gap-3

                sm:flex-row
                lg:flex-col
              "
            >
              <Link
                to={cta.primaryButton.path}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-6
                  py-4
                  font-[Manrope]
                  text-sm
                  font-bold
                  text-slate-950
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:bg-blue-500
                  hover:text-white
                  hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]
                "
              >
                {cta.primaryButton.label}

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to={cta.secondaryButton.path}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-6
                  py-4
                  font-[Manrope]
                  text-sm
                  font-bold
                  text-white
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >
                {cta.secondaryButton.label}

                <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CommonCTA;