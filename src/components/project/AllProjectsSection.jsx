import {
  AnimatePresence,
  motion,
} from "motion/react";

import useSiteData from "../../hooks/useSiteData";
import useProjectFilter from "../../hooks/useProjectFilter";

import ProjectCard from "../project/ProjectCard";

const AllProjectsSection = () => {
  const { siteData } = useSiteData();

  const projects = siteData?.projects?.items || [];
  const categories =
    siteData?.projectsPage?.categories || [];

  const {
    activeCategory,
    filteredProjects,
    changeCategory,
  } = useProjectFilter(projects);

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Selected Projects
            </p>

            <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Explore my recent work
            </h2>

            <p className="mt-3 font-[Manrope] text-sm text-slate-500">
              {filteredProjects.length} projects
            </p>
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
            {categories.map((category) => {
              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    changeCategory(category)
                  }
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
                      layoutId="project-filter"
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
          </div>

        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(
              (project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              )
            )}
          </AnimatePresence>
        </motion.div>

        {!filteredProjects.length && (
          <div className="py-20 text-center">
            <p className="font-['Space_Grotesk'] text-xl font-bold text-slate-900">
              No projects found
            </p>

            <p className="mt-2 font-[Manrope] text-sm text-slate-500">
              Projects for this category will be added soon.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default AllProjectsSection;