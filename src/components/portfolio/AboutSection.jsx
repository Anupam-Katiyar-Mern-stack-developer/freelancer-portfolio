import { motion } from "motion/react";

import {
  FiArrowUpRight,
  FiCheck,
  FiCode,
  FiLayers,
  FiServer,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";
import SectionTitle from "../common/SectionTitle";

const AboutSection = () => {
  const { siteData } = useSiteData();

  if (!siteData?.about) {
    return null;
  }

  const { about } = siteData;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      {/* background decoration */}
      <div className="pointer-events-none absolute left-[-140px] top-1/3 h-[320px] w-[320px] rounded-full bg-blue-100/70 blur-[120px]" />

      <div className="pointer-events-none absolute right-[-120px] bottom-0 h-[350px] w-[350px] rounded-full bg-violet-100/70 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.07)] sm:p-8">

              {/* Decorative */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-200/50 blur-3xl" />

              <div className="relative">

                {/* Small Code Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-2xl text-white shadow-xl">
                  <FiCode />
                </div>

                <p className="font-['Space_Grotesk'] text-2xl font-bold leading-snug tracking-[-0.03em] text-slate-950 sm:text-3xl">
                  Building products with
                  <span className="block text-blue-600">
                    purpose, structure & performance.
                  </span>
                </p>

                <p className="mt-5 font-[Manrope] text-sm leading-7 text-slate-500 sm:text-base">
                  {about.secondDescription}
                </p>

                {/* Availability */}
                <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">

                  <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>

                  <p className="font-[Manrope] text-sm font-semibold leading-6 text-emerald-700">
                    {about.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -right-2 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:block lg:-right-8"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FiLayers />
                </div>

                <div>
                  <p className="font-[Manrope] text-xs font-medium text-slate-400">
                    Focus
                  </p>

                  <p className="font-[Manrope] text-sm font-bold text-slate-900">
                    Clean Architecture
                  </p>
                </div>

              </div>
            </motion.div>
          </motion.div>


          {/* RIGHT */}
          <div>
            <SectionTitle
              eyebrow={about.eyebrow}
              title={about.heading}
              highlight={about.highlight}
              description={about.description}
              align="left"
            />

            {/* Highlights */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">

              {about.highlights?.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <FiCheck />
                  </div>

                  <p className="font-[Manrope] text-sm font-semibold text-slate-700">
                    {item}
                  </p>
                </motion.div>
              ))}

            </div>


            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50">

              {about.stats?.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className="
                    relative
                    px-3
                    py-6
                    text-center

                    after:absolute
                    after:right-0
                    after:top-1/2
                    after:h-10
                    after:w-px
                    after:-translate-y-1/2
                    after:bg-slate-200

                    last:after:hidden

                    sm:px-6
                  "
                >
                  <p className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 font-[Manrope] text-[10px] font-semibold uppercase tracking-wide text-slate-400 sm:text-xs">
                    {stat.label}
                  </p>
                </motion.div>
              ))}

            </div>


            {/* CTA */}
            <motion.a
              href="#projects"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              className="group mt-9 inline-flex items-center gap-2 font-[Manrope] text-sm font-bold text-slate-900 transition hover:text-blue-600"
            >
              See what I've built

              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;