import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";

import {
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

import { motion } from "motion/react";

import Container from "../../../components/common/Container";
import Button from "../../../components/common/Button";
import OptimizedImage from "../../../components/common/OptimizedImage";
import Reveal from "../../../components/common/Reveal";

const HeroSection = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <section className="relative overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16">
      {/* Main Light Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#fffafd_0%,#fff7fb_42%,#fdf4ff_100%)]" />

      {/* Grid */}
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-70" />

      {/* Glows */}
      <div className="pointer-events-none absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-pink-300/20 blur-[130px]" />

      <div className="pointer-events-none absolute -right-28 top-0 h-[500px] w-[500px] rounded-full bg-fuchsia-300/15 blur-[140px]" />

      <Container className="relative z-10">
        <div className="grid min-h-[680px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr] lg:gap-10">

          {/* =============================
              LEFT CONTENT
          ============================== */}
          <div className="relative">

            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-pink-800">
                  {data.eyebrow}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-7 max-w-4xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
                  Full Stack Developer
                </p>

                <h1 className="text-[46px] font-black leading-[0.98] tracking-[-0.06em] text-slate-950 sm:text-[62px] lg:text-[74px] xl:text-[82px]">
                  {data.titleBefore}

                  <span className="relative mx-3 inline-block">
                    <span className="brand-text">
                      {data.titleAccent}
                    </span>

                    <motion.span
                      initial={{
                        scaleX: 0,
                      }}
                      animate={{
                        scaleX: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.55,
                      }}
                      className="absolute -bottom-2 left-0 h-[5px] w-full origin-left rounded-full bg-gradient-to-r from-pink-400 via-rose-500 to-fuchsia-500 opacity-50"
                    />
                  </span>

                  {data.titleAfter}
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {data.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  to={data.primaryCta.path}
                  size="lg"
                  iconRight={FaArrowRight}
                >
                  {data.primaryCta.label}
                </Button>

                <Button
                  to={data.secondaryCta.path}
                  variant="secondary"
                  size="lg"
                >
                  {data.secondaryCta.label}
                </Button>
              </div>
            </Reveal>

            {/* Compact trust / stats row */}
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-pink-100 pt-7">

                {data.miniStats?.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-[92px]"
                  >
                    <div className="text-xl font-black tracking-tight text-slate-950">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}

                <div className="hidden h-9 w-px bg-pink-100 sm:block" />

                <div className="flex gap-2">
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-100 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-700"
                  >
                    <FaGithub size={16} />
                  </a>

                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-100 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-200 hover:bg-pink-50 hover:text-pink-700"
                  >
                    <FaLinkedinIn size={15} />
                  </a>
                </div>

              </div>
            </Reveal>
          </div>

          {/* =============================
              RIGHT VISUAL
          ============================== */}
          <Reveal
            variant="scaleIn"
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="relative min-h-[570px]">

              {/* Large back shape */}
              <div className="absolute left-1/2 top-1/2 h-[470px] w-[390px] -translate-x-1/2 -translate-y-1/2 rotate-6 rounded-[70px_30px_70px_30px] bg-gradient-to-br from-[#9d174d] via-[#be185d] to-[#c026d3] shadow-[0_35px_110px_rgba(157,23,77,.25)]" />

              {/* White border shape */}
              <div className="absolute left-1/2 top-1/2 h-[445px] w-[365px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] rounded-[60px_30px_60px_30px] border border-white/80 bg-white/80 p-2 backdrop-blur-xl">

                <div className="h-full overflow-hidden rounded-[54px_25px_54px_25px] bg-gradient-to-b from-pink-50 to-fuchsia-50">
                  <OptimizedImage
                    src={data.image}
                    alt="Anupam - Full Stack Developer"
                    width={700}
                    height={820}
                    priority
                    className="h-full w-full object-cover object-top"
                  />
                </div>

              </div>

              {/* top label */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-2 top-12 rounded-2xl border border-pink-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                    <FaReact size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-black text-slate-900">
                      React.js
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Frontend
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* right label */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-1 top-[43%] rounded-2xl border border-pink-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                    <SiNodedotjs size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-black text-slate-900">
                      Node.js
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Backend
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* bottom database card */}
              <motion.div
                animate={{
                  x: [0, 6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 left-3 rounded-2xl border border-pink-100 bg-[#260712]/95 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:-left-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-pink-300">
                    <SiPostgresql size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-black">
                      PostgreSQL
                    </p>

                    <p className="mt-0.5 text-[10px] text-pink-100/50">
                      Database
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* tiny decorative dots */}
              <div className="absolute right-10 top-6 grid grid-cols-4 gap-2 opacity-30">
                {Array.from({
                  length: 16,
                }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-pink-500"
                  />
                ))}
              </div>

            </div>
          </Reveal>

        </div>

        {/* =============================
            BOTTOM STACK STRIP
        ============================== */}
        <Reveal delay={0.25}>
          <div className="mt-5 overflow-hidden rounded-[24px] border border-pink-100 bg-white/75 px-5 py-4 shadow-[0_12px_45px_rgba(95,18,57,.05)] backdrop-blur-xl sm:px-7">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-700">
                  Building with
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  Modern technologies. Clean architecture. Real business value.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {data.floatingTech?.map(
                  ({
                    label,
                    icon: Icon,
                  }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 rounded-xl border border-pink-100 bg-pink-50/70 px-3 py-2"
                    >
                      <Icon
                        size={14}
                        className="text-pink-600"
                      />

                      <span className="text-[11px] font-bold text-slate-700">
                        {label}
                      </span>
                    </div>
                  )
                )}
              </div>

            </div>

          </div>
        </Reveal>

      </Container>
    </section>
  );
};

export default HeroSection;