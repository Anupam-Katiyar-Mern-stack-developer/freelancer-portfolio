import { motion } from "motion/react";

import useSiteData from "../../hooks/useSiteData";

const SkillsHero = () => {
  const { siteData } = useSiteData();

  const hero = siteData?.skillsPage?.hero;

  if (!hero) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        px-5
        pb-20
        pt-36

        sm:px-8

        lg:px-10
        lg:pb-28
        lg:pt-40
      "
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-[400px] w-[400px] rounded-full bg-blue-200/40 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-32 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-[140px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-7xl text-center"
      >
        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          {hero.eyebrow}
        </span>

        <h1
          className="
            mx-auto
            mt-6
            max-w-5xl
            font-['Space_Grotesk']
            text-5xl
            font-bold
            leading-[1.02]
            tracking-[-0.055em]
            text-slate-950

            sm:text-6xl
            lg:text-7xl
          "
        >
          {hero.heading}

          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            {hero.highlight}
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-3xl font-[Manrope] text-base leading-8 text-slate-500 sm:text-lg">
          {hero.description}
        </p>
      </motion.div>
    </section>
  );
};

export default SkillsHero;