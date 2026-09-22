import useSiteData from "../../hooks/useSiteData";

const LearningSection = () => {
  const { siteData } = useSiteData();

  const items =
    siteData?.skillsPage?.currentlyLearning;

  if (!items?.length) return null;

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

      <div className="mx-auto max-w-7xl">

        <div
          className="
            rounded-[30px]
            border
            border-slate-200
            bg-slate-50
            p-7

            sm:p-10

            lg:flex
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
              Continuous Learning
            </p>

            <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-slate-950">
              Currently improving
            </h2>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 lg:mt-0 lg:max-w-xl lg:justify-end">

            {items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 font-[Manrope] text-xs font-bold text-slate-600 shadow-sm"
              >
                {item}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningSection;