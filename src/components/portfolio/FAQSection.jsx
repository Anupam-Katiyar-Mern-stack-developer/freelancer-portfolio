import {
  AnimatePresence,
  motion,
} from "motion/react";

import { Link } from "react-router";

import {
  FiArrowUpRight,
  FiHelpCircle,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";
import useFAQ from "../../hooks/useFAQ";

const FAQSection = () => {
  const { siteData } = useSiteData();

  const faq = siteData?.faq;

  const {
    toggleFAQ,
    isOpen,
  } = useFAQ(0);

  if (!faq?.items?.length) {
    return null;
  }

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#F8FAFC]
        px-5
        py-20

        sm:px-8

        lg:px-10
        lg:py-28
      "
    >
      {/* ============================== */}
      {/* BACKGROUND DECORATION */}
      {/* ============================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-28
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
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-violet-100/50
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ============================== */}
        {/* CENTER HEADING */}
        {/* ============================== */}

        <motion.div
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
            duration: 0.6,
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
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
            {faq.eyebrow}
          </p>

          <h2
            className="
              mt-3
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
            {faq.heading}

            {faq.highlight && (
              <span className="block text-blue-600">
                {faq.highlight}
              </span>
            )}
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              font-[Manrope]
              text-sm
              leading-7
              text-slate-500

              sm:text-base
            "
          >
            {faq.description}
          </p>
        </motion.div>


        {/* ============================== */}
        {/* IMAGE + FAQ */}
        {/* ============================== */}

        <div
          className="
            mt-14
            grid
            gap-10

            lg:grid-cols-[0.85fr_1.15fr]
            lg:items-center
            lg:gap-14
          "
        >

          {/* ============================== */}
          {/* LEFT IMAGE */}
          {/* ============================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative"
          >
            {/* IMAGE GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                inset-10
                rounded-[40px]
                bg-gradient-to-br
                from-blue-300/30
                to-violet-300/30
                blur-3xl
              "
            />

            {/* OUTER CARD */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-3
                shadow-[0_25px_80px_rgba(15,23,42,0.08)]
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  bg-slate-100
                "
              >
                <img
                  src={faq.image}
                  alt="Frequently asked questions"
                  loading="lazy"
                  className="
                    h-[360px]
                    w-full
                    object-cover

                    sm:h-[430px]
                    lg:h-[500px]
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950/70
                    via-slate-950/10
                    to-transparent
                  "
                />

                {/* QUESTION ICON */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    text-xl
                    text-white
                    backdrop-blur-xl
                  "
                >
                  <FiHelpCircle />
                </div>


                {/* BOTTOM GLASS CARD */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    rounded-[22px]
                    border
                    border-white/20
                    bg-white/10
                    p-5
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      font-[Manrope]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-blue-200
                    "
                  >
                    Need Help?
                  </p>

                  <div
                    className="
                      mt-2
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div>
                      <h3
                        className="
                          font-['Space_Grotesk']
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        {faq.imageBadge}
                      </h3>

                      <p
                        className="
                          mt-1
                          font-[Manrope]
                          text-xs
                          leading-5
                          text-white/60
                        "
                      >
                        Feel free to reach out and discuss your project.
                      </p>
                    </div>

                    <Link
                      to="/contact"
                      aria-label="Contact me"
                      className="
                        group
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-slate-950
                        transition
                        duration-300

                        hover:bg-blue-600
                        hover:text-white
                      "
                    >
                      <FiArrowUpRight
                        className="
                          transition
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </Link>

                  </div>

                </div>

              </div>
            </div>
          </motion.div>


          {/* ============================== */}
          {/* RIGHT FAQ ACCORDION */}
          {/* ============================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="space-y-3"
          >

            {faq.items.map((item, index) => {
              const opened = isOpen(index);

              return (
                <motion.article
                  layout
                  key={item.question}
                  className={`
                    overflow-hidden
                    rounded-[20px]
                    border
                    bg-white
                    transition
                    duration-300

                    ${
                      opened
                        ? `
                          border-blue-200
                          shadow-[0_15px_45px_rgba(37,99,235,0.08)]
                        `
                        : `
                          border-slate-200
                          hover:border-slate-300
                        `
                    }
                  `}
                >

                  {/* ============================== */}
                  {/* QUESTION */}
                  {/* ============================== */}

                  <button
                    type="button"
                    onClick={() =>
                      toggleFAQ(index)
                    }
                    aria-expanded={opened}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-5
                      py-5
                      text-left

                      sm:px-6
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        gap-4
                      "
                    >

                      {/* NUMBER */}

                      <span
                        className={`
                          mt-0.5
                          min-w-[22px]
                          font-['Space_Grotesk']
                          text-xs
                          font-bold
                          transition

                          ${
                            opened
                              ? "text-blue-600"
                              : "text-slate-300"
                          }
                        `}
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>


                      {/* QUESTION TEXT */}

                      <span
                        className={`
                          font-['Space_Grotesk']
                          text-[15px]
                          font-bold
                          leading-6
                          transition
                          duration-300

                          sm:text-base

                          ${
                            opened
                              ? "text-blue-600"
                              : "text-slate-900"
                          }
                        `}
                      >
                        {item.question}
                      </span>

                    </div>


                    {/* PLUS / MINUS */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition
                        duration-300

                        ${
                          opened
                            ? `
                              rotate-0
                              bg-blue-600
                              text-white
                            `
                            : `
                              bg-slate-50
                              text-slate-500
                            `
                        }
                      `}
                    >
                      {opened ? (
                        <FiMinus />
                      ) : (
                        <FiPlus />
                      )}
                    </span>

                  </button>


                  {/* ============================== */}
                  {/* ANSWER */}
                  {/* ============================== */}

                  <AnimatePresence initial={false}>

                    {opened && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className="
                            border-t
                            border-slate-100
                            px-5
                            pb-5
                            pt-4

                            sm:px-6
                          "
                        >
                          <p
                            className="
                              pl-[38px]
                              font-[Manrope]
                              text-sm
                              leading-7
                              text-slate-500
                            "
                          >
                            {item.answer}
                          </p>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.article>
              );
            })}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FAQSection;