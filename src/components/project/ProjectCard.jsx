import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

import { Link } from "react-router";

const ProjectCard = ({ project, index }) => {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        isolate
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200/80
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        transition-all
        duration-500

        hover:border-blue-200/80
        hover:shadow-[0_35px_100px_rgba(37,99,235,0.14)]
      "
    >
      {/* Premium Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          -z-10
          h-56
          w-56
          rounded-full
          bg-blue-300/20
          opacity-0
          blur-[80px]
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* IMAGE AREA */}
      <div className="relative m-3 overflow-hidden rounded-[24px] bg-slate-100 sm:m-4">
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            h-[240px]
            w-full
            object-cover
            object-top
            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.045]

            sm:h-[300px]
            lg:h-[330px]
          "
        />

        {/* Image overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-slate-950/45
            via-slate-900/5
            to-transparent
          "
        />

        {/* Top badges */}
        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
          <span
            className="
              rounded-full
              border
              border-white/30
              bg-white/85
              px-3
              py-1.5
              font-[Manrope]
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.16em]
              text-slate-700
              shadow-sm
              backdrop-blur-xl
            "
          >
            {project.featured ? "Featured" : "Project"}
          </span>

          <span
            className="
              font-['Space_Grotesk']
              text-4xl
              font-bold
              tracking-[-0.06em]
              text-white/70
              drop-shadow-lg
            "
          >
            {projectNumber}
          </span>
        </div>

        {/* Floating Live Button */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="
              absolute
              bottom-4
              right-4
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-white/90
              text-lg
              text-slate-900
              shadow-xl
              backdrop-blur-xl
              transition
              duration-300

              hover:rotate-6
              hover:scale-110
              hover:bg-blue-600
              hover:text-white
            "
          >
            <FiExternalLink />
          </a>
        )}
      </div>

      {/* CONTENT */}
      <div className="px-5 pb-6 pt-3 sm:px-7 sm:pb-7">
        <div className="flex items-start justify-between gap-5">
          <div className="max-w-xl">
            <p
              className="
                mb-2
                font-[Manrope]
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-blue-600
              "
            >
              Selected Work
            </p>

            <h3
              className="
                font-['Space_Grotesk']
                text-[26px]
                font-bold
                leading-tight
                tracking-[-0.04em]
                text-slate-950

                sm:text-[30px]
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-4
                font-[Manrope]
                text-sm
                leading-7
                text-slate-500
                sm:text-[15px]
              "
            >
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies?.map((technology) => (
            <span
              key={technology}
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
                transition
                duration-300

                group-hover:border-blue-100
                group-hover:bg-blue-50/70
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to={`/case-studies/${project.slug}`}
            className="
              group/link
              inline-flex
              items-center
              gap-3
              font-[Manrope]
              text-sm
              font-extrabold
              text-slate-950
              transition
              duration-300

              hover:text-blue-600
            "
          >
            Explore Case Study

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-slate-950
                text-white
                transition-all
                duration-300

                group-hover/link:translate-x-1
                group-hover/link:-translate-y-1
                group-hover/link:bg-blue-600
              "
            >
              <FiArrowUpRight />
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  text-slate-500
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-slate-300
                  hover:bg-slate-950
                  hover:text-white
                "
              >
                <FiGithub />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-2.5
                  font-[Manrope]
                  text-xs
                  font-bold
                  text-slate-600
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:text-blue-600

                  sm:inline-flex
                "
              >
                Live Preview

                <FiArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Premium Accent */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[2px]
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-violet-500
          transition-all
          duration-500

          group-hover:w-[85%]
        "
      />
    </motion.article>
  );
};

export default ProjectCard;