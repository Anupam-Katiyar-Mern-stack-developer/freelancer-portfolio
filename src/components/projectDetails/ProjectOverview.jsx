const ProjectOverview = ({ project }) => {
  const details = project.details;

  if (!details) return null;

  const meta = [
    {
      label: "Role",
      value: details.role,
    },
    {
      label: "Status",
      value: details.status,
    },
    {
      label: "Year",
      value: details.year,
    },
    {
      label: "Duration",
      value: details.duration,
    },
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          <div>
            <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Project Overview
            </p>

            <h2 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Building a complete product ecosystem.
            </h2>

            <p className="mt-6 max-w-3xl font-[Manrope] text-base leading-8 text-slate-500">
              {details.overview}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">

            {meta.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
              >
                <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {item.label}
                </p>

                <p className="mt-2 font-['Space_Grotesk'] text-lg font-bold text-slate-950">
                  {item.value}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;