import { FiArrowDown } from "react-icons/fi";

const ProjectArchitecture = ({
  architecture = [],
}) => {
  if (!architecture.length) {
    return null;
  }

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

      <div className="mx-auto max-w-7xl">

        <div className="max-w-2xl">
          <p className="font-[Manrope] text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
            Architecture
          </p>

          <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.04em] text-slate-950">
            How the system is structured.
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center">

          {architecture.map((item, index) => (
            <div
              key={`${item.label}-${item.value}`}
              className="flex w-full max-w-2xl flex-col items-center"
            >
              <div className="w-full rounded-[24px] border border-slate-200 bg-slate-50 p-6 text-center">

                <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  {item.label}
                </p>

                <p className="mt-2 font-['Space_Grotesk'] text-xl font-bold text-slate-950">
                  {item.value}
                </p>

              </div>

              {index < architecture.length - 1 && (
                <div className="flex h-14 items-center justify-center text-slate-300">
                  <FiArrowDown />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectArchitecture;