import { motion } from "motion/react";

import {
    FiCheckCircle,
    FiMessageCircle,
} from "react-icons/fi";

import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const initials = review.clientName
        ?.split(" ")
        .map((word) => word[0])
        .slice(0, 2)
        .join("");

    return (
        <motion.article
            whileHover={{
                y: -8,
            }}
            transition={{
                duration: 0.3,
            }}
            className="
        group
        relative
        flex
        h-full
        min-h-[390px]
        flex-col
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200/80
        bg-white
        p-6
        shadow-[0_20px_60px_rgba(15,23,42,0.05)]
        transition-all
        duration-500

        hover:border-blue-200
        hover:shadow-[0_30px_90px_rgba(37,99,235,0.12)]

        sm:p-7
      "
        >
            {/* glow */}
            <div
                className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-52
          w-52
          rounded-full
          bg-blue-200/30
          opacity-0
          blur-[80px]
          transition
          duration-500

          group-hover:opacity-100
        "
            />

            {/* Quote icon */}
            <div
                className="
          relative
          mb-7
          flex
          items-start
          justify-between
        "
            >
                <div
                    className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-slate-950
            text-xl
            text-white
            shadow-lg
            transition
            duration-300

            group-hover:rotate-[-6deg]
            group-hover:bg-blue-600
          "
                >
                    <FiMessageCircle />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">
                    {Array.from({
                        length: 5,
                    }).map((_, index) => (
                        <FaStar
                            key={index}
                            className={
                                index < review.rating
                                    ? "text-amber-400"
                                    : "text-slate-200"
                            }
                        />
                    ))}
                </div>
            </div>

            {/* Review */}
            <p
                className="
          relative
          flex-1
          font-['Space_Grotesk']
          text-lg
          font-medium
          leading-8
          tracking-[-0.02em]
          text-slate-700

          sm:text-[19px]
        "
            >
                “{review.review}”
            </p>

            {/* Project */}
            <div className="relative mt-7">
                <span
                    className="
            inline-flex
            rounded-full
            border
            border-blue-100
            bg-blue-50
            px-3
            py-1.5
            font-[Manrope]
            text-[10px]
            font-extrabold
            uppercase
            tracking-[0.13em]
            text-blue-600
          "
                >
                    {review.project}
                </span>
            </div>

            <div className="my-6 h-px bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

            {/* Client */}
            <div className="relative flex items-center gap-4">

                {review.avatar ? (
                    <img
                        src={review.avatar}
                        alt={review.clientName}
                        loading="lazy"
                        className="h-12 w-12 rounded-full object-cover ring-4 ring-slate-100"
                    />
                ) : (
                    <div
                        className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-blue-600
              to-violet-600
              font-['Space_Grotesk']
              text-sm
              font-bold
              text-white
              shadow-lg
              ring-4
              ring-blue-50
            "
                    >
                        {initials}
                    </div>
                )}

                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                        <h4
                            className="
                truncate
                font-['Space_Grotesk']
                text-sm
                font-bold
                text-slate-950
              "
                        >
                            {review.clientName}
                        </h4>

                        {review.verified && (
                            <FiCheckCircle
                                className="shrink-0 text-blue-600"
                                title="Verified client"
                            />
                        )}
                    </div>

                    <p
                        className="
              mt-1
              truncate
              font-[Manrope]
              text-xs
              font-medium
              text-slate-400
            "
                    >
                        {review.designation}
                        {review.company && ` • ${review.company}`}
                    </p>
                </div>
            </div>

            {/* bottom premium accent */}
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

          group-hover:w-[75%]
        "
            />
        </motion.article>
    );
};

export default ReviewCard;