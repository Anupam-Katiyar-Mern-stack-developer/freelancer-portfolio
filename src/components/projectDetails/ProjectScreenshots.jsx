import { motion } from "motion/react";

const ProjectScreenshots = ({
  screenshots = [],
  title,
}) => {
  if (!screenshots.length) return null;

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
            Product Screens
          </p>

          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-slate-950">
            A closer look at the product.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {screenshots.map(
            (screenshot, index) => (
              <motion.div
                key={screenshot}
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
                className={`
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-slate-50
                  p-3
                  shadow-sm

                  ${
                    index === 0
                      ? "md:col-span-2"
                      : ""
                  }
                `}
              >
                <img
                  src={screenshot}
                  alt={`${title} screenshot ${index + 1}`}
                  loading="lazy"
                  className="w-full rounded-[20px] object-cover object-top"
                />
              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default ProjectScreenshots;