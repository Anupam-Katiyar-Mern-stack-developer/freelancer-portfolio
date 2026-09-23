import { motion } from "motion/react";
import { FiCheck } from "react-icons/fi";

const ProjectFeatures = ({ features = [] }) => {
  if (!features.length) return null;

  return (
    <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Core Features
          </p>

          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-slate-950">
            What the product can do.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="flex items-start gap-4 rounded-[22px] border border-slate-200 bg-white p-5"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiCheck />
              </span>

              <p className="font-[Manrope] text-sm font-semibold leading-6 text-slate-700">
                {feature}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectFeatures;