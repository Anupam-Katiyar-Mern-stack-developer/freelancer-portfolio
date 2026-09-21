import useSiteData from "../../hooks/useSiteData.js";
import Loader from "../common/Loader.jsx";

const HeroSection = () => {
  const { siteData, loading, error } = useSiteData();

  console.log("Hero section data:", siteData);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <p className="text-sm font-medium text-red-500">
          {error}
        </p>
      </section>
    );
  }

  if (!siteData) {
    return null;
  }

  const { settings, hero } = siteData;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 py-20">
      
      {/* Background */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="pointer-events-none absolute right-[-100px] top-10 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">

        <div className="max-w-4xl">

          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <span className="h-2 w-2 rounded-full bg-green-500" />

            {hero.badge}
          </span>

          <p className="mb-4 text-lg font-medium text-slate-500">
            Hi, I'm{" "}
            <span className="text-slate-900">
              {settings.developerName}
            </span>
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-8xl">
            {hero.heading}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {hero.description}
          </p>

          <p className="mt-4 font-semibold text-blue-600">
            {settings.professionalTitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl">
              {hero.primaryButton}
            </button>

            <button className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg">
              {hero.secondaryButton}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;