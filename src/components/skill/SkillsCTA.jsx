import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

const SkillsCTA = () => {
  const { siteData } = useSiteData();

  const cta = siteData?.skillsPage?.cta;

  if (!cta) return null;

  return (
    <section className="bg-white px-5 pb-24 sm:px-8 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[34px] bg-slate-950 p-8 text-white sm:p-12">

          <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-blue-500/30 blur-[100px]" />

          <div className="relative max-w-3xl">

            <h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              {cta.heading}
            </h2>

            <p className="mt-4 font-[Manrope] text-sm leading-7 text-slate-400">
              {cta.description}
            </p>

            <Link
              to={cta.link}
              className="group mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-[Manrope] text-sm font-bold text-slate-950 transition hover:bg-blue-500 hover:text-white"
            >
              {cta.button}

              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsCTA;