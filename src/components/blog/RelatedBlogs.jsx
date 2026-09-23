import BlogCard from "./BlogCard";

const RelatedBlogs = ({
  blogs = [],
}) => {
  if (!blogs.length) {
    return null;
  }

  return (
    <section
      className="
        bg-[#F8FAFC]
        px-5
        py-20

        sm:px-8
        lg:px-10
        lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">

        <div
          className="
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <div>
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
              Keep Reading
            </p>

            <h2
              className="
                mt-2
                font-['Space_Grotesk']
                text-3xl
                font-bold
                tracking-[-0.04em]
                text-slate-950
              "
            >
              Related articles
            </h2>
          </div>

          <p
            className="
              max-w-md
              font-[Manrope]
              text-sm
              leading-6
              text-slate-500
            "
          >
            More articles from the same development category.
          </p>
        </div>


        <div
          className="
            mt-10
            grid
            gap-6

            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedBlogs;