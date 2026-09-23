import PageTransition from "../../components/common/PageTransition";
import Loader from "../../components/common/Loader";
import NotFound from "./NotFound";

import useProjectDetails from "../../hooks/useProjectDetails";

import ProjectDetailsHero from "../../components/projectDetails/ProjectDetailsHero";
import PageBanner from "../../components/common/PageBanner";
import ProjectOverview from "../../components/projectDetails/ProjectOverview";
import ProjectFeatures from "../../components/projectDetails/ProjectFeatures";
import ProjectArchitecture from "../../components/projectDetails/ProjectArchitecture";
import ProjectChallenges from "../../components/projectDetails/ProjectChallenges";
import ProjectScreenshots from "../../components/projectDetails/ProjectScreenshots";

import CommonCTA from "../../components/common/CommonCTA";

const ProjectDetails = () => {
  const {
    project,
    loading,
    error,
  } = useProjectDetails();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <NotFound />;
  }

  if (!project) {
    return <NotFound />;
  }

  return (
    <PageTransition>
      <main>

        <ProjectDetailsHero
          project={project}
        />

        <ProjectOverview
          project={project}
        />

        <ProjectFeatures
          features={project.details?.features}
        />

        <ProjectArchitecture
          architecture={project.details?.architecture}
        />

        <ProjectChallenges
          challenges={project.details?.challenges}
        />

        <ProjectScreenshots
          screenshots={project.details?.screenshots}
          title={project.title}
        />

        <CommonCTA />

      </main>
    </PageTransition>
  );
};

export default ProjectDetails;