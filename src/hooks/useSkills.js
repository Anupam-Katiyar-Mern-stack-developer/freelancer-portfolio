import { useMemo, useState } from "react";

const useSkills = (skills) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = useMemo(() => {
    if (!skills?.items) {
      return [];
    }

    if (activeCategory === "All") {
      return skills.items;
    }

    return skills.items.filter(
      (skill) => skill.category === activeCategory
    );
  }, [skills, activeCategory]);

  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  return {
    activeCategory,
    filteredSkills,
    changeCategory,
  };
};

export default useSkills;