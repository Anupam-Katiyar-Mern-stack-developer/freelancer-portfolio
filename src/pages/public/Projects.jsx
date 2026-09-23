import PageTransition from "../../components/common/PageTransition";

import PageBanner from "../../components/common/PageBanner";
import AllProjectsSection from "../../components/project/AllProjectsSection";
import CommonCTA from "../../components/common/CommonCTA";

const Projects = () => {
  return (
    <PageTransition>
      <main>
        <PageBanner
          title="My Projects"
          description="Explore selected products and applications I have designed and developed."
        />

        <AllProjectsSection />

        <CommonCTA />
      </main>
    </PageTransition>
  );
};

export default Projects;