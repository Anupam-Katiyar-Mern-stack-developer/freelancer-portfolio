import { motion } from "motion/react";
import {
  FiAlertCircle,
  FiArrowRight,
} from "react-icons/fi";

const ProjectChallenges = ({
  challenges = [],
}) => {
  if (!challenges.length) return null;

  return (
    <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Engineering Challenges
          </p>

          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-slate-950">
            Problems that required deeper thinking.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {challenges.map((challenge, index) => (
            <motion.article
              key={challenge.title}
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
              className="group rounded-[28px] border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-xl text-amber-500">
                <FiAlertCircle />
              </div>

              <h3 className="mt-6 font-['Space_Grotesk'] text-xl font-bold text-slate-950">
                {challenge.title}
              </h3>

              <p className="mt-3 font-[Manrope] text-sm leading-7 text-slate-500">
                {challenge.description}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-[Manrope] text-xs font-bold text-blue-600">
                Solved through architecture

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectChallenges;