import {
  AnimatePresence,
  motion,
} from "motion/react";

import useSiteData from "../../hooks/useSiteData";
import useSkills from "../../hooks/useSkills";

import SkillCard from "../skill/SkillCard";

const AllSkillsSection = () => {
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
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-xl">
            <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Complete Stack
            </p>

            <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Technologies I work with
            </h2>
          </div>

          {/* Filters */}
          <div
            className="
              flex
              gap-2
              overflow-x-auto
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              p-2

              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {skills.categories?.map((category) => {
              const active = activeCategory === category;

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

                    ${
                      active
                        ? "text-white"
                        : "text-slate-500 hover:text-slate-950"
                    }
                  `}
                >
                  {active && (
                    <motion.span
                      layoutId="skills-page-tab"
                      className="absolute inset-0 rounded-xl bg-slate-950"
                    />
                  )}

                  <span className="relative z-10">
                    {category}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
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

      </div>
    </section>
  );
};

export default AllSkillsSection;