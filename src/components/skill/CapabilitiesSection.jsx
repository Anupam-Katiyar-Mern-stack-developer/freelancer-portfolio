import { motion } from "motion/react";

import useSiteData from "../../hooks/useSiteData";

import { iconMap } from "../../utils/iconMap";

const CapabilitiesSection = () => {
  const { siteData } = useSiteData();

  const capabilities =
    siteData?.skillsPage?.capabilities;

  if (!capabilities?.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Capabilities
          </p>

          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-slate-950">
            What I can build with this stack.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">

          {capabilities.map((item, index) => {
            const Icon = iconMap[item.icon];

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-[0_18px_60px_rgba(15,23,42,0.04)]
                  transition

                  hover:border-blue-200
                  hover:shadow-[0_30px_80px_rgba(37,99,235,0.10)]
                "
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-950 text-xl text-white transition group-hover:bg-blue-600">
                  {Icon && <Icon />}
                </div>

                <h3 className="mt-6 font-['Space_Grotesk'] text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 font-[Manrope] text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;