import { motion } from "motion/react";
import AnimatedText from "../common/AnimatedText";
import RotatingText from "../common/RotatingText";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiExpress,
  SiPostgresql,
} from "react-icons/si";

import {
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

import {
  fadeUp,
  floatingAnimation,
  scaleIn,
  staggerContainer,
} from "../../utils/animations";

const HeroSection = () => {
  const { siteData } = useSiteData();

  if (!siteData) {
    return null;
  }

  const {
    settings,
    hero,
    socialLinks,
  } = siteData;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F8FAFC] px-5 pb-20 pt-32 sm:px-8 lg:flex lg:items-center lg:px-10 lg:pb-12 lg:pt-28"
    >

      {/* Grid Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute -left-32 top-36 h-[380px] w-[380px] rounded-full bg-blue-300/30 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-violet-300/30 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">

        {/* LEFT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-xs font-bold tracking-wide text-slate-600 sm:text-sm">
              {hero.badge}
            </span>
          </motion.div>

          {/* Name */}
          <motion.p
            variants={fadeUp}
            className="mb-3 text-base font-semibold text-blue-600 sm:text-lg"
          >
            {hero.intro}{" "}
            <span className="text-slate-950">
              {settings.developerName}
            </span>
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="mx-auto max-w-4xl text-[44px] font-black leading-[1.03] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:mx-0 lg:text-[72px]"
          >
            {hero.heading}

            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {hero.highlight}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0"
          >
            {hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href={hero.primaryLink}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:bg-blue-600 sm:w-auto"
            >
              {hero.primaryButton}

              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={hero.secondaryLink}
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg sm:w-auto"
            >
              {hero.secondaryButton}
            </a>

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-bold text-slate-500 transition hover:text-slate-950 sm:w-auto">
              <FiDownload />

              Resume
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
          >
            <span className="mr-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Connect
            </span>

            <a
              href={socialLinks?.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg"
            >
              <FaLinkedinIn />
            </a>

            <a
              href={socialLinks?.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:text-slate-950 hover:shadow-lg"
            >
              <FaGithub />
            </a>

            <a
              href={socialLinks?.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:text-pink-600 hover:shadow-lg"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT PROFILE */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative mx-auto flex w-full max-w-[480px] items-center justify-center"
        >
          {/* Glow */}
          <div className="absolute h-[330px] w-[330px] rounded-full bg-gradient-to-br from-blue-300/50 via-indigo-200/40 to-violet-300/50 blur-3xl sm:h-[420px] sm:w-[420px]" />

          {/* Outer Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-blue-300/70 sm:h-[420px] sm:w-[420px]"
          />

          {/* Secondary ring */}
          <div className="absolute h-[285px] w-[285px] rounded-full border border-slate-200 sm:h-[365px] sm:w-[365px]" />

          {/* Profile */}
          <motion.div
            animate={floatingAnimation}
            className="relative z-10"
          >
            <div className="relative h-[250px] w-[250px] rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-[5px] shadow-[0_30px_80px_rgba(37,99,235,0.22)] sm:h-[320px] sm:w-[320px]">

              <div className="h-full w-full overflow-hidden rounded-full border-[8px] border-white bg-slate-100">
                <img
                  src={settings.profileImage}
                  alt={settings.developerName}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* availability */}
              <div className="absolute bottom-7 right-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-emerald-500 shadow-lg">
                <span className="h-3 w-3 rounded-full bg-white" />
              </div>
            </div>
          </motion.div>

          {/* React */}
          <motion.div
            animate={{
              y: [0, -9, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-[15%] z-20 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-lg"
          >
            <FaReact className="text-xl text-blue-500" />

            <span className="text-xs font-bold text-slate-700">
              React
            </span>
          </motion.div>

          {/* Node */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-[25%] z-20 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-lg"
          >
            <FaNodeJs className="text-xl text-green-600" />

            <span className="text-xs font-bold text-slate-700">
              Node.js
            </span>
          </motion.div>

          {/* PostgreSQL */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[13%] left-[3%] z-20 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-lg"
          >
            <SiPostgresql className="text-xl text-blue-700" />

            <span className="text-xs font-bold text-slate-700">
              PostgreSQL
            </span>
          </motion.div>

          {/* Express */}
          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[7%] right-[5%] z-20 hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-lg sm:flex"
          >
            <SiExpress className="text-xl text-slate-950" />

            <span className="text-xs font-bold text-slate-700">
              Express
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;