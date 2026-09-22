import { motion } from "motion/react";

import useSiteData from "../../hooks/useSiteData";

const AboutHero = () => {
  const { siteData } = useSiteData();

  const about = siteData?.aboutPage;

  if (!about) {
    return null;
  }

  const { hero, stats } = about;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-40">

      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-200/40 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-40 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Content */}
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
            }}
          >
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              {hero.eyebrow}
            </span>

            <h1 className="mt-6 max-w-4xl font-['Space_Grotesk'] text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">

              {hero.heading}

              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {hero.highlight}
              </span>

            </h1>

            <p className="mt-7 max-w-2xl font-[Manrope] text-base leading-8 text-slate-500 sm:text-lg">
              {hero.description}
            </p>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative mx-auto"
          >

            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-blue-300/40 to-violet-300/40 blur-3xl" />

            <div className="relative h-[280px] w-[280px] rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-[5px] shadow-[0_30px_100px_rgba(37,99,235,0.20)] sm:h-[340px] sm:w-[340px]">

              <div className="h-full w-full overflow-hidden rounded-full border-[8px] border-white bg-slate-100">

                <img
                  src={hero.profileImage}
                  alt="Developer profile"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </motion.div>
        </div>

        {/* Proof Stats */}
        <div className="mt-16 grid grid-cols-2 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.05)] lg:grid-cols-4">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-r border-slate-100 p-6 text-center last:border-r-0 lg:border-b-0"
            >
              <p className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 font-[Manrope] text-xs font-semibold text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutHero;