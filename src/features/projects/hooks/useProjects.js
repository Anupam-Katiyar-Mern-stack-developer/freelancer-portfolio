import { projectsData } from "../data/projects.data";

const useProjectDetails = (slug) => {
  const project =
    projectsData.items.find(
      (item) => item.slug === slug
    );

  return {
    project,
  };
};

export default useProjectDetails;