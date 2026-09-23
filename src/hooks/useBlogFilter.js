import { useMemo, useState } from "react";

import useDebounce from "./useDebounce";

const useBlogFilter = (blogs = []) => {
  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  // 300ms debounce
  const debouncedSearch = useDebounce(
    search,
    300
  );

  // Categories blogs se automatically
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        blogs
          .map((blog) => blog.category)
          .filter(Boolean)
      ),
    ];

    return [
      "All",
      ...uniqueCategories,
    ];
  }, [blogs]);

  // Filter only after debounce
  const filteredBlogs = useMemo(() => {
    const searchValue = debouncedSearch
      .trim()
      .toLowerCase();

    return blogs.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      const searchableContent = [
        blog.title,
        blog.excerpt,
        blog.category,
        ...(blog.tags || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !searchValue ||
        searchableContent.includes(
          searchValue
        );

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [
    blogs,
    debouncedSearch,
    activeCategory,
  ]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  const clearSearch = () => {
    setSearch("");
  };

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  const hasFilters =
    debouncedSearch.trim() !== "" ||
    activeCategory !== "All";

  const isSearching =
    search !== debouncedSearch;

  return {
    search,
    debouncedSearch,

    activeCategory,
    categories,
    filteredBlogs,

    hasFilters,
    isSearching,

    handleSearch,
    changeCategory,
    clearSearch,
    resetFilters,
  };
};

export default useBlogFilter;