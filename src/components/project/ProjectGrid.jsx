import {
  AnimatePresence,
  motion,
} from "motion/react";

import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => {
  return (
    <motion.div
      layout
      className="
        grid
        grid-cols-1
        gap-6
        md:grid-cols-2
        lg:gap-7
      "
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectGrid;