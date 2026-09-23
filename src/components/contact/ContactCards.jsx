import { motion } from "motion/react";

import {
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

const iconMap = {
  phone: FiPhone,
  email: FiMail,
  location: FiMapPin,
};

const ContactCards = () => {
  const { siteData } = useSiteData();

  const cards =
    siteData?.contactPage?.contactCards || [];

  if (!cards.length) {
    return null;
  }

  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-5 md:grid-cols-3">

          {cards.map((card, index) => {
            const Icon = iconMap[card.type];

            const content = (
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  h-full
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-[0_15px_50px_rgba(15,23,42,0.04)]
                  transition
                  duration-300

                  hover:border-blue-200
                  hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)]
                "
              >
                <div
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-blue-100/0
                    blur-3xl
                    transition

                    group-hover:bg-blue-100/80
                  "
                />

                <div className="relative">

                  <div className="flex items-start justify-between">

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-slate-950
                        text-lg
                        text-white
                        transition

                        group-hover:bg-blue-600
                      "
                    >
                      {Icon && <Icon />}
                    </div>

                    {card.href && (
                      <FiArrowUpRight
                        className="
                          text-lg
                          text-slate-300
                          transition

                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          group-hover:text-blue-600
                        "
                      />
                    )}

                  </div>

                  <p
                    className="
                      mt-6
                      font-[Manrope]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-slate-400
                    "
                  >
                    {card.label}
                  </p>

                  <h3
                    className="
                      mt-2
                      break-words
                      font-['Space_Grotesk']
                      text-lg
                      font-bold
                      text-slate-950
                    "
                  >
                    {card.value}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-[Manrope]
                      text-xs
                      leading-6
                      text-slate-500
                    "
                  >
                    {card.description}
                  </p>

                </div>

              </motion.div>
            );

            if (card.href) {
              return (
                <a
                  key={card.label}
                  href={card.href}
                  className="block"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={card.label}>
                {content}
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ContactCards;