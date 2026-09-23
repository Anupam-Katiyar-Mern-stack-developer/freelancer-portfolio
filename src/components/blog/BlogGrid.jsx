import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  FiFilter,
  FiSearch,
  FiX,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";
import useBlogFilter from "../../hooks/useBlogFilter";

import BlogCard from "./BlogCard";

const BlogGrid = () => {
  const { siteData } = useSiteData();

  const blogs = siteData?.blogs;

  const blogItems = blogs?.items || [];

  const {
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
  } = useBlogFilter(blogItems);

  if (!blogs) {
    return null;
  }

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-20

        sm:px-8

        lg:px-10
        lg:py-28
      "
    >
      {/* =============================== */}
      {/* BACKGROUND DECORATION */}
      {/* =============================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-100/60
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-[380px]
          w-[380px]
          rounded-full
          bg-violet-100/50
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =============================== */}
        {/* SECTION HEADER */}
        {/* =============================== */}

        <div
          className="
            flex
            flex-col
            gap-6

            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div className="max-w-2xl">

            <p
              className="
                font-[Manrope]
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-blue-600
              "
            >
              {blogs.eyebrow}
            </p>

            <h2
              className="
                mt-3
                font-['Space_Grotesk']
                text-3xl
                font-bold
                leading-tight
                tracking-[-0.04em]
                text-slate-950

                sm:text-4xl
              "
            >
              {blogs.heading}

              {blogs.highlight && (
                <span className="block text-blue-600">
                  {blogs.highlight}
                </span>
              )}
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                font-[Manrope]
                text-sm
                leading-7
                text-slate-500
              "
            >
              {blogs.description}
            </p>

          </div>

          {/* ARTICLE COUNT */}

          <div
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-slate-50
              px-4
              py-2
              font-[Manrope]
              text-xs
              font-bold
              text-slate-500
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-blue-600
              "
            />

            {filteredBlogs.length}

            {" "}

            {filteredBlogs.length === 1
              ? "Article"
              : "Articles"}
          </div>

        </div>


        {/* =============================== */}
        {/* SEARCH + FILTER BOX */}
        {/* =============================== */}

        <div
          className="
            mt-10
            rounded-[26px]
            border
            border-slate-200
            bg-[#F8FAFC]
            p-4

            sm:p-5
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* =============================== */}
            {/* SEARCH INPUT */}
            {/* =============================== */}

            <div
              className="
                relative
                w-full

                lg:max-w-[420px]
              "
            >
              <FiSearch
                className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-lg
                  text-slate-400
                "
              />

              <input
                type="search"
                value={search}
                onChange={handleSearch}
                placeholder="Search articles..."
                autoComplete="off"
                className="
                  h-12
                  w-full
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  pl-11
                  pr-12
                  font-[Manrope]
                  text-sm
                  font-medium
                  text-slate-900
                  outline-none
                  transition
                  duration-300

                  placeholder:font-normal
                  placeholder:text-slate-400

                  hover:border-slate-300

                  focus:border-blue-400
                  focus:ring-4
                  focus:ring-blue-100
                "
              />

              {/* DEBOUNCE LOADING */}

              {isSearching ? (
                <span
                  className="
                    absolute
                    right-4
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    animate-spin
                    rounded-full
                    border-2
                    border-slate-200
                    border-t-blue-600
                  "
                />
              ) : (
                search && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    aria-label="Clear blog search"
                    className="
                      absolute
                      right-3
                      top-1/2
                      flex
                      h-8
                      w-8
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      text-slate-400
                      transition
                      duration-200

                      hover:bg-slate-100
                      hover:text-slate-950
                    "
                  >
                    <FiX />
                  </button>
                )
              )}

            </div>


            {/* =============================== */}
            {/* CATEGORY FILTER */}
            {/* =============================== */}

            <div
              className="
                flex
                w-full
                items-center
                gap-2
                overflow-x-auto

                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden

                lg:w-auto
              "
            >

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-slate-400
                "
              >
                <FiFilter />
              </div>

              {categories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      changeCategory(category)
                    }
                    className={`
                      relative
                      shrink-0
                      overflow-hidden
                      rounded-xl
                      border
                      px-4
                      py-2.5
                      font-[Manrope]
                      text-xs
                      font-bold
                      transition
                      duration-300

                      ${
                        isActive
                          ? "border-slate-950 text-white"
                          : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-950"
                      }
                    `}
                  >

                    {isActive && (
                      <motion.span
                        layoutId="active-blog-category"
                        className="
                          absolute
                          inset-0
                          rounded-xl
                          bg-slate-950
                        "
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {category}
                    </span>

                  </button>
                );
              })}

            </div>

          </div>


          {/* =============================== */}
          {/* FILTER INFORMATION */}
          {/* =============================== */}

          <AnimatePresence>

            {hasFilters && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                className="overflow-hidden"
              >

                <div
                  className="
                    mt-4
                    flex
                    flex-col
                    gap-3
                    border-t
                    border-slate-200
                    pt-4

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >

                  <p
                    className="
                      font-[Manrope]
                      text-xs
                      leading-6
                      text-slate-500
                    "
                  >

                    Showing{" "}

                    <span className="font-bold text-slate-950">
                      {filteredBlogs.length}
                    </span>

                    {" "}

                    {filteredBlogs.length === 1
                      ? "article"
                      : "articles"}

                    {debouncedSearch && (
                      <>
                        {" "}for{" "}

                        <span className="font-bold text-blue-600">
                          "{debouncedSearch}"
                        </span>
                      </>
                    )}

                    {activeCategory !== "All" && (
                      <>
                        {" "}in{" "}

                        <span className="font-bold text-slate-900">
                          {activeCategory}
                        </span>
                      </>
                    )}

                  </p>


                  <button
                    type="button"
                    onClick={resetFilters}
                    className="
                      flex
                      w-fit
                      items-center
                      gap-1.5
                      font-[Manrope]
                      text-xs
                      font-bold
                      text-blue-600
                      transition

                      hover:text-blue-700
                    "
                  >
                    <FiX />

                    Clear all filters
                  </button>

                </div>

              </motion.div>
            )}

          </AnimatePresence>

        </div>


        {/* =============================== */}
        {/* BLOG GRID */}
        {/* =============================== */}

        {filteredBlogs.length > 0 ? (
          <motion.div
            layout
            className="
              mt-10
              grid
              grid-cols-1
              gap-6

              md:grid-cols-2

              lg:grid-cols-3
              lg:gap-7
            "
          >
            <AnimatePresence mode="popLayout">

              {filteredBlogs.map(
                (blog, index) => (
                  <motion.div
                    key={blog.slug}
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <BlogCard
                      blog={blog}
                      index={index}
                    />
                  </motion.div>
                )
              )}

            </AnimatePresence>
          </motion.div>
        ) : (

          /* =============================== */
          /* EMPTY STATE */
          /* =============================== */

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mt-10
              rounded-[28px]
              border
              border-dashed
              border-slate-300
              bg-slate-50
              px-6
              py-16
              text-center

              sm:py-20
            "
          >

            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                text-xl
                text-slate-400
                shadow-sm
              "
            >
              <FiSearch />
            </div>


            <h3
              className="
                mt-5
                font-['Space_Grotesk']
                text-xl
                font-bold
                tracking-[-0.02em]
                text-slate-950
              "
            >
              No articles found
            </h3>


            <p
              className="
                mx-auto
                mt-2
                max-w-md
                font-[Manrope]
                text-sm
                leading-6
                text-slate-500
              "
            >
              We couldn't find an article matching your search.
              Try another keyword or choose a different category.
            </p>


            <button
              type="button"
              onClick={resetFilters}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-slate-950
                px-5
                py-3
                font-[Manrope]
                text-xs
                font-bold
                text-white
                transition
                duration-300

                hover:-translate-y-0.5
                hover:bg-blue-600
              "
            >
              <FiX />

              Clear Filters
            </button>

          </motion.div>
        )}

      </div>
    </section>
  );
};

export default BlogGrid;