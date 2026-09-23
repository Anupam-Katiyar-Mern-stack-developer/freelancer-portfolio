import {
  FiCalendar,
  FiClock,
  FiTag,
  FiUser,
} from "react-icons/fi";

const BlogArticle = ({ blog }) => {
  if (!blog) {
    return null;
  }

  const renderBlock = (block, index) => {
    switch (block.type) {
      case "heading":
        return (
          <h2
            key={index}
            className="
              mt-10
              font-['Space_Grotesk']
              text-2xl
              font-bold
              tracking-[-0.03em]
              text-slate-950

              sm:text-3xl
            "
          >
            {block.text}
          </h2>
        );

      case "paragraph":
        return (
          <p
            key={index}
            className="
              mt-5
              font-[Manrope]
              text-[15px]
              leading-8
              text-slate-600

              sm:text-base
            "
          >
            {block.text}
          </p>
        );

      case "list":
        return (
          <ul
            key={index}
            className="mt-6 space-y-3"
          >
            {block.items?.map((item) => (
              <li
                key={item}
                className="
                  flex
                  items-start
                  gap-3
                  font-[Manrope]
                  text-sm
                  leading-7
                  text-slate-600
                "
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />

                {item}
              </li>
            ))}
          </ul>
        );

      case "code":
        return (
          <div
            key={index}
            className="
              mt-6
              overflow-hidden
              rounded-[22px]
              border
              border-slate-800
              bg-slate-950
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                px-5
                py-3
              "
            >
              <span
                className="
                  font-[Manrope]
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-slate-500
                "
              >
                {block.language || "Code"}
              </span>

              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
            </div>

            <pre
              className="
                overflow-x-auto
                p-5
                font-mono
                text-sm
                leading-7
                text-slate-300
              "
            >
              <code>
                {block.code}
              </code>
            </pre>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      className="
        bg-white
        px-5
        py-16

        sm:px-8
        lg:px-10
        lg:py-24
      "
    >
      <article className="mx-auto max-w-4xl">

        {/* CATEGORY */}

        <div className="flex justify-center">
          <span
            className="
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-4
              py-2
              font-[Manrope]
              text-[10px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-blue-600
            "
          >
            {blog.category}
          </span>
        </div>


        {/* TITLE */}

        <h1
          className="
            mx-auto
            mt-6
            max-w-4xl
            text-center
            font-['Space_Grotesk']
            text-3xl
            font-bold
            leading-tight
            tracking-[-0.045em]
            text-slate-950

            sm:text-4xl
            lg:text-5xl
          "
        >
          {blog.title}
        </h1>


        {/* EXCERPT */}

        <p
          className="
            mx-auto
            mt-5
            max-w-3xl
            text-center
            font-[Manrope]
            text-sm
            leading-7
            text-slate-500

            sm:text-base
          "
        >
          {blog.excerpt}
        </p>


        {/* META */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3
            font-[Manrope]
            text-xs
            font-semibold
            text-slate-400
          "
        >
          {blog.author?.name && (
            <span className="inline-flex items-center gap-2">
              <FiUser />

              {blog.author.name}
            </span>
          )}

          <span className="inline-flex items-center gap-2">
            <FiCalendar />

            {blog.date}
          </span>

          <span className="inline-flex items-center gap-2">
            <FiClock />

            {blog.readTime}
          </span>
        </div>


        {/* FEATURED IMAGE */}

        <div
          className="
            mt-10
            overflow-hidden
            rounded-[30px]
            border
            border-slate-200
            bg-slate-100
            p-2
            shadow-[0_20px_70px_rgba(15,23,42,0.08)]
          "
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="
              max-h-[520px]
              w-full
              rounded-[23px]
              object-cover
            "
          />
        </div>


        {/* ARTICLE CONTENT */}

        <div
          className="
            mx-auto
            mt-12
            max-w-3xl
          "
        >
          {blog.content?.map(
            (block, index) =>
              renderBlock(block, index)
          )}


          {/* TAGS */}

          {blog.tags?.length > 0 && (
            <div
              className="
                mt-12
                border-t
                border-slate-200
                pt-7
              "
            >
              <div className="flex flex-wrap items-center gap-2">

                <span
                  className="
                    mr-2
                    inline-flex
                    items-center
                    gap-2
                    font-[Manrope]
                    text-xs
                    font-bold
                    text-slate-500
                  "
                >
                  <FiTag />

                  Tags
                </span>

                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-3
                      py-1.5
                      font-[Manrope]
                      text-[11px]
                      font-bold
                      text-slate-600
                    "
                  >
                    {tag}
                  </span>
                ))}

              </div>
            </div>
          )}

        </div>

      </article>
    </section>
  );
};

export default BlogArticle;