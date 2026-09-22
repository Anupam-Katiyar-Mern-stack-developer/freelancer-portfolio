import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5">
      <div className="text-center">

        <p className="font-['Space_Grotesk'] text-8xl font-bold text-blue-600">
          404
        </p>

        <h1 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold text-slate-950">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md font-[Manrope] text-sm leading-7 text-slate-500">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-[Manrope] text-sm font-bold text-white transition hover:bg-blue-600"
        >
          <FiArrowLeft />

          Back Home
        </Link>

      </div>
    </main>
  );
};

export default NotFound;