import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../project/ProjectCard";

const ProjectsSection = () => {
  const { siteData } = useSiteData();

  const projects = siteData?.projects;

  if (!projects?.items?.length) {
    return null;
  }

  const previewProjects = projects.items.slice(0, 2);

  return (
    <section
      id="projects"
      className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <SectionTitle
          eyebrow={projects.eyebrow}
          title={projects.heading}
          highlight={projects.highlight}
          description={projects.description}
        />

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2">

          {previewProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}

        </div>

        <div className="mt-10 flex justify-center">

          <Link
            to="/projects"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-slate-950
              px-6
              py-3.5
              font-[Manrope]
              text-sm
              font-bold
              text-white
              transition

              hover:-translate-y-1
              hover:bg-blue-600
            "
          >
            Explore All Projects

            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;