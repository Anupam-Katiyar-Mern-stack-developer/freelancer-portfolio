import PageTransition from "../../components/common/PageTransition";

import ProjectsHero from "../../components/project/ProjectsHero";
import AllProjectsSection from "../../components/project/AllProjectsSection";
import ProjectsCTA from "../../components/project/ProjectsCTA";

const Projects = () => {
  return (
    <PageTransition>
      <main>
        <ProjectsHero />

        <AllProjectsSection />

        <ProjectsCTA />
      </main>
    </PageTransition>
  );
};

export default Projects;