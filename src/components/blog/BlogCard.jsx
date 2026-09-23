import { motion } from "motion/react";
import { Link } from "react-router";

import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

const BlogCard = ({
  blog,
  index = 0,
}) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="
        group
        overflow-hidden
        rounded-[26px]
        border
        border-slate-200
        bg-white
        shadow-[0_15px_50px_rgba(15,23,42,0.04)]
        transition
        duration-300

        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)]
      "
    >
      {/* IMAGE */}

      <Link
        to={`/blog/${blog.slug}`}
        className="relative block overflow-hidden"
      >
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="
            h-[220px]
            w-full
            object-cover
            transition
            duration-500

            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />

        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            border
            border-white/30
            bg-white/90
            px-3
            py-1.5
            font-[Manrope]
            text-[10px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-slate-700
            backdrop-blur-xl
          "
        >
          {blog.category}
        </span>
      </Link>


      {/* CONTENT */}

      <div className="p-6">

        {/* META */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-4
            font-[Manrope]
            text-[11px]
            font-semibold
            text-slate-400
          "
        >
          <span className="inline-flex items-center gap-1.5">
            <FiCalendar />

            {blog.date}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <FiClock />

            {blog.readTime}
          </span>
        </div>


        {/* TITLE */}

        <Link
          to={`/blog/${blog.slug}`}
          className="block"
        >
          <h2
            className="
              mt-4
              font-['Space_Grotesk']
              text-xl
              font-bold
              leading-7
              tracking-[-0.025em]
              text-slate-950
              transition

              group-hover:text-blue-600
            "
          >
            {blog.title}
          </h2>
        </Link>


        {/* SHORT DESCRIPTION */}

        <p
          className="
            mt-3
            line-clamp-3
            font-[Manrope]
            text-sm
            leading-6
            text-slate-500
          "
        >
          {blog.excerpt}
        </p>


        {/* BUTTON */}

        <Link
          to={`/blog/${blog.slug}`}
          className="
            group/link
            mt-6
            inline-flex
            items-center
            gap-2
            font-[Manrope]
            text-xs
            font-bold
            text-slate-900
            transition

            hover:text-blue-600
          "
        >
          Read Article

          <FiArrowUpRight
            className="
              transition-transform
              duration-300

              group-hover/link:-translate-y-0.5
              group-hover/link:translate-x-0.5
            "
          />
        </Link>

      </div>
    </motion.article>
  );
};

export default BlogCard;