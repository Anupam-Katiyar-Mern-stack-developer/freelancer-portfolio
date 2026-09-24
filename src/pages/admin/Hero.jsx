import {
  FiAlertCircle,
  FiCheckCircle,
  FiRefreshCw,
} from "react-icons/fi";

import AdminPageHeader from "../../components/admin/AdminPageHeader";
import AdminForm from "../../components/admin/AdminForm";

import useAdminHero from "../../hooks/admin/useAdminHero";

import {
  heroFormFields,
} from "../../configs/admin/hero.config";


const Hero = () => {
  const {
    formValues,

    loading,
    updating,

    error,
    updateError,
    updateSuccess,

    updateHero,
    reloadHero,
  } = useAdminHero();


  /* ============================= */
  /* UPDATE HERO */
  /* ============================= */

  const handleSubmit = async (
    values
  ) => {
    try {
      await updateHero(values);
    } catch {
      /*
        Error Redux thunk + slice
        already handle kar rahe hain.
      */
    }
  };


  /* ============================= */
  /* RETRY FETCH */
  /* ============================= */

  const handleRetry = async () => {
    try {
      await reloadHero();
    } catch {
      /*
        Redux handles error.
      */
    }
  };


  return (
    <div className="space-y-7">

      {/* ============================= */}
      {/* PAGE HEADER */}
      {/* ============================= */}

      <AdminPageHeader
        eyebrow="Website Content"
        title="Hero Section"
        description="Manage the main content displayed at the top of your portfolio homepage."
      />


      {/* ============================= */}
      {/* FETCH ERROR */}
      {/* ============================= */}

      {error && (
        <div
          className="
            flex
            flex-col
            gap-4
            rounded-2xl
            border
            border-amber-200
            bg-amber-50
            px-4
            py-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              items-start
              gap-3
            "
          >
            <span
              className="
                mt-0.5
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-amber-100
                text-amber-700
              "
            >
              <FiAlertCircle />
            </span>

            <div>
              <p
                className="
                  font-[Manrope]
                  text-sm
                  font-bold
                  text-amber-900
                "
              >
                Hero data could not be loaded
              </p>

              <p
                className="
                  mt-1
                  font-[Manrope]
                  text-xs
                  leading-5
                  text-amber-700
                "
              >
                {error}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRetry}
            disabled={loading}
            className="
              inline-flex
              min-h-10
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-amber-300
              bg-white
              px-4
              font-[Manrope]
              text-xs
              font-bold
              text-amber-800
              transition

              hover:bg-amber-100

              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <FiRefreshCw
              className={
                loading
                  ? "animate-spin"
                  : ""
              }
            />

            Retry
          </button>
        </div>
      )}


      {/* ============================= */}
      {/* UPDATE SUCCESS */}
      {/* ============================= */}

      {updateSuccess && (
        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-emerald-200
            bg-emerald-50
            px-4
            py-3
          "
        >
          <FiCheckCircle
            className="
              shrink-0
              text-lg
              text-emerald-600
            "
          />

          <p
            className="
              font-[Manrope]
              text-xs
              font-semibold
              text-emerald-700
            "
          >
            Hero section updated successfully.
          </p>
        </div>
      )}


      {/* ============================= */}
      {/* UPDATE ERROR */}
      {/* ============================= */}

      {updateError && (
        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-red-200
            bg-red-50
            px-4
            py-3
          "
        >
          <FiAlertCircle
            className="
              shrink-0
              text-lg
              text-red-500
            "
          />

          <p
            className="
              font-[Manrope]
              text-xs
              font-semibold
              text-red-600
            "
          >
            {updateError}
          </p>
        </div>
      )}


      {/* ============================= */}
      {/* HERO FORM CARD */}
      {/* ============================= */}

      <div
        className="
          overflow-hidden
          rounded-[22px]
          border
          border-slate-200
          bg-white
          shadow-[0_10px_40px_rgba(15,23,42,0.03)]
        "
      >

        {/* CARD HEADER */}

        <div
          className="
            border-b
            border-slate-100
            px-5
            py-5

            sm:px-6
          "
        >
          <h2
            className="
              font-['Space_Grotesk']
              text-lg
              font-bold
              tracking-[-0.03em]
              text-slate-950
            "
          >
            Hero Content
          </h2>

          <p
            className="
              mt-1
              font-[Manrope]
              text-xs
              leading-5
              text-slate-500
            "
          >
            Edit your introduction, headline, animated roles and
            call-to-action buttons.
          </p>
        </div>


        {/* ============================= */}
        {/* LOADING */}
        {/* ============================= */}

        {loading ? (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              p-5

              sm:p-6
              md:grid-cols-2
            "
          >
            {Array.from({
              length: 8,
            }).map((_, index) => (
              <div
                key={index}
                className={
                  index === 4
                    ? "md:col-span-2"
                    : ""
                }
              >
                <div
                  className="
                    mb-2
                    h-3
                    w-24
                    animate-pulse
                    rounded
                    bg-slate-100
                  "
                />

                <div
                  className="
                    h-11
                    w-full
                    animate-pulse
                    rounded-xl
                    bg-slate-100
                  "
                />
              </div>
            ))}
          </div>
        ) : (

          /* ============================= */
          /* FORM */
          /* ============================= */

          <div
            className="
              p-5

              sm:p-6
            "
          >
            <AdminForm
              fields={heroFormFields}
              initialValues={formValues}
              submitLabel="Save Hero Changes"
              loading={updating}
              onSubmit={handleSubmit}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default Hero;