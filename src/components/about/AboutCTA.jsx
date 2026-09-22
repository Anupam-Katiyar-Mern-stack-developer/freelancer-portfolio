import {
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";

import useSiteData from "../../hooks/useSiteData";

const AboutCTA = () => {
  const { siteData } = useSiteData();

  const cta = siteData?.aboutPage?.cta;

  if (!cta) return null;

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">

      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[34px] bg-slate-950 p-8 text-white sm:p-12 lg:p-16">

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/30 blur-[110px]" />

          <div className="relative">

            <h2 className="max-w-3xl font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
              {cta.heading}
            </h2>

            <p className="mt-4 max-w-2xl font-[Manrope] text-sm leading-7 text-slate-400 sm:text-base">
              {cta.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={cta.primaryLink}
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-[Manrope] text-sm font-bold text-slate-950 transition hover:bg-blue-500 hover:text-white"
              >
                {cta.primaryText}

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>

              <a
                href={cta.secondaryLink}
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 font-[Manrope] text-sm font-bold text-white transition hover:bg-white/10"
              >
                {cta.secondaryText}

                <FiArrowUpRight />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;