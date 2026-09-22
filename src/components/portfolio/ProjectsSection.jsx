import { motion } from "motion/react";

import {
  FiArrowDown,
  FiArrowUp,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";
import useProjects from "../../hooks/useProjects";

import SectionTitle from "../common/SectionTitle";
import ProjectGrid from "../project/ProjectGrid";

const ProjectsSection = () => {
  const { siteData } = useSiteData();

  const projects = siteData?.projects;

  const {
    visibleProjects,
    showAll,
    toggleProjects,
  } = useProjects(projects);

  if (!projects) {
    return null;
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >

      <div className="pointer-events-none absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-blue-100/60 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-violet-100/60 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        <SectionTitle
          eyebrow={projects.eyebrow}
          title={projects.heading}
          highlight={projects.highlight}
          description={projects.description}
        />

        <div className="mt-12 lg:mt-16">
          <ProjectGrid
            projects={visibleProjects}
          />
        </div>

        {projects.items?.length > 3 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="mt-10 flex justify-center"
          >
            <button
              type="button"
              onClick={toggleProjects}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-6
                py-3.5
                font-[Manrope]
                text-sm
                font-bold
                text-slate-700
                shadow-sm
                transition
                duration-300

                hover:-translate-y-1
                hover:border-blue-200
                hover:text-blue-600
                hover:shadow-lg
              "
            >
              {showAll ? "Show Less" : "View All Projects"}

              {showAll ? (
                <FiArrowUp />
              ) : (
                <FiArrowDown className="transition-transform group-hover:translate-y-1" />
              )}
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ProjectsSection;