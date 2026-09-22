import useSiteData from "../../hooks/useSiteData";

const CareerSection = () => {
  const { siteData } = useSiteData();

  const about = siteData?.aboutPage;

  if (!about) {
    return null;
  }

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

        {/* Experience */}
        <div>
          <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Experience
          </p>

          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-slate-950">
            Professional journey
          </h2>

          <div className="mt-8 space-y-4">

            {about.experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-start justify-between gap-5">

                  <div>
                    <h3 className="font-['Space_Grotesk'] text-lg font-bold text-slate-950">
                      {item.role}
                    </h3>

                    <p className="mt-1 font-[Manrope] text-sm font-semibold text-blue-600">
                      {item.company}
                    </p>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1.5 font-[Manrope] text-xs font-bold text-slate-500">
                    {item.period}
                  </span>

                </div>

                <p className="mt-4 font-[Manrope] text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </article>
            ))}

          </div>
        </div>


        {/* Education */}
        <div>
          <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
            Education
          </p>

          <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-slate-950">
            Academic background
          </h2>

          <div className="mt-8 space-y-4">

            {about.education.map((item) => (
              <article
                key={item.shortName}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center justify-between gap-5">

                  <div>
                    <p className="font-['Space_Grotesk'] text-xl font-bold text-slate-950">
                      {item.shortName}
                    </p>

                    <p className="mt-2 font-[Manrope] text-sm text-slate-500">
                      {item.degree}
                    </p>
                  </div>

                  <span className="rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5 font-[Manrope] text-xs font-bold text-violet-600">
                    {item.status}
                  </span>

                </div>
              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default CareerSection;