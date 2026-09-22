import { Link } from "react-router";

import {
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

const ProjectsCTA = () => {
  const { siteData } = useSiteData();

  const cta =
    siteData?.projectsPage?.cta;

  if (!cta) return null;

  return (
    <section className="bg-white px-5 pb-24 sm:px-8 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[34px] bg-slate-950 p-8 text-white sm:p-12 lg:p-14">

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/30 blur-[110px]" />

          <div className="absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-3xl">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-blue-300">
                <FiMessageCircle />
              </div>

              <h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
                {cta.heading}
              </h2>

              <p className="mt-4 max-w-2xl font-[Manrope] text-sm leading-7 text-slate-400">
                {cta.description}
              </p>

            </div>

            <Link
              to={cta.link}
              className="group inline-flex w-fit items-center gap-3 rounded-2xl bg-white px-6 py-4 font-[Manrope] text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
            >
              {cta.button}

              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProjectsCTA;