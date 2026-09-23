import { motion } from "motion/react";

import useSiteData from "../../hooks/useSiteData";

const ServiceProcess = () => {
  const { siteData } = useSiteData();

  const process =
    siteData?.servicesPage?.process;

  if (!process?.length) {
    return null;
  }

  return (
    <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Development Process
          </p>

          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-slate-950">
            From requirement to working product.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {process.map((item, index) => (
            <motion.article
              key={item.number}
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
              className="rounded-[26px] border border-slate-200 bg-white p-6"
            >
              <span className="font-['Space_Grotesk'] text-5xl font-bold text-slate-100">
                {item.number}
              </span>

              <h3 className="mt-5 font-['Space_Grotesk'] text-xl font-bold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 font-[Manrope] text-sm leading-7 text-slate-500">
                {item.description}
              </p>
            </motion.article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;