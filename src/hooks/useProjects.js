import { useMemo, useState } from "react";

const useProjects = (projects) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(() => {
    if (!projects?.items) {
      return [];
    }

    if (showAll) {
      return projects.items;
    }

    return projects.items.slice(0, 6);
  }, [projects, showAll]);

  const toggleProjects = () => {
    setShowAll((prev) => !prev);
  };

  return {
    visibleProjects,
    showAll,
    toggleProjects,
  };
};

export default useProjects;