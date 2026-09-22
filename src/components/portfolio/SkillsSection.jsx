import {
  AnimatePresence,
  motion,
} from "motion/react";

import useSiteData from "../../hooks/useSiteData";
import useSkills from "../../hooks/useSkills";

import SectionTitle from "../common/SectionTitle";
import SkillCard from "../skill/SkillCard";

const SkillsSection = () => {
  const { siteData } = useSiteData();

  const skills = siteData?.skills;

  const {
    activeCategory,
    filteredSkills,
    changeCategory,
  } = useSkills(skills);

  if (!skills) {
    return null;
  }

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F8FAFC] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >

      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="pointer-events-none absolute -left-32 top-32 h-[350px] w-[350px] rounded-full bg-blue-200/40 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-200/30 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        <SectionTitle
          eyebrow={skills.eyebrow}
          title={skills.heading}
          highlight={skills.highlight}
          description={skills.description}
        />

        {/* Filters */}
        <motion.div
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
          }}
          className="
            mx-auto
            mt-10
            flex
            max-w-fit
            gap-2
            overflow-x-auto
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-2
            shadow-sm

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {skills.categories?.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                className={`
                  relative
                  whitespace-nowrap
                  rounded-xl
                  px-4
                  py-2.5
                  font-[Manrope]
                  text-xs
                  font-bold
                  transition
                  duration-300

                  sm:px-5
                  sm:text-sm

                  ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-950"
                  }
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="skill-active-category"
                    className="absolute inset-0 rounded-xl bg-slate-950"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {category}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills */}
        <motion.div
          layout
          className="
            mt-10
            grid
            grid-cols-2
            gap-3

            sm:gap-5
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom text */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mx-auto mt-12 max-w-xl text-center font-[Manrope] text-sm leading-7 text-slate-400"
        >
          Always learning, experimenting and improving the stack I use to
          build better digital products.
        </motion.p>

      </div>
    </section>
  );
};

export default SkillsSection;