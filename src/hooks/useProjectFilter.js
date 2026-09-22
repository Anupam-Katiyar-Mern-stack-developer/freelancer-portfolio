import { useMemo, useState } from "react";

const useProjectFilter = (projects = []) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [projects, activeCategory]);

  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  return {
    activeCategory,
    filteredProjects,
    changeCategory,
  };
};

export default useProjectFilter;