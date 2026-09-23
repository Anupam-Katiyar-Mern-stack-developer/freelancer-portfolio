import { Link } from "react-router";
import { motion } from "motion/react";
import {
  FiChevronRight,
  FiCode,
  FiHome,
  FiTarget,
} from "react-icons/fi";

const PageBanner = ({
  title,
  description,
}) => {
  return (
    <section
      className="
        relative
        flex
        min-h-[300px]
        items-center
        overflow-hidden
        bg-gradient-to-r
        from-slate-950
        via-blue-700
        to-indigo-700
        px-5
        pt-20
        text-white

        sm:px-8
        lg:px-10
      "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[100px]" />

      <div className="pointer-events-none absolute -right-28 -top-28 h-[320px] w-[320px] rounded-full bg-violet-500/20 blur-[100px]" />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="
            select-none
            whitespace-nowrap
            font-['Space_Grotesk']
            text-[70px]
            font-black
            uppercase
            tracking-[-0.06em]
            text-white/[0.04]

            sm:text-[110px]
            lg:text-[150px]
          "
        >
          {title}
        </span>
      </div>

      {/* Decorative icons */}
      <FiCode className="pointer-events-none absolute bottom-8 left-6 text-6xl text-white/[0.06]" />

      <FiTarget className="pointer-events-none absolute bottom-8 right-8 text-6xl text-white/[0.06]" />

      {/* Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative z-10 mx-auto w-full max-w-7xl text-center"
      >
        <h1
          className="
            font-['Space_Grotesk']
            text-4xl
            font-bold
            tracking-[-0.045em]

            sm:text-5xl
            lg:text-6xl
          "
        >
          {title}
        </h1>

        {/* Breadcrumb */}
        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
            font-[Manrope]
            text-sm
            font-semibold
          "
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/80 transition hover:text-white"
          >
            <FiHome className="text-blue-200" />

            Home
          </Link>

          <FiChevronRight className="text-white/40" />

          <span className="text-blue-100">
            {title}
          </span>
        </div>

        {description && (
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              font-[Manrope]
              text-sm
              leading-6
              text-blue-100/70
            "
          >
            {description}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default PageBanner;